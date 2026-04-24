'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from '../styles.module.css';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

type Item = { title: string; description: string; badge: string; category: string; image: string; href: string; meta: string; };

const allItems: Item[] = [
  { title: 'Vision Analytics Pro', description: 'Advanced data visualization and predictive analytics for real-time business intelligence.', badge: 'FEATURED', category: 'Software', image: '/assets/Futuristic%20minimalist%20tablet%20showing%20the%20Travler%20Enterprise%20Suite%20v4.0%20dashboard.png', href: '/products/0', meta: '$299/mo' },
  { title: 'Sentinel Shield AI', description: 'Enterprise-grade cybersecurity powered by advanced threat detection and response capabilities.', badge: 'FEATURED', category: 'Security', image: '/assets/Cloud%20Connect%20Pro%20-%20Modern%20data%20center%20servers%20with%20blue%20neon%20lights.png', href: '/products/1', meta: '$450/mo' },
  { title: 'Nexus Node X1', description: 'High-performance edge computing nodes for decentralized data processing and analytics.', badge: 'FEATURED', category: 'Hardware', image: '/assets/Neural%20Analytics%20Hub%20-%203D%20network%20visualization%20of%20glowing%20data%20points.png', href: '/products/2', meta: '$1,200' },
  { title: 'SkyFlow Infrastructure', description: 'Scalable cloud infrastructure with automated scaling for high-traffic web applications.', badge: '', category: 'Cloud', image: '/assets/Cloud%20Connect%20Pro%20-%20Modern%20data%20center%20servers%20with%20blue%20neon%20lights.png', href: '/products/3', meta: '$89/mo' },
  { title: 'VaultLock Key Manager', description: 'Enterprise-grade encryption key management for sensitive financial and healthcare data compliance.', badge: 'FEATURED', category: 'Security', image: '/assets/Cloud%20Connect%20Pro%20-%20Modern%20data%20center%20servers%20with%20blue%20neon%20lights.png', href: '/products/4', meta: '$199/mo' },
  { title: 'DevOps Master Console', description: 'Comprehensive CI/CD platform for Kubernetes, Docker operations, and automated testing workflows.', badge: 'FEATURED', category: 'Software', image: '/assets/Futuristic%20minimalist%20tablet%20showing%20the%20Travler%20Enterprise%20Suite%20v4.0%20dashboard.png', href: '/products/5', meta: '$599/mo' },
  { title: 'Purely', description: 'Natural skincare brand Shopify storefront with a clean, minimal aesthetic and seamless shopping experience.', badge: 'SHOPIFY', category: 'Shopify', image: '/assets/shopify/purely/home.png', href: '/portfolio/purely', meta: 'View Project' },
  { title: 'TechNova', description: 'Bold, tech-forward Shopify store for electronics and gadget retailers with a dark, modern UI.', badge: 'SHOPIFY', category: 'Shopify', image: '/assets/shopify/technova/home.png', href: '/portfolio/technova', meta: 'View Project' },
  { title: 'Velora', description: 'Premium fashion Shopify store with elegant typography, full cart flow, and a polished checkout experience.', badge: 'SHOPIFY', category: 'Shopify', image: '/assets/shopify/velora/home.png', href: '/portfolio/velora', meta: 'View Project' },
];

const tabs = ['All', 'Software', 'Hardware', 'Security', 'Cloud', 'Shopify'];

