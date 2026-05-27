function Footer() {
    return (
        <div className="mt-auto">
            {/* Our Offices Global Section */}
            <Offices />

            {/* Partners Section */}
            <div className="bg-white py-12 border-t border-b border-gray-200" data-name="partners" data-file="components/Footer.js">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h4 className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wider mb-8">Our Expertise & Software</h4>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
                        <img src="https://app.trickle.so/storage/public/images/usr_1fa30cfbe0000001/6a26f30e-15b5-4468-8249-35b6a1b24e03.png" alt="CPA Australia" className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300" />
                        <img src="https://app.trickle.so/storage/public/images/usr_1fa30cfbe0000001/057457c9-6e51-4ca6-94f0-f7657e7712fb.png" alt="Xero" className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300" />
                        <img src="https://app.trickle.so/storage/public/images/usr_1fa30cfbe0000001/aba6fdab-ff86-4891-86cf-c6e5a54723e7.png" alt="QuickBooks Online" className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300" />
                        <img src="https://app.trickle.so/storage/public/images/usr_1fa30cfbe0000001/a730f621-ecb1-4dac-985f-228b1043ab55.png" alt="MYOB" className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                </div>
            </div>
        <footer className="bg-[var(--primary)] text-white pt-16 pb-8" data-name="footer" data-file="components/Footer.js">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="text-2xl font-bold font-serif text-white flex items-center gap-2 mb-6">
                            <div className="w-10 h-8 bg-[var(--accent)] text-white flex items-center justify-center rounded-sm font-sans font-bold text-sm">AZL</div>
                            AZL Consulting and Trading
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Supporting individuals, private businesses and growing enterprises with strategic accounting, tax, audit and corporate advisory services.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-[var(--accent)] transition-colors"><i className="icon-linkedin text-xl"></i></a>
                            <a href="#" className="text-gray-400 hover:text-[var(--accent)] transition-colors"><i className="icon-twitter text-xl"></i></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-serif font-semibold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="index.html" className="text-gray-400 hover:text-[var(--accent)] transition-colors text-sm">Home</a></li>
                            <li><a href="about.html" className="text-gray-400 hover:text-[var(--accent)] transition-colors text-sm">About Us</a></li>
                            <li><a href="contact.html" className="text-gray-400 hover:text-[var(--accent)] transition-colors text-sm">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-serif font-semibold mb-6 text-white">Our Services</h4>
                        <ul className="space-y-3">
                            <li><a href="accounting-compliance.html" className="text-gray-400 hover:text-[var(--accent)] transition-colors text-sm">Accounting & Compliance</a></li>
                            <li><a href="audit-assurance.html" className="text-gray-400 hover:text-[var(--accent)] transition-colors text-sm">Audit & Assurance</a></li>
                            <li><a href="business-advisory.html" className="text-gray-400 hover:text-[var(--accent)] transition-colors text-sm">Business Advisory</a></li>
                            <li><a href="corporate-finance-valuations.html" className="text-gray-400 hover:text-[var(--accent)] transition-colors text-sm">Corporate Finance</a></li>
                            <li><a href="tax-private-business.html" className="text-gray-400 hover:text-[var(--accent)] transition-colors text-sm">Tax for Private Business</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-serif font-semibold mb-6 text-white">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <i className="icon-map-pin text-[var(--accent)] mt-1"></i>
                                <span>410/368 Sussex St<br/>Sydney NSW 2000</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <i className="icon-map-pin text-[var(--accent)] mt-1"></i>
                                <span>10 Arnott Street<br/>Hume ACT 2620</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <i className="icon-mail text-[var(--accent)]"></i>
                                <span>info@azlconsult.com.au</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm text-center md:text-left">© 2026 AZL Consulting and Trading Group Pty Ltd. All Rights Reserved.</p>
                    <div className="flex gap-4 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
        </div>
    );
}
