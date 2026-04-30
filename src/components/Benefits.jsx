import React from 'react';
import {
    HeadphonesIcon,
    UserCircle,
    Activity,
    ClipboardCheck,
    Microscope,
    Pill,
    TrendingUp,
    Shield,
} from 'lucide-react';

const Benefits = () => {
    const benefits = [
        {
            icon: HeadphonesIcon,
            title: '24/7 Support',
            description:
                'Round-the-clock assistance whenever you need care, ensuring peace of mind for you and your family.',
            color: 'text-[#3B82F6]',
            bgColor: 'bg-[#EFF6FF]',
            accentColor: '#3B82F6',
            stat: '24/7',
            statLabel: 'Availability',
        },
        {
            icon: UserCircle,
            title: 'Dedicated Care Manager',
            description:
                'A personal care manager to coordinate and support all your healthcare needs with personalized attention.',
            color: 'text-[#16A34A]',
            bgColor: 'bg-[#F0FDF4]',
            accentColor: '#16A34A',
            stat: '1:1',
            statLabel: 'Support Ratio',
        },
        {
            icon: Activity,
            title: 'Real-Time Updates',
            description:
                'Track patient care and receive instant updates through our advanced digital platform and mobile app.',
            color: 'text-[#9333EA]',
            bgColor: 'bg-[#FAF5FF]',
            accentColor: '#9333EA',
            stat: 'Live',
            statLabel: 'Tracking',
        },
        {
            icon: ClipboardCheck,
            title: 'Home Health Evaluation',
            description:
                'Comprehensive health assessments and home safety evaluations conducted by expert professionals.',
            color: 'text-[#EA580C]',
            bgColor: 'bg-[#FFF7ED]',
            accentColor: '#EA580C',
            stat: '100%',
            statLabel: 'Thorough',
        },
        {
            icon: Microscope,
            title: 'Discounts on Diagnostics',
            description:
                'Save up to 40% on pathology and radiology services through our network of trusted diagnostic partners.',
            color: 'text-[#0891B2]',
            bgColor: 'bg-[#ECFEFF]',
            accentColor: '#0891B2',
            stat: '40%',
            statLabel: 'Savings',
        },
        {
            icon: Pill,
            title: 'Pharmacy Discounts',
            description:
                'Enjoy up to 15% savings on medicines and pharmacy services, making healthcare more affordable.',
            color: 'text-[#DC2626]',
            bgColor: 'bg-[#FEF2F2]',
            accentColor: '#DC2626',
            stat: '15%',
            statLabel: 'Discount',
        },
    ];

    return (
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_0.5px,transparent_0.5px)] bg-[length:30px_30px] opacity-[0.03]" />
                <div className="absolute top-0 right-0 w-72 h-72 bg-[#F5F5F5] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#F5F5F5] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 lg:mb-20 animate-fade-in">
                    <div className="inline-flex items-center gap-2 bg-[#F0FDF4] px-4 py-2 rounded-full mb-4">
                        <TrendingUp className="w-5 h-5 text-[#16A34A]" />
                        <span className="text-[#16A34A] font-semibold text-sm uppercase tracking-wider">
                            Why It Matters
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A8A] mb-4 tracking-tight">
                        Benefits
                    </h2>
                    <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                        Experience reliable, convenient, and high-quality healthcare services at home with exclusive member advantages.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl border border-gray-100 hover:border-transparent transition-all duration-300 transform hover:scale-[1.02] animate-benefit-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Accent Corner */}
                            <div
                                className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ backgroundColor: benefit.accentColor + '0D' }}
                            >
                                <div
                                    className="absolute -top-2 -right-2 w-10 h-10 rounded-full blur-xl"
                                    style={{ backgroundColor: benefit.accentColor + '26' }}
                                />
                            </div>

                            {/* Top Row: Icon + Stat Badge */}
                            <div className="flex items-start justify-between mb-5">
                                <div
                                    className={`w-14 h-14 ${benefit.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <benefit.icon
                                        className={`w-7 h-7 ${benefit.color} group-hover:rotate-3 transition-all duration-300`}
                                    />
                                </div>

                                {/* Stat Badge */}
                                <div className="flex flex-col items-end">
                                    <span
                                        className="text-2xl font-bold"
                                        style={{ color: benefit.accentColor }}
                                    >
                                        {benefit.stat}
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">
                                        {benefit.statLabel}
                                    </span>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-[#1E3A8A] mb-3 group-hover:text-[#3B82F6] transition-colors duration-300">
                                {benefit.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                {benefit.description}
                            </p>

                            {/* Bottom Indicator Bar */}
                            <div className="mt-5 pt-4 border-t border-gray-50">
                                <div className="flex items-center gap-2">
                                    <Shield className="w-4 h-4 text-[#16A34A]" />
                                    <span className="text-xs text-gray-400 font-medium">
                                        Included in all plans
                                    </span>
                                </div>
                            </div>

                            {/* Hover Glow Effect */}
                            <div
                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                style={{
                                    boxShadow: `0 0 40px -10px ${benefit.accentColor}33`,
                                }}
                            />
                        </div>
                    ))}
                </div>

                {/* Bottom Trust Banner */}
                <div className="mt-16 lg:mt-20 bg-gradient-to-r from-[#1E3A8A] via-[#1E3A8A] to-[#3B82F6] rounded-2xl p-8 sm:p-10 lg:p-12 text-center shadow-xl animate-fade-in">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex justify-center mb-4">
                            <div className="flex -space-x-2">
                                {[...Array(4)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-[#3B82F6] to-[#1E3A8A] flex items-center justify-center"
                                    >
                                        <Shield className="w-5 h-5 text-white" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                            Join 10,000+ Satisfied Families
                        </h3>
                        <p className="text-white/80 text-lg mb-6">
                            Experience the difference with Shree Akshai Healthcare Services.
                        </p>
                        <a
                            href="#appointment"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#DC2626] text-white font-semibold rounded-xl hover:bg-[#B91C1C] transition-all duration-300 transform hover:scale-[1.03] shadow-lg hover:shadow-xl"
                        >
                            Get Started Today
                            <TrendingUp className="w-5 h-5" />
                        </a>
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
        
        @keyframes benefitUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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
        
        .animate-benefit-up {
          animation: benefitUp 0.6s ease forwards;
          opacity: 0;
        }
      `}</style>
        </section>
    );
};

export default Benefits;