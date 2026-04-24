'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles.module.css';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

type Item = {
  title: string;
  description: string;
  badge: string;
  category: string;
  image: string;
  href: string;
  meta: string;
};

const allItems: Item[] = [
  {
    title: 'Vision Analytics Pro',
    description: 'Advanced data visualization and predictive analytics for real-time business intelligence.',
    badge: 'FEATURED',
    category: 'Software',
    image: '/assets/Futuristic%20minimalist%20tablet%20showing%20the%20Travler%20Enterprise%20Suite%20v4.0%20dashboard.png',
    href: '/products/0',
    meta: '$299/mo',
  },
  {
    title: 'Sentinel Shield AI',
    description: 'Enterprise-grade cybersecurity powered by advanced threat detection and response capabilities.',
    badge: 'FEATURED',
    category: 'Security',
    image: '/assets/Cloud%20Connect%20Pro%20-%20Modern%20data%20center%20servers%20with%20blue%20neon%20lights.png',
    href: '/products/1',
    meta: '$450/mo',
  },
  {
    title: 'Nexus Node X1',
    description: 'High-performance edge computing nodes for decentralized data processing and analytics.',
    badge: 'FEATURED',
    category: 'Hardware',
    image: '/assets/Neural%20Analytics%20Hub%20-%203D%20network%20visualization%20of%20glowing%20data%20points.png',
    href: '/products/2',
    meta: '$1,200',
  },
  {
    title: 'SkyFlow Infrastructure',
    description: 'Scalable cloud infrastructure with automated scaling for high-traffic web applications.',
    badge: '',
    category: 'Cloud',
    image: '/assets/Cloud%20Connect%20Pro%20-%20Modern%20data%20center%20servers%20with%20blue%20neon%20lights.png',
    href: '/products/3',
    meta: '$89/mo',
  },
  {
    title: 'VaultLock Key Manager',
    description: 'Enterprise-grade encryption key management for sensitive financial and healthcare data compliance.',
    badge: 'FEATURED',
    category: 'Security',
    image: '/assets/Cloud%20Connect%20Pro%20-%20Modern%20data%20center%20servers%20with%20blue%20neon%20lights.png',
    href: '/products/4',
    meta: '$199/mo',
  },
  {
    title: 'DevOps Master Console',
    description: 'Comprehensive CI/CD platform for Kubernetes, Docker operations, and automated testing workflows.',
    badge: 'FEATURED',
    category: 'Software',
    image: '/assets/Futuristic%20minimalist%20tablet%20showing%20the%20Travler%20Enterprise%20Suite%20v4.0%20dashboard.png',
    href: '/products/5',
    meta: '$599/mo',
  },
  {
    title: 'Purely',
    description: 'Natural skincare brand Shopify storefront with a clean, minimal aesthetic and seamless shopping experience.',
    badge: 'SHOPIFY',
    category: 'Shopify',
    image: '/assets/shopify/purely/home.png',
    href: '/portfolio/purely',
    meta: 'View Project',
  },
  {
    title: 'TechNova',
    description: 'Bold, tech-forward Shopify store for electronics and gadget retailers with a dark, modern UI.',
    badge: 'SHOPIFY',
    category: 'Shopify',
    image: '/assets/shopify/technova/home.png',
    href: '/portfolio/technova',
    meta: 'View Project',
  },
  {
    title: 'Velora',
    description: 'Premium fashion Shopify store with elegant typography, full cart flow, and a polished checkout experience.',
    badge: 'SHOPIFY',
    category: 'Shopify',
    image: '/assets/shopify/velora/home.png',
    href: '/portfolio/velora',
    meta: 'View Project',
  },
];

const tabs = ['All', 'Software', 'Hardware', 'Security', 'Cloud', 'Shopify'];

