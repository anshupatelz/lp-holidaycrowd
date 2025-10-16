'use client';

import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import MultiStepFormPopup from './MultiStepFormPopup';

export default function ActivitiesSection() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'start',
        slidesToScroll: 1,
    });
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollTo = useCallback(
        (index: number) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    );

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on('select', onSelect);
        return () => {
            emblaApi.off('select', onSelect);
        };
    }, [emblaApi, onSelect]);

    const activities = [
        {
            title: "Mount Batur Sunrise Trek",
            description: "Watch the sunrise from an active volcano with breakfast cooked by volcanic steam",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            gradient: "from-orange-500/20"
        },
        {
            title: "ATV Quad Biking Adventure",
            description: "Navigate through jungles, rice fields, and traditional villages on an adrenaline-pumping ride",
            image: "https://holidayscrowd-assets.imgix.net/3007d941-50ae-4c46-8312-e6fa461384b1?auto=format%2Ccompress&w=900&q=100&fm=webp",
            gradient: "from-green-500/20"
        },
        {
            title: "White Water Rafting",
            description: "Conquer thrilling rapids on the Ayung River surrounded by pristine tropical forest",
            image: "https://holidayscrowd-assets.imgix.net/56c13f93-d149-4bdf-aa2e-19b155a7fb0b?auto=format%2Ccompress&w=900&q=100&fm=webp",
            gradient: "from-blue-500/20"
        },
        {
            title: "Hot Air Balloon Ride",
            description: "Float above Bali's stunning landscape at sunrise for magical aerial views",
            image: "https://holidayscrowd-assets.imgix.net/395c5bff-a1ff-4861-b31e-73d1846c4185?auto=format%2Ccompress&w=900&q=100&fm=webp",
            gradient: "from-red-500/20"
        },
        {
            title: "Traditional Balinese Spa",
            description: "Rejuvenate with authentic treatments using local herbs and ancient techniques",
            image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            gradient: "from-purple-500/20"
        },
        {
            title: "Snorkeling & Diving",
            description: "Explore vibrant coral reefs and swim with tropical marine life in crystal waters",
            image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
            gradient: "from-pink-500/20"
        }
    ];

    return (
        <>
            <section id="activities" className="py-20 bg-white">
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
                        </div>
                    </div>

                    {/* Mobile Carousel (visible on mobile) */}
                    <div className="md:hidden">
                        <div className="overflow-hidden -mx-4" ref={emblaRef}>
                            <div className="flex touch-pan-y">
                                {activities.map((activity, index) => (
                                    <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                                        <div className="group rounded-3xl border border-gray-100 shadow-lg overflow-hidden bg-white">
                                            <div className="relative w-full h-64 overflow-hidden">
                                                <Image
                                                    src={activity.image}
                                                    alt={activity.title}
                                                    fill
                                                    sizes="100vw"
                                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className={`absolute inset-0 bg-gradient-to-r ${activity.gradient} to-transparent`}></div>
                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-xl font-medium text-primary mb-3">{activity.title}</h3>
                                                <p className="text-sm font-light text-gray-700 leading-relaxed">
                                                    {activity.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Carousel Dots */}
                        <div className="flex justify-center gap-2 mt-6">
                            {scrollSnaps.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === selectedIndex
                                        ? 'bg-primary w-8'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                    onClick={() => scrollTo(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Desktop Grid (hidden on mobile) */}
                    <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8">
                        {activities.map((activity, index) => (
                            <div
                                key={index}
                                className="group rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden bg-white"
                            >
                                <div className="flex flex-col md:flex-row md:h-48">
                                    <div className="flex-shrink-0 w-full md:w-48 h-48 relative overflow-hidden">
                                        <Image
                                            src={activity.image}
                                            alt={activity.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 192px"
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-r ${activity.gradient} to-transparent`}></div>
                                    </div>
                                    <div className="flex-1 p-6 flex flex-col justify-center">
                                        <h3 className="text-xl font-medium text-primary mb-3">{activity.title}</h3>
                                        <p className="text-sm font-light text-gray-700 leading-relaxed">
                                            {activity.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
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
                                    onClick={() => setIsPopupOpen(true)}
                                    className="bg-primary text-white px-8 py-4 rounded-full font-light text-lg hover:bg-secondary transition-all duration-300 shadow-sm cursor-pointer">
                                    Know More About Bali
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <MultiStepFormPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
            />
        </>
    );
}