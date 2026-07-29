import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const InfoPage = () => {
    const location = useLocation();
    const currentPath = location.pathname.replace('/', '');

    // Agar path galat ho toh default 'faq' par jaye
    const [activeTab, setActiveTab] = useState('faq');

    useEffect(() => {
        // Sync tab with URL and handle scroll
        const tabToActivate = (currentPath && sections[currentPath]) ? currentPath : 'faq';
        setActiveTab(tabToActivate);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPath]); // Sirf currentPath par depend karega

    const sections = {
        faq: {
            title: "Frequently Asked Questions",
            subtitle: "Your immediate inquiries, clarified.",
            type: "list",
            content: [
                { q: "Are your fragrances truly authentic?", a: "Every creation at Aurora is a testament to authenticity. Sourced directly from prestigious distillation houses in Grasse and Dubai, we reject compromises. No imitations, only pure olfactory art." },
                { q: "Define the longevity of Aurora scents.", a: "Our Extrait de Parfum collection gracefully commands attention for 10-12 hours. Eau de Parfum offers a sophisticated presence for 6-8 hours, while our Body Mists provide a fleeting moment of freshness for 3-4 hours." },
                { q: "How must I preserve my olfactory investment?", a: "Protect your bottles like fine wine. Store in a cool, dark sanctuary, away from fluctuating temperatures and direct sunlight. Avoid the humidity of bathrooms to preserve the delicate balance of essential oils." },
                { q: "Is international shipping available?", a: "Currently, we curate deliveries across India. However, the world is our horizon, and we are meticulously finalizing logistics for international connoisseurs very soon." }
            ]
        },
        shipping: {
            title: "Shipping & Bespoke Returns",
            subtitle: "The journey of your scent, handled with grace.",
            type: "grid",
            details: [
                { h: "Curation Time", p: "Orders are verified and meticulously prepared within 24-48 business hours of acquisition." },
                { h: "Transit & Logistics", p: "Metro areas: 2-4 days. Rest of India: 5-7 days. Remote destinations may require up to 10 days of anticipation." },
                { h: "Returns & Exchanges", p: "We offer an exclusive 7-day return period, provided the creation remains sealed in its original, pristine packaging." },
                { h: "Compromised Cargo", p: "In the rare event of receiving a compromised bottle, share an unboxing video within 24 hours for a seamless replacement." }
            ]
        },
        privacy: {
            title: "Privacy & Digital Sanctuary",
            subtitle: "Your data, protected in our secure vault.",
            type: "grid",
            details: [
                { h: "Data Stewardship", p: "We request only essential information required to fulfill your orders and enhance your journey with us. Confidentiality is paramount." },
                { h: "Cookie Protocols", p: "Our site uses minimal cookies to remember your preferences and offer personalized recommendations. No intrusive tracking." },
                { h: "Sharing Policy", p: "We do not sell your data. We only share necessary details with trusted logistics partners like BlueDart." },
                { h: "Secure Transactions", p: "All payments are processed via highly encrypted (SSL) gateways. We do not store bank details on our servers." }
            ]
        }
    };

    // Safety check: Agar activeTab galti se undefined ho jaye
    const activeSection = sections[activeTab] || sections.faq;

    return (
        <div className="pt-40 pb-32 px-6 md:px-12 bg-[#FAF9F6] text-black min-h-screen font-sans">
            {/* Header Section */}
            <header className="max-w-7xl mx-auto mb-28 text-center">
                <div className="inline-flex items-center gap-4 mb-6">
                    <div className="w-12 h-[1px] bg-black/20"></div>
                    <span className="text-[10px] uppercase tracking-[0.6em] text-gray-400 font-medium">The Aurora Concierge</span>
                    <div className="w-12 h-[1px] bg-black/20"></div>
                </div>

                <h1 className="text-5xl md:text-7xl font-serif italic text-black leading-tight mb-8">
                    Client <span className="font-sans not-italic font-extralight text-gray-300">/</span> Assistance
                </h1>

                <div className="relative flex justify-center items-center">
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className="w-full border-t border-gray-100" />
                    </div>
                    <div className="relative bg-[#FAF9F6] px-6">
                        <span className="text-sm font-serif italic text-gray-500 tracking-widest">Guidance for your signature journey.</span>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
                {/* Sidebar Navigation */}
                <aside className="lg:w-1/4">
                    <nav className="sticky top-40 space-y-3">
                        {Object.keys(sections).map((key, index) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`w-full group text-left py-5 px-8 flex justify-between items-center transition-all duration-700 ease-out border ${activeTab === key
                                    ? "bg-black text-white border-black shadow-xl"
                                    : "bg-white text-gray-500 border-gray-100 hover:border-black hover:text-black"
                                    }`}
                            >
                                <div className="flex flex-col gap-1">
                                    <span className={`text-[9px] tracking-[0.4em] uppercase ${activeTab === key ? "text-gray-400" : "text-gray-300 group-hover:text-gray-400"}`}>
                                        Section 0{index + 1}
                                    </span>
                                    <span className="text-xs uppercase tracking-[0.3em] font-medium">
                                        {key}
                                    </span>
                                </div>
                                <svg
                                    className={`w-4 h-4 transition-transform duration-500 ${activeTab === key ? "translate-x-0" : "-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"}`}
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        ))}
                    </nav>
                </aside>

                {/* Content Area */}
                <main className="lg:w-3/4">
                    <div className="mb-16 pb-8 border-b border-gray-100">
                        <p className="text-[10px] uppercase tracking-[0.5em] text-gray-400 mb-3">Aurora / {activeTab}</p>
                        <h2 className="text-4xl font-light tracking-widest uppercase text-black mb-4">
                            {activeSection.title}
                        </h2>
                        <p className="text-gray-500 italic font-serif text-lg tracking-wide">
                            {activeSection.subtitle}
                        </p>
                    </div>

                    {/* Dynamic Rendering */}
                    <div className="text-gray-600 leading-relaxed tracking-wide text-sm">
                        {activeSection.type === 'list' && (
                            <div className="space-y-6">
                                {activeSection.content.map((item, index) => (
                                    <div key={index} className="group relative bg-white border border-gray-100 p-8 md:p-10 transition-all duration-700 hover:border-black hover:shadow-2xl hover:-translate-y-1">
                                        <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-transparent group-hover:border-black transition-all duration-700"></div>
                                        <div className="flex flex-col gap-6">
                                            <div className="flex justify-between items-center gap-6">
                                                <p className="text-black font-bold uppercase text-[11px] tracking-[0.3em] flex items-center gap-6">
                                                    <span className="w-10 h-10 flex items-center justify-center border border-gray-100 rounded-full text-[10px] text-gray-400 group-hover:border-black group-hover:text-black">0{index + 1}</span>
                                                    {item.q}
                                                </p>
                                                <div className="w-5 h-5 opacity-20 group-hover:opacity-100 transition-opacity">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 4v16m8-8H4" /></svg>
                                                </div>
                                            </div>
                                            <div className="pl-16 border-l border-gray-50 group-hover:border-black">
                                                <p className="text-gray-500 italic font-serif leading-relaxed text-lg">{item.a}</p>
                                            </div>
                                        </div>
                                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-1000"></div>
                                    </div>
                                ))}
                            </div>
                        )}

                        {activeSection.type === 'grid' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                                {activeSection.details.map((item, index) => (
                                    <div key={index} className="relative group p-8 bg-white border border-gray-50 hover:border-black transition-all duration-700 shadow-sm hover:shadow-2xl">
                                        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-black/10 group-hover:border-black" />
                                        <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-black mb-5 pb-3 border-b border-gray-100">{item.h}</h3>
                                        <p className="text-gray-500 text-sm leading-loose tracking-wide font-light">{item.p}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default InfoPage;