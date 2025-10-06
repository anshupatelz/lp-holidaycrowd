import Image from "next/image";

export default function TestimonialsSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-primary mb-6 tracking-wide">
                        What Our Travelers Say
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-xl md:text-2xl font-light text-gray-700 mb-4 leading-relaxed">
                            Real Reviews from Real Adventures
                        </h3>
                        <p className="text-lg text-gray-600 font-light leading-relaxed">
                            Don't just take our word for it. Here's what our happy travelers have to say about their
                            Bali experiences
                        </p>
                    </div>
                </div>

                {/* Testimonials Carousel */}
                <div className="relative">
                    {/* Navigation Buttons */}
                    <button id="testimonial-prev"
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 -ml-6">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button id="testimonial-next"
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 -mr-6">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Carousel Container */}
                    <div className="testimonials-carousel overflow-hidden">
                        <div id="testimonials-track"
                            className="testimonials-track flex transition-transform duration-500 ease-in-out">

                            {/* Testimonial 1 */}
                            <div className="testimonial-slide flex-none w-full md:w-1/2 lg:w-1/3 px-4">
                                <div
                                    className="group bg-gray-50/50 rounded-3xl p-8 hover:shadow-lg transition-all duration-500 border border-gray-100 hover:bg-white">
                                    {/* Google Logo */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center space-x-2">
                                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                                <path fill="#4285F4"
                                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                                <path fill="#34A853"
                                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                                <path fill="#FBBC05"
                                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                                <path fill="#EA4335"
                                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                            </svg>
                                            <span className="text-sm font-medium text-gray-600">Google Review</span>
                                        </div>
                                        {/* Rating Stars */}
                                        <div className="flex items-center space-x-1">
                                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Review Text */}
                                    <blockquote className="text-gray-700 font-light leading-relaxed mb-6 text-base">
                                        "Absolutely incredible experience! HolidaysCrowd made our Bali honeymoon
                                        perfect. The temple
                                        tour was magical, and our guide knew all the hidden spots. Every detail was
                                        perfectly
                                        planned."
                                    </blockquote>

                                    {/* User Profile */}
                                    <div className="flex items-center space-x-4">
                                        <Image
                                            src="https://images.unsplash.com/photo-1494790108755-2616b612b367?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                                            alt="Sarah Mitchell"
                                            width={800}
                                            height={600}
                                            className="w-12 h-12 rounded-full object-cover border-2 border-gray-100">
                                        </Image>
                                        <div>
                                            <h4 className="text-sm font-medium text-primary">Sarah Mitchell</h4>
                                            <p className="text-xs text-gray-500 font-light">Verified Google User</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial 2 */}
                            <div className="testimonial-slide flex-none w-full md:w-1/2 lg:w-1/3 px-4">
                                <div
                                    className="group bg-gray-50/50 rounded-3xl p-8 hover:shadow-lg transition-all duration-500 border border-gray-100 hover:bg-white">
                                    {/* Google Logo */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center space-x-2">
                                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                                <path fill="#4285F4"
                                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                                <path fill="#34A853"
                                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                                <path fill="#FBBC05"
                                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                                <path fill="#EA4335"
                                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                            </svg>
                                            <span className="text-sm font-medium text-gray-600">Google Review</span>
                                        </div>
                                        {/* Rating Stars */}
                                        <div className="flex items-center space-x-1">
                                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Review Text */}
                                    <blockquote className="text-gray-700 font-light leading-relaxed mb-6 text-base">
                                        "Best travel agency ever! The Nusa Penida day trip was breathtaking.
                                        Professional service,
                                        amazing photos, and the local guide was fantastic. Worth every penny!"
                                    </blockquote>

                                    {/* User Profile */}
                                    <div className="flex items-center space-x-4">
                                        <Image
                                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                                            alt="Mike Chen"
                                            width={800}
                                            height={600}
                                            className="w-12 h-12 rounded-full object-cover border-2 border-gray-100">
                                        </Image>
                                        <div>
                                            <h4 className="text-sm font-medium text-primary">Mike Chen</h4>
                                            <p className="text-xs text-gray-500 font-light">Verified Google User</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial 3 */}
                            <div className="testimonial-slide flex-none w-full md:w-1/2 lg:w-1/3 px-4">
                                <div
                                    className="group bg-gray-50/50 rounded-3xl p-8 hover:shadow-lg transition-all duration-500 border border-gray-100 hover:bg-white">
                                    {/* Google Logo */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center space-x-2">
                                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                                <path fill="#4285F4"
                                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                                <path fill="#34A853"
                                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                                <path fill="#FBBC05"
                                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                                <path fill="#EA4335"
                                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                            </svg>
                                            <span className="text-sm font-medium text-gray-600">Google Review</span>
                                        </div>
                                        {/* Rating Stars */}
                                        <div className="flex items-center space-x-1">
                                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Review Text */}
                                    <blockquote className="text-gray-700 font-light leading-relaxed mb-6 text-base">
                                        "Family vacation made easy! Our kids loved the monkey forest, and we enjoyed the
                                        cultural
                                        cooking className. Great balance of adventure and relaxation. Highly
                                        recommended!"
                                    </blockquote>

                                    {/* User Profile */}
                                    <div className="flex items-center space-x-4">
                                        <Image
                                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                                            alt="Priya Sharma"
                                            width={800}
                                            height={600}
                                            className="w-12 h-12 rounded-full object-cover border-2 border-gray-100">
                                        </Image>
                                        <div>
                                            <h4 className="text-sm font-medium text-primary">Priya Sharma</h4>
                                            <p className="text-xs text-gray-500 font-light">Verified Google User</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial 4 */}
                            <div className="testimonial-slide flex-none w-full md:w-1/2 lg:w-1/3 px-4">
                                <div
                                    className="group bg-gray-50/50 rounded-3xl p-8 hover:shadow-lg transition-all duration-500 border border-gray-100 hover:bg-white">
                                    {/* Google Logo */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center space-x-2">
                                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                                <path fill="#4285F4"
                                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                                <path fill="#34A853"
                                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                                <path fill="#FBBC05"
                                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                                <path fill="#EA4335"
                                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                            </svg>
                                            <span className="text-sm font-medium text-gray-600">Google Review</span>
                                        </div>
                                        {/* Rating Stars */}
                                        <div className="flex items-center space-x-1">
                                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Review Text */}
                                    <blockquote className="text-gray-700 font-light leading-relaxed mb-6 text-base">
                                        "Amazing adventure package! The Mount Batur sunrise trek was unforgettable.
                                        Great
                                        photography spots and our guide was knowledgeable. Will definitely book again!"
                                    </blockquote>

                                    {/* User Profile */}
                                    <div className="flex items-center space-x-4">
                                        <Image
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                                            alt="James Wilson"
                                            width={800}
                                            height={600}
                                            className="w-12 h-12 rounded-full object-cover border-2 border-gray-100">
                                        </Image>
                                        <div>
                                            <h4 className="text-sm font-medium text-primary">James Wilson</h4>
                                            <p className="text-xs text-gray-500 font-light">Verified Google User</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial 5 */}
                            <div className="testimonial-slide flex-none w-full md:w-1/2 lg:w-1/3 px-4">
                                <div
                                    className="group bg-gray-50/50 rounded-3xl p-8 hover:shadow-lg transition-all duration-500 border border-gray-100 hover:bg-white">
                                    {/* Google Logo */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center space-x-2">
                                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                                <path fill="#4285F4"
                                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                                <path fill="#34A853"
                                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                                <path fill="#FBBC05"
                                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                                <path fill="#EA4335"
                                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                            </svg>
                                            <span className="text-sm font-medium text-gray-600">Google Review</span>
                                        </div>
                                        {/* Rating Stars */}
                                        <div className="flex items-center space-x-1">
                                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Review Text */}
                                    <blockquote className="text-gray-700 font-light leading-relaxed mb-6 text-base">
                                        "Exceptional service from start to finish! The spa day was so relaxing and the
                                        beach club
                                        experience was luxury at its finest. Thank you for making our anniversary
                                        special!"
                                    </blockquote>

                                    {/* User Profile */}
                                    <div className="flex items-center space-x-4">
                                        <Image
                                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                                            alt="Emma Thompson"
                                            width={800}
                                            height={600}
                                            className="w-12 h-12 rounded-full object-cover border-2 border-gray-100">
                                        </Image>
                                        <div>
                                            <h4 className="text-sm font-medium text-primary">Emma Thompson</h4>
                                            <p className="text-xs text-gray-500 font-light">Verified Google User</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial 6 */}
                            <div className="testimonial-slide flex-none w-full md:w-1/2 lg:w-1/3 px-4">
                                <div
                                    className="group bg-gray-50/50 rounded-3xl p-8 hover:shadow-lg transition-all duration-500 border border-gray-100 hover:bg-white">
                                    {/* Google Logo */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center space-x-2">
                                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                                <path fill="#4285F4"
                                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                                <path fill="#34A853"
                                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                                <path fill="#FBBC05"
                                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                                <path fill="#EA4335"
                                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                            </svg>
                                            <span className="text-sm font-medium text-gray-600">Google Review</span>
                                        </div>
                                        {/* Rating Stars */}
                                        <div className="flex items-center space-x-1">
                                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                                <path
                                                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Review Text */}
                                    <blockquote className="text-gray-700 font-light leading-relaxed mb-6 text-base">
                                        "Solo traveler here! Felt completely safe and well taken care of. The Instagram
                                        photo tour
                                        was amazing - got the most beautiful shots for my social media. Perfect solo
                                        adventure!"
                                    </blockquote>

                                    {/* User Profile */}
                                    <div className="flex items-center space-x-4">
                                        <Image
                                            src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                                            alt="Lisa Rodriguez"
                                            width={800}
                                            height={600}
                                            className="w-12 h-12 rounded-full object-cover border-2 border-gray-100">
                                        </Image>
                                        <div>
                                            <h4 className="text-sm font-medium text-primary">Lisa Rodriguez</h4>
                                            <p className="text-xs text-gray-500 font-light">Verified Google User</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Carousel Indicators */}
                    <div className="flex justify-center mt-8 space-x-2">
                        <button
                            className="testimonial-indicator w-3 h-3 rounded-full bg-primary/30 hover:bg-primary/60 transition-all duration-300 active"
                            data-slide="0"></button>
                        <button
                            className="testimonial-indicator w-3 h-3 rounded-full bg-primary/30 hover:bg-primary/60 transition-all duration-300"
                            data-slide="1"></button>
                        <button
                            className="testimonial-indicator w-3 h-3 rounded-full bg-primary/30 hover:bg-primary/60 transition-all duration-300"
                            data-slide="2"></button>
                        <button
                            className="testimonial-indicator w-3 h-3 rounded-full bg-primary/30 hover:bg-primary/60 transition-all duration-300"
                            data-slide="3"></button>
                    </div>
                </div>
            </div>
        </section>
    );
}
