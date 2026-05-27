class ErrorBoundary extends React.Component {
  constructor(props) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError(error) { return { hasError: true }; }
  render() { return this.state.hasError ? <div>Error loading component</div> : this.props.children; }
}

function ContactApp() {
    return (
        <div className="flex flex-col min-h-screen w-full">
            <Header />
            <main className="flex-grow">
                {/* Header */}
                <div className="bg-[var(--primary)] py-16 px-4">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-4xl font-serif font-bold text-white mb-4">Contact Us</h1>
                        <p className="text-gray-300 text-lg">We are here to help you achieve your financial goals.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ErrorBoundary><ContactApp /></ErrorBoundary>);