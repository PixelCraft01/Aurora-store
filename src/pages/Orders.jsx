import React from 'react';
import { Package, ChevronRight, ArrowUpRight } from 'lucide-react';

export default function Orders() {
    const dummyOrders = [
        { 
            id: '#AR-9982', 
            date: 'April 05, 2026', 
            total: '₹2,499', 
            status: 'In Transit',
            item: 'Oud Nuit — 100ml',
            image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=100' // Placeholder perfume image
        },
        { 
            id: '#AR-9975', 
            date: 'March 28, 2026', 
            total: '₹4,200', 
            status: 'Delivered',
            item: 'Midnight Rose — 50ml',
            image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=100'
        }
    ];

    return (
        <div className="min-h-screen bg-[#F7F7F2] pt-32 pb-20 px-8 font-sans text-[#1a1a1a]">
            <div className="max-w-4xl mx-auto">
                
                {/* Header Section */}
                <div className="flex items-center gap-6 mb-16">
                    <h2 className="text-[12px] font-bold uppercase tracking-[0.6em]">Order Archive</h2>
                    <div className="h-[1px] flex-1 bg-neutral-200/60"></div>
                </div>

                <div className="space-y-6">
                    {dummyOrders.map((order) => (
                        <div 
                            key={order.id} 
                            className="bg-white border border-neutral-100 p-8 flex flex-col md:flex-row justify-between items-center group hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] hover:scale-[1.01] transition-all duration-700 cursor-pointer relative overflow-hidden"
                        >
                            {/* Left Side: Product Info & Image */}
                            <div className="flex items-center gap-8 w-full md:w-auto">
                                <div className="w-16 h-16 bg-neutral-50 overflow-hidden border border-neutral-100">
                                    <img 
                                        src={order.image} 
                                        alt="Product" 
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-3">
                                        <p className="text-[10px] font-bold tracking-widest uppercase text-neutral-400">{order.id}</p>
                                        <span className="w-1 h-1 bg-neutral-300 rounded-full"></span>
                                        <p className="text-[10px] text-neutral-400 uppercase tracking-widest">{order.date}</p>
                                    </div>
                                    <h3 className="text-sm font-medium tracking-wide uppercase">{order.item}</h3>
                                </div>
                            </div>

                            {/* Right Side: Price & Status */}
                            <div className="flex items-center justify-between md:justify-end gap-12 w-full md:w-auto mt-6 md:mt-0 pt-6 md:pt-0 border-t md:border-t-0 border-neutral-50">
                                <div className="text-left md:text-right space-y-1">
                                    <p className="text-sm font-semibold tracking-tighter">{order.total}</p>
                                    <div className="flex items-center gap-2">
                                        <span className={`w-1.5 h-1.5 rounded-full ${order.status === 'In Transit' ? 'bg-amber-400 animate-pulse' : 'bg-neutral-900'}`}></span>
                                        <p className="text-[9px] uppercase tracking-[0.2em] font-bold">
                                            {order.status}
                                        </p>
                                    </div>
                                </div>
                                
                                {/* Aesthetic Arrow Icon */}
                                <div className="p-2 border border-neutral-100 rounded-full group-hover:bg-black group-hover:text-white transition-all duration-500">
                                    <ArrowUpRight size={16} strokeWidth={1} />
                                </div>
                            </div>

                            {/* Hover Bottom Progress Line */}
                            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-black group-hover:w-full transition-all duration-1000"></div>
                        </div>
                    ))}
                </div>

                {/* Empty State / Footer Tip */}
                <p className="mt-16 text-center text-[10px] uppercase tracking-[0.4em] text-neutral-400 italic">
                    All prices include luxury packaging & taxes.
                </p>
            </div>
        </div>
    );
}