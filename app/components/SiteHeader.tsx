'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles.module.css';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Image src="/assets/Travler%20-%20Corporate%20Digital%20Solutions%20Logo.png" alt="Travler" width={32} height={32} style={{ objectFit: 'contain' }} />
            <span style={{ fontSize: '1.125rem', fontWeight: '600' }}>Travler</span>
          </Link>

          {/* Desktop nav */}
          <nav className={styles.nav}>
            <Link href="/careers" className={styles.navLink}>Careers</Link>
            <Link href="/products" className={styles.navLink}>Products</Link>
            <Link href="/news" className={styles.navLink}>News</Link>
            <Link href="/about" className={styles.navLink}>About</Link>
          </nav>

          {/* Desktop right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div className={styles.searchBox}>
              <input type="text" placeholder="Search travler..." className={styles.searchInput} />
              <svg className={styles.searchIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Desktop contact button — hidden on mobile via CSS */}
            <span className={styles.desktopOnly}>
              <Link href="/contact">
                <button className={styles.btnPrimary}>Contact Us</button>
              </Link>
            </span>

            {/* Hamburger — visible on mobile only */}
            <button className={styles.menuBtn} onClick={() => setOpen(!open)} aria-label="Toggle menu">
              <span style={{ transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
              <span style={{ opacity: open ? 0 : 1 }} />
              <span style={{ transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav drawer */}
      <div className={`${styles.mobileNav} ${open ? styles.open : ''}`}>
        <Link href="/careers" className={styles.mobileNavLink} onClick={() => setOpen(false)}>Careers</Link>
        <Link href="/products" className={styles.mobileNavLink} onClick={() => setOpen(false)}>Products</Link>
        <Link href="/news" className={styles.mobileNavLink} onClick={() => setOpen(false)}>News</Link>
        <Link href="/about" className={styles.mobileNavLink} onClick={() => setOpen(false)}>About</Link>
        <Link href="/contact" onClick={() => setOpen(false)}>
          <button className={styles.btnPrimary} style={{ width: '100%', padding: '0.75rem', marginTop: '0.5rem' }}>Contact Us</button>
        </Link>
      </div>
    </>
  );
}
