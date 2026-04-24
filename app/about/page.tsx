'use client';

import Image from "next/image";
import Link from "next/link";
import styles from '../styles.module.css';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export default function AboutPage() {
  const milestones = [
    { year: '2020', title: 'Foundation', description: 'Launched our first AI-powered analytics platform for enterprise clients.' },
    { year: '2018', title: 'Series A Funding', description: 'Raised $50M to expand our global footprint and product offerings.' },
    { year: '2016', title: 'Global Expansion', description: 'Opened offices in Europe, Tokyo, and Singapore to serve international markets.' },
    { year: '2013', title: 'Sustainability Award', description: 'Recognized for our efforts in climate tech and sustainable cloud infrastructure.' },
  ];

  const team = [
    { name: 'Jonathan Vance', role: 'Chief Executive Officer', bio: 'Leading the AI revolution with 20 years of experience in enterprise technology and digital transformation.', image: '/assets/Modern%20glass%20corporate%20office%20interior%20with%20sunset%20lighting%20representing%20business%20growth.png' },
    { name: 'Dr. Renu Rodriguez', role: 'Chief Technology Officer', bio: 'PhD in Computer Science from MIT. Previously led engineering teams at major tech companies.', image: '/assets/Modern%20glass%20corporate%20office%20interior%20with%20sunset%20lighting%20representing%20business%20growth.png' },
    { name: 'Marcus Chen', role: 'Chief Operating Officer', bio: 'Operational excellence expert with background in scaling startups to Fortune 500 companies.', image: '/assets/Modern%20glass%20corporate%20office%20interior%20with%20sunset%20lighting%20representing%20business%20growth.png' },
  ];

  return (
    <div className={styles.page}>
      <SiteHeader />

      {/* Hero */}
      <section style={{ position: 'relative', height: '26rem', overflow: 'hidden' }}>
        <Image src="/assets/Modern%20glass%20corporate%20office%20interior%20with%20sunset%20lighting%20representing%20business%20growth.png" alt="Office" fill style={{ objectFit: 'cover', filter: 'brightness(0.45)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', maxWidth: '48rem', padding: '0 1.5rem' }}>
            <div className={styles.badge} style={{ marginBottom: '1.25rem' }}>Our Story</div>
            <h1 style={{ fontSize: 'clamp(1.875rem, 5vw, 3rem)', fontWeight: '800', color: '#fff', marginBottom: '1rem', lineHeight: '1.2' }}>
              Innovating the Future Since 2010
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.7' }}>
              A technology-driven business transformation leader helping organizations succeed by accelerating digital innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.section}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className={styles.badge} style={{ marginBottom: '1rem' }}>Our Purpose</div>
          <h2 className={styles.heading2}>Mission &amp; Vision</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '44rem', margin: '0 auto', lineHeight: '1.8' }}>
            At Travler, our mission is to empower businesses with cutting-edge technology solutions that drive innovation and growth.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {[
            { icon: '🎯', title: 'Our Mission', text: 'To empower organizations with innovative technology solutions that transform operations, enhance efficiency, and drive sustainable growth.' },
            { icon: '👁️', title: 'Our Vision', text: 'To be the global leader in digital transformation, recognized for excellence in innovation, customer success, and sustainable business practices.' },
          ].map(item => (
            <div key={item.title} className={styles.card}>
              <div style={{ width: '3rem', height: '3rem', background: 'var(--accent)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', fontSize: '1.375rem' }}>{item.icon}</div>
              <h3 className={styles.heading3}>{item.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '0.9375rem' }}>{item.text}</p>
            </div>
          ))}
        </div>
        <div style={{ position: 'relative', height: '20rem', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border)' }}>
          <Image src="/assets/Modern%20glass%20corporate%20office%20interior%20with%20sunset%20lighting%20representing%20business%20growth.png" alt="Team" fill style={{ objectFit: 'cover' }} />
        </div>
      </section>

      {/* Milestones */}
      <section className={styles.sectionAlt}>
        <div className={styles.section} style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className={styles.badge} style={{ marginBottom: '1rem' }}>Our Journey</div>
            <h2 className={styles.heading2}>Milestones of Innovation</h2>
          </div>
          <div style={{ maxWidth: '48rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {milestones.map((m, i) => (
              <div key={i} className={styles.milestoneItem}>
                <div style={{ minWidth: '4.5rem', textAlign: 'center', background: 'var(--accent)', borderRadius: '8px', padding: '0.625rem 0.5rem', flexShrink: 0 }}>
                  <span style={{ fontSize: '1rem', fontWeight: '800', color: '#fff' }}>{m.year}</span>
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.35rem', color: 'var(--text-primary)' }}>{m.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.7' }}>{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className={styles.section}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className={styles.badge} style={{ marginBottom: '1rem' }}>The Team</div>
          <h2 className={styles.heading2}>Leadership Team</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '40rem', margin: '0 auto' }}>Our leaders bring decades of experience from diverse backgrounds to drive innovation and excellence.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {team.map((member, i) => (
            <div key={i} className={styles.card}>
              <div style={{ position: 'relative', height: '13rem', borderRadius: '10px', overflow: 'hidden', marginBottom: '1.25rem', background: 'var(--bg-secondary)' }}>
                <Image src={member.image} alt={member.name} fill style={{ objectFit: 'cover', filter: 'grayscale(20%)' }} />
              </div>
              <h3 style={{ fontSize: '1.0625rem', fontWeight: '700', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>{member.name}</h3>
              <p style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.75rem' }}>{member.role}</p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.6' }}>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.section} style={{ paddingTop: '1rem' }}>
        <div style={{ padding: '3rem 2rem', background: 'var(--bg-card)', borderRadius: '16px', border: '1px solid var(--border)', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '0.875rem' }}>Want to be part of our story?</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '36rem', margin: '0 auto 2rem', lineHeight: '1.7' }}>We are always looking for visionary talent to join our growing team of innovators.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/careers"><button className={styles.btnPrimary} style={{ padding: '0.75rem 2rem' }}>View Careers</button></Link>
            <Link href="/contact"><button className={styles.btnSecondary} style={{ padding: '0.75rem 2rem' }}>Contact Us</button></Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
