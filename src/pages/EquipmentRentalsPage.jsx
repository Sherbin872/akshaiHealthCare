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
  Truck,
  Wrench,
  DollarSign,
  Settings,
  TrendingDown,
  Calendar,
  ThumbsUp,
  Wind, // ADD THIS
  HeartPulse, // ADD THIS
  Moon,
} from "lucide-react";

const EquipmentRentalsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCarousel, setActiveCarousel] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isCallPulsing, setIsCallPulsing] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const sectionRef = useRef(null);

  // Mobile responsive
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Hero image gallery
  const heroGallery = [
    {
      src: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600",
      alt: "Medical equipment setup",
      position: "object-[center_20%]",
    },
    {
      src: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600",
      alt: "Hospital bed at home",
      position: "object-center",
    },
    {
      src: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600",
      alt: "Oxygen concentrator",
      position: "object-[center_30%]",
    },
    {
      src: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600",
      alt: "Wheelchair assistance",
      position: "object-center",
    },
    {
      src: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600",
      alt: "Medical equipment",
      position: "object-center",
    },
  ];

  const visibleGallery = isMobile ? heroGallery.slice(0, 3) : heroGallery;

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % visibleGallery.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, visibleGallery.length]);

  // ========== EXACT CONTENT FROM DOCUMENT ==========
  // Equipment Rental main paragraphs (exact from doc)
  const equipmentIntro =
    "Medical equipment is fundamental to modern healthcare delivery, enabling accurate diagnosis, effective treatment, continuous monitoring, and enhanced patient care. It is prudent to rent any product which is going to be used temporarily instead of buying and owning it. The most commonly used medical equipment's for Home Care of Patients are the wheel chair, commode wheel chair, oxygen concentrator, BiPAP, CPAP, back rests, fowler hospital beds, semi fowler beds and mattress.";

  const equipmentBenefits =
    "Shree Akshai Healthcare is a medical equipment supplier that provides medical equipment on rent near you. Renting medical equipment from Shree Akshai Healthcare offers convenience and peace of mind, helping patients focus on their recovery in less time. It provides flexibility in terms of duration, allowing patients to rent durable medical equipment for as long as it's needed, whether for a few days, weeks, or months. This is ideal for recovery periods after surgery, during rehabilitation, or while managing chronic conditions. Renting medical equipment is cost-effective as it avoids large upfront payments.";

  // Five equipment categories with exact items from document
  const equipmentCategories = [
    {
      title: "Respiratory Equipment",
      icon: Wind, // ADD THIS
      emoji: "🫁",
      color: "#3B82F6",
      bgLight: "bg-[#EFF6FF]",
      description:
        "Reliable respiratory support equipment for patients with breathing difficulties, available on flexible rental terms.",
      fullDescription:
        "Our respiratory equipment includes BiPAP, CPAP, oxygen concentrators, suction apparatus, nebulizers, ventilators, oxygen cylinders, and accessories. All equipment is regularly serviced and sanitized for patient safety.",
      items: [
        "BiPAP (Bilevel Positive Airway Pressure)",
        "BiPAP Hose Pipe",
        "CPAP Machine",
        "Oxygen Concentrator - 5 Lpm",
        "Oxygen Concentrator - 10 Lpm",
        "Pulse Oximeter",
        "Suction Apparatus (Double Jar)",
        "Suction Apparatus (Single Jar)",
        "Nebulizer",
        "Ventilator",
        "Oxygen Cylinder (5 Ltr)",
        "Oxygen Cylinder (10 Ltr)",
        "Air Full Face Mask",
        "Oxygen Port Connector",
      ],
    },
    {
      title: "Cardiac Care Equipment",
      icon: HeartPulse, // ADD THIS
      emoji: "❤️",
      color: "#DC2626",
      bgLight: "bg-[#FEF2F2]",
      description:
        "Advanced cardiac monitoring and infusion devices for post-operative and chronic cardiac care at home.",
      fullDescription:
        "Our cardiac care equipment includes web cardio systems, infusion pumps, syringe pumps, ECG machines (6 & 12 channel), multipara monitors (3 & 5 channel), Holter monitoring, and ambulatory BP monitors for comprehensive cardiac care at home.",
      items: [
        "Web Cardio",
        "Infusion Pump",
        "Syringe Pump",
        "ECG Machine (6 Chanel)",
        "ECG Machine (12 Chanel)",
        "Multipara 3 Monitor",
        "Multipara 5 Monitor",
        "Holter Monitoring",
        "Ambulatory BP Monitor",
      ],
    },
    {
      title: "Orthopedic & Physiotherapy Equipment",
      icon: Activity, // ADD THIS
      emoji: "🦴",
      color: "#EA580C",
      bgLight: "bg-[#FFF7ED]",
      description:
        "Specialized equipment for orthopedic recovery, physiotherapy, and prevention of deep vein thrombosis.",
      fullDescription:
        "Our orthopedic equipment includes DVT pumps and DVT pump air casts for preventing deep vein thrombosis. These devices are essential for post-surgical recovery and patients with limited mobility.",
      items: ["DVT Pump", "DVT Pump Air Cast", "DVT Deep Vein Thrombosis Pump"],
    },
    {
      title: "Geriatric & Mobility Care Equipment",
      icon: BedDouble, // ADD THIS
      emoji: "👴",
      color: "#16A34A",
      bgLight: "bg-[#F0FDF4]",
      description:
        "Essential mobility aids and hospital beds to ensure comfort, safety, and ease of care for elderly patients.",
      fullDescription:
        "Our geriatric equipment includes walking sticks, walkers, wheel chairs, commode wheel chairs, CPM machines, various air mattresses, hospital beds (manual and motorised), recliner beds, commode raisers, and IV stands — everything needed for comfortable elderly care at home.",
      items: [
        "Walking Stick",
        "Walker",
        "Wheel Chair",
        "Commode Wheel Chair",
        "CPM Machine",
        "Bubble Air Mattress",
        "Tubular Air Mattress",
        "Therapeutic Advance Air Mattress",
        "Hospital Manual Bed with Mattress (2 Functions)",
        "ICU Motorised Bed with Mattress (5 Functions)",
        "ICU Motorised Bed with Mattress (3 Functions)",
        "Chair with Commode",
        "Recliner Bed",
        "Commode Raiser",
        "IV Stand",
      ],
    },
    {
      title: "Sleep Therapy Equipment",
      icon: Moon, // ADD THIS
      emoji: "😴",
      color: "#9333EA",
      bgLight: "bg-[#FAF5FF]",
      description:
        "Diagnostic and therapeutic equipment for sleep disorders including sleep apnea, available for home use.",
      fullDescription:
        "Our sleep therapy equipment includes CPAP machines, diagnostic sleep study devices (Type 2), split night sleep study devices, hospital nasal masks, and Resmed S9 Autoset for effective management of sleep apnea and other sleep disorders.",
      items: [
        "CPAP Machine",
        "Type 2 Diagnostic Sleep Study",
        "Type 2 Split Night Sleep Study",
        "Hospital Nasal Mask",
        "Resmed S9 Autoset",
      ],
    },
  ];

  // Benefits of renting (from the "Benefits" section of the document)
  const benefitsList = [
    "A comprehensive health check-up and home security evaluation for our clients.",
    "A background-verified, dedicated, Care Manager assigned to our clients.",
    "A 24X7 number to call for any of our client needs.",
    "Strong technology platform with a Mobile App and Web Login portal with real-time updates",
    "Up to 40% discount on Pathology & Radiology services",
    "Up to 15% discount on pharmacies",
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
              <span className="w-1.5 h-1.5 bg-[#16A34A] rounded-full animate-pulse" />
              <span className="text-white/60 text-xs font-medium">
                Equipment Rentals & Sales
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#services"
                className="text-white/40 hover:text-white text-[11px] font-medium transition-colors hidden sm:block"
              >
                Equipment
              </a>
              <a
                href="#why-us"
                className="text-white/40 hover:text-white text-[11px] font-medium transition-colors hidden sm:block"
              >
                Why Us
              </a>
              <a
                href="tel:+919442659377"
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
        href="tel:+919442659377"
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

          <div className="relative w-full px-6 sm:px-10 lg:px-12 py-10 sm:py-12 lg:py-14">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-white/40 hover:text-white mr-5 mb-6 lg:mb-8 text-xs group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Back</span>
            </button>

            <div className="inline-flex items-center gap-2 bg-[#16A34A]/10 border border-[#16A34A]/20 px-3 py-1.5 rounded-full mb-4 lg:mb-5">
              <span className="w-2 h-2 bg-[#16A34A] rounded-full animate-pulse" />
              <span className="text-[#16A34A] text-[10px] font-bold uppercase tracking-widest">
                Rental & Sales Available
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white leading-tight mb-3 lg:mb-4">
              Medical
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4ADE80] to-[#86EFAC]">
                Equipment
              </span>
              Rentals
            </h1>

            <p className="text-white/60 text-sm sm:text-base mb-4 lg:mb-5 max-w-md">
              Safe, affordable medical equipment delivered to your home — rent
              for days, weeks, or months.
            </p>

            <div className="flex gap-6 mb-4 lg:mb-5">
              {[
                { num: "200+", label: "Equipment" },
                { num: "5K+", label: "Rentals" },
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
                View Equipment <ChevronRight className="w-4 h-4" />
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
                    ? "col-span-2 row-span-2 ring-2 ring-[#16A34A]/50"
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
              "Excellent equipment & service!"
            </p>
            <p className="text-white/40 text-[10px] mt-1">— Venkatesh R.</p>
          </div>
        </div>
      </section>

      {/* ========== EQUIPMENT RENTAL SECTION (EXACT CONTENT FROM DOC) ========== */}
      <section
        id="equipment-rental-services"
        className="py-16 lg:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E3A8A] tracking-tight">
              Medical Equipment Rentals & Sales
            </h2>
            <div className="w-20 h-1 bg-[#16A34A] mx-auto mt-4 rounded-full" />
          </div>

          {/* Professional Style Introduction Cards */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg border border-green-100 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#16A34A] via-[#4ADE80] to-[#86EFAC]" />
              <div className="absolute top-6 right-6 opacity-10">
                <Truck className="w-16 h-16 text-[#16A34A]" />
              </div>
              <div className="p-8 sm:p-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#16A34A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-[#16A34A]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1E3A8A]">
                      Cost-Effective & Flexible Rentals
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Avoid large upfront payments — rent only what you need,
                      for as long as you need
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                  {equipmentIntro}
                </p>
                <div className="mt-4 p-4 bg-white/50 rounded-xl border border-green-100">
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {equipmentBenefits}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits of Renting - From Document's "Benefits" Section */}
          <div className="max-w-5xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-[#1E3A8A] text-center mb-6">
              Benefits of Renting with Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {benefitsList.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-white rounded-lg p-3 border border-gray-100 shadow-sm"
                >
                  <CheckCircle className="w-4 h-4 text-[#16A34A] flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1E3A8A]">
              Equipment Available for Rent
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              Click on any category to see the full list of available equipment
            </p>
          </div>

          {/* Five Dropdown Sections */}

          <div className="space-y-4 max-w-3xl mx-auto">
            {equipmentCategories.map((category, index) => {
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
                      <span
                        className="text-[10px] font-semibold px-2 py-1 rounded-full border"
                        style={{
                          backgroundColor: color + "08",
                          color: color,
                          borderColor: color + "20",
                        }}
                      >
                        {category.items.length} items
                      </span>
                      <ChevronRight
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${expandedCategory === index ? "rotate-90" : ""}`}
                      />
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-400 ease-in-out overflow-hidden ${expandedCategory === index ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                      <div
                        className="rounded-xl p-5 sm:p-6"
                        style={{ backgroundColor: color + "06" }}
                      >
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                          {category.fullDescription}
                        </p>
                        <div className="grid sm:grid-cols-2 gap-2.5">
                          {category.items.map((item, sIndex) => (
                            <div
                              key={sIndex}
                              className="flex items-start gap-2.5"
                            >
                              <div
                                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                                style={{ backgroundColor: color + "18" }}
                              >
                                <CheckCircle
                                  className="w-3 h-3"
                                  style={{ color: color }}
                                />
                              </div>
                              <span className="text-[11px] sm:text-xs text-gray-600 leading-relaxed">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="mt-5 pt-4 border-t border-gray-200 flex items-center justify-between flex-wrap gap-3">
                          <span className="text-[11px] text-gray-500 flex items-center gap-1.5">
                            <Truck
                              className="w-3.5 h-3.5"
                              style={{ color: color }}
                            />
                            Delivery & Setup Available • Flexible Rental
                            Duration
                          </span>
                          <a
                            href="tel:+919442659377"
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
              Available 24/7 • Safe & Sanitized Equipment • Flexible Rental
              Terms
            </p>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US SECTION ========== */}
      <section
        id="why-us"
        className="py-16 lg:py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#1E3A8A] tracking-tight">
              Why Choose Our Equipment Rental
            </h2>
            <div className="w-20 h-1 bg-[#16A34A] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Truck,
                title: "Prompt Delivery & Setup",
                description:
                  "Equipment delivered and set up at your doorstep with technical guidance for proper use.",
              },
              {
                icon: DollarSign,
                title: "Cost-Effective Rentals",
                description:
                  "Avoid large upfront payments — pay only for the duration you need the equipment.",
              },
              {
                icon: Calendar,
                title: "Flexible Duration",
                description:
                  "Rent for days, weeks, or months — perfect for post-surgery recovery or chronic care.",
              },
              {
                icon: Shield,
                title: "Safe & Sanitized",
                description:
                  "All equipment is thoroughly cleaned, sanitized, and well-maintained before each rental.",
              },
              {
                icon: Settings,
                title: "Technical Support",
                description:
                  "Ongoing technical support and guidance throughout your rental period.",
              },
              {
                icon: TrendingDown,
                title: "Ideal for Recovery",
                description:
                  "Perfect for post-surgery recovery, rehabilitation, and managing chronic conditions at home.",
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
                { icon: Settings, value: "200+", label: "Equipment Types" },
                { icon: Clock, value: "24/7", label: "Support" },
                { icon: Truck, value: "4hrs", label: "Delivery Time" },
                {
                  icon: DollarSign,
                  value: "Affordable",
                  label: "Rental Plans",
                },
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
                  Safe & Sanitized
                </span>
              </div>
              <div className="w-px h-4 bg-gray-200 hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4" style={{ color: "#990100" }} />
                <span
                  className="text-xs sm:text-sm font-semibold"
                  style={{ color: "#990100" }}
                >
                  Prompt Delivery
                </span>
              </div>
              <div className="w-px h-4 bg-gray-200 hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <ThumbsUp className="w-4 h-4" style={{ color: "#003399" }} />
                <span
                  className="text-xs sm:text-sm font-semibold"
                  style={{ color: "#003399" }}
                >
                  Quality Assured
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="py-12 lg:py-16 bg-gradient-to-r from-[#1E3A8A] to-[#16A34A] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:16px_16px]" />
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
            Need Medical Equipment on Rent?
          </h2>
          <p className="text-white/70 text-base mb-6">
            Safe, sanitized equipment delivered to your doorstep — call now for
            best rental plans.
          </p>
          <a
            href="tel:+919442659377"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1E3A8A] font-bold text-base rounded-xl hover:bg-gray-100 transition-all hover:scale-[1.02] shadow-xl"
          >
            <Phone className="w-5 h-5" />
            +91 94426 59377
          </a>
          <p className="text-white/50 text-xs mt-4">
            Available 24/7 • Free Consultation • Flexible Rental Terms
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

export default EquipmentRentalsPage;
