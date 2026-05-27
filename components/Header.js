function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isServicesOpen, setIsServicesOpen] = React.useState(false);
    
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    const services = [
        { name: 'Accounting & Compliance', href: 'accounting-compliance.html' },
        { name: 'Assurance', href: 'audit-assurance.html' },
        { name: 'Business Advisory', href: 'business-advisory.html' },
        { name: 'Corporate Finance & Valuations', href: 'corporate-finance-valuations.html' },
        { name: 'Tax for Private Business', href: 'tax-private-business.html' },
        { name: 'Trading', href: 'trading.html' }
    ];

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm" data-name="header" data-file="components/Header.js">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="index.html" className="text-2xl font-bold font-serif text-[var(--primary)] flex items-center gap-2">
                            <div className="w-10 h-8 bg-[var(--accent)] text-white flex items-center justify-center rounded-sm font-sans font-bold text-sm">AZL</div>
                            <span className="hidden sm:inline">AZL Consulting and Trading</span>
                            <span className="sm:hidden">AZL Consulting</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8 items-center">
                        <a href="index.html" className={`text-sm font-medium transition-colors ${currentPath === 'index.html' ? 'text-[var(--accent)]' : 'text-gray-700 hover:text-[var(--accent)]'}`}>Home</a>
                        
                        {/* Services Dropdown */}
                        <div className="relative group" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
                            <button className={`flex items-center gap-1 text-sm font-medium transition-colors ${currentPath.includes('-') ? 'text-[var(--accent)]' : 'text-gray-700 hover:text-[var(--accent)]'}`}>
                                Services <i className="icon-chevron-down text-xs"></i>
                            </button>
                            
                            {isServicesOpen && (
                                <div className="absolute left-0 mt-2 w-72 bg-white rounded-md shadow-lg py-2 border border-gray-100 transition-all duration-200">
                                    {services.map((service, index) => (
                                        <a key={index} href={service.href} className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-[var(--accent)] transition-colors">
                                            {service.name}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>

                        <a href="about.html" className={`text-sm font-medium transition-colors ${currentPath === 'about.html' ? 'text-[var(--accent)]' : 'text-gray-700 hover:text-[var(--accent)]'}`}>About Us</a>
                        <a href="contact.html" className={`text-sm font-medium transition-colors ${currentPath === 'contact.html' ? 'text-[var(--accent)]' : 'text-gray-700 hover:text-[var(--accent)]'}`}>Contact Us</a>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-[var(--accent)]">
                            <i className={isMenuOpen ? "icon-x text-2xl" : "icon-menu text-2xl"}></i>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="index.html" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[var(--accent)] hover:bg-gray-50">Home</a>
                        <div className="px-3 py-2 text-base font-medium text-gray-900">Services:</div>
                        {services.map((service, index) => (
                            <a key={index} href={service.href} className="block px-6 py-2 text-sm text-gray-600 hover:text-[var(--accent)] hover:bg-gray-50">
                                - {service.name}
                            </a>
                        ))}
                        <a href="about.html" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[var(--accent)] hover:bg-gray-50">About Us</a>
                        <a href="contact.html" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[var(--accent)] hover:bg-gray-50">Contact Us</a>
                    </div>
                </div>
            )}
        </header>
    );
}