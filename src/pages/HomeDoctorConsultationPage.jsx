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
    Car,
    UserCheck,
    GraduationCap,
    ClipboardCheck,
} from 'lucide-react';

const HomeDoctorConsultationPage = () => {
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
        { src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600', alt: 'Doctor consultation at home', position: 'object-[center_20%]' },
        { src: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600', alt: 'Doctor checking patient', position: 'object-center' },
        { src: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600', alt: 'Elderly consultation', position: 'object-[center_30%]' },
        { src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600', alt: 'Medical consultation', position: 'object-center' },
        { src: 'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=600', alt: 'Home healthcare', position: 'object-center' },
    ];

    const testimonials = [
        { quote: "The doctor was patient, listened carefully, and provided excellent treatment at home.", author: 'Ramesh K.', relation: 'Patient', rating: 5, avatar: 'RK' },
        { quote: "No more waiting in queues. The doctor arrived on time and the care was exceptional.", author: 'Saradha M.', relation: 'Wife of Patient', rating: 5, avatar: 'SM' },
        { quote: "They managed my father's chronic condition with such expertise and compassion.", author: 'Arun P.', relation: 'Son', rating: 5, avatar: 'AP' },
    ];

    const consultationCategories = [
        {
            title: 'Geriatric & Senior Care',
            icon: HandHeart,
            emoji: '👴',
            color: '#DC2626',
            bgLight: 'bg-[#FEF2F2]',
            description: 'Specialized medical attention for age-related conditions, ensuring comfort and dignity for the elderly.',
            services: [
                'Comprehensive Geriatric Assessment',
                'Dementia & Alzheimer\'s Support & Management',
                'Arthritis & Joint Pain Management',
                'Stroke Follow-up & Rehabilitation Care',
                'Management of Multiple Chronic Conditions',
                'Fall Risk Assessment & Prevention Advice',
                'Nutritional Guidance for Seniors',
                'Mobility Assessment & Support',
            ],
        },
        {
            title: 'Chronic Disease Management',
            icon: Activity,
            emoji: '📊',
            color: '#3B82F6',
            bgLight: 'bg-[#EFF6FF]',
            description: 'Ongoing expert consultation to monitor and manage long-term health conditions effectively at home.',
            services: [
                'Diabetes Care — consultation, diet planning & foot care',
                'Hypertension & Heart-Related Issue Management',
                'COPD & Asthma — breathing assessment & medication',
                'Thyroid Disorder Management',
                'Cholesterol & Lipid Profile Management',
                'Osteoporosis & Bone Health Consultation',
                'Regular Monitoring & Dosage Adjustments',
                'Lifestyle Modification Counseling',
            ],
        },
        {
            title: 'Preventive & Wellness Care',
            icon: Shield,
            emoji: '🛡️',
            color: '#16A34A',
            bgLight: 'bg-[#F0FDF4]',
            description: 'Proactive consultations focused on preventing illness and maintaining optimal health and well-being.',
            services: [
                'Annual Health Check-ups & Risk Assessment',
                'Vaccination Counseling & Administration',
                'Diet & Nutrition Planning for Disease Prevention',
                'Weight Management & Lifestyle Coaching',
                'Stress & Mental Well-being Assessment',
                'Screening for Lifestyle Disorders',
                'Cardiac Risk Evaluation',
                'Personalized Exercise & Activity Plans',
            ],
        },
        {
            title: 'Post-Hospitalization Care',
            icon: BedDouble,
            emoji: '🏥',
            color: '#9333EA',
            bgLight: 'bg-[#FAF5FF]',
            description: 'Seamless follow-up care and monitoring after hospital discharge to ensure smooth recovery at home.',
            services: [
                'Post-Discharge Assessment & Vital Monitoring',
                'Medication Reconciliation & Management',
                'Surgical Site & Wound Inspection',
                'Drain & Catheter Care Supervision',
                'Physiotherapy Coordination',
                'Dietary Advice for Recovery',
                'Complication Screening & Early Detection',
                'Family Education on Post-Care Needs',
            ],
        },
        {
            title: 'Respiratory & Infection Care',
            icon: Stethoscope,
            emoji: '🫁',
            color: '#EA580C',
            bgLight: 'bg-[#FFF7ED]',
            description: 'Prompt diagnosis and management of respiratory issues, fevers, and common infections without hospital visits.',
            services: [
                'Fever, Cold & Flu Management',
                'Bronchitis & Pneumonia Consultation',
                'Asthma & Allergy Assessment',
                'Breathlessness & SpO₂ Monitoring',
                'Viral & Bacterial Infection Treatment',
                'Sore Throat & ENT Examination',
                'Nebulization Advice & Support',
                'Antibiotic Stewardship & Guidance',
            ],
        },
        {
            title: 'General Physician Consultation',
            icon: UserCheck,
            emoji: '🩺',
            color: '#0891B2',
            bgLight: 'bg-[#ECFEFF]',
            description: 'General medical consultations for routine check-ups, general weakness, nutritional deficiencies, and more.',
            services: [
                'Routine Medical Check-up & Health Screening',
                'General Weakness & Fatigue Assessment',
                'Vitamin & Nutritional Deficiency Diagnosis',
                'Digestive & Gastric Problem Consultation',
                'Joint & Muscular Pain Evaluation',
                'Sleep Disorder & Insomnia Advice',
                'Allergy Testing & Management',
                'Referrals for Specialist Consultation if Required',
            ],
        },
    ];

    const highlights = [
        { icon: GraduationCap, text: 'Qualified & experienced doctors for all health needs' },
        { icon: Timer, text: 'Doctor visits your home — no waiting, no travel' },
        { icon: Shield, text: 'Personalised treatment plans & follow-up care' },
        { icon: Award, text: 'Cost-effective care — saves travel & hospital expenses' },
        { icon: Heart, text: 'Compassionate geriatric & palliative care at home' },
        { icon: Home, text: 'Complete consultation in familiar home environment' },
    ];
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const visibleGallery = isMobile ? heroGallery.slice(0, 3) : heroGallery;

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActiveImage((prev) => (prev + 1) % visibleGallery.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [isPaused, visibleGallery.length]);

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
                            <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full animate-pulse" />
                            <span className="text-white/60 text-xs font-medium">Home Doctor Consultation</span>
                        </div>

                        {/* Right: Quick Actions */}
                        <div className="flex items-center gap-3">
                            <a href="#services" className="text-white/40 hover:text-white text-[11px] font-medium transition-colors hidden sm:block">Services</a>
                            <a href="#why-us" className="text-white/40 hover:text-white text-[11px] font-medium transition-colors hidden sm:block">Why Us</a>
                            <a href="tel:+919442659377" className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#3B82F6] text-white text-[11px] font-bold rounded-lg hover:bg-[#2563EB] transition-all">
                                <Phone className="w-3.5 h-3.5" />
                                Call Now
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* ========== FLOATING CALL BUTTON ========== */}
            <a href="tel:+919442659377" className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-[#3B82F6] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300" style={{ boxShadow: '0 8px 25px rgba(59,130,246,0.4)' }}>
                <div className={`absolute inset-0 rounded-full bg-[#3B82F6] animate-ping-slow opacity-30 ${isCallPulsing ? 'scale-125' : ''}`} />
                <Phone className="w-5 h-5 text-white relative z-10" />
                <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#16A34A] rounded-full border-2 border-white" />
            </a>

            {/* ========== HERO — UNIQUE SPLIT LAYOUT ========== */}
            <section
                className="
  relative
  min-h-[calc(100vh-56px)]
  pt-[56px]
  flex flex-col lg:flex-row
  overflow-hidden
"
            >
                {/* LEFT */}
                <div className="w-full lg:w-[42%] bg-[#0A1628] flex items-center relative">
                    <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:16px_16px]" />
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#3B82F6]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#3B82F6]/5 rounded-full blur-3xl" />

                    <div className="relative w-full px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
                        <button
                            onClick={() => navigate("/")}
                            className="inline-flex items-center gap-2 text-white/40 hover:text-white mb-6 text-xs group"
                        >
                            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                            <span>Back</span>
                        </button>

                        <div className="inline-flex items-center gap-2 bg-[#3B82F6]/10 border border-[#3B82F6]/20 px-3 py-1.5 rounded-full mb-4">
                            <span className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse" />
                            <span className="text-[#3B82F6] text-[10px] font-bold uppercase tracking-widest">
                                24/7 Home Visits Available
                            </span>
                        </div>

                        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white leading-tight mb-3">
                            Home
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#93C5FD]">
                                Doctor
                            </span>
                            Consultation
                        </h1>

                        <p className="text-white/60 text-sm sm:text-base mb-5 max-w-md">
                            Qualified doctors visiting your home — no travel, no waiting.
                        </p>

                        <div className="flex gap-6 mb-6">
                            {[
                                { num: "100+", label: "Doctors" },
                                { num: "15K+", label: "Consultations" },
                            ].map((s, i) => (
                                <div key={i}>
                                    <p className="text-white font-bold text-lg">{s.num}</p>
                                    <p className="text-white/40 text-[10px] uppercase">{s.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <a
                                href="tel:+919442659377"
                                className={`flex items-center justify-center gap-2 px-5 py-3 bg-[#3B82F6] text-white font-bold text-sm rounded-xl hover:bg-[#2563EB] transition ${isCallPulsing ? "ring-4 ring-[#3B82F6]/20" : ""
                                    }`}
                            >
                                <Phone className="w-4 h-4" />
                                Call Now
                            </a>

                            <button
                                onClick={() =>
                                    document
                                        .getElementById("services")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="flex items-center justify-center gap-2 px-5 py-3 border border-white/20 text-white text-sm rounded-xl hover:bg-white/10 transition"
                            >
                                View Services <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="w-full lg:w-[58%] relative bg-[#0F1D4A]">
                    {/* MOBILE */}
                    <div className="lg:hidden p-4">
                        <div
                            className="relative rounded-xl overflow-hidden"
                            onTouchStart={() => setIsPaused(true)}
                            onTouchEnd={() => setIsPaused(false)}
                        >
                            <img
                                src={visibleGallery[activeImage].src}
                                alt=""
                                className="w-full h-64 object-cover"
                            />

                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                                {visibleGallery.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveImage(i)}
                                        className={`h-1.5 rounded-full ${i === activeImage ? "w-6 bg-white" : "w-2 bg-white/40"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* DESKTOP */}
                    <div
                        className="hidden lg:grid grid-cols-3 grid-rows-2 gap-1 h-full p-1"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {heroGallery.map((img, i) => (
                            <div
                                key={i}
                                onClick={() => setActiveImage(i)}
                                className={`relative cursor-pointer overflow-hidden transition ${i === activeImage
                                        ? "col-span-2 row-span-2 ring-2 ring-[#3B82F6]/50"
                                        : "opacity-50 hover:opacity-80"
                                    }`}
                            >
                                <img
                                    src={img.src}
                                    alt=""
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>

                    {/* FLOATING CARD */}
                    <div className="hidden lg:block absolute bottom-6 right-6 bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10">
                        <p className="text-white text-xs italic">
                            "Best home doctor service!"
                        </p>
                        <p className="text-white/40 text-[10px] mt-1">— Ramesh K.</p>
                    </div>
                </div>
            </section>




            {/* ========== DETAILED SERVICES ========== */}
            <section id="services" className="py-12 lg:py-14 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 bg-[#EFF6FF] px-3 py-1 rounded-full mb-3"><Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" /><span className="text-[#1E3A8A] font-semibold text-[11px] uppercase tracking-wider">Our Expertise</span></div>
                        <h2 className="text-2xl sm:text-3xl font-black text-[#1E3A8A]">Doctor Consultation Services</h2>
                        <p className="text-gray-500 text-sm mt-1">Click on any category to see detailed services</p>
                    </div>

                    <div className="space-y-3 max-w-3xl mx-auto">
                        {consultationCategories.map((category, index) => (
                            <div key={index} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                                <button onClick={() => toggleCategory(index)} className="w-full flex items-center justify-between p-4 sm:p-5 text-left group">
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <span className="text-2xl">{category.emoji}</span>
                                        <div>
                                            <h3 className="text-sm sm:text-base font-bold text-[#1E3A8A] group-hover:text-[#3B82F6] transition-colors">{category.title}</h3>
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
                                                <span className="text-[10px] sm:text-xs text-gray-400 flex items-center gap-1.5"><Timer className="w-3.5 h-3.5 text-[#16A34A]" />Available 24/7 • Visit within hours</span>
                                                <a href="tel:+919442659377" className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold px-3 py-1.5 rounded-lg transition-all duration-300 hover:scale-105" style={{ backgroundColor: category.color, color: '#fff' }}><Phone className="w-3 h-3" />Call for {category.title}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-gray-500 text-sm mb-4">Need a doctor at home? We're just a call away.</p>
                        <a href="tel:+919442659377" className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#16A34A] text-white font-bold text-sm rounded-xl hover:bg-[#15803D] transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-lg hover:shadow-xl">
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"><Phone className="w-4 h-4" /></div>
                            <div className="text-left"><div className="leading-tight">Call for Doctor Visit</div><div className="text-[11px] text-white/70 font-normal">+91 94426 59377</div></div>
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <p className="text-gray-400 text-[11px] mt-3">Available 24/7 • Qualified Doctors • Prompt Home Visits</p>
                    </div>
                </div>
            </section>

            {/* ========== HIGHLIGHTS + TESTIMONIALS ========== */}
            <section className="py-14 lg:py-16 bg-gradient-to-b from-[#F8FAFC] to-white relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#3B82F6]/5 rounded-full blur-3xl animate-blob" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#16A34A]/5 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#9333EA]/3 rounded-full blur-3xl animate-blob" style={{ animationDelay: '4s' }} />

                    {/* Floating particles */}
                    {[...Array(12)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 rounded-full animate-float-particle"
                            style={{
                                left: `${5 + Math.random() * 90}%`,
                                top: `${5 + Math.random() * 90}%`,
                                backgroundColor: ['#3B82F6', '#16A34A', '#9333EA', '#EA580C'][i % 4],
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${4 + Math.random() * 4}s`,
                                opacity: 0.25,
                            }}
                        />
                    ))}
                </div>

                {/* Moving Lines */}
                <div className="absolute left-0 right-0 top-1/3 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/15 to-transparent animate-line-slide" />
                <div className="absolute left-0 right-0 bottom-1/3 h-px bg-gradient-to-r from-transparent via-[#16A34A]/15 to-transparent animate-line-slide" style={{ animationDelay: '1.5s', animationDirection: 'reverse' }} />

                <div id='why-us' className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 bg-[#EFF6FF] px-4 py-2 rounded-full mb-4">
                            <Zap className="w-4 h-4 text-[#3B82F6]" />
                            <span className="text-[#1E3A8A] font-semibold text-xs uppercase tracking-wider">Why We Stand Out</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E3A8A] tracking-tight">
                            Why Choose Our Home Doctor Service
                        </h2>
                    </div>

                    {/* Highlights Grid with Different Headings */}
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
                        {[
                            {
                                icon: GraduationCap,
                                heading: 'Qualified & Experienced',
                                text: 'Qualified & experienced doctors for all health needs',
                                color: '#16A34A',
                                number: '01',
                            },
                            {
                                icon: Timer,
                                heading: 'No Waiting Time',
                                text: 'Doctor visits your home — no waiting, no travel',
                                color: '#3B82F6',
                                number: '02',
                            },
                            {
                                icon: ClipboardCheck,
                                heading: 'Personalised Treatment',
                                text: 'Personalised treatment plans & follow-up care',
                                color: '#9333EA',
                                number: '03',
                            },
                            {
                                icon: Award,
                                heading: 'Cost-Effective Care',
                                text: 'Cost-effective care — saves travel & hospital expenses',
                                color: '#EA580C',
                                number: '04',
                            },
                            {
                                icon: Heart,
                                heading: 'Geriatric & Palliative Care',
                                text: 'Compassionate geriatric & palliative care at home',
                                color: '#DC2626',
                                number: '05',
                            },
                            {
                                icon: Home,
                                heading: 'Home Comfort',
                                text: 'Complete consultation in familiar home environment',
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
                                    <h4 className="text-sm sm:text-base font-bold text-[#1E3A8A] mb-2 group-hover:text-[#3B82F6] transition-colors duration-300">
                                        {h.heading}
                                    </h4>
                                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                        {h.text}
                                    </p>
                                </div>

                                {/* Bottom accent bar */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" style={{ backgroundColor: h.color }} />

                                {/* Number badge */}
                                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
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
                                    { icon: Users, value: '100+', label: 'Qualified Doctors', color: '#3B82F6' },
                                    { icon: Clock, value: '24/7', label: 'Availability', color: '#16A34A' },
                                    { icon: Shield, value: '100%', label: 'Verified Credentials', color: '#9333EA' },
                                    { icon: Timer, value: '2hrs', label: 'Response Time', color: '#EA580C' },
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
                                <span className="text-[#16A34A] text-xs sm:text-sm font-semibold">Qualified Doctors</span>
                            </div>
                            <div className="w-px h-4 bg-[#16A34A]/20" />
                            <div className="flex items-center gap-1.5">
                                <Award className="w-4 h-4 text-[#16A34A] animate-bounce-subtle" style={{ animationDelay: '0.3s' }} />
                                <span className="text-[#16A34A] text-xs sm:text-sm font-semibold">Verified Credentials</span>
                            </div>
                            <div className="w-px h-4 bg-[#16A34A]/20" />
                            <div className="flex items-center gap-1.5">
                                <Heart className="w-4 h-4 text-[#16A34A] animate-bounce-subtle" style={{ animationDelay: '0.6s' }} />
                                <span className="text-[#16A34A] text-xs sm:text-sm font-semibold">Compassionate Care</span>
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
            <section className="py-10 lg:py-12 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:16px_16px]" />
                <div className="relative max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">Ready for a Home Doctor Consultation?</h2>
                    <p className="text-white/50 text-sm mb-5">A qualified doctor at your doorstep within hours — call now.</p>
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

export default HomeDoctorConsultationPage;