'use client';

import Image from "next/image";
import Link from "next/link";
import styles from '../styles.module.css';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export default function AboutPage() {
  const milestones = [
    { year: "2020", title: "Foundation", description: "Launched our first AI-powered analytics platform for enterprise clients." },
    { year: "2018", title: "Series A Funding", description: "Raised $50M to expand our global footprint and product offerings." },
    { year: "2016", title: "Global Expansion", description: "Opened offices in Europe, Tokyo, and Singapore to serve international markets." },
    { year: "2013", title: "Sustainability Award", description: "Recognized for our efforts in climate tech and sustainable cloud infrastructure." }
  ];

  const team = [
    {
      name: "Jonathan Vance",
      role: "Chief Executive Officer",
      bio: "Leading the AI revolution with 20 years of experience in enterprise technology and digital transformation.",
      image: "/assets/Modern%20glass%20corporate%20office%20interior%20with%20sunset%20lighting%20representing%20business%20growth.png"
    },
    {
      name: "Dr. Renu Rodriguez",
      role: "Chief Technology Officer",
      bio: "PhD in Computer Science from MIT. Previously led engineering teams at major tech companies.",
      image: "/assets/Modern%20glass%20corporate%20office%20interior%20with%20sunset%20lighting%20representing%20business%20growth.png"
    },
    {
      name: "Marcus Chen",
      role: "Chief Operating Officer",
      bio: "Operational excellence expert with background in scaling startups to Fortune 500 companies.",
      image: "/assets/Modern%20glass%20corporate%20office%20interior%20with%20sunset%20lighting%20representing%20business%20growth.png"
    }
  ];

  return (
    <div className={styles.page}>
      <SiteHeader />

      {/* Hero */}
      <section style={{position: 'relative', height: '24rem', overflow: 'hidden'}}>
        <Image
          src="/assets/Modern%20glass%20corporate%20office%20interior%20with%20sunset%20lighting%20representing%20business%20growth.png"
          alt="Office"
          fill
          style={{objectFit: 'cover', filter: 'brightness(0.7)'}}
        />
        <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <div style={{textAlign: 'center', color: '#ffffff', maxWidth: '48rem', padding: '0 1.5rem'}}>
            <h1 style={{fontSize: 'clamp(1.75rem, 5vw, 3rem)', fontWeight: '700', marginBottom: '1rem'}}>
              Innovating the Future since 2010
            </h1>
            <p style={{fontSize: '1.125rem', opacity: 0.9}}>
              A technology-driven business transformation leader helping organizations succeed by accelerating digital innovation and excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.section}>
        <h2 className={styles.heading2} style={{textAlign: 'center', marginBottom: '3rem'}}>Our Mission & Vision</h2>
        <p style={{textAlign: 'center', color: '#4b5563', maxWidth: '48rem', margin: '0 auto 3rem', lineHeight: '1.8'}}>
          At Travler, our mission is to empower businesses with cutting-edge technology solutions that drive innovation and growth. Our vision is to become the world's most trusted partner in digital transformation.
        </p>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '3rem'}}>
          <div>
            <div style={{width: '3rem', height: '3rem', backgroundColor: '#ccfbf1', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem'}}>
              <span style={{fontSize: '1.5rem'}}>🎯</span>
            </div>
            <h3 style={{fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem'}}>Our Mission</h3>
            <p style={{color: '#4b5563', lineHeight: '1.6'}}>
              To empower organizations with innovative technology solutions that transform operations, enhance efficiency, and drive sustainable growth.
            </p>
          </div>
          <div>
            <div style={{width: '3rem', height: '3rem', backgroundColor: '#ccfbf1', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem'}}>
              <span style={{fontSize: '1.5rem'}}>👁️</span>
            </div>
            <h3 style={{fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem'}}>Our Vision</h3>
            <p style={{color: '#4b5563', lineHeight: '1.6'}}>
              To be the global leader in digital transformation, recognized for excellence in innovation, customer success, and sustainable business practices.
            </p>
          </div>
        </div>
        <div style={{position: 'relative', height: '20rem', borderRadius: '0.5rem', overflow: 'hidden'}}>
          <Image
            src="/assets/Modern%20glass%20corporate%20office%20interior%20with%20sunset%20lighting%20representing%20business%20growth.png"
            alt="Team collaboration"
            fill
            style={{objectFit: 'cover'}}
          />
        </div>
      </section>

      {/* Milestones */}
      <section style={{backgroundColor: '#f9fafb', padding: '4rem 0'}}>
        <div className={styles.section} style={{paddingTop: 0, paddingBottom: 0}}>
          <h2 className={styles.heading2} style={{textAlign: 'center'}}>Milestones of Innovation</h2>
          <div style={{maxWidth: '48rem', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0'}}>
            {milestones.map((milestone, index) => (
              <div key={index} style={{display: 'flex', gap: '1.5rem', paddingBottom: '2rem', marginBottom: '2rem', borderBottom: index < milestones.length - 1 ? '1px solid #e5e7eb' : 'none', alignItems: 'flex-start'}}>
                <div style={{minWidth: '5rem', textAlign: 'center', backgroundColor: '#0f766e', color: '#ffffff', borderRadius: '0.5rem', padding: '0.5rem', flexShrink: 0}}>
                  <span style={{fontSize: '1.25rem', fontWeight: '700'}}>{milestone.year}</span>
                </div>
                <div>
                  <h4 style={{fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.4rem', color: '#111827'}}>{milestone.title}</h4>
                  <p style={{color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.7'}}>{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className={styles.section}>
        <h2 className={styles.heading2} style={{textAlign: 'center', marginBottom: '1rem'}}>Leadership Team</h2>
        <p style={{textAlign: 'center', color: '#4b5563', maxWidth: '48rem', margin: '0 auto 3rem'}}>
          Our leaders bring decades of experience from diverse backgrounds to drive innovation and excellence.
        </p>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem'}}>
          {team.map((member, index) => (
            <div key={index} className={styles.card}>
              <div style={{position: 'relative', height: '16rem', backgroundColor: '#e5e7eb', borderRadius: '0.5rem', overflow: 'hidden', marginBottom: '1rem'}}>
                <Image src={member.image} alt={member.name} fill style={{objectFit: 'cover', filter: 'grayscale(100%)'}} />
              </div>
              <h3 style={{fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.25rem'}}>{member.name}</h3>
              <p style={{color: '#0f766e', fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.75rem'}}>{member.role}</p>
              <p style={{color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '1rem'}}>{member.bio}</p>
              <div style={{display: 'flex', gap: '0.75rem'}}>
                <a href="#" style={{width: '2rem', height: '2rem', backgroundColor: '#f3f4f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <span style={{fontSize: '0.75rem'}}>in</span>
                </a>
                <a href="#" style={{width: '2rem', height: '2rem', backgroundColor: '#f3f4f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <span style={{fontSize: '0.75rem'}}>@</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{backgroundColor: '#0f766e', padding: '4rem 0'}}>
        <div className={styles.section} style={{paddingTop: 0, paddingBottom: 0, textAlign: 'center'}}>
          <h2 style={{fontSize: '2.25rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem'}}>
            Want to be part of our story?
          </h2>
          <p style={{fontSize: '1.125rem', color: '#ccfbf1', marginBottom: '2rem'}}>
            We are always looking for visionary talent to join our growing team of innovators.
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}>
            <Link href="/careers">
              <button style={{padding: '0.75rem 2rem', backgroundColor: '#ffffff', color: '#0f766e', borderRadius: '0.375rem', fontSize: '1rem', fontWeight: '600'}}>
                View Careers
              </button>
            </Link>
            <Link href="/contact">
              <button style={{padding: '0.75rem 2rem', backgroundColor: 'transparent', border: '2px solid #ffffff', color: '#ffffff', borderRadius: '0.375rem', fontSize: '1rem', fontWeight: '600'}}>
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
