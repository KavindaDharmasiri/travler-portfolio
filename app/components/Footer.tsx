'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="text-xl font-bold flex items-center gap-2 mb-4">
              <span className="text-2xl">→</span>
              <span>Travlor</span>
            </Link>
            <p className="text-sm text-gray-600 mb-4">
              Empowering digital transformation with innovative corporate tech solutions.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <span className="text-sm">𝕏</span>
              </a>
              <a 
                href="https://www.linkedin.com/company/travlerr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <span className="text-sm">in</span>
              </a>
              <a 
                href="mailto:info@travlor.com"
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <span className="text-sm">@</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">COMPANY</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/about" className="hover:text-gray-900 transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-gray-900 transition-colors">Careers</Link></li>
              <li><Link href="/leadership" className="hover:text-gray-900 transition-colors">Leadership</Link></li>
              <li><Link href="/sustainability" className="hover:text-gray-900 transition-colors">Sustainability</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">SERVICES</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/consulting" className="hover:text-gray-900 transition-colors">Strategic Consulting</Link></li>
              <li><Link href="/infrastructure" className="hover:text-gray-900 transition-colors">Digital Infrastructure</Link></li>
              <li><Link href="/cloud" className="hover:text-gray-900 transition-colors">Cloud Management</Link></li>
              <li><Link href="/engineering" className="hover:text-gray-900 transition-colors">Data Engineering</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">NEWSLETTER</h4>
            <p className="text-sm text-gray-600 mb-4">
              Subscribe to receive latest industry insights and updates.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="bg-teal-700 text-white px-4 py-2 rounded-md text-sm hover:bg-teal-800 transition-colors disabled:opacity-50"
              >
                {status === 'loading' ? '...' : 'Subscribe'}
              </button>
            </form>
            {status === 'success' && (
              <p className="text-xs text-green-600 mt-2">Successfully subscribed!</p>
            )}
            {status === 'error' && (
              <p className="text-xs text-red-600 mt-2">Failed to subscribe. Try again.</p>
            )}
          </div>
        </div>
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Travlor Solutions, Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-gray-900 transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
