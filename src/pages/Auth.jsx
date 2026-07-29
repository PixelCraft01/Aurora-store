import React, { useState, useEffect } from 'react';
import { auth, googleProvider } from '../firebase';
import { RecaptchaVerifier, signInWithPhoneNumber, signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Phone, ArrowRight, ShieldCheck, Mail } from 'lucide-react';

export default function Auth() {
    // Default test number as per your request
    const [phone, setPhone] = useState("+91 9509612559");
    const [otp, setOtp] = useState("");
    const [showOtpInput, setShowOtpInput] = useState(false);
    const [confirmationResult, setConfirmationResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // 1. Recaptcha Setup
    const setupRecaptcha = () => {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
                'size': 'invisible',
            });
        }
    };

    // 2. Google Login
    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            navigate('/');
        } catch (error) {
            console.error("Google Error:", error);
        }
    };

    // 3. Send OTP
    const onSignup = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            setupRecaptcha();
            const appVerifier = window.recaptchaVerifier;
            const formatPhone = "+" + phone.trim();

            const confirmation = await signInWithPhoneNumber(auth, formatPhone, appVerifier);
            setConfirmationResult(confirmation);
            setShowOtpInput(true);
        } catch (error) {
            console.error("OTP Error:", error);
            alert(`Error: ${error.code}`);
        } finally {
            setLoading(false);
        }
    };

    // 4. Verify OTP
    const onOTPVerify = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await confirmationResult.confirm(otp);
            navigate('/');
        } catch (error) {
            alert("Galat OTP hai bhai! 987654 try karo.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#fafafa] flex items-center justify-center px-4 py-12 font-sans">
            {/* Invisible Recaptcha */}
            <div id="recaptcha-container"></div>

            <div className="max-w-[450px] w-full bg-white border border-neutral-100 p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.02)] transition-all animate-in fade-in zoom-in duration-700">

                {/* Brand Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-extralight tracking-[0.4em] uppercase mb-3">Arome</h1>
                    <div className="h-[1px] w-12 bg-black mx-auto mb-6"></div>
                    <p className="text-[11px] text-neutral-400 uppercase tracking-[0.2em] font-medium">
                        {showOtpInput ? "Verify Identity" : "Member Sign In"}
                    </p>
                </div>

                {!showOtpInput ? (
                    <form onSubmit={onSignup} className="space-y-8">
                        <div className="group relative border-b border-neutral-200 pb-2 focus-within:border-black transition-all">
                            <label className="text-[9px] uppercase tracking-widest text-neutral-400 font-bold mb-1 block">Phone Number</label>
                            <div className="flex items-center gap-3">
                                <span className="text-[13px] text-neutral-400">+</span>
                                <input
                                    type="tel"
                                    placeholder="+91 9509612559"
                                    className="w-full bg-transparent outline-none text-[14px] tracking-[0.1em] placeholder:text-neutral-200"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-black text-white py-5 text-[10px] font-bold uppercase tracking-[0.25em] flex items-center justify-center gap-2 hover:bg-neutral-800 transition-all disabled:bg-neutral-400 group"
                        >
                            {loading ? "Sending..." : "Request Access"}
                            {!loading && <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />}
                        </button>

                        <div className="relative flex items-center py-2">
                            <div className="flex-grow border-t border-neutral-100"></div>
                            <span className="flex-shrink mx-4 text-[9px] text-neutral-300 uppercase tracking-widest">or continue with</span>
                            <div className="flex-grow border-t border-neutral-100"></div>
                        </div>

                        <button
                            type="button"
                            onClick={handleGoogleLogin}
                            className="w-full border border-neutral-200 py-4 text-[10px] font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-3 hover:bg-gray-50 transition-all text-neutral-600"
                        >
                            {/* Agar aapne pehle wala image tag rakha hai toh icon ki zarurat nahi, 
        varna ye Mail icon use kar lo */}
                            <Mail size={14} />
                            Google Account
                        </button>
                    </form>
                ) : (
                    <form onSubmit={onOTPVerify} className="space-y-8 animate-in slide-in-from-right-4 duration-500">
                        <div className="text-center space-y-2">
                            <p className="text-[12px] text-neutral-500">OTP sent to <span className="font-semibold text-black">+{phone}</span></p>
                        </div>

                        <div className="group relative border-b border-neutral-200 pb-2 focus-within:border-black transition-all">
                            <label className="text-[9px] uppercase tracking-widest text-neutral-400 font-bold mb-1 block text-center">Security Code</label>
                            <input
                                type="text"
                                placeholder="ENTER 987654"
                                className="w-full bg-transparent outline-none text-[20px] tracking-[0.8em] text-center font-light placeholder:tracking-normal placeholder:text-[12px] placeholder:text-neutral-200"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                maxLength={6}
                                required
                            />
                        </div>

                        <div className="space-y-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-black text-white py-5 text-[10px] font-bold uppercase tracking-[0.25em] flex items-center justify-center gap-2 hover:bg-neutral-800 transition-all"
                            >
                                {loading ? "Verifying..." : "Verify & Enter"}
                                <ShieldCheck size={14} />
                            </button>

                            <button
                                type="button"
                                onClick={() => setShowOtpInput(false)}
                                className="w-full text-[9px] uppercase tracking-[0.2em] text-neutral-400 hover:text-black transition-colors"
                            >
                                Change Phone Number
                            </button>
                        </div>
                    </form>
                )}

                {/* Footer Info */}
                <div className="mt-12 text-center text-[9px] text-neutral-300 uppercase tracking-widest leading-relaxed">
                    By signing in you agree to our <br />
                    <span className="text-neutral-400 cursor-pointer hover:underline">Terms of Service</span> & <span className="text-neutral-400 cursor-pointer hover:underline">Privacy Policy</span>
                </div>
            </div>
        </div>
    );
}