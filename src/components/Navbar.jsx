import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import brochure from '../assets/Akshai Healthcare Service Brochure.pdf';
import application from '../assets/Application Form.pdf';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const btnBase =
        "px-4 py-2.5 font-semibold text-[14px] rounded-lg transition-all duration-300 transform hover:scale-[1.02]";
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'Plans', href: '#plans' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 bg-[#FFFFFF] transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-sm'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a
                            href="#home"
                            className="flex items-center gap-2 text-[#1E3A8A] font-bold text-xl lg:text-2xl tracking-tight"
                        >
                            <img
                                src="https://res.cloudinary.com/dkmmpyq6u/image/upload/f_auto,q_auto/SAFHE_Logo_tawlhv"
                                alt="Akshai Healthcare Logo"
                                className="w-11 h-11 object-contain"
                            />
                            <span className="hidden sm:block">Akshai Healthcare</span>
                            <span className="sm:hidden">SAFHE</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        <div className="flex items-center gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-[#4B5563] hover:text-[#3B82F6] font-medium text-[15px] transition-all duration-300 relative py-2 group"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#3B82F6] transition-all duration-300 group-hover:w-full" />
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center gap-3">
                            {/* Secondary CTA */}
                            <a
                                href={brochure}
                                download
                                className={`${btnBase} border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white`}
                            >
                                Download Brochure
                            </a>
                            <a
                                href={application}
                                download
                                className={`${btnBase} bg-[#16A34A] text-white hover:bg-[#15803D]`}
                            >
                                Application
                            </a>
                            {/* Primary CTA */}
                            <a
                                href="tel:+919442659377"
                                className="px-5 py-2.5 bg-[#DC2626] text-white font-semibold text-[14px] rounded-lg hover:bg-[#B91C1C] transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg"
                            >
                                Call Now
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center gap-3">
                        <a
                            href="tel:+919442659377"
                            className="px-3 py-2 bg-[#DC2626] text-white font-semibold text-[13px] rounded-lg hover:bg-[#B91C1C] transition-all duration-300"
                        >
                            Call
                        </a>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg text-[#1E3A8A] hover:bg-[#F5F5F5] transition-all duration-300"
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

            {/* Mobile Navigation */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="bg-[#FFFFFF] border-t border-gray-100 px-4 py-4 space-y-3 shadow-lg">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="block text-[#4B5563] hover:text-[#3B82F6] font-medium text-[15px] transition-all duration-300 py-2.5 px-3 rounded-lg hover:bg-[#F5F5F5]"
                            style={{
                                animationDelay: `${index * 50}ms`,
                                animation: isMenuOpen ? 'slideDown 0.3s ease forwards' : 'none',
                            }}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#download"
                        onClick={() => setIsMenuOpen(false)}
                        className="block w-full text-center px-4 py-3 border-2 border-[#1E3A8A] text-[#1E3A8A] font-semibold text-[14px] rounded-lg hover:bg-[#1E3A8A] hover:text-white transition-all duration-300"
                    >
                        Download Brochure
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;