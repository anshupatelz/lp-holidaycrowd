'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import MultiStepFormPopup from './MultiStepFormPopup';
import Link from 'next/link';

export default function FooterSection() {
    const router = useRouter();
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        location: '',
        utm_source: '',
        utm_campaign: '',
        utm_adgroup: '',
        utm_ad: '',
        utm_keyword: '',
        page_url: '',
    });

    const [otpSent, setOtpSent] = useState(false);
    const [otpValue, setOtpValue] = useState('');
    const [generatedOtp, setGeneratedOtp] = useState('');
    const [isVerifying, setIsVerifying] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    // Extract UTM parameters from URL on mount
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const urlParams = new URLSearchParams(window.location.search);
            const pageUrl = window.location.href;

            setFormData(prev => ({
                ...prev,
                utm_source: urlParams.get('utm_source') || '',
                utm_campaign: urlParams.get('utm_campaign') || '',
                utm_adgroup: urlParams.get('utm_adgroup') || '',
                utm_ad: urlParams.get('utm_ad') || '',
                utm_keyword: urlParams.get('utm_keyword') || '',
                page_url: pageUrl,
            }));
        }
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Generate 6-digit OTP
    const generateOTP = () => {
        return Math.floor(100000 + Math.random() * 900000).toString();
    };

    // Send OTP to phone
    const sendOTP = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);
        setMessage({ type: '', text: '' });

        try {
            const otp = generateOTP();
            setGeneratedOtp(otp);

            // Call our Next.js API route instead of direct SMS API
            const response = await fetch('/api/send-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phoneNumber: formData.phoneNumber,
                    otp: otp,
                }),
            });

            const result = await response.json();
            console.log('OTP API Response:', result);

            if (result.success) {
                setOtpSent(true);
                setMessage({ type: 'success', text: 'OTP sent successfully! Please check your phone.' });

                // Auto-expire OTP after 5 minutes
                setTimeout(() => {
                    setGeneratedOtp('');
                    setOtpSent(false);
                    setMessage({ type: 'error', text: 'OTP expired. Please request a new one.' });
                }, 5 * 60 * 1000);
            } else {
                setMessage({ type: 'error', text: `Failed to send OTP: ${result.message || 'Please check your phone number'}` });
            }
        } catch (error) {
            console.error('Error sending OTP:', error);
            setMessage({ type: 'error', text: 'Error sending OTP. Please try again.' });
        } finally {
            setIsSending(false);
        }
    };

    // Verify OTP and submit form
    const verifyOTPAndSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsVerifying(true);
        setMessage({ type: '', text: '' });

        // Verify OTP
        if (otpValue !== generatedOtp) {
            setMessage({ type: 'error', text: 'Invalid OTP. Please try again.' });
            setIsVerifying(false);
            return;
        }

        // OTP verified, now submit to CRM
        setIsSubmitting(true);
        try {
            // Prepare form data with default values for required fields
            const crmData = {
                fullName: formData.fullName,
                phoneNumber: formData.phoneNumber,
                emailAddress: formData.emailAddress,
                location: formData.location,
                destination: 'Bali',
                tripDate: new Date().toISOString().split('T')[0],
                days: '0',
                adults: '0',
                children: '0',
                infants: '0',
                hotelCategory: 'Standard',
                flexibleDate: false,
                whatsappUpdates: true,
                tripTheme: 'Leisure',
                tripType: 'leisure',
                travelers: '0',
                utm_source: formData.utm_source,
                utm_campaign: formData.utm_campaign,
                utm_adgroup: formData.utm_adgroup,
                utm_ad: formData.utm_ad,
                utm_keyword: formData.utm_keyword,
                page_url: formData.page_url,
            };

            // Call our Next.js API route instead of direct CRM API
            const response = await fetch('/api/submit-crm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(crmData),
            });

            const result = await response.json();
            console.log('CRM API Response:', result);

            if (result.success) {
                setMessage({ type: 'success', text: '🎉 Success! Redirecting...' });
                setTimeout(() => {
                    router.push('/thank-you');
                }, 1500);
            } else {
                setMessage({ type: 'error', text: 'Failed to submit form. Please try again.' });
            }
        } catch (error) {
            console.error('Error submitting to CRM:', error);
            setMessage({ type: 'error', text: 'Error submitting form. Please try again.' });
        } finally {
            setIsVerifying(false);
            setIsSubmitting(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        if (!otpSent) {
            sendOTP(e);
        } else {
            verifyOTPAndSubmit(e);
        }
    };

    return (
        <footer id="contact" className="bg-primary text-white">
            {/* CTA Section */}
            <div className="py-20 bg-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 tracking-wide">
                            Ready To Start Your Journey
                        </h2>
                        <p className="text-lg text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
                            Get in touch with our travel experts to plan your perfect Bali adventure. We're here to make your dream come true
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Contact Form */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                            <h3 className="text-2xl font-light text-white mb-6">Send Us a Message</h3>

                            {/* Success/Error Message */}
                            {message.text && (
                                <div className={`mb-4 p-4 rounded-xl ${message.type === 'success'
                                    ? 'bg-green-500/20 border border-green-500/30 text-green-100'
                                    : 'bg-red-500/20 border border-red-500/30 text-red-100'
                                    }`}>
                                    <p className="text-sm font-light">{message.text}</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="fullName" className="block text-sm font-light text-white/90 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            placeholder="Your Name"
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all duration-300"
                                            required
                                            disabled={otpSent}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phoneNumber" className="block text-sm font-light text-white/90 mb-2">
                                            Phone Number (India +91)
                                        </label>
                                        <div className="relative">
                                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 font-light pointer-events-none">
                                                +91
                                            </span>
                                            <input
                                                type="tel"
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                value={formData.phoneNumber}
                                                onChange={(e) => {
                                                    const value = e.target.value.replace(/\D/g, '');
                                                    if (value.length <= 10) {
                                                        setFormData(prev => ({ ...prev, phoneNumber: value }));
                                                    }
                                                }}
                                                placeholder="9876543210"
                                                maxLength={10}
                                                className="w-full pl-14 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all duration-300"
                                                required
                                                disabled={otpSent}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="emailAddress" className="block text-sm font-light text-white/90 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="emailAddress"
                                        name="emailAddress"
                                        value={formData.emailAddress}
                                        onChange={handleInputChange}
                                        placeholder="your@email.com"
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all duration-300"
                                        required
                                        disabled={otpSent}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="location" className="block text-sm font-light text-white/90 mb-2">
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        id="location"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                        placeholder="Your location"
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all duration-300"
                                        required
                                        disabled={otpSent}
                                    />
                                </div>

                                {/* OTP Input Field - Shows only after OTP is sent */}
                                {otpSent && (
                                    <div>
                                        <label htmlFor="otp" className="block text-sm font-light text-white/90 mb-2">
                                            Enter OTP
                                        </label>
                                        <input
                                            type="text"
                                            id="otp"
                                            value={otpValue}
                                            onChange={(e) => setOtpValue(e.target.value)}
                                            placeholder="Enter 6-digit OTP"
                                            maxLength={6}
                                            pattern="[0-9]{6}"
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/30 transition-all duration-300"
                                            required
                                        />
                                        <p className="text-xs text-white/70 mt-2">
                                            OTP is valid for 5 minutes. Didn't receive?
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setOtpSent(false);
                                                    setOtpValue('');
                                                    setMessage({ type: '', text: '' });
                                                }}
                                                className="ml-1 underline hover:text-white cursor-pointer font-medium"
                                            >
                                                Resend OTP
                                            </button>
                                        </p>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSending || isVerifying || isSubmitting}
                                    className="w-full bg-white text-primary px-8 py-4 rounded-full font-light text-lg hover:bg-white/90 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                                >
                                    {isSending
                                        ? 'Sending OTP...'
                                        : isVerifying || isSubmitting
                                            ? 'Submitting...'
                                            : otpSent
                                                ? 'Verify OTP & Submit'
                                                : 'Send OTP'}
                                </button>

                                {/* OR Divider */}
                                <div className="relative my-6">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-white/20"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-4 bg-white/5 text-white/70 font-light">OR</span>
                                    </div>
                                </div>

                                {/* Plan Your Trip Button */}
                                <button
                                    type="button"
                                    onClick={() => setIsPopupOpen(true)}
                                    className="w-full bg-white/10 text-white px-8 py-4 rounded-full font-light text-lg hover:bg-white/20 transition-all duration-300 border border-white/20 cursor-pointer"
                                >
                                    Plan Your Custom Trip →
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-6">
                            {/* Get in Touch */}
                            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                                <h3 className="text-2xl font-light text-white mb-8">Get in Touch</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-light text-sm mb-1 opacity-90">Phone</h4>
                                            <p className="text-white font-light text-lg">
                                                <Link href="tel:+919958264359">
                                                    +91 9958264359
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg
                                                className="w-6 h-6"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-light text-sm mb-1 opacity-90">WhatsApp</h4>
                                            <p className="text-white font-light text-lg">
                                                <Link href="https://wa.me/+919958264359">
                                                    +91 9958264359
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-light text-sm mb-1 opacity-90">Email</h4>
                                            <p className="text-white font-light text-lg">
                                                <Link href="mailto:support@holidayscrowd.com">
                                                    support@holidayscrowd.com
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-light text-sm mb-1 opacity-90">Office</h4>
                                            <p className="text-white/90 font-light leading-relaxed">
                                                C-402, Tower C, KLJ Noida One,<br />
                                                Sector 62, Uttar Pradesh<br />
                                                India, 201309
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-light text-sm mb-1 opacity-90">Business Hours</h4>
                                            <div className="text-white/90 font-light text-sm space-y-1 leading-relaxed">
                                                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                                <p>Saturday: 10:00 AM - 4:00 PM</p>
                                                <p>Sunday: Closed</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Emergency Support */}
                            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                                <h3 className="text-xl font-light text-white mb-4">24/7 Emergency Support</h3>
                                <p className="text-white/90 font-light mb-6 leading-relaxed">
                                    Traveling with peace of mind. Our emergency support team is available round the clock during your trip.
                                </p>
                                <Link href="tel:+919958264359">
                                    <button className="bg-white/10 text-white px-6 py-3 rounded-full font-light hover:bg-white/20 transition-all duration-300 border border-white/ cursor-pointer">
                                        Emergency Hotline
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-secondary/20 py-6 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <p className="text-white/90 font-light text-sm">
                            Copyright © 2025 Holidays Crowd Private Limited. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>

            {/* Multi-Step Form Popup */}
            <MultiStepFormPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
            />
        </footer>
    );
}
