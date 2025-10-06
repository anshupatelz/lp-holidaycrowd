import Image from "next/image";

export default function FamousAttractionsSection() {
    return (
        <section className="py-20 bg-gray-50/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary mb-6 tracking-wide">
                        Famous Attractions
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-xl md:text-2xl font-light text-gray-700 mb-4 leading-relaxed">
                            Must-Visit Attractions That Make Bali Truly Magical
                        </h3>
                        <p className="text-lg text-gray-600 font-light leading-relaxed">
                            Every destination tells a story. Here are the chapters you can't miss:
                        </p>
                    </div>
                </div>

                {/* Attractions Carousel */}
                <div className="relative max-w-7xl mx-auto">
                    {/* Carousel Container */}
                    <div className="relative overflow-hidden px-1">
                        {/* Attractions Track */}
                        <div id="attractions-track" className="flex transition-transform duration-500 ease-out">

                            {/* Attraction 1: Ubud Cultural Heart */}
                            <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
                                <div className="relative h-[500px] rounded-3xl overflow-hidden group">
                                    <Image src="https://www.inditales.com/wp-content/uploads/2017/09/ubud-bali-indonesia.jpg"
                                        alt="Ubud Cultural Heart"
                                        width={800}
                                        height={600}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                                    </Image>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                                        <h3 className="text-xl md:text-2xl font-light mb-2">Ubud Cultural Heart</h3>
                                        <p className="text-sm md:text-base font-light leading-relaxed opacity-80">
                                            Immerse yourself in Balinese culture with terraced rice fields, artisan
                                            markets, and traditional ceremonies.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Attraction 2: Nusa Penida Island */}
                            <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
                                <div className="relative h-[500px] rounded-3xl overflow-hidden group">
                                    <Image src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                        alt="Nusa Penida Island"
                                        width={800}
                                        height={600}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                                    </Image>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                                        <h3 className="text-xl md:text-2xl font-light mb-2">Nusa Penida Island</h3>
                                        <p className="text-sm md:text-base font-light leading-relaxed opacity-80">
                                            Crystal clear waters, dramatic cliffs, and pristine beaches perfect for
                                            snorkeling and photography.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Attraction 3: Uluwatu Temple */}
                            <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
                                <div className="relative h-[500px] rounded-3xl overflow-hidden group">
                                    <Image src="https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                        alt="Uluwatu Temple"
                                        width={800}
                                        height={600}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                                    </Image>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                                        <h3 className="text-xl md:text-2xl font-light mb-2">Uluwatu Temple</h3>
                                        <p className="text-sm md:text-base font-light leading-relaxed opacity-80">
                                            Ancient clifftop temple offering breathtaking sunset views and traditional
                                            Kecak fire dance performances.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Attraction 4: Kuta Beach */}
                            <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
                                <div className="relative h-[500px] rounded-3xl overflow-hidden group">
                                    <Image src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                        alt="Kuta Beach"
                                        width={800}
                                        height={600}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                                    </Image>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                                        <h3 className="text-xl md:text-2xl font-light mb-2">Kuta Beach</h3>
                                        <p className="text-sm md:text-base font-light leading-relaxed opacity-80">
                                            World-famous surfing destination with golden sands by day and vibrant
                                            nightlife by night.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Attraction 5: Sacred Monkey Forest */}
                            <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
                                <div className="relative h-[500px] rounded-3xl overflow-hidden group">
                                    <Image src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                        alt="Sacred Monkey Forest"
                                        width={800}
                                        height={600}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                                    </Image>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                                        <h3 className="text-xl md:text-2xl font-light mb-2">Sacred Monkey Forest</h3>
                                        <p className="text-sm md:text-base font-light leading-relaxed opacity-80">
                                            Ancient sanctuary home to hundreds of monkeys and mystical temple ruins
                                            shrouded in tropical forest.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Attraction 6: Tirta Gangga Water Palace */}
                            <div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
                                <div className="relative h-[500px] rounded-3xl overflow-hidden group">
                                    <Image src="https://images.unsplash.com/photo-1586500036706-41963de24d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                        alt="Tirta Gangga Water Palace"
                                        width={800}
                                        height={600}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                                    </Image>
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                                        <h3 className="text-xl md:text-2xl font-light mb-2">Tirta Gangga Water Palace</h3>
                                        <p className="text-sm md:text-base font-light leading-relaxed opacity-80">
                                            Ornate pools, fountains, and magnificent Balinese architecture showcasing
                                            the island's regal heritage.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button id="attractions-prev"
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button id="attractions-next"
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Indicators */}
                    <div className="flex justify-center gap-2 mt-8">
                        <button
                            className="attractions-indicator w-2 h-2 rounded-full bg-primary transition-all duration-300"
                            data-index="0"></button>
                        <button
                            className="attractions-indicator w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300"
                            data-index="1"></button>
                        <button
                            className="attractions-indicator w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300"
                            data-index="2"></button>
                        <button
                            className="attractions-indicator w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300"
                            data-index="3"></button>
                        <button
                            className="attractions-indicator w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300"
                            data-index="4"></button>
                        <button
                            className="attractions-indicator w-2 h-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-all duration-300"
                            data-index="5"></button>
                    </div>
                </div>
            </div>
        </section>
    );
}