import React from 'react';
import { useCart } from '../context/CartContext';
import { X, ShoppingBag, Plus, Minus, Trash2 } from 'lucide-react';

export default function CartDrawer({ isOpen, setIsOpen }) {
    const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

    return (
        <>
            {/* Dark Overlay - Background ko dhakne ke liye */}
            <div 
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsOpen(false)}
            />

            {/* Side Drawer */}
            <div className={`fixed top-0 right-0 h-full w-full md:w-[400px] bg-white z-[101] shadow-2xl transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                
                {/* Header */}
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <ShoppingBag size={20} />
                        <h2 className="text-xl font-serif italic">Your Fragrance Bag</h2>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <X size={24} />
                    </button>
                </div>

                {/* Cart Items List */}
                <div className="p-6 h-[calc(100vh-250px)] overflow-y-auto no-scrollbar">
                    {cartItems.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                            <p className="text-gray-400 italic">Your bag is currently empty.</p>
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="text-[10px] uppercase tracking-widest border-b border-black pb-1 hover:text-gray-500"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex gap-4">
                                    <div className="w-24 h-32 bg-gray-50 shrink-0">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale" />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between py-1">
                                        <div>
                                            <div className="flex justify-between items-start">
                                                <h3 className="font-serif italic text-lg leading-tight">{item.name}</h3>
                                                <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-black">
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                            <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">{item.size}</p>
                                        </div>

                                        <div className="flex justify-between items-center">
                                            {/* Quantity Controls */}
                                            <div className="flex items-center border border-gray-200">
                                                <button 
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="p-2 hover:bg-gray-50"
                                                >
                                                    <Minus size={12} />
                                                </button>
                                                <span className="px-3 text-xs font-bold">{item.quantity}</span>
                                                <button 
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="p-2 hover:bg-gray-50"
                                                >
                                                    <Plus size={12} />
                                                </button>
                                            </div>
                                            <p className="font-bold text-sm">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer - Total & Checkout */}
                {cartItems.length > 0 && (
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-100 space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400 uppercase tracking-[0.2em] text-[10px]">Subtotal</span>
                            <span className="text-xl font-bold">₹{cartTotal.toLocaleString('en-IN')}</span>
                        </div>
                        <button className="w-full bg-black text-white py-4 text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-gray-900 transition-colors">
                            Proceed to Checkout
                        </button>
                        <p className="text-[9px] text-center text-gray-400 uppercase tracking-widest">
                            Shipping and taxes calculated at checkout
                        </p>
                    </div>
                )}
            </div>
        </>
    );
}