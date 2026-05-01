import React, { useState, useEffect, useRef } from 'react';
import { FileText, ClipboardEdit, Download, ArrowRight, CheckCircle, Shield, Sparkles, Star, Clock, Phone, Zap, BadgeCheck } from 'lucide-react';
import brochure from '../assets/Akshai Healthcare Service Brochure.pdf';
import application from '../assets/Application Form.pdf';
const DownloadSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeCard, setActiveCard] = useState(null);
    const sectionRef = useRef(null);

    const downloadCards = [
        {
            icon: FileText,
            title: 'Download Brochure',
            subtitle: 'Complete Healthcare Guide',
            description:
                'Get detailed information about our services, plans, pricing, and healthcare solutions — all in one comprehensive document.',
            buttonText: 'Download Brochure',
            buttonIcon: Download,
            href: brochure,
            color: '#1E3A8A',
            gradient: 'from-[#1E3A8A] to-[#3B82F6]',
            bgLight: 'bg-[#EFF6FF]',
            buttonGradient: 'from-[#1E3A8A] to-[#2563EB]',
            accentColor: '#1E3A8A',
            tag: 'PDF Guide',
            features: [
                { icon: BadgeCheck, text: 'Complete service catalog with detailed descriptions' },
                { icon: BadgeCheck, text: 'Plan comparison — Premium, Elite, Classic & Basic' },
                { icon: BadgeCheck, text: 'Updated pricing: Premium ₹45K | Elite ₹35K | Classic ₹25K | Basic ₹15K' },
                { icon: BadgeCheck, text: 'Coverage areas: Tirunelveli, Tuticorin, Tenkasi, Kanyakumari' },
            ],
            highlight: '50% OFF LAUNCH PRICING',
        },
        {
            icon: ClipboardEdit,
            title: 'Download Application Form',
            subtitle: 'Quick Assessment & Enrollment',
            description:
                'Ready to start? Fill our comprehensive assessment form — caregiver preferences, medical needs, shift timings & more.',
            buttonText: 'Download Form',
            buttonIcon: ClipboardEdit,
            href: application,
            color: '#16A34A',
            gradient: 'from-[#16A34A] to-[#22C55E]',
            bgLight: 'bg-[#F0FDF4]',
            buttonGradient: 'from-[#16A34A] to-[#15803D]',
            accentColor: '#16A34A',
            tag: 'Assessment',
            features: [
                { icon: BadgeCheck, text: 'Patient condition assessment & medical history' },
                { icon: BadgeCheck, text: 'Caregiver selection: 12hr / 24hr shifts, language preference' },
                { icon: BadgeCheck, text: 'Service needs: Nursing, physio, diagnostics, dental & more' },
                { icon: BadgeCheck, text: 'Instant submission — start care within 24 hours' },
            ],
            highlight: 'START CARE IN 24 HRS',
        },
    ];

    const floatingIcons = [
        { icon: FileText, color: '#1E3A8A', top: '10%', left: '5%', size: 'w-5 h-5', delay: '0s' },
        { icon: ClipboardEdit, color: '#16A34A', top: '80%', left: '92%', size: 'w-5 h-5', delay: '2s' },
        { icon: Shield, color: '#3B82F6', top: '50%', left: '3%', size: 'w-4 h-4', delay: '4s' },
        { icon: Star, color: '#FBBF24', top: '20%', left: '90%', size: 'w-5 h-5', delay: '1s' },
        { icon: Download, color: '#9333EA', top: '70%', left: '8%', size: 'w-4 h-4', delay: '3s' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-16 lg:py-20 bg-gradient-to-b from-[#F5F5F5] to-[#FAFAFA] relative overflow-hidden">
            {/* Floating Icons */}
            {floatingIcons.map((el, i) => (
                <div
                    key={i}
                    className="absolute pointer-events-none z-10 animate-float-download"
                    style={{
                        top: el.top,
                        left: el.left,
                        animationDelay: el.delay,
                    }}
                >
                    <div
                        className={`${el.size} flex items-center justify-center animate-spin-slow rounded-full p-1.5`}
                        style={{ backgroundColor: el.color + '0D', border: `1px solid ${el.color}15` }}
                    >
                        <el.icon style={{ color: el.color, opacity: 0.35 }} className="w-full h-full" />
                    </div>
                </div>
            ))}

            {/* Background Orbs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-b from-[#1E3A8A]/3 to-transparent rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#16A34A]/3 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

            {/* Top Divider */}
            <div className="absolute top-0 left-0 right-0 pointer-events-none">
                <svg viewBox="0 0 1440 40" fill="none" className="w-full" preserveAspectRatio="none" style={{ height: '40px' }}>
                    <path d="M0 22C300 5 600 38 900 20C1200 2 1380 30 1440 25V0H0V22Z" fill="#FFFFFF" opacity="0.7" />
                    <path d="M0 25C250 10 550 35 850 22C1150 8 1350 28 1440 24V0H0V25Z" fill="url(#downloadWaveGrad)" opacity="0.4" />
                    <defs>
                        <linearGradient id="downloadWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.05" />
                            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.08" />
                            <stop offset="100%" stopColor="#1E3A8A" stopOpacity="0.05" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
                {/* Section Header */}
                <div
                    className={`text-center mb-10 lg:mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-4">
                        <Download className="w-4 h-4 text-[#1E3A8A]" />
                        <span className="text-[#1E3A8A] font-semibold text-xs sm:text-sm uppercase tracking-wider">Resources</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A8A] mb-3 tracking-tight">
                        Get More Information
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                        Download our brochure or application form. Complete details, transparent pricing & quick enrollment — all in one place.
                    </p>
                </div>

                {/* Download Cards Grid */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
                    {downloadCards.map((card, index) => (
                        <div
                            key={index}
                            className={`group relative bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 cursor-pointer animate-card-reveal ${activeCard === index ? 'ring-2 scale-[1.02]' : ''
                                }`}
                            style={{
                                animationDelay: `${index * 0.15}s`,
                                boxShadow:
                                    activeCard === index
                                        ? `0 20px 50px -10px ${card.color}25, 0 0 0 2px ${card.color}30`
                                        : `0 10px 40px -8px ${card.color}10`,
                            }}
                            onMouseEnter={() => setActiveCard(index)}
                            onMouseLeave={() => setActiveCard(null)}
                        >
                            {/* Top Gradient Bar */}
                            <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${card.gradient} rounded-t-3xl`} />

                            {/* Highlight Badge */}
                            <div className="absolute -top-4 right-6 z-20">
                                <div
                                    className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg bg-gradient-to-r ${card.gradient} text-white animate-bounce-in`}
                                    style={{ animationDelay: `${0.3 + index * 0.15}s` }}
                                >
                                    <Zap className="w-3 h-3" />
                                    {card.highlight}
                                </div>
                            </div>

                            {/* Header */}
                            <div className="flex items-start gap-5 mb-5">
                                <div
                                    className={`w-14 h-14 sm:w-16 sm:h-16 ${card.bgLight} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500 relative`}
                                >
                                    <card.icon className="w-7 h-7 sm:w-8 sm:h-8" style={{ color: card.color }} />
                                    {/* Orbiting ring */}
                                    <div
                                        className="absolute inset-0 rounded-2xl border animate-spin-slow"
                                        style={{ borderColor: card.color + '25', borderStyle: 'dashed' }}
                                    />
                                </div>
                                <div className="pt-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span
                                            className="text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-full"
                                            style={{ backgroundColor: card.color + '12', color: card.color }}
                                        >
                                            {card.tag}
                                        </span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#1E3A8A] group-hover:text-[#3B82F6] transition-colors duration-300">
                                        {card.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-400 mt-0.5">{card.subtitle}</p>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                                {card.description}
                            </p>

                            {/* Features List */}
                            <div className="mb-7">
                                <p className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <span className="w-4 h-px bg-gray-300" />
                                    What's Inside
                                    <span className="w-4 h-px bg-gray-300" />
                                </p>
                                <ul className="space-y-3">
                                    {card.features.map((feature, fIndex) => (
                                        <li
                                            key={fIndex}
                                            className="flex items-start gap-3 group/feature"
                                        >
                                            <div
                                                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/feature:scale-110 transition-transform duration-300"
                                                style={{ backgroundColor: card.color + '14' }}
                                            >
                                                <feature.icon className="w-3 h-3" style={{ color: card.color }} />
                                            </div>
                                            <span className="text-sm text-gray-600 group-hover/feature:text-gray-900 transition-colors duration-300 leading-relaxed">
                                                {feature.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Download Button */}
                            <a
                                href={card.href}
                                download
                                className={`group/btn relative inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] shadow-lg hover:shadow-xl overflow-hidden bg-gradient-to-r ${card.buttonGradient} text-white`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                                <card.buttonIcon className="w-5 h-5 relative z-10 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                                <span className="relative z-10 flex items-center gap-2">
                                    {card.buttonText}
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                </span>
                            </a>

                            {/* File Info */}
                            <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100">
                                <div className="flex items-center gap-1.5">
                                    <Shield className="w-3.5 h-3.5 text-[#16A34A]" />
                                    <span className="text-[10px] sm:text-xs text-gray-400">Secure PDF</span>
                                </div>
                                <div className="w-px h-3 bg-gray-200" />
                                <div className="flex items-center gap-1.5">
                                    <Download className="w-3.5 h-3.5 text-[#3B82F6]" />
                                    <span className="text-[10px] sm:text-xs text-gray-400">Instant Download</span>
                                </div>
                                <div className="w-px h-3 bg-gray-200" />
                                <div className="flex items-center gap-1.5">
                                    <CheckCircle className="w-3.5 h-3.5 text-[#16A34A]" />
                                    <span className="text-[10px] sm:text-xs text-gray-400">No Sign-up Required</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Trust Bar */}
                <div
                    className={`text-center mt-10 lg:mt-14 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                        }`}
                >
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-white rounded-2xl px-8 py-5 shadow-lg border border-gray-100">
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 bg-[#F0FDF4] rounded-full flex items-center justify-center">
                                <Clock className="w-4 h-4 text-[#16A34A]" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-bold text-[#1E3A8A]">24/7 Support</p>
                                <p className="text-[10px] text-gray-400">Help with forms anytime</p>
                            </div>
                        </div>
                        <div className="hidden sm:block w-px h-10 bg-gray-200" />
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 bg-[#EFF6FF] rounded-full flex items-center justify-center">
                                <Phone className="w-4 h-4 text-[#3B82F6]" />
                            </div>
                            <div className="text-left">
                                <p className="text-sm font-bold text-[#1E3A8A]">+91 94426 59377</p>
                                <p className="text-[10px] text-gray-400">Call for assistance</p>
                            </div>
                        </div>
                        <div className="hidden sm:block w-px h-10 bg-gray-200" />
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white rounded-xl text-sm font-semibold hover:scale-105 transition-transform duration-300 shadow-md"
                        >
                            Contact Us
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Divider */}
            <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
                <svg viewBox="0 0 1440 40" fill="none" className="w-full" preserveAspectRatio="none" style={{ height: '40px' }}>
                    <path d="M0 18C300 35 600 2 900 20C1200 38 1380 10 1440 15V40H0V18Z" fill="#FFFFFF" opacity="0.8" />
                </svg>
            </div>

            {/* Animations */}
            <style>{`
        @keyframes floatDownload {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(5deg); }
          66% { transform: translateY(-5px) rotate(-3deg); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes cardReveal {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceIn {
          0% { transform: translateY(-20px); opacity: 0; }
          60% { transform: translateY(4px); }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-float-download { animation: floatDownload 8s ease-in-out infinite; }
        .animate-spin-slow { animation: spinSlow 15s linear infinite; }
        .animate-card-reveal { animation: cardReveal 0.6s ease forwards; opacity: 0; }
        .animate-bounce-in { animation: bounceIn 0.5s ease forwards; opacity: 0; }
      `}</style>
        </section>
    );
};

export default DownloadSection;