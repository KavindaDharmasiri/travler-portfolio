'use client';

import Image from "next/image";
import Link from "next/link";
import styles from '../styles.module.css';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export default function CareersPage() {
  const benefits = [
    { icon: '🏥', title: 'Premium Health Cover', description: 'Full medical, dental and vision for you and your family.' },
    { icon: '💰', title: 'Unlimited PTO', description: 'Take the time you need to recharge and come back refreshed.' },
    { icon: '🏠', title: 'Remote-First Culture', description: 'Work from anywhere with a generous home office stipend.' },
    { icon: '📚', title: 'Learning Allowance', description: 'Continuous growth: Access to courses, books, and conferences.' },
  ];

  const jobs = [
    { department: 'Engineering', title: 'Senior Full Stack Engineer', location: 'San Francisco, CA', description: 'Building our next-generation SaaS platform using React, Node.js, and AWS.' },
    { department: 'Product', title: 'Product Designer', location: 'Remote', description: 'Craft delightful user experiences that make complex workflows feel effortless.' },
    { department: 'Product', title: 'Technical Product Manager', location: 'New York, NY', description: 'Define product strategy and roadmap for our enterprise platform.' },
    { department: 'Engineering', title: 'DevOps Engineer', location: 'Remote', description: 'Build and maintain our CI/CD pipelines and cloud infrastructure.' },
  ];

  return (
    <div className={styles.page}>
      <SiteHeader />

      {/* Hero */}
      <section className={styles.section} style={{ paddingBottom: '3rem' }}>
        <div className={styles.heroGrid}>
          <div>
            <div className={styles.badge} style={{ marginBottom: '1.25rem' }}>Career Opportunities</div>
            <h1 className={styles.heading1}>Shape the Future With Us</h1>
            <p className={styles.textGray}>A technology-driven business transformation leader solving the world&apos;s most complex technical challenges through innovation and inclusivity.</p>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
              <button className={styles.btnPrimary} style={{ padding: '0.75rem 1.75rem' }}>View Openings</button>
              <button className={styles.btnSecondary} style={{ padding: '0.75rem 1.75rem' }}>Our Story</button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
              <div style={{ display: 'flex' }}>
                {['var(--accent)', '#8b5cf6', '#06b6d4'].map((c, i) => (
                  <div key={i} style={{ width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: c, border: '2px solid var(--bg)', marginLeft: i > 0 ? '-0.5rem' : 0 }} />
                ))}
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Join <strong style={{ color: 'var(--text-primary)' }}>500+</strong> incredible colleagues</p>
            </div>
          </div>
          <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: 'var(--shadow)', position: 'relative' }}>
            <div style={{ position: 'relative', height: '20rem' }}>
              <Image src="/assets/Modern%20glass%20corporate%20office%20interior%20with%20sunset%20lighting%20representing%20business%20growth.png" alt="Team" fill style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', background: 'var(--bg-card)', backdropFilter: 'blur(12px)', borderRadius: '10px', border: '1px solid var(--border)', padding: '0.875rem 1.125rem' }}>
              <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>Employee Satisfaction</p>
              <p style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--accent)' }}>4.8 / 5.0 ⭐</p>
            </div>
          </div>
        </div>
      </section>

      {/* Life at Travler */}
      <section className={styles.sectionAlt}>
        <div className={styles.section} style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className={styles.badge} style={{ marginBottom: '1rem' }}>Culture</div>
            <h2 className={styles.heading2}>Life at Travler</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '40rem', margin: '0 auto' }}>We thrive on an environment that fosters creativity, collaboration, and continuous learning.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              { img: '/assets/Futuristic%20minimalist%20tablet%20showing%20the%20Travler%20Enterprise%20Suite%20v4.0%20dashboard.png', title: 'Innovation First', desc: 'Pioneering ideas drive our organization forward.' },
              { img: '/assets/Modern%20glass%20corporate%20office%20interior%20with%20sunset%20lighting%20representing%20business%20growth.png', title: 'Global Collaboration', desc: 'Work with talented people across continents.' },
              { img: '/assets/Neural%20Analytics%20Hub%20-%203D%20network%20visualization%20of%20glowing%20data%20points.png', title: 'Work-Life Harmony', desc: 'Balance that lets you thrive in all areas.' },
            ].map(item => (
              <div key={item.title} style={{ position: 'relative', height: '16rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border)' }}>
                <Image src={item.img} alt={item.title} fill style={{ objectFit: 'cover', filter: 'brightness(0.65)' }} />
                <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', right: '1.25rem' }}>
                  <h3 style={{ color: '#fff', fontSize: '1rem', fontWeight: '700', marginBottom: '0.25rem' }}>{item.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.875rem' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className={styles.section}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className={styles.badge} style={{ marginBottom: '1rem' }}>Perks</div>
          <h2 className={styles.heading2}>Employee Benefits</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {benefits.map(b => (
            <div key={b.title} className={styles.card} style={{ display: 'flex', gap: '1.125rem', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '1.75rem', flexShrink: 0 }}>{b.icon}</div>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.35rem', color: 'var(--text-primary)' }}>{b.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: '1.6' }}>{b.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className={styles.sectionAlt}>
        <div className={styles.section} style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem' }}>
            <div>
              <div className={styles.badge} style={{ marginBottom: '1rem' }}>Now Hiring</div>
              <h2 className={styles.heading2}>Open Positions</h2>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <input type="text" placeholder="Search roles..." style={{ padding: '0.5rem 0.875rem', background: 'var(--input-bg)', border: '1px solid var(--input-border)', borderRadius: '8px', fontSize: '0.875rem', color: 'var(--input-text)', outline: 'none' }} />
              <select style={{ padding: '0.5rem 0.875rem', background: 'var(--input-bg)', border: '1px solid var(--input-border)', borderRadius: '8px', fontSize: '0.875rem', color: 'var(--input-text)', outline: 'none' }}>
                <option>All Departments</option>
                <option>Engineering</option>
                <option>Product</option>
              </select>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {jobs.map((job, i) => (
              <div key={i} className={styles.card} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.25rem' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.625rem', flexWrap: 'wrap' }}>
                    <span style={{ padding: '0.2rem 0.75rem', background: 'var(--badge-bg)', border: '1px solid var(--badge-border)', color: 'var(--badge-text)', fontSize: '0.7rem', fontWeight: '700', borderRadius: '100px' }}>{job.department}</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>📍 {job.location}</span>
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.35rem', color: 'var(--text-primary)' }}>{job.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{job.description}</p>
                </div>
                <button className={styles.btnPrimary} style={{ padding: '0.5rem 1.375rem', flexShrink: 0 }}>Apply Now</button>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.625rem' }}>Don&apos;t see a role that fits? We&apos;re always looking for great talent.</p>
            <Link href="/contact" style={{ color: 'var(--accent)', fontSize: '0.875rem', fontWeight: '600' }}>Send a general application →</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
