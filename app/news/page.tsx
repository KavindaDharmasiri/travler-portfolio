'use client';

import Image from "next/image";
import Link from "next/link";
import styles from '../styles.module.css';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export default function NewsPage() {
  const articles = [
    { category: 'COMMUNITY', date: 'OCT 18, 2025', title: 'Expanding Our Global Reach with New European Operations', excerpt: 'We are thrilled to announce the opening of our new regional headquarters in Berlin, marking a significant milestone in our international growth strategy.', image: '/assets/Modern%20glass%20corporate%20office%20interior%20with%20sunset%20lighting%20representing%20business%20growth.png' },
    { category: 'INNOVATION', date: 'OCT 10, 2025', title: 'Unveiling Echo 2.0: The Future of Collaborative Workflows', excerpt: 'Our engineering team has been hard at work reimagining the ecosystem. Discover the new features designed to boost productivity by 40%.', image: '/assets/Futuristic%20minimalist%20tablet%20showing%20the%20Travler%20Enterprise%20Suite%20v4.0%20dashboard.png' },
    { category: 'SUSTAINABILITY', date: 'OCT 01, 2025', title: 'Annual Sustainability Impact Report Released', excerpt: 'Our commitment to the planet has never been stronger. See how we reached our carbon neutrality goal two years ahead of schedule.', image: '/assets/Neural%20Analytics%20Hub%20-%203D%20network%20visualization%20of%20glowing%20data%20points.png' },
  ];

  const events = [
    { date: 'NOV 12', title: 'Global Partners Summit', location: 'Virtual Event • 10:00 AM EST' },
    { date: 'NOV 18', title: 'Q4 Product Demo', location: 'San Francisco • 2:00 PM PST' },
    { date: 'DEC 05', title: 'AI in Ethics Webinar', location: 'Virtual Event • 11:00 AM EST' },
  ];

  const topics = ['#Product', '#ESG', '#Leadership', '#AI', '#Blog', '#WorkCulture'];

  return (
    <div className={styles.page}>
      <SiteHeader />

      {/* Featured Hero */}
      <section style={{ position: 'relative', height: '26rem', overflow: 'hidden' }}>
        <Image src="/assets/Modern%20glass%20corporate%20office%20interior%20with%20sunset%20lighting%20representing%20business%20growth.png" alt="Featured" fill style={{ objectFit: 'cover', filter: 'brightness(0.4)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center' }}>
          <div className={styles.section} style={{ paddingTop: 0, paddingBottom: 0 }}>
            <div style={{ maxWidth: '48rem' }}>
              <div className={styles.badge} style={{ marginBottom: '1.25rem' }}>Featured Story</div>
              <h1 style={{ fontSize: 'clamp(1.625rem, 4vw, 2.75rem)', fontWeight: '800', color: '#fff', marginBottom: '1rem', lineHeight: '1.2' }}>
                Leading the Transition to Sustainable Workspace Architecture
              </h1>
              <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.75)', marginBottom: '1.75rem', lineHeight: '1.7', maxWidth: '38rem' }}>
                How our innovative SaaS in green building is reshaping the future of the modern corporate headquarters.
              </p>
              <button className={styles.btnPrimary} style={{ padding: '0.75rem 1.75rem' }}>Read Full Story</button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className={styles.section} style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {['All Updates', 'Product News', 'Press Releases', 'Corporate', 'Sustainability'].map((tab, i) => (
            <button key={tab} style={{ padding: '0.5rem 1.125rem', background: i === 0 ? 'var(--accent)' : 'var(--bg-card)', color: i === 0 ? '#fff' : 'var(--text-secondary)', borderRadius: '8px', fontSize: '0.875rem', fontWeight: '600', border: `1px solid ${i === 0 ? 'var(--accent)' : 'var(--border)'}`, cursor: 'pointer', transition: 'all 0.15s' }}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <section className={styles.section} style={{ paddingTop: '1.5rem' }}>
        <div className={styles.newsGrid}>
          <div>
            <h2 style={{ fontSize: '1.375rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '2rem' }}>Latest Insights</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {articles.map((article, i) => (
                <div key={i} className={styles.card} style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                  <div style={{ position: 'relative', width: '9rem', height: '7rem', flexShrink: 0, borderRadius: '8px', overflow: 'hidden', background: 'var(--bg-secondary)', minWidth: '7rem' }}>
                    <Image src={article.image} alt={article.title} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ flex: 1, minWidth: '180px' }}>
                    <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.625rem', fontSize: '0.75rem', flexWrap: 'wrap' }}>
                      <span style={{ color: 'var(--accent)', fontWeight: '700' }}>{article.category}</span>
                      <span style={{ color: 'var(--text-muted)' }}>•</span>
                      <span style={{ color: 'var(--text-muted)' }}>{article.date}</span>
                    </div>
                    <h3 style={{ fontSize: '0.9375rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--text-primary)', lineHeight: '1.5' }}>{article.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '0.625rem' }}>{article.excerpt}</p>
                    <Link href="#" style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: '600' }}>Read article →</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className={styles.card}>
              <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1.25rem' }}>📅 Upcoming Events</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {events.map((event, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start', paddingBottom: i < events.length - 1 ? '1rem' : 0, borderBottom: i < events.length - 1 ? '1px solid var(--border)' : 'none' }}>
                    <div style={{ textAlign: 'center', minWidth: '2.75rem', background: 'var(--accent)', borderRadius: '8px', padding: '0.4rem 0.25rem', flexShrink: 0 }}>
                      <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.85)', fontWeight: '700' }}>{event.date.split(' ')[0]}</div>
                      <div style={{ fontSize: '1.125rem', fontWeight: '800', color: '#fff', lineHeight: 1 }}>{event.date.split(' ')[1]}</div>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>{event.title}</h4>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{event.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.card} style={{ background: 'var(--accent)', border: 'none' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#fff', marginBottom: '0.625rem' }}>Newsletter</h3>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)', marginBottom: '1.125rem', lineHeight: '1.6' }}>Get the latest insights delivered to your inbox.</p>
              <input type="email" placeholder="your@email.com" style={{ width: '100%', padding: '0.625rem 0.875rem', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '8px', marginBottom: '0.625rem', fontSize: '0.875rem', color: '#fff', outline: 'none', boxSizing: 'border-box' }} />
              <button style={{ width: '100%', padding: '0.625rem', background: '#fff', color: 'var(--accent)', borderRadius: '8px', fontSize: '0.875rem', fontWeight: '700', border: 'none', cursor: 'pointer' }}>Subscribe Now</button>
            </div>

            <div className={styles.card}>
              <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1rem' }}>Trending Topics</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {topics.map(topic => (
                  <Link key={topic} href="#" style={{ padding: '0.35rem 0.875rem', background: 'var(--bg-secondary)', border: '1px solid var(--border)', color: 'var(--text-secondary)', borderRadius: '100px', fontSize: '0.8rem', fontWeight: '500', transition: 'all 0.15s' }}>
                    {topic}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
