'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold flex items-center gap-2">
            <span className="text-2xl">→</span>
            <span>Travlor</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/services" className="text-gray-700 hover:text-gray-900 transition-colors">
              Services
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-gray-900 transition-colors">
              Products
            </Link>
            <Link href="/news" className="text-gray-700 hover:text-gray-900 transition-colors">
              News
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900 transition-colors">
              About
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search travlor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8 pr-4 py-2 text-sm border border-gray-200 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <svg 
              className="w-4 h-4 absolute left-2.5 top-3 text-gray-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
          </div>
          <Link href="/contact">
            <button className="bg-teal-700 text-white px-4 py-2 rounded-md text-sm hover:bg-teal-800 transition-colors">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
