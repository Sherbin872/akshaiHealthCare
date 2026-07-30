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
  UserCheck,
  Utensils,
  Car,
  Smile,
} from "lucide-react";

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
    {
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600",
      alt: "Caring for elderly",
      position: "object-[center_20%]",
    },
    {
      src: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600",
      alt: "Senior care at home",
      position: "object-center",
    },
    {
      src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600",
      alt: "Companionship for seniors",
      position: "object-[center_30%]",
    },
    {
      src: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600",
      alt: "Elderly assistance",
      position: "object-center",
    },
    {
      src: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600",
      alt: "Senior health monitoring",
      position: "object-center",
    },
  ];

  // ========== EXACT CONTENT FROM DOCUMENT ==========
  // Elderly Care main paragraphs (exact from doc)
  const elderlyCareIntro =
    "We believe in the importance of the human touch, so we invest in building a strong team of nurses and caregivers who are technically skilled and compassionate regarding elder care at home. Explore our Elderly Home Services. We understand the unique needs of seniors and provide a comfortable and caring environment for seniors who require additional home care and support. Our Elder Care Services are designed to provide a comfortable and caring environment for elderly individuals, ensuring their well-being and enhancing their quality of life.";

  // Six main elderly care service categories - exact content from document
  const elderlyCareCategories = [
    {
      title: "Personalized Care Plans",
      icon: ClipboardList, // ADD THIS
      emoji: "📋",
      color: "#3B82F6",
      bgLight: "bg-[#EFF6FF]",
      description:
        "We create individualized care plans tailored to the unique requirements and preferences of each senior.",
      fullContent:
        "We create individualized care plans tailored to the unique requirements and preferences of each senior. Our comprehensive approach includes regular plan reviews, family consultations, health goal monitoring, and coordination with primary physicians to ensure optimal care outcomes.",
    },
    {
      title: "Assistance with Daily Activities",
      icon: UserCheck, // ADD THIS
      emoji: "🛁",
      color: "#16A34A",
      bgLight: "bg-[#F0FDF4]",
      description:
        "Our caregivers provide assistance with daily activities such as bathing, grooming, dressing, and mobility.",
      fullContent:
        "Our caregivers provide compassionate assistance with daily living activities including bathing, grooming, dressing, mobility support, toileting, incontinence care, and fall prevention measures — all delivered with dignity and respect.",
    },
    {
      title: "Medication Management",
      icon: Pill, // ADD THIS
      emoji: "💊",
      color: "#DC2626",
      bgLight: "bg-[#FEF2F2]",
      description:
        "We ensure that medications are administered accurately and on schedule.",
      fullContent:
        "We ensure medications are administered accurately and on schedule. Our service includes medication schedule creation, pill organizer setup, prescription refill coordination, side effect monitoring, drug interaction checks, and coordination with doctors and pharmacies.",
    },
    {
      title: "Companionship",
      icon: Smile, // ADD THIS
      emoji: "💝",
      color: "#9333EA",
      bgLight: "bg-[#FAF5FF]",
      description:
        "Our caregivers offer companionship, engaging seniors in meaningful conversations and activities to combat loneliness.",
      fullContent:
        "Our caregivers offer meaningful companionship, engaging seniors in conversations and activities to combat loneliness and isolation. We provide emotional support, memory stimulation activities, music therapy, and companionship for walks and outings.",
    },
    {
      title: "Nutrition and Meal Planning",
      icon: Utensils, // ADD THIS
      emoji: "🍽️",
      color: "#EA580C",
      bgLight: "bg-[#FFF7ED]",
      description:
        "We focus on maintaining a balanced diet and proper nutrition to support senior health.",
      fullContent:
        "We focus on maintaining balanced nutrition to support senior health. Our services include balanced diet planning, meal preparation as per dietary requirements, nutritional assessment, special diet management (diabetic, renal, cardiac), hydration monitoring, and feeding assistance when required.",
    },
    {
      title: "Transportation",
      icon: Car, // ADD THIS
      emoji: "🚗",
      color: "#0891B2",
      bgLight: "bg-[#ECFEFF]",
      description:
        "We assist with transportation to medical appointments and other essential outings.",
      fullContent:
        "We provide safe transportation assistance to medical appointments, essential outings, and social engagements. Our service includes accompanied visits, safe vehicle transfers, appointment scheduling, and post-appointment summaries for family members.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setIsCallPulsing(true);
      setTimeout(() => setIsCallPulsing(false), 600);
    }, 2500);
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

  // Mobile responsive check
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

  return (
    <div ref={sectionRef} className="min-h-screen bg-white overflow-x-hidden">
      {/* ========== SERVICE PAGE NAVBAR ========== */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1628]/95 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 text-white">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl flex items-center justify-center p-1 shadow flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="Akshai Healthcare Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-sm font-bold hidden sm:block">Akshai Healthcare</span>
            </a>

            {/* Center: Service Name */}
            <div className="hidden sm:flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#16A34A] rounded-full animate-pulse" />
              <span className="text-white/60 text-xs font-medium">
                Elderly Care Services
              </span>
            </div>

            {/* Right: Quick Actions */}
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
                href="tel:+919443608223"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#16A34A] text-white text-[11px] font-bold rounded-lg hover:bg-[#15803D] transition-all"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ========== FLOATING CALL BUTTON ========== */}
      <a
        href="tel:+919443608223"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-[#16A34A] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300"
        style={{ boxShadow: "0 8px 25px rgba(22,163,74,0.4)" }}
      >
        <div
          className={`absolute inset-0 rounded-full bg-[#16A34A] animate-ping-slow opacity-30 ${isCallPulsing ? "scale-125" : ""}`}
        />
        <Phone className="w-5 h-5 text-white relative z-10" />
        <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#DC2626] rounded-full border-2 border-white" />
      </a>

      {/* ========== HERO SECTION ========== */}
      <section className="relative h-[calc(100svh-56px)] mt-14 flex flex-col lg:flex-row overflow-hidden">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[42%] bg-[#0A1628] flex items-center relative min-h-[50vh] lg:min-h-screen">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:16px_16px]" />
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#16A34A]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#16A34A]/5 rounded-full blur-3xl" />

          <div className="relative w-full px-5 sm:px-8 lg:px-12 py-10 sm:py-12 lg:py-14">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center mr-5 gap-2 text-white/40 hover:text-white mb-6 lg:mb-8 text-xs group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Back</span>
            </button>

            <div className="inline-flex items-center gap-2 bg-[#16A34A]/10 border border-[#16A34A]/20 px-3 py-1.5 rounded-full mb-4 lg:mb-5">
              <span className="w-2 h-2 bg-[#16A34A] rounded-full animate-pulse" />
              <span className="text-[#16A34A] text-[10px] font-bold uppercase tracking-widest">
                Compassionate Elder Care
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white leading-tight mb-3 lg:mb-4">
              Elderly
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4ADE80] to-[#86EFAC]">
                Care
              </span>
              Services
            </h1>

            <p className="text-white/60 text-sm sm:text-base mb-4 lg:mb-5 max-w-md">
              Skilled caregivers and nurses providing comfort, dignity, and
              better quality of life at home.
            </p>

            <div className="flex gap-6 mb-4 lg:mb-5">
              {[
                { num: "100+", label: "Caregivers" },
                { num: "5K+", label: "Seniors Cared" },
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
                href="tel:+919443608223"
                className={`flex items-center justify-center gap-2 px-5 py-3 bg-[#16A34A] text-white font-bold text-sm rounded-xl hover:bg-[#15803D] transition ${
                  isCallPulsing ? "ring-4 ring-[#16A34A]/20" : ""
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

        {/* RIGHT IMAGE SECTION */}
        <div className="w-full lg:w-[58%] relative bg-[#0F1D4A] h-[50vh] sm:h-[55vh] lg:h-[100svh] overflow-hidden">
          {/* Mobile carousel */}
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

          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-3 grid-rows-2 gap-1 h-full p-1">
            {heroGallery.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveImage(i)}
                className={`relative cursor-pointer overflow-hidden transition ${
                  i === activeImage
                    ? "col-span-2 row-span-2 ring-2 ring-[#16A34A]/50"
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

          {/* Floating Card */}
          <div className="hidden lg:block absolute bottom-6 right-6 bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10">
            <p className="text-white text-xs italic">
              "Treated my father with dignity"
            </p>
            <p className="text-white/40 text-[10px] mt-1">— Priya S.</p>
          </div>
        </div>
      </section>

      {/* ========== ELDERLY CARE SECTION (PROFESSIONAL STYLE) ========== */}
      <section id="elderly-care-services" className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E3A8A] tracking-tight">
              Elderly Home Services
            </h2>
            <div className="w-20 h-1 bg-[#16A34A] mx-auto mt-4 rounded-full" />
          </div>

          {/* PROFESSIONAL STYLE PARAGRAPH CARD */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Decorative top bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#16A34A] via-[#3B82F6] to-[#9333EA]" />

              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-[#1E3A8A]" />
              </div>

              <div className="p-8 sm:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#16A34A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-[#16A34A]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1E3A8A]">
                      The Human Touch in Elder Care
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Quality care with compassion and dignity
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  {elderlyCareIntro}
                </p>

                {/* Key highlights */}
                <div className="mt-6 flex flex-wrap gap-4 pt-4 border-t border-gray-200">
                  {[
                    { icon: Shield, text: "Skilled Professionals" },
                    { icon: Heart, text: "Compassionate Care" },
                    { icon: Home, text: "Home Environment" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-gray-500"
                    >
                      <item.icon className="w-3.5 h-3.5 text-[#16A34A]" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1E3A8A]">
              Our Comprehensive Range of Services
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Click on any category to learn more
            </p>
          </div>

          {/* SIX DROPDOWN SECTIONS - ONE LINE DESCRIPTION INSIDE */}

          <div className="space-y-4 max-w-3xl mx-auto">
            {elderlyCareCategories.map((category, index) => {
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
                            <Heart
                              className="w-3.5 h-3.5"
                              style={{ color: color }}
                            />
                            Compassionate Care • Available 24/7
                          </span>
                          <a
                            href="tel:+919443608223"
                            className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 text-white"
                            style={{ backgroundColor: color }}
                          >
                            <Phone className="w-3 h-3" />
                            Enquire Now
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
              Available 24/7 • Skilled Caregivers • Compassionate Service
            </p>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US SECTION ========== */}
      <section
        id="why-us"
        className="py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#1E3A8A] tracking-tight">
              Why Choose Our Elderly Care
            </h2>
            <div className="w-20 h-1 bg-[#16A34A] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Heart,
                title: "The Human Touch",
                description:
                  "Skilled nurses & compassionate caregivers who treat your loved ones with dignity and respect.",
              },
              {
                icon: Home,
                title: "Comfort at Home",
                description:
                  "Familiar, comfortable environment that promotes faster recovery and emotional well-being.",
              },
              {
                icon: BadgeCheck,
                title: "Personalized Plans",
                description:
                  "Customized care plans tailored to each senior's unique needs, preferences, and health conditions.",
              },
              {
                icon: Shield,
                title: "Enhanced Quality of Life",
                description:
                  "Comprehensive care focused on physical, emotional, and social well-being of seniors.",
              },
              {
                icon: Users,
                title: "Skilled Care Team",
                description:
                  "Technically skilled and trained professionals invested in quality elder care.",
              },
              {
                icon: Smile,
                title: "Combating Loneliness",
                description:
                  "Meaningful companionship and engagement activities to prevent isolation and depression.",
              },
            ].map((item, i) => {
              // Alternate between logo colors
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
                { icon: Users, value: "100+", label: "Caregivers" },
                { icon: Heart, value: "5K+", label: "Seniors Cared" },
                { icon: Clock, value: "24/7", label: "Availability" },
                { icon: Shield, value: "100%", label: "Verified Staff" },
              ].map((stat, i) => {
                // Alternate between logo colors
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
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-[#1E3A8A] to-[#16A34A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:16px_16px]" />
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
            Ready to Provide the Best Care for Your Loved Ones?
          </h2>
          <p className="text-white/70 text-base mb-6">
            Compassionate elderly care at home — call now to discuss your needs.
          </p>
          <a
            href="tel:+919443608223"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1E3A8A] font-bold text-base rounded-xl hover:bg-gray-100 transition-all hover:scale-[1.02] shadow-xl"
          >
            <Phone className="w-5 h-5" />
            +91 94436 08223
          </a>
          <p className="text-white/50 text-xs mt-4">
            Available 24/7 • Free Consultation • No Obligation
          </p>
        </div>
      </section>

      <style>{`
                @keyframes pingSlow {
                    0% { transform: scale(1); opacity: 0.3; }
                    100% { transform: scale(1.6); opacity: 0; }
                }
                .animate-ping-slow {
                    animation: pingSlow 2s ease-out infinite;
                }
            `}</style>
    </div>
  );
};

export default ElderlyCarePage;