export default function ProductsPage() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? allItems : allItems.filter((i) => i.category === active);

  return (
    <div className={styles.page}>
      <SiteHeader />

      <section style={{background: 'linear-gradient(135deg, #0f766e 0%, #134e4a 100%)', padding: '4rem 0'}}>
        <div className={styles.section} style={{paddingTop: 0, paddingBottom: 0}}>
          <div style={{maxWidth: '48rem'}}>
            <p style={{fontSize: '0.75rem', color: '#ccfbf1', marginBottom: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase'}}>Next-Gen Tech Stack</p>
            <h1 style={{fontSize: 'clamp(1.75rem, 5vw, 3rem)', fontWeight: '700', color: '#ffffff', marginBottom: '1.5rem', lineHeight: '1.2'}}>Innovative Solutions for Tomorrow</h1>
            <p style={{fontSize: '1.125rem', color: '#ccfbf1', lineHeight: '1.6'}}>Empower your business with intelligent platforms designed to streamline operations and fuel growth and innovation.</p>
          </div>
        </div>
      </section>

      <section className={styles.section} style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
        <div style={{display: 'flex', gap: '0.5rem', borderBottom: '1px solid #e5e7eb', paddingBottom: '1rem', flexWrap: 'wrap'}}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              style={{
                padding: '0.5rem 1.25rem',
                backgroundColor: active === tab ? '#0f766e' : 'transparent',
                color: active === tab ? '#ffffff' : '#4b5563',
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      <section className={styles.section} style={{paddingTop: '1rem'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem'}}>
          {filtered.map((item) => (
            <div key={item.title} className={styles.card} style={{padding: 0, overflow: 'hidden', position: 'relative'}}>
              {item.badge && (
                <div style={{
                  position: 'absolute', top: '1rem',
                  right: item.badge === 'SHOPIFY' ? undefined : '1rem',
                  left: item.badge === 'SHOPIFY' ? '1rem' : undefined,
                  backgroundColor: '#0f766e', color: '#ffffff',
                  padding: '0.25rem 0.75rem', borderRadius: '0.25rem',
                  fontSize: '0.7rem', fontWeight: '600', zIndex: 10,
                }}>
                  {item.badge}
                </div>
              )}
              <div style={{position: 'relative', height: '12rem', backgroundColor: '#111827'}}>
                <Image src={item.image} alt={item.title} fill style={{objectFit: 'cover'}} />
              </div>
              <div style={{padding: '1.5rem'}}>
                <span style={{fontSize: '0.7rem', color: '#9ca3af', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em'}}>{item.category}</span>
                <h3 style={{fontSize: '1.25rem', fontWeight: '700', margin: '0.35rem 0 0.5rem'}}>{item.title}</h3>
                <p style={{color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem', lineHeight: '1.6'}}>{item.description}</p>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <span style={{fontSize: item.category === 'Shopify' ? '0.875rem' : '1.5rem', fontWeight: '700', color: '#0f766e'}}>{item.meta}</span>
                  <Link href={item.href}>
                    <button style={{padding: '0.5rem 1rem', backgroundColor: 'transparent', border: '1px solid #0f766e', color: '#0f766e', borderRadius: '0.375rem', fontSize: '0.875rem', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer'}}>
                      {item.category === 'Shopify' ? 'View Project' : 'Learn More'} <span>→</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{backgroundColor: '#0f766e', padding: '4rem 0', marginTop: '4rem'}}>
        <div className={styles.section} style={{paddingTop: 0, paddingBottom: 0, textAlign: 'center'}}>
          <h2 style={{fontSize: '2.25rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem'}}>Ready to transform your vision?</h2>
          <p style={{fontSize: '1.125rem', color: '#ccfbf1', maxWidth: '48rem', margin: '0 auto 2rem'}}>Our consultants are ready to help you build the perfect tech stack for your organization&apos;s unique requirements.</p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
            <button style={{padding: '0.75rem 2rem', backgroundColor: '#ffffff', color: '#0f766e', borderRadius: '0.375rem', fontSize: '1rem', fontWeight: '600'}}>Book a Consultation</button>
            <button style={{padding: '0.75rem 2rem', backgroundColor: 'transparent', border: '2px solid #ffffff', color: '#ffffff', borderRadius: '0.375rem', fontSize: '1rem', fontWeight: '600'}}>Download Catalog</button>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
