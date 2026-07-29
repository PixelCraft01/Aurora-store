import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { ShoppingBag, Heart, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

export default function ProductDetail() {
    const { productId } = useParams();
    const { addToCart } = useCart();
    const { addToWishlist, wishlistItems } = useWishlist();
    const [quantity, setQuantity] = useState(1);

    // Dummy Data (Baad mein aap ise API se fetch karoge)
    const product = {
        id: productId,
        name: "Oud Noir de Arome",
        price: 4999,
        description: "A mysterious blend of rare oud, dark rose, and spicy saffron. This fragrance captures the essence of midnight in a bottle, designed for those who command presence.",
        notes: {
            top: "Saffron, Nutmeg",
            heart: "Dark Rose, Jasmine",
            base: "Agarwood (Oud), Amber, Patchouli"
        },
        images: ["https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop"]
    };

    const isWishlisted = wishlistItems.find(item => item.id === product.id);

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto font-sans animate-in fade-in duration-700">
            <div className="grid md:grid-cols-2 gap-16 items-start">
                
                {/* Left: Product Image */}
                <div className="bg-[#fafafa] rounded-sm overflow-hidden group">
                    <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                </div>

                {/* Right: Product Info */}
                <div className="space-y-10">
                    <div className="space-y-4">
                        <p className="text-[10px] tracking-[0.4em] text-gray-400 uppercase">Artisanal Fragrance</p>
                        <h1 className="text-4xl font-light tracking-tight text-black">{product.name}</h1>
                        <p className="text-xl font-medium tracking-wide text-neutral-800">₹{product.price.toLocaleString()}</p>
                    </div>

                    <div className="space-y-6">
                        <p className="text-sm text-gray-500 leading-relaxed font-light">
                            {product.description}
                        </p>

                        {/* Olfactory Notes */}
                        <div className="grid grid-cols-3 gap-4 py-8 border-y border-gray-100">
                            <div className="text-center space-y-1">
                                <p className="text-[9px] uppercase tracking-widest text-gray-400">Top</p>
                                <p className="text-[11px] font-medium uppercase">{product.notes.top}</p>
                            </div>
                            <div className="text-center space-y-1">
                                <p className="text-[9px] uppercase tracking-widest text-gray-400">Heart</p>
                                <p className="text-[11px] font-medium uppercase">{product.notes.heart}</p>
                            </div>
                            <div className="text-center space-y-1">
                                <p className="text-[9px] uppercase tracking-widest text-gray-400">Base</p>
                                <p className="text-[11px] font-medium uppercase">{product.notes.base}</p>
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <button 
                                onClick={() => addToCart({ ...product, quantity })}
                                className="flex-1 bg-black text-white py-5 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-[#111] transition-all flex items-center justify-center gap-3 active:scale-95"
                            >
                                <ShoppingBag size={16} />
                                Add to Bag
                            </button>
                            <button 
                                onClick={() => addToWishlist(product)}
                                className={`px-6 border transition-all ${isWishlisted ? 'border-red-100 bg-red-50 text-red-500' : 'border-gray-200 hover:border-black'}`}
                            >
                                <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} strokeWidth={1} />
                            </button>
                        </div>
                    </div>

                    {/* Trust Badges */}
                    <div className="grid grid-cols-1 gap-4 pt-10">
                        <div className="flex items-center gap-4 text-gray-500">
                            <Truck size={18} strokeWidth={1} />
                            <p className="text-[10px] uppercase tracking-widest">Free Express Shipping</p>
                        </div>
                        <div className="flex items-center gap-4 text-gray-500">
                            <ShieldCheck size={18} strokeWidth={1} />
                            <p className="text-[10px] uppercase tracking-widest">Authenticity Guaranteed</p>
                        </div>
                        <div className="flex items-center gap-4 text-gray-500">
                            <RotateCcw size={18} strokeWidth={1} />
                            <p className="text-[10px] uppercase tracking-widest">14-Day Boutique Returns</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}