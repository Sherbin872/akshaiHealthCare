import React, { useState, useEffect, useRef } from "react";
import {
  PhoneCall,
  ClipboardCheck,
  ListChecks,
  Settings,
  Heart,
  ArrowRight,
  Download,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import brochure from "../assets/Akshai Healthcare Service Brochure.png";

const Process = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);
  const sectionRef = useRef(null);

  // Logo colors
  const logoBlue = "#003399";
  const logoRed = "#990100";
  // Add these state variables near your other useState declarations
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const fullTypedText =
    "Simple steps to get quality healthcare services at your home, delivered with care and professionalism.";

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
  const steps = [
    {
      number: "01",
      stepno: "step 1",
      icon: PhoneCall,
      title: "Book an Appointment",
      description:
        "Call our helpline or request a service online to schedule an initial consultation at your convenience.",
      color: logoBlue,
      iconBg: "bg-[#003399]",
      bgLight: "bg-[#F0F4FF]",
    },
    {
      number: "02",
      stepno: "step 2",
      icon: ClipboardCheck,
      title: "Patient Assessment",
      description:
        "Our expert team evaluates the patient's condition and care requirements with a thorough assessment.",
      color: logoRed,
      iconBg: "bg-[#990100]",
      bgLight: "bg-[#FFF5F5]",
    },
    {
      number: "03",
      stepno: "step 3",
      icon: ListChecks,
      title: "Choose Care Plan",
      description:
        "Select the most suitable care plan tailored to your specific needs, preferences, and budget.",
      color: logoBlue,
      iconBg: "bg-[#003399]",
      bgLight: "bg-[#F0F4FF]",
    },
    {
      number: "04",
      stepno: "step 4",
      icon: Settings,
      title: "Setup & Preparation",
      description:
        "We prepare your home environment and arrange all required medical equipment for seamless care.",
      color: logoRed,
      iconBg: "bg-[#990100]",
      bgLight: "bg-[#FFF5F5]",
    },
    {
      number: "05",
      stepno: "step 5",
      icon: Heart,
      title: "Care Begins",
      description:
        "Our professional team starts delivering compassionate, quality healthcare right at your doorstep.",
      color: logoBlue,
      iconBg: "bg-[#003399]",
      bgLight: "bg-[#F0F4FF]",
    },
  ];

  // Auto-cycle through steps
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isVisible, steps.length]);

  // Animate progress bar
  useEffect(() => {
    if (!isVisible) return;
    const targetWidth = ((activeStep + 1) / steps.length) * 100;
    const timer = setTimeout(() => {
      setProgressWidth(targetWidth);
    }, 100);
    return () => clearTimeout(timer);
  }, [activeStep, isVisible, steps.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-20 bg-[#F5F5F5] relative overflow-hidden"
    >
      {/* Subtle static background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: logoBlue + "08" }}
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: logoRed + "06" }}
        />
      </div>

      {/* Top Divider */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 35"
          fill="none"
          className="w-full"
          preserveAspectRatio="none"
          style={{ height: "35px" }}
        >
          <path
            d="M0 18C240 0 480 35 720 18C960 0 1200 35 1440 18V0H0V18Z"
            fill="#FFFFFF"
            opacity="0.8"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        {/* Section Header */}
        <div
          className={`text-center mb-12 lg:mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <div className="h-7 flex items-center justify-center">
            <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              {typedText}
              <span className="inline-block w-0.5 h-5 bg-blue-600 ml-1 animate-pulse" />
            </p>
          </div>
        </div>

        {/* Animated Progress Bar */}
        <div className="max-w-3xl mx-auto mb-8 lg:mb-10">
          <div className="flex items-center justify-between mb-2 px-1">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`text-[10px] sm:text-xs font-bold transition-all duration-500 ${index <= activeStep ? "opacity-100" : "opacity-30"}`}
                style={{ color: index <= activeStep ? step.color : "#9CA3AF" }}
              >
                {step.stepno}
              </button>
            ))}
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700 ease-in-out relative"
              style={{
                width: `${progressWidth}%`,
                background: `linear-gradient(to right, ${logoBlue}, ${logoRed})`,
              }}
            >
              {/* Glowing shimmer on progress */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-fast" />
            </div>
          </div>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting Line with animated glow */}
            <div className="absolute top-[92px] left-[70px] right-[70px] h-[2px]">
              <div className="w-full h-full bg-gray-200 rounded-full" />
              {/* Active progress on the line */}
              <div
                className="absolute top-0 left-0 h-full rounded-full transition-all duration-700 ease-in-out"
                style={{
                  width: `${(activeStep / (steps.length - 1)) * 100}%`,
                  background: `linear-gradient(to right, ${logoBlue}, ${logoRed})`,
                }}
              />
              {/* Glowing dot on the line */}
              <div
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full transition-all duration-700 shadow-lg z-10"
                style={{
                  left: `${(activeStep / (steps.length - 1)) * 100}%`,
                  backgroundColor: steps[activeStep].color,
                  boxShadow: `0 0 12px 3px ${steps[activeStep].color}60, 0 0 24px 6px ${steps[activeStep].color}30`,
                }}
              />
            </div>

            {/* Steps */}
            <div className="grid grid-cols-5 gap-3 relative">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center text-center group cursor-pointer transition-all duration-500 ${index === activeStep ? "scale-105" : "scale-100 hover:scale-[1.02]"}`}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Step Number Circle */}
                  <div className="relative mb-5">
                    {/* Outer glow ring */}
                    <div
                      className={`absolute inset-0 w-[72px] h-[72px] -top-[8px] -left-[8px] rounded-full transition-all duration-700 ${index === activeStep ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
                      style={{
                        boxShadow: `0 0 20px 4px ${step.color}30, 0 0 40px 8px ${step.color}15`,
                      }}
                    />

                    {/* Main circle */}
                    <div
                      className={`w-14 h-14 ${step.iconBg} rounded-full flex items-center justify-center shadow-lg transition-all duration-500 relative z-10 ${index === activeStep ? "scale-110 animate-bounce-in" : "group-hover:scale-110"}`}
                    >
                      <span className="text-white font-bold text-lg">
                        {step.number}
                      </span>
                    </div>

                    {/* Connecting arrow */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-1/2 -translate-y-1/2 -right-[22px] z-20">
                        <ArrowRight
                          className="w-4 h-4 transition-all duration-500"
                          style={{
                            color:
                              index < activeStep
                                ? steps[index + 1].color
                                : "#D1D5DB",
                            opacity: index < activeStep ? 1 : 0.4,
                          }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div
                    className={`bg-white rounded-xl p-5 transition-all duration-500 w-full border ${index === activeStep ? "shadow-xl scale-105" : "shadow-md border-transparent hover:shadow-lg"}`}
                    style={{
                      borderColor:
                        index === activeStep
                          ? step.color + "30"
                          : "transparent",
                      boxShadow:
                        index === activeStep
                          ? `0 10px 40px -10px ${step.color}20, 0 0 0 1px ${step.color}15`
                          : "",
                    }}
                  >
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 ${step.bgLight} rounded-xl flex items-center justify-center mx-auto mb-3 transition-all duration-500 ${index === activeStep ? "scale-110" : "group-hover:scale-110"}`}
                    >
                      <step.icon
                        className={`w-6 h-6 transition-all duration-500 ${index === activeStep ? "animate-spin-once" : ""}`}
                        style={{ color: step.color }}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold mb-2 transition-colors duration-300 text-gray-900">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>

                    {/* Active indicator dot */}
                    <div className="flex justify-center mt-3">
                      <div
                        className={`h-1 rounded-full transition-all duration-500 ${index === activeStep ? "w-12 opacity-100" : "w-0 opacity-0"}`}
                        style={{ backgroundColor: step.color }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline */}
        <div className="lg:hidden relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-7 top-0 bottom-0 w-[2px]">
            <div className="w-full h-full bg-gray-200 rounded-full" />
            <div
              className="absolute top-0 left-0 w-full rounded-full transition-all duration-700"
              style={{
                height: `${((activeStep + 1) / steps.length) * 100}%`,
                background: `linear-gradient(to bottom, ${logoBlue}, ${logoRed})`,
              }}
            />
            {/* Glowing dot */}
            <div
              className="absolute -left-[5px] w-3 h-3 rounded-full transition-all duration-700 shadow-lg z-10"
              style={{
                top: `${((activeStep + 0.5) / steps.length) * 100}%`,
                backgroundColor: steps[activeStep].color,
                boxShadow: `0 0 12px 3px ${steps[activeStep].color}60, 0 0 24px 6px ${steps[activeStep].color}30`,
              }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-5">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative pl-16 group cursor-pointer transition-all duration-500 ${index === activeStep ? "scale-[1.02]" : ""}`}
                onClick={() => setActiveStep(index)}
              >
                {/* Step Number Circle */}
                <div
                  className={`absolute left-3 top-4 -translate-x-1/2 z-10 w-10 h-10 ${step.iconBg} rounded-full flex items-center justify-center shadow-md transition-all duration-500 ${index === activeStep ? "scale-110 shadow-lg" : "group-hover:scale-110"}`}
                  style={{
                    boxShadow:
                      index === activeStep
                        ? `0 0 16px 3px ${step.color}40, 0 0 32px 6px ${step.color}20`
                        : "",
                  }}
                >
                  <span className="text-white font-bold text-sm">
                    {index + 1}
                  </span>
                </div>

                {/* Card */}
                <div
                  className={`bg-white rounded-xl p-5 sm:p-6 transition-all duration-500 border ${index === activeStep ? "shadow-lg" : "shadow-sm border-transparent hover:shadow-md"}`}
                  style={{
                    borderColor:
                      index === activeStep ? step.color + "30" : "transparent",
                    boxShadow:
                      index === activeStep
                        ? `0 8px 30px -8px ${step.color}15, 0 0 0 1px ${step.color}10`
                        : "",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 ${step.bgLight} rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-500 ${index === activeStep ? "scale-110" : ""}`}
                    >
                      <step.icon
                        className={`w-6 h-6 transition-all duration-500 ${index === activeStep ? "animate-spin-once" : ""}`}
                        style={{ color: step.color }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-xs font-bold transition-colors duration-300"
                          style={{
                            color:
                              index === activeStep ? step.color : "#9CA3AF",
                          }}
                        >
                          STEP {step.number}
                        </span>
                        <ChevronRight
                          className="w-3 h-3 transition-colors duration-300"
                          style={{
                            color:
                              index === activeStep ? step.color : "#9CA3AF",
                          }}
                        />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-14 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="text-gray-600 mb-5 text-base sm:text-lg font-medium">
            Ready to start your care journey?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={brochure}
              download="Akshai Healthcare Service Brochure.png"
              className="group relative inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.03] active:scale-95 shadow-lg overflow-hidden"
              style={{ backgroundColor: logoBlue }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Download className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Download Brochure</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 35"
          fill="none"
          className="w-full"
          preserveAspectRatio="none"
          style={{ height: "35px" }}
        >
          <path
            d="M0 18C240 35 480 0 720 18C960 35 1200 0 1440 18V35H0V18Z"
            fill="#FFFFFF"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes bounceIn {
          0% { transform: scale(0.8); }
          50% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }
        @keyframes spinOnce {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes shimmerFast {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        .animate-bounce-in { animation: bounceIn 0.5s ease; }
        .animate-spin-once { animation: spinOnce 0.6s ease; }
        .animate-shimmer-fast { animation: shimmerFast 2s linear infinite; }
      `}</style>
    </section>
  );
};

export default Process;
