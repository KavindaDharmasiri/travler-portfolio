'use client';

import Image from "next/image";
import Link from "next/link";
import styles from '../styles.module.css';

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
              <input type="text" placeholder="Search travler..." className={styles.searchInput} />
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
            <h1 style={{fontSize: '3rem', fontWeight: '700', marginBottom: '1rem'}}>
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
      <section className={styles.section} style={{backgroundColor: '#f9fafb', margin: '0 -100vw', padding: '4rem 100vw'}}>
        <div style={{maxWidth: '80rem', margin: '0 auto'}}>
          <h2 className={styles.heading2} style={{textAlign: 'center', marginBottom: '3rem'}}>Milestones of Innovation</h2>
          <div style={{position: 'relative', maxWidth: '48rem', margin: '0 auto'}}>
            <div style={{position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', backgroundColor: '#e5e7eb', transform: 'translateX(-50%)'}}></div>
            {milestones.map((milestone, index) => (
              <div key={index} style={{position: 'relative', marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '2rem'}}>
                <div style={{flex: 1, textAlign: index % 2 === 0 ? 'right' : 'left', order: index % 2 === 0 ? 1 : 3}}>
                  <h3 style={{fontSize: '1.5rem', fontWeight: '700', color: '#0f766e', marginBottom: '0.5rem'}}>{milestone.year}</h3>
                  <h4 style={{fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem'}}>{milestone.title}</h4>
                  <p style={{color: '#6b7280', fontSize: '0.875rem'}}>{milestone.description}</p>
                </div>
                <div style={{width: '1rem', height: '1rem', backgroundColor: '#0f766e', borderRadius: '50%', border: '4px solid #ffffff', zIndex: 10, order: 2}}></div>
                <div style={{flex: 1, order: index % 2 === 0 ? 3 : 1}}></div>
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

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.section}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '3rem', marginBottom: '2rem'}}>
            <div style={{maxWidth: '20rem'}}>
              <Link href="/" style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem'}}>
                <Image src="/assets/Travler%20-%20Corporate%20Digital%20Solutions%20Logo.png" alt="Travler" width={32} height={32} style={{objectFit: 'contain'}} />
                <span style={{fontSize: '1.125rem', fontWeight: '600'}}>Travler</span>
              </Link>
              <p style={{fontSize: '0.875rem', color: '#4b5563', lineHeight: '1.6'}}>
                Leading the transition to a digitally empowered corporate world with intelligence, strategy, and execution.
              </p>
              <div style={{display: 'flex', gap: '0.75rem', marginTop: '1rem'}}>
                <a href="#" style={{width: '2rem', height: '2rem', backgroundColor: '#f3f4f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <span style={{fontSize: '0.875rem'}}>𝕏</span>
                </a>
                <a href="#" style={{width: '2rem', height: '2rem', backgroundColor: '#f3f4f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <span style={{fontSize: '0.875rem'}}>in</span>
                </a>
                <a href="#" style={{width: '2rem', height: '2rem', backgroundColor: '#f3f4f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
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
                Stay updated with our latest industry insights.
              </p>
              <div style={{display: 'flex', gap: '0.5rem'}}>
                <input type="email" placeholder="Email address" style={{flex: 1, padding: '0.5rem 0.75rem', fontSize: '0.875rem', border: '1px solid #d1d5db', borderRadius: '0.375rem'}} />
                <button className={styles.btnPrimary} style={{padding: '0.5rem 1rem'}}>Subscribe</button>
              </div>
            </div>
          </div>
          <div style={{paddingTop: '2rem', borderTop: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem', color: '#4b5563', flexWrap: 'wrap', gap: '1rem'}}>
            <p>© {new Date().getFullYear()} Travler Solutions, Inc. All rights reserved.</p>
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
