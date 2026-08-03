import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

export default function OrderSuccess() {
    const { clearCart } = useCart();

    // Jab ye page load ho, cart apne aap saaf ho jani chahiye
    useEffect(() => {
        if (clearCart) clearCart();
    }, []);

    return (
        <div className="min-h-[85vh] flex items-center justify-center px-6 bg-[#FAF9F6]">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-lg w-full text-center space-y-8 bg-white p-10 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-sm relative overflow-hidden"
            >
                {/* Background Decorative Element */}
                <div className="absolute top-0 left-0 w-full h-1 bg-black"></div>

                <div className="flex justify-center">
                    <motion.div 
                        initial={{ rotate: -20, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
                        className="relative"
                    >
                        <CheckCircle size={80} className="text-black" strokeWidth={1} />
                        <motion.div
                            animate={{ opacity: [0, 1, 0], scale: [1, 1.5, 2] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="absolute inset-0 bg-black/5 rounded-full"
                        />
                    </motion.div>
                </div>

                <div className="space-y-3">
                    <h1 className="text-4xl font-serif italic text-black tracking-tight">Order Confirmed</h1>
                    <p className="text-gray-400 text-[11px] uppercase tracking-[0.3em] font-bold">
                        Welcome to the world of Aurora
                    </p>
                </div>

                <div className="py-8 border-y border-gray-100 space-y-4">
                    <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                        Your signature scent is being carefully packaged and will be dispatched shortly.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-black">
                        <Package size={18} strokeWidth={1.5} />
                        <span className="text-xs font-bold tracking-widest">Order ID: #ARM-{Math.floor(Math.random() * 90000) + 10000}</span>
                    </div>
                </div>

                <div className="space-y-4 pt-4">
                    <Link 
                        to="/" 
                        className="group relative flex items-center justify-center gap-3 w-full bg-black text-white py-5 text-[10px] font-bold uppercase tracking-[0.4em] transition-all hover:bg-neutral-800"
                    >
                        Return to Boutique
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    
                    <div className="flex items-center justify-center gap-1 text-[#D4AF37]">
                        {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                    </div>
                    <p className="text-[9px] text-gray-400 uppercase tracking-widest">
                        Estimated Delivery: 3-5 Business Days
                    </p>
                </div>
            </motion.div>
        </div>
    );
}