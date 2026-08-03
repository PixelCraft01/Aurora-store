import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Context import
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';
import { auth } from '../firebase';
import {
    User,
    Heart,
    ShoppingBag,
    ChevronDown,
    Menu,
    X,
    LogOut,
    Plus,
    Minus
} from 'lucide-react';


export default function Header() {

    // 1. Context API se data nikalna (Auth, Cart, Wishlist)
    const { isLoggedIn, logout, user } = useAuth();
    const { setIsCartOpen, cartItems } = useCart();
    const { setIsWishlistOpen, wishlistItems } = useWishlist();

    // 2. Local UI States (Sirf Dropdowns aur Menu ke liye)
    const [isAccountOpen, setIsAccountOpen] = useState(false);
    const [isShopOpen, setIsShopOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mobileAccordion, setMobileAccordion] = useState(null);
    const [mobileSubAccordion, setMobileSubAccordion] = useState(null);

    const navigate = useNavigate();

    // 3. Logout Function (Context wala use kar rahe hain)
    const handleLogout = () => {
        logout(); // Ye Context se aayega aur localStorage bhi clear kar dega
        setIsAccountOpen(false);
        navigate('/login');
    };

    // 4. Counter Logic
    const totalItems = cartItems.reduce((acc, item) => acc + (item.qty || 1), 0);
    const wishlistCount = wishlistItems.length;

    // 5. Active Link Styling
    const navLinkStyles = ({ isActive }) =>
        isActive
            ? "text-black border-b border-black pb-1"
            : "text-gray-500 hover:text-black transition-all";

    return (
        <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-[100] font-sans">

            {/* --- TOP ANNOUNCEMENT BAR --- */}
            <div className="bg-[#1a1a1a] text-white py-3 overflow-hidden border-y border-white/5">
                <div className="flex whitespace-nowrap animate-marquee-manual">
                    {/* Pehla Set */}
                    <span className="text-[10px] uppercase tracking-[0.4em] px-10">✨ Free Shipping on orders over ₹999</span>
                    <span className="text-[10px] uppercase tracking-[0.4em] px-10">🌿 100% Organic Fragrances</span>
                    <span className="text-[10px] uppercase tracking-[0.4em] px-10">💎 Luxury in Every Drop</span>
                    <span className="text-[10px] uppercase tracking-[0.4em] px-10">🌙 Crafted in Grasse & Dubai</span>
                    <span className="text-[10px] uppercase tracking-[0.4em] px-10">🕊️ Cruelty-Free & Vegan</span>

                    {/* Dusra Set (Duplicate) - Ye loop ko infinite banayega */}
                    <span className="text-[10px] uppercase tracking-[0.4em] px-10">✨ Free Shipping on orders over ₹999</span>
                    <span className="text-[10px] uppercase tracking-[0.4em] px-10">🌿 100% Organic Fragrances</span>
                    <span className="text-[10px] uppercase tracking-[0.4em] px-10">💎 Luxury in Every Drop</span>
                    <span className="text-[10px] uppercase tracking-[0.4em] px-10">🌙 Crafted in Grasse & Dubai</span>
                    <span className="text-[10px] uppercase tracking-[0.4em] px-10">🕊️ Cruelty-Free & Vegan</span>
                </div>
            </div>

            {/* --- MAIN NAVIGATION --- */}
            <nav className="flex justify-between items-center px-6 md:px-12 py-5 md:py-6 bg-white relative">

                {/* Mobile: Hamburger Menu Button */}
                <button className="md:hidden p-2" onClick={() => setIsMenuOpen(true)}>
                    <Menu size={22} strokeWidth={1.5} />
                </button>

                {/* Logo Section */}
                <div className="text-center md:text-left flex-1 md:flex-none">
                    <Link to="/">
                        <h1 className="text-xl md:text-2xl font-light tracking-[0.4em] uppercase text-black"> <a href="/"></a> Aurora</h1>
                        <p className="text-[7px] md:text-[8px] tracking-[0.3em] uppercase text-gray-400 -mt-1 text-center font-medium">Perfume Shop</p>
                    </Link>
                </div>

                {/* Desktop Menu Items */}
                <div className="hidden md:flex items-center gap-x-10 text-[11px] uppercase tracking-[0.2em] font-bold">
                    <NavLink to="/" className={navLinkStyles}>Home</NavLink>

                    {/* Shop Mega Menu */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setIsShopOpen(true)}
                        onMouseLeave={() => setIsShopOpen(false)}
                    >
                        <button className={`flex items-center gap-1 uppercase tracking-[0.2em] font-bold text-[11px] transition-all ${isShopOpen ? 'text-black' : 'text-gray-500 hover:text-black'}`}>
                            Shop <ChevronDown size={12} className={`transition-transform duration-300 ${isShopOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isShopOpen && (
                            <div className="fixed left-0 top-[103px] w-full bg-white border-b border-gray-100 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300">
                                <div className="max-w-7xl mx-auto grid grid-cols-4 gap-12 p-12 font-sans">
                                    <div className="space-y-6 text-left">
                                        <h3 className="font-bold text-[11px] tracking-[0.15em] text-black border-b border-gray-100 pb-3 uppercase">By Category</h3>
                                        <ul className="space-y-3.5 text-[13px] text-gray-500 font-medium tracking-wide normal-case">
                                            <li className="hover:text-black hover:translate-x-1 transition-all cursor-pointer">
                                                <Link to="/shop?category=long-lasting-impressions">Long-Lasting Impressions</Link>
                                            </li>
                                            <li className="hover:text-black hover:translate-x-1 transition-all cursor-pointer">
                                                <Link to="/shop?category=daily-essentials">Daily Essentials</Link>
                                            </li>
                                            <li className="hover:text-black hover:translate-x-1 transition-all cursor-pointer">
                                                <Link to="/shop?category=body-mists">Body Mists</Link>
                                            </li>
                                            <li className="hover:text-black hover:translate-x-1 transition-all cursor-pointer">
                                                <Link to="/shop?category=pocket-luxuries">Pocket Luxuries</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="space-y-6 text-left">
                                        <h3 className="font-bold text-[11px] tracking-[0.15em] text-black border-b border-gray-100 pb-3 uppercase">By Gender</h3>
                                        <ul className="space-y-3.5 text-[13px] text-gray-500 font-medium tracking-wide normal-case">
                                            <li className="hover:text-black hover:translate-x-1 transition-all cursor-pointer">
                                                <Link to="/shop?gender=men">Men's Collection</Link>
                                            </li>
                                            <li className="hover:text-black hover:translate-x-1 transition-all cursor-pointer">
                                                <Link to="/shop?gender=women">Women's Collection</Link>
                                            </li>
                                            <li className="hover:text-black hover:translate-x-1 transition-all cursor-pointer">
                                                <Link to="/shop?gender=unisex">Unisex Fragrances</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="space-y-6 text-left">
                                        <h3 className="font-bold text-[11px] tracking-[0.15em] text-red-500 border-b border-gray-100 pb-3 uppercase">Offers</h3>
                                        <ul className="space-y-3.5 text-[13px] text-gray-500 font-medium tracking-wide normal-case">
                                            <li className="hover:text-black hover:translate-x-1 transition-all cursor-pointer">
                                                <Link to="/shop?filter=best-sellers">Best Sellers</Link>
                                            </li>
                                            <li className="hover:text-black hover:translate-x-1 transition-all cursor-pointer">
                                                <Link to="/shop?filter=new-arrivals">New Arrivals</Link>
                                            </li>
                                            <li className="hover:text-black hover:translate-x-1 transition-all cursor-pointer">
                                                <Link to="/shop?category=gift-sets">Gift Sets</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="rounded-sm overflow-hidden relative group/img cursor-pointer h-48">
                                        <img src="https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400" className="w-full h-full object-cover transition duration-700 group-hover/img:scale-110" alt="Promo" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <NavLink to="/about" className={navLinkStyles}>About</NavLink>
                    <NavLink to="/blog" className={navLinkStyles}>Blog</NavLink>
                    <NavLink to="/contact" className={navLinkStyles}>Contact</NavLink>
                </div>

                {/* Right Side Icons (User, Wishlist & Cart) */}
                <div className="flex items-center gap-4 md:gap-6">

                    {/* --- USER ACCOUNT DROPDOWN --- */}
                    <div
                        className="relative hidden md:block"
                        onMouseEnter={() => setIsAccountOpen(true)}
                        onMouseLeave={() => setIsAccountOpen(false)}
                    >
                        <button
                            className={`p-1 transition-colors ${isAccountOpen ? 'text-black' : 'text-gray-700'}`}
                            aria-label="Account Menu"
                        >
                            <User size={22} strokeWidth={1.5} />
                        </button>

                        {/* Dropdown Menu */}
                        {isAccountOpen && (
                            <div className="absolute right-0 top-full pt-4 w-52 animate-in fade-in slide-in-from-top-2 duration-200 z-[110]">
                                <div className="bg-white border border-gray-100 shadow-xl py-3 rounded-sm">

                                    {/* Condition 1: Agar user Login HAI */}
                                    {auth.currentUser ? ( // 'isLoggedIn' ki jagah direct Firebase check
                                        <>
                                            <div className="px-4 py-2 border-b border-gray-50 mb-2">
                                                <p className="text-[9px] text-gray-400 uppercase tracking-widest">Welcome back</p>
                                                {/* Yahan logic: Naam dikhao, nahi toh number, nahi toh User */}
                                                <p className="text-[11px] font-bold text-black truncate uppercase tracking-tighter">
                                                    {user.displayName || user.phoneNumber || "User Account"}
                                                </p>
                                            </div>

                                            <ul className="text-[11px] uppercase tracking-wider font-medium">
                                                <li>
                                                    <Link to="/profile" className="px-4 py-2.5 hover:bg-gray-50 flex items-center gap-3 transition-colors text-gray-600 hover:text-black">
                                                        <User size={14} /> My Profile
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/orders" className="px-4 py-2.5 hover:bg-gray-50 flex items-center gap-3 transition-colors text-gray-600 hover:text-black">
                                                        <ShoppingBag size={14} /> My Orders
                                                    </Link>
                                                </li>
                                                <li className="mt-2 pt-2 border-t border-gray-50">
                                                    <button
                                                        onClick={handleLogout}
                                                        className="w-full text-left px-4 py-2.5 hover:bg-gray-50 text-red-500 hover:text-red-600 transition-colors font-bold"
                                                    >
                                                        Logout
                                                    </button>
                                                </li>
                                            </ul>
                                        </>
                                    ) : (
                                        /* Condition 2: Agar user Login NAHI HAI */
                                        <div className="px-4 py-4 space-y-3">
                                            <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-relaxed text-center">
                                                Access your account & orders
                                            </p>
                                            <Link
                                                to="/login"
                                                onClick={() => setIsAccountOpen(false)}
                                                className="block w-full bg-black text-white text-center py-3 text-[10px] tracking-widest uppercase font-bold hover:bg-neutral-800 transition-colors"
                                            >
                                                Login / Register
                                            </Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* --- WISHLIST --- */}
                    <button
                        onClick={() => setIsWishlistOpen(true)}
                        className="relative hover:text-black text-gray-700 transition-colors"
                    >
                        <Heart size={22} strokeWidth={1.5} />
                        {wishlistItems.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                                {wishlistItems.length}
                            </span>
                        )}
                    </button>

                    {/* --- CART --- */}
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="relative hover:scale-110 transition-transform p-1"
                    >
                        <ShoppingBag size={20} strokeWidth={1.5} />
                        {totalItems > 0 && (
                            <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                                {totalItems}
                            </span>
                        )}
                    </button>
                </div>

            </nav>

            {/* --- MOBILE SIDEBAR MENU --- */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-[101] backdrop-blur-sm transition-opacity duration-300"
                    onClick={() => setIsMenuOpen(false)}
                />
            )}

            <div className={`fixed top-0 left-0 w-[85%] max-w-[340px] h-full bg-white z-[102] shadow-2xl transition-transform duration-500 ease-in-out flex flex-col ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>

                {/* Sidebar Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-50">
                    <div>
                        <h2 className="text-xl font-light tracking-[0.3em]">Aurora</h2>
                        <p className="text-[8px] tracking-[0.2em] text-gray-400 uppercase">Premium Selection</p>
                    </div>
                    <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <X size={22} strokeWidth={1.5} />
                    </button>
                </div>

                {/* Sidebar Content (Scrollable) */}
                <div className="flex-1 overflow-y-auto py-4">
                    <ul className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-800">

                        {/* Home Link */}
                        <li className="border-b border-gray-50">
                            <Link to="/" onClick={() => setIsMenuOpen(false)} className="px-8 py-5 block hover:bg-gray-50">Home</Link>
                        </li>

                        {/* --- SHOP NESTED ACCORDION --- */}
                        <li className="border-b border-gray-50">
                            <div
                                className={`px-8 py-5 flex justify-between items-center cursor-pointer transition-colors ${mobileAccordion === 'shop' ? 'bg-gray-50 text-black' : ''}`}
                                onClick={() => setMobileAccordion(mobileAccordion === 'shop' ? null : 'shop')}
                            >
                                <span>Shop Collection</span>
                                {mobileAccordion === 'shop' ? <Minus size={14} /> : <Plus size={14} />}
                            </div>

                            {/* Level 1: Shop Categories */}
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out bg-white ${mobileAccordion === 'shop' ? 'max-h-[1000px]' : 'max-h-0'}`}>

                                {/* Sub-Category: By Category */}
                                <div className="border-t border-gray-50">
                                    <div
                                        className="px-10 py-4 flex justify-between items-center text-gray-500 hover:text-black transition-colors cursor-pointer"
                                        onClick={() => setMobileSubAccordion(mobileSubAccordion === 'cat' ? null : 'cat')}
                                    >
                                        <span className="text-[10px]">By Category</span>
                                        <Plus size={14} className={`transition-transform ${mobileSubAccordion === 'cat' ? 'rotate-45' : ''}`} />
                                    </div>
                                    <div className={`overflow-hidden transition-all duration-300 px-14 space-y-4 normal-case text-gray-400 font-medium pb-2 ${mobileSubAccordion === 'cat' ? 'max-h-60 py-2' : 'max-h-0'}`}>

                                        <Link
                                            to="/shop?category=long-lasting-impressions"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block hover:text-black py-1 cursor-pointer"
                                        >
                                            Long-Lasting Impressions
                                        </Link>

                                        <Link
                                            to="/shop?category=daily-essentials"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block hover:text-black py-1 cursor-pointer"
                                        >
                                            Daily Essentials
                                        </Link>

                                        <Link
                                            to="/shop?category=body-mists"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block hover:text-black py-1 cursor-pointer"
                                        >
                                            Body Mists
                                        </Link>

                                        <Link
                                            to="/shop?category=pocket-luxuries"
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block hover:text-black py-1 cursor-pointer"
                                        >
                                            Pocket Luxuries
                                        </Link>

                                    </div>
                                </div>

                                {/* Sub-Category: By Gender */}
                                <div className="border-t border-gray-50">
                                    <div
                                        className="px-10 py-4 flex justify-between items-center text-gray-500 hover:text-black transition-colors cursor-pointer"
                                        onClick={() => setMobileSubAccordion(mobileSubAccordion === 'gender' ? null : 'gender')}
                                    >
                                        <span className="text-[10px]">By Gender</span>
                                        <Plus size={14} className={`transition-transform ${mobileSubAccordion === 'gender' ? 'rotate-45' : ''}`} />
                                    </div>
                                    <div className={`overflow-hidden transition-all duration-300 px-14 space-y-4 normal-case text-gray-400 font-medium ${mobileSubAccordion === 'offers' ? 'max-h-40 pb-4 pt-2' : 'max-h-0'}`}>
                                        <p
                                            onClick={() => { navigate('/shop?filter=best-sellers'); setIsMenuOpen(false); }}
                                            className="hover:text-black py-1 cursor-pointer flex items-center gap-2"
                                        >
                                            <span className="w-1 h-1 bg-red-500 rounded-full"></span> Best Sellers
                                        </p>
                                        <p
                                            onClick={() => { navigate('/shop?filter=new-arrivals'); setIsMenuOpen(false); }}
                                            className="hover:text-black py-1 cursor-pointer flex items-center gap-2"
                                        >
                                            <span className="w-1 h-1 bg-red-500 rounded-full"></span> New Arrivals
                                        </p>
                                        <p
                                            onClick={() => { navigate('/shop?category=gift-sets'); setIsMenuOpen(false); }}
                                            className="hover:text-black py-1 cursor-pointer flex items-center gap-2"
                                        >
                                            <span className="w-1 h-1 bg-red-500 rounded-full"></span> Gift Sets
                                        </p>
                                    </div>
                                </div>

                                {/* Sub-Category: Offers (Now with Nested Menu) */}
                                <div className="border-t border-gray-50">
                                    <div
                                        className="px-10 py-4 flex justify-between items-center text-red-500 hover:text-red-600 transition-colors cursor-pointer"
                                        onClick={() => setMobileSubAccordion(mobileSubAccordion === 'offers' ? null : 'offers')}
                                    >
                                        <span className="text-[10px] font-bold">Special Offers</span>
                                        <Plus size={12} className={`transition-transform duration-300 ${mobileSubAccordion === 'offers' ? 'rotate-45' : ''}`} />
                                    </div>

                                    <div className={`overflow-hidden transition-all duration-300 px-14 space-y-4 normal-case text-gray-400 font-medium ${mobileSubAccordion === 'offers' ? 'max-h-40 pb-4 pt-2' : 'max-h-0'}`}>
                                        <p className="hover:text-black py-1 cursor-pointer flex items-center gap-2">
                                            <span className="w-1 h-1 bg-red-500 rounded-full"></span> Best Sellers
                                        </p>
                                        <p className="hover:text-black py-1 cursor-pointer flex items-center gap-2">
                                            <span className="w-1 h-1 bg-red-500 rounded-full"></span> New Arrivals
                                        </p>
                                        <p className="hover:text-black py-1 cursor-pointer flex items-center gap-2">
                                            <span className="w-1 h-1 bg-red-500 rounded-full"></span> Gift Sets
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="border-b border-gray-50">
                            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="px-8 py-5 block hover:bg-gray-50">About</Link>
                        </li>
                        <li className="border-b border-gray-50">
                            <Link to="/blog" onClick={() => setIsMenuOpen(false)} className="px-8 py-5 block hover:bg-gray-50">Blog</Link>
                        </li>
                        <li className="border-b border-gray-50">
                            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="px-8 py-5 block hover:bg-gray-50">Contact</Link>
                        </li>
                    </ul>
                </div>

                {/* Sidebar Footer */}
                <div className="p-8 border-t border-gray-50 space-y-4">
                    <Link
                        to="/login"
                        onClick={() => setIsMenuOpen(false)}
                        className="w-full flex items-center justify-center gap-2 bg-black text-white py-4 text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-gray-900 transition-colors"
                    >
                        <User size={14} /> My Account
                    </Link>
                </div>
            </div>
        </header>
    );
}