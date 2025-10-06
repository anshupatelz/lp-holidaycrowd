export default function FloatingNavigation() {
    return (
        <>
            {/*  Floating Navigation  */}
            <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
                <div className="bg-white/95 backdrop-blur-xl rounded-full shadow-sm border border-gray-100/50 px-5 py-3 ">
                    {/* Desktop Navigation  */}
                    <div className="hidden md:flex items-center space-x-10">
                        {/* Logo  */}
                        <div className="flex-shrink-0 mr-6">
                            <h1 className="text-lg font-light text-primary tracking-wide">HolidaysCrowd</h1>
                        </div>

                        {/* Navigation Links  */}
                        <a href="#"
                            className="text-primary hover:text-gray-500 px-3 py-1 text-sm font-light transition-all duration-300">Home</a>
                        <a href="#packages"
                            className="text-gray-500 hover:text-primary px-3 py-1 text-sm font-light transition-all duration-300">Packages</a>
                        <a href="#about"
                            className="text-gray-500 hover:text-primary px-3 py-1 text-sm font-light transition-all duration-300">About</a>
                        <a href="#contact"
                            className="text-gray-500 hover:text-primary px-3 py-1 text-sm font-light transition-all duration-300">Contact</a>

                        {/* CTA Button  */}
                        <button
                            className="bg-primary/90 text-white px-7 py-2 rounded-full font-light text-sm hover:bg-primary transition-all duration-300 ml-6 whitespace-nowrap">
                            Book Now
                        </button>
                    </div>

                    {/* Mobile Navigation  */}
                    <div className="md:hidden flex items-center justify-between w-full">
                        {/* Logo  */}
                        <div className="flex-shrink-0">
                            <h1 className="text-base font-light text-primary tracking-wide">HolidaysCrowd</h1>
                        </div>

                        {/* Mobile Menu Button  */}
                        <button id="mobile-menu-btn" className="text-primary hover:text-gray-500 p-2 transition-colors">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown  */}
                <div id="mobile-menu"
                    className="hidden md:hidden mt-3 bg-white/95 backdrop-blur-xl rounded-3xl shadow-sm border border-gray-100/50 px-6 py-5">
                    <div className="flex flex-col space-y-1">
                        <a href="#"
                            className="text-primary hover:text-gray-500 px-4 py-3 text-sm font-light transition-all duration-300">Home</a>
                        <a href="#packages"
                            className="text-gray-500 hover:text-primary px-4 py-3 text-sm font-light transition-all duration-300">Packages</a>
                        <a href="#about"
                            className="text-gray-500 hover:text-primary px-4 py-3 text-sm font-light transition-all duration-300">About</a>
                        <a href="#contact"
                            className="text-gray-500 hover:text-primary px-4 py-3 text-sm font-light transition-all duration-300">Contact</a>
                        <button
                            className="bg-primary/90 text-white px-6 py-3 rounded-full font-light text-sm hover:bg-primary transition-all duration-300 mt-4 w-fit self-center whitespace-nowrap">Book
                            Now</button>
                    </div>
                </div>
            </nav>
        </>
    );
}