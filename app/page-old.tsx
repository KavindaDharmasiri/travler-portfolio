import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f3]">
      <Header />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs text-gray-500 mb-4 tracking-wider">TRANSFORMING RESULTS BY LEARNING</p>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Innovating the Future of Corporate Excellence
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We provide cutting-edge digital solutions to empower your business growth and accelerate global transformation.
            </p>
            <div className="flex gap-4 mb-8">
              <button className="bg-teal-700 text-white px-6 py-3 rounded-md hover:bg-teal-800">
                Get Started
              </button>
              <button className="border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-50">
                View Trends
              </button>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-teal-700 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white"></div>
              </div>
              <p className="text-xs text-gray-500">Trusted by 300+ global enterprises</p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-80">
                <Image
                  src="/window.svg"
                  alt="Modern office building"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 flex items-center gap-3">
                <div className="bg-gray-100 p-2 rounded">
                  <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Revenue Growth</p>
                  <p className="text-2xl font-bold text-teal-700">+248%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Business Solutions */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-between items-start mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Comprehensive Business Solutions</h2>
            <p className="text-gray-600 max-w-xl">
              Tailored strategies and technologies designed to tackle the most potent industrial challenges of the 21st century.
            </p>
          </div>
          <Link href="/services" className="text-sm flex items-center gap-2 hover:gap-3 transition-all">
            Explore All Services
            <span>→</span>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Strategic Consulting</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Expert services to navigate complex market dynamics and optimize high-impact decision-making for growth.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Digital Infrastructure</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Custom cloud-based solutions and scalable enterprise software architecture for the modern digital landscape.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Asset Intelligence</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Maximizing portfolio value through data-driven investment strategies and risk management.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem Technologies */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-12">Ecosystem Technologies</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48 bg-gray-900">
              <Image
                src="/window.svg"
                alt="Enterprise Suite"
                fill
                className="object-cover opacity-80"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2">Enterprise Suite v4.0</h3>
              <p className="text-gray-600 text-sm">End-to-end business solutions</p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48 bg-gray-900">
              <Image
                src="/globe.svg"
                alt="Neural Analytics"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2">Neural Analytics Hub</h3>
              <p className="text-gray-600 text-sm">Advanced AI-powered analytics</p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-48 bg-gray-900">
              <Image
                src="/next.svg"
                alt="Cloud Connect"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2">Cloud Connect Pro</h3>
              <p className="text-gray-600 text-sm">Secure cloud infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Insights */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Corporate Insights</h2>
            <Link href="/news" className="text-sm flex items-center gap-2 hover:gap-3 transition-all">
              View Newsroom
              <span>→</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-800 p-8 rounded-lg hover:border-gray-700 transition-colors">
              <p className="text-xs text-gray-400 mb-4">January 15, 2025</p>
              <h3 className="text-xl font-bold mb-4">
                Travlor Announces Strategic Partnership with Global Tech Alliance for Sustainable AI Development
              </h3>
              <p className="text-gray-400 text-sm">
                The partnership aims to accelerate the ethical intelligence across industries manufacturing various...
              </p>
            </div>
            <div className="border border-gray-800 p-8 rounded-lg hover:border-gray-700 transition-colors">
              <p className="text-xs text-gray-400 mb-4">August 08, 2025</p>
              <h3 className="text-xl font-bold mb-4">
                Q2 Financial Report: Record-Breaking Growth in Digital Services Division
              </h3>
              <p className="text-gray-400 text-sm">
                Q2 2025 Q2 earnings exceeded projections with a 48% YoY rise in annual recurring revenue for cloud-based...
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
