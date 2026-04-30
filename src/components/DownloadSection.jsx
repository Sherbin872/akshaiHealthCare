import React from 'react';
import { FileText, ClipboardEdit, Download, ArrowRight, CheckCircle } from 'lucide-react';

const DownloadSection = () => {
    const downloadCards = [
        {
            icon: FileText,
            title: 'Download Brochure',
            description:
                'Get complete details about our services, plans, and healthcare solutions in one comprehensive document.',
            buttonText: 'Download Brochure',
            buttonIcon: Download,
            href: '/brochure.pdf',
            gradient: 'from-[#1E3A8A] to-[#3B82F6]',
            bgLight: 'bg-[#EFF6FF]',
            iconColor: 'text-[#1E3A8A]',
            buttonStyle:
                'bg-[#1E3A8A] hover:bg-[#3B82F6] text-white shadow-lg hover:shadow-xl',
            accentColor: '#1E3A8A',
            features: [
                'Complete service details',
                'Plan comparisons',
                'Pricing information',
                'Company overview',
            ],
        },
        {
            icon: ClipboardEdit,
            title: 'Download Application Form',
            description:
                'Fill out the form and get started with our healthcare services quickly and conveniently.',
            buttonText: 'Download Form',
            buttonIcon: ClipboardEdit,
            href: '/application-form.pdf',
            gradient: 'from-[#16A34A] to-[#22C55E]',
            bgLight: 'bg-[#F0FDF4]',
            iconColor: 'text-[#16A34A]',
            buttonStyle:
                'bg-[#16A34A] hover:bg-[#15803D] text-white shadow-lg hover:shadow-xl',
            accentColor: '#16A34A',
            features: [
                'Easy fillable form',
                'Quick registration',
                'Service selection',
                'Instant submission',
            ],
        },
    ];

    return (
        <section className="py-16 lg:py-24 bg-[#F5F5F5] relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-[#1E3A8A]/5 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#16A34A]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
                <div className="absolute top-0 left-0 w-80 h-80 bg-[#3B82F6]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

                {/* Dot Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(#1E3A8A_1px,transparent_1px)] bg-[length:40px_40px] opacity-[0.03]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 lg:mb-20 animate-fade-in">
                    <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-4">
                        <Download className="w-5 h-5 text-[#1E3A8A]" />
                        <span className="text-[#1E3A8A] font-semibold text-sm uppercase tracking-wider">
                            Resources
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A8A] mb-4 tracking-tight">
                        Get More Information
                    </h2>
                    <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                        Download our brochure or apply for care services easily in just a few steps. Start your healthcare journey today.
                    </p>
                </div>

                {/* Download Cards Grid */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
                    {downloadCards.map((card, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl p-8 sm:p-10 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] animate-card-up"
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            {/* Top Accent Bar */}
                            <div
                                className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${card.gradient} rounded-t-2xl`}
                            />

                            {/* Icon Container */}
                            <div className="flex items-start gap-5 mb-6">
                                <div
                                    className={`w-16 h-16 ${card.bgLight} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <card.icon className={`w-8 h-8 ${card.iconColor}`} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-[#1E3A8A] mb-2 group-hover:text-[#3B82F6] transition-colors duration-300">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                            </div>

                            {/* Quick Features List */}
                            <div className="mb-8">
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                                    What's Inside
                                </p>
                                <div className="grid grid-cols-2 gap-2">
                                    {card.features.map((feature, fIndex) => (
                                        <div
                                            key={fIndex}
                                            className="flex items-center gap-2 group/feature"
                                        >
                                            <CheckCircle
                                                className="w-4 h-4 flex-shrink-0"
                                                style={{ color: card.accentColor }}
                                            />
                                            <span className="text-sm text-gray-600 group-hover/feature:text-gray-900 transition-colors duration-300">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Download Button */}
                            <a
                                href={card.href}
                                download
                                className={`group/btn inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.98] ${card.buttonStyle}`}
                            >
                                <card.buttonIcon className="w-5 h-5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                                {card.buttonText}
                                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                            </a>

                            {/* File Info */}
                            <p className="text-xs text-gray-400 mt-4 text-center sm:text-left">
                                PDF format • Instant download • No sign-up required
                            </p>

                            {/* Hover Glow Effect */}
                            <div
                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                style={{
                                    boxShadow: `0 0 60px -15px ${card.accentColor}40`,
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Bottom Additional Info */}
                <div className="text-center mt-12 lg:mt-16 animate-fade-in">
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-white rounded-2xl px-8 py-5 shadow-md">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#16A34A] rounded-full animate-pulse" />
                            <span className="text-gray-600 text-sm">
                                Files are regularly updated
                            </span>
                        </div>
                        <div className="hidden sm:block w-px h-5 bg-gray-200" />
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse" />
                            <span className="text-gray-600 text-sm">
                                Secure and virus-free downloads
                            </span>
                        </div>
                        <div className="hidden sm:block w-px h-5 bg-gray-200" />
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#DC2626] rounded-full animate-pulse" />
                            <span className="text-gray-600 text-sm">
                                Need help?{' '}
                                <a href="#contact" className="text-[#3B82F6] font-medium hover:underline">
                                    Contact us
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animations */}
            <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes cardUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease forwards;
          opacity: 0;
        }
        
        .animate-card-up {
          animation: cardUp 0.6s ease forwards;
          opacity: 0;
        }
      `}</style>
        </section>
    );
};

export default DownloadSection;