import React from 'react';
import { Phone, CalendarCheck, Shield, Star, ChevronRight, HeadphonesIcon } from 'lucide-react';

const CTA = () => {
    return (
        <section className="relative py-16 lg:py-24 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#3B82F6]" />

            {/* Animated Background Pattern */}
            <div className="absolute inset-0">
                {/* Large Blur Circles */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3B82F6]/20 rounded-full blur-3xl" />

                {/* Dot Grid Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:30px_30px]" />

                {/* Animated Ring */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Small Pre-Headline Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
                        <div className="relative flex items-center justify-center">
                            <div className="w-2.5 h-2.5 bg-[#16A34A] rounded-full" />
                            <div className="absolute w-2.5 h-2.5 bg-[#16A34A] rounded-full animate-ping opacity-75" />
                        </div>
                        <span className="text-white/90 text-sm font-medium">
                            Available 24/7 for Emergency Support
                        </span>
                    </div>

                    {/* Main Headline */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight animate-fade-in-up">
                        Need Immediate
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#93C5FD] to-white">
                            Healthcare Support?
                        </span>
                    </h2>

                    {/* Subheadline */}
                    <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                        Our team is available 24/7 to provide professional care at your doorstep.
                        Don't wait — get the care you deserve right now.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                        {/* Primary CTA - Call Now */}
                        <a
                            href="tel:+919442659377"
                            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#DC2626] text-white font-semibold text-lg rounded-xl hover:bg-[#B91C1C] transition-all duration-300 transform hover:scale-[1.03] shadow-2xl hover:shadow-[#DC2626]/50 overflow-hidden"
                        >
                            {/* Button Shine Effect */}
                            <div className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-[200%] transition-transform duration-700" />

                            <div className="relative flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                    <div className="font-bold">Call Now</div>
                                    <div className="text-xs text-white/70">+91 94426 59377</div>
                                </div>
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                        </a>

                        {/* Secondary CTA - Book Appointment */}
                        <a
                            href="#appointment"
                            className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#1E3A8A] font-semibold text-lg rounded-xl hover:bg-white/95 transition-all duration-300 transform hover:scale-[1.03] shadow-xl hover:shadow-2xl"
                        >
                            <div className="w-10 h-10 bg-[#EFF6FF] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <CalendarCheck className="w-5 h-5 text-[#1E3A8A]" />
                            </div>
                            <div className="text-left">
                                <div className="font-bold">Book Appointment</div>
                                <div className="text-xs text-gray-500">Schedule a visit</div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-[#1E3A8A] group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                        <div className="flex items-center gap-2 text-white/80">
                            <Shield className="w-5 h-5 text-[#16A34A] flex-shrink-0" />
                            <span className="text-sm font-medium">Verified Caregivers</span>
                        </div>

                        <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full" />

                        <div className="flex items-center gap-2 text-white/80">
                            <Star className="w-5 h-5 text-[#FBBF24] fill-[#FBBF24] flex-shrink-0" />
                            <span className="text-sm font-medium">Doctor Supervised</span>
                        </div>

                        <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full" />

                        <div className="flex items-center gap-2 text-white/80">
                            <HeadphonesIcon className="w-5 h-5 text-[#3B82F6] flex-shrink-0" />
                            <span className="text-sm font-medium">24/7 Support</span>
                        </div>
                    </div>

                    {/* Bottom Floating Card */}
                    <div className="mt-12 inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-5 py-3 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                        <div className="flex -space-x-2">
                            {[...Array(4)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-8 h-8 rounded-full border-2 border-[#1E3A8A] bg-gradient-to-br from-[#3B82F6] to-[#1E3A8A] flex items-center justify-center"
                                >
                                    <Shield className="w-4 h-4 text-white" />
                                </div>
                            ))}
                        </div>
                        <span className="text-white/80 text-sm font-medium">
                            Trusted by <span className="text-white font-bold">10,000+</span> families
                        </span>
                    </div>
                </div>
            </div>

            {/* Bottom Wave Effect */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/5 to-transparent" />

            {/* Animations */}
            <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
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
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease forwards;
          opacity: 0;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }
      `}</style>
        </section>
    );
};

export default CTA;