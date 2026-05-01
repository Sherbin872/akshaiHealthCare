import React, { useState, useEffect, useRef } from 'react';
import { Phone, CalendarCheck, Shield, Star, ChevronRight, HeadphonesIcon, Users, Zap } from 'lucide-react';
import application from '../assets/Application Form.pdf';

const CTA = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [count, setCount] = useState(0);
    const [hasCounted, setHasCounted] = useState(false);
    const [isPulsing, setIsPulsing] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (!hasCounted) {
                        setHasCounted(true);
                        animateCount();
                    }
                }
            },
            { threshold: 0.3 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, [hasCounted]);

    useEffect(() => {
        if (!isVisible) return;
        const pulseInterval = setInterval(() => {
            setIsPulsing(true);
            setTimeout(() => setIsPulsing(false), 600);
        }, 3000);
        return () => clearInterval(pulseInterval);
    }, [isVisible]);

    const animateCount = () => {
        const target = 10000;
        const duration = 1800;
        const startTime = performance.now();
        const tick = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(target);
        };
        requestAnimationFrame(tick);
    };

    return (
        <section ref={sectionRef} className="relative py-10 sm:py-12 lg:py-14 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0F1D4A] via-[#1E3A8A] to-[#2563EB]" />

            {/* Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-float-particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 5}s`,
                            opacity: 0.08 + Math.random() * 0.2,
                        }}
                    />
                ))}
            </div>

            {/* Expanding Rings */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[0, 0.8, 1.6].map((delay, i) => (
                    <div
                        key={i}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] border border-white/5 rounded-full animate-ring-expand"
                        style={{ animationDelay: `${delay}s` }}
                    />
                ))}
            </div>

            {/* Glowing Orbs */}
            <div className="absolute top-0 right-1/4 w-60 h-60 bg-[#3B82F6]/25 rounded-full blur-[80px] animate-blob" />
            <div className="absolute bottom-0 left-1/4 w-60 h-60 bg-[#DC2626]/15 rounded-full blur-[80px] animate-blob" style={{ animationDelay: '3s' }} />

            {/* Dot Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:28px_28px]" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Urgency Badge */}
                    <div
                        className={`inline-flex items-center gap-2 bg-[#DC2626]/20 backdrop-blur-sm border border-[#DC2626]/25 px-3 py-1.5 rounded-full mb-4 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                            }`}
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DC2626] opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#DC2626]" />
                        </span>
                        <span className="text-white font-semibold text-[11px] sm:text-xs tracking-wide">
                            LIMITED SLOTS — BOOK NOW
                        </span>
                    </div>

                    {/* Headline */}
                    <h2
                        className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white mb-2 sm:mb-3 tracking-tight leading-[1.15] transition-all duration-600 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                            }`}
                    >
                        Need Immediate
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#93C5FD] to-white">
                            Healthcare Support?
                        </span>
                    </h2>

                    {/* Subheadline + Trust line */}
                    <div
                        className={`transition-all duration-600 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <p className="text-white/65 text-sm sm:text-base mb-1.5">
                            Our team is available 24/7 — professional care at your doorstep
                        </p>
                        <p className="text-white/40 text-xs mb-5 sm:mb-6">
                            <Zap className="w-3 h-3 text-[#FBBF24] inline mr-1" />
                            Most patients receive care within <strong className="text-white/60">2 hours</strong>
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div
                        className={`flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center mb-5 sm:mb-6 transition-all duration-600 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                            }`}
                    >
                        {/* Primary — Call Now */}
                        <a
                            href="tel:+919442659377"
                            className={`group relative inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3 sm:py-3.5 bg-[#DC2626] text-white font-bold text-sm sm:text-base rounded-xl transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-2xl overflow-hidden ${isPulsing ? 'animate-cta-pulse' : ''
                                }`}
                            style={{ boxShadow: '0 6px 30px -4px rgba(220,38,38,0.45), 0 0 0 3px rgba(220,38,38,0.12)' }}
                        >
                            <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/12 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700" />
                            <div className="absolute inset-0 rounded-xl border border-white/15 animate-ripple" />
                            <div className="relative flex items-center gap-2.5">
                                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                                </div>
                                <div className="text-left">
                                    <div className="font-extrabold">Call Now</div>
                                    <div className="text-[10px] sm:text-xs text-white/75 font-medium">+91 94426 59377</div>
                                </div>
                                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </a>

                        {/* Secondary — Book */}
                        <a
                            href="#appointment"
                            className="group relative inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3 sm:py-3.5 bg-white text-[#1E3A8A] font-bold text-sm sm:text-base rounded-xl transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-xl overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#EFF6FF]/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            <div className="relative flex items-center gap-2.5">
                                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#EFF6FF] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <CalendarCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#1E3A8A]" />
                                </div>
                                <a href={application} download className="flex items-center gap-3">
                                    <div className="text-left">
                                        <div className="font-extrabold">Download Application</div>
                                        <div className="text-[10px] sm:text-xs text-gray-500 font-medium">
                                            Get the application form
                                        </div>
                                    </div>
                                </a>
                                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#1E3A8A] group-hover:translate-x-1 transition-transform" />
                            </div>
                        </a>
                    </div>

                    {/* Trust Indicators */}
                    <div
                        className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-6 transition-all duration-600 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        {[
                            { icon: Shield, text: 'Verified', color: '#16A34A' },
                            { icon: Star, text: 'Supervised', color: '#FBBF24' },
                            { icon: HeadphonesIcon, text: '24/7', color: '#3B82F6' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-1.5 text-white/70 text-[11px] sm:text-xs font-medium">
                                <item.icon className="w-3.5 h-3.5" style={{ color: item.color }} />
                                {item.text}
                            </div>
                        ))}
                    </div>

                    {/* Social Proof Bar */}
                    <div
                        className={`inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl px-4 py-2.5 sm:px-5 sm:py-3 border border-white/8 transition-all duration-600 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}
                    >
                        {/* Avatars */}
                        <div className="flex -space-x-2.5">
                            {['#3B82F6', '#16A34A', '#9333EA', '#DC2626', '#EA580C'].map((color, i) => (
                                <div
                                    key={i}
                                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white/15 flex items-center justify-center shadow-md"
                                    style={{ backgroundColor: color, zIndex: 5 - i }}
                                >
                                    <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/70" />
                                </div>
                            ))}
                        </div>
                        {/* Counter + Stars */}
                        <div className="text-left">
                            <div className="flex items-baseline gap-1">
                                <span className="text-lg sm:text-xl font-extrabold text-white tabular-nums">{count.toLocaleString()}+</span>
                                <span className="text-white/50 text-[10px] sm:text-xs">families</span>
                            </div>
                            <div className="flex items-center gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#FBBF24] fill-[#FBBF24]" />
                                ))}
                                <span className="text-white/40 text-[9px] sm:text-[10px] ml-1">98% satisfaction</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />

            <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -15px) scale(1.1); }
        }
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(-350px) translateX(15px); opacity: 0; }
        }
        @keyframes ringExpand {
          0% { transform: translate(-50%, -50%) scale(0.7); opacity: 0.6; }
          100% { transform: translate(-50%, -50%) scale(1.6); opacity: 0; }
        }
        @keyframes ripple {
          0% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(1.06); opacity: 0; }
        }
        @keyframes ctaPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        .animate-blob { animation: blob 8s ease-in-out infinite; }
        .animate-float-particle { animation: floatParticle 4s ease-in infinite; }
        .animate-ring-expand { animation: ringExpand 2.5s ease-out infinite; }
        .animate-ripple { animation: ripple 1.5s ease-out infinite; }
        .animate-cta-pulse { animation: ctaPulse 0.5s ease; }
      `}</style>
        </section>
    );
};

export default CTA;