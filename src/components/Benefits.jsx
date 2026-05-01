import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
    HeadphonesIcon,
    UserCircle,
    Activity,
    ClipboardCheck,
    Microscope,
    Pill,
    Shield,
    ChevronLeft,
    ChevronRight,
    Sparkles,
    Users,
    Star,
} from 'lucide-react';

const Benefits = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [counted, setCounted] = useState(false);
    const [displayCount, setDisplayCount] = useState(0);
    const sectionRef = useRef(null);
    const intervalRef = useRef(null);
    // Track if we're currently animating (no lock, just for CSS class)
    const [direction, setDirection] = useState(0); // -1 = prev, 1 = next, 0 = settled

    const benefits = [
        {
            icon: HeadphonesIcon,
            title: '24/7 Support Number',
            description:
                'A dedicated 24×7 number to call for any client needs — round-the-clock assistance ensuring peace of mind.',
            color: '#3B82F6',
            stat: '24/7',
            image: 'https://static.vecteezy.com/system/resources/thumbnails/015/873/894/small/24-7-hours-service-icon-in-flat-style-all-day-business-and-service-illustration-on-isolated-background-quick-service-time-sign-business-concept-vector.jpg',
            tag: 'Always Available',
        },
        {
            icon: UserCircle,
            title: 'Dedicated Care Manager',
            description:
                'A background-verified Care Manager assigned personally to coordinate and support all your healthcare needs.',
            color: '#16A34A',
            stat: '1:1',
            image: 'https://www.shutterstock.com/image-photo/doctor-friend-portrait-caring-young-600nw-2575919711.jpg',
            tag: 'Personalized',
        },
        {
            icon: Activity,
            title: 'Technology Platform',
            description:
                'Mobile App & Web Login portal with real-time updates — track patient care seamlessly through digital tools.',
            color: '#9333EA',
            stat: 'Live',
            image: 'https://static1.squarespace.com/static/5bac99efb2cf79a76d80781d/5bbc67f4085229699d754e85/5c0e03a1c2241bcfcdad86e3/1544597886879/Legal+Implications+.jpg?format=1500w',
            tag: 'Digital',
        },
        {
            icon: ClipboardCheck,
            title: 'Health & Home Evaluation',
            description:
                'Comprehensive health check-up and home security evaluation for every client by expert professionals.',
            color: '#EA580C',
            stat: '100%',
            image: 'https://treegeyecare.com/wp-content/uploads/2024/09/depositphotos_660903092-stock-photo-indian-doctor-consoling-senior-couple.webp',
            tag: 'Thorough',
        },
        {
            icon: Microscope,
            title: 'Diagnostics Discount',
            description:
                'Up to 40% discount on Pathology & Radiology services through our network of trusted diagnostic partners.',
            color: '#0891B2',
            stat: '40%',
            image: 'https://previews.123rf.com/images/stickerside/stickerside2107/stickerside210700086/172327585-40-percent-off-special-discount-offer-badge-sale-template.jpg',
            tag: 'Affordable',
        },
        {
            icon: Pill,
            title: 'Pharmacy Discounts',
            description:
                'Up to 15% savings on medicines and pharmacy services, making healthcare affordable for your family.',
            color: '#DC2626',
            stat: '15%',
            image: 'https://st.depositphotos.com/2036511/2995/v/450/depositphotos_29955585-stock-illustration-fifteen-percent-discount-button.jpg',
            tag: 'Savings',
        },
    ];

    const totalSlides = benefits.length;

    // Compute wrap-around indices
    const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    const nextIndex = (currentIndex + 1) % totalSlides;

    // ===== SINGLE INTERVAL — NEVER RESTARTS =====
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalSlides);
            setDirection(1);
        }, 1800);
        return () => clearInterval(intervalRef.current);
    }, [totalSlides]); // Only depends on totalSlides — never restarts

    // ===== PAUSE/RESUME WITHOUT CLEARING INTERVAL =====
    useEffect(() => {
        if (!intervalRef.current) return;
        if (isPaused) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        } else {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % totalSlides);
                setDirection(1);
            }, 1800);
        }
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isPaused, totalSlides]);

    // Reset direction after transition completes
    useEffect(() => {
        if (direction !== 0) {
            const timer = setTimeout(() => setDirection(0), 400);
            return () => clearTimeout(timer);
        }
    }, [direction, currentIndex]);

    // ===== INTERSECTION OBSERVER =====
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (!counted) {
                        setCounted(true);
                        animateCount();
                    }
                }
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, [counted]);

    // ===== COUNT ANIMATION =====
    const animateCount = () => {
        const target = 10000;
        const duration = 1500;
        const startTime = performance.now();

        const tick = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
            else setDisplayCount(target);
        };

        requestAnimationFrame(tick);
    };

    // ===== NAVIGATION — NO LOCK =====
    const goToPrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
        setDirection(-1);
    }, [totalSlides]);

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
        setDirection(1);
    }, [totalSlides]);

    const goToSlide = (index) => {
        if (index === currentIndex) return;
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    // ===== COMPUTED STYLES — STABLE REFERENCES =====
    const leftTransform = 'perspective(800px) rotateY(18deg) scale(0.88) translateX(-60px)';
    const rightTransform = 'perspective(800px) rotateY(-18deg) scale(0.88) translateX(60px)';

    const slideClass = (slideDirection) => {
        if (direction === 0) return 'translate-x-0';
        if (direction === 1) return '-translate-x-full';
        return 'translate-x-full';
    };

    return (
        <section ref={sectionRef} className="py-12 lg:py-16 bg-white relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_0.5px,transparent_0.5px)] bg-[length:24px_24px] opacity-[0.025]" />
                <div className="absolute top-0 right-0 w-72 h-72 bg-[#EFF6FF]/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#F0FDF4]/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="absolute top-6 right-12 pointer-events-none animate-float-slow">
                <Star className="w-4 h-4 text-[#FBBF24]/25" />
            </div>

            {/* Top Divider */}
            <div className="absolute top-0 left-0 right-0 pointer-events-none">
                <svg viewBox="0 0 1440 35" fill="none" className="w-full" preserveAspectRatio="none" style={{ height: '35px' }}>
                    <path d="M0 20C240 5 480 35 720 18C960 0 1200 30 1440 20V0H0V20Z" fill="#F5F5F5" opacity="0.6" />
                </svg>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
                {/* Section Header */}
                <div
                    className={`text-center mb-6 lg:mb-8 transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                        }`}
                >
                    <div className="inline-flex items-center gap-2 bg-[#F0FDF4] px-3 py-1.5 rounded-full mb-3">
                        <Sparkles className="w-3.5 h-3.5 text-[#16A34A]" />
                        <span className="text-[#16A34A] font-semibold text-xs uppercase tracking-wider">Why It Matters</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E3A8A] mb-2 tracking-tight">
                        Exclusive Benefits
                    </h2>
                    <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto">
                        Reliable, convenient, high-quality healthcare at home with exclusive member advantages.
                    </p>
                </div>

                {/* ========== CAROUSEL ========== */}
                <div className="relative flex items-center justify-center h-[340px] sm:h-[360px] lg:h-[380px]">
                    {/* Navigation Arrows */}
                    <button
                        onClick={goToPrev}
                        className="absolute left-0 z-30 w-9 h-9 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                    >
                        <ChevronLeft className="w-4 h-4 text-[#1E3A8A]" />
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-0 z-30 w-9 h-9 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                    >
                        <ChevronRight className="w-4 h-4 text-[#1E3A8A]" />
                    </button>

                    {/* Cards Container — NO hover events here */}
                    <div className="relative w-full flex items-center justify-center px-10 sm:px-12 overflow-hidden">

                        {/* LEFT CARD — Always visible, GPU-only transforms */}
                        <div
                            className="absolute z-10 cursor-pointer will-change-transform"
                            style={{
                                transform: leftTransform,
                                left: 'calc(50% - 260px)',
                            }}
                            onClick={goToPrev}
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            <BenefitCardSmall benefit={benefits[prevIndex]} />
                        </div>

                        {/* CENTER CARD */}
                        <div
                            className="relative z-20 will-change-transform"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            <BenefitCardMain benefit={benefits[currentIndex]} />
                        </div>

                        {/* RIGHT CARD — Always visible, GPU-only transforms */}
                        <div
                            className="absolute z-10 cursor-pointer will-change-transform"
                            style={{
                                transform: rightTransform,
                                right: 'calc(50% - 260px)',
                            }}
                            onClick={goToNext}
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            <BenefitCardSmall benefit={benefits[nextIndex]} />
                        </div>
                    </div>
                </div>

                {/* Dot Indicators */}
                <div className="flex items-center justify-center gap-2 mt-4">
                    {benefits.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`rounded-full transition-all duration-300 ${index === currentIndex ? 'w-7 h-2' : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                                }`}
                            style={{
                                backgroundColor: index === currentIndex ? benefits[currentIndex].color : undefined,
                            }}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-6">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white rounded-full px-5 py-2.5 shadow-lg">
                        <Users className="w-4 h-4" />
                        <span className="text-xs sm:text-sm font-medium">
                            <span className="tabular-nums font-bold">{displayCount.toLocaleString()}+</span> families trust us
                        </span>
                        <a
                            href="#appointment"
                            className="px-3 py-1 bg-[#DC2626] rounded-full text-xs font-bold hover:bg-[#B91C1C] transition-colors active:scale-95"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Divider */}
            <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
                <svg viewBox="0 0 1440 35" fill="none" className="w-full" preserveAspectRatio="none" style={{ height: '35px' }}>
                    <path d="M0 15C240 30 480 0 720 18C960 36 1200 5 1440 15V35H0V15Z" fill="#F5F5F5" opacity="0.7" />
                </svg>
            </div>

            <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-float-slow { animation: floatSlow 6s ease-in-out infinite; }
      `}</style>
        </section>
    );
};

/* ========== MAIN CENTER CARD ========== */
const BenefitCardMain = ({ benefit }) => {
    return (
        <div
            className="relative w-[300px] sm:w-[320px] lg:w-[340px] bg-white rounded-2xl shadow-xl overflow-hidden"
            style={{
                boxShadow: `0 12px 40px -8px ${benefit.color}20, 0 0 0 1px ${benefit.color}10`,
            }}
        >
            <div className="relative h-36 sm:h-40 overflow-hidden">
                <img src={benefit.image} alt={benefit.title} className="w-full h-full object-cover" />
                <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(to top, ${benefit.color}99 0%, ${benefit.color}33 40%, transparent 70%)` }}
                />
                <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm shadow" style={{ color: benefit.color }}>
                        {benefit.tag}
                    </span>
                </div>
                <div className="absolute top-3 right-3">
                    <span className="text-lg font-bold bg-white/90 backdrop-blur-sm rounded-lg px-2.5 py-1 shadow" style={{ color: benefit.color }}>
                        {benefit.stat}
                    </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-white font-bold text-base sm:text-lg leading-tight">{benefit.title}</h3>
                </div>
            </div>
            <div className="p-4">
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{benefit.description}</p>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-1.5">
                        <Shield className="w-3.5 h-3.5 text-[#16A34A]" />
                        <span className="text-[10px] text-gray-400">Included in all plans</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-[#FBBF24] fill-[#FBBF24]" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

/* ========== SIDE CARD ========== */
const BenefitCardSmall = ({ benefit }) => {
    return (
        <div className="w-[220px] sm:w-[240px] bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
            <div className="relative h-24 overflow-hidden">
                <img src={benefit.image} alt={benefit.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${benefit.color}88 0%, transparent 60%)` }} />
                <div className="absolute bottom-2 left-2">
                    <p className="text-white font-bold text-xs leading-tight">{benefit.title}</p>
                </div>
                <div className="absolute top-2 right-2">
                    <span className="text-sm font-bold bg-white/85 rounded-md px-1.5 py-0.5" style={{ color: benefit.color }}>
                        {benefit.stat}
                    </span>
                </div>
            </div>
            <div className="p-3">
                <p className="text-gray-500 text-[11px] leading-relaxed line-clamp-2">{benefit.description}</p>
            </div>
        </div>
    );
};

export default Benefits;