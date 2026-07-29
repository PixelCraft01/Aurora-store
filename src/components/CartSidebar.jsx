import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { X, ShoppingBag, Trash2, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from 'react-router-dom';

export default function CartSidebar() {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  // 1. Background Scroll Lock Logic
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isCartOpen]);

  const total = cartItems.reduce((acc, item) => acc + item.price * (item.qty || 1), 0);

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[100] cursor-crosshair"
          />

          {/* Sidebar Container */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-[#FAF9F6] z-[101] shadow-[-20px_0_50px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden"
          >
            <div className="absolute inset-0 opacity-[0.03] grainy-noise pointer-events-none"></div>

            {/* Header */}
            <div className="relative px-8 py-10 flex shadow-md justify-between items-center border-b border-gray-100 bg-[#FAF9F6]">
              <div className="flex items-center gap-4">
                <ShoppingBag size={20} strokeWidth={1.5} />
                <h2 className="text-2xl font-serif italic tracking-tighter text-black">Your Bag</h2>
                <span className="text-[10px] font-bold bg-black text-white px-2 py-0.5 rounded-full">
                  {cartItems.length}
                </span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:rotate-90 transition-transform duration-500 text-black"
              >
                <X size={24} strokeWidth={1} />
              </button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto px-8 py-6 space-y-8 no-scrollbar">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center space-y-4 opacity-30">
                  <p className="font-serif italic text-lg text-black">The scent is missing...</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="text-[10px] uppercase tracking-[0.3em] border-b border-black pb-1 text-black"
                  >
                    Continue Exploring
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <motion.div
                    layout
                    key={item.id}
                    className="flex gap-6 group"
                  >
                    {/* Item Image */}
                    <div className="w-24 h-32 bg-white overflow-hidden rounded-sm relative shrink-0 shadow-sm">
                      <img
                        src={item.image || item.img}
                        alt={item.name || item.title}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex flex-col justify-between flex-1 py-1">
                      <div>
                        <div className="flex justify-between items-start text-black">
                          <h3 className="text-[11px] font-bold uppercase tracking-widest leading-tight w-2/3">
                            {item.name || item.title}
                          </h3>
                          <p className="text-sm font-serif italic">₹{(item.price * (item.qty || 1)).toLocaleString('en-IN')}</p>
                        </div>
                        <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-tighter">
                          {item.selectedSize || "100ml"} / Eau de Parfum
                        </p>
                      </div>

                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center border border-gray-200 rounded-full px-3 py-1 gap-4 text-black">
                          <button
                            onClick={() => item.qty > 1 ? updateQuantity(item.id, -1) : removeFromCart(item.id)}
                            className="opacity-40 hover:opacity-100 p-1 transition-opacity"
                          >
                            <Minus size={10} />
                          </button>

                          <span className="text-[10px] font-bold w-4 text-center">{item.qty || 1}</span>

                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="opacity-40 hover:opacity-100 p-1 transition-opacity"
                          >
                            <Plus size={10} />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-300 hover:text-red-400 transition-colors p-1"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer / Checkout */}
            {cartItems.length > 0 && (
              <div className="relative px-8 py-6 bg-white border-t border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400">Total Amount</span>
                    <p className="text-[8px] text-gray-400 uppercase tracking-tighter mt-0.5 italic">Inclusive of all taxes</p>
                  </div>
                  <div className="flex items-baseline gap-1 text-black">
                    <span className="text-[10px] font-medium text-gray-400">INR</span>
                    <span className="text-2xl font-serif italic">₹{total.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="group relative w-full bg-black text-white py-5 text-[10px] font-bold uppercase tracking-[0.5em] overflow-hidden transition-all active:scale-[0.98] shadow-2xl"
                >
                  <span className="relative z-10">
                    Proceed to Checkout
                  </span>
                  <div className="absolute inset-0 bg-[#a15e5e9c] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                </button>

                <p className="mt-3 text-[8px] text-gray-400 text-center tracking-widest uppercase opacity-60">
                  Free Shipping & Complimentary Samples
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}