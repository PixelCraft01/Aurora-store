import React, { useState } from "react";
import { Search, ArrowRight, Mail, Camera } from "lucide-react";
import sandalwoodImg from "../assets/images/Sandalwood (2).jpg"

const blogsData = [
    { id: 1, title: "The Art of Scent Layering", desc: "Discover how to combine different notes to create your own unique signature...", date: "APR 03, 2026", category: "Guide", img: "https://images.unsplash.com/photo-1594035910387-fea47794261f" },
    { id: 2, title: "Top 5 Summer Fragrances 2026", desc: "Fresh and long-lasting scents perfect for hot weather and beach nights...", date: "MAR 28, 2026", category: "Trends", img: "https://images.unsplash.com/photo-1541643600914-78b084683601" },
    { id: 3, title: "History of Luxury Perfumes", desc: "Explore the origins of the world’s finest fragrances from royal courts...", date: "MAR 20, 2026", category: "Stories", img: sandalwoodImg },
    { id: 5, title: "Floral Notes & Spring", desc: "The best floral arrangements for your vanity this season...", date: "MAR 10, 2026", category: "Trends", img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539" },
    { id: 8, title: "Minimalist Bottle Art", desc: "How design influences our perception of scent...", date: "FEB 25, 2026", category: "Trends", img: "https://images.unsplash.com/photo-1590736704728-f4730bb30770" },
    { id: 9, title: "Ocean Breeze Secrets", desc: "The chemistry behind aquatic and fresh notes...", date: "FEB 20, 2026", category: "Guide", img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15" },
    { id: 10, title: "Vintage Collection Guide", desc: "How to find and store classic perfumes from the 90s...", date: "FEB 15, 2026", category: "Stories", img: "https://images.unsplash.com/photo-1588159343745-445ae0b16383" },
    { id: 11, title: "The Sandalwood Trail", desc: "A journey through the forests where luxury begins...", date: "JAN 30, 2026", category: "Stories", img: "https://images.unsplash.com/photo-1595425959632-34f2822322ce" }
];

export default function Blog() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    const filteredBlogs = blogsData.filter((blog) => {
        const matchSearch = blog.title.toLowerCase().includes(search.toLowerCase());
        const matchCategory = category === "All" || blog.category === category;
        return matchSearch && matchCategory;
    });

    return (
        <div className="w-full min-h-screen bg-[#FAF9F6] font-sans text-[#1a1a1a]">

            {/* 1. HERO SECTION - Fixed Noise Issue */}
            <section className="relative h-[50vh] flex items-center justify-center bg-black overflow-hidden">
                <div className="absolute inset-0 opacity-[0.15] grainy-noise pointer-events-none"></div>
                <div className="relative z-10 text-center space-y-4">
                    <span className="text-[10px] tracking-[0.6em] text-white/50 uppercase">The Sensory Journal</span>
                    <h1 className="text-5xl md:text-8xl font-serif italic text-white tracking-tighter leading-none">
                        Stories <span className="not-italic font-sans font-light">&</span> Notes
                    </h1>
                </div>
            </section>

            {/* 2. FILTER BAR - Minimalist */}
            <div className="sticky top-0 z-50 px-2 sm:px-4 py-4 sm:py-8">
                {/* Floating Container - Changed h-24 to min-h-[4rem] and added flex-wrap */}
                <div className="max-w-7xl mx-auto bg-white/60 backdrop-blur-3xl border border-white/60 shadow-[0_30px_100px_rgba(0,0,0,0.05)] rounded-[24px] sm:rounded-[32px] px-4 sm:px-6 py-4 sm:py-0 sm:h-24 flex flex-col md:flex-row justify-between items-center gap-4 group transition-all duration-1000">

                    {/* Category Segmented Control - Added overflow-x-auto for mobile scrolling */}
                    <nav className="flex items-center p-1 bg-gray-100/50 rounded-[20px] relative w-full md:w-auto overflow-x-auto no-scrollbar">
                        {["All", "Guide", "Trends", "Stories"].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setCategory(cat)}
                                className={`relative z-10 px-4 sm:px-8 py-2 sm:py-3 text-[8px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.4em] uppercase font-black transition-all duration-500 whitespace-nowrap flex-1 md:flex-none ${category === cat ? "text-black" : "text-gray-400 hover:text-gray-600"
                                    }`}
                            >
                                {cat}
                                {category === cat && (
                                    <div className="absolute inset-0 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] rounded-[16px] -z-10 transition-all duration-500 border border-gray-100"></div>
                                )}
                            </button>
                        ))}
                    </nav>

                    {/* Action Interface (Search + Mail) */}
                    <div className="flex items-center justify-between w-full md:w-auto gap-4 sm:gap-6">

                        {/* Search Interface - Adjusted for mobile */}
                        <div className="relative group flex items-center flex-1 md:flex-none">
                            <input
                                type="text"
                                placeholder="SEARCH..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="bg-gray-100/50 md:bg-transparent border-b border-gray-200 py-2 pl-4 pr-10 md:pl-0 text-[10px] tracking-[0.2em] font-bold uppercase outline-none focus:border-black transition-all duration-700 w-full md:w-32 md:focus:w-64 rounded-full md:rounded-none placeholder:text-gray-400"
                            />
                            <div className={`absolute right-2 md:right-0 p-1.5 rounded-full transition-all duration-500 ${search ? "bg-black text-white" : "text-gray-300"}`}>
                                <Search size={12} strokeWidth={3} />
                            </div>
                        </div>

                        {/* Aesthetic Divider - Hidden on mobile */}
                        <div className="h-6 w-[1px] bg-gray-200 hidden md:block"></div>

                        {/* Newsletter Shortcut - Scaled down for mobile */}
                        <div className="p-2.5 sm:p-3 bg-black text-white rounded-xl sm:rounded-2xl hover:scale-110 transition-transform cursor-pointer shadow-xl flex items-center justify-center">
                            <Mail size={14} className="sm:w-4 sm:h-4" />
                        </div>
                    </div>

                </div>
            </div>

            {/* 3. BLOG CONTENT */}
            <main className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-16">

                {/* BLOG GRID - Left Side (8 Columns) */}
                <div className="lg:col-span-8">
                    {/* Sub-grid for Cards: Mobile pe 1, Tablet/Desktop pe 2 cards ek row mein */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                        {filteredBlogs.map((blog) => (
                            <article key={blog.id} className="group cursor-pointer flex flex-col">
                                {/* Image Container */}
                                <div className="relative aspect-[4/5] overflow-hidden mb-6 rounded-sm">
                                    <img
                                        src={blog.img}
                                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
                                        alt={blog.title}
                                    />

                                    {/* --- OVERLAY TAGS (TOP LEFT) --- */}
                                    <div className="absolute top-4 right-4 flex flex-col gap-1 z-10">
                                        {/* Category Tag */}
                                        {/* <span className="bg-white/90 backdrop-blur-md text-black text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1.5 shadow-sm">
                                            {blog.category}
                                        </span> */}
                                        {/* Date Tag */}
                                        <span className="bg-black/80 backdrop-blur-md text-white text-[7px] font-medium uppercase tracking-widest px-3 py-1">
                                            {blog.date}
                                        </span>
                                    </div>

                                    {/* Subtle Dark Gradient to make tags pop */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent opacity-60"></div>

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all"></div>
                                </div>

                                {/* Text Content (Baaki sab same) */}
                                <div className="space-y-3 flex-1">
                                    <h2 className="text-xl md:text-2xl font-serif italic group-hover:text-gray-600 transition-colors leading-tight">
                                        {blog.title}
                                    </h2>

                                    <p className="text-gray-500 font-light text-sm leading-relaxed line-clamp-3">
                                        {blog.desc}
                                    </p>

                                    <button className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.3em] group-hover:gap-4 transition-all pt-2 border-b border-transparent hover:border-black w-fit pb-1">
                                        Read Article <ArrowRight size={12} />
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredBlogs.length === 0 && (
                        <div className="py-20 text-center border-2 border-dashed border-gray-100 rounded-3xl">
                            <p className="text-gray-400 font-serif italic">The scent has faded away...</p>
                        </div>
                    )}
                </div>

                {/* SIDEBAR - Right Side (4 Columns) */}
                <aside className="lg:col-span-4 space-y-16">
                    {/* About Widget */}
                    <div className="p-8 bg-white border border-gray-100 rounded-2xl space-y-6 sticky top-32">
                        <h3 className="text-xs font-bold uppercase tracking-widest border-b pb-4">The Editor's Note</h3>
                        <p className="text-sm text-gray-500 leading-relaxed font-light italic">
                            "Arome Journal is a space where we explore the intersection of fragrance, memory, and art."
                        </p>
                        <div className="flex gap-4 text-gray-400">
                            <Camera size={18} className="hover:text-black cursor-pointer transition-colors" />
                            <Mail size={18} className="hover:text-black cursor-pointer transition-colors" />
                        </div>

                        {/* Trending Section inside Sidebar */}
                        <div className="pt-10 space-y-8">
                            <h3 className="text-xs font-bold uppercase tracking-widest">Trending Now</h3>
                            {blogsData.slice(0, 3).map((b) => (
                                <div key={b.id} className="flex items-center gap-4 group">
                                    <div className="w-16 h-16 shrink-0 overflow-hidden rounded-lg bg-gray-100">
                                        <img src={b.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt={b.title} />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-medium leading-tight group-hover:underline">{b.title}</h4>
                                        <span className="text-[8px] text-gray-400 uppercase tracking-tighter">{b.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
            </main>

            <>
                {/* 4. NEWSLETTER SECTION - Added New */}
                <section className="py-32 bg-[#0d0d0d] text-white">
                    <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
                        <span className="text-[10px] tracking-[0.8em] text-white/40 uppercase font-bold">The Insider</span>
                        <h2 className="text-4xl md:text-6xl font-serif italic">Join the Sensory Circle</h2>
                        <p className="text-gray-400 font-light max-w-lg mx-auto">
                            Get exclusive access to private launches, olfactory stories, and luxury trends directly in your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full sm:w-80 bg-transparent border-b border-white/20 py-3 text-sm focus:border-white outline-none transition-all"
                            />
                            <button className="px-10 py-4 bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-all">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </section>
                f ejrfn

            </>

            {/* 4. NEWSLETTER SECTION - Added New */}
            <section className="py-32 bg-[#0d0d0d] text-white">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
                    <span className="text-[10px] tracking-[0.8em] text-white/40 uppercase font-bold">The Insider</span>
                    <h2 className="text-4xl md:text-6xl font-serif italic">Join the Sensory Circle</h2>
                    <p className="text-gray-400 font-light max-w-lg mx-auto">
                        Get exclusive access to private launches, olfactory stories, and luxury trends directly in your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full sm:w-80 bg-transparent border-b border-white/20 py-3 text-sm focus:border-white outline-none transition-all"
                        />
                        <button className="px-10 py-4 bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-gray-200 transition-all">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
}