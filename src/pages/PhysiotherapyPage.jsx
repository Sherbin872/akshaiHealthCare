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
    Dumbbell,
    Thermometer,
    ZapIcon,
    Move,
} from 'lucide-react';

const PhysiotherapyPage = () => {
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
        { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600', alt: 'Physiotherapy session', position: 'object-[center_20%]' },
        { src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600', alt: 'Rehabilitation exercises', position: 'object-center' },
        { src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600', alt: 'Therapy at home', position: 'object-[center_30%]' },
        { src: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600', alt: 'Physio equipment', position: 'object-center' },
        { src: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600', alt: 'Patient care', position: 'object-center' },
    ];

    const testimonials = [
        { quote: "The physiotherapist was incredibly knowledgeable and helped me recover from my knee surgery much faster than expected.", author: 'Suresh K.', relation: 'Post-Surgery Patient', rating: 5, avatar: 'SK' },
        { quote: "Regular home physio sessions have completely relieved my chronic back pain. I can move freely again!", author: 'Meena R.', relation: 'Patient', rating: 5, avatar: 'MR' },
        { quote: "After my stroke, the home physiotherapy helped me regain my mobility and confidence. Truly grateful.", author: 'Venkatesh P.', relation: 'Stroke Survivor', rating: 5, avatar: 'VP' },
    ];

    const physioCategories = [
        {
            title: 'Pain Management',
            emoji: '💆',
            color: '#DC2626',
            bgLight: 'bg-[#FEF2F2]',
            description: 'Effective relief from acute and chronic pain through specialized manual therapy and therapeutic techniques.',
            services: [
                'Back and Neck Pain Treatment',
                'Knee Pain Management',
                'Shoulder Pain Relief',
                'Chronic Tension & Chronic Fatigue Management',
                'Work Injury Rehabilitation',
                'Application of Heat Therapy',
                'Cold Therapy (Cryotherapy)',
                'Transcutaneous Electrical Nerve Stimulation (TENS)',
                'Hot Packs & Therapeutic Massage',
            ],
        },
        {
            title: 'Post-Surgical Rehabilitation',
            emoji: '🏥',
            color: '#3B82F6',
            bgLight: 'bg-[#EFF6FF]',
            description: 'Structured rehabilitation programs designed to restore function and accelerate recovery after surgery.',
            services: [
                'Surgical Rehabilitation — all major surgeries',
                'Mobility Restoration & Gait Training',
                'Balance & Strengthening Exercises',
                'Manual Therapy Techniques',
                'Therapeutic Exercise Programs',
                'Range of Motion Exercises',
                'Scar Tissue Management',
                'Pain Management Post-Surgery',
            ],
        },
        {
            title: 'Neurological Physiotherapy',
            emoji: '🧠',
            color: '#9333EA',
            bgLight: 'bg-[#FAF5FF]',
            description: 'Specialized therapy for neurological conditions to improve movement, balance, and functional independence.',
            services: [
                'Stroke Rehabilitation',
                'Head Injury Recovery',
                'Spinal Cord Injury Management',
                'Parkinson\'s Disease Support',
                'Multiple Sclerosis Physiotherapy',
                'Balance & Coordination Training',
                'Functional Mobility Training',
                'Neuroplasticity-Focused Exercises',
            ],
        },
        {
            title: 'Orthopedic & Sports Physiotherapy',
            emoji: '🦴',
            color: '#16A34A',
            bgLight: 'bg-[#F0FDF4]',
            description: 'Expert care for musculoskeletal injuries, sports injuries, and conditions affecting bones, joints, and muscles.',
            services: [
                'Sports Injury Rehabilitation',
                'Limb Deficiencies Management',
                'Physical Handicap Support',
                'Difficulty in Walking — Gait Analysis & Correction',
                'Fall Prevention & Balance Training',
                'Deformed Posture Correction',
                'Joint Mobilisation Techniques',
                'Strengthening & Conditioning Programs',
            ],
        },
        {
            title: 'Geriatric & Chronic Care',
            emoji: '👴',
            color: '#EA580C',
            bgLight: 'bg-[#FFF7ED]',
            description: 'Gentle, supportive physiotherapy for seniors and individuals managing chronic health conditions at home.',
            services: [
                'Arthritis & Joint Pain Management',
                'Osteoporosis — Safe Exercise Programs',
                'Fall Risk Assessment & Prevention',
                'Mobility Aid Training & Support',
                'Chronic Respiratory Conditions — Asthma Management',
                'Birth Defects & Genetic Disorders Support',
                'Problems of Rehabilitation After Illness',
                'General Weakness & Deconditioning Recovery',
            ],
        },
        {
            title: 'Therapeutic Techniques',
            emoji: '⚡',
            color: '#0891B2',
            bgLight: 'bg-[#ECFEFF]',
            description: 'A comprehensive range of advanced therapeutic modalities delivered by our skilled physiotherapists at your home.',
            services: [
                'Electrical Stimulation Therapy',
                'Heat Therapy — Hot Packs & Infrared',
                'Cold Therapy — Ice Packs & Cryotherapy',
                'TENS (Transcutaneous Electrical Nerve Stimulation)',
                'Therapeutic Massage',
                'Joint Mobilisation',
                'Manual Therapy Techniques',
                'Therapeutic Exercise Prescription',
            ],
        },
    ];

    const highlights = [
        { icon: Home, text: 'Convenient physiotherapy sessions in the comfort of your home' },
        { icon: BadgeCheck, text: 'Highly skilled & experienced physiotherapists' },
        { icon: Timer, text: 'Regular home visits — preventive, diagnostic & therapeutic care' },
        { icon: Award, text: 'Cost-effective approach to receiving quality physiotherapy' },
        { icon: Heart, text: 'Compassionate care for chronic ailments & rehabilitation' },
        { icon: Activity, text: 'Faster recovery from injury, surgery & chronic conditions' },
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
        const t = setInterval(() => { setIsCallPulsing(true); setTimeout(() => setIsCallPulsing(false), 600); }, 2500);
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
                            <span className="w-1.5 h-1.5 bg-[#EA580C] rounded-full animate-pulse" />
                            <span className="text-white/60 text-xs font-medium">Physiotherapy at Home</span>
                        </div>

                        {/* Right: Quick Actions */}
                        <div className="flex items-center gap-3">
                            <a href="#services" className="text-white/40 hover:text-white text-[11px] font-medium transition-colors hidden sm:block">Services</a>
                            <a href="#why-us" className="text-white/40 hover:text-white text-[11px] font-medium transition-colors hidden sm:block">Why Us</a>
                            <a href="tel:+919442659377" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#EA580C] text-white text-[11px] font-bold rounded-lg hover:bg-[#C2410C] transition-all">
                                <Phone className="w-3.5 h-3.5" />
                                Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* ========== FLOATING CALL BUTTON ========== */}
            <a href="tel:+919442659377" className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-[#EA580C] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300" style={{ boxShadow: '0 8px 25px rgba(234,88,12,0.4)' }}>
                <div className={`absolute inset-0 rounded-full bg-[#EA580C] animate-ping-slow opacity-30 ${isCallPulsing ? 'scale-125' : ''}`} />
                <Phone className="w-5 h-5 text-white relative z-10" />
                <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#16A34A] rounded-full border-2 border-white" />
            </a>

            {/* ========== HERO — UNIQUE SPLIT LAYOUT ========== */}
            <section className="relative min-h-[calc(100vh-56px)] pt-[56px] flex flex-col lg:flex-row overflow-hidden">

                {/* LEFT */}
                <div className="relative w-full lg:w-[42%] bg-[#0A1628] flex items-center">

                    <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:16px_16px]" />
                    <div className="absolute top-0 right-0 w-48 h-48 bg-[#EA580C]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#EA580C]/5 rounded-full blur-3xl" />

                    <div className="absolute right-0 top-20 bottom-20 w-px bg-gradient-to-b from-transparent via-[#EA580C]/30 to-transparent hidden lg:block" />

                    <div className={`relative w-full px-6 sm:px-10 lg:px-12 py-12 sm:py-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>

                        <button
                            onClick={() => navigate("/")}
                            className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 mb-8 text-xs group"
                        >
                            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                            <span>Back</span>
                        </button>

                        <div className="inline-flex items-center gap-2 bg-[#EA580C]/10 border border-[#EA580C]/20 px-3 py-1.5 rounded-full mb-5">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EA580C] opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EA580C]" />
                            </span>
                            <span className="text-[#EA580C] text-[10px] font-bold uppercase tracking-widest">
                                Home Visits Available
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
                            Home
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FB923C] to-[#FDBA74]">
                                Physiotherapy
                            </span>
                            Services
                        </h1>

                        <p className="text-white/50 text-sm sm:text-base mb-6 max-w-sm">
                            Professional physiotherapy delivered to your doorstep —
                            <span className="text-white/70 font-medium"> recover, restore, and regain your mobility</span>.
                        </p>

                        <div className="flex gap-4 mb-6">
                            {[
                                { num: '50+', label: 'Physiotherapists' },
                                { num: '8K+', label: 'Sessions Done' },
                                { num: '24/7', label: 'Booking' },
                            ].map((stat, i) => (
                                <div key={i}>
                                    <p className="text-white font-bold text-lg">{stat.num}</p>
                                    <p className="text-white/30 text-[10px] uppercase">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <a
                                href="tel:+919442659377"
                                className={`flex items-center justify-center gap-2 px-5 py-3 bg-[#EA580C] text-white font-bold text-sm rounded-xl hover:bg-[#C2410C] transition ${isCallPulsing ? 'ring-4 ring-[#EA580C]/20' : ''}`}
                            >
                                <Phone className="w-4 h-4" />
                                Call Now
                            </a>

                            <button
                                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                                className="flex items-center justify-center gap-2 px-5 py-3 border border-white/20 text-white text-sm rounded-xl hover:bg-white/10 transition"
                            >
                                View Services <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>

                    </div>
                </div>

                {/* RIGHT */}
                <div className="w-full lg:w-[58%] relative bg-[#0F1D4A]">

                    {/* Mobile */}
                    <div className="lg:hidden p-4">
                        <div className="relative rounded-xl overflow-hidden">
                            <img
                                src={heroGallery[activeImage].src}
                                alt=""
                                className="w-full h-64 object-cover"
                            />

                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                                {heroGallery.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveImage(i)}
                                        className={`h-1.5 rounded-full ${i === activeImage ? "w-6 bg-white" : "w-2 bg-white/40"}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Desktop */}
                    <div className="hidden lg:grid grid-cols-3 grid-rows-2 gap-1 h-full p-1">
                        {heroGallery.map((img, i) => (
                            <div
                                key={i}
                                onClick={() => setActiveImage(i)}
                                className={`relative cursor-pointer overflow-hidden transition ${i === activeImage
                                        ? "col-span-2 row-span-2 ring-2 ring-[#EA580C]/50"
                                        : "opacity-50 hover:opacity-80"
                                    }`}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Floating Card */}
                    <div className="hidden lg:block absolute bottom-6 right-6 bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10">
                        <p className="text-white text-xs italic">
                            "Recovered faster than expected!"
                        </p>
                        <p className="text-white/40 text-[10px] mt-1">— Suresh K.</p>
                    </div>

                    {/* Live */}
                    <div className="hidden lg:flex absolute top-6 right-6 items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10">
                        <span className="w-2 h-2 bg-[#16A34A] rounded-full animate-pulse" />
                        <span className="text-white/60 text-[10px] font-medium">
                            Live • Physiotherapists Available
                        </span>
                    </div>

                </div>

            </section>

            {/* ========== DETAILED SERVICES ========== */}
            <section id="services" className="py-12 lg:py-14 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 bg-[#FFF7ED] px-3 py-1 rounded-full mb-3"><Sparkles className="w-3.5 h-3.5 text-[#EA580C]" /><span className="text-[#1E3A8A] font-semibold text-[11px] uppercase tracking-wider">Our Expertise</span></div>
                        <h2 className="text-2xl sm:text-3xl font-black text-[#1E3A8A]">Physiotherapy Services We Provide</h2>
                        <p className="text-gray-500 text-sm mt-1">Click on any category to see detailed treatment options</p>
                    </div>

                    <div className="space-y-3 max-w-3xl mx-auto">
                        {physioCategories.map((category, index) => (
                            <div key={index} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                                <button onClick={() => toggleCategory(index)} className="w-full flex items-center justify-between p-4 sm:p-5 text-left group">
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <span className="text-2xl">{category.emoji}</span>
                                        <div>
                                            <h3 className="text-sm sm:text-base font-bold text-[#1E3A8A] group-hover:text-[#EA580C] transition-colors">{category.title}</h3>
                                            <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5">{category.description}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 flex-shrink-0">
                                        <span className="text-[10px] font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: category.color + '15', color: category.color }}>{category.services.length} treatments</span>
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
                                                <span className="text-[10px] sm:text-xs text-gray-400 flex items-center gap-1.5"><Timer className="w-3.5 h-3.5 text-[#16A34A]" />Regular Home Visits • Flexible Scheduling</span>
                                                <a href="tel:+919442659377" className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold px-3 py-1.5 rounded-lg transition-all duration-300 hover:scale-105" style={{ backgroundColor: category.color, color: '#fff' }}><Phone className="w-3 h-3" />Book {category.title}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-gray-500 text-sm mb-4">Ready to start your recovery journey? We're just a call away.</p>
                        <a href="tel:+919442659377" className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#16A34A] text-white font-bold text-sm rounded-xl hover:bg-[#15803D] transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-lg hover:shadow-xl">
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"><Phone className="w-4 h-4" /></div>
                            <div className="text-left"><div className="leading-tight">Book a Physio Session</div><div className="text-[11px] text-white/70 font-normal">+91 94426 59377</div></div>
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <p className="text-gray-400 text-[11px] mt-3">Available 24/7 • Skilled Physiotherapists • Home Visits</p>
                    </div>
                </div>
            </section>

            {/* ========== HIGHLIGHTS + TESTIMONIALS ========== */}
            <section className="py-14 lg:py-16 bg-gradient-to-b from-[#F8FAFC] to-white relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#EA580C]/5 rounded-full blur-3xl animate-blob" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#16A34A]/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#3B82F6]/3 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />

                    {/* Floating particles */}
                    {[...Array(12)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 rounded-full animate-float-particle"
                            style={{
                                left: `${5 + Math.random() * 90}%`,
                                top: `${5 + Math.random() * 90}%`,
                                backgroundColor: ['#EA580C', '#16A34A', '#3B82F6', '#9333EA'][i % 4],
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${4 + Math.random() * 4}s`,
                                opacity: 0.25,
                            }}
                        />
                    ))}
                </div>

                {/* Moving Lines */}
                <div className="absolute left-0 right-0 top-1/3 h-px bg-gradient-to-r from-transparent via-[#EA580C]/15 to-transparent animate-line-slide" />
                <div className="absolute left-0 right-0 bottom-1/3 h-px bg-gradient-to-r from-transparent via-[#16A34A]/15 to-transparent animate-line-slide" style={{ animationDelay: '1.5s', animationDirection: 'reverse' }} />

                <div id='why-us' className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-[#FFF7ED] px-4 py-2 rounded-full mb-4">
                            <Zap className="w-4 h-4 text-[#EA580C]" />
                            <span className="text-[#1E3A8A] font-semibold text-xs uppercase tracking-wider">Why We Stand Out</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E3A8A] tracking-tight">
                            Why Choose Our Home Physiotherapy
                        </h2>
                    </div>

                    {/* Highlights Grid with Different Headings */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
                        {[
                            {
                                icon: Home,
                                heading: 'Care at Your Doorstep',
                                text: 'Convenient physiotherapy sessions in the comfort of your home',
                                color: '#16A34A',
                                number: '01',
                            },
                            {
                                icon: BadgeCheck,
                                heading: 'Skilled Physiotherapists',
                                text: 'Highly skilled & experienced physiotherapists',
                                color: '#3B82F6',
                                number: '02',
                            },
                            {
                                icon: Timer,
                                heading: 'Regular Home Visits',
                                text: 'Regular home visits — preventive, diagnostic & therapeutic care',
                                color: '#9333EA',
                                number: '03',
                            },
                            {
                                icon: Award,
                                heading: 'Cost-Effective Care',
                                text: 'Cost-effective approach to receiving quality physiotherapy',
                                color: '#EA580C',
                                number: '04',
                            },
                            {
                                icon: Heart,
                                heading: 'Compassionate Approach',
                                text: 'Compassionate care for chronic ailments & rehabilitation',
                                color: '#DC2626',
                                number: '05',
                            },
                            {
                                icon: Activity,
                                heading: 'Faster Recovery',
                                text: 'Faster recovery from injury, surgery & chronic conditions',
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
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FFF7ED] to-[#EFF6FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Orbiting dot around icon */}
                                <div className="relative mb-4">
                                    <div className="w-14 h-14 bg-[#FFF7ED] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative z-10" style={{ backgroundColor: h.color + '15' }}>
                                        <h.icon className="w-7 h-7 group-hover:rotate-6 transition-transform duration-500" style={{ color: h.color }} />
                                    </div>
                                    {/* Orbiting ring */}
                                    <div className="absolute inset-0 w-14 h-14 rounded-2xl border-2 border-dashed animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ borderColor: h.color + '30' }} />
                                    {/* Glow */}
                                    <div className="absolute inset-0 w-14 h-14 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150" style={{ backgroundColor: h.color + '15' }} />
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h4 className="text-sm sm:text-base font-bold text-[#1E3A8A] mb-2 group-hover:text-[#EA580C] transition-colors duration-300">
                                        {h.heading}
                                    </h4>
                                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                        {h.text}
                                    </p>
                                </div>

                                {/* Bottom accent bar */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ backgroundColor: h.color }} />

                                {/* Number badge */}
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#1E3A8A] to-[#EA580C] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
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
                                    { icon: Users, value: '50+', label: 'Physiotherapists', color: '#EA580C' },
                                    { icon: Clock, value: '24/7', label: 'Booking Available', color: '#16A34A' },
                                    { icon: Shield, value: '100%', label: 'Verified Experts', color: '#3B82F6' },
                                    { icon: Timer, value: '2hrs', label: 'Response Time', color: '#9333EA' },
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
                        <div className="inline-flex items-center gap-4 bg-[#FFF7ED] rounded-full px-6 py-3 shadow-sm">
                            <div className="flex items-center gap-1.5">
                                <Shield className="w-4 h-4 text-[#EA580C] animate-bounce-subtle" />
                                <span className="text-[#EA580C] text-xs sm:text-sm font-semibold">Verified Experts</span>
                            </div>
                            <div className="w-px h-4 bg-[#EA580C]/20" />
                            <div className="flex items-center gap-1.5">
                                <Award className="w-4 h-4 text-[#EA580C] animate-bounce-subtle" style={{ animationDelay: '0.3s' }} />
                                <span className="text-[#EA580C] text-xs sm:text-sm font-semibold">Skilled & Experienced</span>
                            </div>
                            <div className="w-px h-4 bg-[#EA580C]/20" />
                            <div className="flex items-center gap-1.5">
                                <Heart className="w-4 h-4 text-[#EA580C] animate-bounce-subtle" style={{ animationDelay: '0.6s' }} />
                                <span className="text-[#EA580C] text-xs sm:text-sm font-semibold">Compassionate Care</span>
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
            <section className="py-10 lg:py-12 bg-gradient-to-r from-[#1E3A8A] to-[#EA580C] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:16px_16px]" />
                <div className="relative max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">Ready to Start Your Physiotherapy?</h2>
                    <p className="text-white/50 text-sm mb-5">A skilled physiotherapist at your doorstep — call now to book a session.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a href="tel:+919442659377" className="inline-flex items-center gap-2 px-6 py-3 bg-[#DC2626] text-white font-bold rounded-xl hover:bg-[#B91C1C] transition-all hover:scale-[1.03] shadow-lg"><Phone className="w-4 h-4" /> +91 94426 59377</a>
                    </div>
                </div>
            </section>

            <style>{`
        @keyframes floatBadge{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        @keyframes pingSlow{0%{transform:scale(1);opacity:.3}100%{transform:scale(1.6);opacity:0}}
        .animate-float-badge{animation:floatBadge 4s ease-in-out infinite}
        .animate-ping-slow{animation:pingSlow 2s ease-out infinite}
      `}</style>
        </div>
    );
};

export default PhysiotherapyPage;