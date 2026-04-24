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

      {/* Hero Section */}
      <section className={styles.section}>
        <div className={styles.heroGrid}>
          <div>
            <p style={{fontSize: '0.75rem', color: '#6b7280', marginBottom: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase'}}>
              TRANSFORMING RESULTS BY LEARNING
            </p>
            <h1 className={styles.heading1}>
              Innovating the Future of Corporate Excellence
            </h1>
            <p className={styles.textGray}>
              We provide cutting-edge digital solutions to empower your business growth and accelerate global transformation.
            </p>
            <div style={{display: 'flex', gap: '1rem', marginBottom: '2rem'}}>
              <button className={styles.btnPrimary} style={{padding: '0.75rem 1.5rem'}}>
                Get Started
              </button>
              <button className={styles.btnSecondary}>
                View Trends
              </button>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
              <div style={{display: 'flex'}}>
                <div style={{width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: '#0f766e', border: '2px solid white', marginLeft: '0'}}></div>
                <div style={{width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: '#374151', border: '2px solid white', marginLeft: '-0.5rem'}}></div>
                <div style={{width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: '#6b7280', border: '2px solid white', marginLeft: '-0.5rem'}}></div>
              </div>
              <p style={{fontSize: '0.75rem', color: '#6b7280'}}>Trusted by 300+ global enterprises</p>
            </div>
          </div>
          <div style={{position: 'relative'}}>
            <div style={{backgroundColor: '#ffffff', borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', overflow: 'hidden', position: 'relative'}}>
              <div style={{position: 'relative', height: '20rem'}}>
                <Image
                  src="/assets/Modern%20glass%20corporate%20office%20interior%20with%20sunset%20lighting%20representing%20business%20growth.png"
                  alt="Modern office building"
                  fill
                  style={{objectFit: 'cover'}}
                />
              </div>
              <div style={{position: 'absolute', bottom: '1rem', left: '1rem', backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                <div style={{backgroundColor: '#f3f4f6', padding: '0.5rem', borderRadius: '0.25rem'}}>
                  <svg style={{width: '1.5rem', height: '1.5rem', color: '#0f766e'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p style={{fontSize: '0.75rem', color: '#6b7280'}}>Revenue Growth</p>
                  <p style={{fontSize: '1.5rem', fontWeight: '700', color: '#0f766e'}}>+248%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Business Solutions */}
      <section className={styles.section}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '3rem'}}>
          <div>
            <h2 className={styles.heading2} style={{marginBottom: '1rem'}}>Comprehensive Business Solutions</h2>
            <p style={{color: '#4b5563', maxWidth: '36rem'}}>
              Tailored strategies and technologies designed to tackle the most potent industrial challenges of the 21st century.
            </p>
          </div>
          <Link href="/services" style={{fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#171717'}}>
            Explore All Services
            <span>→</span>
          </Link>
        </div>
        <div className={styles.servicesGrid}>
          <div className={styles.card}>
            <div className={styles.iconBox}>
              <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className={styles.heading3}>Strategic Consulting</h3>
            <p style={{color: '#4b5563', fontSize: '0.875rem', lineHeight: '1.625'}}>
              Expert services to navigate complex market dynamics and optimize high-impact decision-making for growth.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.iconBox}>
              <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <h3 className={styles.heading3}>Digital Infrastructure</h3>
            <p style={{color: '#4b5563', fontSize: '0.875rem', lineHeight: '1.625'}}>
              Custom cloud-based solutions and scalable enterprise software architecture for the modern digital landscape.
            </p>
          </div>
          <div className={styles.card}>
            <div className={styles.iconBox}>
              <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className={styles.heading3}>Asset Intelligence</h3>
            <p style={{color: '#4b5563', fontSize: '0.875rem', lineHeight: '1.625'}}>
              Maximizing portfolio value through data-driven investment strategies and risk management.
            </p>
          </div>
        </div>
      </section>

      {/* Ecosystem Technologies */}
      <section className={styles.section}>
        <h2 className={styles.heading2}>Ecosystem Technologies</h2>
        <div className={styles.productsGrid}>
          <div className={styles.card} style={{padding: 0, overflow: 'hidden'}}>
            <div style={{position: 'relative', height: '12rem', backgroundColor: '#111827'}}>
              <Image
                src="/assets/Futuristic%20minimalist%20tablet%20showing%20the%20Travler%20Enterprise%20Suite%20v4.0%20dashboard.png"
                alt="Enterprise Suite"
                fill
                style={{objectFit: 'cover'}}
              />
            </div>
            <div style={{padding: '1.5rem'}}>
              <h3 className={styles.heading3} style={{fontSize: '1.125rem', marginBottom: '0.5rem'}}>Enterprise Suite v4.0</h3>
              <p style={{color: '#4b5563', fontSize: '0.875rem'}}>End-to-end business solutions</p>
            </div>
          </div>
          <div className={styles.card} style={{padding: 0, overflow: 'hidden'}}>
            <div style={{position: 'relative', height: '12rem', backgroundColor: '#111827'}}>
              <Image
                src="/assets/Neural%20Analytics%20Hub%20-%203D%20network%20visualization%20of%20glowing%20data%20points.png"
                alt="Neural Analytics"
                fill
                style={{objectFit: 'cover'}}
              />
            </div>
            <div style={{padding: '1.5rem'}}>
              <h3 className={styles.heading3} style={{fontSize: '1.125rem', marginBottom: '0.5rem'}}>Neural Analytics Hub</h3>
              <p style={{color: '#4b5563', fontSize: '0.875rem'}}>Advanced AI-powered analytics</p>
            </div>
          </div>
          <div className={styles.card} style={{padding: 0, overflow: 'hidden'}}>
            <div style={{position: 'relative', height: '12rem', backgroundColor: '#111827'}}>
              <Image
                src="/assets/Cloud%20Connect%20Pro%20-%20Modern%20data%20center%20servers%20with%20blue%20neon%20lights.png"
                alt="Cloud Connect"
                fill
                style={{objectFit: 'cover'}}
              />
            </div>
            <div style={{padding: '1.5rem'}}>
              <h3 className={styles.heading3} style={{fontSize: '1.125rem', marginBottom: '0.5rem'}}>Cloud Connect Pro</h3>
              <p style={{color: '#4b5563', fontSize: '0.875rem'}}>Secure cloud infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Projects */}
      <section id="portfolio" className={styles.section}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '3rem'}}>
          <div>
            <h2 className={styles.heading2} style={{marginBottom: '1rem'}}>Shopify Projects</h2>
            <p style={{color: '#4b5563', maxWidth: '36rem'}}>A selection of custom Shopify storefronts we&apos;ve designed and developed for our clients.</p>
          </div>
        </div>
        <div className={styles.servicesGrid}>
          {[
            { slug: 'purely', title: 'Purely', desc: 'Natural skincare brand with a clean, minimal storefront.', home: '/assets/shopify/purely/home.png' },
            { slug: 'technova', title: 'TechNova', desc: 'Bold tech-forward store for electronics and gadgets.', home: '/assets/shopify/technova/home.png' },
            { slug: 'velora', title: 'Velora', desc: 'Premium fashion store with full cart and checkout flow.', home: '/assets/shopify/velora/home.png' },
          ].map((p) => (
            <Link key={p.slug} href={`/portfolio/${p.slug}`} style={{textDecoration: 'none'}}>
              <div className={styles.card} style={{padding: 0, overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s'}} onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 12px 24px -4px rgb(0 0 0 / 0.12)'; }} onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.transform = ''; (e.currentTarget as HTMLDivElement).style.boxShadow = ''; }}>
                <div style={{position: 'relative', height: '13rem', backgroundColor: '#f3f4f6'}}>
                  <Image src={p.home} alt={p.title} fill style={{objectFit: 'cover'}} />
                  <div style={{position: 'absolute', top: '0.75rem', left: '0.75rem', backgroundColor: '#0f766e', color: '#fff', fontSize: '0.7rem', fontWeight: '600', padding: '0.2rem 0.6rem', borderRadius: '0.25rem', letterSpacing: '0.05em'}}>SHOPIFY</div>
                </div>
                <div style={{padding: '1.25rem'}}>
                  <h3 className={styles.heading3} style={{marginBottom: '0.4rem'}}>{p.title}</h3>
                  <p style={{color: '#6b7280', fontSize: '0.875rem', marginBottom: '0.75rem'}}>{p.desc}</p>
                  <span style={{fontSize: '0.8rem', color: '#0f766e', fontWeight: '500'}}>View Project →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Corporate Insights */}
      <section className={styles.darkSection}>
        <div className={styles.section} style={{paddingTop: 0, paddingBottom: 0}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem'}}>
            <h2 className={styles.heading2} style={{color: '#ffffff', marginBottom: 0}}>Corporate Insights</h2>
            <Link href="/news" style={{fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffffff'}}>
              View Newsroom
              <span>→</span>
            </Link>
          </div>
          <div className={styles.insightsGrid}>
            <div style={{border: '1px solid #374151', padding: '2rem', borderRadius: '0.5rem', transition: 'border-color 150ms', cursor: 'pointer'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#4b5563'} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#374151'}>
              <p style={{fontSize: '0.75rem', color: '#9ca3af', marginBottom: '1rem'}}>January 15, 2025</p>
              <h3 style={{fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem'}}>
                Travler Announces Strategic Partnership with Global Tech Alliance for Sustainable AI Development
              </h3>
              <p style={{color: '#9ca3af', fontSize: '0.875rem'}}>
                The partnership aims to accelerate the ethical intelligence across industries manufacturing various...
              </p>
            </div>
            <div style={{border: '1px solid #374151', padding: '2rem', borderRadius: '0.5rem', transition: 'border-color 150ms', cursor: 'pointer'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#4b5563'} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#374151'}>
              <p style={{fontSize: '0.75rem', color: '#9ca3af', marginBottom: '1rem'}}>August 08, 2025</p>
              <h3 style={{fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem'}}>
                Q2 Financial Report: Record-Breaking Growth in Digital Services Division
              </h3>
              <p style={{color: '#9ca3af', fontSize: '0.875rem'}}>
                Q2 2025 Q2 earnings exceeded projections with a 48% YoY rise in annual recurring revenue for cloud-based...
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
