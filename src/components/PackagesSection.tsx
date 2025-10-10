import Image from "next/image";

export default function PackagesSection() {
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

                {/* Packages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Package 1 */}
                    <div
                        className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100">
                        <div className="relative">
                            <Image src="https://holidayscrowd-assets.imgix.net/2b16fac6-2cdd-47cb-ba19-0815d4b3e943?auto=format%2Ccompress&w=600&q=85&fm=webp"
                                alt="Delhi to Bali Tour"
                                width={800}
                                height={600}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500">
                            </Image>
                            <div
                                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-medium px-3 py-1 rounded-full">
                                4N / 5D
                            </div>
                        </div>
                        <div className="p-6">
                            {/* Rating & Location */}
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center space-x-1">
                                    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                    <span className="text-sm font-medium text-gray-700">5</span>
                                    <span className="text-xs text-gray-500">• Bali</span>
                                </div>
                            </div>

                            <h3 className="text-lg font-medium text-primary mb-3 leading-tight">4 Nights Delhi to Bali Tour
                                Package</h3>

                            {/* Price Section */}
                            <div className="mb-3">
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="text-sm text-gray-500 line-through">₹ 68,071/-</span>
                                    <span className="bg-green-500 text-white text-xs font-medium px-2 py-0.5 rounded">17%
                                        off</span>
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-light text-primary">₹ 56,499</span>
                                    <span className="text-sm text-gray-500">/ 5 days</span>
                                </div>
                            </div>

                            <button
                                className="w-full bg-primary text-white py-3 px-6 rounded-full font-light hover:bg-secondary transition-all duration-300 group-hover:shadow-lg">
                                Enquire Now
                            </button>
                        </div>
                    </div>

                    {/* Package 2 */}
                    <div
                        className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100">
                        <div className="relative">
                            <Image src="https://holidayscrowd-assets.imgix.net/21c5a18a-3a53-4c02-8751-23f048585544?auto=format%2Ccompress&w=600&q=85&fm=webp"
                                alt="Amazing Bali Package"
                                width={800}
                                height={600}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500">
                            </Image>
                            <div
                                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-medium px-3 py-1 rounded-full">
                                5N / 6D
                            </div>
                        </div>
                        <div className="p-6">
                            {/* Rating & Location */}
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center space-x-1">
                                    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                    <span className="text-sm font-medium text-gray-700">4.8</span>
                                    <span className="text-xs text-gray-500">• Bali</span>
                                </div>
                            </div>

                            <h3 className="text-lg font-medium text-primary mb-3 leading-tight">Amazing 5 Nights Delhi To
                                Bali Indonesia Package</h3>

                            {/* Price Section */}
                            <div className="mb-3">
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="text-sm text-gray-500 line-through">₹ 79,999/-</span>
                                    <span className="bg-green-500 text-white text-xs font-medium px-2 py-0.5 rounded">25%
                                        off</span>
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-light text-primary">₹ 59,999</span>
                                    <span className="text-sm text-gray-500">/ 6 days</span>
                                </div>
                            </div>

                            <button
                                className="w-full bg-primary text-white py-3 px-6 rounded-full font-light hover:bg-secondary transition-all duration-300 group-hover:shadow-lg">
                                Enquire Now
                            </button>
                        </div>
                    </div>

                    {/* Package 3 */}
                    <div
                        className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100">
                        <div className="relative">
                            <Image src="https://holidayscrowd-assets.imgix.net/ca2a5dd0-f54c-4d79-8021-8d185d93aee1?auto=format%2Ccompress&w=600&q=85&fm=webp"
                                alt="Sea and Sand Bali"
                                width={800}
                                height={600}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500">
                            </Image>
                            <div
                                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-medium px-3 py-1 rounded-full">
                                6N / 7D
                            </div>
                        </div>
                        <div className="p-6">
                            {/* Rating & Location */}
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center space-x-1">
                                    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                    <span className="text-sm font-medium text-gray-700">4.7</span>
                                    <span className="text-xs text-gray-500">• Bali</span>
                                </div>
                            </div>

                            <h3 className="text-lg font-medium text-primary mb-3 leading-tight">Sea and Sand 6 Nights Bali
                                Tour Packages from Delhi</h3>

                            {/* Price Section */}
                            <div className="mb-3">
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="text-sm text-gray-500 line-through">₹ 33,132/-</span>
                                    <span className="bg-green-500 text-white text-xs font-medium px-2 py-0.5 rounded">17%
                                        off</span>
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-light text-primary">₹ 27,499</span>
                                    <span className="text-sm text-gray-500">/ 7 days</span>
                                </div>
                            </div>

                            <button
                                className="w-full bg-primary text-white py-3 px-6 rounded-full font-light hover:bg-secondary transition-all duration-300 group-hover:shadow-lg">
                                Enquire Now
                            </button>
                        </div>
                    </div>

                    {/* Package 4 */}
                    <div
                        className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100">
                        <div className="relative">
                            <Image src="https://holidayscrowd-assets.imgix.net/a62ed373-d4de-45b7-959e-fc68636a0b2b?auto=format%2Ccompress&w=600&q=85&fm=webp"
                                alt="Bali Honeymoon Package"
                                width={800}
                                height={600}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500">
                            </Image>
                            <div
                                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-medium px-3 py-1 rounded-full">
                                7N / 8D
                            </div>
                            <div
                                className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                                💕 Honeymoon Special
                            </div>
                        </div>
                        <div className="p-6">
                            {/* Rating & Location */}
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center space-x-1">
                                    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                    <span className="text-sm font-medium text-gray-700">4.9</span>
                                    <span className="text-xs text-gray-500">• Bali</span>
                                </div>
                            </div>

                            <h3 className="text-lg font-medium text-primary mb-3 leading-tight">Bali Honeymoon Guided
                                Package</h3>

                            {/* Price Section */}
                            <div className="mb-3">
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="text-sm text-gray-500 line-through">₹ 87,208/-</span>
                                    <span className="bg-green-500 text-white text-xs font-medium px-2 py-0.5 rounded">14%
                                        off</span>
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-light text-primary">₹ 74,999</span>
                                    <span className="text-sm text-gray-500">/ 8 days</span>
                                </div>
                            </div>

                            <button
                                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-6 rounded-full font-light hover:from-pink-600 hover:to-purple-600 transition-all duration-300 group-hover:shadow-lg">
                                Enquire Now
                            </button>
                        </div>
                    </div>

                    {/* Package 5 */}
                    <div
                        className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100">
                        <div className="relative">
                            <Image src="https://holidayscrowd-assets.imgix.net/c0554687-246c-4481-9056-23057283813e?auto=format%2Ccompress&w=600&q=85&fm=webp"
                                alt="Best Bali Tour for Couple"
                                width={800}
                                height={600}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500">
                            </Image>
                            <div
                                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-medium px-3 py-1 rounded-full">
                                4N / 5D
                            </div>
                        </div>
                        <div className="p-6">
                            {/* Rating & Location */}
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center space-x-1">
                                    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                    <span className="text-sm font-medium text-gray-700">4.6</span>
                                    <span className="text-xs text-gray-500">• Bali</span>
                                </div>
                            </div>

                            <h3 className="text-lg font-medium text-primary mb-3 leading-tight">Best Bali Tour Packages for
                                Couple</h3>

                            {/* Price Section */}
                            <div className="mb-3">
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="text-sm text-gray-500 line-through">₹ 68,181/-</span>
                                    <span className="bg-green-500 text-white text-xs font-medium px-2 py-0.5 rounded">12%
                                        off</span>
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-light text-primary">₹ 59,999</span>
                                    <span className="text-sm text-gray-500">/ 5 days</span>
                                </div>
                            </div>

                            <button
                                className="w-full bg-primary text-white py-3 px-6 rounded-full font-light hover:bg-secondary transition-all duration-300 group-hover:shadow-lg">
                                Enquire Now
                            </button>
                        </div>
                    </div>

                    {/* Package 6 */}
                    <div
                        className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100">
                        <div className="relative">
                            <Image src="https://holidayscrowd-assets.imgix.net/2bcfe0fb-27af-4709-bef1-8c7e397c0569?auto=format%2Ccompress&w=600&q=85&fm=webp"
                                alt="Unforgettable Bali Tour"
                                width={800}
                                height={600}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500">
                            </Image>
                            <div
                                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-medium px-3 py-1 rounded-full">
                                6N / 7D
                            </div>
                        </div>
                        <div className="p-6">
                            {/* Rating & Location */}
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center space-x-1">
                                    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                    <span className="text-sm font-medium text-gray-700">4.8</span>
                                    <span className="text-xs text-gray-500">• Bali</span>
                                </div>
                            </div>

                            <h3 className="text-lg font-medium text-primary mb-3 leading-tight">Unforgettable Bali Tour
                                Package</h3>

                            {/* Price Section */}
                            <div className="mb-3">
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="text-sm text-gray-500 line-through">₹ 47,590/-</span>
                                    <span className="bg-green-500 text-white text-xs font-medium px-2 py-0.5 rounded">17%
                                        off</span>
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-light text-primary">₹ 39,500</span>
                                    <span className="text-sm text-gray-500">/ 7 days</span>
                                </div>
                            </div>

                            <button
                                className="w-full bg-primary text-white py-3 px-6 rounded-full font-light hover:bg-secondary transition-all duration-300 group-hover:shadow-lg">
                                Enquire Now
                            </button>
                        </div>
                    </div>

                    {/* Package 7 */}
                    <div
                        className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100">
                        <div className="relative">
                            <Image src="https://holidayscrowd-assets.imgix.net/38077d87-dc36-435e-87f5-6b8f2a10e76e?auto=format%2Ccompress&w=600&q=85&fm=webp"
                                alt="Refreshing Bali Package"
                                width={800}
                                height={600}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500">
                            </Image>
                            <div
                                className="absolute top-4 left-4 bg-red-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                                18% OFF
                            </div>
                            <div
                                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-medium px-3 py-1 rounded-full">
                                5N / 6D
                            </div>
                        </div>
                        <div className="p-6">
                            {/* Rating & Location */}
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center space-x-1">
                                    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                    <span className="text-sm font-medium text-gray-700">4.8</span>
                                    <span className="text-xs text-gray-500">• Bali</span>
                                </div>
                            </div>

                            <h3 className="text-lg font-medium text-primary mb-3 leading-tight">Refreshing Bali Packages
                                from India</h3>

                            {/* Price Section */}
                            <div className="mb-3">
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="text-sm text-gray-500 line-through">₹ 33,659/-</span>
                                    <span className="bg-green-500 text-white text-xs font-medium px-2 py-0.5 rounded">18%
                                        off</span>
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-light text-primary">₹ 27,600</span>
                                    <span className="text-sm text-gray-500">/ 6 days</span>
                                </div>
                            </div>

                            <button
                                className="w-full bg-primary text-white py-3 px-6 rounded-full font-light hover:bg-secondary transition-all duration-300 group-hover:shadow-lg">
                                Enquire Now
                            </button>
                        </div>
                    </div>

                    {/* Package 8 */}
                    <div
                        className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100">
                        <div className="relative">
                            <Image src="https://holidayscrowd-assets.imgix.net/36ed2945-efe8-4b30-894a-ab56e19987bd?auto=format%2Ccompress&w=600&q=85&fm=webp"
                                alt="Ultimate Bali Tour"
                                width={800}
                                height={600}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500">
                            </Image>
                            <div
                                className="absolute top-4 left-4 bg-red-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                                11% OFF
                            </div>
                            <div
                                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-medium px-3 py-1 rounded-full">
                                7N / 8D
                            </div>
                        </div>
                        <div className="p-6">
                            {/* Rating & Location */}
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center space-x-1">
                                    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                    <span className="text-sm font-medium text-gray-700">4.8</span>
                                    <span className="text-xs text-gray-500">• Bali</span>
                                </div>
                            </div>

                            <h3 className="text-lg font-medium text-primary mb-3 leading-tight">The Ultimate Bali Tour
                                Package</h3>

                            {/* Price Section */}
                            <div className="mb-3">
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="text-sm text-gray-500 line-through">₹ 48,090/-</span>
                                    <span className="bg-green-500 text-white text-xs font-medium px-2 py-0.5 rounded">11%
                                        off</span>
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-light text-primary">₹ 42,800</span>
                                    <span className="text-sm text-gray-500">/ 8 days</span>
                                </div>
                            </div>

                            <button
                                className="w-full bg-primary text-white py-3 px-6 rounded-full font-light hover:bg-secondary transition-all duration-300 group-hover:shadow-lg">
                                Enquire Now
                            </button>
                        </div>
                    </div>

                    {/* Package 9 */}
                    <div
                        className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100">
                        <div className="relative">
                            <Image src="https://holidayscrowd-assets.imgix.net/24199c3b-aedc-4fde-a465-318d11ee57dd?auto=format%2Ccompress&w=600&q=85&fm=webp"
                                alt="Bali Tour from Bangalore"
                                width={800}
                                height={600}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500">
                            </Image>
                            <div
                                className="absolute top-4 left-4 bg-red-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                                17% OFF
                            </div>
                            <div
                                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-medium px-3 py-1 rounded-full">
                                6N / 7D
                            </div>
                        </div>
                        <div className="p-6">
                            {/* Rating & Location */}
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center space-x-1">
                                    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                        <path
                                            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                    <span className="text-sm font-medium text-gray-700">4.8</span>
                                    <span className="text-xs text-gray-500">• Bali</span>
                                </div>
                            </div>

                            <h3 className="text-lg font-medium text-primary mb-3 leading-tight">Exciting Bali Tour Packages
                                from Bangalore</h3>

                            {/* Price Section */}
                            <div className="mb-3">
                                <div className="flex items-baseline gap-2 mb-1">
                                    <span className="text-sm text-gray-500 line-through">₹ 37,950/-</span>
                                    <span className="bg-green-500 text-white text-xs font-medium px-2 py-0.5 rounded">17%
                                        off</span>
                                </div>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-2xl font-light text-primary">₹ 31,499</span>
                                    <span className="text-sm text-gray-500">/ 7 days</span>
                                </div>
                            </div>

                            <button
                                className="w-full bg-primary text-white py-3 px-6 rounded-full font-light hover:bg-secondary transition-all duration-300 group-hover:shadow-lg">
                                Enquire Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Show More Button */}
                <div className="text-center mt-12">
                    <button id="show-more-btn"
                        className="bg-white border-2 border-primary text-primary px-8 py-3 rounded-full font-light hover:bg-primary hover:text-white transition-all duration-300 shadow-sm">
                        Book A Trip
                    </button>
                </div>
            </div>
        </section>
    );
}