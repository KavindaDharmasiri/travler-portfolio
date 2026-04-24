'use client';

import Image from "next/image";
import Link from "next/link";
import styles from './styles.module.css';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';

export default function Home() {
  return (
    <div className={styles.page}>
      <SiteHeader />

      {/* Hero */}
      <section className={styles.section} style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div className={styles.heroGrid}>
          <div>
            <div className={styles.badge} style={{ marginBottom: '1.5rem' }}>
              Transforming Corporate Excellence
            </div>
            <h1 className={styles.heading1}>
              Innovating the Future of Corporate Excellence
            </h1>
            <p className={styles.textGray}>
              We provide cutting-edge digital solutions to empower your business growth and accelerate global transformation.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
              <Link href="/contact">
                <button className={styles.btnPrimary} style={{ padding: '0.75rem 1.75rem' }}>Get Started</button>
              </Link>
              <Link href="/products">
                <button className={styles.btnSecondary} style={{ padding: '0.75rem 1.75rem' }}>View Products</button>
              </Link>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
              <div style={{ display: 'flex' }}>
                {['var(--accent)', '#8b5cf6', '#06b6d4'].map((c, i) => (
                  <div key={i} style={{ width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: c, border: '2px solid var(--bg)', marginLeft: i > 0 ? '-0.5rem' : 0 }} />
                ))}
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Trusted by 300+ global enterprises</p>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
              <div style={{ position: 'relative', height: '20rem' }}>
                <Image src="/assets/Modern%20glass%20corporate%20office%20interior%20with%20sunset%20lighting%20representing%20business%20growth.png" alt="Modern office" fill style={{ objectFit: 'cover' }} priority />
              </div>
              <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', background: 'var(--bg-card)', backdropFilter: 'blur(12px)', borderRadius: '12px', border: '1px solid var(--border)', padding: '0.875rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <div style={{ width: '2.25rem', height: '2.25rem', background: 'var(--accent)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg style={{ width: '1.125rem', height: '1.125rem', color: '#fff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.1rem' }}>Revenue Growth</p>
                  <p style={{ fontSize: '1.375rem', fontWeight: '800', color: 'var(--accent)' }}>+248%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={styles.section} style={{ paddingTop: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className={styles.badge} style={{ marginBottom: '1rem' }}>Our Services</div>
            <h2 className={styles.heading2}>Comprehensive Business Solutions</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '36rem' }}>
              Tailored strategies and technologies designed to tackle the most potent industrial challenges of the 21st century.
            </p>
          </div>
          <Link href="/products" style={{ fontSize: '0.875rem', color: 'var(--accent)', fontWeight: '600' }}>Explore All →</Link>
        </div>
        <div className={styles.servicesGrid}>
          {[
            { icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', title: 'Strategic Consulting', desc: 'Expert services to navigate complex market dynamics and optimize high-impact decision-making for growth.' },
            { icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z', title: 'Digital Infrastructure', desc: 'Custom cloud-based solutions and scalable enterprise software architecture for the modern digital landscape.' },
            { icon: 'M13 10V3L4 14h7v7l9-11h-7z', title: 'Asset Intelligence', desc: 'Maximizing portfolio value through data-driven investment strategies and risk management.' },
          ].map((s) => (
            <div key={s.title} className={styles.card}>
              <div className={styles.iconBox}>
                <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={s.icon} />
                </svg>
              </div>
              <h3 className={styles.heading3}>{s.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.7' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ecosystem */}
      <section className={styles.section} style={{ paddingTop: '2rem' }}>
        <div className={styles.badge} style={{ marginBottom: '1rem' }}>Ecosystem</div>
        <h2 className={styles.heading2}>Ecosystem Technologies</h2>
        <div className={styles.productsGrid}>
          {[
            { img: '/assets/Futuristic%20minimalist%20tablet%20showing%20the%20Travler%20Enterprise%20Suite%20v4.0%20dashboard.png', title: 'Enterprise Suite v4.0', desc: 'End-to-end business solutions' },
            { img: '/assets/Neural%20Analytics%20Hub%20-%203D%20network%20visualization%20of%20glowing%20data%20points.png', title: 'Neural Analytics Hub', desc: 'Advanced AI-powered analytics' },
            { img: '/assets/Cloud%20Connect%20Pro%20-%20Modern%20data%20center%20servers%20with%20blue%20neon%20lights.png', title: 'Cloud Connect Pro', desc: 'Secure cloud infrastructure' },
          ].map((p) => (
            <div key={p.title} className={styles.card} style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ position: 'relative', height: '12rem', background: 'var(--bg-secondary)' }}>
                <Image src={p.img} alt={p.title} fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.25rem' }}>
                <h3 className={styles.heading3} style={{ fontSize: '1rem', marginBottom: '0.35rem' }}>{p.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className={styles.section} style={{ paddingTop: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className={styles.badge} style={{ marginBottom: '1rem' }}>Portfolio</div>
            <h2 className={styles.heading2}>Shopify Projects</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '36rem' }}>
              A selection of custom Shopify storefronts we&apos;ve designed and developed for our clients.
            </p>
          </div>
          <Link href="/products" style={{ fontSize: '0.875rem', color: 'var(--accent)', fontWeight: '600' }}>View All →</Link>
        </div>
        <div className={styles.servicesGrid}>
          {[
            { slug: 'purely', title: 'Purely', desc: 'Natural skincare brand with a clean, minimal storefront.', home: '/assets/shopify/purely/home.png' },
            { slug: 'technova', title: 'TechNova', desc: 'Bold tech-forward store for electronics and gadgets.', home: '/assets/shopify/technova/home.png' },
            { slug: 'velora', title: 'Velora', desc: 'Premium fashion store with full cart and checkout flow.', home: '/assets/shopify/velora/home.png' },
          ].map((p) => (
            <Link key={p.slug} href={`/portfolio/${p.slug}`}>
              <div className={styles.card} style={{ padding: 0, overflow: 'hidden', cursor: 'pointer' }}>
                <div style={{ position: 'relative', height: '12rem', background: 'var(--bg-secondary)' }}>
                  <Image src={p.home} alt={p.title} fill style={{ objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '0.875rem', left: '0.875rem', background: 'var(--accent)', color: '#fff', fontSize: '0.65rem', fontWeight: '700', padding: '0.3rem 0.75rem', borderRadius: '100px', letterSpacing: '0.05em' }}>SHOPIFY</div>
                </div>
                <div style={{ padding: '1.25rem' }}>
                  <h3 className={styles.heading3} style={{ fontSize: '1rem', marginBottom: '0.35rem' }}>{p.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '0.875rem' }}>{p.desc}</p>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: '600' }}>View Project →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Insights */}
      <section className={styles.darkSection}>
        <div className={styles.section} style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className={styles.badge} style={{ marginBottom: '1rem' }}>Latest News</div>
              <h2 className={styles.heading2}>Corporate Insights</h2>
            </div>
            <Link href="/news" style={{ fontSize: '0.875rem', color: 'var(--accent)', fontWeight: '600' }}>View Newsroom →</Link>
          </div>
          <div className={styles.insightsGrid}>
            {[
              { date: 'January 15, 2025', title: 'Travler Announces Strategic Partnership with Global Tech Alliance for Sustainable AI Development', excerpt: 'The partnership aims to accelerate the ethical intelligence across industries manufacturing various...' },
              { date: 'August 08, 2025', title: 'Q2 Financial Report: Record-Breaking Growth in Digital Services Division', excerpt: 'Q2 2025 Q2 earnings exceeded projections with a 48% YoY rise in annual recurring revenue for cloud-based...' },
            ].map((a) => (
              <div key={a.date} className={styles.card} style={{ cursor: 'pointer' }}>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.875rem' }}>{a.date}</p>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.625rem', color: 'var(--text-primary)', lineHeight: '1.5' }}>{a.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.7', marginBottom: '1rem' }}>{a.excerpt}</p>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: '600' }}>Read more →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
