import React, { useState, useEffect, useRef } from 'react';
import {
    ArrowLeft,
    Heart,
    Shield,
    Star,
    Clock,
    ChevronRight,
    ChevronLeft,
    CheckCircle,
    Phone,
    Users,
    Sparkles,
    Quote,
    ArrowRight,
    Pill,
    Activity,
    Syringe,
    Award,
    Zap,
    HandHeart,
    Stethoscope,
    BadgeCheck,
    Timer,
    MessageCircle,
    Home,
    BedDouble,
    ClipboardList,
    AlertCircle,
    Play,
    Pause,
    Volume2,
    Siren,
    Ambulance,
    HeartPulse,
    Bell,
} from 'lucide-react';

const EmergencyCarePage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeCarousel, setActiveCarousel] = useState(0);
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isCallPulsing, setIsCallPulsing] = useState(false);
    const [expandedCategory, setExpandedCategory] = useState(null);
    const [activeImage, setActiveImage] = useState(0);
    const sectionRef = useRef(null);

    // Hero image gallery
    const heroGallery = [
        { src: 'https://images.unsplash.com/photo-1554734867-bf3c00a49371?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1lcmdlbmN5JTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D', alt: 'Emergency medical team', position: 'object-[center_20%]' },
        { src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600', alt: 'Urgent care at home', position: 'object-center' },
        { src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600', alt: 'Vital signs monitoring', position: 'object-[center_30%]' },
        { src: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600', alt: 'Emergency response', position: 'object-center' },
        { src: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600', alt: 'Ambulance service', position: 'object-center' },
    ];

    const testimonials = [
        { quote: "When my father had a cardiac emergency, their team arrived within minutes and provided life-saving care until we reached the hospital.", author: 'Rajesh M.', relation: 'Son of Patient', rating: 5, avatar: 'RM' },
        { quote: "The emergency nurse managed my mother's critical situation with such expertise and calmness. Forever grateful for their prompt response.", author: 'Lakshmi S.', relation: 'Daughter', rating: 5, avatar: 'LS' },
        { quote: "Their ambulance service and accompanied care manager made all the difference during our medical emergency. Highly recommended.", author: 'Karthik P.', relation: 'Patient', rating: 5, avatar: 'KP' },
    ];

    const emergencyCategories = [
        {
            title: 'Critical Care Response',
            emoji: '🫀',
            color: '#DC2626',
            bgLight: 'bg-[#FEF2F2]',
            description: 'Immediate life-saving interventions and critical medical support delivered by our trained emergency nurses at your location.',
            services: [
                'Life-Saving Emergency Interventions',
                'Vital Signs Monitoring & Assessment',
                'Cardiac Emergency Response — including CPR',
                'Respiratory Distress Management',
                'Oxygen Administration & Support',
                'Emergency Medication Administration',
                'Shock Management & Stabilization',
                'Continuous Patient Monitoring Until Hospital Transfer',
            ],
        },
        {
            title: 'Ambulance & Transport Assistance',
            emoji: '🚑',
            color: '#3B82F6',
            bgLight: 'bg-[#EFF6FF]',
            description: 'Rapid ambulance coordination and safe patient transport with accompanied care manager for peace of mind during emergencies.',
            services: [
                'Ambulance Assistance — rapid coordination & dispatch',
                'Non-Medical Emergency Transport',
                'Medical Emergency Assistance with Care Plan',
                'Real-Time Updates During Transport',
                'Accompanied Care Manager Throughout Journey',
                'Safe Transfer to Medical Facility',
                'Pre-Hospital Emergency Care During Transit',
                'Coordination with Hospital Emergency Department',
            ],
        },
        {
            title: 'Intravenous (IV) Therapy',
            emoji: '💉',
            color: '#9333EA',
            bgLight: 'bg-[#FAF5FF]',
            description: 'Expert IV therapy administration and monitoring for patients requiring immediate intravenous medications or fluids at home.',
            services: [
                'Emergency IV Access & Cannulation',
                'Intravenous Medication Administration',
                'IV Fluid Therapy & Hydration',
                'Proper Monitoring of IV Sites',
                'Infusion Pump Management',
                'Blood Transfusion Monitoring (if required)',
                'IV Line Care & Maintenance',
                'Documentation & Progress Tracking',
            ],
        },
        {
            title: 'Wound & Injury Care',
            emoji: '🩹',
            color: '#16A34A',
            bgLight: 'bg-[#F0FDF4]',
            description: 'Expert emergency wound care to manage injuries, control bleeding, and prevent infections with proper dressing techniques.',
            services: [
                'Emergency Wound Assessment & Management',
                'Bleeding Control & Hemorrhage Management',
                'Wound Cleaning & Debridement',
                'Infection Prevention Protocols',
                'Surgical Wound Emergency Care',
                'Burn Care & Dressing',
                'Pressure Sore Emergency Management',
                'Post-Trauma Wound Stabilization',
            ],
        },
        {
            title: 'Medication & Cardiac Care',
            emoji: '💊',
            color: '#EA580C',
            bgLight: 'bg-[#FFF7ED]',
            description: 'Emergency medication management and specialized cardiac care for critical situations requiring immediate intervention.',
            services: [
                'Emergency Medication Management',
                'Right Medications at the Right Time',
                'Cardiac Emergency Care & CPR',
                'ECG Monitoring & Interpretation',
                'Blood Pressure Crisis Management',
                'Chest Pain Assessment & Emergency Response',
                'Anti-Arrhythmic Drug Administration',
                'Post-Cardiac Event Stabilization',
            ],
        },
        {
            title: '24/7 Emergency Support',
            emoji: '🆘',
            color: '#0891B2',
            bgLight: 'bg-[#ECFEFF]',
            description: 'Round-the-clock emergency care services for elderly, individuals with disabilities, post-surgery patients, and parenting individuals.',
            services: [
                '24/7 Emergency Response Available',
                'Elderly Emergency Care — falls, breathing issues, etc.',
                'Emergency Care for Individuals with Disabilities',
                'Post-Surgery Emergency Complications Management',
                'Parenting Emergency Support',
                'Chronic Illness Emergency Exacerbation Care',
                'Realtime Updates to Family Members',
                'Coordination with Primary Physician',
            ],
        },
    ];

    const highlights = [
        { icon: Bell, text: '24/7 emergency response — help when you need it most' },
        { icon: Ambulance, text: 'Ambulance assistance — non-medical & medical emergencies' },
        { icon: BadgeCheck, text: 'Trained emergency nurses with critical care expertise' },
        { icon: Timer, text: 'Prompt response & real-time updates throughout care' },
        { icon: HeartPulse, text: 'Life-saving interventions including CPR & cardiac care' },
        { icon: Shield, text: 'Accompanied care manager for safe transport & support' },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Hero gallery auto-rotate
    useEffect(() => {
        if (isPaused) return;
        const t = setInterval(() => setActiveImage((p) => (p + 1) % heroGallery.length), 3000);
        return () => clearInterval(t);
    }, [isPaused, heroGallery.length]);

    // Testimonials auto-rotate
    useEffect(() => {
        const t = setInterval(() => setActiveTestimonial((p) => (p + 1) % testimonials.length), 4000);
        return () => clearInterval(t);
    }, [testimonials.length]);

    useEffect(() => {
        const t = setInterval(() => { setIsCallPulsing(true); setTimeout(() => setIsCallPulsing(false), 600); }, 2000);
        return () => clearInterval(t);
    }, []);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
        if (sectionRef.current) obs.observe(sectionRef.current);
        return () => obs.disconnect();
    }, []);

    const toggleCategory = (index) => {
        setExpandedCategory(expandedCategory === index ? null : index);
    };

    return (
        <div ref={sectionRef} className="min-h-screen bg-white overflow-x-hidden">
            {/* ========== SERVICE PAGE NAVBAR ========== */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/95 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-14">
                        {/* Logo */}
                        <a href="#home" className="flex items-center gap-2 text-white">
                            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center overflow-hidden p-0.5">
                                <img src="https://res.cloudinary.com/dkmmpyq6u/image/upload/f_auto,q_auto/SAFHE_Logo_tawlhv" alt="SAFHE" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-sm font-bold hidden sm:block">SAFHE</span>
                        </a>

                        {/* Center: Service Name */}
                        <div className="hidden sm:flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-[#DC2626] rounded-full animate-pulse" />
                            <span className="text-white/60 text-xs font-medium">Emergency Care 24/7</span>
                        </div>

                        {/* Right: Quick Actions */}
                        <div className="flex items-center gap-3">
                            <a href="#services" className="text-white/40 hover:text-white text-[11px] font-medium transition-colors hidden sm:block">Services</a>
                            <a href="#why-us" className="text-white/40 hover:text-white text-[11px] font-medium transition-colors hidden sm:block">Why Us</a>
                            <a href="tel:+919442659377" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#DC2626] text-white text-[11px] font-bold rounded-lg hover:bg-[#B91C1C] transition-all animate-pulse-ring">
                                <Phone className="w-3.5 h-3.5" />
                                Emergency Call
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* ========== FLOATING EMERGENCY CALL BUTTON ========== */}
            <a href="tel:+919442659377" className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-[#DC2626] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300" style={{ boxShadow: '0 8px 25px rgba(220,38,38,0.5)' }}>
                <div className={`absolute inset-0 rounded-full bg-[#DC2626] animate-ping-slow opacity-40 ${isCallPulsing ? 'scale-125' : ''}`} />
                <Phone className="w-5 h-5 text-white relative z-10 animate-pulse" />
                <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#16A34A] rounded-full border-2 border-white" />
            </a>

            {/* ========== HERO — UNIQUE SPLIT LAYOUT ========== */}
            <section className="relative min-h-[90vh] flex items-stretch overflow-hidden">
                {/* LEFT — Dark Content Side (40%) */}
                <div className="relative w-full lg:w-[42%] bg-[#0A1628] flex items-center">
                    {/* Dark side patterns */}
                    <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:16px_16px]" />
                    <div className="absolute top-0 right-0 w-48 h-48 bg-[#DC2626]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#DC2626]/5 rounded-full blur-3xl" />

                    {/* Vertical accent line */}
                    <div className="absolute right-0 top-20 bottom-20 w-px bg-gradient-to-b from-transparent via-[#DC2626]/30 to-transparent hidden lg:block" />

                    <div className={`relative w-full px-6 sm:px-10 lg:px-12 py-16 sm:py-20 transition-all duration-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <a href="#home" className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 mb-8 transition-all text-xs group">
                            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /><span>Back</span>
                        </a>

                        {/* Emergency Badge */}
                        <div className="inline-flex items-center gap-2 bg-[#DC2626]/10 border border-[#DC2626]/20 px-3 py-1.5 rounded-full mb-5">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DC2626] opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#DC2626]" />
                            </span>
                            <span className="text-[#DC2626] text-[10px] font-bold uppercase tracking-widest">24/7 Emergency Hotline</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.08] mb-4 tracking-tight">
                            Emergency
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F87171] to-[#FCA5A5]">
                                Care
                            </span>
                            Services
                        </h1>

                        <p className="text-white/45 text-sm leading-relaxed mb-6 max-w-sm">
                            Immediate medical assistance when every second counts — <span className="text-white/70 font-medium">trained professionals, prompt response, expert care</span>.
                        </p>

                        {/* Trust stats row */}
                        <div className="flex gap-4 mb-6">
                            {[
                                { num: '24/7', label: 'Response' },
                                { num: '15min', label: 'Avg. Arrival' },
                                { num: '100%', label: 'Critical Ready' },
                            ].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <p className="text-white font-bold text-lg leading-tight">{stat.num}</p>
                                    <p className="text-white/30 text-[10px] uppercase tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-3">
                            <a href="tel:+919442659377" className={`inline-flex items-center gap-2 px-5 py-3 bg-[#DC2626] text-white font-bold text-sm rounded-xl hover:bg-[#B91C1C] transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-[#DC2626]/30 ${isCallPulsing ? 'ring-4 ring-[#DC2626]/30' : ''}`}>
                                <Phone className="w-4 h-4" />Emergency Call Now
                            </a>
                            <a href="#services" className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 text-white text-sm font-semibold rounded-xl hover:bg-white/10 transition-all hover:scale-[1.03]">
                                View Services <ChevronRight className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* RIGHT — Image Gallery Side (60%) */}
                <div className="hidden lg:block relative w-[58%] bg-[#0F1D4A] overflow-hidden"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}>
                    {/* Gallery Images */}
                    <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-1 p-1">
                        {heroGallery.map((img, i) => (
                            <div
                                key={i}
                                className={`relative overflow-hidden cursor-pointer group/img transition-all duration-500 ${i === activeImage ? 'col-span-2 row-span-2 z-10 ring-2 ring-[#DC2626]/50' : 'opacity-40 hover:opacity-60'
                                    }`}
                                onClick={() => setActiveImage(i)}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className={`w-full h-full object-cover transition-all duration-700 group-hover/img:scale-110 ${img.position}`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1D4A]/80 via-transparent to-transparent" />
                                {i === activeImage && (
                                    <div className="absolute bottom-3 left-3 right-3">
                                        <p className="text-white text-xs font-bold">{img.alt}</p>
                                        <div className="flex gap-1 mt-1">
                                            {heroGallery.map((_, d) => (
                                                <span key={d} className={`w-6 h-1 rounded-full transition-all ${d === activeImage ? 'bg-white' : 'bg-white/20'}`} />
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Floating review card */}
                    <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-xl rounded-2xl px-4 py-3 border border-white/10 shadow-2xl z-20 animate-float-badge">
                        <div className="flex items-center gap-2 mb-1">
                            <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-[#FBBF24] fill-[#FBBF24]" />)}</div>
                        </div>
                        <p className="text-white/80 text-[11px] italic">"Life-saving emergency response!"</p>
                        <p className="text-white/40 text-[9px] mt-0.5">— Rajesh M.</p>
                    </div>

                    {/* Live indicator */}
                    <div className="absolute top-6 right-6 flex items-center gap-2 bg-[#DC2626]/20 backdrop-blur-sm rounded-full px-3 py-1.5 border border-[#DC2626]/20 z-20">
                        <span className="w-2 h-2 bg-[#16A34A] rounded-full animate-pulse" />
                        <span className="text-white/80 text-[10px] font-bold">LIVE • Emergency Team Ready</span>
                    </div>
                </div>

                {/* Mobile: Stacked image gallery */}
                <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-[#0A1628] via-[#0F1D4A] to-[#0A1628] flex flex-col">
                    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8 flex flex-col justify-end flex-1">
                        {/* Mobile carousel */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 mb-6"
                            onTouchStart={() => setIsPaused(true)}
                            onTouchEnd={() => setIsPaused(false)}>
                            <div className="relative aspect-[4/3]">
                                {heroGallery.slice(0, 3).map((img, i) => (
                                    <div key={i} className={`absolute inset-0 transition-all duration-500 ${i === activeImage ? 'opacity-100' : 'opacity-0'}`}>
                                        <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />
                                    </div>
                                ))}
                                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                                    {heroGallery.slice(0, 3).map((_, i) => (
                                        <button key={i} onClick={() => setActiveImage(i)} className={`rounded-full transition-all ${i === activeImage ? 'w-6 h-1.5 bg-white' : 'w-1.5 h-1.5 bg-white/30'}`} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========== DETAILED SERVICES ========== */}
            <section id="services" className="py-12 lg:py-14 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 bg-[#FEF2F2] px-3 py-1 rounded-full mb-3"><Siren className="w-3.5 h-3.5 text-[#DC2626]" /><span className="text-[#1E3A8A] font-semibold text-[11px] uppercase tracking-wider">Emergency Services</span></div>
                        <h2 className="text-2xl sm:text-3xl font-black text-[#1E3A8A]">Our Comprehensive Emergency Care</h2>
                        <p className="text-gray-500 text-sm mt-1">Click on any category to see detailed emergency services</p>
                    </div>

                    <div className="space-y-3 max-w-3xl mx-auto">
                        {emergencyCategories.map((category, index) => (
                            <div key={index} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                                <button onClick={() => toggleCategory(index)} className="w-full flex items-center justify-between p-4 sm:p-5 text-left group">
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <span className="text-2xl">{category.emoji}</span>
                                        <div>
                                            <h3 className="text-sm sm:text-base font-bold text-[#1E3A8A] group-hover:text-[#DC2626] transition-colors">{category.title}</h3>
                                            <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">{category.description}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 flex-shrink-0">
                                        <span className="text-[10px] font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: category.color + '15', color: category.color }}>{category.services.length} services</span>
                                        <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${expandedCategory === index ? 'rotate-90' : ''}`} />
                                    </div>
                                </button>

                                <div className={`transition-all duration-400 ease-in-out overflow-hidden ${expandedCategory === index ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
                                        <div className="bg-[#F8FAFC] rounded-xl p-4 sm:p-5">
                                            <ul className="grid sm:grid-cols-2 gap-2.5">
                                                {category.services.map((service, sIndex) => (
                                                    <li key={sIndex} className="flex items-start gap-2.5 group/item">
                                                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: category.color + '18' }}>
                                                            <CheckCircle className="w-3 h-3" style={{ color: category.color }} />
                                                        </div>
                                                        <span className="text-[11px] sm:text-xs text-gray-600 group-hover/item:text-gray-900 transition-colors leading-relaxed">{service}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                            <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between flex-wrap gap-3">
                                                <span className="text-[10px] sm:text-xs text-gray-400 flex items-center gap-1.5"><Timer className="w-3.5 h-3.5 text-[#DC2626] animate-pulse" />Available 24/7 • Immediate Response</span>
                                                <a href="tel:+919442659377" className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold px-3 py-1.5 rounded-lg transition-all duration-300 hover:scale-105" style={{ backgroundColor: category.color, color: '#fff' }}><Phone className="w-3 h-3" />Call for {category.title}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-gray-500 text-sm mb-4">Medical emergency? Don't wait. Our team is ready to respond immediately.</p>
                        <a href="tel:+919442659377" className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#DC2626] text-white font-bold text-sm rounded-xl hover:bg-[#B91C1C] transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-lg hover:shadow-xl">
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"><Phone className="w-4 h-4 animate-pulse" /></div>
                            <div className="text-left"><div className="leading-tight">Emergency Hotline</div><div className="text-[11px] text-white/70 font-normal">+91 94426 59377</div></div>
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <p className="text-gray-400 text-[11px] mt-3">Available 24/7 • Immediate Response • Expert Emergency Team</p>
                    </div>
                </div>
            </section>

            {/* ========== HIGHLIGHTS + TESTIMONIALS ========== */}
            <section className="py-14 lg:py-16 bg-gradient-to-b from-[#F8FAFC] to-white relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#DC2626]/5 rounded-full blur-3xl animate-blob" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3B82F6]/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#9333EA]/3 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />

                    {/* Floating particles */}
                    {[...Array(12)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 rounded-full animate-float-particle"
                            style={{
                                left: `${5 + Math.random() * 90}%`,
                                top: `${5 + Math.random() * 90}%`,
                                backgroundColor: ['#DC2626', '#3B82F6', '#9333EA', '#EA580C'][i % 4],
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${4 + Math.random() * 4}s`,
                                opacity: 0.25,
                            }}
                        />
                    ))}
                </div>

                {/* Moving Lines */}
                <div className="absolute left-0 right-0 top-1/3 h-px bg-gradient-to-r from-transparent via-[#DC2626]/15 to-transparent animate-line-slide" />
                <div className="absolute left-0 right-0 bottom-1/3 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/15 to-transparent animate-line-slide" style={{ animationDelay: '1.5s', animationDirection: 'reverse' }} />

                <div id='why-us' className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-[#FEF2F2] px-4 py-2 rounded-full mb-4">
                            <Zap className="w-4 h-4 text-[#DC2626]" />
                            <span className="text-[#1E3A8A] font-semibold text-xs uppercase tracking-wider">Why We Stand Out</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E3A8A] tracking-tight">
                            Why Choose Our Emergency Care
                        </h2>
                    </div>

                    {/* Highlights Grid with Different Headings */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
                        {[
                            {
                                icon: Bell,
                                heading: '24/7 Emergency Response',
                                text: '24/7 emergency response — help when you need it most',
                                color: '#DC2626',
                                number: '01',
                            },
                            {
                                icon: Ambulance,
                                heading: 'Ambulance Assistance',
                                text: 'Ambulance assistance — non-medical & medical emergencies',
                                color: '#3B82F6',
                                number: '02',
                            },
                            {
                                icon: BadgeCheck,
                                heading: 'Expert Emergency Nurses',
                                text: 'Trained emergency nurses with critical care expertise',
                                color: '#16A34A',
                                number: '03',
                            },
                            {
                                icon: Timer,
                                heading: 'Prompt Response',
                                text: 'Prompt response & real-time updates throughout care',
                                color: '#EA580C',
                                number: '04',
                            },
                            {
                                icon: HeartPulse,
                                heading: 'Life-Saving Interventions',
                                text: 'Life-saving interventions including CPR & cardiac care',
                                color: '#9333EA',
                                number: '05',
                            },
                            {
                                icon: Shield,
                                heading: 'Accompanied Care Manager',
                                text: 'Accompanied care manager for safe transport & support',
                                color: '#0891B2',
                                number: '06',
                            },
                        ].map((h, i) => (
                            <div
                                key={i}
                                className="group relative bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-500 hover:-translate-y-2 cursor-default overflow-hidden"
                                style={{ animationDelay: `${i * 0.1}s` }}
                            >
                                {/* Hover gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FEF2F2] to-[#EFF6FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Orbiting dot around icon */}
                                <div className="relative mb-4">
                                    <div className="w-14 h-14 bg-[#FEF2F2] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative z-10" style={{ backgroundColor: h.color + '15' }}>
                                        <h.icon className="w-7 h-7 group-hover:rotate-6 transition-transform duration-500" style={{ color: h.color }} />
                                    </div>
                                    {/* Orbiting ring */}
                                    <div className="absolute inset-0 w-14 h-14 rounded-2xl border-2 border-dashed animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ borderColor: h.color + '30' }} />
                                    {/* Glow */}
                                    <div className="absolute inset-0 w-14 h-14 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150" style={{ backgroundColor: h.color + '15' }} />
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h4 className="text-sm sm:text-base font-bold text-[#1E3A8A] mb-2 group-hover:text-[#DC2626] transition-colors duration-300">
                                        {h.heading}
                                    </h4>
                                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                        {h.text}
                                    </p>
                                </div>

                                {/* Bottom accent bar */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ backgroundColor: h.color }} />

                                {/* Number badge */}
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#1E3A8A] to-[#DC2626] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                                    {h.number}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Stats Counter Row */}
                    <div className="mt-10 max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                                {[
                                    { icon: Clock, value: '24/7', label: 'Availability', color: '#DC2626' },
                                    { icon: Timer, value: '15min', label: 'Avg Response Time', color: '#3B82F6' },
                                    { icon: Shield, value: '100%', label: 'Trained Nurses', color: '#16A34A' },
                                    { icon: HeartPulse, value: 'Critical', label: 'Care Ready', color: '#9333EA' },
                                ].map((stat, i) => (
                                    <div key={i} className="text-center group cursor-default">
                                        {/* Animated counter circle */}
                                        <div className="relative w-16 h-16 mx-auto mb-3">
                                            <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
                                                <circle cx="32" cy="32" r="28" fill="none" stroke="#F1F5F9" strokeWidth="4" />
                                                <circle
                                                    cx="32"
                                                    cy="32"
                                                    r="28"
                                                    fill="none"
                                                    stroke={stat.color}
                                                    strokeWidth="4"
                                                    strokeLinecap="round"
                                                    strokeDasharray={`${175 * (i + 1) / 4} 175`}
                                                    className="animate-draw-circle"
                                                    style={{ animationDelay: `${i * 0.5}s` }}
                                                />
                                            </svg>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: stat.color + '15' }}>
                                                    <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
                                                </div>
                                            </div>
                                            <div className="absolute inset-0 rounded-full border-2 animate-ping-slow opacity-0 group-hover:opacity-100" style={{ borderColor: stat.color + '40', animationDelay: `${i * 0.3}s` }} />
                                        </div>
                                        <p className="text-xl sm:text-2xl font-black text-[#1E3A8A]">{stat.value}</p>
                                        <p className="text-[11px] sm:text-xs text-gray-500 font-medium">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Trust Line */}
                    <div className="mt-8 text-center">
                        <div className="inline-flex items-center gap-4 bg-[#FEF2F2] rounded-full px-6 py-3 shadow-sm">
                            <div className="flex items-center gap-1.5">
                                <Siren className="w-4 h-4 text-[#DC2626] animate-bounce-subtle" />
                                <span className="text-[#DC2626] text-xs sm:text-sm font-semibold">24/7 Emergency Response</span>
                            </div>
                            <div className="w-px h-4 bg-[#DC2626]/20" />
                            <div className="flex items-center gap-1.5">
                                <Ambulance className="w-4 h-4 text-[#DC2626] animate-bounce-subtle" style={{ animationDelay: '0.3s' }} />
                                <span className="text-[#DC2626] text-xs sm:text-sm font-semibold">Ambulance Assistance</span>
                            </div>
                            <div className="w-px h-4 bg-[#DC2626]/20" />
                            <div className="flex items-center gap-1.5">
                                <Heart className="w-4 h-4 text-[#DC2626] animate-bounce-subtle" style={{ animationDelay: '0.6s' }} />
                                <span className="text-[#DC2626] text-xs sm:text-sm font-semibold">Life-Saving Care</span>
                            </div>
                        </div>
                    </div>
                </div>

                <style>{`
    @keyframes blob {
      0%, 100% { transform: translate(0, 0) scale(1); }
      50% { transform: translate(20px, -15px) scale(1.1); }
    }
    @keyframes floatParticle {
      0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
      20% { opacity: 0.5; }
      80% { opacity: 0.5; }
      100% { transform: translateY(-60px) translateX(20px); opacity: 0; }
    }
    @keyframes lineSlide {
      0%, 100% { transform: translateX(-10%); opacity: 0.3; }
      50% { transform: translateX(10%); opacity: 0.7; }
    }
    @keyframes spinSlow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes drawCircle {
      from { stroke-dashoffset: 175; }
      to { stroke-dashoffset: 0; }
    }
    @keyframes pingSlow {
      0% { transform: scale(1); opacity: 0.5; }
      100% { transform: scale(1.4); opacity: 0; }
    }
    @keyframes bounceSubtle {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-4px); }
    }
    .animate-blob { animation: blob 8s ease-in-out infinite; }
    .animate-float-particle { animation: floatParticle 5s ease-in infinite; }
    .animate-line-slide { animation: lineSlide 4s ease-in-out infinite; }
    .animate-spin-slow { animation: spinSlow 10s linear infinite; }
    .animate-draw-circle { animation: drawCircle 2s ease forwards; }
    .animate-ping-slow { animation: pingSlow 2s ease-out infinite; }
    .animate-bounce-subtle { animation: bounceSubtle 2s ease-in-out infinite; }
  `}</style>
            </section>

            {/* ========== FINAL CTA ========== */}
            <section className="py-10 lg:py-12 bg-gradient-to-r from-[#7F1D1D] to-[#DC2626] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:16px_16px]" />
                <div className="relative max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">Emergency? We're Here 24/7</h2>
                    <p className="text-white/50 text-sm mb-5">Immediate medical assistance at your doorstep — call our emergency hotline now.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a href="tel:+919442659377" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#DC2626] font-bold rounded-xl hover:bg-white/95 transition-all hover:scale-[1.03] shadow-lg"><Phone className="w-4 h-4 animate-pulse" /> +91 94426 59377</a>
                    </div>
                </div>
            </section>

            <style>{`
        @keyframes floatBadge{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        @keyframes pingSlow{0%{transform:scale(1);opacity:.3}100%{transform:scale(1.6);opacity:0}}
        @keyframes pulseRing{0%{box-shadow:0 0 0 0 rgba(220,38,38,0.4)}70%{box-shadow:0 0 0 10px rgba(220,38,38,0)}100%{box-shadow:0 0 0 0 rgba(220,38,38,0)}}
        .animate-float-badge{animation:floatBadge 4s ease-in-out infinite}
        .animate-ping-slow{animation:pingSlow 2s ease-out infinite}
        .animate-pulse-ring{animation:pulseRing 2s ease-out infinite}
      `}</style>
        </div>
    );
};

export default EmergencyCarePage;