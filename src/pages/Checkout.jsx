import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Truck, ArrowLeft, Trash2, Lock } from 'lucide-react';

export default function Checkout() {
    const { cartItems, removeFromCart } = useCart();
    const navigate = useNavigate();
    const [total, setTotal] = useState(0);

    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', phone: '',
        address: '', city: '', state: '', pincode: ''
    });

    // Sidebar logic se match karne ke liye price calculation
    useEffect(() => {
        if (cartItems.length === 0) {
            navigate('/shop');
        } else {
            const calculatedTotal = cartItems.reduce((acc, item) => {
                const price = Number(item.price) || 0;
                const qty = Number(item.qty || item.quantity) || 1;
                return acc + (price * qty);
            }, 0);
            setTotal(calculatedTotal);
        }
    }, [cartItems, navigate]);

    const handleInput = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Order Confirmed:", { cartItems, customer: formData, total });
        navigate('/order-success');
    };

    if (cartItems.length === 0) return null;

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 bg-[#FCFBFA] font-sans">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">

                {/* LEFT: Shipping Form (Ye scroll hoga) */}
                <div className="lg:col-span-7 space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-gray-400 hover:text-black transition-all group"
                    >
                        <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Bag
                    </button>

                    <div className="space-y-4">
                        <h1 className="text-4xl font-light tracking-tight text-neutral-900 uppercase">
                            Checkout
                        </h1>
                        <p className="text-[10px] text-neutral-400 uppercase tracking-[0.3em]">Enter your shipping details below</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-10">
                        {/* Identity Section */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <FloatingInput label="First Name" name="firstName" onChange={handleInput} placeholder="First Name" />
                            <FloatingInput label="Last Name" name="lastName" onChange={handleInput} placeholder="Last Name" />
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <FloatingInput label="Email" name="email" type="email" onChange={handleInput} placeholder="arjun@example.com" />
                            <FloatingInput label="Phone" name="phone" type="tel" onChange={handleInput} placeholder="+91" />
                        </div>

                        {/* Destination Section */}
                        <div className="space-y-10 pt-4">
                            <FloatingInput label="Shipping Address" name="address" onChange={handleInput} placeholder="House, Building, Street" />
                            <div className="grid md:grid-cols-3 gap-8">
                                <FloatingInput label="City" name="city" onChange={handleInput} />
                                <FloatingInput label="Pincode" name="pincode" onChange={handleInput} />
                                <FloatingInput label="State" name="state" onChange={handleInput} />
                            </div>
                        </div>

                        <button type="submit" className="w-full bg-black text-white py-5 text-[11px] font-bold uppercase tracking-[0.5em] transition-all hover:bg-neutral-800 flex items-center justify-center gap-3 group shadow-xl">
                            Finalize Order <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>

                {/* RIGHT: Order Summary (Ye STICKY rahega) */}
                <div className="lg:col-span-5 lg:sticky lg:top-32">
                    <div className="bg-white border border-neutral-100 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.03)] rounded-sm">
                        <h3 className="text-[11px] font-bold uppercase tracking-[0.4em] mb-8 pb-4 border-b border-neutral-50">
                            Your Selection ({cartItems.length})
                        </h3>

                        {/* Scrollable Items inside Sticky Box */}
                        <div className="space-y-6 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex gap-5 group">
                                    <div className="w-20 h-24 bg-[#F9F9F7] shrink-0 overflow-hidden border border-neutral-50">
                                        <img
                                            src={item.image || item.img || (item.images && item.images[0]) || 'https://via.placeholder.com/150'}
                                            alt={item.name}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between py-1">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="text-[10px] font-bold uppercase tracking-widest">{item.name || item.title}</h4>
                                                <p className="text-[9px] text-neutral-400 mt-1 uppercase">Qty: {item.qty || 1}</p>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-neutral-200 hover:text-red-500 transition-colors"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                        <p className="text-sm font-medium tracking-tighter">₹{(item.price * (item.qty || 1)).toLocaleString()}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Subtotal & Total */}
                        <div className="mt-8 pt-8 border-t border-neutral-100 space-y-4">
                            <div className="flex justify-between text-[11px] tracking-widest uppercase text-neutral-400">
                                <span>Subtotal</span>
                                <span>₹{total.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-[11px] tracking-widest uppercase">
                                <span className="text-neutral-400">Shipping</span>
                                <span className="text-black font-bold italic tracking-tighter">Complimentary</span>
                            </div>
                            <div className="flex justify-between items-center pt-6 border-t border-neutral-900">
                                <span className="text-[11px] font-bold uppercase tracking-[0.3em]">Total Amount</span>
                                <span className="text-xl font-semibold">₹{total.toLocaleString()}</span>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 space-y-3 opacity-60">
                            <div className="flex items-center gap-3 text-[9px] uppercase tracking-widest">
                                <Lock size={12} /> Secure Checkout
                            </div>
                            <div className="flex items-center gap-3 text-[9px] uppercase tracking-widest">
                                <Truck size={12} /> Signature Packaging
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Input Component for cleaner code
function FloatingInput({ label, name, type = "text", onChange, placeholder }) {
    return (
        <div className="border-b border-neutral-100 py-2 focus-within:border-black transition-all duration-500">
            <label className="block text-[8px] text-neutral-400 uppercase tracking-widest mb-1">
                {label}
            </label>
            <input
                name={name}
                type={type}
                onChange={onChange}
                required
                className="w-full bg-transparent outline-none text-[12px] uppercase tracking-widest placeholder:text-neutral-200"
                placeholder={placeholder}
            />
        </div>
    );
}