export default function ProductsPage() {
  const [active, setActive] = useState('All');
  const searchParams = useSearchParams();
  const q = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(q);

  useEffect(() => {
    setSearchQuery(searchParams.get('q') || '');
  }, [searchParams]);

  const filtered = allItems.filter(i => {
    const matchesTab = active === 'All' || i.category === active;
    const matchesSearch = searchQuery === '' ||
      i.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      i.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      i.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className={styles.page}>
      <SiteHeader />

      <section className={styles.section} style={{ paddingBottom: '2rem' }}>
        <div className={styles.badge} style={{ marginBottom: '1.25rem' }}>Products & Portfolio</div>
        <h1 className={styles.heading1}>Innovative Solutions for Tomorrow</h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '36rem', lineHeight: '1.7' }}>
          Empower your business with intelligent platforms designed to streamline operations and fuel growth.
        </p>
      </section>

      <div className={styles.section} style={{ paddingTop: '0', paddingBottom: '1.5rem' }}>
        {/* Local search */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ position: 'relative', flex: '1', maxWidth: '24rem' }}>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{ width: '100%', padding: '0.625rem 1rem 0.625rem 2.25rem', fontSize: '0.875rem', background: 'var(--input-bg)', border: '1px solid var(--input-border)', borderRadius: '8px', color: 'var(--input-text)', outline: 'none', boxSizing: 'border-box' }}
            />
            <svg style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)', width: '0.9rem', height: '0.9rem', color: 'var(--text-muted)', pointerEvents: 'none' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} style={{ fontSize: '0.8rem', color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer' }}>Clear ✕</button>
          )}
        </div>
        {/* Tabs */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {tabs.map(tab => (
            <button key={tab} onClick={() => setActive(tab)} style={{ padding: '0.5rem 1.125rem', background: active === tab ? 'var(--accent)' : 'var(--bg-card)', color: active === tab ? '#fff' : 'var(--text-secondary)', borderRadius: '8px', fontSize: '0.875rem', fontWeight: '600', border: `1px solid ${active === tab ? 'var(--accent)' : 'var(--border)'}`, cursor: 'pointer', transition: 'all 0.15s' }}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      <section className={styles.section} style={{ paddingTop: '1rem' }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem 2rem' }}>
            <p style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔍</p>
            <p style={{ fontSize: '1.125rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>No results for &ldquo;{searchQuery}&rdquo;</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>Try a different keyword or clear the search.</p>
            <button onClick={() => setSearchQuery('')} className={styles.btnPrimary} style={{ padding: '0.625rem 1.5rem' }}>Clear Search</button>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '1.5rem' }}>
          {filtered.map(item => (
            <div key={item.title} className={styles.card} style={{ padding: 0, overflow: 'hidden', position: 'relative' }}>
              {item.badge && (
                <div style={{ position: 'absolute', top: '0.875rem', left: item.badge === 'SHOPIFY' ? '0.875rem' : undefined, right: item.badge !== 'SHOPIFY' ? '0.875rem' : undefined, background: 'var(--accent)', color: '#fff', padding: '0.25rem 0.75rem', borderRadius: '100px', fontSize: '0.65rem', fontWeight: '700', zIndex: 10, letterSpacing: '0.05em' }}>
                  {item.badge}
                </div>
              )}
              <div style={{ position: 'relative', height: '11rem', background: 'var(--bg-secondary)' }}>
                <Image src={item.image} alt={item.title} fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.25rem' }}>
                <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{item.category}</span>
                <h3 style={{ fontSize: '1rem', fontWeight: '700', margin: '0.35rem 0 0.5rem', color: 'var(--text-primary)' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1.125rem', lineHeight: '1.6' }}>{item.description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: item.category === 'Shopify' ? '0.875rem' : '1.125rem', fontWeight: '700', color: 'var(--accent)' }}>{item.meta}</span>
                  <Link href={item.href}>
                    <button style={{ padding: '0.4rem 1rem', background: 'transparent', border: '1px solid var(--accent)', color: 'var(--accent)', borderRadius: '8px', fontSize: '0.8rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.15s' }}>
                      {item.category === 'Shopify' ? 'View Project' : 'Learn More'} →
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          </div>
        )}
      </section>

      <section className={styles.section} style={{ paddingTop: '2rem' }}>
        <div style={{ padding: '3rem 2rem', background: 'var(--bg-card)', borderRadius: '16px', border: '1px solid var(--border)', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '0.875rem' }}>Ready to transform your vision?</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '36rem', margin: '0 auto 2rem', lineHeight: '1.7' }}>Our consultants are ready to help you build the perfect tech stack for your organization&apos;s unique requirements.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact"><button className={styles.btnPrimary} style={{ padding: '0.75rem 2rem' }}>Book a Consultation</button></Link>
            <button className={styles.btnSecondary} style={{ padding: '0.75rem 2rem' }}>Download Catalog</button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
