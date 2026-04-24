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
      const res = await fetch('/api/newsletter', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) });
      if (res.ok) { setStatus('success'); setEmail(''); setTimeout(() => setStatus(''), 3000); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.section} style={{ paddingTop: '3.5rem', paddingBottom: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2.5rem', marginBottom: '3rem' }}>

          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1rem' }}>
              <Image src="/assets/Travler%20-%20Corporate%20Digital%20Solutions%20Logo.png" alt="Travler" width={28} height={28} style={{ objectFit: 'contain' }} />
              <span style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)' }}>Travler</span>
            </Link>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '1.25rem' }}>
              Leading the transition to a digitally empowered corporate world with intelligence, strategy, and execution.
            </p>
            <div style={{ display: 'flex', gap: '0.625rem' }}>
              {[{ href: 'https://twitter.com/travler', label: '𝕏' }, { href: 'https://www.linkedin.com/company/travler-solutions/', label: 'in' }, { href: 'mailto:travlerofficial2025@gmail.com', label: '@' }].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{ width: '2rem', height: '2rem', background: 'var(--bg-secondary)', border: '1px solid var(--border)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', color: 'var(--text-secondary)', transition: 'border-color 0.2s, color 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--accent)'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)'; }}
                >{s.label}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontWeight: '700', marginBottom: '1rem', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Company</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {[['About Us', '/about'], ['Careers', '/careers'], ['Products', '/products'], ['News', '/news']].map(([l, h]) => (
                <Link key={h} href={h} style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >{l}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontWeight: '700', marginBottom: '1rem', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {[['Strategic Consulting', '/consulting'], ['Digital Solutions', '/infrastructure'], ['Asset Management', '/cloud'], ['Data Engineering', '/engineering']].map(([l, h]) => (
                <Link key={h} href={h} style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >{l}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontWeight: '700', marginBottom: '1rem', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Newsletter</h4>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: '1.6' }}>Stay updated with our latest insights.</p>
            <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} required
                style={{ padding: '0.625rem 0.875rem', fontSize: '0.875rem', background: 'var(--input-bg)', border: '1px solid var(--input-border)', borderRadius: '8px', color: 'var(--input-text)', outline: 'none' }} />
              <button className={styles.btnPrimary} style={{ padding: '0.625rem' }} disabled={status === 'loading'}>
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {status === 'success' && <p style={{ fontSize: '0.75rem', color: '#22c55e', marginTop: '0.5rem' }}>✓ Subscribed!</p>}
            {status === 'error' && <p style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '0.5rem' }}>Failed. Try again.</p>}
          </div>
        </div>

        <div style={{ paddingTop: '1.75rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'var(--text-muted)', flexWrap: 'wrap', gap: '1rem' }}>
          <p>© {new Date().getFullYear()} Travler Solutions, Inc. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[['Privacy Policy', '/privacy'], ['Terms of Service', '/terms'], ['Cookie Settings', '/cookies']].map(([l, h]) => (
              <Link key={h} href={h} style={{ transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
              >{l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
