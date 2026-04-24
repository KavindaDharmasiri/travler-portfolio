'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../styles.module.css';
import { useTheme } from './ThemeProvider';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const { theme, toggle } = useTheme();
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/products?q=${encodeURIComponent(query.trim())}`);
      setQuery('');
    }
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', flexShrink: 0 }}>
            <Image src="/assets/Travler%20-%20Corporate%20Digital%20Solutions%20Logo.png" alt="Travler" width={30} height={30} style={{ objectFit: 'contain' }} />
            <span style={{ fontSize: '1.0625rem', fontWeight: '700', color: 'var(--text-primary)' }}>Travler</span>
          </Link>

          <nav className={styles.nav}>
            <Link href="/careers" className={styles.navLink}>Careers</Link>
            <Link href="/products" className={styles.navLink}>Products</Link>
            <Link href="/news" className={styles.navLink}>News</Link>
            <Link href="/about" className={styles.navLink}>About</Link>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div className={styles.searchBox}>
              <form onSubmit={handleSearch} style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <input
                  type="text"
                  placeholder="Search..."
                  className={styles.searchInput}
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  style={{ paddingRight: '2.25rem' }}
                />
                <button type="submit" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', position: 'absolute', right: '0.625rem', top: '50%', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center', color: 'var(--text-muted)' }}>
                  <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Theme toggle */}
            <button className={styles.themeBtn} onClick={toggle} aria-label="Toggle theme" title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
              {theme === 'dark' ? (
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <span className={styles.desktopOnly}>
              <Link href="/contact">
                <button className={styles.btnPrimary}>Contact Us</button>
              </Link>
            </span>

            <button className={styles.menuBtn} onClick={() => setOpen(!open)} aria-label="Toggle menu">
              <span style={{ transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
              <span style={{ opacity: open ? 0 : 1 }} />
              <span style={{ transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
            </button>
          </div>
        </div>
      </header>

      <div className={`${styles.mobileNav} ${open ? styles.open : ''}`}>
        <Link href="/careers" className={styles.mobileNavLink} onClick={() => setOpen(false)}>Careers</Link>
        <Link href="/products" className={styles.mobileNavLink} onClick={() => setOpen(false)}>Products</Link>
        <Link href="/news" className={styles.mobileNavLink} onClick={() => setOpen(false)}>News</Link>
        <Link href="/about" className={styles.mobileNavLink} onClick={() => setOpen(false)}>About</Link>
        <Link href="/contact" onClick={() => setOpen(false)} style={{ marginTop: '0.5rem' }}>
          <button className={styles.btnPrimary} style={{ width: '100%', padding: '0.75rem' }}>Contact Us</button>
        </Link>
      </div>
    </>
  );
}
