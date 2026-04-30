import React, { useState, useEffect, useRef } from 'react';
import {
    HeartPulse,
    Stethoscope,
    UserRound,
    Activity,
    Siren,
    MonitorPlay,
    Package,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    Star,
    Shield,
    Clock,
    Sparkles,
    Phone,
} from 'lucide-react';

const Services = () => {
    const scrollContainerRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const services = [
        {
            icon: HeartPulse,
            title: 'Home Nursing',
            tagline: 'Skilled Care at Home',
            description:
                'Professional nursing care including medication administration, wound care, vital monitoring & post-surgical recovery.',
            gradient: 'from-[#DC2626] to-[#EF4444]',
            bgLight: 'bg-[#FEF2F2]',
            iconBg: 'bg-[#DC2626]',
            stats: { icon: Clock, value: '24/7', label: 'Availability' },
            image: 'https://storage.googleapis.com/apollo_blogs/uploads/Managing_Chronic_Conditions_80090c2816.png',
            features: ['Medication Mgmt', 'Wound Care', 'Post-Surgery', 'Vital Monitoring'],
            color: '#DC2626',
        },
        {
            icon: Stethoscope,
            title: 'Doctor Consultation',
            tagline: 'Expert Medical Advice',
            description:
                'Qualified doctors available for home visits — geriatric care, preventive check-ups, specialist consultations & more.',
            gradient: 'from-[#1E3A8A] to-[#3B82F6]',
            bgLight: 'bg-[#EFF6FF]',
            iconBg: 'bg-[#1E3A8A]',
            stats: { icon: Star, value: '500+', label: 'Doctors' },
            image: 'https://img.freepik.com/premium-photo/indian-male-doctor-consulting-elderly-patient-medical-appointment-clinic_1166177-12158.jpg',
            features: ['Geriatric Care', 'Preventive', 'Specialist', 'Routine Check-up'],
            color: '#1E3A8A',
        },
        {
            icon: UserRound,
            title: 'Elderly Care',
            tagline: 'Compassionate Support',
            description:
                'Personalized assistance with daily activities, companionship, nutrition planning & medication management for seniors.',
            gradient: 'from-[#16A34A] to-[#22C55E]',
            bgLight: 'bg-[#F0FDF4]',
            iconBg: 'bg-[#16A34A]',
            stats: { icon: HeartPulse, value: '98%', label: 'Satisfaction' },
            image: 'https://media.istockphoto.com/id/1392760626/photo/happy-smiling-doctor-embracing-or-hugging-recovered-patient-on-wheelchair-at-hospital-park-by.jpg?s=612x612&w=0&k=20&c=5aYSBzQaQPyU-c4ia69TkSFevWuNQ0YLKh9TUaG7v8I=',
            features: ['Personal Care', 'Companionship', 'Nutrition', 'Mobility Help'],
            color: '#16A34A',
        },
        {
            icon: Activity,
            title: 'Physiotherapy',
            tagline: 'Recovery at Home',
            description:
                'Rehabilitation therapies including heat application, therapeutic exercise, TENS, mobilization & strengthening exercises.',
            gradient: 'from-[#9333EA] to-[#A855F7]',
            bgLight: 'bg-[#FAF5FF]',
            iconBg: 'bg-[#9333EA]',
            stats: { icon: Activity, value: '15+', label: 'Therapies' },
            image: 'https://img.freepik.com/free-photo/doctor-helping-patient-rehabilitation_23-2150321634.jpg?semt=ais_hybrid&w=740&q=80',
            features: ['Heat Therapy', 'Exercise', 'TENS', 'Mobilization'],
            color: '#9333EA',
        },
        {
            icon: Siren,
            title: 'Emergency Care',
            tagline: 'Immediate Response',
            description:
                '24/7 emergency assistance with critical care, IV therapy, cardiac care & ambulance coordination when needed.',
            gradient: 'from-[#EA580C] to-[#F97316]',
            bgLight: 'bg-[#FFF7ED]',
            iconBg: 'bg-[#EA580C]',
            stats: { icon: Shield, value: '24/7', label: 'Emergency' },
            image: 'https://images.indianexpress.com/2022/07/emergency_first-aid_1200_gettyy.jpg',
            features: ['Critical Care', 'IV Therapy', 'Cardiac Care', 'Ambulance'],
            color: '#EA580C',
        },
        {
            icon: MonitorPlay,
            title: 'Telemedicine',
            tagline: 'Virtual Healthcare',
            description:
                'Remote consultations via secure platform — diagnosis, prescriptions, follow-up care from experienced physicians.',
            gradient: 'from-[#0891B2] to-[#06B6D4]',
            bgLight: 'bg-[#ECFEFF]',
            iconBg: 'bg-[#0891B2]',
            stats: { icon: MonitorPlay, value: 'Instant', label: 'Connect' },
            image: 'https://cdn.expresshealthcare.in/wp-content/uploads/2020/09/22004152/EH_telemedicine_health_online_doctor_888-750x400.jpg',
            features: ['Remote Consult', 'E-Prescription', 'Follow-up', 'Secure Platform'],
            color: '#0891B2',
        },
        {
            icon: Package,
            title: 'Equipment Rentals',
            tagline: 'Medical Gear Delivered',
            description:
                'Quality medical equipment — wheelchairs, oxygen concentrators, hospital beds, BiPAP/CPAP machines & more.',
            gradient: 'from-[#4F46E5] to-[#6366F1]',
            bgLight: 'bg-[#E0E7FF]',
            iconBg: 'bg-[#4F46E5]',
            stats: { icon: Package, value: '50+', label: 'Equipment' },
            image: 'https://5.imimg.com/data5/SELLER/Default/2024/9/450039207/RI/BB/LX/226176936/medical-devices-500x500.jpg',
            features: ['Wheelchair', 'Oxygen', 'Hospital Bed', 'BiPAP/CPAP'],
            color: '#4F46E5',
        },
    ];

    // Floating rotating icons for background
    const floatingIcons = [
        { icon: HeartPulse, size: 'w-8 h-8', color: 'text-[#DC2626]/10', duration: '12s', delay: '0s', top: '15%', left: '5%' },
        { icon: Stethoscope, size: 'w-6 h-6', color: 'text-[#3B82F6]/10', duration: '15s', delay: '2s', top: '60%', left: '90%' },
        { icon: Activity, size: 'w-7 h-7', color: 'text-[#16A34A]/10', duration: '10s', delay: '4s', top: '80%', left: '15%' },
        { icon: Star, size: 'w-5 h-5', color: 'text-[#FBBF24]/10', duration: '8s', delay: '1s', top: '25%', left: '85%' },
        { icon: Shield, size: 'w-6 h-6', color: 'text-[#9333EA]/10', duration: '14s', delay: '3s', top: '70%', left: '40%' },
        { icon: Sparkles, size: 'w-5 h-5', color: 'text-[#EA580C]/10', duration: '11s', delay: '5s', top: '40%', left: '60%' },
        { icon: HeartPulse, size: 'w-4 h-4', color: 'text-[#0891B2]/10', duration: '9s', delay: '6s', top: '90%', left: '75%' },
        { icon: Clock, size: 'w-7 h-7', color: 'text-[#4F46E5]/10', duration: '13s', delay: '2.5s', top: '10%', left: '50%' },
    ];

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const checkScroll = () => {
        const container = scrollContainerRef.current;
        if (!container) return;
        setCanScrollLeft(container.scrollLeft > 10);
        setCanScrollRight(
            container.scrollLeft < container.scrollWidth - container.clientWidth - 10
        );

        // Update active index based on scroll position
        const cardWidth = container.children[0]?.offsetWidth + 24 || 380;
        const newIndex = Math.round(container.scrollLeft / cardWidth);
        setActiveIndex(Math.min(newIndex, services.length - 1));
    };

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (!container) return;
        const scrollAmount = 380;
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
        setTimeout(checkScroll, 400);
    };

    return (
        <section className="py-16 lg:py-24 bg-[#F5F5F5] relative overflow-hidden">
            {/* Floating Animated Icons Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {floatingIcons.map((item, i) => (
                    <div
                        key={i}
                        className={`absolute ${item.size} ${item.color} animate-float-rotate`}
                        style={{
                            top: item.top,
                            left: item.left,
                            animationDuration: item.duration,
                            animationDelay: item.delay,
                        }}
                    >
                        <item.icon className="w-full h-full" />
                    </div>
                ))}
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#16A34A]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div
                    className={`text-center mb-10 lg:mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-4">
                        <Sparkles className="w-4 h-4 text-[#3B82F6]" />
                        <span className="text-[#1E3A8A] font-semibold text-xs sm:text-sm uppercase tracking-wider">
                            What We Offer
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A8A] mb-3 tracking-tight">
                        Our Services
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                        Comprehensive healthcare services designed to support you at home with comfort, dignity & quality care.
                    </p>
                </div>

                {/* Scroll Navigation Buttons + Cards Container */}
                <div className="relative">
                    {/* Left Arrow */}
                    <button
                        onClick={() => scroll('left')}
                        className={`absolute left-0 top-[45%] -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl ${canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
                            }`}
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[#1E3A8A]" />
                    </button>

                    {/* Scrollable Cards Container */}
                    <div
                        ref={scrollContainerRef}
                        onScroll={checkScroll}
                        className="flex gap-4 sm:gap-5 lg:gap-6 overflow-x-auto scrollbar-hide pb-4 px-2 snap-x snap-mandatory scroll-smooth"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group relative flex-shrink-0 w-[300px] sm:w-[340px] lg:w-[370px] snap-start animate-card-reveal"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    '--card-color': service.color,
                                }}
                            >
                                {/* Card */}
                                <div className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer h-full flex flex-col">
                                    {/* Image Section with Overlay */}
                                    <div className="relative h-40 sm:h-44 overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div
                                            className="absolute inset-0 opacity-60 transition-opacity duration-500 group-hover:opacity-80"
                                            style={{
                                                background: `linear-gradient(to top, ${service.color}DD, transparent 60%)`,
                                            }}
                                        />

                                        {/* Animated Icon Badge */}
                                        <div className="absolute top-3 left-3 z-10">
                                            <div className={`w-10 h-10 sm:w-11 sm:h-11 ${service.iconBg} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                                                <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                            </div>
                                        </div>

                                        {/* Floating Stat Badge */}
                                        <div className="absolute top-3 right-3 z-10">
                                            <div className="bg-white/90 backdrop-blur-sm rounded-lg px-2.5 py-1.5 shadow-lg flex items-center gap-1.5">
                                                <service.stats.icon className="w-3.5 h-3.5" style={{ color: service.color }} />
                                                <span className="text-xs font-bold" style={{ color: service.color }}>
                                                    {service.stats.value}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Title Overlay on Image */}
                                        <div className="absolute bottom-3 left-3 right-3 z-10">
                                            <h3 className="text-white font-bold text-lg sm:text-xl leading-tight">
                                                {service.title}
                                            </h3>
                                            <p className="text-white/80 text-xs sm:text-sm font-medium">
                                                {service.tagline}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-4 sm:p-5 flex-1 flex flex-col">
                                        {/* Description */}
                                        <p className="text-gray-600 text-sm leading-relaxed mb-3 flex-1">
                                            {service.description}
                                        </p>

                                        {/* Feature Pills */}
                                        <div className="flex flex-wrap gap-1.5 mb-4">
                                            {service.features.map((feature, fIndex) => (
                                                <span
                                                    key={fIndex}
                                                    className="text-[10px] sm:text-xs font-medium px-2 py-1 rounded-full border transition-all duration-300 group-hover:scale-105"
                                                    style={{
                                                        borderColor: service.color + '30',
                                                        color: service.color,
                                                        backgroundColor: service.color + '08',
                                                    }}
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Learn More Link */}
                                        <div className="flex items-center gap-1.5 font-semibold text-sm transition-all duration-300 group-hover:gap-2.5">
                                            <span style={{ color: service.color }}>Learn More</span>
                                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" style={{ color: service.color }} />
                                        </div>
                                    </div>

                                    {/* Hover Glow Effect */}
                                    <div
                                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                                        style={{
                                            boxShadow: `0 0 50px -10px ${service.color}40`,
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={() => scroll('right')}
                        className={`absolute right-0 top-[45%] -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl ${canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
                            }`}
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#1E3A8A]" />
                    </button>
                </div>

                {/* Bottom Badge + CTA Row */}
                <div
                    className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 lg:mt-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    {/* Trust Badge */}
                    <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-5 py-3 shadow-md border border-gray-100 animate-pulse-glow">
                        <div className="flex -space-x-2">
                            {[HeartPulse, Shield, Star].map((Icon, i) => (
                                <div
                                    key={i}
                                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] border-2 border-white flex items-center justify-center shadow-md"
                                    style={{ zIndex: 3 - i }}
                                >
                                    <Icon className="w-4 h-4 text-white" />
                                </div>
                            ))}
                        </div>
                        <div>
                            <p className="text-sm font-bold text-[#1E3A8A]">Trusted Excellence</p>
                            <p className="text-xs text-gray-500">Doctor-supervised & verified staff</p>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="hidden sm:block w-px h-10 bg-gray-300" />

                    {/* Emergency CTA */}
                    <a
                        href="tel:+919442659377"
                        className="inline-flex items-center gap-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold px-5 py-3.5 rounded-2xl transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-lg hover:shadow-xl"
                    >
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <Phone className="w-4 h-4" />
                        </div>
                        <div className="text-left">
                            <p className="text-sm leading-tight">Need Urgent Care?</p>
                            <p className="text-[10px] text-white/70">Call +91 94426 59377</p>
                        </div>
                    </a>
                </div>
            </div>

            {/* Animations + Scrollbar Hide */}
            <style>{`
        @keyframes cardReveal {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes floatRotate {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) rotate(90deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
          75% {
            transform: translateY(-25px) rotate(270deg);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(30, 58, 138, 0.1);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(30, 58, 138, 0);
          }
        }

        .animate-card-reveal {
          animation: cardReveal 0.7s ease forwards;
          opacity: 0;
        }

        .animate-float-rotate {
          animation: floatRotate 8s infinite ease-in-out;
        }

        .animate-pulse-glow {
          animation: pulseGlow 3s infinite ease-in-out;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </section>
    );
};

export default Services;