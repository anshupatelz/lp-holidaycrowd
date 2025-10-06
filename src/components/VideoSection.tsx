'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from 'react';

export default function VideoSection() {
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const videoModalRef = useRef<HTMLDivElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const [modalOpen, setModalOpen] = useState(false);
    const [modalSrc, setModalSrc] = useState('');
    const [modalTitle, setModalTitle] = useState('');
    const [modalDescription, setModalDescription] = useState('');

    const totalReels = 6;
    const getPerView = () => {
        if (typeof window === 'undefined') return 1;
        if (window.innerWidth >= 1024) return 4; // lg: 4 per view
        if (window.innerWidth >= 768) return 2; // md: 2 per view
        return 1; // sm: 1 per view
    };

    const [perView, setPerView] = useState(getPerView());
    const [currentIndex, setCurrentIndex] = useState(0); // current reel index (0..totalReels-1)

    // video data
    const videoData: Record<string, { src: string; title: string; description: string }> = {
        video1: {
            src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
            title: '"Temple Hopping Magic"',
            description: "Watch Sarah's spiritual journey through Bali's most sacred temples, experiencing ancient rituals and breathtaking architecture."
        },
        video2: {
            src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
            title: '"Beach Paradise Found"',
            description: "See Mike & Jenny's romantic escape to pristine beaches, crystal waters, and unforgettable sunset moments."
        },
        video3: {
            src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
            title: '"Cultural Immersion"',
            description: "Experience authentic Bali with the Sharma family as they discover local traditions, cuisine, and warm hospitality."
        },
        video4: {
            src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
            title: '"Adventure Unleashed"',
            description: "Join Tom's adrenaline-packed week filled with volcano treks, white water rafting, and jungle adventures."
        }
    };

    // Play video in modal
    const playVideo = (id: string) => {
        const v = videoData[id];
        if (!v) return;
        setModalSrc(v.src);
        setModalTitle(v.title);
        setModalDescription(v.description);
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
        // set src and play when modal opens (see effect)
    };

    const closeVideo = () => {
        setModalOpen(false);
        if (videoRef.current) {
            videoRef.current.pause();
            try { videoRef.current.currentTime = 0; } catch { }
            videoRef.current.src = '';
        }
        document.body.style.overflow = 'auto';
    };

    // When modal opens, load and play video
    useEffect(() => {
        if (modalOpen && videoRef.current) {
            videoRef.current.src = modalSrc;
            videoRef.current.load();
            const p = videoRef.current.play();
            if (p && typeof p.then === 'function') p.catch(() => { /* autoplay blocked */ });
        }
    }, [modalOpen, modalSrc]);

    // close on escape or click outside
    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === 'Escape' && modalOpen) closeVideo();
        }
        function onDocClick(e: MouseEvent) {
            if (!modalOpen) return;
            if (!videoModalRef.current) return;
            if (e.target && videoModalRef.current === e.target) closeVideo();
        }
        document.addEventListener('keydown', onKey);
        document.addEventListener('click', onDocClick);
        return () => {
            document.removeEventListener('keydown', onKey);
            document.removeEventListener('click', onDocClick);
        };
    }, [modalOpen]);

    // Carousel controls (single-reel movement + infinite wrap)
    const updateCarousel = (instant = false) => {
        if (!trackRef.current) return;
        const track = trackRef.current;
        const children = Array.from(track.children) as HTMLElement[];
        const idx = Math.max(0, Math.min(currentIndex, children.length - 1));
        const target = children[idx];
        if (!target) return;
        if (instant) track.style.transition = 'none';
        else track.style.transition = 'transform 500ms ease-in-out';
        // Use pixel offset for precise per-item sliding
        const offset = target.offsetLeft;
        track.style.transform = `translateX(-${offset}px)`;
        // force reflow after instant remove then restore transition
        if (instant) {
            // allow next frame to restore transitions
            requestAnimationFrame(() => { track.style.transition = 'transform 500ms ease-in-out'; });
        }
    };

    useEffect(() => {
        updateCarousel();
    }, [currentIndex, perView]);

    // Auto-play (advance one reel, infinite)
    const autoPlayRef = useRef<number | null>(null);
    const startAutoPlay = () => {
        stopAutoPlay();
        autoPlayRef.current = window.setInterval(() => {
            setCurrentIndex(i => (i + 1) % totalReels);
        }, 8000);
    };
    const stopAutoPlay = () => {
        if (autoPlayRef.current != null) { clearInterval(autoPlayRef.current); autoPlayRef.current = null; }
    };

    useEffect(() => {
        startAutoPlay();
        return () => stopAutoPlay();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [totalReels]);

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

    // Touch support (single-reel swipe)
    useEffect(() => {
        const el = carouselRef.current;
        if (!el) return;
        let startX: number | null = null;
        let startY: number | null = null;
        const onStart = (e: TouchEvent) => { startX = e.touches[0].clientX; startY = e.touches[0].clientY; };
        const onEnd = (e: TouchEvent) => {
            if (startX == null || startY == null) return;
            const endX = e.changedTouches[0].clientX; const endY = e.changedTouches[0].clientY;
            const diffX = startX - endX; const diffY = startY - endY;
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                if (diffX > 0) setCurrentIndex(i => (i + 1) % totalReels);
                else setCurrentIndex(i => (i - 1 + totalReels) % totalReels);
            }
            startX = null; startY = null;
        };
        el.addEventListener('touchstart', onStart);
        el.addEventListener('touchend', onEnd);
        return () => { el.removeEventListener('touchstart', onStart); el.removeEventListener('touchend', onEnd); };
    }, [totalReels]);

    // Handle resize -> recalc perView and keep view stable
    useEffect(() => {
        let t: number | undefined;
        const onResize = () => { if (t) window.clearTimeout(t); t = window.setTimeout(() => setPerView(getPerView()), 200); };
        window.addEventListener('resize', onResize);
        return () => { window.removeEventListener('resize', onResize); if (t) window.clearTimeout(t); };
    }, []);

    const prevGroup = () => setCurrentIndex(i => (i - 1 + totalReels) % totalReels);
    const nextGroup = () => setCurrentIndex(i => (i + 1) % totalReels);

    return (
        <>
            <section className="py-20 bg-gray-50/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary mb-6 tracking-wide">
                            Videos
                        </h2>
                        <div className="max-w-4xl mx-auto">
                            <h3 className="text-xl md:text-2xl font-light text-gray-700 mb-4 leading-relaxed">
                                See Bali Through Our Travelers' Eyes
                            </h3>
                            <p className="text-lg text-gray-600 font-light leading-relaxed">
                                Real experiences, real emotions, real memories from our happy customers
                            </p>
                        </div>
                    </div>

                    {/* Video Reels Carousel */}
                    <div className="relative">
                        {/* Carousel Container */}
                        <div className="overflow-hidden" ref={carouselRef}>
                            <div id="reelsCarousel" ref={trackRef} className="flex transition-transform duration-500 ease-in-out" style={{ transform: 'translateX(0px)' }}>

                                {/* Reel 1: Temple Hopping Magic */}
                                <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 px-3">
                                    <div className="group cursor-pointer" onClick={() => playVideo('video1')}>
                                        <div
                                            className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-gradient-to-b from-transparent via-transparent to-black/60">
                                            {/* Background Image */}
                                            <Image
                                                src="https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                                alt="Temple Hopping Magic" width={800} height={600}
                                                className="absolute inset-0 w-full h-full object-cover">
                                            </Image>

                                            {/* Gradient Overlay */}
                                            <div
                                                className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70">
                                            </div>

                                            {/* Play Button */}
                                            <div
                                                className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <div
                                                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                                                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor"
                                                        viewBox="0 0 24 24">
                                                        <path d="M8 5v14l11-7z" />
                                                    </svg>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                                <h3 className="text-lg font-medium mb-2">Temple Hopping Magic</h3>
                                                <p className="text-sm font-light opacity-90 leading-relaxed">
                                                    Watch Sarah's spiritual journey
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Reel 2: Beach Paradise Found */}
                                <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 px-3">
                                    <div className="group cursor-pointer" onClick={() => playVideo('video2')}>
                                        <div
                                            className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-gradient-to-b from-transparent via-transparent to-black/60">
                                            {/* Background Image */}
                                            <Image
                                                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                                alt="Beach Paradise Found"
                                                width={800}
                                                height={600}
                                                className="absolute inset-0 w-full h-full object-cover">
                                            </Image>

                                            {/* Gradient Overlay */}
                                            <div
                                                className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70">
                                            </div>

                                            {/* Play Button */}
                                            <div
                                                className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <div
                                                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                                                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor"
                                                        viewBox="0 0 24 24">
                                                        <path d="M8 5v14l11-7z" />
                                                    </svg>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                                <h3 className="text-lg font-medium mb-2">Beach Paradise Found</h3>
                                                <p className="text-sm font-light opacity-90 leading-relaxed">
                                                    See Mike & Jenny's romantic escape
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Reel 3: Cultural Immersion */}
                                <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 px-3">
                                    <div className="group cursor-pointer" onClick={() => playVideo('video3')}>
                                        <div
                                            className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-gradient-to-b from-transparent via-transparent to-black/60">
                                            {/* Background Image */}
                                            <Image
                                                src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                                alt="Cultural Immersion"
                                                width={800}
                                                height={600}
                                                className="absolute inset-0 w-full h-full object-cover">
                                            </Image>

                                            {/* Gradient Overlay */}
                                            <div
                                                className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70">
                                            </div>

                                            {/* Play Button */}
                                            <div
                                                className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <div
                                                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                                                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor"
                                                        viewBox="0 0 24 24">
                                                        <path d="M8 5v14l11-7z" />
                                                    </svg>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                                <h3 className="text-lg font-medium mb-2">Cultural Immersion</h3>
                                                <p className="text-sm font-light opacity-90 leading-relaxed">
                                                    Experience authentic Bali with the Sharma family
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Reel 4: Adventure Unleashed */}
                                <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 px-3">
                                    <div className="group cursor-pointer" onClick={() => playVideo('video4')}>
                                        <div
                                            className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-gradient-to-b from-transparent via-transparent to-black/60">
                                            {/* Background Image */}
                                            <Image
                                                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                                alt="Adventure Unleashed"
                                                width={800}
                                                height={600}
                                                className="absolute inset-0 w-full h-full object-cover">
                                            </Image>

                                            {/* Gradient Overlay */}
                                            <div
                                                className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70">
                                            </div>

                                            {/* Play Button */}
                                            <div
                                                className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <div
                                                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                                                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor"
                                                        viewBox="0 0 24 24">
                                                        <path d="M8 5v14l11-7z" />
                                                    </svg>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                                <h3 className="text-lg font-medium mb-2">Adventure Unleashed</h3>
                                                <p className="text-sm font-light opacity-90 leading-relaxed">
                                                    Join Tom's adrenaline-packed week
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Additional Reels (Hidden by default) */}
                                {/* Reel 5: Temple Culture */}
                                <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 px-3">
                                    <div className="group cursor-pointer" onClick={() => playVideo('video1')}>
                                        <div
                                            className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-gradient-to-b from-transparent via-transparent to-black/60">
                                            <Image
                                                src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                                alt="Temple Culture"
                                                width={800}
                                                height={600}
                                                className="absolute inset-0 w-full h-full object-cover">
                                            </Image>
                                            <div
                                                className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70">
                                            </div>
                                            <div
                                                className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <div
                                                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                                                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor"
                                                        viewBox="0 0 24 24">
                                                        <path d="M8 5v14l11-7z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                                <h3 className="text-lg font-medium mb-2">Temple Culture</h3>
                                                <p className="text-sm font-light opacity-90 leading-relaxed">
                                                    Ancient traditions come alive
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Reel 6: Sunset Views */}
                                <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4 px-3">
                                    <div className="group cursor-pointer" onClick={() => playVideo('video2')}>
                                        <div
                                            className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-gradient-to-b from-transparent via-transparent to-black/60">
                                            <Image
                                                src="https://images.unsplash.com/photo-1586500036706-41963de24d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                                alt="Sunset Views"
                                                width={800}
                                                height={600}
                                                className="absolute inset-0 w-full h-full object-cover">
                                            </Image>
                                            <div
                                                className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70">
                                            </div>
                                            <div
                                                className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <div
                                                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                                                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor"
                                                        viewBox="0 0 24 24">
                                                        <path d="M8 5v14l11-7z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                                <h3 className="text-lg font-medium mb-2">Sunset Views</h3>
                                                <p className="text-sm font-light opacity-90 leading-relaxed">
                                                    Golden hour magic moments
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Carousel Controls */}
                        <div className="flex justify-center mt-8 space-x-4">
                            {/* Previous Button */}
                            <button onClick={prevGroup}
                                className="bg-white/10 backdrop-blur-md border border-white/20 text-primary p-3 rounded-full hover:bg-white/20 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M15 19l-7-7 7-7"></path>
                                </svg>
                            </button>

                            {/* Indicators */}
                            <div className="flex space-x-2 items-center">
                                {Array.from({ length: Math.max(1, Math.ceil(totalReels / perView)) }).map((_, pageIdx) => (
                                    <div key={pageIdx} onClick={() => setCurrentIndex(pageIdx * perView)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${pageIdx === Math.floor(currentIndex / perView) ? 'bg-primary' : 'bg-gray-300'}`}
                                    />
                                ))}
                            </div>

                            {/* Next Button */}
                            <button onClick={nextGroup}
                                className="bg-white/10 backdrop-blur-md border border-white/20 text-primary p-3 rounded-full hover:bg-white/20 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                        <button
                            className="bg-primary text-white px-8 py-4 rounded-full font-light text-lg hover:bg-secondary transition-all duration-300 shadow-sm">
                            Book A Tour
                        </button>
                    </div>
                </div>
            </section >

            {/* Video Modal */}
            <div ref={videoModalRef} className={`fixed inset-0 bg-black/80 flex items-center justify-center z-50 ${modalOpen ? '' : 'hidden'}`}>
                <div className="relative max-w-4xl mx-auto p-4">
                    <button onClick={closeVideo}
                        className="absolute -top-2 -right-2 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors z-10">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12">
                            </path>
                        </svg>
                    </button>
                    <div className="bg-white rounded-2xl overflow-hidden">
                        <div id="videoContainer" className="aspect-video bg-black">
                            {/* Demo videos will be inserted here */}
                            <video ref={videoRef} className="w-full h-full" controls>
                                <source id="videoSource" src="" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-medium text-primary mb-2">{modalTitle}</h3>
                            <p className="text-gray-600 font-light">{modalDescription}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* end client logic */}
        </>
    );
}