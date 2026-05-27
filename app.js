class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) { return { hasError: true, error }; }
  componentDidCatch(error, errorInfo) { console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack); }
  render() {
    if (this.state.hasError) return <div className="p-8 text-center text-red-600">Something went wrong.</div>;
    return this.props.children;
  }
}

function HeroSection() {
    return (
        <section className="relative bg-[var(--primary)] text-white overflow-hidden" data-name="hero" data-file="app.js">
            <div className="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" alt="Office Background" className="w-full h-full object-cover opacity-20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-transparent"></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48 flex items-center">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 text-white">
                        Strategic Accounting, <span className="text-[var(--accent)]">Tax & Advisory</span> Solutions
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                        Supporting individuals, private businesses and growing enterprises with accounting, tax, audit and corporate advisory services.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#services" className="btn-primary">Our Services</a>
                        <a href="contact.html" className="btn-outline-white">Contact Us</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

function WhyChooseUs() {
    const features = [
        { title: "Professional accounting", desc: "Delivering reliable financial and strategic guidance.", icon: "icon-users" },
        { title: "Tailored Solutions", desc: "Customised services for every stage of business growth.", icon: "icon-briefcase" },
        { title: "Compliance & Confidence", desc: "Helping clients meet regulatory obligations.", icon: "icon-shield-check" },
        { title: "Long-Term Partnerships", desc: "Building sustainable financial success.", icon: "icon-handshake" }
    ];

    return (
        <section className="py-20 bg-white" data-name="why-choose-us" data-file="app.js">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold tracking-wider text-[var(--accent)] uppercase mb-2">Why Choose Us</h2>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-[var(--primary)]">Partnering for Your Success</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feat, idx) => (
                        <div key={idx} className="card group text-center flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-[var(--bg-light)] text-[var(--primary)] flex items-center justify-center mb-6 group-hover:bg-[var(--primary)] group-hover:text-white transition-colors duration-300">
                                <i className={`${feat.icon} text-2xl`}></i>
                            </div>
                            <h4 className="text-xl font-serif font-semibold mb-3">{feat.title}</h4>
                            <p className="text-gray-600 leading-relaxed">{feat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServicesPreview() {
    const services = [
        { title: 'Accounting & Compliance', href: 'accounting-compliance.html', icon: 'icon-calculator', desc: 'Accurate reporting and full compliance for businesses and individuals.' },
        { title: 'Assurance', href: 'audit-assurance.html', icon: 'icon-search', desc: 'Independent advisory services that strengthen trust and governance.' },
        { title: 'Business Advisory', href: 'business-advisory.html', icon: 'icon-trending-up', desc: 'Strategic insights to help you make informed financial decisions.' },
        { title: 'Corporate Finance', href: 'corporate-finance-valuations.html', icon: 'icon-chart-bar', desc: 'Supporting growth, transactions and strategic investment decisions.' },
        { title: 'Tax for Private Business', href: 'tax-private-business.html', icon: 'icon-file-text', desc: 'Practical tax and business solutions for privately owned enterprises.' },
        { title: 'Trading', href: 'trading.html', icon: 'icon-globe', desc: 'Goods import & export and government grants expertise.' }
    ];

    return (
        <section id="services" className="py-20 bg-[var(--bg-light)]" data-name="services-preview" data-file="app.js">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-bold tracking-wider text-[var(--accent)] uppercase mb-2">Our Expertise</h2>
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-[var(--primary)]">Comprehensive Accounting Services</h3>
                    </div>
                    <a href="accounting-compliance.html" className="text-[var(--primary)] font-medium hover:text-[var(--accent)] transition-colors mt-6 md:mt-0 flex items-center gap-1">
                        View All Services <i className="icon-arrow-right text-sm"></i>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((svc, idx) => (
                        <a key={idx} href={svc.href} className="group bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
                            <i className={`${svc.icon} text-3xl text-[var(--accent)] mb-6`}></i>
                            <h4 className="text-xl font-serif font-semibold mb-3 text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors">{svc.title}</h4>
                            <p className="text-gray-600 mb-6 flex-grow">{svc.desc}</p>
                            <span className="text-[var(--primary)] font-medium text-sm flex items-center gap-1 group-hover:text-[var(--accent)] transition-colors mt-auto">
                                Learn more <i className="icon-arrow-right text-xs"></i>
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

function App() {
    return (
        <div className="flex flex-col min-h-screen w-full">
            <Header />
            <main className="flex-grow">
                <HeroSection />
                <WhyChooseUs />
                <ServicesPreview />
            </main>
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);