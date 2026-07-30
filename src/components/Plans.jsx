import React, { useState, useEffect, useRef } from "react";
import {
  Check,
  Star,
  Shield,
  Heart,
  Sparkles,
  IndianRupee,
  Clock,
  Activity,
  Phone,
} from "lucide-react";

const Plans = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(0); // Default: Premium selected
  const sectionRef = useRef(null);
// Add these state variables near your other useState declarations
const [typedText, setTypedText] = useState('');
const [charIndex, setCharIndex] = useState(0);
const [isDeleting, setIsDeleting] = useState(false);

const fullTypedText = 'Flexible and affordable healthcare plans with transparent pricing. All prices + GST.';

// Add this useEffect for the looped typing animation
useEffect(() => {
  if (!isVisible) return;

  let timeout;

  if (!isDeleting && charIndex < fullTypedText.length) {
    timeout = setTimeout(() => {
      setTypedText(fullTypedText.slice(0, charIndex + 1));
      setCharIndex(charIndex + 1);
    }, 40);
  } else if (!isDeleting && charIndex === fullTypedText.length) {
    timeout = setTimeout(() => {
      setIsDeleting(true);
    }, 2000);
  } else if (isDeleting && charIndex > 0) {
    timeout = setTimeout(() => {
      setTypedText(fullTypedText.slice(0, charIndex - 1));
      setCharIndex(charIndex - 1);
    }, 25);
  } else if (isDeleting && charIndex === 0) {
    setIsDeleting(false);
  }

  return () => clearTimeout(timeout);
}, [isVisible, charIndex, isDeleting]);
  const plans = [
    {
      name: "Premium Care",
      tagline: "Most Comprehensive Coverage",
      yearlyPrice: "60,000",
      badge: "Most Popular",
      icon: Star,
      gradient: "from-[#1E3A8A] to-[#3B82F6]",
      bgAccent: "bg-[#EFF6FF]",
      accentColor: "#1E3A8A",
      borderColor: "#3B82F6",
      buttonStyle:
        "bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white shadow-lg hover:shadow-xl",
      features: [
        { text: "4 Physician Visits/year", detail: "Comprehensive Assessment" },
        {
          text: "12 Nursing/Physician Asst. Visits/year",
          detail: "Senior Nursing Care",
        },
        { text: "12 Teleconsultations", detail: "Doctor Teleconsultation" },
        {
          text: "Full Body Checkup - Yearly",
          detail:
            "CBC, Renal, Lipid, Liver, Thyroid, Vit D, PSA, ECG, X-Ray, USG",
        },
        {
          text: "Blood Tests - Every Quarter",
          detail: "CBC, Renal, Electrolytes, FBS, PPBS, HbA1C",
        },
        {
          text: "Diet Counselling - 1/year + 3 Tele",
          detail: "Personalized diet plan",
        },
        {
          text: "Physiotherapy - 4 visits/year",
          detail: "Counselling & Lessons",
        },
        {
          text: "Medicine Compliance - Monthly",
          detail: "Treatment check-ups",
        },
        { text: "Medical Records Filing", detail: "Electronic & Hardcopy" },
        { text: "Tele-consultation with Specialist", detail: "When Required" },
        {
          text: "Prescription Refills - Monthly",
          detail: "Medication management",
        },
        {
          text: "Emotional Counselling - 3 sessions",
          detail: "Mental wellness support",
        },
        { text: "Emergency Coordination", detail: "When Required" },
      ],
    },
    {
      name: "Elite Care",
      tagline: "Enhanced Health Coverage",
      yearlyPrice: "50,000",
      badge: "Great Value",
      icon: Shield,
      gradient: "from-[#16A34A] to-[#22C55E]",
      bgAccent: "bg-[#F0FDF4]",
      accentColor: "#16A34A",
      borderColor: "#3B82F6",
      buttonStyle:
        "bg-white border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white",
      features: [
        { text: "3 Physician Visits/year", detail: "Comprehensive Assessment" },
        {
          text: "6 Nursing/Physician Asst. Visits/year",
          detail: "Senior Nursing Care",
        },
        { text: "4 Teleconsultations", detail: "Doctor Teleconsultation" },
        {
          text: "Full Body Checkup - Yearly",
          detail:
            "CBC, Renal, Lipid, Liver, Thyroid, Vit D, PSA, ECG, X-Ray, USG",
        },
        {
          text: "Blood Tests - 2 times/year",
          detail: "CBC, Renal, Electrolytes, FBS, PPBS, HbA1C",
        },
        {
          text: "Diet Counselling - 1/year + 2 Tele",
          detail: "Personalized diet plan",
        },
        {
          text: "Physiotherapy - 2 visits/year",
          detail: "Counselling & Lessons",
        },
        {
          text: "Medicine Compliance - 6 visits/year",
          detail: "Treatment check-ups",
        },
        { text: "Medical Records Filing", detail: "Electronic & Hardcopy" },
        { text: "Tele-consultation with Specialist", detail: "When Required" },
        {
          text: "Prescription Refills - Monthly",
          detail: "Medication management",
        },
        {
          text: "Emotional Counselling - 2 sessions",
          detail: "Mental wellness support",
        },
        { text: "Emergency Coordination", detail: "When Required" },
      ],
    },
    {
      name: "Classic Care",
      tagline: "Essential Health Package",
      yearlyPrice: "40,000",
      badge: null,
      icon: Heart,
      gradient: "from-[#9333EA] to-[#A855F7]",
      bgAccent: "bg-[#FAF5FF]",
      accentColor: "#9333EA",
      borderColor: "#3B82F6",
      buttonStyle:
        "bg-white border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white",
      features: [
        { text: "2 Physician Visits/year", detail: "Comprehensive Assessment" },
        {
          text: "4 Nursing/Physician Asst. Visits/year",
          detail: "Senior Nursing Care",
        },
        { text: "2 Teleconsultations", detail: "Doctor Teleconsultation" },
        {
          text: "Full Body Checkup - Yearly",
          detail:
            "CBC, Renal, Lipid, Liver, Thyroid, Vit D, PSA, ECG, X-Ray, USG",
        },
        {
          text: "Blood Tests - Once a Year",
          detail: "CBC, Renal, Electrolytes, FBS, PPBS, HbA1C",
        },
        {
          text: "Diet Counselling - 1/year + 1 Tele",
          detail: "Personalized diet plan",
        },
        {
          text: "Physiotherapy - 2 visits/year",
          detail: "Counselling & Lessons",
        },
        {
          text: "Medicine Compliance - 4 visits/year",
          detail: "Treatment check-ups",
        },
        {
          text: "Prescription Refills - Monthly",
          detail: "Medication management",
        },
        {
          text: "Emotional Counselling - 1 session",
          detail: "Mental wellness support",
        },
        { text: "Emergency Coordination", detail: "When Required" },
      ],
    },
    {
      name: "Basic Care",
      tagline: "Starter Health Plan",
      yearlyPrice: "30,000",
      badge: null,
      icon: Activity,
      gradient: "from-[#EA580C] to-[#F97316]",
      bgAccent: "bg-[#FFF7ED]",
      accentColor: "#EA580C",
      borderColor: "#3B82F6",
      buttonStyle:
        "bg-white border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white",
      features: [
        { text: "2 Physician Visits/year", detail: "Comprehensive Assessment" },
        {
          text: "2 Nursing/Physician Asst. Visits/year",
          detail: "Senior Nursing Care",
        },
        { text: "2 Teleconsultations", detail: "Doctor Teleconsultation" },
        {
          text: "Full Body Checkup - Yearly",
          detail:
            "CBC, Renal, Lipid, Liver, Thyroid, Vit D, PSA, ECG, X-Ray, USG",
        },
        {
          text: "Blood Tests - Once a Year",
          detail: "CBC, Renal, Electrolytes, FBS, PPBS, HbA1C",
        },
        {
          text: "Diet Counselling - Once a Year",
          detail: "Personalized diet plan",
        },
        {
          text: "Physiotherapy - 1 visit/year",
          detail: "Counselling & Lessons",
        },
        {
          text: "Medicine Compliance - Regular",
          detail: "Treatment check-ups",
        },
        {
          text: "Prescription Refills - Monthly",
          detail: "Medication management",
        },
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="plans"
      ref={sectionRef}
      className="py-16 lg:py-20 bg-[#F5F5F5] relative overflow-hidden"
    >
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B82F6]/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#16A34A]/3 rounded-full blur-3xl pointer-events-none" />

      {/* Top Divider */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 50"
          fill="none"
          className="w-full"
          preserveAspectRatio="none"
          style={{ height: "50px" }}
        >
          <defs>
            <linearGradient id="planWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#F0FDF4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <path
            d="M0 30C180 0 360 45 540 25C720 5 900 40 1080 20C1260 0 1380 35 1440 25V0H0V30Z"
            fill="url(#planWaveGrad)"
          />
          <path
            d="M0 25C200 5 400 35 600 20C800 5 1000 30 1200 18C1350 10 1420 25 1440 22V0H0V25Z"
            fill="#FFFFFF"
            opacity="0.6"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* Section Header */}
        <div
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Service{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Plans
            </span>
          </h2>
          
         <div className="h-7 flex items-center justify-center">
  <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
    {typedText}
    <span className="inline-block w-0.5 h-5 bg-blue-600 ml-1 animate-pulse" />
  </p>
</div>
        </div>

        {/* Plans Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-4 items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              onClick={() => setSelectedPlan(index)}
              className={`relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col animate-plan-up cursor-pointer group ${
                selectedPlan === index
                  ? "border-2 lg:scale-[1.03] lg:hover:scale-[1.06] z-10 shadow-xl"
                  : "border-2 border-transparent hover:border-gray-200"
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
                borderColor:
                  selectedPlan === index ? plan.borderColor : "transparent",
                boxShadow:
                  selectedPlan === index
                    ? `0 20px 50px -10px ${plan.borderColor}25, 0 0 0 2px ${plan.borderColor}30`
                    : "",
              }}
            >
              {/* Glowing border for selected plan */}
              {selectedPlan === index && (
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden"
                  style={{ padding: "2px" }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl animate-border-glow"
                    style={{
                      background: `conic-gradient(from 0deg, transparent 0%, ${plan.borderColor} 25%, ${plan.accentColor} 50%, ${plan.borderColor} 75%, transparent 100%)`,
                      WebkitMask:
                        "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      WebkitMaskComposite: "xor",
                      maskComposite: "exclude",
                    }}
                  />
                </div>
              )}

              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                  <span
                    className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg animate-bounce-in ${
                      plan.badge === "Most Popular"
                        ? "bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white"
                        : "bg-[#16A34A] text-white"
                    }`}
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <Star className="w-3 h-3 fill-current" />
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className={`p-5 sm:p-6 ${plan.badge ? "pt-8" : "pt-5"}`}>
                {/* Icon */}
                <div
                  className={`w-11 h-11 ${plan.bgAccent} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-500`}
                >
                  <plan.icon
                    className="w-5 h-5"
                    style={{ color: plan.accentColor }}
                  />
                </div>

                {/* Plan Name */}
                <h3 className="text-lg sm:text-xl font-bold text-[#1E3A8A] mb-1">
                  {plan.name}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm">
                  {plan.tagline}
                </p>

                {/* Price */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-gray-500 font-medium">₹</span>
                    <span className="text-3xl sm:text-4xl font-bold text-[#1E3A8A] tabular-nums">
                      {plan.yearlyPrice}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    per year <span className="text-[10px]">+ GST</span>
                  </p>
                </div>
              </div>

              {/* Features List */}
              <div className="px-5 sm:px-6 pb-4 flex-1 overflow-y-auto max-h-[420px] lg:max-h-[460px] scrollbar-thin">
                <p className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 sticky top-0 bg-white py-1">
                  What's Included
                </p>
                <ul className="space-y-2">
                  {plan.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-start gap-2.5 group/feature"
                    >
                      <div className="w-4 h-4 rounded-full bg-[#F0FDF4] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#16A34A]" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-xs sm:text-sm text-gray-700 group-hover/feature:text-gray-900 transition-colors leading-tight block">
                          {feature.text}
                        </span>
                        <span className="text-[10px] text-gray-400 leading-tight block">
                          {feature.detail}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 mt-auto pt-3">
                <a
                  href="#contact"
                  className={`block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
                    selectedPlan === index
                      ? "bg-gradient-to-r shadow-lg hover:shadow-xl text-white"
                      : "bg-white border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white"
                  }`}
                  style={
                    selectedPlan === index
                      ? {
                          backgroundImage: `linear-gradient(to right, ${plan.accentColor}, ${plan.borderColor})`,
                        }
                      : {}
                  }
                >
                  Choose {plan.name.split(" ")[0]}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div
          className={`text-center mt-10 lg:mt-12 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 bg-white rounded-2xl px-6 py-4 shadow-md border border-gray-100">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#16A34A]" />
              <span className="text-xs sm:text-sm text-gray-600">
                All plans include verified caregivers
              </span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-gray-200" />
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#3B82F6]" />
              <span className="text-xs sm:text-sm text-gray-600">
                24/7 Support available
              </span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-gray-200" />
            <div className="flex items-center gap-2">
              <IndianRupee className="w-4 h-4 text-[#EA580C]" />
              <span className="text-xs sm:text-sm text-gray-600">
                All prices exclusive of GST
              </span>
            </div>
          </div>
          <p className="mt-5 text-gray-500 text-sm">
            Need a custom plan?{" "}
            <a
              href="#contact"
              className="text-[#3B82F6] font-medium hover:underline"
            >
              Contact us
            </a>{" "}
            for personalized pricing tailored to your needs.
          </p>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 50"
          fill="none"
          className="w-full"
          preserveAspectRatio="none"
          style={{ height: "50px" }}
        >
          <path
            d="M0 20C180 40 360 5 540 25C720 45 900 10 1080 30C1260 50 1380 15 1440 25V50H0V20Z"
            fill="#FFFFFF"
            opacity="0.8"
          />
          <path
            d="M0 15C200 30 400 0 600 18C800 36 1000 5 1200 20C1350 30 1420 10 1440 18V20C1380 15 1260 50 1080 30C900 10 720 45 540 25C360 5 180 40 0 20V15Z"
            fill="#3B82F6"
            opacity="0.03"
          />
        </svg>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes planUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceIn {
          0% { transform: scale(0.8); opacity: 0; }
          60% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes borderGlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .animate-plan-up { animation: planUp 0.6s ease forwards; opacity: 0; }
        .animate-bounce-in { animation: bounceIn 0.5s ease forwards; opacity: 0; }
        .animate-border-glow { animation: borderGlow 4s linear infinite; }

        .scrollbar-thin::-webkit-scrollbar { width: 3px; }
        .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background: #E5E7EB; border-radius: 10px; }
        .scrollbar-thin { scrollbar-width: thin; scrollbar-color: #E5E7EB transparent; }
      `}</style>
    </section>
  );
};

export default Plans;
