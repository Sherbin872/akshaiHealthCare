import React from 'react';
import {
    Heart,
    Star,
    Award,
    Quote,
    Shield,
    Users,
    Sparkles,
    ChevronRight,
} from 'lucide-react';

const About = () => {
    const companyHighlights = [
        {
            icon: Users,
            stat: '10,000+',
            label: 'Patients Served',
        },
        {
            icon: Award,
            stat: '5+',
            label: 'Years Experience',
        },
        {
            icon: Shield,
            stat: '100%',
            label: 'Verified Staff',
        },
        {
            icon: Heart,
            stat: '98%',
            label: 'Satisfaction Rate',
        },
    ];

    const leaders = [
        {
            name: 'Ms. Cathie Ignatius Andrea',
            role: 'Managing Director',
            initials: 'CA',
            gradient: 'from-[#1E3A8A] to-[#3B82F6]',
            bgGradient: 'bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6]',
            borderColor: 'hover:border-[#3B82F6]/30',
            accentColor: '#3B82F6',
            description:
                'A dynamic leader focused on delivering personalized and high-quality healthcare services with a patient-first approach.',
        },
        {
            name: 'Prof. R. Kavitha',
            role: 'Director – Operations & Management',
            initials: 'RK',
            gradient: 'from-[#16A34A] to-[#22C55E]',
            bgGradient: 'bg-gradient-to-br from-[#16A34A] to-[#22C55E]',
            borderColor: 'hover:border-[#16A34A]/30',
            accentColor: '#16A34A',
            description:
                'Experienced academician and strategist with deep expertise in healthcare management, operations, and quality improvement.',
        },
        {
            name: 'Dr. Arun Kumar Retnaraj',
            role: 'Director – Compliance',
            initials: 'AR',
            gradient: 'from-[#9333EA] to-[#A855F7]',
            bgGradient: 'bg-gradient-to-br from-[#9333EA] to-[#A855F7]',
            borderColor: 'hover:border-[#9333EA]/30',
            accentColor: '#9333EA',
            description:
                'Senior healthcare professional ensuring regulatory compliance, quality standards, and best practices across all services.',
        },
    ];

    const values = [
        {
            icon: Heart,
            title: 'Compassion',
            description: 'We treat every patient with empathy, dignity, and respect.',
        },
        {
            icon: Star,
            title: 'Excellence',
            description: 'We strive for the highest standards in healthcare delivery.',
        },
        {
            icon: Shield,
            title: 'Trust',
            description: 'We build lasting relationships through transparency and reliability.',
        },
    ];

    return (
        <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5F5F5] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F5F5F5] rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-b from-transparent via-[#1E3A8A]/[0.01] to-transparent rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 lg:mb-20 animate-fade-in">
                    <div className="inline-flex items-center gap-2 bg-[#EFF6FF] px-4 py-2 rounded-full mb-4">
                        <Sparkles className="w-5 h-5 text-[#1E3A8A]" />
                        <span className="text-[#1E3A8A] font-semibold text-sm uppercase tracking-wider">
                            Who We Are
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A8A] mb-4 tracking-tight">
                        About Us
                    </h2>
                    <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                        Dedicated to delivering compassionate and high-quality healthcare services at home, where you feel most comfortable.
                    </p>
                </div>

                {/* PART 1: Company Overview */}
                <div className="max-w-4xl mx-auto mb-16 lg:mb-24 animate-fade-in">
                    <div className="bg-[#F5F5F5] rounded-2xl p-8 sm:p-10 lg:p-12 relative">
                        {/* Quote Icon */}
                        <div className="absolute -top-5 -left-5 w-12 h-12 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] rounded-xl flex items-center justify-center shadow-lg hidden sm:flex">
                            <Quote className="w-6 h-6 text-white" />
                        </div>

                        <div className="text-center sm:text-left">
                            <h3 className="text-2xl sm:text-3xl font-bold text-[#1E3A8A] mb-6">
                                Your Trusted Partner in Home Healthcare
                            </h3>
                            <div className="space-y-4">
                                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                                    Shree Akshai Healthcare Services provides professional and compassionate home healthcare solutions tailored to your unique needs.
                                </p>
                                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                                    Our expert team of doctors, nurses, and caregivers ensures high-quality medical care, helping patients recover and live comfortably in the familiarity of their own homes.
                                </p>
                                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                                    Combining medical expertise with advanced technology, we deliver personalized care that prioritizes safety, dignity, and well-being for every patient we serve.
                                </p>
                            </div>

                            {/* Core Values */}
                            <div className="grid sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                                {values.map((value, index) => (
                                    <div key={index} className="text-center">
                                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mx-auto mb-3 shadow-sm">
                                            <value.icon className="w-5 h-5 text-[#1E3A8A]" />
                                        </div>
                                        <h4 className="font-bold text-[#1E3A8A] text-sm mb-1">
                                            {value.title}
                                        </h4>
                                        <p className="text-gray-500 text-xs">{value.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 lg:mb-24 animate-fade-in">
                    {companyHighlights.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl flex items-center justify-center mx-auto mb-3">
                                <item.icon className="w-6 h-6 text-[#1E3A8A]" />
                            </div>
                            <div className="text-2xl sm:text-3xl font-bold text-[#1E3A8A] mb-1">
                                {item.stat}
                            </div>
                            <div className="text-sm text-gray-500 font-medium">{item.label}</div>
                        </div>
                    ))}
                </div>

                {/* PART 2: Leadership Team */}
                <div className="animate-fade-in">
                    <div className="text-center mb-12 lg:mb-16">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E3A8A] mb-4 tracking-tight">
                            Our Leadership
                        </h3>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            Meet the dedicated professionals guiding our mission to deliver exceptional home healthcare.
                        </p>
                    </div>

                    {/* Leaders Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                        {leaders.map((leader, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl border-2 border-transparent transition-all duration-300 transform hover:scale-[1.02] animate-leader-up"
                                style={{
                                    animationDelay: `${index * 150}ms`,
                                    borderColor: 'transparent',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = leader.accentColor + '4D';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'transparent';
                                }}
                            >
                                {/* Avatar with Initials */}
                                <div className="flex flex-col items-center text-center mb-6">
                                    <div
                                        className={`w-24 h-24 ${leader.bgGradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <span className="text-3xl font-bold text-white">
                                            {leader.initials}
                                        </span>
                                    </div>
                                    <h4 className="text-xl font-bold text-[#1E3A8A] mb-1 group-hover:text-[#3B82F6] transition-colors duration-300">
                                        {leader.name}
                                    </h4>
                                    <p className="text-sm font-semibold text-[#3B82F6] mb-3 bg-[#EFF6FF] px-3 py-1 rounded-full inline-block">
                                        {leader.role}
                                    </p>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 text-center leading-relaxed text-sm">
                                    {leader.description}
                                </p>

                                {/* Bottom Accent */}
                                <div
                                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        backgroundImage: `linear-gradient(to right, ${leader.gradient.split(' ')[1]}, ${leader.gradient.split(' ')[3]})`,
                                    }}
                                />

                                {/* Connect Line */}
                                <div className="flex justify-center mt-5 pt-4 border-t border-gray-50">
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-[#3B82F6] transition-colors duration-300"
                                    >
                                        Connect with team
                                        <ChevronRight className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Message */}
                <div className="text-center mt-16 lg:mt-20 animate-fade-in">
                    <div className="inline-flex items-center gap-3 bg-[#F0FDF4] rounded-full px-6 py-3 shadow-sm">
                        <Heart className="w-5 h-5 text-[#16A34A]" />
                        <span className="text-[#16A34A] font-medium text-sm">
                            Committed to delivering care with compassion and excellence
                        </span>
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
        
        @keyframes leaderUp {
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
        
        .animate-leader-up {
          animation: leaderUp 0.6s ease forwards;
          opacity: 0;
        }
      `}</style>
        </section>
    );
};

export default About;