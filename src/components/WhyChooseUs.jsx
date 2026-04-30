import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
    ShieldCheck,
    UserCheck,
    HeadphonesIcon,
    ClipboardCheck,
    Cpu,
    IndianRupee,
    Star,
    Award,
    Sparkles,
    Heart,
    ArrowRight,
    CheckCircle,
    Activity,
    Stethoscope,
    Pill,
    Clock,
    Users,
    ThumbsUp,
    Building2,
    BadgeCheck,
} from 'lucide-react';

const WhyChooseUs = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const [counts, setCounts] = useState([0, 0, 0, 0, 0, 0]);
    const [hasCounted, setHasCounted] = useState(false);
    const sectionRef = useRef(null);

    const features = [
        {
            icon: ShieldCheck,
            title: 'Doctor Supervised Care',
            description:
                'All services monitored by experienced doctors to ensure safety, quality & highest standards of medical care.',
            color: '#16A34A',
            bgLight: 'bg-[#F0FDF4]',
            iconBg: 'bg-[#16A34A]',
            stat: '24/7',
            statLabel: 'Doctor Monitoring',
            highlights: ['Real-time supervision', 'Quality assurance', 'Clinical excellence'],
            image: 'https://media.istockphoto.com/id/1960028378/photo/female-nurse-consoling-old-man-at-home.jpg?s=612x612&w=0&k=20&c=tq-D9prBtWc7F5cM_VZFFn4ekRhdXpYaW2Dcgcd8Nfg=',
        },
        {
            icon: UserCheck,
            title: 'Verified Caregivers',
            description:
                'Background-checked & professionally trained healthcare staff you can rely on for compassionate, trustworthy service.',
            color: '#3B82F6',
            bgLight: 'bg-[#EFF6FF]',
            iconBg: 'bg-[#3B82F6]',
            stat: '500+',
            statLabel: 'Trained Staff',
            highlights: ['Background verified', 'Certified training', 'Empathetic care'],
            image: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_780,h_622/https://care24.co.in/wp-content/uploads/2023/07/Care24-Hero-Banner-1.jpg',
        },
        {
            icon: HeadphonesIcon,
            title: '24/7 Support Availability',
            description:
                'Round-the-clock assistance whenever you need care, ensuring complete peace of mind day and night.',
            color: '#DC2626',
            bgLight: 'bg-[#FEF2F2]',
            iconBg: 'bg-[#DC2626]',
            stat: '24/7',
            statLabel: 'Instant Response',
            highlights: ['Always reachable', 'Emergency ready', 'Quick resolution'],
            image: 'https://cdn.vectorstock.com/i/1000v/79/08/247-support-helpline-template-vector-60827908.jpg',
        },
        {
            icon: ClipboardCheck,
            title: 'Personalized Care Plans',
            description:
                'Customized care tailored to individual health needs with comprehensive assessment & detailed planning.',
            color: '#9333EA',
            bgLight: 'bg-[#FAF5FF]',
            iconBg: 'bg-[#9333EA]',
            stat: '100%',
            statLabel: 'Custom Plans',
            highlights: ['Individual assessment', 'Tailored approach', 'Flexible scheduling'],
            image: 'https://mycarellc.co/wp-content/uploads/2026/01/personalized-care-plans-for-in-home-services-scaled.jpg',
        },
        {
            icon: Cpu,
            title: 'Technology-Enabled Services',
            description:
                'Real-time updates & seamless communication through our advanced digital platform & mobile app.',
            color: '#0891B2',
            bgLight: 'bg-[#ECFEFF]',
            iconBg: 'bg-[#0891B2]',
            stat: 'Live',
            statLabel: 'Digital Tracking',
            highlights: ['Real-time updates', 'Mobile access', 'Digital records'],
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV4YvgtGhKqFrRZi-HXRtSmM-RepqEfmyLKYGsm0ekkA&s',
        },
        {
            icon: IndianRupee,
            title: 'Cost-Effective Healthcare',
            description:
                'Affordable solutions without compromising quality — up to 40% savings on diagnostics & 15% on pharmacy.',
            color: '#EA580C',
            bgLight: 'bg-[#FFF7ED]',
            iconBg: 'bg-[#EA580C]',
            stat: '40%',
            statLabel: 'Avg. Savings',
            highlights: ['Affordable plans', 'Diagnostic discounts', 'Pharmacy savings'],
            image: 'https://www.careinsurance.com/upload_master/media/posts/July2020/uPI9Tz0Mb2C3sy8F70CT.jpg',
        },
    ];

    const stats = [
        { number: 10000, suffix: '+', label: 'Patients Served', icon: Users, color: '#3B82F6' },
        { number: 500, suffix: '+', label: 'Verified Caregivers', icon: BadgeCheck, color: '#16A34A' },
        { number: 98, suffix: '%', label: 'Satisfaction Rate', icon: ThumbsUp, color: '#FBBF24' },
        { number: 5, suffix: '+', label: 'Years Experience', icon: Building2, color: '#9333EA' },
        { number: 24, suffix: '/7', label: 'Support Available', icon: Clock, color: '#DC2626' },
        { number: 40, suffix: '%', label: 'Avg. Savings', icon: IndianRupee, color: '#EA580C' },
    ];

    const floatingElements = [
        { icon: Heart, color: '#DC2626', top: '5%', left: '3%', duration: '14s', delay: '0s', shape: 'circle' },
        { icon: Stethoscope, color: '#3B82F6', top: '72%', left: '91%', duration: '12s', delay: '2s', shape: 'diamond' },
        { icon: Activity, color: '#16A34A', top: '48%', left: '2%', duration: '16s', delay: '4s', shape: 'hexagon' },
        { icon: Pill, color: '#9333EA', top: '18%', left: '87%', duration: '10s', delay: '1s', shape: 'circle' },
        { icon: Clock, color: '#EA580C', top: '82%', left: '5%', duration: '13s', delay: '3s', shape: 'diamond' },
        { icon: Star, color: '#FBBF24', top: '32%', left: '94%', duration: '9s', delay: '5s', shape: 'circle' },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasCounted) {
                    setIsVisible(true);
                    setHasCounted(true);
                    startCounting();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [hasCounted]);

    const startCounting = useCallback(() => {
        const duration = 2000;
        const frames = 60;
        const interval = duration / frames;

        stats.forEach((stat, statIndex) => {
            const target = stat.number;
            const increment = target / frames;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                setCounts((prev) => {
                    const newCounts = [...prev];
                    newCounts[statIndex] = Math.floor(current);
                    return newCounts;
                });
            }, interval);
        });
    }, []);

    const activeFeature = features[activeIndex];

    return (
        <section ref={sectionRef} className="py-16 lg:py-20 bg-white relative overflow-hidden">
            {/* Floating Elements */}
            {floatingElements.map((el, i) => {
                const shapeClass =
                    el.shape === 'circle'
                        ? 'rounded-full'
                        : el.shape === 'diamond'
                            ? 'rotate-45 rounded-md'
                            : 'rounded-lg rotate-12';

                return (
                    <div
                        key={i}
                        className="absolute pointer-events-none z-10 animate-float-element"
                        style={{
                            top: el.top,
                            left: el.left,
                            animationDuration: el.duration,
                            animationDelay: el.delay,
                            width: '48px',
                            height: '48px',
                        }}
                    >
                        <div
                            className={`w-10 h-10 ${shapeClass} flex items-center justify-center animate-spin-slow border`}
                            style={{
                                borderColor: el.color + '18',
                                backgroundColor: el.color + '06',
                                animationDuration: '10s',
                            }}
                        >
                            <el.icon
                                className={el.shape === 'diamond' ? '-rotate-45' : el.shape === 'hexagon' ? '-rotate-12' : ''}
                                style={{ color: el.color, width: '50%', height: '50%', opacity: 0.25 }}
                            />
                        </div>
                    </div>
                );
            })}

            {/* Gradient Orbs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#EFF6FF] rounded-full blur-3xl pointer-events-none animate-blob-slow opacity-60" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F0FDF4] rounded-full blur-3xl pointer-events-none animate-blob-slow opacity-60" style={{ animationDelay: '3s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#FAF5FF] rounded-full blur-3xl pointer-events-none opacity-40" />

            {/* Top Divider */}
            <div className="absolute top-0 left-0 right-0 pointer-events-none">
                <svg viewBox="0 0 1440 40" fill="none" className="w-full" preserveAspectRatio="none" style={{ height: '40px' }}>
                    <path d="M0 20C240 0 480 40 720 20C960 0 1200 40 1440 20V0H0V20Z" fill="#F5F5F5" opacity="0.7" />
                    <path d="M0 22C240 6 480 38 720 22C960 8 1200 38 1440 22V20C1200 40 960 0 720 20C480 40 240 0 0 20V22Z" fill="#3B82F6" opacity="0.03" />
                </svg>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
                {/* Header */}
                <div
                    className={`text-center mb-8 lg:mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <div className="relative inline-flex items-center gap-2 bg-[#EFF6FF] px-4 py-2 rounded-full mb-3 group cursor-default">
                        <Sparkles className="w-4 h-4 text-[#3B82F6] group-hover:rotate-12 transition-transform duration-500" />
                        <span className="text-[#1E3A8A] font-semibold text-xs uppercase tracking-wider">
                            Why We Stand Out
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E3A8A] tracking-tight">
                        Why Choose Us
                    </h2>
                </div>

                {/* Interactive Layout */}
                <div
                    className={`grid lg:grid-cols-2 gap-6 lg:gap-10 items-start transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    {/* LEFT: Icon Grid */}
                    <div className="grid grid-cols-3 gap-3 sm:gap-4">
                        {features.map((feature, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`group relative flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl transition-all duration-300 hover:scale-105 overflow-hidden ${activeIndex === index
                                    ? 'bg-white shadow-lg scale-105'
                                    : 'bg-white/50 hover:bg-white hover:shadow-md'
                                    }`}
                                style={{
                                    boxShadow: activeIndex === index ? `0 4px 25px -5px ${feature.color}20` : '',
                                }}
                            >
                                {/* ========== ORBITING GLOW DOT ON BORDER ========== */}
                                {activeIndex === index && (
                                    <div className="absolute inset-0 rounded-2xl pointer-events-none">
                                        {/* The orbiting container */}
                                        <div
                                            className="absolute inset-0 rounded-2xl animate-orbit-border"
                                            style={{
                                                border: '2px solid transparent',
                                            }}
                                        >
                                            {/* The glowing dot */}
                                            <div
                                                className="absolute w-2.5 h-2.5 rounded-full animate-orbit-dot"
                                                style={{
                                                    backgroundColor: feature.color,
                                                    boxShadow: `0 0 8px 2px ${feature.color}80, 0 0 16px 4px ${feature.color}40, 0 0 24px 8px ${feature.color}20`,
                                                    top: '-5px',
                                                    left: 'calc(50% - 5px)',
                                                }}
                                            />
                                        </div>
                                        {/* Secondary smaller dot for depth */}
                                        <div
                                            className="absolute inset-0 rounded-2xl pointer-events-none animate-orbit-border-reverse"
                                            style={{ border: '2px solid transparent' }}
                                        >
                                            <div
                                                className="absolute w-1.5 h-1.5 rounded-full animate-orbit-dot-reverse"
                                                style={{
                                                    backgroundColor: feature.color,
                                                    boxShadow: `0 0 6px 2px ${feature.color}60`,
                                                    bottom: '-3px',
                                                    left: 'calc(50% - 3px)',
                                                }}
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Subtle inner glow */}
                                {activeIndex === index && (
                                    <div
                                        className="absolute inset-0 rounded-2xl pointer-events-none"
                                        style={{
                                            background: `radial-gradient(circle at center, ${feature.color}06 0%, transparent 70%)`,
                                        }}
                                    />
                                )}

                                {/* Icon */}
                                <div
                                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-2 transition-all duration-500 relative z-10 ${activeIndex === index
                                        ? `${feature.iconBg} shadow-md animate-bounce-in`
                                        : feature.bgLight + ' group-hover:scale-110'
                                        }`}
                                >
                                    <feature.icon
                                        className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ${activeIndex === index ? 'text-white animate-spin-once' : 'group-hover:rotate-12'
                                            }`}
                                        style={{ color: activeIndex === index ? '#fff' : feature.color }}
                                    />
                                </div>

                                {/* Title */}
                                <h4
                                    className={`text-[11px] sm:text-xs font-bold leading-tight transition-colors duration-300 relative z-10 ${activeIndex === index ? 'text-[#1E3A8A]' : 'text-gray-500'
                                        }`}
                                >
                                    {feature.title}
                                </h4>

                                {/* Active dot indicator */}
                                <div
                                    className={`mt-1.5 w-1 h-1 rounded-full transition-all duration-300 relative z-10 ${activeIndex === index ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                                        }`}
                                    style={{ backgroundColor: feature.color }}
                                />
                            </button>
                        ))}
                    </div>

                    {/* RIGHT: Focus Card */}
                    <div className="animate-card-swap">
                        <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100 overflow-hidden transition-all duration-500">
                            {/* Top Accent Bar */}
                            <div
                                className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl z-10"
                                style={{
                                    background: `linear-gradient(to right, ${activeFeature.color}40, ${activeFeature.color}15, transparent)`,
                                }}
                            />

                            <div className="relative">
                                {/* Stat Badge */}
                                <div
                                    className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 mb-4 border animate-scale-in"
                                    style={{
                                        backgroundColor: activeFeature.color + '08',
                                        borderColor: activeFeature.color + '18',
                                    }}
                                >
                                    <span className="text-2xl font-bold" style={{ color: activeFeature.color }}>
                                        {activeFeature.stat}
                                    </span>
                                    <span className="text-[11px] text-gray-500 font-medium">{activeFeature.statLabel}</span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl sm:text-2xl font-bold text-[#1E3A8A] mb-2">
                                    {activeFeature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-5 max-w-[70%]">
                                    {activeFeature.description}
                                </p>

                                {/* Highlights */}
                                <div className="space-y-2 mb-6">
                                    {activeFeature.highlights.map((item, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-2.5 group animate-highlight-reveal"
                                            style={{ animationDelay: `${i * 0.15}s` }}
                                        >
                                            <div
                                                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                                                style={{ backgroundColor: activeFeature.color + '14' }}
                                            >
                                                <CheckCircle className="w-3 h-3" style={{ color: activeFeature.color }} />
                                            </div>
                                            <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA */}
                                <a
                                    href="#contact"
                                    className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-md overflow-hidden group/btn"
                                    style={{ backgroundColor: activeFeature.color }}
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Learn More
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                                </a>
                            </div>

                            {/* Half Circular Image */}
                            <div className="absolute -bottom-6 -right-6 w-52 h-52 sm:w-60 sm:h-60 rounded-full overflow-hidden border-4 border-white shadow-xl transition-all duration-700 animate-image-swap opacity-90 z-10">
                                <img
                                    src={activeFeature.image}
                                    alt={activeFeature.title}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                />
                                <div
                                    className="absolute inset-0 opacity-20"
                                    style={{
                                        background: `linear-gradient(135deg, transparent 40%, ${activeFeature.color} 100%)`,
                                    }}
                                />
                            </div>

                            {/* Decorative circle behind image */}
                            <div
                                className="absolute -bottom-8 -right-8 w-64 h-64 sm:w-72 sm:h-72 rounded-full opacity-15 pointer-events-none transition-all duration-700"
                                style={{ backgroundColor: activeFeature.color }}
                            />
                        </div>
                    </div>
                </div>

                {/* Stats Row */}
                <div
                    className={`mt-8 lg:mt-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                        }`}
                >
                    <div className="relative bg-gradient-to-r from-[#F8FAFC] via-[#EFF6FF] to-[#F8FAFC] rounded-2xl px-4 sm:px-6 lg:px-8 py-5 sm:py-6 border border-gray-100 shadow-sm overflow-hidden">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center text-center group cursor-default"
                                >
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-2 transition-all duration-300 group-hover:scale-110"
                                        style={{ backgroundColor: stat.color + '12' }}
                                    >
                                        <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
                                    </div>
                                    <div className="flex items-baseline gap-0.5">
                                        <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1E3A8A] tabular-nums tracking-tight">
                                            {counts[index].toLocaleString()}
                                        </span>
                                        <span className="text-sm sm:text-base font-semibold text-[#3B82F6]">{stat.suffix}</span>
                                    </div>
                                    <p className="text-[10px] sm:text-xs text-gray-500 font-medium mt-0.5">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Trust Line */}
                <div className="text-center mt-5 transition-all duration-700 delay-400">
                    <p className="inline-flex items-center gap-2 text-sm text-gray-400 group cursor-default">
                        <ShieldCheck className="w-4 h-4 text-[#16A34A] group-hover:scale-110 transition-transform duration-300" />
                        <span className="group-hover:text-gray-500 transition-colors">
                            Your health and safety are our top priority
                        </span>
                    </p>
                </div>
            </div>

            {/* Bottom Divider */}
            <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
                <svg viewBox="0 0 1440 40" fill="none" className="w-full" preserveAspectRatio="none" style={{ height: '40px' }}>
                    <path d="M0 20C240 40 480 0 720 20C960 40 1200 0 1440 20V40H0V20Z" fill="#F5F5F5" opacity="0.6" />
                    <path d="M0 18C240 36 480 2 720 18C960 34 1200 2 1440 18V20C1200 0 960 40 720 20C480 0 240 40 0 20V18Z" fill="#16A34A" opacity="0.03" />
                </svg>
            </div>

            {/* ========== ANIMATIONS ========== */}
            <style>{`
        @keyframes cardSwap {
          from { opacity: 0; transform: translateX(15px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes bounceIn {
          0% { transform: scale(0.85); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes highlightReveal {
          from { opacity: 0; transform: translateX(-8px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes spinOnce {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes floatElement {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(3deg); }
          50% { transform: translateY(-4px) rotate(-2deg); }
          75% { transform: translateY(-14px) rotate(1deg); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes blobSlow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(15px, -10px) scale(1.06); }
        }
        @keyframes imageSwap {
          from { opacity: 0; transform: scale(0.9) rotate(-5deg); }
          to { opacity: 0.9; transform: scale(1) rotate(0deg); }
        }
        @keyframes orbitBorder {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes orbitBorderReverse {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        @keyframes orbitDot {
          0% { transform: translateY(0); }
          25% { transform: translateY(0); }
          50% { transform: translateY(0); }
          75% { transform: translateY(0); }
          100% { transform: translateY(0); }
        }

        .animate-card-swap { animation: cardSwap 0.4s ease; }
        .animate-bounce-in { animation: bounceIn 0.45s ease; }
        .animate-scale-in { animation: scaleIn 0.35s ease; }
        .animate-highlight-reveal { animation: highlightReveal 0.35s ease forwards; opacity: 0; }
        .animate-spin-once { animation: spinOnce 0.5s ease; }
        .animate-float-element { animation: floatElement 10s ease-in-out infinite; }
        .animate-spin-slow { animation: spinSlow 18s linear infinite; }
        .animate-blob-slow { animation: blobSlow 12s ease-in-out infinite; }
        .animate-image-swap { animation: imageSwap 0.6s ease; }
        .animate-orbit-border { animation: orbitBorder 4s linear infinite; }
        .animate-orbit-border-reverse { animation: orbitBorderReverse 3s linear infinite; }
        .animate-orbit-dot { animation: orbitDot 4s linear infinite; }
        .animate-orbit-dot-reverse { animation: orbitDot 3s linear infinite; }
      `}</style>
        </section>
    );
};

export default WhyChooseUs;