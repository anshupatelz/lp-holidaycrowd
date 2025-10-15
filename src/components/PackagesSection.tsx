'use client';

import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import MultiStepFormPopup from './MultiStepFormPopup';

export default function PackagesSection() {
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

    const packages = [
        {
            title: "4 Nights Delhi to Bali Tour Package",
            duration: "4N / 5D",
            days: "5 days",
            rating: "5",
            originalPrice: "₹ 68,071/-",
            price: "₹ 56,499",
            discount: "17%",
            image: "/package-img/bali-package-image-1.webp",
            alt: "Delhi to Bali Tour",
            buttonClass: "bg-primary hover:bg-secondary"
        },
        {
            title: "Amazing 5 Nights Delhi To Bali Indonesia Package",
            duration: "5N / 6D",
            days: "6 days",
            rating: "4.8",
            originalPrice: "₹ 79,999/-",
            price: "₹ 59,999",
            discount: "25%",
            image: "/package-img/bali-package-image-5.webp",
            alt: "Amazing Bali Package",
            buttonClass: "bg-primary hover:bg-secondary"
        },
        {
            title: "Sea and Sand 6 Nights Bali Tour Packages from Delhi",
            duration: "6N / 7D",
            days: "7 days",
            rating: "4.7",
            originalPrice: "₹ 33,132/-",
            price: "₹ 27,499",
            discount: "17%",
            image: "https://holidayscrowd-assets.imgix.net/24199c3b-aedc-4fde-a465-318d11ee57dd?auto=format%2Ccompress&w=600&q=85&fm=webp",
            alt: "Sea and Sand Bali",
            buttonClass: "bg-primary hover:bg-secondary"
        },
        {
            title: "Bali Honeymoon Guided Package",
            duration: "7N / 8D",
            days: "8 days",
            rating: "4.9",
            originalPrice: "₹ 87,208/-",
            price: "₹ 74,999",
            discount: "14%",
            image: "https://holidayscrowd-assets.imgix.net/2bcfe0fb-27af-4709-bef1-8c7e397c0569?auto=format%2Ccompress&w=600&q=85&fm=webp",
            alt: "Bali Honeymoon Package",
            buttonClass: "bg-primary hover:bg-secondary"
        },
        {
            title: "Best Bali Tour Packages for Couple",
            duration: "4N / 5D",
            days: "5 days",
            rating: "4.6",
            originalPrice: "₹ 68,181/-",
            price: "₹ 59,999",
            discount: "12%",
            image: "https://holidayscrowd-assets.imgix.net/36ed2945-efe8-4b30-894a-ab56e19987bd?auto=format%2Ccompress&w=600&q=85&fm=webp",
            alt: "Best Bali Tour for Couple",
            buttonClass: "bg-primary hover:bg-secondary"
        },
        {
            title: "Unforgettable Bali Tour Package",
            duration: "6N / 7D",
            days: "7 days",
            rating: "4.8",
            originalPrice: "₹ 47,590/-",
            price: "₹ 39,500",
            discount: "17%",
            image: "/package-img/bali-package-image-4.webp",
            alt: "Unforgettable Bali Tour",
            buttonClass: "bg-primary hover:bg-secondary"
        },
        {
            title: "Refreshing Bali Packages from India",
            duration: "5N / 6D",
            days: "6 days",
            rating: "4.8",
            originalPrice: "₹ 33,659/-",
            price: "₹ 27,600",
            discount: "18%",
            image: "https://holidayscrowd-assets.imgix.net/38077d87-dc36-435e-87f5-6b8f2a10e76e?auto=format%2Ccompress&w=600&q=85&fm=webp",
            alt: "Refreshing Bali Package",
            buttonClass: "bg-primary hover:bg-secondary",
            showDiscountBadge: true
        },
        {
            title: "The Ultimate Bali Tour Package",
            duration: "7N / 8D",
            days: "8 days",
            rating: "4.8",
            originalPrice: "₹ 48,090/-",
            price: "₹ 42,800",
            discount: "11%",
            image: "/package-img/bali-package-image-7.webp",
            alt: "Ultimate Bali Tour",
            buttonClass: "bg-primary hover:bg-secondary",
            showDiscountBadge: true,
            discountBadgeText: "11% OFF"
        },
        {
            title: "Exciting Bali Tour Packages from Bangalore",
            duration: "6N / 7D",
            days: "7 days",
            rating: "4.8",
            originalPrice: "₹ 37,950/-",
            price: "₹ 31,499",
            discount: "17%",
            image: "/package-img/bali-package-image-9.webp",
            alt: "Bali Tour from Bangalore",
            buttonClass: "bg-primary hover:bg-secondary",
            showDiscountBadge: true,
            discountBadgeText: "17% OFF"
        }
    ];

    return (
        <section id="packages" className="py-0 bg-gray-50/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary mb-6 tracking-wide">
                        Featured Bali Tour Packages
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
                        Discover our handpicked collection of Bali tour packages designed to create unforgettable
                        memories at unbeatable prices
                    </p>
                </div>

                {/* Mobile Carousel (visible on mobile) */}
                <div className="lg:hidden mb-8">
                    <div className="overflow-hidden -mx-4" ref={emblaRef}>
                        <div className="flex touch-pan-y">
                            {packages.map((pkg, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                                    <div className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100">
                                        <div className="relative">
                                            <Image
                                                src={pkg.image}
                                                alt={pkg.alt}
                                                width={800}
                                                height={600}
                                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            {pkg.showDiscountBadge && (
                                                <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                                                    {pkg.discountBadgeText || `${pkg.discount} off`}
                                                </div>
                                            )}
                                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-medium px-3 py-1 rounded-full">
                                                {pkg.duration}
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center justify-between mb-3">
                                                <div className="flex items-center space-x-1">
                                                    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                                    </svg>
                                                    <span className="text-sm font-medium text-gray-700">{pkg.rating}</span>
                                                    <span className="text-xs text-gray-500">• Bali</span>
                                                </div>
                                            </div>
                                            <h3 className="text-lg font-medium text-primary mb-3 leading-tight">{pkg.title}</h3>
                                            <div className="mb-3">
                                                <div className="flex items-baseline gap-2 mb-1">
                                                    <span className="text-sm text-gray-500 line-through">{pkg.originalPrice}</span>
                                                    <span className="bg-green-500 text-white text-xs font-medium px-2 py-0.5 rounded">{pkg.discount} off</span>
                                                </div>
                                                <div className="flex items-baseline gap-1">
                                                    <span className="text-2xl font-light text-primary">{pkg.price}</span>
                                                    <span className="text-sm text-gray-500">/ {pkg.days}</span>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => setIsPopupOpen(true)}
                                                className={`w-full text-white py-3 px-6 rounded-full font-light transition-all duration-300 group-hover:shadow-lg ${pkg.buttonClass}`}>
                                                Enquire Now
                                            </button>
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
                <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100">
                            <div className="relative">
                                <Image
                                    src={pkg.image}
                                    alt={pkg.alt}
                                    width={800}
                                    height={600}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {pkg.showDiscountBadge && (
                                    <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                                        {pkg.discountBadgeText || `${pkg.discount} off`}
                                    </div>
                                )}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-medium px-3 py-1 rounded-full">
                                    {pkg.duration}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center space-x-1">
                                        <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                        </svg>
                                        <span className="text-sm font-medium text-gray-700">{pkg.rating}</span>
                                        <span className="text-xs text-gray-500">• Bali</span>
                                    </div>
                                </div>
                                <h3 className="text-lg font-medium text-primary mb-3 leading-tight">{pkg.title}</h3>
                                <div className="mb-3">
                                    <div className="flex items-baseline gap-2 mb-1">
                                        <span className="text-sm text-gray-500 line-through">{pkg.originalPrice}</span>
                                        <span className="bg-green-500 text-white text-xs font-medium px-2 py-0.5 rounded">{pkg.discount} off</span>
                                    </div>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-2xl font-light text-primary">{pkg.price}</span>
                                        <span className="text-sm text-gray-500">/ {pkg.days}</span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsPopupOpen(true)}
                                    className={`w-full text-white py-3 px-6 rounded-full font-light transition-all duration-300 group-hover:shadow-lg ${pkg.buttonClass}`}>
                                    Enquire Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show More Button */}
                <div className="text-center mt-12">
                    <button
                        onClick={() => setIsPopupOpen(true)}
                        className="bg-white border-2 border-primary text-primary px-8 py-3 rounded-full font-light hover:bg-primary hover:text-white transition-all duration-300 shadow-sm">
                        Book A Trip
                    </button>
                </div>
            </div>

            {/* Multi-Step Form Popup */}
            <MultiStepFormPopup
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
            />
        </section>
    );
}
