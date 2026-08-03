import React from 'react';
import { Award, Leaf, Zap, Droplets, ArrowRight } from 'lucide-react';

// --- Images Import ---
// Extension aur path check kar lena (e.g., .jpg, .png)
import roseImg from '../assets/images/Bulgarian Rose (2).jpg';
import vanilla from '../assets/images/Madagascar Vanilla (2).jpg'
import sandalwood from '../assets/images/Sandalwood (2).jpg'
import productHero from '../assets/images/product (6).jpg';

export default function About() {
    // --- Data Arrays ---
    const ingredients = [
        { name: "Bulgarian Rose", note: "Floral", img: roseImg },
        { name: "Madagascar Vanilla", note: "Sweet", img: vanilla },
        { name: "Sandalwood", note: "Woody", img: sandalwood }
    ];

    const values = [
        { icon: <Leaf size={24} strokeWidth={1} />, title: "Sustainable", desc: "Eco-conscious sourcing" },
        { icon: <Droplets size={24} strokeWidth={1} />, title: "Potent", desc: "High oil concentration" },
        { icon: <Award size={24} strokeWidth={1} />, title: "Artisan", desc: "Batch crafted by hand" },
        { icon: <Zap size={24} strokeWidth={1} />, title: "Cruelty-Free", desc: "100% Vegan ingredients" }
    ];

    return (
        <div className="bg-[#FAF9F6] min-h-screen font-sans text-[#1a1a1a] overflow-x-hidden">

            {/* 1. HERO SECTION */}
            <section className="relative h-[80vh] flex items-center justify-center bg-[#0d0d0d] overflow-hidden">
                <div className="absolute inset-0 opacity-60">
                    <img
                        src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=1600"
                        alt="Hero"
                        className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-[3s] ease-out"
                    />
                </div>
                <div className="relative z-10 text-center px-6">
                    <span className="block text-[10px] md:text-xs tracking-[0.8em] uppercase text-white/60 mb-4 animate-pulse">
                        Established 2026
                    </span>
                    <h1 className="text-5xl md:text-9xl font-light tracking-tight text-white mb-8">
                        Aurora
                    </h1>
                    <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-white/80 max-w-md mx-auto border-t border-white/20 pt-8">
                        The Silent Language of Luxury
                    </p>
                </div>
            </section>

            {/* 2. PHILOSOPHY */}
            <section className="max-w-7xl mx-auto py-20 md:py-32 px-6 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
                <div className="space-y-8 md:space-y-10 group text-center md:text-left">
                    <h2 className="text-3xl md:text-5xl font-serif italic text-gray-900 leading-tight">
                        Crafting Memories, <br />
                        <span className="not-italic font-sans font-light tracking-tighter text-gray-400">Not Just Scents.</span>
                    </h2>
                    <p className="text-gray-500 leading-relaxed text-base md:text-lg font-light max-w-lg mx-auto md:mx-0">
                        At Aurora, we don't follow trends. We follow the soul. Every bottle is a culmination of
                        <span className="text-black font-medium px-1 underline decoration-gray-200">Nilesh Prajapat's</span> vision.
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-4 text-[10px] font-bold uppercase tracking-[0.3em] cursor-pointer group-hover:gap-6 transition-all">
                        Discover the craft <ArrowRight size={14} />
                    </div>
                </div>

                <div className="relative group mx-auto w-full max-w-md md:max-w-none">
                    <div className="relative z-10 aspect-[3/4] overflow-hidden rounded-sm shadow-2xl">
                        <img
                            src={productHero}
                            className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                            alt="Craft"
                        />
                    </div>
                    <div className="absolute -top-3 -right-3 md:-top-6 md:-right-6 w-full h-full border border-black/5 -z-0 group-hover:translate-x-2 transition-transform duration-700"></div>
                </div>
            </section>

            {/* 3. INGREDIENTS */}
            <section className="py-20 md:py-32 bg-white relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12 md:mb-24 space-y-4">
                        <span className="text-[10px] tracking-[0.5em] text-gray-400 uppercase font-bold">The Palette</span>
                        <h2 className="text-3xl md:text-4xl font-serif italic">Nature's Rarest</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                        {ingredients.map((ing, i) => (
                            <div key={i} className="group relative bg-white p-4 hover:shadow-xl transition-all duration-700 rounded-xl">
                                <div className="relative h-[320px] md:h-[400px] overflow-hidden rounded-lg">
                                    <img src={ing.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]" alt={ing.name} />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-500"></div>
                                    <div className="absolute inset-x-0 bottom-0 p-4 md:p-8 text-white translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                        <p className="text-[9px] tracking-[0.4em] uppercase opacity-60 mb-2">{ing.note}</p>
                                        <h4 className="text-lg md:text-xl font-light tracking-widest uppercase mb-4">{ing.name}</h4>
                                        <div className="w-8 group-hover:w-full h-[1px] bg-white/30 transition-all duration-700"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. VALUES */}
            <section className="py-20 md:py-32 bg-[#FAF9F6]">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
                    {values.map((val, idx) => (
                        <div key={idx} className="bg-[#FAF9F6] p-6 md:p-12 text-center group hover:bg-white transition-colors duration-500">
                            <div className="flex justify-center text-gray-400 group-hover:text-black mb-6 transition-all">
                                {val.icon}
                            </div>
                            <h4 className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] mb-2">{val.title}</h4>
                            <p className="text-[9px] md:text-[10px] text-gray-400 font-light">{val.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. CALL TO ACTION */}
            {/* 5. CALL TO ACTION - Black Sleek Section */}

            <section className="py-24 md:py-40 bg-black text-white relative overflow-hidden">

                {/* Background Text Overlay */}

                <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none">
                    <span className="text-[20vw] font-bold uppercase">Aurora</span>
                </div>

                <div className="relative z-10 text-center space-y-8 md:space-y-12 max-w-3xl mx-auto px-6">

                    <h2 className="text-4xl md:text-6xl font-serif italic leading-tight">
                        Your Signature Awaits.
                    </h2>

                    <button className="relative group overflow-hidden border border-white/30 px-10 py-4 md:px-16 md:py-6 transition-all duration-500">
                        <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.4em] group-hover:text-black transition-colors">
                            Enter the Boutique
                        </span>
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    </button>
                </div>
            </section>

            {/* 6. TESTIMONIALS */}
            <section className="py-20 md:py-32 bg-white">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    <span className="text-[10px] tracking-[0.5em] text-gray-400 uppercase font-bold">Voices</span>
                    <h2 className="text-3xl md:text-4xl font-serif italic mt-4 mb-10 md:mb-16">The Sensory Journal</h2>
                    <div className="relative p-6 md:p-12 border border-gray-100 rounded-3xl hover:border-black transition-all duration-1000">
                        <p className="text-xl md:text-3xl font-light italic text-gray-700">
                            "Aurora isn't just a fragrance; it's a memory captured in a bottle. The Sandalwood notes take me back home."
                        </p>
                        <div className="mt-6 md:mt-10 flex flex-col items-center">
                            <div className="w-10 h-[1px] bg-black mb-4"></div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-black">Ananya Birla</span>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}