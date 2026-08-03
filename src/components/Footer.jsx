import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-white pt-20 pb-10 px-6 md:px-10">
            {/* Upper Footer: Links & Info */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                {/* Column 1: Brand Identity */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-light tracking-[0.4em] uppercase">Aurora</h3>
                    <p className="text-gray-400 text-[10px] leading-relaxed tracking-widest uppercase">
                        The essence of elegance and the art of fine perfumery. Crafted for the modern soul who seeks timeless beauty.
                    </p>
                </div>

                {/* Column 2: Quick Navigation */}
                <div className="space-y-4">
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold">Explore</h4>
                    <ul className="text-xs text-gray-400 space-y-3 uppercase tracking-widest">
                        <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                        <li><Link to="/shop" className="hover:text-white transition-colors">Shop All</Link></li>
                        <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
                        <li><Link to="/blog" className="hover:text-white transition-colors">Journal</Link></li>
                    </ul>
                </div>

                {/* Column 3: Customer Care */}
                <div className="space-y-4">
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold">Assistance</h4>
                    <ul className="text-xs text-gray-400 space-y-3 uppercase tracking-widest">
                        <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
                        <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                        <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                    </ul>
                </div>

                {/* Column 4: Location/Contact */}
                <div className="space-y-4">
                    <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold">Boutique</h4>
                    <p className="text-xs text-gray-400 tracking-widest leading-loose uppercase">
                        123 Luxury Lane, <br />
                        75001 Paris, France <br />
                        <span className="mt-2 block text-white/60">contact@aurora.com</span>
                    </p>
                </div>
            </div>

            {/* Bottom Bar: Copyright & Payments */}
            <div className="max-w-7xl mx-auto pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-[9px] uppercase tracking-[0.4em] text-gray-500">
                    © 2026 Aurora Fragrances. All Rights Reserved.
                </p>

                {/* Payment Methods (Visual Only) */}
                <div className="flex gap-4 opacity-30 grayscale hover:opacity-100 transition-opacity duration-500">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-3" alt="Visa" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-5" alt="Mastercard" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4" alt="Paypal" />
                </div>
            </div>
        </footer>
    )
}