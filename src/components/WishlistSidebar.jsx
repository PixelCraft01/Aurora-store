import React, { useEffect } from 'react';
import { X, ShoppingBag, Trash2, Heart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

export default function WishlistSidebar() {
    const { wishlistItems = [], isWishlistOpen, setIsWishlistOpen, removeFromWishlist } = useWishlist();
    const { addToCart } = useCart();

    // 1. Body scroll lock: Jab wishlist khule toh background scroll na ho
    useEffect(() => {
        if (isWishlistOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isWishlistOpen]);

    if (!isWishlistOpen) return null;

    return (
        <div className="fixed inset-0 z-[150] flex justify-end">
            {/* Dark Overlay */}
            <div 
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500" 
                onClick={() => setIsWishlistOpen(false)} 
            />
            
            {/* Sidebar Panel */}
            <div className="relative w-full max-w-[400px] bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-500">
                
                {/* Header */}
                <div className="px-8 py-10 flex justify-between items-center border-b border-gray-50">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <h2 className="text-2xl font-serif italic text-black tracking-tight">My Wishlist</h2>
                            <span className="text-[10px] bg-black text-white px-2 py-0.5 rounded-full font-bold">
                                {wishlistItems.length}
                            </span>
                        </div>
                        <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 mt-1">Saved Fragrances</p>
                    </div>
                    <button 
                        onClick={() => setIsWishlistOpen(false)}
                        className="p-2 hover:rotate-90 transition-transform duration-500 text-black"
                    >
                        <X size={24} strokeWidth={1} />
                    </button>
                </div>

                {/* Items List */}
                <div className="flex-1 overflow-y-auto p-8 space-y-8 no-scrollbar">
                    {wishlistItems.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-40">
                            <Heart size={40} strokeWidth={1} className="text-gray-300" />
                            <p className="font-serif italic text-lg">Your collection is empty</p>
                            <button 
                                onClick={() => setIsWishlistOpen(false)}
                                className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-black pb-1"
                            >
                                Continue Exploring
                            </button>
                        </div>
                    ) : (
                        wishlistItems.map((item) => (
                            <div key={item.id} className="flex gap-6 group border-b border-gray-50 pb-8 last:border-0">
                                {/* Increased height for perfume bottles */}
                                <div className="w-24 h-32 bg-[#FAF9F6] overflow-hidden flex-shrink-0 relative">
                                    <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                                    />
                                </div>
                                
                                <div className="flex-1 flex flex-col justify-between py-1">
                                    <div>
                                        <h3 className="text-[11px] font-bold uppercase tracking-widest text-black leading-tight">
                                            {item.name}
                                        </h3>
                                        <p className="text-sm font-serif italic mt-1 text-gray-600">
                                            ₹{item.price.toLocaleString('en-IN')}
                                        </p>
                                    </div>
                                    
                                    <div className="flex justify-between items-center mt-4">
                                        <button 
                                            onClick={() => { addToCart(item); removeFromWishlist(item.id); }}
                                            className="text-[9px] uppercase tracking-[0.2em] font-bold flex items-center gap-2 text-black hover:text-[#5D3E51] transition-colors"
                                        >
                                            <ShoppingBag size={12} /> Add to Bag
                                        </button>
                                        <button 
                                            onClick={() => removeFromWishlist(item.id)}
                                            className="text-gray-300 hover:text-red-500 transition-colors"
                                            title="Remove"
                                        >
                                            <Trash2 size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}