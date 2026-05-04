import React from 'react';
import {
    MapPin,
    Phone,
    Mail,
    ChevronRight,
    Heart,
    Shield,
    Star,
    ArrowUp,
} from 'lucide-react';
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'Plans', href: '#plans' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    const services = [
        { name: 'Home Nursing', href: '/home-nursing' },
        { name: 'Doctor Consultation', href: '/home-doctor' },
        { name: 'Elderly Care', href: '/elderly-care' },
        { name: 'Physiotherapy', href: '/physiotherapy' },
        { name: 'Emergency Care', href: '/emergency-care' },
        { name: 'Telemedicine', href: '/telemedicine' },
    ];

    const contactInfo = [
        {
            icon: MapPin,
            text: 'Tirunelveli, Tamil Nadu - 627007',
        },
        {
            icon: Phone,
            text: '+91 94426 59377',
            href: 'tel:+919442659377',
        },
        {
            icon: Mail,
            text: 'safhe25@gmail.com',
            href: 'mailto:safhe25@gmail.com',
        },
    ];

    const socialLinks = [
        {
            name: 'Facebook',
            icon: (props) => (
                <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            ),
            href: '#',
        },
        {
            name: 'Twitter',
            icon: (props) => (
                <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
            ),
            href: '#',
        },
        {
            name: 'Instagram',
            icon: (props) => (
                <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6S6.698 2.4 12 2.4s9.6 4.298 9.6 9.6-4.298 9.6-9.6 9.6zm5.544-13.344a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4zm-2.544 1.2a3.6 3.6 0 11-7.2 0 3.6 3.6 0 017.2 0zm-1.2 0a2.4 2.4 0 10-4.8 0 2.4 2.4 0 004.8 0z" />
                </svg>
            ),
            href: '#',
        },
        {
            name: 'LinkedIn',
            icon: (props) => (
                <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
            href: '#',
        },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#1E3A8A] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:30px_30px]" />
            </div>

            {/* Main Footer Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 pb-8 lg:pb-10">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
                    {/* Column 1: Company Info */}
                    <div className="sm:col-span-2 lg:col-span-1 animate-fade-in-up">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                                <img
                                    src="https://res.cloudinary.com/dkmmpyq6u/image/upload/f_auto,q_auto/SAFHE_Logo_tawlhv"
                                    alt="Akshai Healthcare Logo"
                                    className="w-11 h-11 object-contain"
                                />
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg leading-tight">
                                    Akshai Healthcare
                                </h3>
                                <p className="text-white/60 text-xs">Shree Akshai Healthcare Services</p>
                            </div>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed mb-6">
                            Providing compassionate and professional healthcare services at your doorstep, ensuring comfort, dignity, and quality care for your loved ones.
                        </p>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1.5 text-xs text-white/80">
                                <Shield className="w-3.5 h-3.5 text-[#16A34A]" />
                                Verified Caregivers
                            </span>
                            <span className="inline-flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1.5 text-xs text-white/80">
                                <Star className="w-3.5 h-3.5 text-[#FBBF24] fill-[#FBBF24]" />
                                98% Satisfaction
                            </span>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                        <h3 className="text-white font-bold text-base mb-5 flex items-center gap-2">
                            <span className="w-1 h-4 bg-[#3B82F6] rounded-full" />
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="group flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300 text-sm"
                                    >
                                        <ChevronRight className="w-3.5 h-3.5 text-white/30 group-hover:text-[#3B82F6] group-hover:translate-x-0.5 transition-all duration-300" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                        <h3 className="text-white font-bold text-base mb-5 flex items-center gap-2">
                            <span className="w-1 h-4 bg-[#16A34A] rounded-full" />
                            Our Services
                        </h3>
                        <ul className="space-y-3">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a
                                        onClick={() => navigate(service.href)}
                                        className="group flex items-center gap-2 text-white/70 hover:text-white cursor-pointer transition-all duration-300 text-sm"
                                    >
                                        <ChevronRight className="w-3.5 h-3.5 text-white/30 group-hover:text-[#16A34A] group-hover:translate-x-0.5 transition-all duration-300" />
                                        {service.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div className="animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                        <h3 className="text-white font-bold text-base mb-5 flex items-center gap-2">
                            <span className="w-1 h-4 bg-[#DC2626] rounded-full" />
                            Contact Us
                        </h3>
                        <ul className="space-y-4">
                            {contactInfo.map((item, index) => (
                                <li key={index}>
                                    {item.href ? (
                                        <a
                                            href={item.href}
                                            className="group flex items-start gap-3 text-white/70 hover:text-white transition-all duration-300"
                                        >
                                            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors duration-300">
                                                <item.icon className="w-4 h-4 text-white/80" />
                                            </div>
                                            <span className="text-sm pt-1">{item.text}</span>
                                        </a>
                                    ) : (
                                        <div className="flex items-start gap-3 text-white/70">
                                            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <item.icon className="w-4 h-4 text-white/80" />
                                            </div>
                                            <span className="text-sm pt-1">{item.text}</span>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>

                        {/* Social Links */}
                        <div className="mt-6">
                            <p className="text-white/50 text-xs uppercase tracking-wider mb-3">
                                Follow Us
                            </p>
                            <div className="flex gap-2">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.href}
                                        aria-label={social.name}
                                        className="w-9 h-9 bg-white/10 hover:bg-[#3B82F6] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                                    >
                                        <social.icon className="w-4 h-4 text-white/80" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-t border-white/10" />
            </div>

            {/* Bottom Bar */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-white/50 text-xs sm:text-sm text-center sm:text-left">
                        &copy; {currentYear} Shree Akshai Healthcare Services. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4">
                        {/* <a
                            href="#privacy"
                            className="text-white/50 hover:text-white/80 text-xs transition-colors duration-300"
                        >
                            Privacy Policy
                        </a>
                        <span className="text-white/20">|</span>
                        <a
                            href="#terms"
                            className="text-white/50 hover:text-white/80 text-xs transition-colors duration-300"
                        >
                            Terms of Service
                        </a> */}

                        {/* Scroll to Top Button */}
                        <button
                            onClick={scrollToTop}
                            className="w-8 h-8 bg-[#3B82F6] hover:bg-[#2563EB] rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ml-2"
                            aria-label="Scroll to top"
                        >
                            <ArrowUp className="w-4 h-4 text-white" />
                        </button>
                    </div>
                </div>

                {/* Made with love */}
                <div className="text-center mt-3">
                    <p className="text-white/30 text-xs flex items-center justify-center gap-1">
                        Made with
                        <Heart className="w-3 h-3 text-[#DC2626] fill-[#DC2626] animate-pulse" />
                        for your family's health
                    </p>
                </div>
            </div>

            {/* Animations */}
            <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }
      `}</style>
        </footer>
    );
};

export default Footer;