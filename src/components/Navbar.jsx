import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Download,
  Phone,
  Shield,
  Star,
  Clock,
  ChevronRight,
  FileText,
} from "lucide-react";
import brochure from "../assets/Akshai Healthcare Service Brochure.png";
import application from "../assets/Application Form.pdf";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const btnBase =
    "px-4 py-2.5 font-semibold text-[14px] rounded-lg transition-all duration-300 transform hover:scale-[1.02]";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Plans", href: "#plans" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-[#FFFFFF] transition-all duration-300 ${
        isScrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[96px] lg:min-h-[112px] py-2 gap-4">
          {/* Logo */}
          <div className="flex-shrink-0 py-1">
            <a
              href="#home"
              className="flex items-center gap-3 text-[#1E3A8A] tracking-tight group"
            >
              <img
                src="/logo.png"
                alt="Akshai Healthcare Logo"
                className="h-20 sm:h-24 lg:h-28 w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
              />
              <div className="flex flex-col flex-shrink-0">
                <span className="hidden sm:block font-extrabold text-lg sm:text-xl lg:text-xl xl:text-2xl leading-tight text-[#1E3A8A]">
                  Akshai Healthcare Services
                </span>
                <span className="sm:hidden font-extrabold text-base text-[#1E3A8A]">
                  Akshai Healthcare Services
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-shrink-0">
            <div className="flex items-center gap-3 xl:gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#4B5563] hover:text-[#3B82F6] font-semibold text-sm xl:text-[15px] transition-all duration-300 relative py-2 whitespace-nowrap group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#3B82F6] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 xl:gap-3 flex-shrink-0">
              {/* Download Brochure */}
              <a
                href={brochure}
                download="Akshai Healthcare Service Brochure.png"
                className={`${btnBase} px-3 xl:px-4 py-2 text-xs xl:text-sm border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white flex items-center gap-1.5 whitespace-nowrap`}
              >
                <Download className="w-4 h-4" />
                Brochure
              </a>
              {/* Application Form */}
              <a
                href="/application-form"
                className={`${btnBase} px-3 xl:px-4 py-2 text-xs xl:text-sm border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white flex items-center gap-1.5 whitespace-nowrap`}
              >
                <FileText className="w-4 h-4" />
                Application
              </a>
              {/* Call Now */}
              <a
                href="tel:+919443608223"
                className={`${btnBase} px-3 xl:px-4 py-2 text-xs xl:text-sm border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white flex items-center gap-1.5 whitespace-nowrap`}
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              href="tel:+919443608223"
              className="px-3 py-2 bg-[#DC2626] text-white font-semibold text-[13px] rounded-lg hover:bg-[#B91C1C] transition-all duration-300 flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              Call
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-[#1E3A8A] hover:bg-[#F5F5F5] transition-all duration-300 relative z-50"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ========== MOBILE NAVIGATION - FULL SCREEN OVERLAY ========== */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-[#0B1D4A]/98 via-[#1E3A8A]/98 to-[#1D4ED8]/98 backdrop-blur-xl transition-opacity duration-500 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/[0.03] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:24px_24px]" />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col">
          {/* Top Bar */}
          <div
            className={`flex items-center justify-between px-4 py-4 transition-all duration-500 delay-100 ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center p-1 shadow flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="Akshai Healthcare Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="text-white font-bold text-base leading-tight">
                  Akshai Healthcare Services
                </p>
                <p className="text-[#93C5FD] text-[10px] tracking-wide">
                  Compassionate Patient Care
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 flex flex-col justify-center px-6 sm:px-12">
            <nav className="space-y-1.5">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`group flex items-center justify-between py-4 px-5 rounded-2xl text-white transition-all duration-500 hover:bg-white/[0.06] border border-transparent hover:border-white/[0.06] ${
                    isMenuOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${150 + index * 80}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-white/30 text-sm font-mono tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg sm:text-xl font-semibold group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/20 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                </a>
              ))}
            </nav>
          </div>

          {/* Bottom Actions */}
          <div
            className={`px-6 sm:px-12 pb-8 space-y-3 transition-all duration-500 delay-300 ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {/* Download Brochure */}
            <a
              href={brochure}
              download="Akshai Healthcare Service Brochure.png"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-3 w-full py-4 bg-white text-[#1E3A8A] font-semibold text-base rounded-2xl hover:bg-white/95 transition-all duration-300 active:scale-[0.98] shadow-lg"
            >
              <Download className="w-5 h-5" />
              Download Brochure
            </a>

            {/* Download Application */}
            <a
              href="/application-form"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center justify-center gap-3 w-full py-4 bg-[#16A34A] text-white font-semibold text-base rounded-2xl hover:bg-[#15803D] transition-all duration-300 active:scale-[0.98] shadow-lg"
            >
              <FileText className="w-5 h-5" />
              Application Form
            </a>

            {/* Emergency Call */}
            <a
              href="tel:+919443608223"
              className="flex items-center justify-center gap-3 w-full py-4 bg-[#DC2626]/20 border border-[#DC2626]/30 text-white font-semibold text-base rounded-2xl hover:bg-[#DC2626]/30 transition-all duration-300 active:scale-[0.98]"
            >
              <Phone className="w-5 h-5" />
              Emergency: +91 94436 08223
            </a>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-5 pt-3">
              {[
                { icon: Shield, text: "Verified" },
                { icon: Star, text: "Supervised" },
                { icon: Clock, text: "24/7" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 text-white/50 text-xs"
                >
                  <item.icon className="w-3.5 h-3.5 text-white/30" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      {/* Add this line right before the closing </nav> tag */}
      <FloatingActionButton />
    </nav>
  );
};

// Add this component at the bottom of your Navbar.jsx file (before export default Navbar)

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Contact Button */}
      <a
        href="#contact"
        className={`flex items-center gap-3 px-4 py-3 bg-white text-[#003399] rounded-2xl shadow-xl font-semibold text-sm transition-all duration-300 hover:scale-105 border-2 border-[#003399]/20 ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 translate-y-4 invisible"
        }`}
        style={{ transitionDelay: isOpen ? "0.05s" : "0s" }}
      >
        <span>Contact Us</span>
        <div className="w-8 h-8 bg-[#003399]/10 rounded-full flex items-center justify-center">
          <ChevronRight className="w-4 h-4 text-[#003399]" />
        </div>
      </a>

      {/* Call Button */}
      <a
        href="tel:+919443608223"
        className={`flex items-center gap-3 px-4 py-3 bg-[#003399] text-white rounded-2xl shadow-xl font-semibold text-sm transition-all duration-300 hover:scale-105 ${
          isOpen
            ? "opacity-100 translate-y-0 visible"
            : "opacity-0 translate-y-4 invisible"
        }`}
        style={{ transitionDelay: isOpen ? "0.1s" : "0s" }}
      >
        <span>Call Now</span>
        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
          <Phone className="w-4 h-4" />
        </div>
      </a>

      {/* Main FAB Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 relative ${
          isOpen ? "bg-[#990100] rotate-45" : "bg-[#003399] rotate-0"
        }`}
        style={{
          boxShadow: isOpen
            ? "0 8px 25px rgba(153,1,0,0.4)"
            : "0 8px 25px rgba(0,51,153,0.4)",
        }}
      >
        {/* Pulse ring */}
        <div
          className={`absolute inset-0 rounded-2xl animate-ping-slow opacity-30 ${isOpen ? "bg-[#990100]" : "bg-[#003399]"}`}
        />

        {isOpen ? (
          <X className="w-6 h-6 text-white -rotate-45" />
        ) : (
          <Phone className="w-6 h-6 text-white" />
        )}

        {/* Green online dot */}
        {!isOpen && (
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-[#16A34A] rounded-full border-2 border-white animate-pulse" />
        )}
      </button>

      <style>{`
        @keyframes pingSlow {
          0% { transform: scale(1); opacity: 0.3; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        .animate-ping-slow { animation: pingSlow 2s ease-out infinite; }
      `}</style>
    </div>
  );
};

export default Navbar;
