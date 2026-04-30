import React, { useState, useEffect, useCallback } from 'react';
import {
    ArrowRight,
    Download,
    CheckCircle,
    Star,
    ChevronLeft,
    ChevronRight,
    Phone,
    Heart,
    Quote,
} from 'lucide-react';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const carouselSlides = [
        {
            image: 'https://www.jaisriohmsakthihomecare.in/wp-content/uploads/2024/09/homecare1-min-1.jpg',
            alt: 'Professional home nursing care - Compassionate nurse assisting elderly patient',
            tag: 'Home Nursing',
            badge: '⭐ Most Popular',
        },
        {
            image: 'https://media.istockphoto.com/id/1719539154/photo/home-care-healthcare-professional-hugging-senior-patient.jpg?s=612x612&w=0&k=20&c=t-dk4CGZ2BjGAj4XIljgMNqcPmS_h-qku70ofdyrHE4=',
            alt: 'Doctor home visit - Expert medical consultation at your doorstep',
            tag: 'Doctor Visits',
        },
        {
            image: 'https://images.aspen.edu/wp/uploads/2022/12/GettyImages-554374209-1024x451.jpg',
            alt: 'Elderly care services - Dedicated support for seniors',
            tag: 'Elderly Care',
        },
        {
            image: 'https://admissionbharat.com/wp-content/uploads/2025/02/Top-BSC-Physiotherapy-Colleges-in-India.jpg',
            alt: 'Home physiotherapy - Rehabilitation at comfort of home',
            tag: 'Physiotherapy',
        },
    ];

    const nursingQuotes = [
        '🏆 "Best home nursing care in Tamil Nadu" — Healthcare Excellence Awards 2025',
        '❤️ "Our nurses treat every patient like family — with dignity, compassion & respect"',
        '⭐ "Trusted by 10,000+ families for professional home nursing services"',
        '👨‍⚕️ "Doctor-supervised nursing care — quality you can rely on 24/7"',
        '🏠 "Bringing hospital-quality care to the comfort of your home"',
    ];

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
        }, 3500);
        return () => clearInterval(timer);
    }, [isPaused, carouselSlides.length]);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, [carouselSlides.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide(
            (prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length
        );
    }, [carouselSlides.length]);

    const trustIndicators = [
        { icon: CheckCircle, text: 'Doctor Supervised' },
        { icon: CheckCircle, text: 'Verified Caregivers' },
        { icon: CheckCircle, text: '24/7 Support' },
    ];

    return (
        <section className="relative min-h-[85vh] max-h-[800px] flex flex-col overflow-hidden bg-gradient-to-br from-[#0B1D4A] via-[#1E3A8A] to-[#1D4ED8] pt-16 sm:pt-20 lg:pt-20">
            {/* ========== TOP MARQUEE - FULL WIDTH ========== */}
            <div
                className={`w-full transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                    }`}
            >
                <div className="relative bg-white/5 backdrop-blur-sm border-y border-white/10 py-2 overflow-hidden">
                    {/* Label Badge */}
                    <div className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#1E3A8A] via-[#1E3A8A]/95 to-transparent w-20 sm:w-24 z-10 flex items-center pl-3 sm:pl-4">
                        <div className="flex items-center gap-1.5 bg-[#FBBF24]/20 rounded-full px-2.5 py-1">
                            <Quote className="w-3 h-3 text-[#FBBF24]" />
                            <span className="text-[#FBBF24] text-[10px] sm:text-xs font-bold hidden sm:inline">PRAISE</span>
                        </div>
                    </div>

                    {/* Scrolling Content */}
                    <div className="overflow-hidden">
                        <div className="flex animate-marquee whitespace-nowrap pl-20 sm:pl-24">
                            {[...nursingQuotes, ...nursingQuotes].map((quote, i) => (
                                <span
                                    key={i}
                                    className="text-white/80 text-[11px] sm:text-sm font-medium mx-5 sm:mx-6 inline-flex items-center gap-2"
                                >
                                    {quote}
                                    <span className="text-[#FBBF24] opacity-50">✦</span>
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right Fade */}
                    <div className="absolute right-0 top-0 bottom-0 bg-gradient-to-l from-[#1E3A8A] to-transparent w-16 sm:w-20 z-10" />
                </div>
            </div>

            {/* ========== MAIN CONTENT ========== */}
            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 flex-1 flex items-center">
                {/* Animated Medical Pattern Background */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute animate-float-slow"
                            style={{
                                left: `${10 + Math.random() * 80}%`,
                                top: `${10 + Math.random() * 80}%`,
                                animationDelay: `${i * 0.8}s`,
                                animationDuration: `${6 + Math.random() * 8}s`,
                            }}
                        >
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="white">
                                <rect x="11" y="0" width="8" height="30" rx="4" />
                                <rect x="0" y="11" width="30" height="8" rx="4" />
                            </svg>
                        </div>
                    ))}
                </div>

                {/* Gradient Orbs */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#3B82F6]/30 rounded-full blur-[80px] animate-blob pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-[#16A34A]/20 rounded-full blur-[80px] animate-blob pointer-events-none" style={{ animationDelay: '3s' }} />

                {/* Content Wrapper */}
                <div className="relative w-full">
                    {/* Top Bar: Logo + Phone */}
                    <div
                        className={`flex items-center justify-between mb-3 lg:mb-4 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'
                            }`}
                    >
                        {/* Logo */}
                        <div className="flex items-center gap-2.5">
                            <div className="w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-xl shadow-lg flex items-center justify-center overflow-hidden p-1">
                                <img
                                    src="https://res.cloudinary.com/dkmmpyq6u/image/upload/f_auto,q_auto/SAFHE_Logo_tawlhv"
                                    alt="SAHS Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="hidden sm:block">
                                <p className="text-white font-bold text-base leading-tight">SAHS</p>
                                <p className="text-[#93C5FD] text-[10px] tracking-wide">
                                    Shree Akshai Healthcare
                                </p>
                            </div>
                        </div>

                        {/* Emergency Contact */}
                        <a
                            href="tel:+919442659377"
                            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full transition-all duration-300 border border-white/10"
                        >
                            <div className="w-7 h-7 bg-[#DC2626] rounded-full flex items-center justify-center animate-pulse-slow">
                                <Phone className="w-3.5 h-3.5 text-white" />
                            </div>
                            <span className="text-white font-semibold text-xs sm:text-sm hidden sm:inline">
                                +91 94426 59377
                            </span>
                        </a>
                    </div>

                    {/* Main Grid */}
                    <div className="grid lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-8 items-center">
                        {/* LEFT - Text Content */}
                        <div
                            className={`text-center lg:text-left transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                                }`}
                        >
                            {/* Emergency Pulse Badge */}
                            <div className="inline-flex items-center gap-1.5 bg-[#DC2626]/15 border border-[#DC2626]/30 px-3 py-1.5 rounded-full mb-2 lg:mb-3">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DC2626] opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#DC2626]" />
                                </span>
                                <span className="text-white/90 text-xs font-semibold">
                                    24/7 Emergency Available
                                </span>
                            </div>

                            {/* Headline */}
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-2 lg:mb-3 tracking-tight">
                                Quality Healthcare
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#93C5FD] to-white">
                                    at Your Doorstep
                                </span>
                            </h1>

                            {/* Subheadline */}
                            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-3 lg:mb-4 max-w-lg mx-auto lg:mx-0">
                                Compassionate, professional home healthcare services for your comfort, recovery & well-being.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-2 lg:gap-3 justify-center lg:justify-start mb-3 lg:mb-4">
                                <a
                                    href="#appointment"
                                    className="group relative inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#DC2626] text-white font-semibold text-sm lg:text-base rounded-xl hover:bg-[#B91C1C] transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg overflow-hidden"
                                >
                                    <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-700" />
                                    <span className="relative flex items-center gap-2">
                                        Book Appointment
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </a>
                                <a
                                    href="/brochure.pdf"
                                    download
                                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold text-sm lg:text-base rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] active:scale-95"
                                >
                                    <Download className="w-4 h-4" />
                                    Brochure
                                </a>
                            </div>

                            {/* Trust Indicators */}
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                                {trustIndicators.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-1.5 group"
                                        style={{
                                            animation: `fadeInUp 0.4s ease forwards`,
                                            animationDelay: `${0.5 + index * 0.1}s`,
                                            opacity: 0,
                                        }}
                                    >
                                        <item.icon className="w-4 h-4 text-[#16A34A] flex-shrink-0" />
                                        <span className="text-white/70 text-xs group-hover:text-white transition-colors">
                                            {item.text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT - Carousel (Increased Size) */}
                        <div
                            className={`relative transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                                }`}
                        >
                            <div
                                className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border-2 border-white/15 group/carousel mx-auto max-w-[460px] lg:max-w-[520px]"
                                onMouseEnter={() => setIsPaused(true)}
                                onMouseLeave={() => setIsPaused(false)}
                            >
                                <div className="relative aspect-[4/3] bg-[#1E3A8A]">
                                    {/* Slides with REAL IMAGES */}
                                    {carouselSlides.map((slide, index) => (
                                        <div
                                            key={index}
                                            className={`absolute inset-0 transition-all duration-600 ${index === currentSlide
                                                ? 'opacity-100 scale-100'
                                                : 'opacity-0 scale-105'
                                                }`}
                                        >
                                            {/* Actual Image */}
                                            <img
                                                src={slide.image}
                                                alt={slide.alt}
                                                className="w-full h-full object-cover"
                                                loading={index === 0 ? 'eager' : 'lazy'}
                                            />

                                            {/* Gradient Overlay for text readability */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/80 via-transparent to-transparent" />

                                            {/* Popular Badge */}
                                            {slide.badge && (
                                                <div className="absolute top-3 left-3 bg-[#FBBF24] text-[#1E3A8A] text-[10px] lg:text-xs font-bold px-2 py-1 rounded-full shadow-lg z-10">
                                                    {slide.badge}
                                                </div>
                                            )}

                                            {/* Tag Label */}
                                            <div className="absolute bottom-4 left-4 right-4 z-10">
                                                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg inline-block">
                                                    <p className="text-[#1E3A8A] font-bold text-sm lg:text-base">
                                                        {slide.tag}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {/* Navigation Arrows */}
                                    <button
                                        onClick={prevSlide}
                                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all opacity-0 group-hover/carousel:opacity-100 z-20"
                                        aria-label="Previous slide"
                                    >
                                        <ChevronLeft className="w-4 h-4 text-white" />
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center transition-all opacity-0 group-hover/carousel:opacity-100 z-20"
                                        aria-label="Next slide"
                                    >
                                        <ChevronRight className="w-4 h-4 text-white" />
                                    </button>

                                    {/* Dots */}
                                    <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                                        {carouselSlides.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentSlide(index)}
                                                className={`rounded-full transition-all duration-400 ${index === currentSlide
                                                    ? 'w-6 h-2 bg-white'
                                                    : 'w-2 h-2 bg-white/40 hover:bg-white/60'
                                                    }`}
                                                aria-label={`Go to slide ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Floating Stats Badge */}
                            <div className="absolute -bottom-3 -left-3 bg-white rounded-xl px-3 py-2 shadow-2xl flex items-center gap-2 animate-float-badge z-30">
                                <Star className="w-4 h-4 text-[#FBBF24] fill-[#FBBF24]" />
                                <div>
                                    <p className="text-sm font-bold text-[#1E3A8A]">98%</p>
                                    <p className="text-[10px] text-gray-500">Satisfaction</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animations */}
            <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(15px, -15px) scale(1.08); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-12px) rotate(3deg); opacity: 0.6; }
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes float-badge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        .animate-blob {
          animation: blob 7s infinite ease-in-out;
        }

        .animate-float-slow {
          animation: float-slow 5s infinite ease-in-out;
        }

        .animate-marquee {
          animation: marquee 28s linear infinite;
        }

        .animate-float-badge {
          animation: float-badge 3s infinite ease-in-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s infinite ease-in-out;
        }

        @media (max-width: 640px) {
          .animate-marquee {
            animation: marquee 18s linear infinite;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;