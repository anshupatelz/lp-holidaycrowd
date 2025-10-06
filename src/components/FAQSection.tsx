export default function FAQSection() {
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
                            className="faq-question w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-all duration-300 group"
                            data-faq="faq1">
                            <span className="text-lg font-medium text-primary pr-4 leading-relaxed">
                                Q: Is Bali safe for Indian tourists?
                            </span>
                            <svg className="faq-icon w-6 h-6 text-primary transition-transform duration-300 flex-shrink-0"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div id="faq1" className="faq-answer hidden px-8 pb-6">
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
                            className="faq-question w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-all duration-300 group"
                            data-faq="faq2">
                            <span className="text-lg font-medium text-primary pr-4 leading-relaxed">
                                Q: What's the best time to visit Bali?
                            </span>
                            <svg className="faq-icon w-6 h-6 text-primary transition-transform duration-300 flex-shrink-0"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div id="faq2" className="faq-answer hidden px-8 pb-6">
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
                            className="faq-question w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-all duration-300 group"
                            data-faq="faq3">
                            <span className="text-lg font-medium text-primary pr-4 leading-relaxed">
                                Q: Do I need a visa for Bali?
                            </span>
                            <svg className="faq-icon w-6 h-6 text-primary transition-transform duration-300 flex-shrink-0"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div id="faq3" className="faq-answer hidden px-8 pb-6">
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
                            className="faq-question w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-all duration-300 group"
                            data-faq="faq4">
                            <span className="text-lg font-medium text-primary pr-4 leading-relaxed">
                                Q: What's included in your packages?
                            </span>
                            <svg className="faq-icon w-6 h-6 text-primary transition-transform duration-300 flex-shrink-0"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div id="faq4" className="faq-answer hidden px-8 pb-6">
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
                            className="faq-question w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-all duration-300 group"
                            data-faq="faq5">
                            <span className="text-lg font-medium text-primary pr-4 leading-relaxed">
                                Q: Can I customize my itinerary?
                            </span>
                            <svg className="faq-icon w-6 h-6 text-primary transition-transform duration-300 flex-shrink-0"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div id="faq5" className="faq-answer hidden px-8 pb-6">
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
                            className="faq-question w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-all duration-300 group"
                            data-faq="faq6">
                            <span className="text-lg font-medium text-primary pr-4 leading-relaxed">
                                Q: What if I need to cancel my trip?
                            </span>
                            <svg className="faq-icon w-6 h-6 text-primary transition-transform duration-300 flex-shrink-0"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div id="faq6" className="faq-answer hidden px-8 pb-6">
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