import React from "react";
import * as Lucide from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {

    // ............ WHATSAPP LOGIC START 
    const sendWhatsApp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        //------- WhatsApp Message Format
        const text = `✨ *New Inquiry from Journal* ✨%0A%0A👤 *Name:* ${name}%0A📧 *Email:* ${email}%0A💬 *Message:* ${message}`;

        //------- MY Number (9509612559)
        const url = `https://wa.me/919509612559?text=${text}`;

        window.open(url, "_blank");
        form.reset(); // Form clear karne ke liye
    };
    // ............ WHATSAPP LOGIC END 

    return (
        <div className="w-full min-h-screen bg-[#FAF9F6] selection:bg-black selection:text-white">

            {/* 1. HERO SECTION */}
            <section className="relative h-[40vh] flex items-center justify-center bg-black overflow-hidden">
                <div className="absolute inset-0 opacity-20 grainy-noise pointer-events-none"></div>
                <div className="relative z-10 text-center px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                        <span className="text-[10px] text-white/40 uppercase mb-4 block font-bold tracking-widest">Connect</span>
                        <h1 className="text-6xl md:text-8xl font-serif italic text-white tracking-tighter">Contact</h1>
                    </motion.div>
                </div>
            </section>

            {/* 2. CONTACT GRID */}
            <section className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 py-24">

                {/* LEFT INFO */}
                <div className="lg:col-span-5 space-y-6">
                    <div className="bg-white/80 backdrop-blur-3xl border border-white p-10 rounded-[40px] shadow-sm space-y-12">
                        <h2 className="text-4xl font-serif italic mb-10">Keep In <span className=" text-rose-400"> Touch </span></h2>
                        <div className="space-y-10">
                            {[{
                                icon: <Lucide.MapPin size={18} />,
                                label: "Studio", val: "Jaipur, Rajasthan"
                            }, {
                                icon: <Lucide.Mail size={18} />,
                                label: "Email", val: "prajapatnilesh001@gmail.com"
                            }, {
                                icon: <Lucide.Phone size={18} />,
                                label: "Hotline", val: "+91 9509612559"
                            }, {
                                icon: <Lucide.Clock size={18} />,
                                label: "Hours", val: "Mon - Fri : 8AM - 8PM"
                            }].map((item, i) => (<div key={i} className="flex gap-6 items-center group">
                                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                                    {item.icon}
                                </div>
                                <div>
                                    <p className="text-[9px] font-black tracking-widest text-gray-300 uppercase mb-1">
                                        {item.label}
                                    </p>
                                    <p className="text-sm font-bold text-black">
                                        {item.val}
                                    </p>
                                </div>
                            </div>
                            )
                            )
                            }
                        </div>
                    </div>
                </div>

                {/* RIGHT FORM ( + WhatsApp Function) */}
                <div className="lg:col-span-7">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="bg-white border border-gray-100 p-10 md:p-16 rounded-[40px] shadow-xl shadow-gray-200/50"
                    >
                        {/* FORM START */}
                        <form onSubmit={sendWhatsApp} className="space-y-12">
                            <div className="grid md:grid-cols-2 gap-10">
                                <div className="relative group">
                                    <input type="text" name="name" required placeholder=" " className="w-full bg-transparent border-b border-gray-100 py-4 outline-none focus:border-black transition-all peer" />
                                    <label className="absolute left-0 top-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 peer-focus:-top-4 peer-focus:text-black peer-[:not(:placeholder-shown)]:-top-4">Name</label>
                                </div>
                                <div className="relative group">
                                    <input type="email" name="email" required placeholder=" " className="w-full bg-transparent border-b border-gray-100 py-4 outline-none focus:border-black transition-all peer" />
                                    <label className="absolute left-0 top-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 peer-focus:-top-4 peer-focus:text-black peer-[:not(:placeholder-shown)]:-top-4">Email</label>
                                </div>
                            </div>

                            <div className="relative group">
                                <textarea name="message" rows="4" required placeholder=" " className="w-full bg-transparent border-b border-gray-100 py-4 outline-none focus:border-black transition-all peer resize-none"></textarea>
                                <label className="absolute left-0 top-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 peer-focus:-top-4 peer-focus:text-black peer-[:not(:placeholder-shown)]:-top-4">Your Message</label>
                            </div>

                            <button type="submit" className="group flex items-center gap-4 bg-black text-white px-12 py-5 rounded-full text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-gray-800 transition-all active:scale-95 shadow-2xl">
                                Send Inquiry <Lucide.Send size={14} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                        {/* FORM END */}
                    </motion.div>
                </div>
            </section>

            {/* 3. MAP */}
            <section className="px-6 pb-32">
                <div className="max-w-7xl mx-auto h-[450px] rounded-[40px] overflow-hidden grayscale border border-gray-100 shadow-sm">
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113883.2505505085!2d75.72051786523438!3d26.876483499999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db70000000001%3A0xc367610667d71060!2sJaipur!5e0!3m2!1sen!2sin!4v1712160000000!5m2!1sen!2sin"
                        className="w-full h-full border-0"
                        loading="lazy"
                    ></iframe>
                </div>
            </section>


        </div>
    );
}