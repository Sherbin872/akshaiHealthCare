import React, { useState, useEffect, useRef } from "react";
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
} from "lucide-react";

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
    {
      src: "https://images.unsplash.com/photo-1554734867-bf3c00a49371?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1lcmdlbmN5JTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Emergency medical team",
      position: "object-[center_20%]",
    },
    {
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600",
      alt: "Urgent care at home",
      position: "object-center",
    },
    {
      src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600",
      alt: "Vital signs monitoring",
      position: "object-[center_30%]",
    },
    {
      src: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600",
      alt: "Emergency response",
      position: "object-center",
    },
    {
      src: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600",
      alt: "Ambulance service",
      position: "object-center",
    },
  ];

  // ========== EXACT CONTENT FROM DOCUMENT ==========
  // Emergency Care main paragraphs (exact from doc)
  const emergencyIntro =
    "Shree Akshai Healthcare understands that emergencies can happen anytime, which is why we offer reliable Emergency Care Services. Our team of trained professionals is dedicated to providing immediate medical assistance to individuals in need, including the elderly, parenting individuals, those with disabilities, and those recovering from illnesses. Our emergency care services are available 24/7, ensuring prompt response and expert medical care when you need it most. Whether you require urgent medical attention at home or assistance in transporting to a medical facility, we are here to provide the support you need during emergencies.";

  const emergencyServicesList =
    "We provide Ambulance Assistance - Non-Medical Emergency - Medical Emergency Assistance with a care plan - Realtime updates - Accompanied care manager.";

  // Six emergency service categories (exact from document's "Our Comprehensive Range of Emergency Services")
  const emergencyCategories = [
    {
      title: "Critical Care",
      icon: HeartPulse,
      emoji: "🫀",
      color: "#DC2626",
      bgLight: "bg-[#FEF2F2]",
      description:
        "Our emergency nurses are equipped to handle critical medical situations.",
      fullContent:
        "Our emergency nurses are equipped to handle critical medical situations, providing life-saving interventions and monitoring vital signs. We respond immediately to cardiac emergencies, respiratory distress, shock, and other critical conditions with expert care and rapid intervention.",
    },
    {
      title: "Intravenous (IV) Therapy",
      icon: Syringe,
      emoji: "💉",
      color: "#3B82F6",
      bgLight: "bg-[#EFF6FF]",
      description:
        "When intravenous medications or fluids are required, our nurses ensure proper administration and monitoring.",
      fullContent:
        "When intravenous medications or fluids are required, our nurses ensure proper administration and monitoring. Our team provides emergency IV access, cannulation, IV fluid therapy, medication administration, infusion pump management, and continuous monitoring of IV sites.",
    },
    {
      title: "Wound Care",
      icon: Shield,
      emoji: "🩹",
      color: "#16A34A",
      bgLight: "bg-[#F0FDF4]",
      description:
        "Expert wound care is provided to manage injuries and prevent infections.",
      fullContent:
        "Expert wound care is provided to manage injuries and prevent infections. Our emergency team performs wound assessment, bleeding control, wound cleaning and debridement, infection prevention, burn care, and surgical wound emergency management.",
    },
    {
      title: "Medication Management",
      icon: Pill,
      emoji: "💊",
      color: "#EA580C",
      bgLight: "bg-[#FFF7ED]",
      description:
        "We manage medications, ensuring that you receive the right medications at the right time.",
      fullContent:
        "We manage medications, ensuring that you receive the right medications at the right time. Our emergency medication management includes emergency drug administration, dosage verification, allergy checks, side effect monitoring, and coordination with pharmacies during emergencies.",
    },
    {
      title: "Cardiac Care",
      icon: Activity,
      emoji: "❤️",
      color: "#9333EA",
      bgLight: "bg-[#FAF5FF]",
      description:
        "Our emergency nurses are trained in cardiac care and can assist with cardiac emergencies, including CPR.",
      fullContent:
        "Our emergency nurses are trained in cardiac care and can assist with cardiac emergencies, including CPR. We provide cardiac emergency response, CPR, ECG monitoring, chest pain assessment, blood pressure crisis management, and post-cardiac event stabilization.",
    },
  ];

  // Mobile responsive
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

  useEffect(() => {
    const t = setInterval(() => {
      setIsCallPulsing(true);
      setTimeout(() => setIsCallPulsing(false), 600);
    }, 2000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
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
            <a href="#home" className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center overflow-hidden p-0.5">
                <img
                  src="https://res.cloudinary.com/dkmmpyq6u/image/upload/f_auto,q_auto/SAFHE_Logo_tawlhv"
                  alt="SAFHE"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm font-bold hidden sm:block">SAFHE</span>
            </a>

            <div className="hidden sm:flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#DC2626] rounded-full animate-pulse" />
              <span className="text-white/60 text-xs font-medium">
                Emergency Care 24/7
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#services"
                className="text-white/40 hover:text-white text-[11px] font-medium transition-colors hidden sm:block"
              >
                Services
              </a>
              <a
                href="#why-us"
                className="text-white/40 hover:text-white text-[11px] font-medium transition-colors hidden sm:block"
              >
                Why Us
              </a>
              <a
                href="tel:+919442659377"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#DC2626] text-white text-[11px] font-bold rounded-lg hover:bg-[#B91C1C] transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                Emergency Call
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ========== FLOATING EMERGENCY CALL BUTTON ========== */}
      <a
        href="tel:+919442659377"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-[#DC2626] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300"
        style={{ boxShadow: "0 8px 25px rgba(220,38,38,0.5)" }}
      >
        <div
          className={`absolute inset-0 rounded-full bg-[#DC2626] animate-ping-slow opacity-40 ${isCallPulsing ? "scale-125" : ""}`}
        />
        <Phone className="w-5 h-5 text-white relative z-10 animate-pulse" />
        <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#16A34A] rounded-full border-2 border-white" />
      </a>

      {/* ========== HERO SECTION ========== */}
      <section className="relative h-[calc(100svh-56px)] mt-14 flex flex-col lg:flex-row overflow-hidden">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[42%] bg-[#0A1628] flex items-center relative min-h-[50vh] lg:min-h-screen">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:16px_16px]" />
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#DC2626]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#DC2626]/5 rounded-full blur-3xl" />

          <div className="relative w-full px-6 sm:px-10 lg:px-12 py-10 sm:py-12 lg:py-14">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-white/40 hover:text-white mr-5 mb-6 lg:mb-8 text-xs group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Back</span>
            </button>

            <div className="inline-flex items-center gap-2 bg-[#DC2626]/10 border border-[#DC2626]/20 px-3 py-1.5 rounded-full mb-4 lg:mb-5">
              <span className="w-2 h-2 bg-[#DC2626] rounded-full animate-pulse" />
              <span className="text-[#DC2626] text-[10px] font-bold uppercase tracking-widest">
                24/7 Emergency Hotline
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white leading-tight mb-3 lg:mb-4">
              Emergency
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#F87171] to-[#FCA5A5]">
                Care
              </span>
              Services
            </h1>

            <p className="text-white/60 text-sm sm:text-base mb-4 lg:mb-5 max-w-md">
              Immediate medical assistance when every second counts — trained
              professionals, prompt response, expert care.
            </p>

            <div className="flex gap-6 mb-4 lg:mb-5">
              {[
                { num: "24/7", label: "Response" },
                { num: "15min", label: "Arrival" },
                { num: "100%", label: "Ready" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-white font-bold text-lg">{s.num}</p>
                  <p className="text-white/40 text-[10px] uppercase">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+919442659377"
                className={`flex items-center justify-center gap-2 px-5 py-3 bg-[#DC2626] text-white font-bold text-sm rounded-xl hover:bg-[#B91C1C] transition ${
                  isCallPulsing ? "ring-4 ring-[#DC2626]/20" : ""
                }`}
              >
                <Phone className="w-4 h-4" />
                Emergency Call Now
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

        {/* RIGHT IMAGE SECTION */}
        <div className="w-full lg:w-[58%] relative bg-[#0F1D4A] h-[50vh] sm:h-[55vh] lg:h-[100svh] overflow-hidden">
          {/* MOBILE */}
          <div className="lg:hidden h-full">
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={visibleGallery[activeImage].src}
                alt=""
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {visibleGallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === activeImage ? "w-6 bg-white" : "w-2 bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* DESKTOP GRID */}
          <div className="hidden lg:grid grid-cols-3 grid-rows-2 gap-1 h-full p-1">
            {heroGallery.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveImage(i)}
                className={`relative cursor-pointer overflow-hidden transition ${
                  i === activeImage
                    ? "col-span-2 row-span-2 ring-2 ring-[#DC2626]/50"
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

          {/* FLOATING CARD */}
          <div className="hidden lg:block absolute bottom-6 right-6 bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10">
            <p className="text-white text-xs italic">
              "Life-saving emergency response!"
            </p>
            <p className="text-white/40 text-[10px] mt-1">— Rajesh M.</p>
          </div>
        </div>
      </section>

      {/* ========== EMERGENCY CARE SECTION (EXACT CONTENT FROM DOC) ========== */}
      <section id="emergency-care-services" className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E3A8A] tracking-tight">
              Emergency Care Services
            </h2>
            <div className="w-20 h-1 bg-[#DC2626] mx-auto mt-4 rounded-full" />
          </div>

          {/* Professional Style Introduction Card */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl shadow-lg border border-red-100 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#DC2626] via-[#EF4444] to-[#F87171]" />
              <div className="absolute top-6 right-6 opacity-10">
                <AlertCircle className="w-16 h-16 text-[#DC2626]" />
              </div>
              <div className="p-8 sm:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#DC2626]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Bell className="w-6 h-6 text-[#DC2626]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1E3A8A]">
                      24/7 Emergency Medical Assistance
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Prompt response, expert care, real-time updates
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                  {emergencyIntro}
                </p>
                <div className="mt-4 p-4 bg-white/50 rounded-xl border border-red-100">
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">
                    {emergencyServicesList}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1E3A8A]">
              Our Comprehensive Range of Emergency Services
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Click on any category to learn more
            </p>
          </div>

          {/* Six Dropdown Sections - One Line Description Inside */}

          <div className="space-y-4 max-w-3xl mx-auto">
            {emergencyCategories.map((category, index) => {
              // Alternate between logo colors
              const logoColors = ["#003399", "#990100"];
              const color = logoColors[index % 2];

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleCategory(index)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left group"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: color + "12" }}
                      >
                        <category.icon
                          className="w-6 h-6"
                          style={{ color: color }}
                        />
                      </div>
                      <div>
                        <h3
                          className="text-base sm:text-lg font-bold text-gray-900 group-hover:underline transition-colors"
                          style={{ color: color }}
                        >
                          {category.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-0.5 max-w-md">
                          {category.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <ChevronRight
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${expandedCategory === index ? "rotate-90" : ""}`}
                      />
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-400 ease-in-out overflow-hidden ${expandedCategory === index ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                      <div
                        className="rounded-xl p-5 sm:p-6"
                        style={{ backgroundColor: color + "06" }}
                      >
                        <div className="flex gap-3">
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ backgroundColor: color + "15" }}
                          >
                            <CheckCircle
                              className="w-4 h-4"
                              style={{ color: color }}
                            />
                          </div>
                          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                            {category.fullContent}
                          </p>
                        </div>
                        <div className="mt-5 pt-4 border-t border-gray-200 flex items-center justify-between flex-wrap gap-3">
                          <span className="text-[11px] text-gray-500 flex items-center gap-1.5">
                            <Timer
                              className="w-3.5 h-3.5 animate-pulse"
                              style={{ color: color }}
                            />
                            Available 24/7 • Immediate Response
                          </span>
                          <a
                            href="tel:+919442659377"
                            className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 text-white"
                            style={{ backgroundColor: color }}
                          >
                            <Phone className="w-3 h-3" />
                            Call for {category.title.split(" &")[0]}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 text-[11px] mt-3">
              Available 24/7 • Immediate Response • Expert Emergency Team
            </p>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US SECTION ========== */}
      <section
        id="why-us"
        className="py-16 lg:py-20 bg-gradient-to-br from-red-50 via-white to-rose-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#1E3A8A] tracking-tight">
              Why Choose Our Emergency Care
            </h2>
            <div className="w-20 h-1 bg-[#DC2626] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Bell,
                title: "24/7 Emergency Response",
                description:
                  "Round-the-clock emergency response — help when you need it most, anytime day or night.",
              },
              {
                icon: Ambulance,
                title: "Ambulance Assistance",
                description:
                  "Ambulance assistance for both non-medical and medical emergencies with real-time updates.",
              },
              {
                icon: BadgeCheck,
                title: "Expert Emergency Nurses",
                description:
                  "Trained emergency nurses with critical care expertise ready to respond immediately.",
              },
              {
                icon: Timer,
                title: "Prompt Response",
                description:
                  "Prompt response with real-time updates throughout your emergency care journey.",
              },
              {
                icon: HeartPulse,
                title: "Life-Saving Interventions",
                description:
                  "Life-saving interventions including CPR, cardiac care, and critical stabilization.",
              },
              {
                icon: Shield,
                title: "Accompanied Care Manager",
                description:
                  "Accompanied care manager for safe transport, coordination, and family support.",
              },
            ].map((item, i) => {
              const logoColors = ["#003399", "#990100"];
              const color = logoColors[i % 2];

              return (
                <div
                  key={i}
                  className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: color + "15" }}
                  >
                    <item.icon className="w-7 h-7" style={{ color: color }} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Stats Section */}

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { icon: Clock, value: "24/7", label: "Availability" },
                { icon: Timer, value: "15min", label: "Avg Response Time" },
                { icon: Shield, value: "100%", label: "Trained Nurses" },
                { icon: HeartPulse, value: "Critical", label: "Care Ready" },
              ].map((stat, i) => {
                const logoColors = ["#003399", "#990100"];
                const color = logoColors[i % 2];

                return (
                  <div key={i} className="text-center">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                      style={{ backgroundColor: color + "15" }}
                    >
                      <stat.icon className="w-5 h-5" style={{ color: color }} />
                    </div>
                    <p className="text-2xl font-black" style={{ color: color }}>
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-500 font-medium">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex justify-center mt-8">
            <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-100">
              <div className="flex items-center gap-1.5">
                <Siren className="w-4 h-4" style={{ color: "#003399" }} />
                <span
                  className="text-xs sm:text-sm font-semibold"
                  style={{ color: "#003399" }}
                >
                  24/7 Emergency Response
                </span>
              </div>
              <div className="w-px h-4 bg-gray-200 hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <Ambulance className="w-4 h-4" style={{ color: "#990100" }} />
                <span
                  className="text-xs sm:text-sm font-semibold"
                  style={{ color: "#990100" }}
                >
                  Ambulance Assistance
                </span>
              </div>
              <div className="w-px h-4 bg-gray-200 hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4" style={{ color: "#003399" }} />
                <span
                  className="text-xs sm:text-sm font-semibold"
                  style={{ color: "#003399" }}
                >
                  Life-Saving Care
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-[#7F1D1D] to-[#DC2626] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:16px_16px]" />
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
            Emergency? We're Here 24/7
          </h2>
          <p className="text-white/70 text-base mb-6">
            Immediate medical assistance at your doorstep — call our emergency
            hotline now.
          </p>
          <a
            href="tel:+919442659377"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#DC2626] font-bold text-base rounded-xl hover:bg-gray-100 transition-all hover:scale-[1.02] shadow-xl"
          >
            <Phone className="w-5 h-5 animate-pulse" />
            +91 94426 59377
          </a>
          <p className="text-white/50 text-xs mt-4">
            Available 24/7 • Immediate Response • Expert Emergency Team
          </p>
        </div>
      </section>

      <style>{`
                @keyframes pingSlow {
                    0% { transform: scale(1); opacity: 0.4; }
                    100% { transform: scale(1.6); opacity: 0; }
                }
                .animate-ping-slow {
                    animation: pingSlow 2s ease-out infinite;
                }
            `}</style>
    </div>
  );
};

export default EmergencyCarePage;
