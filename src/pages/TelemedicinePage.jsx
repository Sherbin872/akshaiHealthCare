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
  Video,
  MonitorSmartphone,
  Lock,
  Globe,
} from "lucide-react";

const TelemedicinePage = () => {
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
      alt: "Virtual doctor consultation",
      position: "object-[center_20%]",
    },
    {
      src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600",
      alt: "Online medical consultation",
      position: "object-center",
    },
    {
      src: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600",
      alt: "Telemedicine platform",
      position: "object-[center_30%]",
    },
    {
      src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600",
      alt: "Digital healthcare",
      position: "object-center",
    },
    {
      src: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600",
      alt: "Remote patient care",
      position: "object-center",
    },
  ];

  // ========== EXACT CONTENT FROM DOCUMENT ==========
  // Telemedicine main paragraphs (exact from doc)
  const telemedicineIntro =
    "Shree Akshai Healthcare provide the best medical care to the remote corners of the world, to the people who cannot afford the treatment due to their inability to travel, cost, unawareness etc. Telemedicine is simply defined as, 'the remote delivery of healthcare services'. Our Telemedicine platform leverages technology to connect patients with our team of experienced healthcare professionals. This virtual approach to healthcare provides a wide range of benefits, making it easier than ever to access medical consultations and advice.";

  // Key Features from document (exactly as in the doc)
  const keyFeatures = [
    {
      title: "Remote Consultations",
      description:
        "Through our secure and user-friendly platform, patients can schedule remote consultations with our healthcare providers. These virtual visits allow for efficient diagnosis, treatment, and medical advice.",
    },
    {
      title: "Accessible Care",
      description:
        "Telemedicine breaks down geographical barriers, ensuring that individuals in remote areas or those with limited mobility can receive timely medical attention.",
    },
    {
      title: "Expert Medical Team",
      description:
        "Our telemedicine platform connects you with our team of skilled physicians, specialists, and healthcare providers who can address various medical concerns.",
    },
    {
      title: "Convenience",
      description:
        "Telemedicine appointments can be scheduled at a time that suits your schedule, eliminating the need for travel and long waiting times.",
    },
    {
      title: "Privacy and Security",
      description:
        "We prioritize the security of your medical information. Our platform adheres to strict privacy standards to protect your confidentiality.",
    },
    {
      title: "Prescription Services",
      description:
        "When appropriate, our healthcare providers can electronically send prescriptions to your preferred pharmacy for your convenience.",
    },
    {
      title: "Follow-Up Care",
      description:
        "Telemedicine isn't just about one-time consultations. We offer follow-up care and ongoing support to monitor your progress and adjust treatment plans as needed.",
    },
  ];

  // Six telemedicine categories with exact content
  const telemedicineCategories = [
    {
      title: "Remote Consultations",
      emoji: "💻",
      color: "#3B82F6",
      bgLight: "bg-[#EFF6FF]",
      description:
        "Secure video consultations with experienced healthcare providers for efficient diagnosis, treatment, and medical advice.",
      fullContent:
        "Through our secure and user-friendly platform, patients can schedule remote consultations with our healthcare providers. These virtual visits allow for efficient diagnosis, treatment, and medical advice from the comfort of your home.",
    },
    {
      title: "Accessible Care",
      emoji: "🌍",
      color: "#16A34A",
      bgLight: "bg-[#F0FDF4]",
      description:
        "Breaking geographical barriers to reach remote corners — ensuring timely medical attention for all.",
      fullContent:
        "Telemedicine breaks down geographical barriers, ensuring that individuals in remote areas or those with limited mobility can receive timely medical attention. We bring healthcare to those who cannot travel due to cost, inability, or unawareness.",
    },
    {
      title: "Expert Medical Team",
      emoji: "👨‍⚕️",
      color: "#9333EA",
      bgLight: "bg-[#FAF5FF]",
      description:
        "Connect with our team of skilled physicians, specialists, and healthcare providers addressing various medical concerns.",
      fullContent:
        "Our telemedicine platform connects you with our team of skilled physicians, specialists, and healthcare providers who can address various medical concerns with expertise and compassion.",
    },
    {
      title: "Convenience & Scheduling",
      emoji: "⏰",
      color: "#EA580C",
      bgLight: "bg-[#FFF7ED]",
      description:
        "Telemedicine appointments at your convenience — no travel, no waiting rooms, just quality care.",
      fullContent:
        "Telemedicine appointments can be scheduled at a time that suits your schedule, eliminating the need for travel and long waiting times. Healthcare comes to you, wherever you are.",
    },
    {
      title: "Privacy & Security",
      emoji: "🔒",
      color: "#DC2626",
      bgLight: "bg-[#FEF2F2]",
      description:
        "Your medical information is fully protected. Our platform adheres to strict privacy standards.",
      fullContent:
        "We prioritize the security of your medical information. Our platform adheres to strict privacy standards to protect your confidentiality. Every consultation is secure and private.",
    },
    {
      title: "Prescription & Follow-Up Care",
      emoji: "📋",
      color: "#0891B2",
      bgLight: "bg-[#ECFEFF]",
      description:
        "Electronic prescriptions and ongoing follow-up care to monitor progress and adjust treatment plans.",
      fullContent:
        "When appropriate, our healthcare providers can electronically send prescriptions to your preferred pharmacy. We also offer follow-up care and ongoing support to monitor your progress and adjust treatment plans as needed.",
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
              <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full animate-pulse" />
              <span className="text-white/60 text-xs font-medium">
                Telemedicine Services
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
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#3B82F6] text-white text-[11px] font-bold rounded-lg hover:bg-[#2563EB] transition-all"
              >
                <Video className="w-3.5 h-3.5" />
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ========== FLOATING CALL BUTTON ========== */}
      <a
        href="tel:+919442659377"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-[#3B82F6] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300"
        style={{ boxShadow: "0 8px 25px rgba(59,130,246,0.4)" }}
      >
        <div
          className={`absolute inset-0 rounded-full bg-[#3B82F6] animate-ping-slow opacity-30 ${isCallPulsing ? "scale-125" : ""}`}
        />
        <Video className="w-5 h-5 text-white relative z-10" />
        <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-[#16A34A] rounded-full border-2 border-white" />
      </a>

      {/* ========== HERO SECTION ========== */}
      <section className="relative h-[calc(100svh-56px)] mt-14 flex flex-col lg:flex-row overflow-hidden">
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[42%] bg-[#0A1628] flex items-center relative min-h-[50vh] lg:min-h-screen">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:16px_16px]" />
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#3B82F6]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#3B82F6]/5 rounded-full blur-3xl" />

          <div className="relative w-full px-6 sm:px-10 lg:px-12 py-10 sm:py-12 lg:py-14">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-white/40 hover:text-white mr-5 mb-6 lg:mb-8 text-xs group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Back</span>
            </button>

            <div className="inline-flex items-center gap-2 bg-[#3B82F6]/10 border border-[#3B82F6]/20 px-3 py-1.5 rounded-full mb-4 lg:mb-5">
              <span className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse" />
              <span className="text-[#3B82F6] text-[10px] font-bold uppercase tracking-widest">
                Virtual Consultations 24/7
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white leading-tight mb-3 lg:mb-4">
              Tele
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] to-[#93C5FD]">
                Medicine
              </span>
              Services
            </h1>

            <p className="text-white/60 text-sm sm:text-base mb-4 lg:mb-5 max-w-md">
              Remote delivery of healthcare services —
              <span className="text-white/80 font-medium">
                {" "}
                quality medical care from the comfort of your home
              </span>
              .
            </p>

            <div className="flex gap-6 mb-4 lg:mb-5">
              {[
                { num: "50+", label: "Specialists" },
                { num: "20K+", label: "Consultations" },
                { num: "24/7", label: "Access" },
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-white font-bold text-lg">{stat.num}</p>
                  <p className="text-white/40 text-[10px] uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+919442659377"
                className={`flex items-center justify-center gap-2 px-5 py-3 bg-[#3B82F6] text-white font-bold text-sm rounded-xl hover:bg-[#2563EB] transition ${
                  isCallPulsing ? "ring-4 ring-[#3B82F6]/20" : ""
                }`}
              >
                <Video className="w-4 h-4" />
                Book Consultation
              </a>

              <button
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center justify-center gap-2 px-5 py-3 border border-white/20 text-white text-sm rounded-xl hover:bg-white/10 transition"
              >
                View Features <ChevronRight className="w-4 h-4" />
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
                    ? "col-span-2 row-span-2 ring-2 ring-[#3B82F6]/50"
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
              "Consultation from my village — amazing!"
            </p>
            <p className="text-white/40 text-[10px] mt-1">— Ganesh R.</p>
          </div>
        </div>
      </section>

      {/* ========== TELEMEDICINE SECTION (EXACT CONTENT FROM DOC) ========== */}
      <section id="telemedicine-services" className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E3A8A] tracking-tight">
              Telemedicine Services
            </h2>
            <div className="w-20 h-1 bg-[#3B82F6] mx-auto mt-4 rounded-full" />
          </div>

          {/* Professional Style Introduction Card */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#93C5FD]" />
              <div className="absolute top-6 right-6 opacity-10">
                <Globe className="w-16 h-16 text-[#3B82F6]" />
              </div>
              <div className="p-8 sm:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#3B82F6]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Video className="w-6 h-6 text-[#3B82F6]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1E3A8A]">
                      Remote Delivery of Healthcare Services
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Connecting patients with quality medical care from
                      anywhere
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  {telemedicineIntro}
                </p>
              </div>
            </div>
          </div>

          {/* Key Features Grid - Exact from document */}
          <div className="max-w-5xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-[#1E3A8A] text-center mb-8">
              Key Features of Our Telemedicine Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {keyFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition-all"
                >
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#3B82F6]/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-[#3B82F6]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1E3A8A] text-sm">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-1">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Inhouse Medicare's Telemedicine Services - Exact from doc */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-6">
                Why Choose Shree Akshai Healthcare's Telemedicine Services?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Experience",
                    desc: "With years of experience in healthcare, our team is well-equipped to provide expert medical care via telemedicine.",
                  },
                  {
                    title: "Patient-Centered",
                    desc: "We put your needs first, ensuring that you receive the care and attention you deserve from the comfort of your home.",
                  },
                  {
                    title: "Convenience",
                    desc: "Telemedicine offers unparalleled convenience, allowing you to access healthcare without the hassle of travel or long waiting rooms.",
                  },
                  {
                    title: "Timely Care",
                    desc: "Telemedicine provides timely access to medical professionals, reducing the time between symptom onset and treatment.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-[#93C5FD]" />
                      <h4 className="font-bold text-sm">{item.title}</h4>
                    </div>
                    <p className="text-white/80 text-xs sm:text-sm">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 text-[11px] mt-3">
              Available 24/7 • Secure Platform • Expert Medical Team
            </p>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US SECTION ========== */}
      <section
        id="why-us"
        className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#1E3A8A] tracking-tight">
              Why Choose Our Telemedicine Platform
            </h2>
            <div className="w-20 h-1 bg-[#3B82F6] mx-auto mt-4 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Video,
                title: "Secure Remote Consultations",
                description:
                  "Secure remote consultations via user-friendly platform with efficient diagnosis and treatment.",
              },
              {
                icon: Globe,
                title: "Accessible Care For All",
                description:
                  "Breaking geographical barriers to reach remote corners and those with limited mobility.",
              },
              {
                icon: BadgeCheck,
                title: "Expert Medical Team",
                description:
                  "Skilled physicians, specialists, and healthcare providers addressing various medical concerns.",
              },
              {
                icon: Clock,
                title: "Ultimate Convenience",
                description:
                  "Flexible scheduling — no travel, no waiting rooms, healthcare at your fingertips.",
              },
              {
                icon: Lock,
                title: "Privacy & Security",
                description:
                  "Strict confidentiality standards protecting your medical information at all times.",
              },
              {
                icon: MonitorSmartphone,
                title: "E-Prescriptions & Follow-Up",
                description:
                  "Electronic prescriptions to your pharmacy and ongoing follow-up care for continued support.",
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
                { icon: Users, value: "50+", label: "Specialists Online" },
                { icon: Globe, value: "Remote", label: "Access Anywhere" },
                { icon: Lock, value: "100%", label: "Secure & Private" },
                { icon: Clock, value: "24/7", label: "Scheduling" },
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
                <Shield className="w-4 h-4" style={{ color: "#003399" }} />
                <span
                  className="text-xs sm:text-sm font-semibold"
                  style={{ color: "#003399" }}
                >
                  Secure Platform
                </span>
              </div>
              <div className="w-px h-4 bg-gray-200 hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4" style={{ color: "#990100" }} />
                <span
                  className="text-xs sm:text-sm font-semibold"
                  style={{ color: "#990100" }}
                >
                  Expert Physicians
                </span>
              </div>
              <div className="w-px h-4 bg-gray-200 hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4" style={{ color: "#003399" }} />
                <span
                  className="text-xs sm:text-sm font-semibold"
                  style={{ color: "#003399" }}
                >
                  Patient-Centered Care
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:16px_16px]" />
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
            Ready for a Virtual Consultation?
          </h2>
          <p className="text-white/70 text-base mb-6">
            Connect with our expert medical team from anywhere — book your
            telemedicine appointment now.
          </p>
          <a
            href="tel:+919442659377"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1E3A8A] font-bold text-base rounded-xl hover:bg-gray-100 transition-all hover:scale-[1.02] shadow-xl"
          >
            <Video className="w-5 h-5" />
            +91 94426 59377
          </a>
          <p className="text-white/50 text-xs mt-4">
            Available 24/7 • Secure Platform • Expert Medical Team
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

export default TelemedicinePage;
