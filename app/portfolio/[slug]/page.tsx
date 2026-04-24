'use client';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';
import styles from '../../styles.module.css';
import SiteHeader from '../../components/SiteHeader';
import SiteFooter from '../../components/SiteFooter';

const projects: Record<string, {
  title: string;
  description: string;
  tech: string;
  highlights: string[];
  images: { src: string; label: string; caption: string }[];
}> = {
  purely: {
    title: 'Purely',
    description: 'Purely is a Shopify storefront built for a natural skincare brand that prioritizes simplicity, trust, and clean aesthetics. The design uses soft neutral tones, generous whitespace, and botanical-inspired typography to reflect the brand\'s commitment to purity and wellness. Every page was crafted to reduce friction in the buying journey — from discovery to checkout.',
    tech: 'Shopify · Liquid · Custom CSS',
    highlights: [
      'Custom Liquid theme built from scratch with brand-aligned design tokens',
      'Optimized product detail page with ingredient breakdowns and trust badges',
      'Mobile-first layout with smooth scroll and sticky add-to-cart bar',
      'Integrated contact form with Shopify native email routing',
    ],
    images: [
      { src: '/assets/shopify/purely/home.png', label: 'Home', caption: 'Hero section with brand story, featured collections, and a soft call-to-action driving users toward bestsellers.' },
      { src: '/assets/shopify/purely/catelog.PNG', label: 'Catalog', caption: 'Clean product grid with filter options by skin type and concern, keeping navigation intuitive and clutter-free.' },
      { src: '/assets/shopify/purely/product-details.png', label: 'Product Details', caption: 'Detailed product page featuring ingredient lists, usage instructions, customer reviews, and a persistent add-to-cart button.' },
      { src: '/assets/shopify/purely/contact.PNG', label: 'Contact', caption: 'Minimal contact page with a simple inquiry form and brand support messaging to build customer confidence.' },
    ],
  },
  technova: {
    title: 'TechNova',
    description: 'TechNova is a high-energy Shopify store designed for a modern electronics and gadgets retailer. The dark-mode UI with vibrant accent colors creates an immersive, premium feel that resonates with tech-savvy shoppers. The theme emphasizes product specs, comparison features, and fast navigation to support high-consideration purchases.',
    tech: 'Shopify · Liquid · Tailwind CSS',
    highlights: [
      'Dark-mode Shopify theme with custom color system and neon accent palette',
      'Spec-focused product cards with quick-view and comparison support',
      'Tailwind CSS utility classes integrated into Liquid templates for rapid styling',
      'Structured contact and support page with department routing',
    ],
    images: [
      { src: '/assets/shopify/technova/home.png', label: 'Home', caption: 'Bold hero banner with featured product spotlight, promotional banners, and category quick-links for fast navigation.' },
      { src: '/assets/shopify/technova/catelog.png', label: 'Catalog', caption: 'Product listing page with sidebar filters for brand, price range, and specs — designed for power users who know what they want.' },
      { src: '/assets/shopify/technova/contact.png', label: 'Contact', caption: 'Support-focused contact page with department selection, response time expectations, and social channel links.' },
    ],
  },
  velora: {
    title: 'Velora',
    description: 'Velora is a luxury fashion Shopify store built to deliver a high-end retail experience online. The design draws inspiration from editorial fashion — refined typography, full-bleed imagery, and a restrained color palette of black, white, and gold. The full purchase flow from catalog to checkout was custom-designed to feel seamless and premium at every step.',
    tech: 'Shopify · Liquid · SCSS',
    highlights: [
      'Editorial-style homepage with lookbook-inspired layout and full-bleed hero',
      'Custom SCSS architecture with design tokens for consistent brand expression',
      'Fully designed cart drawer with upsell suggestions and quantity controls',
      'Multi-step checkout UI with progress indicator and order summary sidebar',
      'Product description page with size guide modal and styled review section',
    ],
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
        <Link href="/#portfolio" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#6b7280', marginBottom: '2rem' }}>
          ← Back to Portfolio
        </Link>

        <div style={{ marginBottom: '2.5rem' }}>
          <span style={{ fontSize: '0.75rem', color: '#0f766e', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Shopify Project</span>
          <h1 className={styles.heading1} style={{ marginTop: '0.5rem', marginBottom: '0.75rem' }}>{project.title}</h1>
          <p style={{ color: '#4b5563', maxWidth: '52rem', lineHeight: '1.8', marginBottom: '1.5rem', fontSize: '1rem' }}>{project.description}</p>
          <p style={{ fontSize: '0.8rem', color: '#9ca3af', marginBottom: '1.5rem' }}>{project.tech}</p>
          <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '0.75rem', padding: '1.25rem 1.5rem' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: '700', color: '#0f766e', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>Key Highlights</p>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {project.highlights.map((h, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.875rem', color: '#374151' }}>
                  <span style={{ color: '#0f766e', fontWeight: '700', marginTop: '1px' }}>✓</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 480px), 1fr))', gap: '2rem' }}>
          {project.images.map((img) => (
            <div key={img.src} style={{ borderRadius: '0.75rem', overflow: 'hidden', border: '1px solid #e5e7eb', background: '#f9fafb' }}>
              <Image src={img.src} alt={img.label} width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div style={{ padding: '0.875rem 1rem' }}>
                <p style={{ fontSize: '0.875rem', fontWeight: '600', color: '#111827', marginBottom: '0.25rem' }}>{img.label}</p>
                <p style={{ fontSize: '0.8rem', color: '#6b7280', lineHeight: '1.6' }}>{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
