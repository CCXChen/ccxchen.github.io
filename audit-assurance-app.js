class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError(error) { return { hasError: true }; }
  render() { return this.state.hasError ? <div>Error loading component</div> : this.props.children; }
}

function ServicePage() {
    const servicesList = [
        "Conduct audits and financial investigations",
        "Advice on mergers, taxation, fraud, insolvency and business transactions",
        "Implement and maintain accounting systems and internal controls",
        "Financial statement audits and reviews",
        "Corporate governance",
        "Data analytics",
        "Information technology risk and security",
        "Internal audit",
        "Review of financial reports",
        "Risk management and corporate governance",
        "Systems and controls reviews",
        "Technical IFRS, accounting advice and training",
        "Preparation of financial reports"
    ];

    return (
        <div className="flex flex-col min-h-screen w-full">
            <Header />
            <main className="flex-grow">
                <div className="bg-[var(--primary)] py-20 px-4 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto relative z-10 text-center">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Audit & Assurance</h1>
                        <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
                            Independent assurance and advisory services that strengthen trust and governance.
                        </p>
                    </div>
                </div>

                <div className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-serif font-bold mb-8">Our Assurance Services</h2>
                            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                                We deliver rigorous, independent audits that provide clarity to stakeholders and uncover insights for operational improvements. Our assurance services are designed to build confidence in your financial reporting.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {servicesList.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-4 bg-[var(--bg-light)] rounded-lg border border-gray-100">
                                        <i className="icon-circle-check text-[var(--accent)] mt-1 flex-shrink-0"></i>
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><ServicePage /></ErrorBoundary>);