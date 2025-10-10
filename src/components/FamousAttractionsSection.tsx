'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from 'react';

export default function FamousAttractionsSection() {
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);

    const Attractions = [
        {
            id: 1,
            name: 'Ubud',
            image: 'https://holidayscrowd-assets.imgix.net/d9b1cce8-5017-4950-8c41-1067981ca23a?auto=format%2Ccompress&w=900&q=100&fm=webp'
        },
        {
            id: 2,
            name: 'Nusa Penida',
            image: 'https://holidayscrowd-assets.imgix.net/6512e751-58ce-45b6-b6d2-6357d5f8bcbe?auto=format%2Ccompress&w=900&q=100&fm=webp'
        },
        {
            id: 3,
            name: 'Kuta',
            image: 'https://holidayscrowd-assets.imgix.net/dc91a370-3bd5-4d8b-9533-8d5f09d9a32e?auto=format%2Ccompress&w=900&q=100&fm=webp'
        },
        {
            id: 4,
            name: 'Gili Trawangan',
            image: 'https://holidayscrowd-assets.imgix.net/ca4e57d1-3fb2-4546-b8c6-0924e71e9131?auto=format%2Ccompress&w=900&q=100&fm=webp'
        },
        {
            id: 5,
            name: 'Uluwatu Temple',
            image: 'https://holidayscrowd-assets.imgix.net/0e70d255-3254-4677-882f-eb5c416ebafd?auto=format%2Ccompress&w=900&q=100&fm=webp'
        },
        {
            id: 6,
            name: 'Tirta Ganga',
            image: 'https://holidayscrowd-assets.imgix.net/1429bea5-38fa-4769-a39f-4f69a026fcba?auto=format%2Ccompress&w=900&q=100&fm=webp'
        },
        {
            id: 7,
            name: 'Monkey Forest',
            image: 'https://holidayscrowd-assets.imgix.net/d1bb65ec-9f88-4ef1-a1c1-4406a5853a94?auto=format%2Ccompress&w=900&q=100&fm=webp'
        },
    ];

    const totalItems = Attractions.length;
    const getPerView = () => {
        if (typeof window === 'undefined') return 1;
        if (window.innerWidth >= 1280) return 6; // Desktop XL: 6
        if (window.innerWidth >= 1024) return 5; // Desktop: 5
        if (window.innerWidth >= 768) return 4;  // Tablet large: 4
        if (window.innerWidth >= 640) return 3;  // Tablet: 3
        return 1; // Mobile: 1
    };

    const [perView, setPerView] = useState(getPerView());
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Create extended array for infinite loop (triple the items)
    const extendedAttractions = [...Attractions, ...Attractions, ...Attractions];

    // Carousel controls with smooth infinite scroll
    const updateCarousel = (instant = false) => {
        if (!trackRef.current) return;
        const track = trackRef.current;
        const children = Array.from(track.children) as HTMLElement[];

        if (children.length === 0) return;

        // Calculate which item to show (start from middle set)
        const actualIndex = currentIndex + totalItems;
        const target = children[actualIndex];

        if (!target) return;

        if (instant) {
            track.style.transition = 'none';
        } else {
            track.style.transition = 'transform 500ms ease-in-out';
        }

        const offset = target.offsetLeft;
        track.style.transform = `translateX(-${offset}px)`;

        if (instant) {
            requestAnimationFrame(() => {
                if (track) track.style.transition = 'transform 500ms ease-in-out';
            });
        }
    };

    useEffect(() => {
        updateCarousel();
    }, [currentIndex, perView]);

    // Reset position when reaching clone boundaries
    useEffect(() => {
        if (!trackRef.current) return;

        const handleTransitionEnd = () => {
            // Reset to middle set if we've gone too far in either direction
            if (currentIndex >= totalItems) {
                const newIndex = currentIndex % totalItems;
                setCurrentIndex(newIndex);
                setTimeout(() => updateCarousel(true), 0);
            } else if (currentIndex < 0) {
                const newIndex = totalItems + (currentIndex % totalItems);
                setCurrentIndex(newIndex);
                setTimeout(() => updateCarousel(true), 0);
            }
            setIsTransitioning(false);
        };

        const track = trackRef.current;
        track.addEventListener('transitionend', handleTransitionEnd);

        return () => {
            track.removeEventListener('transitionend', handleTransitionEnd);
        };
    }, [currentIndex, totalItems]);

    // Auto-play
    const autoPlayRef = useRef<number | null>(null);
    const startAutoPlay = () => {
        stopAutoPlay();
        autoPlayRef.current = window.setInterval(() => {
            setIsTransitioning(true);
            setCurrentIndex(i => i + 1);
        }, 3000);
    };
    const stopAutoPlay = () => {
        if (autoPlayRef.current != null) { clearInterval(autoPlayRef.current); autoPlayRef.current = null; }
    };

    useEffect(() => {
        startAutoPlay();
        return () => stopAutoPlay();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Pause on hover
    useEffect(() => {
        const el = carouselRef.current;
        if (!el) return;
        const onEnter = () => stopAutoPlay();
        const onLeave = () => startAutoPlay();
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
        return () => { el.removeEventListener('mouseenter', onEnter); el.removeEventListener('mouseleave', onLeave); };
    }, []);

    // Touch support
    useEffect(() => {
        const el = carouselRef.current;
        if (!el) return;
        let startX: number | null = null;
        let startY: number | null = null;
        const onStart = (e: TouchEvent) => { startX = e.touches[0].clientX; startY = e.touches[0].clientY; };
        const onEnd = (e: TouchEvent) => {
            if (startX == null || startY == null) return;
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            const diffX = startX - endX;
            const diffY = startY - endY;
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                setIsTransitioning(true);
                if (diffX > 0) setCurrentIndex(i => i + 1);
                else setCurrentIndex(i => i - 1);
            }
            startX = null; startY = null;
        };
        el.addEventListener('touchstart', onStart);
        el.addEventListener('touchend', onEnd);
        return () => { el.removeEventListener('touchstart', onStart); el.removeEventListener('touchend', onEnd); };
    }, []);

    // Handle resize
    useEffect(() => {
        let t: number | undefined;
        const onResize = () => {
            if (t) window.clearTimeout(t);
            t = window.setTimeout(() => setPerView(getPerView()), 200);
        };
        window.addEventListener('resize', onResize);
        return () => { window.removeEventListener('resize', onResize); if (t) window.clearTimeout(t); };
    }, []);

    const prevSlide = () => {
        setIsTransitioning(true);
        setCurrentIndex(i => i - 1);
    };

    const nextSlide = () => {
        setIsTransitioning(true);
        setCurrentIndex(i => i + 1);
    };

    return (
        <section id="attractions" className="py-0 bg-white">
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
                <div className="relative">
                    {/* Carousel Container */}
                    <div className="overflow-hidden" ref={carouselRef}>
                        <div ref={trackRef} className="flex transition-transform duration-500 ease-in-out">
                            {extendedAttractions.map((activity, index) => (
                                <div key={`${activity.id}-${index}`} className="flex-shrink-0 w-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 px-3">
                                    <div className="group cursor-pointer relative h-64 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                                        {/* Background Image */}
                                        <Image
                                            src={activity.image}
                                            alt={activity.name}
                                            width={400}
                                            height={500}
                                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                                        {/* Text Overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-5">
                                            <h3 className="text-lg font-medium text-white text-center group-hover:scale-105 transition-transform duration-300">
                                                {activity.name}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/90 backdrop-blur-sm text-primary p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg z-10"
                        aria-label="Previous slide"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/90 backdrop-blur-sm text-primary p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg z-10"
                        aria-label="Next slide"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>

                    {/* Indicators */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {Array.from({ length: Math.max(1, Math.ceil(totalItems / perView)) }).map((_, pageIdx) => (
                            <div
                                key={pageIdx}
                                onClick={() => {
                                    setIsTransitioning(true);
                                    setCurrentIndex(pageIdx * perView);
                                }}
                                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${pageIdx === Math.floor((currentIndex % totalItems) / perView) ? 'bg-primary w-8' : 'bg-gray-300'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
