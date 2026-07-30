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
  DollarSign,
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
} from "lucide-react";

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
    {
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600",
      alt: "Doctor consultation at home",
      position: "object-[center_20%]",
    },
    {
      src: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600",
      alt: "Doctor checking patient",
      position: "object-center",
    },
    {
      src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600",
      alt: "Elderly consultation",
      position: "object-[center_30%]",
    },
    {
      src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600",
      alt: "Medical consultation",
      position: "object-center",
    },
    {
      src: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=600",
      alt: "Home healthcare",
      position: "object-center",
    },
  ];

  // ========== EXACT CONTENT FROM DOCUMENT ==========
  // Home Doctor Consultation main paragraph (exact from doc)
  const homeDoctorMainContent =
    "When you are tired of making frequent trips to hospitals, dealing with long wait times, or facing the hassle of traveling, you can consult with our doctors. Akshai Healthcare Services enables you to access doctor consultations from the comfort of your home. The service is provided to clients who are unable to leave their homes due to any reason. We connect patients with qualified doctors in and around your region. We are committed to deliver the best and reaching out to individuals needing prompt health advice.";

  const secondParagraph =
    "Our team of qualified and experienced doctors will attend to you in the comfort of your own home. Our doctors visit your home while emergency or else for a daily / monthly/ weekly check-up based on your needs. Home doctor are available for all kind of illness, such as Geriatric care, Preventive care, Specialist consultation, Medication Management, Diabetic counselling, Wound care, Palliative care, Routine medical check-up, Fever, Infections & Viral Illnesses, Respiratory Problems (Asthma, COPD, Breathlessness), Hypertension & Heart-Related Issues, Arthritis & Joint Pains, Stroke Follow-up Care, Dementia & Alzheimer's Support, General Weakness & Nutritional Deficiencies.";

  // Four main service sections (exact from document's "Our Services" section)
  const consultationCategories = [
    {
      title: "Personalised Treatment",
      icon: UserCheck,
      emoji: "🎯",
      color: "#DC2626",
      bgLight: "bg-[#FEF2F2]",
      description:
        "Personalised approach promoting confidence between patients and healthcare professionals.",
      content:
        "Our personalised approach promotes confidence between patients and healthcare professionals and assures a positive effect on patients' physical and emotional well-being, allowing for a better recovery.",
    },
    {
      title: "No More Waiting Time",
      icon: Timer,
      emoji: "⏰",
      color: "#3B82F6",
      bgLight: "bg-[#EFF6FF]",
      description:
        "Skip long hospital waiting periods with convenient home visits.",
      content:
        "The waiting period for the doctor's consultation at the hospital could be long in spite of the appointment. A doctor's home visit might save time and allow you to see the doctor when it is convenient for you.",
    },
    {
      title: "Cost-Effective Treatment",
      icon: Award,
      emoji: "💰",
      color: "#16A34A",
      bgLight: "bg-[#F0FDF4]",
      description:
        "Economical healthcare solution saving travel and related expenses.",
      content:
        "Considering the travel expenses, having a doctor come to your house would be far more economical, and the elderly could receive superior care at home.",
    },
    {
      title: "No Need to Travel",
      icon: Home,
      emoji: "🏠",
      color: "#9333EA",
      bgLight: "bg-[#FAF5FF]",
      description:
        "Easy appointment booking with treatment in familiar home surroundings.",
      content:
        "Travelling in traffic for doctor's visits and health check-ups may be challenging for the elderly. They can simply fix an appointment on-call and be treated at home.",
    },
  ];

  // Conditions treated list (exact from doc)
  const conditionsTreated = [
    "Geriatric care",
    "Preventive care",
    "Specialist consultation",
    "Medication Management",
    "Diabetic counselling",
    "Wound care",
    "Palliative care",
    "Routine medical check-up",
    "Fever, Infections & Viral Illnesses",
    "Respiratory Problems (Asthma, COPD, Breathlessness)",
    "Hypertension & Heart-Related Issues",
    "Arthritis & Joint Pains",
    "Stroke Follow-up Care",
    "Dementia & Alzheimer's Support",
    "General Weakness & Nutritional Deficiencies",
  ];

  const highlights = [
    {
      icon: GraduationCap,
      text: "Qualified & experienced doctors for all health needs",
    },
    { icon: Timer, text: "Doctor visits your home — no waiting, no travel" },
    { icon: Shield, text: "Personalised treatment plans & follow-up care" },
    {
      icon: Award,
      text: "Cost-effective care — saves travel & hospital expenses",
    },
    { icon: Heart, text: "Compassionate geriatric & palliative care at home" },
    { icon: Home, text: "Complete consultation in familiar home environment" },
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
              <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full animate-pulse" />
              <span className="text-white/60 text-xs font-medium">
                Home Doctor Consultation
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
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#3B82F6] text-white text-[11px] font-bold rounded-lg hover:bg-[#2563EB] transition-all"
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
        className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-[#3B82F6] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300"
        style={{ boxShadow: "0 8px 25px rgba(59,130,246,0.4)" }}
      >
        <div
          className={`absolute inset-0 rounded-full bg-[#3B82F6] animate-ping-slow opacity-30 ${isCallPulsing ? "scale-125" : ""}`}
        />
        <Phone className="w-5 h-5 text-white relative z-10" />
        <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#16A34A] rounded-full border-2 border-white" />
      </a>

      {/* ========== HERO — UNIQUE SPLIT LAYOUT ========== */}
      <section className="relative h-[calc(100svh-56px)] mt-14 flex flex-col lg:flex-row overflow-hidden">
        {/* LEFT - Content Side */}
        <div className="w-full lg:w-[42%] bg-[#0A1628] flex items-center relative min-h-[50vh] lg:min-h-screen">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:16px_16px]" />
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#3B82F6]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#3B82F6]/5 rounded-full blur-3xl" />

          <div className="relative w-full px-5 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center mr-5 gap-2 text-white/40 hover:text-white mb-4 lg:mb-6 text-xs group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Back</span>
            </button>

            <div className="inline-flex items-center gap-2 bg-[#3B82F6]/10 border border-[#3B82F6]/20 px-3 py-1.5 rounded-full mb-3 lg:mb-4">
              <span className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse" />
              <span className="text-[#3B82F6] text-[10px] font-bold uppercase tracking-widest">
                24/7 Home Visits Available
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white leading-tight mb-2 lg:mb-3">
              Home
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#93C5FD]">
                Doctor
              </span>
              Consultation
            </h1>

            <p className="text-white/60 text-sm sm:text-base mb-4 lg:mb-5 max-w-md">
              Qualified doctors visiting your home — no travel, no waiting,
              personalized care.
            </p>

            <div className="flex gap-6 mb-4 lg:mb-5">
              {[
                { num: "100+", label: "Doctors" },
                { num: "15K+", label: "Consultations" },
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
                className={`flex items-center justify-center gap-2 px-5 py-3 bg-[#3B82F6] text-white font-bold text-sm rounded-xl hover:bg-[#2563EB] transition ${
                  isCallPulsing ? "ring-4 ring-[#3B82F6]/20" : ""
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

        {/* RIGHT - Image Section */}
        <div className="w-full lg:w-[58%] relative bg-[#0F1D4A] h-[50vh] sm:h-[55vh] lg:h-[100svh] overflow-hidden">
          {/* MOBILE */}
          <div className="lg:hidden h-full">
            <div
              className="relative w-full h-full overflow-hidden"
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
            >
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

          {/* DESKTOP - Grid */}
          <div
            className="hidden lg:grid grid-cols-3 grid-rows-2 gap-1 h-full p-1"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {heroGallery.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveImage(i)}
                className={`relative cursor-pointer overflow-hidden transition ${
                  i === activeImage
                    ? "col-span-2 row-span-2 ring-2 ring-[#3B82F6]/50"
                    : "opacity-50 hover:opacity-80"
                }`}
              >
                <img
                  src={img.src}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  style={{ objectPosition: img.position || "center" }}
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

      {/* ========== HOME DOCTOR CONSULTATION SECTION (EXACT CONTENT FROM DOC) ========== */}
      <section id="home-doctor-services" className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E3A8A]">
              Home Doctor Consultation
            </h2>
          </div>

          {/* EXACT PARAGRAPHS FROM DOCUMENT */}
          {/* Professional Style Introduction Card - Similar to Equipment Rentals page */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#93C5FD]" />
              <div className="absolute top-6 right-6 opacity-10">
                <Stethoscope className="w-16 h-16 text-[#3B82F6]" />
              </div>
              <div className="p-8 sm:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#3B82F6]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <UserCheck className="w-6 h-6 text-[#3B82F6]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1E3A8A]">
                      Quality Medical Care at Your Home
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Qualified doctors • No waiting time • Cost-effective
                      treatment
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                  {homeDoctorMainContent}
                </p>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  {secondParagraph}
                </p>
                {/* Key highlights at the bottom */}
                <div className="mt-6 flex flex-wrap gap-4 pt-4 border-t border-blue-200">
                  {[
                    { icon: Clock, text: "No Waiting Time" },
                    { icon: DollarSign, text: "Cost-Effective" },
                    { icon: Home, text: "Home Comfort" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-gray-500"
                    >
                      <item.icon className="w-3.5 h-3.5 text-[#3B82F6]" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CONDITIONS TREATED SECTION */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1E3A8A] text-center mb-6">
              Conditions We Treat at Home
            </h3>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {conditionsTreated.map((condition, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#3B82F6] flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{condition}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-[#1E3A8A]">
              Our Services
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Click on any category below to see detailed information
            </p>
          </div>

          {/* FOUR MAIN DROPDOWN SECTIONS - EXACT CONTENT FROM DOC'S "OUR SERVICES" */}

          <div className="space-y-4 max-w-3xl mx-auto">
            {consultationCategories.map((category, index) => {
              // Alternate between logo colors
              const logoColors = ["#003399", "#990100"];
              const color = logoColors[index % 2];

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleCategory(index)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left group"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
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
                    className={`transition-all duration-400 ease-in-out overflow-hidden ${expandedCategory === index ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                      <div
                        className="rounded-xl p-5 sm:p-6"
                        style={{ backgroundColor: color + "06" }}
                      >
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                          {category.content}
                        </p>
                        <div className="mt-5 pt-4 border-t border-gray-200 flex items-center justify-between flex-wrap gap-3">
                          <span className="text-[11px] text-gray-500 flex items-center gap-1.5">
                            <Timer
                              className="w-3.5 h-3.5"
                              style={{ color: color }}
                            />
                            Available 24/7 • Visit within hours
                          </span>
                          <a
                            href="tel:+919443608223"
                            className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 text-white"
                            style={{ backgroundColor: color }}
                          >
                            <Phone className="w-3 h-3" />
                            Call for {category.title}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-400 text-[11px] mt-3">
              Available 24/7 • Qualified Doctors • Prompt Home Visits
            </p>
          </div>
        </div>
      </section>

      {/* ========== HIGHLIGHTS + WHY US ========== */}
      <section
        id="why-us"
        className="py-14 lg:py-16 bg-gradient-to-b from-[#F8FAFC] to-white relative overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#3B82F6]/5 rounded-full blur-3xl animate-blob" />
          <div
            className="absolute bottom-0 left-0 w-64 h-64 bg-[#16A34A]/5 rounded-full blur-3xl animate-blob"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#9333EA]/3 rounded-full blur-3xl animate-blob"
            style={{ animationDelay: "4s" }}
          />

          {/* Floating particles */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full animate-float-particle"
              style={{
                left: `${5 + Math.random() * 90}%`,
                top: `${5 + Math.random() * 90}%`,
                backgroundColor: ["#3B82F6", "#16A34A", "#9333EA", "#EA580C"][
                  i % 4
                ],
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
                opacity: 0.25,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E3A8A] tracking-tight">
              Why Choose Our Home Doctor Service
            </h2>
          </div>

          {/* Highlights Grid */}

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
            {[
              {
                icon: GraduationCap,
                heading: "Qualified & Experienced",
                text: "Qualified & experienced doctors for all health needs",
                number: "01",
              },
              {
                icon: Timer,
                heading: "No Waiting Time",
                text: "Doctor visits your home — no waiting, no travel",
                number: "02",
              },
              {
                icon: ClipboardCheck,
                heading: "Personalised Treatment",
                text: "Personalised treatment plans & follow-up care",
                number: "03",
              },
              {
                icon: Award,
                heading: "Cost-Effective Care",
                text: "Cost-effective care — saves travel & hospital expenses",
                number: "04",
              },
              {
                icon: Heart,
                heading: "Geriatric & Palliative Care",
                text: "Compassionate geriatric & palliative care at home",
                number: "05",
              },
              {
                icon: Home,
                heading: "Home Comfort",
                text: "Complete consultation in familiar home environment",
                number: "06",
              },
            ].map((h, i) => {
              // Alternate between logo colors
              const logoColors = ["#003399", "#990100"];
              const color = logoColors[i % 2];

              return (
                <div
                  key={i}
                  className="group relative bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-500 hover:-translate-y-2 cursor-default overflow-visible"
                >
                  {/* Hover gradient overlay */}
                  <div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${color}06 0%, ${color === "#003399" ? "#990100" : "#003399"}04 100%)`,
                    }}
                  />

                  <div className="relative mb-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative z-10"
                      style={{ backgroundColor: color + "15" }}
                    >
                      <h.icon
                        className="w-7 h-7 group-hover:rotate-6 transition-transform duration-500"
                        style={{ color: color }}
                      />
                    </div>
                    {/* Orbiting ring */}
                    <div
                      className="absolute inset-0 w-14 h-14 rounded-2xl border-2 border-dashed animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ borderColor: color + "30" }}
                    />
                    {/* Glow */}
                    <div
                      className="absolute inset-0 w-14 h-14 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"
                      style={{ backgroundColor: color + "15" }}
                    />
                  </div>

                  <div className="relative z-10">
                    <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-2 transition-colors duration-300">
                      {h.heading}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {h.text}
                    </p>
                  </div>

                  {/* Bottom accent bar */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                    style={{ backgroundColor: color }}
                  />

                  {/* Number badge - fixed overflow */}
                  <div
                    className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full flex items-center justify-center text-white text-[11px] font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100 z-20"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${color}, ${color === "#003399" ? "#002080" : "#7A0100"})`,
                    }}
                  >
                    {h.number}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats Counter Row */}

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { icon: Users, value: "100+", label: "Qualified Doctors" },
                { icon: Clock, value: "24/7", label: "Availability" },
                { icon: Shield, value: "100%", label: "Verified Credentials" },
                { icon: Timer, value: "2hrs", label: "Response Time" },
              ].map((stat, i) => {
                // Alternate between logo colors
                const logoColors = ["#003399", "#990100"];
                const color = logoColors[i % 2];

                return (
                  <div key={i} className="text-center group cursor-default">
                    <div className="relative w-16 h-16 mx-auto mb-3">
                      <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
                        <circle
                          cx="32"
                          cy="32"
                          r="28"
                          fill="none"
                          stroke="#F1F5F9"
                          strokeWidth="4"
                        />
                        <circle
                          cx="32"
                          cy="32"
                          r="28"
                          fill="none"
                          stroke={color}
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeDasharray={`${(175 * (i + 1)) / 4} 175`}
                          className="animate-draw-circle"
                          style={{ animationDelay: `${i * 0.5}s` }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                          style={{ backgroundColor: color + "15" }}
                        >
                          <stat.icon
                            className="w-5 h-5"
                            style={{ color: color }}
                          />
                        </div>
                      </div>
                      <div
                        className="absolute inset-0 rounded-full border-2 animate-ping-slow opacity-0 group-hover:opacity-100"
                        style={{
                          borderColor: color + "40",
                          animationDelay: `${i * 0.3}s`,
                        }}
                      />
                    </div>
                    <p
                      className="text-xl sm:text-2xl font-black"
                      style={{ color: color }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-[11px] sm:text-xs text-gray-500 font-medium">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Trust Line */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-4 bg-[#F0FDF4] rounded-full px-6 py-3 shadow-sm">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#16A34A] animate-bounce-subtle" />
                <span className="text-[#16A34A] text-xs sm:text-sm font-semibold">
                  Qualified Doctors
                </span>
              </div>
              <div className="w-px h-4 bg-[#16A34A]/20" />
              <div className="flex items-center gap-1.5">
                <Award
                  className="w-4 h-4 text-[#16A34A] animate-bounce-subtle"
                  style={{ animationDelay: "0.3s" }}
                />
                <span className="text-[#16A34A] text-xs sm:text-sm font-semibold">
                  Verified Credentials
                </span>
              </div>
              <div className="w-px h-4 bg-[#16A34A]/20" />
              <div className="flex items-center gap-1.5">
                <Heart
                  className="w-4 h-4 text-[#16A34A] animate-bounce-subtle"
                  style={{ animationDelay: "0.6s" }}
                />
                <span className="text-[#16A34A] text-xs sm:text-sm font-semibold">
                  Compassionate Care
                </span>
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
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
            Ready for a Home Doctor Consultation?
          </h2>
          <p className="text-white/50 text-sm mb-5">
            A qualified doctor at your doorstep within hours — call now.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+919443608223"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#DC2626] text-white font-bold rounded-xl hover:bg-[#B91C1C] transition-all hover:scale-[1.03] shadow-lg"
            >
              <Phone className="w-4 h-4" /> +91 94436 08223
            </a>
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
