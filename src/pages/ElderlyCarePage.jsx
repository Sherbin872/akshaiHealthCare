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
    UserCheck,
    Utensils,
    Car,
    Smile,
} from 'lucide-react';

const ElderlyCarePage = () => {
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
        { src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600', alt: 'Caring for elderly', position: 'object-[center_20%]' },
        { src: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600', alt: 'Senior care at home', position: 'object-center' },
        { src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600', alt: 'Companionship for seniors', position: 'object-[center_30%]' },
        { src: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600', alt: 'Elderly assistance', position: 'object-center' },
        { src: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600', alt: 'Senior health monitoring', position: 'object-center' },
    ];

    const testimonials = [
        { quote: "The caregivers treated my father with such dignity and love. He looks forward to their visits every day.", author: 'Priya S.', relation: 'Daughter of Patient', rating: 5, avatar: 'PS' },
        { quote: "My mother's quality of life has improved so much since we started elderly care services. She's happier and healthier.", author: 'Ramesh K.', relation: 'Son', rating: 5, avatar: 'RK' },
        { quote: "The personalized care plan was perfect for my grandmother's needs. The companionship has made a world of difference.", author: 'Divya M.', relation: 'Granddaughter', rating: 5, avatar: 'DM' },
    ];

    const elderlyCareCategories = [
        {
            title: 'Personalized Care Plans',
            emoji: '📋',
            color: '#3B82F6',
            bgLight: 'bg-[#EFF6FF]',
            description: 'Individualized care plans tailored to the unique requirements, preferences, and health conditions of each senior.',
            services: [
                'Comprehensive Geriatric Assessment',
                'Customized Care Plan Development',
                'Regular Plan Review & Adjustments',
                'Family Consultation & Involvement',
                'Health Goal Setting & Monitoring',
                'Coordination with Primary Physician',
                'Dietary & Nutritional Planning',
                'Activity & Engagement Scheduling',
            ],
        },
        {
            title: 'Daily Activities Assistance',
            emoji: '🛁',
            color: '#16A34A',
            bgLight: 'bg-[#F0FDF4]',
            description: 'Compassionate assistance with daily living activities including bathing, grooming, dressing, and safe mobility support.',
            services: [
                'Bathing & Personal Hygiene Assistance',
                'Grooming — hair care, nail care, oral hygiene',
                'Dressing & Undressing Support',
                'Mobility Assistance & Safe Transfers',
                'Toileting & Incontinence Care',
                'Fall Prevention & Safety Measures',
                'Range of Motion Exercises',
                'Comfortable & Dignified Personal Care',
            ],
        },
        {
            title: 'Medication Management',
            emoji: '💊',
            color: '#DC2626',
            bgLight: 'bg-[#FEF2F2]',
            description: 'Accurate medication administration and scheduling to ensure seniors receive the right medications at the right time.',
            services: [
                'Medication Schedule Creation & Maintenance',
                'Accurate Medication Administration',
                'Pill Organizer Setup & Weekly Management',
                'Prescription Refill Coordination',
                'Medication Reminders & Tracking',
                'Side Effect Monitoring & Reporting',
                'Drug Interaction Checks',
                'Coordination with Pharmacy & Doctor',
            ],
        },
        {
            title: 'Companionship & Engagement',
            emoji: '💝',
            color: '#9333EA',
            bgLight: 'bg-[#FAF5FF]',
            description: 'Meaningful companionship and engaging activities to combat loneliness and promote emotional well-being in seniors.',
            services: [
                'Meaningful Conversations & Social Interaction',
                'Engaging Activities — games, reading, hobbies',
                'Combating Loneliness & Isolation',
                'Emotional Support & Active Listening',
                'Memory Stimulation Activities',
                'Accompaniment for Walks & Outdoor Time',
                'Music & Reminiscence Therapy',
                'Celebrating Special Occasions Together',
            ],
        },
        {
            title: 'Nutrition & Meal Planning',
            emoji: '🍽️',
            color: '#EA580C',
            bgLight: 'bg-[#FFF7ED]',
            description: 'Balanced diet planning and nutritional support to maintain senior health, energy levels, and overall well-being.',
            services: [
                'Balanced Diet Planning for Senior Health',
                'Meal Preparation as per Dietary Requirements',
                'Nutritional Assessment & Monitoring',
                'Special Diet Management — diabetic, renal, cardiac',
                'Hydration Monitoring & Encouragement',
                'Grocery Shopping Assistance',
                'Feeding Assistance When Required',
                'Coordination with Dietician if Needed',
            ],
        },
        {
            title: 'Transportation & Outings',
            emoji: '🚗',
            color: '#0891B2',
            bgLight: 'bg-[#ECFEFF]',
            description: 'Safe transportation assistance to medical appointments, essential outings, and social engagements with accompanied support.',
            services: [
                'Transportation to Medical Appointments',
                'Accompaniment to Doctor Visits',
                'Assistance with Essential Outings & Errands',
                'Social Engagement — family visits, community events',
                'Safe Vehicle Transfers & Mobility Support',
                'Appointment Scheduling & Reminders',
                'Waiting & Assistance During Appointments',
                'Post-Appointment Summary for Family',
            ],
        },
    ];

    const highlights = [
        { icon: Heart, text: 'The human touch — skilled nurses & compassionate caregivers' },
        { icon: Home, text: 'Comfortable & caring environment for seniors at home' },
        { icon: BadgeCheck, text: 'Personalized care plans tailored to unique senior needs' },
        { icon: Shield, text: 'Enhanced quality of life & overall well-being assured' },
        { icon: Users, text: 'Technically skilled team invested in elder care' },
        { icon: Smile, text: 'Companionship & engagement to combat loneliness' },
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
                            <span className="w-1.5 h-1.5 bg-[#16A34A] rounded-full animate-pulse" />
                            <span className="text-white/60 text-xs font-medium">Elderly Care Services</span>
                        </div>

                        {/* Right: Quick Actions */}
                        <div className="flex items-center gap-3">
                            <a href="#services" className="text-white/40 hover:text-white text-[11px] font-medium transition-colors hidden sm:block">Services</a>
                            <a href="#why-us" className="text-white/40 hover:text-white text-[11px] font-medium transition-colors hidden sm:block">Why Us</a>
                            <a href="tel:+919442659377" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#16A34A] text-white text-[11px] font-bold rounded-lg hover:bg-[#15803D] transition-all">
                                <Phone className="w-3.5 h-3.5" />
                                Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* ========== FLOATING CALL BUTTON ========== */}
            <a href="tel:+919442659377" className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-[#16A34A] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300" style={{ boxShadow: '0 8px 25px rgba(22,163,74,0.4)' }}>
                <div className={`absolute inset-0 rounded-full bg-[#16A34A] animate-ping-slow opacity-30 ${isCallPulsing ? 'scale-125' : ''}`} />
                <Phone className="w-5 h-5 text-white relative z-10" />
                <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#DC2626] rounded-full border-2 border-white" />
            </a>

            {/* ========== HERO — UNIQUE SPLIT LAYOUT ========== */}
            <section className="relative min-h-[90vh] flex items-stretch overflow-hidden">
                {/* LEFT — Dark Content Side (40%) */}
                <div className="relative w-full lg:w-[42%] bg-[#0A1628] flex items-center">
                    {/* Dark side patterns */}
                    <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:16px_16px]" />
                    <div className="absolute top-0 right-0 w-48 h-48 bg-[#16A34A]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#16A34A]/5 rounded-full blur-3xl" />

                    {/* Vertical accent line */}
                    <div className="absolute right-0 top-20 bottom-20 w-px bg-gradient-to-b from-transparent via-[#16A34A]/30 to-transparent hidden lg:block" />

                    <div className={`relative w-full px-6 sm:px-10 lg:px-12 py-16 sm:py-20 transition-all duration-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <a href="#home" className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 mb-8 transition-all text-xs group">
                            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /><span>Back</span>
                        </a>

                        {/* Service Badge */}
                        <div className="inline-flex items-center gap-2 bg-[#16A34A]/10 border border-[#16A34A]/20 px-3 py-1.5 rounded-full mb-5">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16A34A] opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#16A34A]" />
                            </span>
                            <span className="text-[#16A34A] text-[10px] font-bold uppercase tracking-widest">Compassionate Elder Care</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.08] mb-4 tracking-tight">
                            Elderly
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4ADE80] to-[#86EFAC]">
                                Care
                            </span>
                            Services
                        </h1>

                        <p className="text-white/45 text-sm leading-relaxed mb-6 max-w-sm">
                            The human touch with skilled nurses & compassionate caregivers — <span className="text-white/70 font-medium">ensuring well-being and enhancing quality of life</span>.
                        </p>

                        {/* Trust stats row */}
                        <div className="flex gap-4 mb-6">
                            {[
                                { num: '100+', label: 'Caregivers' },
                                { num: '5K+', label: 'Seniors Cared' },
                                { num: '24/7', label: 'Support' },
                            ].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <p className="text-white font-bold text-lg leading-tight">{stat.num}</p>
                                    <p className="text-white/30 text-[10px] uppercase tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-3">
                            <a href="tel:+919442659377" className={`inline-flex items-center gap-2 px-5 py-3 bg-[#16A34A] text-white font-bold text-sm rounded-xl hover:bg-[#15803D] transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-[#16A34A]/20 ${isCallPulsing ? 'ring-4 ring-[#16A34A]/20' : ''}`}>
                                <Phone className="w-4 h-4" />Call Now
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
                                className={`relative overflow-hidden cursor-pointer group/img transition-all duration-500 ${i === activeImage ? 'col-span-2 row-span-2 z-10 ring-2 ring-[#16A34A]/50' : 'opacity-40 hover:opacity-60'
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
                        <p className="text-white/80 text-[11px] italic">"Treated my father with such dignity!"</p>
                        <p className="text-white/40 text-[9px] mt-0.5">— Priya S.</p>
                    </div>

                    {/* Live indicator */}
                    <div className="absolute top-6 right-6 flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10 z-20">
                        <span className="w-2 h-2 bg-[#16A34A] rounded-full animate-pulse" />
                        <span className="text-white/60 text-[10px] font-medium">Live • Caregivers Available</span>
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
                        <div className="inline-flex items-center gap-2 bg-[#F0FDF4] px-3 py-1 rounded-full mb-3"><Sparkles className="w-3.5 h-3.5 text-[#16A34A]" /><span className="text-[#1E3A8A] font-semibold text-[11px] uppercase tracking-wider">Our Services</span></div>
                        <h2 className="text-2xl sm:text-3xl font-black text-[#1E3A8A]">Comprehensive Elderly Care</h2>
                        <p className="text-gray-500 text-sm mt-1">Click on any category to see detailed services</p>
                    </div>

                    <div className="space-y-3 max-w-3xl mx-auto">
                        {elderlyCareCategories.map((category, index) => (
                            <div key={index} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                                <button onClick={() => toggleCategory(index)} className="w-full flex items-center justify-between p-4 sm:p-5 text-left group">
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <span className="text-2xl">{category.emoji}</span>
                                        <div>
                                            <h3 className="text-sm sm:text-base font-bold text-[#1E3A8A] group-hover:text-[#16A34A] transition-colors">{category.title}</h3>
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
                                                <span className="text-[10px] sm:text-xs text-gray-400 flex items-center gap-1.5"><Heart className="w-3.5 h-3.5 text-[#16A34A]" />Compassionate Care • Available 24/7</span>
                                                <a href="tel:+919442659377" className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold px-3 py-1.5 rounded-lg transition-all duration-300 hover:scale-105" style={{ backgroundColor: category.color, color: '#fff' }}><Phone className="w-3 h-3" />Enquire Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-gray-500 text-sm mb-4">Looking for compassionate elderly care? We're just a call away.</p>
                        <a href="tel:+919442659377" className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#16A34A] text-white font-bold text-sm rounded-xl hover:bg-[#15803D] transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-lg hover:shadow-xl">
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"><Phone className="w-4 h-4" /></div>
                            <div className="text-left"><div className="leading-tight">Call for Elderly Care</div><div className="text-[11px] text-white/70 font-normal">+91 94426 59377</div></div>
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <p className="text-gray-400 text-[11px] mt-3">Available 24/7 • Skilled Caregivers • Compassionate Service</p>
                    </div>
                </div>
            </section>

            {/* ========== HIGHLIGHTS + TESTIMONIALS ========== */}
            <section className="py-14 lg:py-16 bg-gradient-to-b from-[#F8FAFC] to-white relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#16A34A]/5 rounded-full blur-3xl animate-blob" />
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
                                backgroundColor: ['#16A34A', '#3B82F6', '#9333EA', '#EA580C'][i % 4],
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${4 + Math.random() * 4}s`,
                                opacity: 0.25,
                            }}
                        />
                    ))}
                </div>

                {/* Moving Lines */}
                <div className="absolute left-0 right-0 top-1/3 h-px bg-gradient-to-r from-transparent via-[#16A34A]/15 to-transparent animate-line-slide" />
                <div className="absolute left-0 right-0 bottom-1/3 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/15 to-transparent animate-line-slide" style={{ animationDelay: '1.5s', animationDirection: 'reverse' }} />

                <div id='why-us' className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-[#F0FDF4] px-4 py-2 rounded-full mb-4">
                            <Zap className="w-4 h-4 text-[#16A34A]" />
                            <span className="text-[#1E3A8A] font-semibold text-xs uppercase tracking-wider">Why We Stand Out</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E3A8A] tracking-tight">
                            Why Choose Our Elderly Care
                        </h2>
                    </div>

                    {/* Highlights Grid with Different Headings */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
                        {[
                            {
                                icon: Heart,
                                heading: 'The Human Touch',
                                text: 'The human touch — skilled nurses & compassionate caregivers',
                                color: '#DC2626',
                                number: '01',
                            },
                            {
                                icon: Home,
                                heading: 'Comfort at Home',
                                text: 'Comfortable & caring environment for seniors at home',
                                color: '#16A34A',
                                number: '02',
                            },
                            {
                                icon: BadgeCheck,
                                heading: 'Personalized Plans',
                                text: 'Personalized care plans tailored to unique senior needs',
                                color: '#3B82F6',
                                number: '03',
                            },
                            {
                                icon: Shield,
                                heading: 'Enhanced Quality of Life',
                                text: 'Enhanced quality of life & overall well-being assured',
                                color: '#9333EA',
                                number: '04',
                            },
                            {
                                icon: Users,
                                heading: 'Skilled Care Team',
                                text: 'Technically skilled team invested in elder care',
                                color: '#EA580C',
                                number: '05',
                            },
                            {
                                icon: Smile,
                                heading: 'Combating Loneliness',
                                text: 'Companionship & engagement to combat loneliness',
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
                                <div className="absolute inset-0 bg-gradient-to-br from-[#F0FDF4] to-[#EFF6FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Orbiting dot around icon */}
                                <div className="relative mb-4">
                                    <div className="w-14 h-14 bg-[#F0FDF4] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative z-10" style={{ backgroundColor: h.color + '15' }}>
                                        <h.icon className="w-7 h-7 group-hover:rotate-6 transition-transform duration-500" style={{ color: h.color }} />
                                    </div>
                                    {/* Orbiting ring */}
                                    <div className="absolute inset-0 w-14 h-14 rounded-2xl border-2 border-dashed animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ borderColor: h.color + '30' }} />
                                    {/* Glow */}
                                    <div className="absolute inset-0 w-14 h-14 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150" style={{ backgroundColor: h.color + '15' }} />
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h4 className="text-sm sm:text-base font-bold text-[#1E3A8A] mb-2 group-hover:text-[#16A34A] transition-colors duration-300">
                                        {h.heading}
                                    </h4>
                                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                        {h.text}
                                    </p>
                                </div>

                                {/* Bottom accent bar */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ backgroundColor: h.color }} />

                                {/* Number badge */}
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#1E3A8A] to-[#16A34A] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
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
                                    { icon: Users, value: '100+', label: 'Caregivers', color: '#16A34A' },
                                    { icon: Heart, value: '5K+', label: 'Seniors Cared', color: '#DC2626' },
                                    { icon: Clock, value: '24/7', label: 'Availability', color: '#3B82F6' },
                                    { icon: Shield, value: '100%', label: 'Verified Staff', color: '#9333EA' },
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
                        <div className="inline-flex items-center gap-4 bg-[#F0FDF4] rounded-full px-6 py-3 shadow-sm">
                            <div className="flex items-center gap-1.5">
                                <Shield className="w-4 h-4 text-[#16A34A] animate-bounce-subtle" />
                                <span className="text-[#16A34A] text-xs sm:text-sm font-semibold">Verified Caregivers</span>
                            </div>
                            <div className="w-px h-4 bg-[#16A34A]/20" />
                            <div className="flex items-center gap-1.5">
                                <Heart className="w-4 h-4 text-[#16A34A] animate-bounce-subtle" style={{ animationDelay: '0.3s' }} />
                                <span className="text-[#16A34A] text-xs sm:text-sm font-semibold">Compassionate Approach</span>
                            </div>
                            <div className="w-px h-4 bg-[#16A34A]/20" />
                            <div className="flex items-center gap-1.5">
                                <Award className="w-4 h-4 text-[#16A34A] animate-bounce-subtle" style={{ animationDelay: '0.6s' }} />
                                <span className="text-[#16A34A] text-xs sm:text-sm font-semibold">Quality Assured</span>
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
            <section className="py-10 lg:py-12 bg-gradient-to-r from-[#1E3A8A] to-[#16A34A] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:16px_16px]" />
                <div className="relative max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">Ready to Provide the Best Care for Your Loved Ones?</h2>
                    <p className="text-white/50 text-sm mb-5">Compassionate elderly care at home — call now to discuss your needs.</p>
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

export default ElderlyCarePage;