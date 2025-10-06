import Image from "next/image";

export default function ActivitiesSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary mb-6 tracking-wide">
                        Activities
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-xl md:text-2xl font-light text-gray-700 mb-4 leading-relaxed">
                            Unforgettable Experiences That Create Lifelong Memories
                        </h3>
                        <p className="text-lg text-gray-600 font-light leading-relaxed">
                            Adventure, culture, relaxation - Bali offers something extraordinary for every type of
                            traveler:
                        </p>
                    </div>
                </div>

                {/* Activities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Activity 1: Mount Batur Sunrise Trek */}
                    <div
                        className="group rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden bg-white">
                        <div className="flex flex-col md:flex-row">
                            <div className="flex-shrink-0 w-full md:w-48 h-48 md:h-auto relative overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                    alt="Mount Batur Sunrise Trek"
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                                </Image>
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent"></div>                            </div>
                            <div className="flex-1 p-6">
                                <h3 className="text-xl font-medium text-primary mb-3">Mount Batur Sunrise Trek</h3>
                                <p className="text-sm font-light text-gray-700 leading-relaxed">
                                    Watch the sunrise from an active volcano with breakfast cooked by volcanic steam
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Activity 2: ATV Quad Biking Adventure */}
                    <div
                        className="group rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden bg-white">
                        <div className="flex flex-col md:flex-row">
                            <div className="flex-shrink-0 w-full md:w-48 h-48 md:h-auto relative overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                    alt="ATV Quad Biking Adventure"
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                                </Image>
                                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent"></div>
                            </div>
                            <div className="flex-1 p-6">
                                <h3 className="text-xl font-medium text-primary mb-3">ATV Quad Biking Adventure</h3>
                                <p className="text-sm font-light text-gray-700 leading-relaxed">
                                    Navigate through jungles, rice fields, and traditional villages on an
                                    adrenaline-pumping ride
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Activity 3: White Water Rafting */}
                    <div
                        className="group rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden bg-white">
                        <div className="flex flex-col md:flex-row">
                            <div className="flex-shrink-0 w-full md:w-48 h-48 md:h-auto relative overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                    alt="White Water Rafting"
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                                </Image>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent"></div>
                            </div>
                            <div className="flex-1 p-6">
                                <h3 className="text-xl font-medium text-primary mb-3">White Water Rafting</h3>
                                <p className="text-sm font-light text-gray-700 leading-relaxed">
                                    Conquer thrilling rapids on the Ayung River surrounded by pristine tropical forest
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Activity 4: Hot Air Balloon Ride */}
                    <div
                        className="group rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden bg-white">
                        <div className="flex flex-col md:flex-row">
                            <div className="flex-shrink-0 w-full md:w-48 h-48 md:h-auto relative overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1498550744921-75f79806b163?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                    alt="Hot Air Balloon Ride"
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                                </Image>
                                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent"></div>
                            </div>
                            <div className="flex-1 p-6">
                                <h3 className="text-xl font-medium text-primary mb-3">Hot Air Balloon Ride</h3>
                                <p className="text-sm font-light text-gray-700 leading-relaxed">
                                    Float above Bali's stunning landscape at sunrise for magical aerial views
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Activity 5: Traditional Balinese Spa */}
                    <div
                        className="group rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden bg-white">
                        <div className="flex flex-col md:flex-row">
                            <div className="flex-shrink-0 w-full md:w-48 h-48 md:h-auto relative overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                    alt="Traditional Balinese Spa"
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                                </Image>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent"></div>
                            </div>
                            <div className="flex-1 p-6">
                                <h3 className="text-xl font-medium text-primary mb-3">Traditional Balinese Spa</h3>
                                <p className="text-sm font-light text-gray-700 leading-relaxed">
                                    Rejuvenate with authentic treatments using local herbs and ancient techniques
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Activity 6: Cooking className Experience */}
                    <div
                        className="group rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden bg-white">
                        <div className="flex flex-col md:flex-row">
                            <div className="flex-shrink-0 w-full md:w-48 h-48 md:h-auto relative overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                    alt="Cooking className Experience"
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                                </Image>
                                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-transparent"></div>
                            </div>
                            <div className="flex-1 p-6">
                                <h3 className="text-xl font-medium text-primary mb-3">Cooking className Experience</h3>
                                <p className="text-sm font-light text-gray-700 leading-relaxed">
                                    Learn to prepare traditional Balinese dishes with local families in their homes
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Activity 7: Snorkeling & Diving */}
                    <div
                        className="group rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden bg-white">
                        <div className="flex flex-col md:flex-row">
                            <div className="flex-shrink-0 w-full md:w-48 h-48 md:h-auto relative overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                    alt="Snorkeling & Diving"
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                                </Image>
                                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-transparent"></div>
                            </div>
                            <div className="flex-1 p-6">
                                <h3 className="text-xl font-medium text-primary mb-3">Snorkeling & Diving</h3>
                                <p className="text-sm font-light text-gray-700 leading-relaxed">
                                    Explore vibrant coral reefs and swim with tropical marine life in crystal waters
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Activity 8: Instagram Photo Tours */}
                    <div
                        className="group rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden bg-white">
                        <div className="flex flex-col md:flex-row">
                            <div className="flex-shrink-0 w-full md:w-48 h-48 md:h-auto relative overflow-hidden">
                                <Image src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                                    alt="Instagram Photo Tours"
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                                </Image>
                                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-transparent"></div>
                            </div>
                            <div className="flex-1 p-6">
                                <h3 className="text-xl font-medium text-primary mb-3">Instagram Photo Tours</h3>
                                <p className="text-sm font-light text-gray-700 leading-relaxed">
                                    Capture perfect shots at Bali's most photogenic locations with professional guidance
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-br from-primary/5 to-gray-50 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-light text-primary mb-4">
                            Create Your Perfect Adventure Mix
                        </h3>
                        <p className="text-lg text-gray-600 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
                            Whether you seek adrenaline, culture, or relaxation, we'll craft the perfect combination of
                            activities for your dream Bali experience.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                className="bg-primary text-white px-8 py-4 rounded-full font-light text-lg hover:bg-secondary transition-all duration-300 shadow-sm">
                                Know More About Bali
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
