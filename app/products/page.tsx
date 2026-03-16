'use client';

import Image from "next/image";
import Link from "next/link";
import styles from '../styles.module.css';

export default function ProductsPage() {
  const products = [
    {
      title: "Vision Analytics Pro",
      description: "Advanced data visualization and predictive analytics for real-time business intelligence.",
      price: "$299/mo",
      image: "/assets/Futuristic%20minimalist%20tablet%20showing%20the%20Travler%20Enterprise%20Suite%20v4.0%20dashboard.png",
      featured: false
    },
    {
      title: "Sentinel Shield AI",
      description: "Enterprise-grade cybersecurity powered by advanced threat detection and response capabilities.",
      price: "$450/mo",
      image: "/assets/Cloud%20Connect%20Pro%20-%20Modern%20data%20center%20servers%20with%20blue%20neon%20lights.png",
      featured: true
    },
    {
      title: "Nexus Node X1",
      description: "High-performance edge computing nodes for decentralized data processing and analytics.",
      price: "$1,200",
      image: "/assets/Neural%20Analytics%20Hub%20-%203D%20network%20visualization%20of%20glowing%20data%20points.png",
      featured: true
    },
    {
      title: "SkyFlow Infrastructure",
      description: "Scalable cloud infrastructure with automated scaling for high-traffic web applications.",
      price: "$89/mo",
      image: "/assets/Cloud%20Connect%20Pro%20-%20Modern%20data%20center%20servers%20with%20blue%20neon%20lights.png",
      featured: false
    },
    {
      title: "VaultLock Key Manager",
      description: "Enterprise-grade encryption key management for sensitive financial and healthcare data compliance.",
      price: "$199/mo",
      image: "/assets/Cloud%20Connect%20Pro%20-%20Modern%20data%20center%20servers%20with%20blue%20neon%20lights.png",
      featured: true
    },
    {
      title: "DevOps Master Console",
      description: "Comprehensive CI/CD platform for Kubernetes, Docker operations, and automated testing workflows.",
      price: "$599/mo",
      image: "/assets/Futuristic%20minimalist%20tablet%20showing%20the%20Travler%20Enterprise%20Suite%20v4.0%20dashboard.png",
      featured: true
    }
  ];

  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div style={{display: 'flex', alignItems: 'center', gap: '2rem'}}>
            <Link href="/" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <Image
                src="/assets/Travler%20-%20Corporate%20Digital%20Solutions%20Logo.png"
                alt="Travler"
                width={32}
                height={32}
                style={{objectFit: 'contain'}}
              />
              <span style={{fontSize: '1.125rem', fontWeight: '600'}}>Travler</span>
            </Link>
          </div>
          <nav className={styles.nav}>
            <Link href="/careers" className={styles.navLink}>Careers</Link>
            <Link href="/products" className={styles.navLink}>Products</Link>
            <Link href="/news" className={styles.navLink}>News</Link>
            <Link href="/about" className={styles.navLink}>About</Link>
          </nav>
          <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
            <div className={styles.searchBox}>
              <input
                type="text"
                placeholder="Search products..."
                className={styles.searchInput}
              />
              <svg className={styles.searchIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <Link href="/contact">
              <button className={styles.btnPrimary}>Contact Us</button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{background: 'linear-gradient(135deg, #0f766e 0%, #134e4a 100%)', padding: '4rem 0'}}>
        <div className={styles.section} style={{paddingTop: 0, paddingBottom: 0}}>
          <div style={{maxWidth: '48rem'}}>
            <p style={{fontSize: '0.75rem', color: '#ccfbf1', marginBottom: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase'}}>
              Next-Gen Tech Stack
            </p>
            <h1 style={{fontSize: '3rem', fontWeight: '700', color: '#ffffff', marginBottom: '1.5rem', lineHeight: '1.2'}}>
              Innovative Solutions for Tomorrow
            </h1>
            <p style={{fontSize: '1.125rem', color: '#ccfbf1', lineHeight: '1.6'}}>
              Empower your business with intelligent platforms designed to streamline operations and fuel growth and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className={styles.section} style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
        <div style={{display: 'flex', gap: '1rem', borderBottom: '1px solid #e5e7eb', paddingBottom: '1rem'}}>
          <button style={{padding: '0.5rem 1.5rem', backgroundColor: '#0f766e', color: '#ffffff', borderRadius: '0.375rem', fontSize: '0.875rem', fontWeight: '500'}}>
            All Products
          </button>
          <button style={{padding: '0.5rem 1.5rem', backgroundColor: 'transparent', color: '#4b5563', fontSize: '0.875rem', fontWeight: '500'}}>
            Software
          </button>
          <button style={{padding: '0.5rem 1.5rem', backgroundColor: 'transparent', color: '#4b5563', fontSize: '0.875rem', fontWeight: '500'}}>
            Hardware
          </button>
          <button style={{padding: '0.5rem 1.5rem', backgroundColor: 'transparent', color: '#4b5563', fontSize: '0.875rem', fontWeight: '500'}}>
            Security
          </button>
          <button style={{padding: '0.5rem 1.5rem', backgroundColor: 'transparent', color: '#4b5563', fontSize: '0.875rem', fontWeight: '500'}}>
            Cloud
          </button>
          <div style={{marginLeft: 'auto', display: 'flex', gap: '1rem', alignItems: 'center'}}>
            <span style={{fontSize: '0.875rem', color: '#6b7280'}}>Sort By:</span>
            <select style={{padding: '0.5rem', border: '1px solid #e5e7eb', borderRadius: '0.375rem', fontSize: '0.875rem'}}>
              <option>Latest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Popular</option>
            </select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className={styles.section} style={{paddingTop: '2rem'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem'}}>
          {products.map((product, index) => (
            <div key={index} className={styles.card} style={{padding: 0, overflow: 'hidden', position: 'relative'}}>
              {product.featured && (
                <div style={{position: 'absolute', top: '1rem', right: '1rem', backgroundColor: '#0f766e', color: '#ffffff', padding: '0.25rem 0.75rem', borderRadius: '0.25rem', fontSize: '0.75rem', fontWeight: '600', zIndex: 10}}>
                  FEATURED
                </div>
              )}
              <div style={{position: 'relative', height: '12rem', backgroundColor: '#111827'}}>
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  style={{objectFit: 'cover'}}
                />
              </div>
              <div style={{padding: '1.5rem'}}>
                <h3 style={{fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem'}}>{product.title}</h3>
                <p style={{color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem', lineHeight: '1.6'}}>
                  {product.description}
                </p>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <span style={{fontSize: '1.5rem', fontWeight: '700', color: '#0f766e'}}>{product.price}</span>
                  <Link href={`/products/${index}`}>
                    <button style={{padding: '0.5rem 1rem', backgroundColor: 'transparent', border: '1px solid #0f766e', color: '#0f766e', borderRadius: '0.375rem', fontSize: '0.875rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      Learn More
                      <span>→</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{backgroundColor: '#0f766e', padding: '4rem 0', marginTop: '4rem'}}>
        <div className={styles.section} style={{paddingTop: 0, paddingBottom: 0, textAlign: 'center'}}>
          <h2 style={{fontSize: '2.25rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem'}}>
            Ready to transform your vision?
          </h2>
          <p style={{fontSize: '1.125rem', color: '#ccfbf1', marginBottom: '2rem', maxWidth: '48rem', margin: '0 auto 2rem'}}>
            Our consultants are ready to help you build the perfect tech stack for your organization's unique requirements.
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
            <button style={{padding: '0.75rem 2rem', backgroundColor: '#ffffff', color: '#0f766e', borderRadius: '0.375rem', fontSize: '1rem', fontWeight: '600'}}>
              Book a Consultation
            </button>
            <button style={{padding: '0.75rem 2rem', backgroundColor: 'transparent', border: '2px solid #ffffff', color: '#ffffff', borderRadius: '0.375rem', fontSize: '1rem', fontWeight: '600'}}>
              Download Catalog
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.section}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '3rem', marginBottom: '2rem'}}>
            <div style={{maxWidth: '20rem'}}>
              <Link href="/" style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem'}}>
                <Image
                  src="/assets/Travler%20-%20Corporate%20Digital%20Solutions%20Logo.png"
                  alt="Travler"
                  width={32}
                  height={32}
                  style={{objectFit: 'contain'}}
                />
                <span style={{fontSize: '1.125rem', fontWeight: '600'}}>Travler</span>
              </Link>
              <p style={{fontSize: '0.875rem', color: '#4b5563', lineHeight: '1.6'}}>
                Leading the transition to a digitally empowered corporate world with intelligence, strategy, and execution.
              </p>
              <div style={{display: 'flex', gap: '0.75rem', marginTop: '1rem'}}>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{width: '2rem', height: '2rem', backgroundColor: '#f3f4f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <span style={{fontSize: '0.875rem'}}>𝕏</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{width: '2rem', height: '2rem', backgroundColor: '#f3f4f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <span style={{fontSize: '0.875rem'}}>in</span>
                </a>
                <a href="mailto:info@travler.com" style={{width: '2rem', height: '2rem', backgroundColor: '#f3f4f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <span style={{fontSize: '0.875rem'}}>@</span>
                </a>
              </div>
            </div>
            <div>
              <h4 style={{fontWeight: '700', marginBottom: '1rem', fontSize: '0.75rem', letterSpacing: '0.05em'}}>COMPANY</h4>
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: '#4b5563'}}>
                <Link href="/about">About Us</Link>
                <Link href="/careers">Careers</Link>
                <Link href="/leadership">Leadership</Link>
                <Link href="/sustainability">Sustainability</Link>
              </div>
            </div>
            <div>
              <h4 style={{fontWeight: '700', marginBottom: '1rem', fontSize: '0.75rem', letterSpacing: '0.05em'}}>SERVICES</h4>
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: '#4b5563'}}>
                <Link href="/consulting">Strategic Consulting</Link>
                <Link href="/infrastructure">Digital Solutions</Link>
                <Link href="/cloud">Asset Management</Link>
                <Link href="/engineering">Data Engineering</Link>
              </div>
            </div>
            <div style={{maxWidth: '20rem'}}>
              <h4 style={{fontWeight: '700', marginBottom: '1rem', fontSize: '0.75rem', letterSpacing: '0.05em'}}>NEWSLETTER</h4>
              <p style={{fontSize: '0.875rem', color: '#4b5563', marginBottom: '1rem'}}>
                Stay updated with our latest industry insights and updates.
              </p>
              <div style={{display: 'flex', gap: '0.5rem'}}>
                <input
                  type="email"
                  placeholder="Email address"
                  style={{flex: 1, padding: '0.5rem 0.75rem', fontSize: '0.875rem', border: '1px solid #d1d5db', borderRadius: '0.375rem'}}
                />
                <button className={styles.btnPrimary} style={{padding: '0.5rem 1rem'}}>Subscribe</button>
              </div>
            </div>
          </div>
          <div style={{paddingTop: '2rem', borderTop: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem', color: '#4b5563', flexWrap: 'wrap', gap: '1rem'}}>
            <p>© 2025 Travler Solutions, Inc. All rights reserved.</p>
            <div style={{display: 'flex', gap: '1.5rem'}}>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/cookies">Cookie Settings</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
