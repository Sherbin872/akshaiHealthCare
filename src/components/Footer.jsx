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
            text: 'contact@akshaihealthcare.com',
            href: 'mailto:contact@akshaihealthcare.com',
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
            href: 'https://www.facebook.com/AkshaiHealthcareServices',
        },
        {
            name: 'X',
            icon: (props) => (
                <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            ),
            href: 'https://x.com/akshaicare',
        },
        {
            name: 'Instagram',
            icon: (props) => (
                <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
            ),
            href: 'https://www.instagram.com/akshaihealthcare',
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
                                    Shree Akshai Healthcare
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