import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { Heart, Eye, ShoppingCart, Star, ChevronLeft, ChevronRight, X, ShieldCheck, Leaf, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext'; // Context import karein
import { useWishlist } from '../context/WishlistContext';
import { useNavigate } from 'react-router-dom';

// Images Import
import hero1 from '../assets/images/hero (1).webp';
import hero2 from '../assets/images/hero (2).webp';
import hero3 from '../assets/images/hero (3).webp';
import hero4 from '../assets/images/hero (4).webp';


// Promo Banners IMG
import promo1 from '../assets/images/Promo Banners-bg-img (1).webp';
import promo2 from '../assets/images/Promo Banners-bg-img (2).webp';

// BEST SELLERS IMG
import p1 from '../assets/images/product (1).jpg';
import p2 from '../assets/images/product (2).jpg';
import p3 from '../assets/images/product (3).jpg';
import p4 from '../assets/images/product (4).jpg';
import p5 from '../assets/images/product (5).jpg';
import p6 from '../assets/images/product (6).jpg';
import p7 from '../assets/images/product (7).jpg';
import p8 from '../assets/images/product (8).jpg';
import p9 from '../assets/images/product (9).jpg';
import p10 from '../assets/images/product (10-1).jpg'
import p11 from '../assets/images/product (11-1).jpg'
import p12 from '../assets/images/product (12).jpg'

// BLOG IMG
import blog1 from "../assets/images/blog_imges (5).jpg";
import blog2 from "../assets/images/blog_imges (4).jpg";
import blog3 from "../assets/images/blog_imges (1).jpg";

// Swiper core styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const slides = [

    {
        id: 1,
        image: hero1, // Image with the Man
        subtitle: "The Modern Masculine",
        title: "Signature Men's Collection",
        description: "Discover bold, long-lasting fragrances designed for the man who leaves a lasting impression."
    },
    {
        id: 2,
        image: hero2, // Single Perfume with Cactus/Fruit
        subtitle: "100% Organic & Vegan",
        title: "Nature's Purest Essence",
        description: "Crafted with sustainably sourced ingredients for a clean, sophisticated, and natural scent."
    },
    {
        id: 3,
        image: hero3, // Image with the Woman
        subtitle: "Timeless Elegance",
        title: "The Feminine Allure",
        description: "From floral notes to deep ambers, find the perfect scent that resonates with your unique personality."
    },
    {
        id: 4,
        image: hero4, // Multiple Perfume Bottles
        subtitle: "Luxury Gift Sets",
        title: "The Ultimate Scent Cellar",
        description: "Explore our curated boutique collection. Get up to 30% off on our best-selling luxury bundles."
    }

];

const products = [
    { id: 1, name: "Love Edition For Her", price: 999, oldPrice: 1999, discount: 50, image: p1 },
    { id: 2, name: "Aurora Le Parfum", price: 1499, from: true, image: p2 },
    { id: 3, name: "Aersace For Men", price: 1299, image: p3 },
    { id: 4, name: "Million Gold for Her", price: 1399, image: p4 },
    { id: 5, name: "Aurora Virtual Flower", price: 1899, oldPrice: 1999, discount: 5, from: true, image: p5 },
    { id: 6, name: "Black Wild Fragrance", price: 999, oldPrice: 1999, discount: 50, image: p6 },
    { id: 7, name: "Brown Devotion Man", price: 1499, image: p7 },
    { id: 8, name: "Essence Pour Home", price: 1299, oldPrice: 1499, soldOut: true, from: true, image: p8 },
    { id: 9, name: "Brown Devotion an", price: 1399, image: p9 },
    { id: 10, name: "Royal Oud Essence", price: 1799, oldPrice: 1999, discount: 10, image: p10 },
    { id: 11, name: "Midnight Desire", price: 1199, oldPrice: 1999, discount: 40, image: p11 },
    { id: 12, name: "Floral Dream Bloom", price: 999, from: true, image: p12 }

];

