'use client';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';
import styles from '../../styles.module.css';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

const projects: Record<string, { title: string; description: string; tech: string; highlights: string[]; images: { src: string; label: string; caption: string }[] }> = {
  purely: {
    title: 'Purely', description: 'Purely is a Shopify storefront built for a natural skincare brand that prioritizes simplicity, trust, and clean aesthetics. The design uses soft neutral tones, generous whitespace, and botanical-inspired typography to reflect the brand\'s commitment to purity and wellness. Every page was crafted to reduce friction in the buying journey — from discovery to checkout.', tech: 'Shopify · Liquid · Custom CSS',
    highlights: ['Custom Liquid theme built from scratch with brand-aligned design tokens', 'Optimized product detail page with ingredient breakdowns and trust badges', 'Mobile-first layout with smooth scroll and sticky add-to-cart bar', 'Integrated contact form with Shopify native email routing'],
    images: [
      { src: '/assets/shopify/purely/home.png', label: 'Home', caption: 'Hero section with brand story, featured collections, and a soft call-to-action driving users toward bestsellers.' },
      { src: '/assets/shopify/purely/catelog.PNG', label: 'Catalog', caption: 'Clean product grid with filter options by skin type and concern, keeping navigation intuitive and clutter-free.' },
      { src: '/assets/shopify/purely/product-details.png', label: 'Product Details', caption: 'Detailed product page featuring ingredient lists, usage instructions, customer reviews, and a persistent add-to-cart button.' },
      { src: '/assets/shopify/purely/contact.PNG', label: 'Contact', caption: 'Minimal contact page with a simple inquiry form and brand support messaging to build customer confidence.' },
    ],
  },
  technova: {
    title: 'TechNova', description: 'TechNova is a high-energy Shopify store designed for a modern electronics and gadgets retailer. The dark-mode UI with vibrant accent colors creates an immersive, premium feel that resonates with tech-savvy shoppers. The theme emphasizes product specs, comparison features, and fast navigation to support high-consideration purchases.', tech: 'Shopify · Liquid · Tailwind CSS',
    highlights: ['Dark-mode Shopify theme with custom color system and neon accent palette', 'Spec-focused product cards with quick-view and comparison support', 'Tailwind CSS utility classes integrated into Liquid templates for rapid styling', 'Structured contact and support page with department routing'],
    images: [
      { src: '/assets/shopify/technova/home.png', label: 'Home', caption: 'Bold hero banner with featured product spotlight, promotional banners, and category quick-links for fast navigation.' },
      { src: '/assets/shopify/technova/catelog.png', label: 'Catalog', caption: 'Product listing page with sidebar filters for brand, price range, and specs — designed for power users who know what they want.' },
      { src: '/assets/shopify/technova/contact.png', label: 'Contact', caption: 'Support-focused contact page with department selection, response time expectations, and social channel links.' },
    ],
  },
  velora: {
    title: 'Velora', description: 'Velora is a luxury fashion Shopify store built to deliver a high-end retail experience online. The design draws inspiration from editorial fashion — refined typography, full-bleed imagery, and a restrained color palette of black, white, and gold. The full purchase flow from catalog to checkout was custom-designed to feel seamless and premium at every step.', tech: 'Shopify · Liquid · SCSS',
    highlights: ['Editorial-style homepage with lookbook-inspired layout and full-bleed hero', 'Custom SCSS architecture with design tokens for consistent brand expression', 'Fully designed cart drawer with upsell suggestions and quantity controls', 'Multi-step checkout UI with progress indicator and order summary sidebar', 'Product description page with size guide modal and styled review section'],
    images: [
      { src: '/assets/shopify/velora/home.png', label: 'Home', caption: 'Luxury homepage with editorial hero, featured collections, and a curated new arrivals strip styled for high-fashion appeal.' },
      { src: '/assets/shopify/velora/catelog.png', label: 'Catalog', caption: 'Refined product grid with hover effects, wishlist icons, and filter options for category, size, and color.' },
      { src: '/assets/shopify/velora/product-desc.png', label: 'Product', caption: 'Detailed product page with styled photography, size selector, material details, and a sticky purchase panel.' },
      { src: '/assets/shopify/velora/cart.PNG', label: 'Cart', caption: 'Slide-out cart drawer showing item thumbnails, quantity controls, subtotal, and a recommended products row.' },
      { src: '/assets/shopify/velora/checkouts.png', label: 'Checkout', caption: 'Custom multi-step checkout with shipping, payment, and review steps — designed to minimize drop-off and build purchase confidence.' },
      { src: '/assets/shopify/velora/contact.PNG', label: 'Contact', caption: 'Elegant contact page with a styled inquiry form, store location details, and customer service hours.' },
    ],
  },
};

export default function PortfolioDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projects[slug];
  if (!project) notFound();

  return (
    <div className={styles.page}>
      <SiteHeader />

      <section className={styles.section}>
        <Link href="/#portfolio" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '2rem', transition: 'color 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
        >← Back to Portfolio</Link>

        <div style={{ marginBottom: '3rem' }}>
          <div className={styles.badge} style={{ marginBottom: '1rem' }}>Shopify Project</div>
          <h1 style={{ fontSize: 'clamp(1.875rem, 5vw, 3rem)', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: '1.15', letterSpacing: '-0.02em' }}>{project.title}</h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '52rem', lineHeight: '1.8', marginBottom: '1.25rem' }}>{project.description}</p>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '2rem', letterSpacing: '0.04em' }}>{project.tech}</p>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderLeft: '3px solid var(--accent)', borderRadius: '10px', padding: '1.5rem 1.75rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>Key Highlights</p>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.625rem' }}>
              {project.highlights.map((h, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--accent)', fontWeight: '700', flexShrink: 0 }}>✓</span>{h}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))', gap: '1.5rem' }}>
          {project.images.map(img => (
            <div key={img.src} className={styles.card} style={{ padding: 0, overflow: 'hidden' }}>
              <Image src={img.src} alt={img.label} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ padding: '1rem 1.25rem' }}>
                <p style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{img.label}</p>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
