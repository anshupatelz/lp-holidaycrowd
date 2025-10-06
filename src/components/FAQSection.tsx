'use client';

import { useState, useRef } from 'react';

export default function FAQSection() {
    const [openFaq, setOpenFaq] = useState<string | null>(null);
    const questionRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

    const toggleFaq = (faqId: string) => {
        if (openFaq === faqId) {
            setOpenFaq(null);
        } else {
            setOpenFaq(faqId);

            // Smooth scroll to question if it's not fully visible
            setTimeout(() => {
                const questionElement = questionRefs.current[faqId];
                if (questionElement) {
                    const rect = questionElement.getBoundingClientRect();
                    if (rect.top < 100) {
                        questionElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start',
                        });
                    }
                }
            }, 300);
        }
    };

    return (
        <section className="py-20 bg-gray-50/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary mb-6 tracking-wide">
                        FAQs
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-xl md:text-2xl font-light text-gray-700 mb-4 leading-relaxed">
                            Everything You Need to Know Before You Go
                        </h3>
                    </div>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-4xl mx-auto space-y-4">

                    {/* FAQ 1: Is Bali safe for Indian tourists? */}
                    <div
                        className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <button
                            ref={(el) => { questionRefs.current['faq1'] = el; }}
                            className={`w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-all duration-300 group ${openFaq === 'faq1' ? 'bg-gray-50/50' : ''}`}
                            onClick={() => toggleFaq('faq1')}>
                            <span className="text-lg font-medium text-primary pr-4 leading-relaxed">
                                Q: Is Bali safe for Indian tourists?
                            </span>
                            <svg className={`w-6 h-6 text-primary transition-transform duration-300 flex-shrink-0 ${openFaq === 'faq1' ? 'rotate-180' : ''}`}
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className={`px-8 pb-6 ${openFaq === 'faq1' ? '' : 'hidden'}`}>
                            <p className="text-gray-700 font-light leading-relaxed text-base">
                                A: Absolutely! Bali is one of the safest destinations for Indian travelers. Our local
                                team ensures 24/7 support, and we provide comprehensive safety guidelines for a
                                worry-free experience.
                            </p>
                        </div>
                    </div>

                    {/* FAQ 2: What's the best time to visit Bali? */}
                    <div
                        className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <button
                            ref={(el) => { questionRefs.current['faq2'] = el; }}
                            className={`w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-all duration-300 group ${openFaq === 'faq2' ? 'bg-gray-50/50' : ''}`}
                            onClick={() => toggleFaq('faq2')}>
                            <span className="text-lg font-medium text-primary pr-4 leading-relaxed">
                                Q: What's the best time to visit Bali?
                            </span>
                            <svg className={`w-6 h-6 text-primary transition-transform duration-300 flex-shrink-0 ${openFaq === 'faq2' ? 'rotate-180' : ''}`}
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className={`px-8 pb-6 ${openFaq === 'faq2' ? '' : 'hidden'}`}>
                            <p className="text-gray-700 font-light leading-relaxed text-base">
                                A: April to October offers perfect weather with minimal rainfall. However, Bali is
                                beautiful year-round, and we adjust activities based on seasonal conditions to ensure
                                you have an amazing time.
                            </p>
                        </div>
                    </div>

                    {/* FAQ 3: Do I need a visa for Bali? */}
                    <div
                        className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <button
                            ref={(el) => { questionRefs.current['faq3'] = el; }}
                            className={`w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-all duration-300 group ${openFaq === 'faq3' ? 'bg-gray-50/50' : ''}`}
                            onClick={() => toggleFaq('faq3')}>
                            <span className="text-lg font-medium text-primary pr-4 leading-relaxed">
                                Q: Do I need a visa for Bali?
                            </span>
                            <svg className={`w-6 h-6 text-primary transition-transform duration-300 flex-shrink-0 ${openFaq === 'faq3' ? 'rotate-180' : ''}`}
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className={`px-8 pb-6 ${openFaq === 'faq3' ? '' : 'hidden'}`}>
                            <p className="text-gray-700 font-light leading-relaxed text-base">
                                A: Yes, Indian citizens need a visa. We provide complete visa assistance and guidance to
                                make the process smooth and hassle-free for you.
                            </p>
                        </div>
                    </div>

                    {/* FAQ 4: What's included in your packages? */}
                    <div
                        className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <button
                            ref={(el) => { questionRefs.current['faq4'] = el; }}
                            className={`w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-all duration-300 group ${openFaq === 'faq4' ? 'bg-gray-50/50' : ''}`}
                            onClick={() => toggleFaq('faq4')}>
                            <span className="text-lg font-medium text-primary pr-4 leading-relaxed">
                                Q: What's included in your packages?
                            </span>
                            <svg className={`w-6 h-6 text-primary transition-transform duration-300 flex-shrink-0 ${openFaq === 'faq4' ? 'rotate-180' : ''}`}
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className={`px-8 pb-6 ${openFaq === 'faq4' ? '' : 'hidden'}`}>
                            <p className="text-gray-700 font-light leading-relaxed text-base">
                                A: All our packages include return flights, accommodation, daily breakfast, airport
                                transfers, guided tours, and activity costs. No hidden charges - what you see is what
                                you pay.
                            </p>
                        </div>
                    </div>

                    {/* FAQ 5: Can I customize my itinerary? */}
                    <div
                        className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <button
                            ref={(el) => { questionRefs.current['faq5'] = el; }}
                            className={`w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-all duration-300 group ${openFaq === 'faq5' ? 'bg-gray-50/50' : ''}`}
                            onClick={() => toggleFaq('faq5')}>
                            <span className="text-lg font-medium text-primary pr-4 leading-relaxed">
                                Q: Can I customize my itinerary?
                            </span>
                            <svg className={`w-6 h-6 text-primary transition-transform duration-300 flex-shrink-0 ${openFaq === 'faq5' ? 'rotate-180' : ''}`}
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className={`px-8 pb-6 ${openFaq === 'faq5' ? '' : 'hidden'}`}>
                            <p className="text-gray-700 font-light leading-relaxed text-base">
                                A: Absolutely! Every package is 100% customizable. Our travel experts will work with you
                                to create the perfect itinerary that matches your interests and budget.
                            </p>
                        </div>
                    </div>

                    {/* FAQ 6: What if I need to cancel my trip? */}
                    <div
                        className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <button
                            ref={(el) => { questionRefs.current['faq6'] = el; }}
                            className={`w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-all duration-300 group ${openFaq === 'faq6' ? 'bg-gray-50/50' : ''}`}
                            onClick={() => toggleFaq('faq6')}>
                            <span className="text-lg font-medium text-primary pr-4 leading-relaxed">
                                Q: What if I need to cancel my trip?
                            </span>
                            <svg className={`w-6 h-6 text-primary transition-transform duration-300 flex-shrink-0 ${openFaq === 'faq6' ? 'rotate-180' : ''}`}
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className={`px-8 pb-6 ${openFaq === 'faq6' ? '' : 'hidden'}`}>
                            <p className="text-gray-700 font-light leading-relaxed text-base">
                                A: We offer flexible cancellation with full refund up to 48 hours before departure. We
                                understand plans can change, so we keep it simple and stress-free.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div
                        className="bg-white rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-sm border border-gray-100">
                        <h3 className="text-2xl md:text-3xl font-light text-primary mb-4">
                            Still Have Questions?
                        </h3>
                        <p className="text-lg text-gray-600 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
                            Our travel experts are here to help! Get personalized answers and start planning your dream
                            Bali adventure today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                className="bg-primary text-white px-8 py-4 rounded-full font-light text-lg hover:bg-secondary transition-all duration-300 shadow-sm">
                                Ask Our Expert
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}