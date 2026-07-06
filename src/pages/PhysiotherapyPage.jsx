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
  Dumbbell,
  Thermometer,
  ZapIcon,
  Move,
  Wind,
  Bone,
  Brain,
  Sparkles as SparklesIcon,
} from "lucide-react";

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
    {
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600",
      alt: "Physiotherapy session",
      position: "object-[center_20%]",
    },
    {
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600",
      alt: "Rehabilitation exercises",
      position: "object-center",
    },
    {
      src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600",
      alt: "Therapy at home",
      position: "object-[center_30%]",
    },
    {
      src: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600",
      alt: "Physio equipment",
      position: "object-center",
    },
    {
      src: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600",
      alt: "Patient care",
      position: "object-center",
    },
  ];

  // ========== EXACT CONTENT FROM DOCUMENT ==========
  // Physiotherapy main paragraphs (exact from doc)
  const physioIntro =
    "Physiotherapy at home is a convenient and cost-effective approach to receiving physiotherapy care. Whether you are recovering from an injury or surgery or you have a chronic ailment, Shree Akshai Healthcare services has a team of highly skilled physiotherapists who can assist you in reaching your rehabilitation goals.";

  const physioSecondPara =
    "Our physiotherapist will make a regular home visit to provide you with preventive, diagnostic, and therapeutic services and exercises intended to improve and restore physical ability and prevent disabilities caused by disease, trauma, or injury.";

  // Ailments treated (exact from document - the table/list)
  const ailmentsTreated = [
    "Deformed Posture",
    "Sport injuries",
    "Difficulty in Walking",
    "Fall",
    "Stroke",
    "Birth defects",
    "Problems of rehabilitation after illness",
    "Head injuries",
    "Genetic disorders",
    "Surgical rehabilitation",
    "Physical handicap",
    "Back and neck pain",
    "Chronic tension and chronic fatigue",
    "Certain disease conditions like asthma",
    "Limb deficiencies",
    "Work injuries",
    "Faster recovery of back pain, knee pain, shoulder pain, neck and back pain",
  ];

  // Treatment plan includes (exact from document)
  const treatmentPlan = [
    "Application of heat, massage, and exercise",
    "Physical and manual therapy techniques",
    "Therapeutic exercise",
    "Electrical stimulation",
    "Cold therapy",
    "Mobilisation",
    "Hot packs",
    "Transcutaneous electrical nerve stimulation (TENS)",
    "Balance and strengthening exercises",
  ];

  // Six physio categories with exact content structure
  const physioCategories = [
    {
      title: "Pain Management & Recovery",
      emoji: "💆",
      color: "#DC2626",
      bgLight: "bg-[#FEF2F2]",
      description:
        "Effective relief from back pain, knee pain, shoulder pain, neck pain and chronic tension.",
      fullContent:
        "Our specialized pain management protocols include application of heat therapy, therapeutic massage, electrical stimulation, cold therapy, and TENS (Transcutaneous Electrical Nerve Stimulation). We focus on faster recovery from back pain, knee pain, shoulder pain, neck pain, and chronic fatigue.",
    },
    {
      title: "Post-Surgical Rehabilitation",
      emoji: "🏥",
      color: "#3B82F6",
      bgLight: "bg-[#EFF6FF]",
      description:
        "Structured rehabilitation programs designed to restore function and accelerate recovery after surgery.",
      fullContent:
        "We provide comprehensive surgical rehabilitation for all major surgeries including orthopedic, cardiac, and neurological procedures. Our approach includes mobility restoration, gait training, balance exercises, manual therapy, and range of motion exercises to ensure complete recovery.",
    },
    {
      title: "Neurological & Stroke Rehabilitation",
      emoji: "🧠",
      color: "#9333EA",
      bgLight: "bg-[#FAF5FF]",
      description:
        "Specialized therapy for stroke recovery, head injuries, and neurological conditions.",
      fullContent:
        "Our neurological physiotherapy focuses on stroke rehabilitation, head injury recovery, and management of conditions like Parkinson's disease. We use neuroplasticity-focused exercises, balance training, functional mobility training, and specialized techniques to restore independence.",
    },
    {
      title: "Orthopedic & Sports Physiotherapy",
      emoji: "🦴",
      color: "#16A34A",
      bgLight: "bg-[#F0FDF4]",
      description:
        "Expert care for sports injuries, limb deficiencies, walking difficulties, and posture correction.",
      fullContent:
        "We specialize in sports injury rehabilitation, management of limb deficiencies, physical handicap support, gait analysis and correction for difficulty in walking, fall prevention, deformed posture correction, joint mobilisation, and strengthening programs.",
    },
    {
      title: "Geriatric & Chronic Care",
      emoji: "👴",
      color: "#EA580C",
      bgLight: "bg-[#FFF7ED]",
      description:
        "Gentle, supportive physiotherapy for seniors and chronic conditions like arthritis and asthma.",
      fullContent:
        "Our geriatric physiotherapy addresses arthritis and joint pain management, osteoporosis-safe exercise programs, fall risk assessment, mobility aid training, chronic respiratory conditions like asthma, and rehabilitation after illness for elderly patients.",
    },
    {
      title: "Therapeutic Modalities",
      emoji: "⚡",
      color: "#0891B2",
      bgLight: "bg-[#ECFEFF]",
      description:
        "Advanced therapeutic techniques including heat, cold, electrical stimulation, and manual therapy.",
      fullContent:
        "We offer a comprehensive range of therapeutic modalities including: Application of heat, massage, and exercise; Physical and manual therapy techniques; Therapeutic exercise; Electrical stimulation; Cold therapy; Mobilisation; Hot packs; and Transcutaneous electrical nerve stimulation (TENS).",
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
              <span className="w-1.5 h-1.5 bg-[#EA580C] rounded-full animate-pulse" />
              <span className="text-white/60 text-xs font-medium">
                Physiotherapy at Home
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
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#EA580C] text-white text-[11px] font-bold rounded-lg hover:bg-[#C2410C] transition-all"
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
        href="tel:+919442659377"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-[#EA580C] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300"
        style={{ boxShadow: "0 8px 25px rgba(234,88,12,0.4)" }}
      >
        <div
          className={`absolute inset-0 rounded-full bg-[#EA580C] animate-ping-slow opacity-30 ${isCallPulsing ? "scale-125" : ""}`}
        />
        <Phone className="w-5 h-5 text-white relative z-10" />
        <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#16A34A] rounded-full border-2 border-white" />
      </a>

      {/* ========== HERO SECTION ========== */}
      <section className="relative h-[calc(100svh-56px)] mt-14 flex flex-col lg:flex-row overflow-hidden">
        {/* LEFT */}
        <div className="relative w-full lg:w-[42%] bg-[#0A1628] flex items-center min-h-[50vh] lg:min-h-screen">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:16px_16px]" />
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#EA580C]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#EA580C]/5 rounded-full blur-3xl" />
          <div className="absolute right-0 top-20 bottom-20 w-px bg-gradient-to-b from-transparent via-[#EA580C]/30 to-transparent hidden lg:block" />

          <div
            className={`relative w-full px-6 sm:px-10 lg:px-12 py-10 sm:py-12 lg:py-14 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center mr-5 gap-2 text-white/30 hover:text-white/60 mb-6 lg:mb-8 text-xs group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Back</span>
            </button>

            <div className="inline-flex items-center gap-2 bg-[#EA580C]/10 border border-[#EA580C]/20 px-3 py-1.5 rounded-full mb-4 lg:mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EA580C] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EA580C]" />
              </span>

              <span className="text-[#EA580C] text-[10px] font-bold uppercase tracking-widest">
                Home Visits Available
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white leading-tight mb-3 lg:mb-4">
              Home
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FB923C] to-[#FDBA74]">
                Physiotherapy
              </span>
              Services
            </h1>

            <p className="text-white/50 text-sm sm:text-base mb-4 lg:mb-5 max-w-sm">
              Professional physiotherapy delivered to your doorstep —
              <span className="text-white/70 font-medium">
                {" "}
                recover, restore, and regain your mobility
              </span>
              .
            </p>

            <div className="flex gap-4 mb-4 lg:mb-5">
              {[
                { num: "50+", label: "Physiotherapists" },
                { num: "8K+", label: "Sessions Done" },
                { num: "24/7", label: "Booking" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-white font-bold text-lg">{stat.num}</p>
                  <p className="text-white/30 text-[10px] uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+919442659377"
                className={`flex items-center justify-center gap-2 px-5 py-3 bg-[#EA580C] text-white font-bold text-sm rounded-xl hover:bg-[#C2410C] transition ${
                  isCallPulsing ? "ring-4 ring-[#EA580C]/20" : ""
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

          {/* DESKTOP */}
          <div className="hidden lg:grid grid-cols-3 grid-rows-2 gap-1 h-full p-1">
            {heroGallery.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveImage(i)}
                className={`relative cursor-pointer overflow-hidden transition ${
                  i === activeImage
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

          {/* Live Indicator */}
          <div className="hidden lg:flex absolute top-6 right-6 items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10">
            <span className="w-2 h-2 bg-[#16A34A] rounded-full animate-pulse" />
            <span className="text-white/60 text-[10px] font-medium">
              Live • Physiotherapists Available
            </span>
          </div>
        </div>
      </section>

      {/* ========== PHYSIOTHERAPY SECTION (EXACT CONTENT FROM DOC) ========== */}
      <section id="physiotherapy-services" className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E3A8A] tracking-tight">
              Physiotherapy at Home
            </h2>
            <div className="w-20 h-1 bg-[#EA580C] mx-auto mt-4 rounded-full" />
          </div>

          {/* Professional Style Introduction Card */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl shadow-lg border border-orange-100 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#EA580C] via-[#FB923C] to-[#FDBA74]" />
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-[#EA580C]" />
              </div>
              <div className="p-8 sm:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#EA580C]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Dumbbell className="w-6 h-6 text-[#EA580C]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1E3A8A]">
                      Convenient & Cost-Effective Care
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Recover faster in the comfort of your home
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                  {physioIntro}
                </p>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  {physioSecondPara}
                </p>
              </div>
            </div>
          </div>

          {/* Ailments Treated Section */}
          <div className="max-w-5xl mx-auto mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1E3A8A] text-center mb-6">
              We Offer Services For:
            </h3>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {ailmentsTreated.map((ailment, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#EA580C] flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{ailment}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Treatment Plan Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1E3A8A] text-center mb-6">
              Our Treatment Plan Includes
            </h3>
            <div className="bg-gradient-to-r from-[#F8FAFC] to-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {treatmentPlan.map((treatment, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#EA580C]/10 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#EA580C]" />
                    </div>
                    <span className="text-gray-700 text-sm">{treatment}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 text-[11px] mt-3">
              Available 24/7 • Skilled Physiotherapists • Home Visits
            </p>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US SECTION ========== */}
      <section
        id="why-us"
        className="py-16 lg:py-20 bg-gradient-to-br from-orange-50 via-white to-amber-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#1E3A8A] tracking-tight">
              Why Choose Our Home Physiotherapy
            </h2>
            <div className="w-20 h-1 bg-[#EA580C] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Home,
                title: "Care at Your Doorstep",
                description:
                  "Convenient physiotherapy sessions in the comfort of your home — no travel, no waiting.",
              },
              {
                icon: BadgeCheck,
                title: "Skilled Physiotherapists",
                description:
                  "Highly skilled & experienced physiotherapists dedicated to your recovery journey.",
              },
              {
                icon: Timer,
                title: "Regular Home Visits",
                description:
                  "Regular home visits providing preventive, diagnostic & therapeutic care as needed.",
              },
              {
                icon: Award,
                title: "Cost-Effective Care",
                description:
                  "Cost-effective approach to receiving quality physiotherapy without hospital expenses.",
              },
              {
                icon: Heart,
                title: "Compassionate Approach",
                description:
                  "Compassionate care for chronic ailments, post-surgery recovery & rehabilitation.",
              },
              {
                icon: Activity,
                title: "Faster Recovery",
                description:
                  "Faster recovery from injury, surgery & chronic conditions with personalized plans.",
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
                { icon: Users, value: "50+", label: "Physiotherapists" },
                { icon: Clock, value: "24/7", label: "Booking Available" },
                { icon: Shield, value: "100%", label: "Verified Experts" },
                { icon: Timer, value: "2hrs", label: "Response Time" },
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
          <div className="mt-8 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-4 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-100">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#EA580C]" />
                <span className="text-[#EA580C] text-xs sm:text-sm font-semibold">
                  Verified Experts
                </span>
              </div>
              <div className="w-px h-4 bg-gray-200" />
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#EA580C]" />
                <span className="text-[#EA580C] text-xs sm:text-sm font-semibold">
                  Skilled & Experienced
                </span>
              </div>
              <div className="w-px h-4 bg-gray-200" />
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-[#EA580C]" />
                <span className="text-[#EA580C] text-xs sm:text-sm font-semibold">
                  Compassionate Care
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-[#1E3A8A] to-[#EA580C] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:16px_16px]" />
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
            Ready to Start Your Physiotherapy?
          </h2>
          <p className="text-white/70 text-base mb-6">
            A skilled physiotherapist at your doorstep — call now to book a
            session.
          </p>
          <a
            href="tel:+919442659377"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1E3A8A] font-bold text-base rounded-xl hover:bg-gray-100 transition-all hover:scale-[1.02] shadow-xl"
          >
            <Phone className="w-5 h-5" />
            +91 94426 59377
          </a>
          <p className="text-white/50 text-xs mt-4">
            Available 24/7 • Free Consultation • Home Visits
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

export default PhysiotherapyPage;
