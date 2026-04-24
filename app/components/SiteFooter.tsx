'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles.module.css';

export default function SiteFooter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) { setStatus('success'); setEmail(''); setTimeout(() => setStatus(''), 3000); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.section}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '2.5rem', marginBottom: '2rem' }}>
          <div style={{ maxWidth: '20rem' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Image src="/assets/Travler%20-%20Corporate%20Digital%20Solutions%20Logo.png" alt="Travler" width={32} height={32} style={{ objectFit: 'contain' }} />
              <span style={{ fontSize: '1.125rem', fontWeight: '600' }}>Travler</span>
            </Link>
            <p style={{ fontSize: '0.875rem', color: '#4b5563', lineHeight: '1.6' }}>
              Leading the transition to a digitally empowered corporate world with intelligence, strategy, and execution.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
              {[
                { href: 'https://twitter.com/travler', label: '𝕏' },
                { href: 'https://linkedin.com/company/travler', label: 'in' },
                { href: 'mailto:travlerofficial2025@gmail.com', label: '@' },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ width: '2rem', height: '2rem', backgroundColor: '#f3f4f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '0.875rem' }}>{s.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontWeight: '700', marginBottom: '1rem', fontSize: '0.75rem', letterSpacing: '0.05em' }}>COMPANY</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: '#4b5563' }}>
              <Link href="/about">About Us</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/products">Products</Link>
              <Link href="/news">News</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontWeight: '700', marginBottom: '1rem', fontSize: '0.75rem', letterSpacing: '0.05em' }}>SERVICES</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: '#4b5563' }}>
              <Link href="/consulting">Strategic Consulting</Link>
              <Link href="/infrastructure">Digital Solutions</Link>
              <Link href="/cloud">Asset Management</Link>
              <Link href="/engineering">Data Engineering</Link>
            </div>
          </div>

          <div style={{ maxWidth: '20rem' }}>
            <h4 style={{ fontWeight: '700', marginBottom: '1rem', fontSize: '0.75rem', letterSpacing: '0.05em' }}>NEWSLETTER</h4>
            <p style={{ fontSize: '0.875rem', color: '#4b5563', marginBottom: '1rem' }}>Stay updated with our latest industry insights.</p>
            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ flex: 1, padding: '0.5rem 0.75rem', fontSize: '0.875rem', border: '1px solid #d1d5db', borderRadius: '0.375rem' }}
              />
              <button className={styles.btnPrimary} style={{ padding: '0.5rem 1rem' }} disabled={status === 'loading'}>
                {status === 'loading' ? '...' : 'Subscribe'}
              </button>
            </form>
            {status === 'success' && <p style={{ fontSize: '0.75rem', color: '#16a34a', marginTop: '0.5rem' }}>✓ Subscribed!</p>}
            {status === 'error' && <p style={{ fontSize: '0.75rem', color: '#dc2626', marginTop: '0.5rem' }}>Failed. Try again.</p>}
          </div>
        </div>

        <div style={{ paddingTop: '2rem', borderTop: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem', color: '#4b5563', flexWrap: 'wrap', gap: '1rem' }}>
          <p>© {new Date().getFullYear()} Travler Solutions, Inc. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/cookies">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
