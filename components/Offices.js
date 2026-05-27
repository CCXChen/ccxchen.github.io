function Offices() {
    return (
        <section className="bg-[var(--bg-light)] py-20 w-full" data-name="our-offices" data-file="components/Offices.js">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-serif font-bold text-center text-[var(--primary)] mb-12 uppercase tracking-wider">GET IN CONTACT</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Sydney Office */}
                    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col">
                        <h3 className="text-xl font-bold font-serif text-[var(--primary)] mb-2">Sydney Office</h3>
                        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                            AZL Consulting and Trading Group Pty Ltd<br/>
                            Level 4, Suite 410<br/>
                            368 Sussex Street<br/>
                            Sydney NSW 2000<br/>
                            Australia
                        </p>
                        <div className="flex-grow mb-6 rounded-xl overflow-hidden shadow-sm h-[320px]">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.5913203407945!2d151.2036725762967!3d-33.87438131936494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae2442bf577b%3A0x6b49e89d81d6540b!2sLevel%204%20Suite%20410%2F368%20Sussex%20St%2C%20Sydney%20NSW%202000!5e0!3m2!1sen!2sau!4v1716766400000!5m2!1sen!2sau" 
                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a href="https://www.google.com/maps/search/?api=1&query=368+Sussex+Street+Sydney+NSW+2000" target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 text-center text-sm">Get Directions</a>
                            <a href="contact.html" className="btn-outline flex-1 text-center text-sm hover:bg-[var(--primary)] hover:text-white transition-colors duration-300">Make an Enquiry</a>
                        </div>
                    </div>
                    {/* Canberra Office */}
                    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col">
                        <h3 className="text-xl font-bold font-serif text-[var(--primary)] mb-2">Canberra Office</h3>
                        <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                            AZL Consulting and Trading Group Pty Ltd<br/>
                            10 Arnott Street<br/>
                            Hume ACT 2620<br/>
                            Australia
                        </p>
                        <div className="flex-grow mb-6 rounded-xl overflow-hidden shadow-sm h-[320px]">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3257.67156322883!2d149.16788347636585!3d-35.38865617268307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1649f8728be781%3A0xe6bf44b9fa0df6d5!2s10%20Arnott%20St%2C%20Hume%20ACT%202620!5e0!3m2!1sen!2sau!4v1716766500000!5m2!1sen!2sau" 
                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a href="https://www.google.com/maps/search/?api=1&query=10+Arnott+Street+Hume+ACT+2620" target="_blank" rel="noopener noreferrer" className="btn-primary flex-1 text-center text-sm">Get Directions</a>
                            <a href="contact.html" className="btn-outline flex-1 text-center text-sm hover:bg-[var(--primary)] hover:text-white transition-colors duration-300">Make an Enquiry</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}