export default function Home() {

    const navigate = useNavigate();
    const { addToCart } = useCart();
    const { addToWishlist, wishlistItems, removeFromWishlist } = useWishlist();

    const [showDemoMsg, setShowDemoMsg] = useState(false);

    // --- YE STATES ADD KARNI HAIN (Inke bina work nahi karega) ---
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [activeSize, setActiveSize] = useState('100ML'); // Default size
    const [quantity, setQuantity] = useState(1);

    // Price Calculator Function
    const getUpdatedPrice = (basePrice, size) => {
        if (size === '200ML') return basePrice + 500; // 200ml par 500 badha 
        if (size === '500ML') return basePrice + 1500; // 500ml par 1500 badha 
        return basePrice;
    };


    return (
        <main className="w-full">
            {/* --- SECTION 1: HERO SLIDER --- */}
            <section className="relative h-[85vh] group overflow-hidden bg-black">
                <Swiper
                    modules={[Autoplay, Navigation, Pagination, EffectFade]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    navigation={{ nextEl: '.s-next', prevEl: '.s-prev' }}
                    pagination={{ clickable: true, el: '.custom-dots' }}
                    loop={true}
                    className="h-full w-full"
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="relative w-full h-full flex items-center">
                                <div className="absolute inset-0 z-0">
                                    <img
                                        src={slide.image}
                                        className="hero-image-zoom w-full h-full object-cover brightness-[0.45]"
                                        alt={slide.title}
                                    />
                                </div>
                                <div className="relative z-20 container mx-auto px-6 md:px-24">
                                    <div className="banner-content-box max-w-2xl p-8 md:p-14 border-l border-white/20 flex flex-col items-start space-y-6 md:space-y-8 text-white">
                                        <p className="hero-subtitle text-[10px] md:text-[12px] tracking-[0.6em] uppercase font-bold text-white/90">{slide.subtitle}</p>
                                        <h2 className="hero-title text-5xl md:text-7xl font-serif italic leading-[1.1]">{slide.title}</h2>
                                        <p className="hero-description text-sm md:text-lg text-gray-300 font-light max-w-md tracking-wide">{slide.description}</p>
                                        <div className="hero-button-wrapper pt-4">
                                            <Link to="/shop" className="luxury-btn relative inline-block overflow-hidden border border-white px-12 py-4 group/btn">
                                                <span className="relative z-10 text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold group-hover/btn:text-black transition-colors duration-500">Shop Now</span>
                                                <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-out"></div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button className="s-prev absolute left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 hover:bg-white hover:text-black">
                    <ChevronLeft size={22} strokeWidth={1} />
                </button>
                <button className="s-next absolute right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 hover:bg-white hover:text-black">
                    <ChevronRight size={22} strokeWidth={1} />
                </button>
                <div className="custom-dots absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-4"></div>
            </section>

            {/* --- SECTION 2: PROMO BANNERS --- */}
            <section className="container mx-auto px-4 md:px-10 py-16 md:py-24 Promo Banners">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative h-[350px] md:h-[450px] rounded-lg overflow-hidden group cursor-pointer">
                        <img src={promo1} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-[0.7]" alt="Summer Scent" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6 bg-black/20">
                            <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase mb-3 opacity-90">Enjoy up to 20% off</p>
                            <h2 className="text-3xl md:text-5xl font-serif italic mb-6">On Summer Scent</h2>
                            <Link to="/shop" className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-white pb-1 hover:opacity-70 transition">Shop Now</Link>
                        </div>
                    </div>
                    <div className="relative h-[350px] md:h-[450px] rounded-lg overflow-hidden group cursor-pointer">
                        <img src={promo2} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-[0.7]" alt="Signature Fragrance" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6 bg-black/20">
                            <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase mb-3 opacity-90">Now Explore your</p>
                            <h2 className="text-3xl md:text-5xl font-serif italic mb-6">Signature Fragrance</h2>
                            <Link to="/shop" className="text-[10px] font-bold uppercase tracking-[0.2em] border-b border-white pb-1 hover:opacity-70 transition">Shop Now</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SECTION 3: BEST SELLERS --- */}
            <section className="py-16 bg-[#FFF5F5]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif italic mb-2 text-black">Best Sellers For Women</h2>
                        <p className="text-gray-500 text-xs md:text-sm tracking-wider uppercase">Each fragrance crafted to complement unique essence</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                        {products.map((product) => (
                            <div key={product.id} className="group relative flex flex-col items-center">
                                <div className="relative w-full aspect-[4/5] bg-white rounded-lg overflow-hidden flex items-center justify-center transition-all duration-500 shadow-sm hover:shadow-md border border-gray-100">

                                    {/* Labels: Discount & Sold Out */}
                                    {product.discount && !product.soldOut && (
                                        <span className="absolute top-2 left-2 md:top-4 md:left-4 bg-[#5D3E51] text-white text-[10px] font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full z-10">Save {product.discount}%</span>
                                    )}
                                    {product.soldOut && (
                                        <span className="absolute top-2 left-2 md:top-4 md:left-4 bg-black text-white text-[10px] font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full z-10 uppercase">Sold out</span>
                                    )}

                                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />

                                    {/* --- Functional Icons (Logic Fixed) --- */}
                                    <div className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 md:gap-3 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 z-20">

                                        {/* Add to Wishlist / Favorite */}
                                        {/* --- Heart Button (Wishlist Context Connected) --- */}
                                        <button
                                            onClick={() => {
                                                const isFavorite = wishlistItems.some(item => item.id === product.id);
                                                isFavorite ? removeFromWishlist(product.id) : addToWishlist(product);
                                            }}
                                            className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all transform hover:scale-110 
        ${wishlistItems.some(item => item.id === product.id)
                                                    ? 'bg-red-500 text-white'
                                                    : 'bg-white text-black hover:bg-red-500 hover:text-white'}`}
                                            title="Wishlist"
                                        >
                                            <Heart
                                                size={18}
                                                strokeWidth={1.5}
                                                fill={wishlistItems.some(item => item.id === product.id) ? "currentColor" : "none"}
                                            />
                                        </button>

                                        {/* Quick View (Eye Icon) */}
                                        <button
                                            onClick={() => setSelectedProduct(product)}
                                            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-500 hover:text-white transition-all transform hover:scale-110"
                                            title="Quick View"
                                        >
                                            <Eye size={18} strokeWidth={1.5} />
                                        </button>

                                        {/* Add to Cart */}
                                        <button
                                            disabled={product.soldOut}
                                            onClick={() => addToCart(product)}
                                            className={`w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-black hover:text-white transition-all transform hover:scale-110 ${product.soldOut ? 'opacity-50 cursor-not-allowed' : ''}`}
                                            title="Add to Cart"
                                        >
                                            <ShoppingCart size={18} strokeWidth={1.5} />
                                        </button>
                                    </div>
                                </div>

                                {/* Product Info */}
                                <div className="mt-2 md:mt-4 text-center space-y-1">
                                    <div className="flex justify-center text-gray-300 gap-0.5 mb-1 group-hover:text-yellow-500 transition-colors">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                                    </div>
                                    <h3 className="text-sm font-semibold text-gray-800 tracking-tight">{product.name}</h3>
                                    <div className="flex items-center justify-center gap-2">
                                        {product.oldPrice && <span className="text-xs text-gray-400 line-through">₹{product.oldPrice.toLocaleString('en-IN')}</span>}
                                        <span className="text-sm font-bold text-[#5D3E51]">
                                            {product.from ? `From ₹${product.price.toLocaleString('en-IN')}` : `₹${product.price.toLocaleString('en-IN')}`}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- QUICK VIEW MODAL (Logic Fixed) --- */}
            {selectedProduct && (
                <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
                    <div className="bg-white max-w-5xl w-full rounded-sm overflow-hidden flex flex-col md:flex-row relative animate-in fade-in zoom-in duration-300 shadow-2xl max-h-[90vh]">

                        {/* Close Button */}
                        <button
                            onClick={() => { setSelectedProduct(null); setActiveSize('100ML'); setQuantity(1); }}
                            className="absolute top-4 right-4 z-[110] bg-[#5D3E51] text-white p-1.5 rounded-full hover:rotate-90 transition-all shadow-lg"
                        >
                            <X size={18} />
                        </button>

                        {/* LEFT: SINGLE STATIC PHOTO (No Slider) */}
                        <div className="w-full md:w-1/2 bg-[#FFF5F6] relative flex items-center justify-center p-12 overflow-hidden">
                            <img
                                src={selectedProduct.image}
                                className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 hover:scale-110"
                                alt={selectedProduct.name}
                            />
                        </div>

                        {/* RIGHT: DETAILS & DYNAMIC LOGIC */}
                        <div className="p-10 w-full md:w-1/2 flex flex-col space-y-6 bg-white overflow-y-auto">
                            <div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h2 className="text-3xl font-serif text-gray-900 mb-2">{selectedProduct.name}</h2>
                                        <p className="text-[10px] uppercase tracking-[0.3em] text-[#5D3E51] font-bold mb-4">Aurora Exclusive</p>
                                    </div>
                                </div>
                                <p className="text-2xl font-bold text-[#5D3E51]">
                                    ₹{getUpdatedPrice(selectedProduct.price, activeSize).toLocaleString('en-IN')}.00
                                </p>
                            </div>

                            {/* SIZE SELECTION */}
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-3 font-bold">
                                    Select Size: <span className="text-black">{activeSize}</span>
                                </p>
                                <div className="flex gap-3">
                                    {['100ML', '200ML', '500ML'].map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setActiveSize(size)}
                                            className={`px-6 py-2 text-[11px] border transition-all duration-300 font-bold tracking-widest ${activeSize === size
                                                ? 'bg-black text-white border-black shadow-md scale-105'
                                                : 'border-gray-200 text-gray-500 hover:border-black'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* QUANTITY & BUTTONS */}
                            <div className="flex flex-col space-y-4 pt-4">
                                <div className="flex gap-4 h-14">
                                    {/* Quantity Selector */}
                                    <div className="flex items-center border border-gray-200 px-5 gap-6">
                                        <button onClick={() => setQuantity(q => q > 1 ? q - 1 : 1)} className="hover:text-[#5D3E51] font-bold text-lg">-</button>
                                        <span className="font-bold text-sm w-4 text-center">{quantity}</span>
                                        <button onClick={() => setQuantity(q => q + 1)} className="hover:text-[#5D3E51] font-bold text-lg">+</button>
                                    </div>

                                    {/* Add To Cart Button */}
                                    <button
                                        onClick={() => {
                                            const finalProduct = {
                                                ...selectedProduct,
                                                price: getUpdatedPrice(selectedProduct.price, activeSize),
                                                selectedSize: activeSize,
                                                qty: quantity
                                            };
                                            addToCart(finalProduct);
                                            setSelectedProduct(null);
                                            setQuantity(1);
                                        }}
                                        className="flex-1 bg-[#5D3E51] text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-black transition-all"
                                    >
                                        Add To Cart
                                    </button>
                                </div>

                                {/* Buy It Now Button */}
                                <button
                                    onClick={() => setShowDemoMsg(true)}
                                    className="w-full bg-black text-white py-5 text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-[#5D3E51] transition-all shadow-md"
                                >
                                    Buy It Now
                                </button>
                            </div>

                            {/* Footer info */}
                            <div className="pt-4 border-t border-gray-100 flex items-center gap-4">
                                <div className="space-y-1">
                                    <p className="text-[9px] text-gray-400 uppercase tracking-widest leading-relaxed">
                                        ✓ Free shipping on orders over ₹1,999.
                                    </p>
                                    <p className="text-[9px] text-gray-400 uppercase tracking-widest leading-relaxed">
                                        ✓ 100% Authentic Fragrances.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* LUXURY POPUP */}
                    {showDemoMsg && (
                        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
                            <div className="bg-[#1a1a1a] text-white p-8 shadow-2xl border border-[#5D3E51] flex flex-col items-center max-w-[350px] animate-in fade-in zoom-in duration-300">
                                <div className="w-12 h-[1px] bg-[#CDAA7D] mb-4"></div>
                                <p className="text-[10px] tracking-[0.4em] uppercase text-[#CDAA7D] mb-2 font-bold">Aurora Studio</p>
                                <p className="text-[13px] font-light tracking-wide text-center leading-relaxed">
                                    This is a <span className="text-[#CDAA7D] font-medium">Demo Store</span>. <br />
                                    Online checkout is currently under maintenance.
                                </p>
                                <button
                                    onClick={() => setShowDemoMsg(false)}
                                    className="mt-6 px-10 py-2 border border-white/20 text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                                >
                                    Understood
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}


            {/* --- PREMIUM FEATURE BAR START --- */}
            <section className="bg-[#111] py-16 md:py-24 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">

                        {[
                            { icon: <ShieldCheck size={32} strokeWidth={1} />, title: "Safe & Secure Checkout", desc: "Guaranteed on all purchases with encrypted protection." },
                            { icon: <Leaf size={32} strokeWidth={1} />, title: "Authentic Fragrances", desc: "100% Original and curated with global standards." },
                            { icon: <Truck size={32} strokeWidth={1} />, title: "Items Ship Same Day", desc: "Fast reliable delivery every time straight to your door." }
                        ].map((item, index) => (
                            <div key={index} className="group relative flex flex-col items-center text-center px-10 py-12 transition-all duration-500 hover:-translate-y-2 mx-2">

                                {/* --- THE FULL FRAME HOVER EFFECT --- */}
                                {/* Top Line */}
                                <span className="absolute top-0 left-0 w-0 h-[1px] bg-[#d4af37] transition-all duration-500 group-hover:w-full"></span>
                                {/* Right Line */}
                                <span className="absolute top-0 right-0 w-[1px] h-0 bg-[#d4af37] transition-all duration-500 delay-100 group-hover:h-full"></span>
                                {/* Bottom Line */}
                                <span className="absolute bottom-0 right-0 w-0 h-[1px] bg-[#d4af37] transition-all duration-500 delay-200 group-hover:w-full"></span>
                                {/* Left Line */}
                                <span className="absolute bottom-0 left-0 w-[1px] h-0 bg-[#d4af37] transition-all duration-500 delay-300 group-hover:h-full"></span>
                                {/* ------------------------------------ */}

                                {/* Icon */}
                                <div className="mb-6 text-white/50 group-hover:text-[#d4af37] transition-colors duration-500 transform group-hover:scale-110">
                                    {item.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-white font-serif text-sm md:text-base tracking-[0.3em] uppercase mb-4">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-500 text-[11px] md:text-xs tracking-[0.2em] font-light leading-relaxed group-hover:text-gray-300">
                                    {item.desc}
                                </p>

                                {/* Vertical Divider for Desktop (Silent background) */}
                                {index < 2 && (
                                    <div className="hidden md:block absolute -right-0 top-1/4 h-1/2 w-[1px] bg-white/5 group-hover:opacity-0 transition-opacity"></div>
                                )}
                            </div>
                        ))}

                    </div>
                </div>
            </section>
            {/* --- PREMIUM FEATURE BAR END --- */}


            {/* --- LUXURY CATEGORY SECTION START --- */}
            <section className="bg-white py-20 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* Section Heading (Optional) */}
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-3xl font-serif tracking-[0.4em] uppercase text-black">Shop by Category</h2>
                        <div className="w-20 h-[1px] bg-black mx-auto mt-4 opacity-20"></div>
                    </div>

                    {/* Categories Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                        {[
                            { title: "New Fragrance", count: "3 Items", img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500" },
                            { title: "Men Colognes", count: "9 Items", img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500" },
                            { title: "Women Perfumes", count: "7 Items", img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500" },
                            { title: "Kids Perfume", count: "8 Items", img: "https://images.unsplash.com/photo-1592914610354-fd354ea45e48?w=500" }
                        ].map((cat, index) => (
                            <div key={index} className="group cursor-pointer">
                                {/* Image Container */}
                                <div className="relative overflow-hidden  rounded-xl aspect-[4/5]">
                                    <img
                                        src={cat.img}
                                        alt={cat.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                                    />
                                    {/* Soft Dark Overlay on Hover */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                                </div>

                                {/* Text Content */}
                                <div className="mt-3 md:mt-6 text-center transition-transform duration-500 group-hover:-translate-y-2">
                                    <h3 className="font-serif text-sm md:text-base tracking-[0.2em] uppercase text-black font-semibold">
                                        {cat.title}
                                    </h3>
                                    <p className="text-[10px] md:text-[11px] tracking-widest text-gray-400 uppercase mt-1 font-medium">
                                        {cat.count}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View All Button */}
                    <div className="mt-16 text-center">
                        <button
                            onClick={() => navigate('/shop')} // 3. Ye click hote hi Shop.jsx khul jayega
                            className="px-10 py-3 bg-[#5d4157] text-white text-[10px] tracking-[0.3em] uppercase font-bold rounded-md transition-all duration-300 hover:bg-[#4a3446] hover:shadow-xl hover:scale-105 active:scale-95"
                        >
                            View All
                        </button>
                    </div>

                </div>
            </section>
            {/* --- LUXURY CATEGORY SECTION END --- */}


            {/*  LIMITED OFFER BANNER */}
            <section className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row border border-dashed border-gray-300 rounded-sm overflow-hidden transition-all duration-500 hover:border-black hover:shadow-2xl">
                    <div className="flex-1 p-10 md:p-20 flex flex-col justify-center items-center text-center bg-white group">
                        <span className="text-[10px] tracking-[0.4em] uppercase text-gray-400 mb-4 transition-colors group-hover:text-black">Limited Time Offer</span>
                        <h2 className="text-5xl md:text-7xl font-serif mb-6 italic transition-transform duration-700 group-hover:scale-105">
                            50% <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">OFF</span>
                        </h2>
                        <Link to="/shop" className="text-[11px] tracking-[0.3em] uppercase font-bold border-b border-black pb-1 hover:text-gray-400 hover:border-gray-400 transition-all">
                            Shop Now
                        </Link>
                    </div>
                    <div className="flex-1 overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1594035910387-fea47794261f?w=800"
                            className="w-full max-h-[400px] object-cover transition-transform duration-[2000ms] hover:scale-110"
                            alt="Promo"
                        />
                    </div>
                </div>
            </section>


            {/*  TESTIMONIALS SECTION */}
            <section className="bg-white py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-serif text-center mb-16 tracking-tight">
                        Trusted by Thousands of <br /> <span className="italic">Satisfied Customers.</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Emma Richardson", text: "Aurora fragrances have been a game-changer for me! I feel more confident and elegant than ever. Highly recommend!", stars: 5 },
                            { name: "Oliver Brown", text: "The complexity of the notes is amazing. Every spray tells a different story. Fast shipping too!", stars: 4 },
                            { name: "Sophia Martinez", text: "Excellent service and top-notch scents. The loyalty rewards are a great bonus. Will definitely keep ordering!", stars: 5 }
                        ].map((review, i) => (
                            <div key={i} className="p-8 border border-gray-50 rounded-xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                                <p className="text-gray-500 text-sm leading-relaxed mb-6 italic group-hover:text-black transition-colors">"{review.text}"</p>
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, s) => (
                                        <span key={s} className={`text-[10px] ${s < review.stars ? 'text-black' : 'text-gray-200'}`}>★</span>
                                    ))}
                                </div>
                                <h4 className="font-serif font-bold text-sm tracking-wide">{review.name}</h4>
                                <span className="text-[9px] text-green-500 uppercase tracking-widest font-bold flex items-center gap-1 mt-1">
                                    <span className="w-2 h-2 bg-green-500 rounded-full"></span> Verified Buyer
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/*  LOGO SLIDER (STATIC) */}
            <section className="py-16 border-y border-gray-50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 grayscale transition-all hover:grayscale-0">
                        {/* Dummy Logos - Replace with your SVGs if needed */}
                        <span className="text-xl font-serif font-bold tracking-tighter">HAYDEN</span>
                        <span className="text-xl font-bold italic">Parker & Co.</span>
                        <span className="text-xl tracking-[0.3em]">GRAND</span>
                        <span className="text-xl font-serif font-light tracking-widest">GOOD MOOD</span>
                        <span className="text-xl font-bold">GALLERY</span>
                    </div>
                </div>
            </section>


            {/*  NEWS & BLOG UPDATES */}
            <section className="bg-white py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold">Our Blog</span>
                        <h2 className="text-2xl md:text-3xl font-serif mt-2 tracking-tight">News & Blog Updates</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { title: "Proper way to apply perfumes 2026", date: "Feb 28, 2026", img: blog1 },
                            { title: "Top 5 Timeless & Classic Fragrances", date: "Feb 28, 2026", img: blog2 },
                            { title: "Our Perfumers' Picks Of The Top 8", date: "Feb 28, 2026", img: blog3 }
                        ].map((blog, i) => (
                            <div key={i} className="group cursor-pointer">
                                {/* Image Container */}
                                <div className="relative overflow-hidden rounded-xl mb-6 aspect-video shadow-sm">
                                    <img
                                        src={blog.img}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    />
                                    {/* Subtle Overlay on Hover */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
                                </div>

                                {/* Metadata */}
                                <div className="flex items-center gap-3 text-[9px] uppercase tracking-widest text-gray-400 mb-3 font-semibold">
                                    <span className="text-black">BY TEAM 90DEGREE</span>
                                    <span className="w-4 h-[1px] bg-gray-300"></span> {/* Vertical line separator */}
                                    <span>{blog.date}</span>
                                </div>

                                {/* Title with Underline Animation */}
                                <h3 className="font-serif text-xl leading-snug relative inline-block">
                                    {blog.title}
                                    <span className="absolute left-0 bottom-[-4px] w-0 h-[1px] bg-black transition-all duration-500 group-hover:w-full"></span>
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
}