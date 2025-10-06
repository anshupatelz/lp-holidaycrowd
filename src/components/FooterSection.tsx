export default function FooterSection() {
    return (
        <footer className="bg-primary text-white">

            {/* Main Footer Content */}
            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div>

                        {/* Company Info */}
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-6">
                                <h3 className="text-2xl font-light text-white mb-2">HolidaysCrowd</h3>
                                <p className="text-white/80 font-light leading-relaxed">
                                    Your trusted partner for unforgettable Bali adventures. Creating memories that last
                                    a lifetime.
                                </p>
                            </div>
                            <div className="space-y-2 text-white/80">
                                <p className="flex items-center space-x-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                    <span>info@holidayscrowd.com</span>
                                </p>
                                <p className="flex items-center space-x-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                    <span>+91 98765 43210</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-black/20 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <p className="text-white/80 font-light">
                            Copyright: © 2025 Holidays Crowd Private Limited. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
