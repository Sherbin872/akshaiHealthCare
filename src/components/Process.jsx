import React, { useState, useEffect, useRef } from 'react';
import {
    PhoneCall,
    ClipboardCheck,
    ListChecks,
    Settings,
    Heart,
    ArrowRight,
    Download,
    ChevronRight,
    Sparkles,
    Zap,
} from 'lucide-react';
import brochure from '../assets/Akshai Healthcare Service Brochure.pdf';

const Process = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [progressWidth, setProgressWidth] = useState(0);
    const sectionRef = useRef(null);

    const steps = [
        {
            number: '01',
            icon: PhoneCall,
            title: 'Book an Appointment',
            description:
                'Call our helpline or request a service online to schedule an initial consultation at your convenience.',
            color: '#3B82F6',
            gradient: 'from-[#3B82F6] to-[#1D4ED8]',
            bgLight: 'bg-[#EFF6FF]',
            iconColor: 'text-[#3B82F6]',
            image: '/images/process-booking.jpg',
        },
        {
            number: '02',
            icon: ClipboardCheck,
            title: 'Patient Assessment',
            description:
                "Our expert team evaluates the patient's condition and care requirements with a thorough assessment.",
            color: '#16A34A',
            gradient: 'from-[#16A34A] to-[#15803D]',
            bgLight: 'bg-[#F0FDF4]',
            iconColor: 'text-[#16A34A]',
            image: '/images/process-assessment.jpg',
        },
        {
            number: '03',
            icon: ListChecks,
            title: 'Choose Care Plan',
            description:
                'Select the most suitable care plan tailored to your specific needs, preferences, and budget.',
            color: '#9333EA',
            gradient: 'from-[#9333EA] to-[#7E22CE]',
            bgLight: 'bg-[#FAF5FF]',
            iconColor: 'text-[#9333EA]',
            image: '/images/process-plan.jpg',
        },
        {
            number: '04',
            icon: Settings,
            title: 'Setup & Preparation',
            description:
                'We prepare your home environment and arrange all required medical equipment for seamless care.',
            color: '#EA580C',
            gradient: 'from-[#EA580C] to-[#C2410C]',
            bgLight: 'bg-[#FFF7ED]',
            iconColor: 'text-[#EA580C]',
            image: '/images/process-setup.jpg',
        },
        {
            number: '05',
            icon: Heart,
            title: 'Care Begins',
            description:
                'Our professional team starts delivering compassionate, quality healthcare right at your doorstep.',
            color: '#DC2626',
            gradient: 'from-[#DC2626] to-[#B91C1C]',
            bgLight: 'bg-[#FEF2F2]',
            iconColor: 'text-[#DC2626]',
            image: '/images/process-care.jpg',
        },
    ];

    const floatingElements = [
        { icon: Heart, color: '#DC2626', top: '8%', left: '4%', size: 'w-5 h-5', duration: '12s', delay: '0s' },
        { icon: ClipboardCheck, color: '#16A34A', top: '70%', left: '93%', size: 'w-5 h-5', duration: '14s', delay: '2s' },
        { icon: PhoneCall, color: '#3B82F6', top: '45%', left: '3%', size: 'w-4 h-4', duration: '10s', delay: '4s' },
        { icon: Sparkles, color: '#FBBF24', top: '20%', left: '90%', size: 'w-5 h-5', duration: '8s', delay: '1s' },
        { icon: Heart, color: '#9333EA', top: '85%', left: '7%', size: 'w-4 h-4', duration: '13s', delay: '3s' },
    ];

    // Auto-cycle through steps
    useEffect(() => {
        if (!isVisible) return;
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [isVisible, steps.length]);

    // Animate progress bar
    useEffect(() => {
        if (!isVisible) return;
        const targetWidth = ((activeStep + 1) / steps.length) * 100;
        const timer = setTimeout(() => {
            setProgressWidth(targetWidth);
        }, 100);
        return () => clearTimeout(timer);
    }, [activeStep, isVisible, steps.length]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-16 lg:py-20 bg-[#F5F5F5] relative overflow-hidden">
            {/* Floating Elements */}
            {floatingElements.map((el, i) => (
                <div
                    key={i}
                    className="absolute pointer-events-none z-10 animate-float-process"
                    style={{
                        top: el.top,
                        left: el.left,
                        animationDuration: el.duration,
                        animationDelay: el.delay,
                    }}
                >
                    <div
                        className={`${el.size} flex items-center justify-center animate-spin-slow rounded-full`}
                        style={{
                            backgroundColor: el.color + '10',
                            border: `1px solid ${el.color}20`,
                        }}
                    >
                        <el.icon style={{ color: el.color, opacity: 0.4, width: '60%', height: '60%' }} />
                    </div>
                </div>
            ))}

            {/* Background Orbs */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#3B82F6]/4 rounded-full blur-3xl pointer-events-none animate-blob-slow" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#16A34A]/4 rounded-full blur-3xl pointer-events-none animate-blob-slow" style={{ animationDelay: '3s' }} />

            {/* Top Divider */}
            <div className="absolute top-0 left-0 right-0 pointer-events-none">
                <svg viewBox="0 0 1440 35" fill="none" className="w-full" preserveAspectRatio="none" style={{ height: '35px' }}>
                    <path d="M0 18C240 0 480 35 720 18C960 0 1200 35 1440 18V0H0V18Z" fill="#FFFFFF" opacity="0.8" />
                    <path d="M0 20C240 5 480 32 720 20C960 5 1200 32 1440 20V18C1200 35 960 0 720 18C480 35 240 0 0 18V20Z" fill="#3B82F6" opacity="0.03" />
                </svg>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
                {/* Section Header */}
                <div
                    className={`text-center mb-12 lg:mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-4">
                        <div className="relative w-2 h-2">
                            <div className="absolute inset-0 bg-[#16A34A] rounded-full animate-ping-slow" />
                            <div className="relative w-2 h-2 bg-[#16A34A] rounded-full" />
                        </div>
                        <span className="text-[#1E3A8A] font-semibold text-xs sm:text-sm uppercase tracking-wider">
                            How It Works
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A8A] mb-3 tracking-tight">
                        Our Process
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                        Simple steps to get quality healthcare services at your home, delivered with care and professionalism.
                    </p>
                </div>

                {/* Animated Progress Bar */}
                <div className="max-w-3xl mx-auto mb-8 lg:mb-10">
                    <div className="flex items-center justify-between mb-2 px-1">
                        {steps.map((step, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveStep(index)}
                                className={`text-[10px] sm:text-xs font-bold transition-all duration-500 ${index <= activeStep ? 'opacity-100' : 'opacity-30'
                                    }`}
                                style={{ color: index <= activeStep ? step.color : '#9CA3AF' }}
                            >
                                {step.title.split(' ')[0]}
                            </button>
                        ))}
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="h-full rounded-full transition-all duration-700 ease-in-out relative"
                            style={{
                                width: `${progressWidth}%`,
                                background: `linear-gradient(to right, #3B82F6, #16A34A, #9333EA, #EA580C, #DC2626)`,
                            }}
                        >
                            {/* Glowing shimmer on progress */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-fast" />
                        </div>
                    </div>
                </div>

                {/* Desktop Horizontal Timeline */}
                <div className="hidden lg:block">
                    <div className="relative">
                        {/* Connecting Line with animated glow */}
                        <div className="absolute top-[92px] left-[70px] right-[70px] h-[2px]">
                            <div className="w-full h-full bg-gray-200 rounded-full" />
                            {/* Active progress on the line */}
                            <div
                                className="absolute top-0 left-0 h-full rounded-full transition-all duration-700 ease-in-out"
                                style={{
                                    width: `${(activeStep / (steps.length - 1)) * 100}%`,
                                    background: `linear-gradient(to right, #3B82F6, #16A34A, #9333EA, #EA580C, #DC2626)`,
                                }}
                            />
                            {/* Glowing dots on the line */}
                            <div
                                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full transition-all duration-700 shadow-lg z-10"
                                style={{
                                    left: `${(activeStep / (steps.length - 1)) * 100}%`,
                                    backgroundColor: steps[activeStep].color,
                                    boxShadow: `0 0 12px 3px ${steps[activeStep].color}60, 0 0 24px 6px ${steps[activeStep].color}30`,
                                }}
                            />
                        </div>

                        {/* Steps */}
                        <div className="grid grid-cols-5 gap-3 relative">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col items-center text-center group cursor-pointer transition-all duration-500 ${index === activeStep ? 'scale-105' : 'scale-100 hover:scale-[1.02]'
                                        }`}
                                    onClick={() => setActiveStep(index)}
                                >
                                    {/* Step Number Circle */}
                                    <div className="relative mb-5">
                                        {/* Outer glow ring */}
                                        <div
                                            className={`absolute inset-0 w-[72px] h-[72px] -top-[8px] -left-[8px] rounded-full transition-all duration-700 ${index === activeStep ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                                                }`}
                                            style={{
                                                boxShadow: `0 0 20px 4px ${step.color}30, 0 0 40px 8px ${step.color}15`,
                                            }}
                                        />

                                        {/* Main circle */}
                                        <div
                                            className={`w-14 h-14 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center shadow-lg transition-all duration-500 relative z-10 ${index === activeStep ? 'scale-110 animate-bounce-in' : 'group-hover:scale-110'
                                                }`}
                                        >
                                            <span className="text-white font-bold text-lg">
                                                {step.number}
                                            </span>
                                        </div>

                                        {/* Connecting arrow between circles (not at last step) */}
                                        {index < steps.length - 1 && (
                                            <div className="absolute top-1/2 -translate-y-1/2 -right-[22px] z-20">
                                                <ArrowRight
                                                    className="w-4 h-4 transition-all duration-500"
                                                    style={{
                                                        color: index < activeStep ? steps[index + 1].color : '#D1D5DB',
                                                        opacity: index < activeStep ? 1 : 0.4,
                                                    }}
                                                />
                                            </div>
                                        )}
                                    </div>

                                    {/* Card Content */}
                                    <div
                                        className={`bg-white rounded-xl p-5 transition-all duration-500 w-full border ${index === activeStep
                                            ? 'shadow-xl scale-105 border-[#3B82F6]/20'
                                            : 'shadow-md border-transparent hover:shadow-lg'
                                            }`}
                                        style={{
                                            boxShadow:
                                                index === activeStep
                                                    ? `0 10px 40px -10px ${step.color}20, 0 0 0 1px ${step.color}15`
                                                    : '',
                                        }}
                                    >
                                        {/* Icon */}
                                        <div
                                            className={`w-12 h-12 ${step.bgLight} rounded-xl flex items-center justify-center mx-auto mb-3 transition-all duration-500 ${index === activeStep ? 'scale-110' : 'group-hover:scale-110'
                                                }`}
                                        >
                                            <step.icon
                                                className={`w-6 h-6 transition-all duration-500 ${index === activeStep ? `${step.iconColor} animate-spin-once` : step.iconColor
                                                    }`}
                                            />
                                        </div>

                                        {/* Title */}
                                        <h3
                                            className={`text-base font-bold mb-2 transition-colors duration-300 ${index === activeStep ? 'text-[#1E3A8A]' : 'text-[#1E3A8A] group-hover:text-[#3B82F6]'
                                                }`}
                                        >
                                            {step.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            {step.description}
                                        </p>

                                        {/* Active indicator dot */}
                                        <div className="flex justify-center mt-3">
                                            <div
                                                className={`h-1 rounded-full transition-all duration-500 ${index === activeStep ? 'w-12 opacity-100' : 'w-0 opacity-0'
                                                    }`}
                                                style={{ backgroundColor: step.color }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile & Tablet Vertical Timeline */}
                <div className="lg:hidden relative">
                    {/* Vertical Connecting Line */}
                    <div className="absolute left-7 top-0 bottom-0 w-[2px]">
                        <div className="w-full h-full bg-gray-200 rounded-full" />
                        <div
                            className="absolute top-0 left-0 w-full rounded-full transition-all duration-700"
                            style={{
                                height: `${((activeStep + 1) / steps.length) * 100}%`,
                                background: 'linear-gradient(to bottom, #3B82F6, #16A34A, #9333EA, #EA580C, #DC2626)',
                            }}
                        />
                        {/* Glowing dot on vertical line */}
                        <div
                            className="absolute -left-[5px] w-3 h-3 rounded-full transition-all duration-700 shadow-lg z-10"
                            style={{
                                top: `${((activeStep + 0.5) / steps.length) * 100}%`,
                                backgroundColor: steps[activeStep].color,
                                boxShadow: `0 0 12px 3px ${steps[activeStep].color}60, 0 0 24px 6px ${steps[activeStep].color}30`,
                            }}
                        />
                    </div>

                    {/* Steps */}
                    <div className="space-y-5">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`relative pl-16 group cursor-pointer transition-all duration-500 ${index === activeStep ? 'scale-[1.02]' : ''
                                    }`}
                                onClick={() => setActiveStep(index)}
                            >
                                {/* Step Number Circle */}
                                <div
                                    className={`absolute left-3 top-4 -translate-x-1/2 z-10 w-10 h-10 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center shadow-md transition-all duration-500 ${index === activeStep ? 'scale-110 shadow-lg' : 'group-hover:scale-110'
                                        }`}
                                    style={{
                                        boxShadow:
                                            index === activeStep
                                                ? `0 0 16px 3px ${step.color}40, 0 0 32px 6px ${step.color}20`
                                                : '',
                                    }}
                                >
                                    <span className="text-white font-bold text-sm">
                                        {index + 1}
                                    </span>
                                </div>

                                {/* Card */}
                                <div
                                    className={`bg-white rounded-xl p-5 sm:p-6 transition-all duration-500 border ${index === activeStep
                                        ? 'shadow-lg border-[#3B82F6]/20'
                                        : 'shadow-sm border-transparent hover:shadow-md'
                                        }`}
                                    style={{
                                        boxShadow:
                                            index === activeStep
                                                ? `0 8px 30px -8px ${step.color}15, 0 0 0 1px ${step.color}10`
                                                : '',
                                    }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div
                                            className={`w-12 h-12 ${step.bgLight} rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${index === activeStep ? 'scale-110' : ''
                                                }`}
                                        >
                                            <step.icon
                                                className={`w-6 h-6 transition-all duration-500 ${index === activeStep ? `${step.iconColor} animate-spin-once` : step.iconColor
                                                    }`}
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span
                                                    className="text-xs font-bold transition-colors duration-300"
                                                    style={{ color: index === activeStep ? step.color : '#9CA3AF' }}
                                                >
                                                    STEP {step.number}
                                                </span>
                                                <ChevronRight
                                                    className="w-3 h-3 transition-colors duration-300"
                                                    style={{ color: index === activeStep ? step.color : '#9CA3AF' }}
                                                />
                                            </div>
                                            <h3 className="text-lg font-bold text-[#1E3A8A] mb-1">{step.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div
                    className={`text-center mt-14 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                        }`}
                >
                    <p className="text-gray-600 mb-5 text-base sm:text-lg font-medium">
                        Ready to start your care journey?
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href={brochure}
                            download
                            className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#DC2626] text-white font-semibold rounded-xl hover:bg-[#B91C1C] transition-all duration-300 transform hover:scale-[1.03] active:scale-95 shadow-lg overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                            <Download className="w-5 h-5 relative z-10" />

                            <span className="relative z-10">Download Brochure</span>
                        </a>
                        <a
                            href="tel:+919442659377"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-[#1E3A8A] text-[#1E3A8A] font-semibold rounded-xl hover:bg-[#1E3A8A] hover:text-white transition-all duration-300 transform hover:scale-[1.03] active:scale-95"
                        >
                            <PhoneCall className="w-5 h-5" />
                            Call Now
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Divider */}
            <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
                <svg viewBox="0 0 1440 35" fill="none" className="w-full" preserveAspectRatio="none" style={{ height: '35px' }}>
                    <path d="M0 18C240 35 480 0 720 18C960 35 1200 0 1440 18V35H0V18Z" fill="#FFFFFF" opacity="0.6" />
                </svg>
            </div>

            {/* Animations */}
            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes stepIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes stepSlide {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes floatProcess {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-12px) rotate(5deg); }
          66% { transform: translateY(-6px) rotate(-3deg); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes blobSlow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(15px, -10px) scale(1.06); }
        }
        @keyframes bounceIn {
          0% { transform: scale(0.8); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }
        @keyframes spinOnce {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pingSlow {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        @keyframes shimmerFast {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        .animate-fade-in { animation: fadeIn 0.8s ease forwards; opacity: 0; }
        .animate-step-in { animation: stepIn 0.6s ease forwards; opacity: 0; }
        .animate-step-slide { animation: stepSlide 0.5s ease forwards; opacity: 0; }
        .animate-float-process { animation: floatProcess 8s ease-in-out infinite; }
        .animate-spin-slow { animation: spinSlow 20s linear infinite; }
        .animate-blob-slow { animation: blobSlow 12s ease-in-out infinite; }
        .animate-bounce-in { animation: bounceIn 0.5s ease; }
        .animate-spin-once { animation: spinOnce 0.6s ease; }
        .animate-ping-slow { animation: pingSlow 2s ease-out infinite; }
        .animate-shimmer-fast { animation: shimmerFast 2s linear infinite; }
      `}</style>
        </section>
    );
};

export default Process;