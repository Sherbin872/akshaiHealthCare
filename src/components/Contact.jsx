import React, { useState } from 'react';
import {
    MapPin,
    Phone,
    Mail,
    Clock,
    Send,
    Building2,
    ChevronRight,
    CheckCircle,
    Loader2,
} from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const contactInfo = [
        {
            icon: MapPin,
            label: 'Main Office',
            value: 'Plot No. 17, Chellathai Nagar,\nNGO \'A\' Colony, Tirunelveli - 627007,\nTamil Nadu',
            color: 'text-[#DC2626]',
            bgColor: 'bg-[#FEF2F2]',
        },
        {
            icon: Phone,
            label: 'Phone Number',
            value: '+91 94426 59377',
            href: 'tel:+919442659377',
            color: 'text-[#16A34A]',
            bgColor: 'bg-[#F0FDF4]',
        },
        {
            icon: Mail,
            label: 'Email Address',
            value: 'safhe25@gmail.com',
            href: 'mailto:safhe25@gmail.com',
            color: 'text-[#3B82F6]',
            bgColor: 'bg-[#EFF6FF]',
        },
    ];

    const branchOffice = {
        icon: Building2,
        label: 'Branch Office',
        value: 'Available in select cities across Tamil Nadu.\nContact us for the nearest location.',
        color: 'text-[#9333EA]',
        bgColor: 'bg-[#FAF5FF]',
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        } else if (formData.name.trim().length < 2) {
            newErrors.name = 'Name must be at least 2 characters';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^[\d\s+\-()]{10,15}$/.test(formData.phone.trim())) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: '',
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            console.log('Form Data Submitted:', formData);
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: '', phone: '', message: '' });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);
        }, 1500);
    };

    return (
        <section className="py-16 lg:py-24 bg-[#F5F5F5] relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#16A34A]/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
                <div className="absolute inset-0 bg-[radial-gradient(#1E3A8A_1px,transparent_1px)] bg-[length:40px_40px] opacity-[0.02]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16 lg:mb-20 animate-fade-in">
                    <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-4">
                        <Mail className="w-5 h-5 text-[#1E3A8A]" />
                        <span className="text-[#1E3A8A] font-semibold text-sm uppercase tracking-wider">
                            Get In Touch
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A8A] mb-4 tracking-tight">
                        Contact Us
                    </h2>
                    <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                        Get in touch with us for reliable and compassionate healthcare services. We're here to help you and your loved ones.
                    </p>
                </div>

                {/* Contact Content Grid */}
                <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 max-w-6xl mx-auto">
                    {/* LEFT SIDE - Contact Information */}
                    <div className="lg:col-span-2 animate-slide-in-left">
                        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md h-full">
                            <h3 className="text-xl font-bold text-[#1E3A8A] mb-6 flex items-center gap-2">
                                <span className="w-1 h-6 bg-[#3B82F6] rounded-full" />
                                Contact Information
                            </h3>

                            <div className="space-y-6">
                                {contactInfo.map((item, index) => (
                                    <div
                                        key={index}
                                        className="group flex gap-4 p-4 rounded-xl hover:bg-[#F5F5F5] transition-all duration-300"
                                    >
                                        <div
                                            className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <item.icon className={`w-6 h-6 ${item.color}`} />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                                                {item.label}
                                            </p>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    className="text-gray-700 font-medium hover:text-[#3B82F6] transition-colors duration-300 break-words"
                                                >
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="text-gray-700 font-medium whitespace-pre-line">
                                                    {item.value}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}

                                {/* Divider */}
                                <div className="border-t border-gray-100 pt-4">
                                    <div className="group flex gap-4 p-4 rounded-xl hover:bg-[#F5F5F5] transition-all duration-300">
                                        <div
                                            className={`w-12 h-12 ${branchOffice.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                                        >
                                            <branchOffice.icon className={`w-6 h-6 ${branchOffice.color}`} />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                                                {branchOffice.label}
                                            </p>
                                            <p className="text-gray-700 font-medium whitespace-pre-line">
                                                {branchOffice.value}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Availability Badge */}
                            <div className="mt-8 p-4 bg-[#F0FDF4] rounded-xl flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#16A34A] rounded-full flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-[#16A34A]">24/7 Available</p>
                                    <p className="text-xs text-gray-600">Emergency support always ready</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE - Contact Form */}
                    <div className="lg:col-span-3 animate-slide-in-right">
                        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md">
                            <h3 className="text-xl font-bold text-[#1E3A8A] mb-2 flex items-center gap-2">
                                <span className="w-1 h-6 bg-[#16A34A] rounded-full" />
                                Send Us a Message
                            </h3>
                            <p className="text-gray-500 text-sm mb-6">
                                Fill out the form below and our team will get back to you shortly.
                            </p>

                            {/* Success Message */}
                            {isSubmitted && (
                                <div className="mb-6 p-4 bg-[#F0FDF4] border border-[#16A34A]/20 rounded-xl flex items-center gap-3 animate-fade-in">
                                    <CheckCircle className="w-5 h-5 text-[#16A34A] flex-shrink-0" />
                                    <div>
                                        <p className="text-sm font-bold text-[#16A34A]">Message Sent Successfully!</p>
                                        <p className="text-xs text-gray-600">We'll get back to you within 24 hours.</p>
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                {/* Name Field */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-semibold text-gray-700 mb-1.5"
                                    >
                                        Full Name <span className="text-[#DC2626]">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter your full name"
                                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 outline-none text-gray-700 placeholder-gray-400 ${errors.name
                                                ? 'border-[#DC2626] focus:border-[#DC2626] bg-[#FEF2F2]'
                                                : 'border-gray-200 focus:border-[#3B82F6] bg-white hover:border-gray-300'
                                            }`}
                                    />
                                    {errors.name && (
                                        <p className="mt-1.5 text-xs text-[#DC2626] flex items-center gap-1">
                                            <span className="w-1 h-1 bg-[#DC2626] rounded-full" />
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                {/* Phone Field */}
                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-sm font-semibold text-gray-700 mb-1.5"
                                    >
                                        Phone Number <span className="text-[#DC2626]">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Enter your phone number"
                                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 outline-none text-gray-700 placeholder-gray-400 ${errors.phone
                                                ? 'border-[#DC2626] focus:border-[#DC2626] bg-[#FEF2F2]'
                                                : 'border-gray-200 focus:border-[#3B82F6] bg-white hover:border-gray-300'
                                            }`}
                                    />
                                    {errors.phone && (
                                        <p className="mt-1.5 text-xs text-[#DC2626] flex items-center gap-1">
                                            <span className="w-1 h-1 bg-[#DC2626] rounded-full" />
                                            {errors.phone}
                                        </p>
                                    )}
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-semibold text-gray-700 mb-1.5"
                                    >
                                        Message <span className="text-[#DC2626]">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your healthcare needs..."
                                        rows={4}
                                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 outline-none text-gray-700 placeholder-gray-400 resize-none ${errors.message
                                                ? 'border-[#DC2626] focus:border-[#DC2626] bg-[#FEF2F2]'
                                                : 'border-gray-200 focus:border-[#3B82F6] bg-white hover:border-gray-300'
                                            }`}
                                    />
                                    {errors.message && (
                                        <p className="mt-1.5 text-xs text-[#DC2626] flex items-center gap-1">
                                            <span className="w-1 h-1 bg-[#DC2626] rounded-full" />
                                            {errors.message}
                                        </p>
                                    )}
                                    <div className="flex justify-between items-center mt-1.5">
                                        <p className="text-xs text-gray-400">
                                            {formData.message.length} / 500 characters
                                        </p>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-[#1E3A8A] text-white font-semibold rounded-xl hover:bg-[#3B82F6] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Submit Request
                                            <ChevronRight className="w-5 h-5" />
                                        </>
                                    )}
                                </button>

                                {/* Privacy Note */}
                                <p className="text-xs text-gray-400 text-center">
                                    By submitting, you agree to our{' '}
                                    <a href="#privacy" className="text-[#3B82F6] hover:underline">
                                        Privacy Policy
                                    </a>{' '}
                                    and consent to being contacted.
                                </p>
                            </form>
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
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease forwards;
          opacity: 0;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease forwards;
          opacity: 0;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease forwards;
          opacity: 0;
        }
      `}</style>
        </section>
    );
};

export default Contact;