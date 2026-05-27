class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError(error) { return { hasError: true }; }
  render() { return this.state.hasError ? <div>Error loading component</div> : this.props.children; }
}

function AboutApp() {
    return (
        <div className="flex flex-col min-h-screen w-full">
            <Header />
            <main className="flex-grow">
                {/* Hero Header */}
                <div className="bg-[var(--primary)] py-20 px-4">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">About AZL Consulting and Trading</h1>
                        <p className="text-gray-300 text-lg max-w-2xl mx-auto">Trusted Accounting & Trading expertise, tailored for your success.</p>
                    </div>
                </div>

                {/* Content Section */}
                <div className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold font-serif mb-6">What We Do</h2>
                            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                                <p>• Accounting & Compliance</p>
                                <p>• Assurance</p>
                                <p>• Business Advisory</p>
                                <p>• Corporate Finance & Valuations</p>
                                <p>• Tax for Private Business</p>
                                <p>• Trading</p>
                            </div>
                        </div>
                        <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80&w=1000" alt="Team meeting" className="absolute inset-0 w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* Staff Profile Section */}
                <div className="py-20 bg-[var(--bg-light)] border-t border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold font-serif mb-4">Staff Profile</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">Meet the experienced professionals dedicated to your success.</p>
                        </div>
                        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row items-center p-8 gap-8 mb-8">
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400" alt="Zhi Li" className="w-48 h-48 rounded-full object-cover shadow-lg" />
                            <div>
                                <h3 className="text-2xl font-serif font-bold text-[var(--primary)] mb-2">Zhi Li</h3>
                                <div className="inline-block bg-[var(--bg-light)] text-[var(--accent)] font-semibold px-3 py-1 rounded-full text-sm mb-4">CPA</div>
                                <p className="text-gray-600 leading-relaxed">
                                    Zhi Li obtained his CPA qualification in 2006 and brings many years of extensive experience in the accounting and advisory field. His deep technical knowledge and practical commercial insights help businesses navigate complex financial landscapes and achieve sustainable growth.
                                </p>
                            </div>
                        </div>
                        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row items-center p-8 gap-8">
                            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400" alt="Shui Qing Lin" className="w-48 h-48 rounded-full object-cover shadow-lg" />
                            <div>
                                <h3 className="text-2xl font-serif font-bold text-[var(--primary)] mb-2">Shui Qing Lin</h3>
                                <div className="inline-block bg-[var(--bg-light)] text-[var(--accent)] font-semibold px-3 py-1 rounded-full text-sm mb-4">CPA</div>
                                <p className="text-gray-600 leading-relaxed">
                                    Shui Qing Lin is a certified CPA with specialized expertise in taxation, compliance, and corporate structuring. She brings meticulous attention to detail and is dedicated to providing high-quality advisory services that empower businesses to thrive.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold font-serif mb-4">Our Core Values</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide our work and relationships every day.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                                <div className="w-16 h-16 bg-blue-50 text-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-6">
                                    <i className="icon-target text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Integrity & Trust</h3>
                                <p className="text-gray-600">We uphold the highest ethical standards, ensuring transparent and reliable financial reporting.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                                <div className="w-16 h-16 bg-blue-50 text-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-6">
                                    <i className="icon-award text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                                <p className="text-gray-600">Delivering superior quality in every engagement through continuous learning and technical expertise.</p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                                <div className="w-16 h-16 bg-blue-50 text-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-6">
                                    <i className="icon-users text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Client-Centric</h3>
                                <p className="text-gray-600">Your success is our success. We build strong partnerships focused on achieving your specific goals.</p>
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
root.render(<ErrorBoundary><AboutApp /></ErrorBoundary>);