import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Heart, Search, SlidersHorizontal, X } from 'lucide-react';

export default function Shop() {
    const { addToCart } = useCart();
    const { addToWishlist, removeFromWishlist, wishlistItems } = useWishlist();

    const [searchParams, setSearchParams] = useSearchParams();
    const categoryFromUrl = searchParams.get('category') || "all";
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedGender, setSelectedGender] = useState("all");
    const [showMobileFilters, setShowMobileFilters] = useState(false);

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.notes.top.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = categoryFromUrl === "all" || product.category === categoryFromUrl;
            const matchesGender = selectedGender === "all" || product.gender === selectedGender;
            return matchesSearch && matchesCategory && matchesGender;
        });
    }, [searchQuery, categoryFromUrl, selectedGender]);

    const handleCategoryChange = (val) => {
        if (val === "all") {
            searchParams.delete('category');
        } else {
            searchParams.set('category', val);
        }
        setSearchParams(searchParams);
    };

    return (
        <div className="min-h-screen bg-white pt-32 pb-20 px-6 max-w-7xl mx-auto font-sans">
            
            {/* --- Header Section --- */}
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-4xl md:text-5xl font-light tracking-[0.3em] uppercase text-black">
                    {categoryFromUrl === 'all' ? 'The Collection' : categoryFromUrl.replace(/-/g, ' ')}
                </h1>
                <p className="text-[10px] text-gray-400 uppercase tracking-[0.4em]">Curated Artisanal Fragrances</p>
            </div>

            {/* --- Filters & Search Bar --- */}
            <div className="flex flex-col md:flex-row gap-8 justify-between items-center mb-20 border-b border-gray-100 pb-8">
                
                {/* Search Bar: Minimalist Style */}
                <div className="relative w-full md:w-80 group">
                    <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-black transition-colors" size={16} />
                    <input
                        type="text"
                        placeholder="SEARCH FRAGRANCE..."
                        className="w-full pl-8 pr-4 py-2 bg-transparent outline-none text-[10px] tracking-[0.2em] border-none placeholder:text-gray-300"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Filter Controls */}
                <div className="flex items-center gap-10">
                    {/* Gender Filter */}
                    <div className="flex gap-6 items-center">
                        {['all', 'men', 'women', 'unisex'].map((g) => (
                            <button 
                                key={g}
                                onClick={() => setSelectedGender(g)}
                                className={`text-[10px] uppercase tracking-widest transition-all ${selectedGender === g ? 'text-black font-bold border-b border-black' : 'text-gray-400 hover:text-black'}`}
                            >
                                {g}
                            </button>
                        ))}
                    </div>

                    <div className="h-4 w-[1px] bg-gray-200 hidden md:block"></div>

                    {/* Category Dropdown: Replaced with clean select */}
                    <div className="relative group">
                        <select
                            className="appearance-none bg-transparent pr-8 py-2 text-[10px] uppercase tracking-widest outline-none cursor-pointer font-medium"
                            value={categoryFromUrl}
                            onChange={(e) => handleCategoryChange(e.target.value)}
                        >
                            <option value="all">All Categories</option>
                            <option value="long-lasting-impressions">Impressions</option>
                            <option value="daily-essentials">Daily Essentials</option>
                            <option value="body-mists">Body Mists</option>
                            <option value="pocket-luxuries">Pocket Luxuries</option>
                        </select>
                        <SlidersHorizontal size={12} className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
                    </div>
                </div>
            </div>

            {/* --- Product Grid --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => {
                        const isWishlisted = wishlistItems.some(i => i.id === product.id);
                        return (
                            <div key={product.id} className="group flex flex-col items-center text-center">
                                {/* Image Wrapper */}
                                <div className="relative aspect-[4/5] w-full bg-[#fafafa] overflow-hidden mb-8 transition-all duration-500">
                                    <Link to={`/product/${product.id}`} className="block w-full h-full">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                                        />
                                    </Link>

                                    {/* Action Icons */}
                                    <button
                                        onClick={() => isWishlisted ? removeFromWishlist(product.id) : addToWishlist(product)}
                                        className="absolute top-6 right-6 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                                    >
                                        <Heart size={16} fill={isWishlisted ? "black" : "none"} className={isWishlisted ? "text-black" : "text-gray-400"} />
                                    </button>

                                    {/* Quick Add: Sliding from bottom */}
                                    <button
                                        onClick={() => addToCart(product)}
                                        className="absolute bottom-0 left-0 right-0 bg-black text-white py-5 text-[10px] font-bold uppercase tracking-[0.3em] translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                                    >
                                        Quick Add +
                                    </button>
                                </div>

                                {/* Product Details */}
                                <div className="space-y-3">
                                    <p className="text-[9px] uppercase tracking-[0.3em] text-gray-400">
                                        {product.category.replace(/-/g, ' ')}
                                    </p>
                                    <Link to={`/product/${product.id}`}>
                                        <h3 className="text-xl font-light tracking-tight text-neutral-800 hover:text-black transition-colors">
                                            {product.name}
                                        </h3>
                                    </Link>
                                    <div className="flex flex-col items-center">
                                        <p className="text-sm font-medium tracking-widest text-black">
                                            ₹{product.price.toLocaleString('en-IN')}
                                        </p>
                                        <p className="mt-4 text-[9px] text-gray-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                            Key Notes: {product.notes.top}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="col-span-full py-40 text-center">
                        <p className="text-[11px] uppercase tracking-[0.4em] text-gray-300 italic">
                            No scents match your search criteria...
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}