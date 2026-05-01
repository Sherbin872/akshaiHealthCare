import React, { useState, useEffect, useRef } from 'react';
import {
    Heart,
    Star,
    Award,
    Shield,
    Users,
    Sparkles,
    Eye,
    GraduationCap,
    Target,
    Lightbulb,
    HandHeart,
    X,
    Link,
    Mail,
    ChevronLeft,
    ChevronRight,
    Globe,
    Building2,
    Briefcase,
    Medal,
    BookOpen,
    ExternalLink,
} from 'lucide-react';

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedLeader, setSelectedLeader] = useState(null);
    const [hoveredLeader, setHoveredLeader] = useState(null);
    const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [typedText, setTypedText] = useState('');
    const [typingIndex, setTypingIndex] = useState(0);
    const sectionRef = useRef(null);
    const hoverTimeoutRef = useRef(null);
    const modalRef = useRef(null);

    const fullTypedText = 'Excellent and affordable health care service at your doorsteps.';

    useEffect(() => {
        if (!isVisible) return;
        if (typingIndex < fullTypedText.length) {
            const timer = setTimeout(() => {
                setTypedText(fullTypedText.slice(0, typingIndex + 1));
                setTypingIndex(typingIndex + 1);
            }, 40);
            return () => clearTimeout(timer);
        }
    }, [isVisible, typingIndex]);

    const companyHighlights = [
        { icon: Users, stat: '10,000+', label: 'Patients Served', color: '#3B82F6' },
        { icon: Award, stat: '5+', label: 'Years Experience', color: '#16A34A' },
        { icon: Shield, stat: '100%', label: 'Verified Staff', color: '#9333EA' },
        { icon: Heart, stat: '98%', label: 'Satisfaction Rate', color: '#DC2626' },
    ];

    const leaders = [
        {
            name: 'Ms. Cathie Ignatius Andrea',
            role: 'Managing Director',
            credentials: 'B.Tech',
            initials: 'CA',
            gradient: 'from-[#1E3A8A] to-[#3B82F6]',
            bgGradient: 'bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6]',
            accentColor: '#3B82F6',
            image: '/images/leader-cathie.jpg',
            tagline: 'Social Entrepreneur & Innovator',
            achievements: [
                { icon: Briefcase, text: 'Drives strategic growth & operational efficiency as top executive' },
                { icon: Medal, text: 'Recognized for enhancing company reputation in compassionate care' },
                { icon: Users, text: 'Leads highly motivated clinical & administrative teams' },
                { icon: Target, text: 'Implements brand standards, systems & processes for future growth' },
                { icon: Lightbulb, text: 'Prioritises empathy, trust & personalised client solutions' },
                { icon: Globe, text: 'Stays engaged with industry trends & healthcare technology' },
            ],
        },
        {
            name: 'Prof. R. Kavitha',
            role: 'Director – Operations & Management',
            credentials: 'B.A., M.A., M.Phil., Ph.D.',
            initials: 'RK',
            gradient: 'from-[#16A34A] to-[#22C55E]',
            bgGradient: 'bg-gradient-to-br from-[#16A34A] to-[#22C55E]',
            accentColor: '#16A34A',
            image: '/images/leader-kavitha.jpg',
            tagline: 'Academician & Former Vice-Chancellor',
            achievements: [
                { icon: BookOpen, text: 'Former Vice-Chancellor with national & international academic board memberships' },
                { icon: Briefcase, text: '20+ years in business development & management strategies' },
                { icon: Shield, text: 'Led quality assurance, compliance & digitalization initiatives' },
                { icon: Users, text: 'Expert in team coaching, mentoring & building partnerships' },
                { icon: Target, text: 'Transforming care homes with staff recognition & quality programmes' },
                { icon: Lightbulb, text: 'Passionate about technology for improved care & service delivery' },
            ],
        },
        {
            name: 'Dr. Arun Kumar Retnaraj',
            role: 'Director – Compliance',
            credentials: 'B.D.S, M.B.A., M.S.W., M.Sc.(Psychology)',
            initials: 'AR',
            gradient: 'from-[#9333EA] to-[#A855F7]',
            bgGradient: 'bg-gradient-to-br from-[#9333EA] to-[#A855F7]',
            accentColor: '#9333EA',
            image: '/images/leader-arun.jpg',
            tagline: 'Healthcare Compliance Expert',
            achievements: [
                { icon: Shield, text: '25+ years management experience across health & social care sectors' },
                { icon: Building2, text: 'Executive & Board leadership roles in multiple organizations' },
                { icon: Medal, text: 'Advisor to government & private departments in health & education' },
                { icon: Target, text: 'Designed technical support strategies for home healthcare services' },
                { icon: Globe, text: 'Strategic partnerships with government & private global agencies' },
                { icon: Lightbulb, text: 'Setting new standards with best-in-class innovative care facilities' },
            ],
        },
    ];

    const values = [
        { icon: HandHeart, title: 'Compassion', color: '#DC2626' },
        { icon: Star, title: 'Excellence', color: '#FBBF24' },
        { icon: Users, title: 'Personalized Care', color: '#3B82F6' },
        { icon: Shield, title: 'Integrity', color: '#16A34A' },
        { icon: Heart, title: 'Collaboration', color: '#9333EA' },
        { icon: Award, title: 'Respect & Dignity', color: '#EA580C' },
    ];

    // Auto carousel for mobile
    useEffect(() => {
        if (!isVisible || isPaused) return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % leaders.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [isVisible, isPaused, leaders.length]);

    // Auto-scroll values
    useEffect(() => {
        if (!isVisible) return;
        const valuesContainer = document.getElementById('values-scroll');
        if (!valuesContainer) return;
        let scrollPos = 0;
        const scroll = () => {
            scrollPos += 0.5;
            if (scrollPos >= valuesContainer.scrollWidth / 2) scrollPos = 0;
            valuesContainer.scrollLeft = scrollPos;
        };
        const timer = setInterval(scroll, 30);
        return () => clearInterval(timer);
    }, [isVisible]);

    // ===== INTERSECTION OBSERVER — DETECT WHEN SECTION LEAVES VIEWPORT =====
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    // Section exited viewport → dismiss all modals/popups immediately
                    setIsVisible(false);
                    setSelectedLeader(null);
                    setHoveredLeader(null);
                }
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    // Handle mouse position for hover popup
    const handleMouseEnter = (leader, e) => {
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        const rect = e.currentTarget.getBoundingClientRect();
        setHoverPosition({
            x: rect.left + rect.width / 2,
            y: rect.top,
        });
        setHoveredLeader(leader);
    };

    const handleMouseLeave = () => {
        hoverTimeoutRef.current = setTimeout(() => {
            setHoveredLeader(null);
        }, 200);
    };

    // ===== CLOSE MODAL ON SCROLL =====
    useEffect(() => {
        const handleScroll = () => {
            if (selectedLeader || hoveredLeader) {
                setSelectedLeader(null);
                setHoveredLeader(null);
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [selectedLeader, hoveredLeader]);

    return (
        <section ref={sectionRef} className="py-12 lg:py-16 bg-white relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(#3B82F6_0.5px,transparent_0.5px),linear-gradient(to_right,#3B82F6_0.5px,transparent_0.5px)] bg-[length:40px_40px] opacity-[0.015] animate-grid-drift" />
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#EFF6FF]/40 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 animate-blob-slow" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F0FDF4]/40 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 animate-blob-slow" style={{ animationDelay: '3s' }} />
                <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/20 to-transparent animate-line-drift" />
                <div className="absolute top-3/4 right-0 w-40 h-px bg-gradient-to-l from-transparent via-[#16A34A]/20 to-transparent animate-line-drift" style={{ animationDelay: '2s' }} />
            </div>

            {/* Top Divider */}
            <div className="absolute top-0 left-0 right-0 pointer-events-none">
                <svg viewBox="0 0 1440 35" fill="none" className="w-full" preserveAspectRatio="none" style={{ height: '35px' }}>
                    <path d="M0 18C240 0 480 35 720 18C960 0 1200 30 1440 20V0H0V18Z" fill="#F5F5F5" opacity="0.6" />
                </svg>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
                {/* Header with Typing */}
                <div
                    className={`text-center mb-6 lg:mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                        }`}
                >
                    <div className="inline-flex items-center gap-2 bg-[#EFF6FF] px-3 py-1.5 rounded-full mb-3 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
                        <Sparkles className="w-4 h-4 text-[#1E3A8A] relative z-10" />
                        <span className="text-[#1E3A8A] font-semibold text-xs uppercase tracking-wider relative z-10">Who We Are</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E3A8A] mb-2 tracking-tight">About Us</h2>
                    <div className="h-6 flex items-center justify-center">
                        <p className="text-gray-500 text-sm sm:text-base">
                            {typedText}
                            <span className="inline-block w-0.5 h-4 bg-[#3B82F6] ml-0.5 animate-cursor-blink" />
                        </p>
                    </div>
                </div>

                {/* Main Grid */}
                <div
                    className={`grid lg:grid-cols-3 gap-5 lg:gap-6 mb-6 lg:mb-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    {/* Vision & Mission */}
                    <div className="space-y-3">
                        <div className="group bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] rounded-xl p-4 border border-[#3B82F6]/10 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#1E3A8A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="flex items-center gap-2 mb-1.5">
                                <div className="w-8 h-8 rounded-lg bg-[#1E3A8A]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Target className="w-4 h-4 text-[#1E3A8A]" />
                                </div>
                                <h4 className="text-sm font-bold text-[#1E3A8A]">Vision</h4>
                            </div>
                            <p className="text-gray-600 text-xs leading-relaxed">
                                Become the Leading and Preferred Home Health Care Service Provider at Industry Quality Standards through Cost-effective Delivery Models.
                            </p>
                        </div>
                        <div className="group bg-gradient-to-br from-[#F0FDF4] to-[#DCFCE7] rounded-xl p-4 border border-[#16A34A]/10 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#16A34A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="flex items-center gap-2 mb-1.5">
                                <div className="w-8 h-8 rounded-lg bg-[#16A34A]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Lightbulb className="w-4 h-4 text-[#16A34A]" />
                                </div>
                                <h4 className="text-sm font-bold text-[#16A34A]">Mission</h4>
                            </div>
                            <p className="text-gray-600 text-xs leading-relaxed">
                                Promote Quality of Life by Providing World Class Home Health Care Services with Integrity, Respect and Dignity through Advancements in Technology.
                            </p>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3">
                        {companyHighlights.map((item, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:scale-[1.03] relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div
                                    className="relative z-10 w-9 h-9 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300"
                                    style={{ backgroundColor: item.color + '15' }}
                                >
                                    <item.icon className="w-4 h-4" style={{ color: item.color }} />
                                </div>
                                <div className="relative z-10 text-xl sm:text-2xl font-bold text-[#1E3A8A] group-hover:scale-105 transition-transform duration-300">
                                    {item.stat}
                                </div>
                                <div className="relative z-10 text-[10px] sm:text-xs text-gray-500 font-medium">{item.label}</div>
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent group-hover:w-full transition-all duration-500" style={{ color: item.color }} />
                            </div>
                        ))}
                    </div>

                    {/* Coverage + Values */}
                    <div>
                        <div className="mb-4">
                            <div className="flex items-center gap-1.5 mb-2">
                                <Globe className="w-3.5 h-3.5 text-[#3B82F6]" />
                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Serving Across</span>
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                                {['Tirunelveli', 'Tuticorin', 'Tenkasi', 'Kanyakumari'].map((city, i) => (
                                    <span
                                        key={i}
                                        className="text-[10px] font-semibold px-2.5 py-1 rounded-full border bg-white hover:shadow-md transition-all duration-300 hover:scale-105 cursor-default animate-float-tag"
                                        style={{
                                            animationDelay: `${i * 0.15}s`,
                                            borderColor: ['#EA580C', '#3B82F6', '#16A34A', '#9333EA'][i] + '40',
                                            color: ['#EA580C', '#3B82F6', '#16A34A', '#9333EA'][i],
                                        }}
                                    >
                                        {city}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-2">Values</p>
                            <div className="relative overflow-hidden rounded-xl border border-gray-100 bg-white">
                                <div id="values-scroll" className="flex gap-1.5 p-2 overflow-x-hidden">
                                    {[...values, ...values].map((v, i) => (
                                        <span
                                            key={i}
                                            className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-full border bg-white flex-shrink-0 hover:shadow-md transition-all duration-300"
                                            style={{ borderColor: v.color + '30', color: v.color }}
                                        >
                                            <v.icon className="w-3 h-3" />
                                            {v.title}
                                        </span>
                                    ))}
                                </div>
                                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none" />
                                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Leadership Section */}
                <div
                    className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <div className="text-center mb-5 lg:mb-6">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1E3A8A] mb-1">Our Leadership</h3>
                        <p className="text-gray-500 text-sm">Hover to explore their stories</p>
                    </div>

                    {/* Desktop: 3 cards */}
                    <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
                        {leaders.map((leader, index) => (
                            <div
                                key={index}
                                className="relative"
                                onMouseEnter={(e) => handleMouseEnter(leader, e)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <LeaderCard leader={leader} index={index} onClick={() => setSelectedLeader(leader)} />
                            </div>
                        ))}
                    </div>

                    {/* Mobile: Carousel */}
                    <div
                        className="sm:hidden relative"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <div className="overflow-hidden rounded-2xl">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {leaders.map((leader, index) => (
                                    <div
                                        key={index}
                                        className="w-full flex-shrink-0 px-1"
                                        onTouchStart={() => setSelectedLeader(leader)}
                                    >
                                        <LeaderCard leader={leader} index={index} onClick={() => setSelectedLeader(leader)} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center gap-2 mt-3">
                            {leaders.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentSlide(i)}
                                    className={`rounded-full transition-all duration-300 ${i === currentSlide ? 'w-6 h-2' : 'w-2 h-2 bg-gray-300'
                                        }`}
                                    style={{ backgroundColor: i === currentSlide ? leaders[currentSlide].accentColor : undefined }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Message */}
                <div className="text-center mt-6 lg:mt-8">
                    <div className="inline-flex items-center gap-2 bg-[#F0FDF4] rounded-full px-5 py-2.5 shadow-sm group hover:shadow-md transition-all duration-300">
                        <Heart className="w-4 h-4 text-[#16A34A] group-hover:scale-110 transition-transform duration-300" />
                        <span className="text-[#16A34A] font-medium text-xs sm:text-sm">
                            Committed to delivering care with compassion and excellence
                        </span>
                    </div>
                </div>
            </div>

            {/* ========== HOVER POPUP ========== */}
            {hoveredLeader && (
                <div
                    className="fixed z-40 animate-hover-pop-in"
                    style={{
                        left: `${Math.min(Math.max(hoverPosition.x - 180, 20), window.innerWidth - 380)}px`,
                        top: `${Math.max(hoverPosition.y - 20, 20)}px`,
                        maxHeight: `${Math.min(window.innerHeight - 40, 500)}px`,
                    }}
                    onMouseEnter={() => {
                        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
                    }}
                    onMouseLeave={() => setHoveredLeader(null)}
                >
                    <div
                        className="w-[340px] sm:w-[360px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                        style={{
                            boxShadow: `0 20px 60px -10px ${hoveredLeader.accentColor}30, 0 0 0 1px ${hoveredLeader.accentColor}10`,
                        }}
                    >
                        {/* Popup Header */}
                        <div className={`relative h-28 bg-gradient-to-br ${hoveredLeader.gradient} flex items-center justify-center`}>
                            <div className="absolute top-3 right-3 w-14 h-14 bg-white/10 rounded-full blur-lg" />
                            <div className="relative z-10 flex items-center gap-4">
                                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center shadow-xl">
                                    <span className="text-2xl font-bold text-white">{hoveredLeader.initials}</span>
                                </div>
                                <div className="text-left">
                                    <h4 className="text-white font-bold text-base leading-tight">{hoveredLeader.name}</h4>
                                    <p className="text-white/70 text-[11px]">{hoveredLeader.credentials}</p>
                                </div>
                            </div>
                        </div>

                        {/* Popup Content - Scrollable */}
                        <div className="p-4 sm:p-5 max-h-[320px] overflow-y-auto scrollbar-thin">
                            <div className="text-center mb-4">
                                <p
                                    className="text-xs font-semibold px-3 py-1 rounded-full inline-block"
                                    style={{ backgroundColor: hoveredLeader.accentColor + '15', color: hoveredLeader.accentColor }}
                                >
                                    {hoveredLeader.role}
                                </p>
                                <p className="text-xs text-gray-500 mt-1.5 italic">"{hoveredLeader.tagline}"</p>
                            </div>

                            <ul className="space-y-2.5">
                                {hoveredLeader.achievements.map((achievement, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 group/item p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        <div
                                            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-300"
                                            style={{ backgroundColor: hoveredLeader.accentColor + '12' }}
                                        >
                                            <achievement.icon className="w-3.5 h-3.5" style={{ color: hoveredLeader.accentColor }} />
                                        </div>
                                        <p className="text-xs text-gray-600 leading-relaxed group-hover/item:text-gray-900 transition-colors">
                                            {achievement.text}
                                        </p>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">
                                <div className="flex gap-2">
                                    <button className="w-8 h-8 rounded-full bg-[#EFF6FF] flex items-center justify-center hover:bg-[#1E3A8A] hover:text-white transition-all duration-300">
                                        <Link className="w-3.5 h-3.5" />
                                    </button>
                                    <button className="w-8 h-8 rounded-full bg-[#F0FDF4] flex items-center justify-center hover:bg-[#16A34A] hover:text-white transition-all duration-300">
                                        <Mail className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                                <button
                                    onClick={() => {
                                        setSelectedLeader(hoveredLeader);
                                        setHoveredLeader(null);
                                    }}
                                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-300 hover:scale-105"
                                    style={{ backgroundColor: hoveredLeader.accentColor + '12', color: hoveredLeader.accentColor }}
                                >
                                    Full Profile
                                    <ExternalLink className="w-3 h-3" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* ========== FULL MODAL ========== */}
            {selectedLeader && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-modal-in"
                    onClick={() => setSelectedLeader(null)}
                >
                    <div
                        ref={modalRef}
                        className="relative bg-white rounded-3xl max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-2xl animate-modal-pop scrollbar-thin"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedLeader(null)}
                            className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                        >
                            <X className="w-4 h-4 text-gray-600" />
                        </button>

                        <div className={`relative h-44 sm:h-52 bg-gradient-to-br ${selectedLeader.gradient} flex items-center justify-center`}>
                            <div className="absolute top-6 right-6 w-24 h-24 bg-white/10 rounded-full blur-xl" />
                            <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-lg" />
                            <div className="absolute w-40 h-40 rounded-full border border-dashed border-white/20 animate-spin-slow" />
                            <div className="absolute w-48 h-48 rounded-full border border-dashed border-white/10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '12s' }} />
                            <div className="relative z-10 text-center">
                                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/20 backdrop-blur-sm border-3 border-white/40 flex items-center justify-center shadow-2xl mx-auto mb-3">
                                    <span className="text-4xl sm:text-5xl font-bold text-white">{selectedLeader.initials}</span>
                                </div>
                                <p className="text-white/80 text-xs italic">"{selectedLeader.tagline}"</p>
                            </div>
                        </div>

                        <div className="p-6 sm:p-8 text-center">
                            <h3 className="text-xl sm:text-2xl font-bold text-[#1E3A8A] mb-0.5">{selectedLeader.name}</h3>
                            <p className="text-sm text-gray-400 mb-1">{selectedLeader.credentials}</p>
                            <p
                                className="text-xs font-semibold px-3 py-1 rounded-full inline-block mb-5"
                                style={{ backgroundColor: selectedLeader.accentColor + '15', color: selectedLeader.accentColor }}
                            >
                                {selectedLeader.role}
                            </p>

                            <ul className="space-y-3 text-left">
                                {selectedLeader.achievements.map((achievement, i) => (
                                    <li key={i} className="flex items-start gap-3 group p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                        <div
                                            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300"
                                            style={{ backgroundColor: selectedLeader.accentColor + '15' }}
                                        >
                                            <achievement.icon className="w-4 h-4" style={{ color: selectedLeader.accentColor }} />
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">
                                            {achievement.text}
                                        </p>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex items-center justify-center gap-3 mt-6 pt-4 border-t border-gray-100">
                                {/* <button className="w-10 h-10 rounded-full bg-[#EFF6FF] flex items-center justify-center hover:bg-[#1E3A8A] hover:text-white transition-all duration-300">
                                    <Link className="w-4 h-4" />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-[#F0FDF4] flex items-center justify-center hover:bg-[#16A34A] hover:text-white transition-all duration-300">
                                    <Mail className="w-4 h-4" />
                                </button>
                                <a
                                    href="#contact"
                                    onClick={() => setSelectedLeader(null)}
                                    className="px-5 py-2.5 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white rounded-xl text-sm font-semibold hover:scale-105 transition-transform duration-300"
                                >
                                    Connect with Team
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Bottom Divider */}
            <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
                <svg viewBox="0 0 1440 35" fill="none" className="w-full" preserveAspectRatio="none" style={{ height: '35px' }}>
                    <path d="M0 18C240 35 480 0 720 20C960 40 1200 5 1440 15V35H0V18Z" fill="#F5F5F5" opacity="0.7" />
                </svg>
            </div>

            <style>{`
        @keyframes blobSlow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -15px) scale(1.08); }
        }
        @keyframes gridDrift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(5px, 5px); }
        }
        @keyframes lineDrift {
          0%, 100% { transform: translateX(0); opacity: 0.3; }
          50% { transform: translateX(30px); opacity: 0.6; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes cursorBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes floatTag {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        @keyframes modalIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalPop {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes hoverPopIn {
          from { opacity: 0; transform: translateY(10px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-blob-slow { animation: blobSlow 10s ease-in-out infinite; }
        .animate-grid-drift { animation: gridDrift 15s ease-in-out infinite; }
        .animate-line-drift { animation: lineDrift 6s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 2s linear infinite; }
        .animate-cursor-blink { animation: cursorBlink 0.8s ease-in-out infinite; }
        .animate-float-tag { animation: floatTag 3s ease-in-out infinite; }
        .animate-modal-in { animation: modalIn 0.2s ease; }
        .animate-modal-pop { animation: modalPop 0.3s ease; }
        .animate-hover-pop-in { animation: hoverPopIn 0.2s ease; }
        .animate-spin-slow { animation: spinSlow 15s linear infinite; }
        .scrollbar-thin::-webkit-scrollbar { width: 4px; }
        .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background: #E5E7EB; border-radius: 10px; }
      `}</style>
        </section>
    );
};

/* ========== LEADER CARD ========== */
const LeaderCard = ({ leader, index, onClick }) => (
    <div
        className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer animate-leader-reveal border border-gray-100"
        style={{ animationDelay: `${index * 0.12}s` }}
        onClick={onClick}
    >
        <div className={`relative h-32 sm:h-36 ${leader.bgGradient} flex items-center justify-center overflow-hidden`}>
            <div className="absolute top-4 right-4 w-16 h-16 bg-white/15 rounded-full blur-xl animate-float-slow-inner" />
            <div className="absolute bottom-2 left-2 w-12 h-12 bg-white/10 rounded-full blur-lg animate-float-slow-inner" style={{ animationDelay: '2s' }} />
            <div className="absolute w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-dashed border-white/20 animate-spin-slow" />
            <div className="absolute w-36 h-36 sm:w-40 sm:h-40 rounded-full border border-dashed border-white/10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '12s' }} />
            <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <span className="text-2xl sm:text-3xl font-bold text-white">{leader.initials}</span>
            </div>
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Eye className="w-8 h-8 text-white" />
            </div>
        </div>
        <div className="p-4 sm:p-5 text-center">
            <h4 className="text-sm sm:text-base font-bold text-[#1E3A8A] mb-0.5 group-hover:text-[#3B82F6] transition-colors">
                {leader.name}
            </h4>
            <p className="text-[10px] sm:text-xs text-gray-400 mb-1">{leader.credentials}</p>
            <p
                className="text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full inline-block"
                style={{ backgroundColor: leader.accentColor + '15', color: leader.accentColor }}
            >
                {leader.role}
            </p>
        </div>
    </div>
);

export default About;