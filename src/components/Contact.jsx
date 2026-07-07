import React, { useState, useEffect, useRef } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Building2,
  ChevronRight,
  CheckCircle,
  Sparkles,
  Shield,
  ExternalLink,
  Navigation,
  Loader2,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("main");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef(null);
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // IMPORTANT: Replace with your actual Formspree form ID
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnjroelp";

  const fullTypedText =
    "We're here to help. Reach out for reliable, compassionate healthcare services.";

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

  const contactInfo = [
    {
      icon: MapPin,
      label: "Main Office",
      value:
        "Plot No. 17, Chellathai Nagar, NGO 'A' Colony,\nTirunelveli - 627007, Tamil Nadu, India",
      color: "text-[#DC2626]",
      bgColor: "bg-[#FEF2F2]",
      action: "",
      actionIcon: Navigation,
    },
    {
      icon: Phone,
      label: "Phone Number",
      value: "+91 94426 59377",
      href: "tel:+919442659377",
      color: "text-[#16A34A]",
      bgColor: "bg-[#F0FDF4]",
      action: "Call Now",
      actionIcon: Phone,
    },
    {
      icon: Mail,
      label: "Email Address",
      value: "contact@akshaihealthcare.com",
      href: "mailto:contact@akshaihealthcare.com",
      color: "text-[#3B82F6]",
      bgColor: "bg-[#EFF6FF]",
      action: "Send Email",
      actionIcon: Send,
    },
  ];

  const branchOffice = {
    icon: Building2,
    label: "Branch Office",
    value:
      "Block 1, MCA Plaza, National Highway 138,\nPudukottai, Tuticorin - 628 103, Tamil Nadu",
    color: "text-[#9333EA]",
    bgColor: "bg-[#FAF5FF]",
  };

  const serviceOptions = [
    "Home Nursing",
    "Doctor Consultation",
    "Elderly Care",
    "Physiotherapy",
    "Emergency Care",
    "Telemedicine",
    "Equipment Rentals",
    "Other",
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

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please enter your full name";
    }
    if (
      !formData.phone.trim() ||
      !/^[\d\s+\-()]{10,15}$/.test(formData.phone.trim())
    ) {
      newErrors.phone = "Please enter a valid phone number";
    }
    // Email is now required
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _replyto: formData.email,
          _subject: `New enquiry from ${formData.name} - ${formData.service || "General"}`,
          Name: formData.name,
          Phone: formData.phone,
          Email: formData.email,
          Service: formData.service || "Not specified",
          Message: formData.message,
          "Submission Date": new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
          Source: "Shree Akshai Healthcare Website - Contact Form",
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", phone: "", email: "", service: "", message: "" });
        setErrors({});
        setTimeout(() => setIsSubmitted(false), 6000);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-12 lg:py-16 min-h-screen bg-gradient-to-b from-[#F5F5F5] to-white relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#3B82F6]/3 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#16A34A]/3 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        <div className="absolute inset-0 bg-[radial-gradient(#1E3A8A_0.5px,transparent_0.5px)] bg-[length:32px_32px] opacity-[0.015]" />
      </div>

      {/* Top Divider */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 35" fill="none" className="w-full" preserveAspectRatio="none" style={{ height: "35px" }}>
          <path d="M0 18C240 0 480 35 720 18C960 0 1200 30 1440 20V0H0V18Z" fill="#FFFFFF" opacity="0.6" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        {/* Header */}
        <div className={`text-center mb-8 lg:mb-10 transition-all duration-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-4">
            <Mail className="w-4 h-4 text-[#1E3A8A]" />
            <span className="text-[#1E3A8A] font-semibold text-xs uppercase tracking-wider">Get In Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Contact{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Us</span>
          </h2>
          <div className="h-7 flex items-center justify-center">
            <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              {typedText}
              <span className="inline-block w-0.5 h-5 bg-blue-600 ml-1 animate-pulse" />
            </p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {/* LEFT — Info + Map */}
          <div className="lg:col-span-2 space-y-4 animate-slide-in-left">
            <div className="flex gap-1 bg-white rounded-xl p-1 shadow-sm border border-gray-100">
              <button
                onClick={() => setActiveTab("main")}
                className={`flex-1 text-xs font-semibold py-2 rounded-lg transition-all duration-300 ${activeTab === "main" ? "bg-[#1E3A8A] text-white shadow" : "text-gray-500 hover:text-[#1E3A8A]"}`}
              >
                Main Office
              </button>
              <button
                onClick={() => setActiveTab("branch")}
                className={`flex-1 text-xs font-semibold py-2 rounded-lg transition-all duration-300 ${activeTab === "branch" ? "bg-[#9333EA] text-white shadow" : "text-gray-500 hover:text-[#9333EA]"}`}
              >
                Branch Office
              </button>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100">
              {activeTab === "main" ? (
                <div className="space-y-3">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="group flex gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300">
                      <div className={`w-10 h-10 ${item.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-sm text-gray-700 font-medium hover:text-[#3B82F6] transition-colors break-words">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm text-gray-700 font-medium whitespace-pre-line">{item.value}</p>
                        )}
                        {item.action && (
                          <a href={item.href || "#map"} className="inline-flex items-center gap-1 mt-1 text-[10px] font-semibold text-[#3B82F6] hover:underline">
                            <item.actionIcon className="w-3 h-3" />
                            {item.action}
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="group flex gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300">
                  <div className={`w-10 h-10 ${branchOffice.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <branchOffice.icon className={`w-5 h-5 ${branchOffice.color}`} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">{branchOffice.label}</p>
                    <p className="text-sm text-gray-700 font-medium whitespace-pre-line">{branchOffice.value}</p>
                    <a href="https://maps.google.com/?q=Block+1+MCA+Plaza+NH138+Pudukottai+Tuticorin+628103" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-1 text-[10px] font-semibold text-[#9333EA] hover:underline">
                      <Navigation className="w-3 h-3" />
                      View on Map
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
              )}
              <div className="mt-4 p-3 bg-[#F0FDF4] rounded-xl flex items-center gap-3">
                <div className="w-9 h-9 bg-[#16A34A] rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#16A34A]">24/7 Available</p>
                  <p className="text-[10px] text-gray-500">Emergency support always ready</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden h-48 sm:h-56">
              <iframe
                title="Shree Akshai Healthcare Location"
                src={activeTab === "main"
                  ? "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d22251.950260566948!2d77.71910647334096!3d8.68539700062185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNDEnMDEuNiJOIDc3wrA0NCcwNi45IkU!5e0!3m2!1sen!2sin!4v1777633144885!5m2!1sen!2sin"
                  : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.5!2d78.0!3d8.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNDgnMDAuMCJOIDc4wrAwMCcwMC4wIkU!5e0!3m2!1sen!2sin!4v1700000000000"
                }
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[0.3] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="lg:col-span-3 animate-slide-in-right">
            <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-7 shadow-md border border-gray-100">
              <h3 className="text-lg font-bold text-[#1E3A8A] mb-1 flex items-center gap-2">
                <span className="w-1 h-5 bg-[#16A34A] rounded-full" />
                Send Us a Message
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm mb-5">
                Fill the form and we'll get back to you within 24 hours
              </p>

              {/* Success Message */}
              {isSubmitted && (
                <div className="mb-5 p-4 bg-[#F0FDF4] border border-[#16A34A]/20 rounded-xl flex items-center gap-3 animate-fade-in">
                  <CheckCircle className="w-5 h-5 text-[#16A34A] flex-shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-[#16A34A]">Message Sent Successfully!</p>
                    <p className="text-xs text-gray-600">We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name + Phone Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-gray-600 mb-1">
                      Full Name <span className="text-[#DC2626]">*</span>
                    </label>
                    <input
                      type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                      placeholder="Your full name"
                      className={`w-full px-3.5 py-2.5 rounded-xl border-2 text-sm transition-all duration-300 outline-none ${errors.name ? "border-[#DC2626] bg-[#FEF2F2]" : "border-gray-200 focus:border-[#3B82F6] hover:border-gray-300"}`}
                    />
                    {errors.name && <p className="mt-1 text-[11px] text-[#DC2626]">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-gray-600 mb-1">
                      Phone Number <span className="text-[#DC2626]">*</span>
                    </label>
                    <input
                      type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                      placeholder="Your phone number"
                      className={`w-full px-3.5 py-2.5 rounded-xl border-2 text-sm transition-all duration-300 outline-none ${errors.phone ? "border-[#DC2626] bg-[#FEF2F2]" : "border-gray-200 focus:border-[#3B82F6] hover:border-gray-300"}`}
                    />
                    {errors.phone && <p className="mt-1 text-[11px] text-[#DC2626]">{errors.phone}</p>}
                  </div>
                </div>

                {/* Email + Service Row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-600 mb-1">
                      Your Email <span className="text-[#DC2626]">*</span>
                    </label>
                    <input
                      type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                      placeholder="your@email.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl border-2 text-sm transition-all duration-300 outline-none ${errors.email ? "border-[#DC2626] bg-[#FEF2F2]" : "border-gray-200 focus:border-[#3B82F6] hover:border-gray-300"}`}
                    />
                    {errors.email && <p className="mt-1 text-[11px] text-[#DC2626]">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-xs font-semibold text-gray-600 mb-1">
                      Service Interested
                    </label>
                    <select
                      id="service" name="service" value={formData.service} onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border-2 border-gray-200 focus:border-[#3B82F6] hover:border-gray-300 text-sm transition-all duration-300 outline-none bg-white text-gray-700"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-600 mb-1">
                    Message <span className="text-[#DC2626]">*</span>
                  </label>
                  <textarea
                    id="message" name="message" value={formData.message} onChange={handleChange}
                    placeholder="Tell us about your healthcare needs..."
                    rows={3}
                    className={`w-full px-3.5 py-2.5 rounded-xl border-2 text-sm transition-all duration-300 outline-none resize-none ${errors.message ? "border-[#DC2626] bg-[#FEF2F2]" : "border-gray-200 focus:border-[#3B82F6] hover:border-gray-300"}`}
                  />
                  {errors.message && <p className="mt-1 text-[11px] text-[#DC2626]">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white font-semibold text-sm rounded-xl hover:from-[#2563EB] hover:to-[#1E3A8A] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Message
                      <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[10px] text-gray-400 text-center">
                  By submitting, you agree to our{" "}
                  <a href="#privacy" className="text-[#3B82F6] hover:underline">Privacy Policy</a>{" "}
                  and consent to being contacted.{" "}
                  <Shield className="w-3 h-3 text-[#16A34A] inline" /> Your data stays private.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 35" fill="none" className="w-full" preserveAspectRatio="none" style={{ height: "35px" }}>
          <path d="M0 18C240 35 480 0 720 20C960 40 1200 5 1440 15V35H0V18Z" fill="#FFFFFF" opacity="0.7" />
        </svg>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in-left { animation: slideInLeft 0.6s ease forwards; opacity: 0; }
        .animate-slide-in-right { animation: slideInRight 0.6s ease forwards; opacity: 0; }
        .animate-fade-in { animation: fadeIn 0.4s ease forwards; }
      `}</style>
    </section>
  );
};

export default Contact;