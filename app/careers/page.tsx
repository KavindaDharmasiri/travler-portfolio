'use client';

import Image from "next/image";
import Link from "next/link";
import styles from '../styles.module.css';

export default function CareersPage() {
  const benefits = [
    { icon: "🏥", title: "Premium Health Cover", description: "Full medical, dental and vision for you and your family." },
    { icon: "💰", title: "Unlimited PTO", description: "Take the time you need to recharge and come back refreshed." },
    { icon: "🏠", title: "Remote-First Culture", description: "Work from anywhere with a generous home office stipend." },
    { icon: "📚", title: "Learning Allowance", description: "Continuous growth: Access to courses, books, and conferences." }
  ];

  const jobs = [
    { department: "Engineering", title: "Senior Full Stack Engineer", location: "San Francisco, CA", description: "Building our next-generation SaaS platform using React, Node.js, and AWS.", type: "Full-Time" },
    { department: "Product", title: "Product Designer", location: "Remote", description: "Craft delightful user experiences that make complex workflows feel effortless.", type: "Full-Time" },
    { department: "Product", title: "Technical Product Manager", location: "New York, NY", description: "Define product strategy and roadmap for our enterprise platform.", type: "Full-Time" },
    { department: "Engineering", title: "DevOps Engineer", location: "Remote", description: "Build and maintain our CI/CD pipelines and cloud infrastructure.", type: "Full-Time" }
  ];

  return (
    <div className={styles.page}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div style={{display: 'flex', alignItems: 'center', gap: '2rem'}}>
            <Link href="/" style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
              <Image src="/assets/Travler%20-%20Corporate%20Digital%20Solutions%20Logo.png" alt="Travler" width={32} height={32} style={{objectFit: 'contain'}} />
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
              <input type="text" placeholder="Search jobs..." className={styles.searchInput} />
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
      <section className={styles.section}>
        <div className={styles.heroGrid}>
          <div>
            <p style={{fontSize: '0.75rem', color: '#6b7280', marginBottom: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase'}}>
              CAREER OPPORTUNITIES
            </p>
            <h1 className={styles.heading1}>
              Shape the Future With Us
            </h1>
            <p className={styles.textGray}>
              A technology-driven business transformation leader designed to solving the world's most complex technical challenges through innovation and inclusivity.
            </p>
            <div style={{display: 'flex', gap: '1rem', marginBottom: '2rem'}}>
              <button className={styles.btnPrimary} style={{padding: '0.75rem 1.5rem'}}>
                View Openings
              </button>
              <button className={styles.btnSecondary}>
                Our Story
              </button>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
              <div style={{display: 'flex'}}>
                <div style={{width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: '#0f766e', border: '2px solid white'}}></div>
                <div style={{width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: '#374151', border: '2px solid white', marginLeft: '-0.5rem'}}></div>
                <div style={{width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: '#6b7280', border: '2px solid white', marginLeft: '-0.5rem'}}></div>
              </div>
              <p style={{fontSize: '0.75rem', color: '#6b7280'}}>Join 500+ incredible colleagues</p>
            </div>
          </div>
          <div style={{position: 'relative'}}>
            <div style={{backgroundColor: '#ffffff', borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', overflow: 'hidden', position: 'relative'}}>
              <div style={{position: 'relative', height: '20rem'}}>
                <Image src="/assets/Modern%20glass%20corporate%20office%20interior%20with%20sunset%20lighting%20representing%20business%20growth.png" alt="Team" fill style={{objectFit: 'cover'}} />
              </div>
              <div style={{position: 'absolute', bottom: '1rem', left: '1rem', backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', padding: '1rem'}}>
                <p style={{fontSize: '0.75rem', color: '#6b7280', marginBottom: '0.25rem'}}>Employee Satisfaction</p>
                <p style={{fontSize: '1.5rem', fontWeight: '700', color: '#0f766e'}}>4.8/5.0 ⭐</p>
                <p style={{fontSize: '0.75rem', color: '#6b7280'}}>"Optimal growing environment" - March 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Life at Travler */}
      <section className={styles.section} style={{backgroundColor: '#f9fafb', margin: '0 -100vw', padding: '4rem 100vw'}}>
        <div style={{maxWidth: '80rem', margin: '0 auto'}}>
          <h2 className={styles.heading2} style={{textAlign: 'center', marginBottom: '1rem'}}>Life at Travler</h2>
          <p style={{textAlign: 'center', color: '#4b5563', maxWidth: '48rem', margin: '0 auto 3rem'}}>
            We thrive on an environment that fosters creativity, collaboration, and continuous learning. Explore our work culture and growth.
          </p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem'}}>
            <div style={{position: 'relative', height: '16rem', borderRadius: '0.5rem', overflow: 'hidden'}}>
              <Image src="/assets/Futuristic%20minimalist%20tablet%20showing%20the%20Travler%20Enterprise%20Suite%20v4.0%20dashboard.png" alt="Innovation" fill style={{objectFit: 'cover'}} />
              <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)', display: 'flex', alignItems: 'end', padding: '1.5rem'}}>
                <div>
                  <h3 style={{color: '#ffffff', fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.25rem'}}>Innovation First</h3>
                  <p style={{color: '#e5e7eb', fontSize: '0.875rem'}}>Pioneering ideas drive our organization forward.</p>
                </div>
              </div>
            </div>
            <div style={{position: 'relative', height: '16rem', borderRadius: '0.5rem', overflow: 'hidden'}}>
              <Image src="/assets/Modern%20glass%20corporate%20office%20interior%20with%20sunset%20lighting%20representing%20business%20growth.png" alt="Collaboration" fill style={{objectFit: 'cover'}} />
              <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)', display: 'flex', alignItems: 'end', padding: '1.5rem'}}>
                <div>
                  <h3 style={{color: '#ffffff', fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.25rem'}}>Global Collaboration</h3>
                  <p style={{color: '#e5e7eb', fontSize: '0.875rem'}}>Work with talented people across continents.</p>
                </div>
              </div>
            </div>
            <div style={{position: 'relative', height: '16rem', borderRadius: '0.5rem', overflow: 'hidden'}}>
              <Image src="/assets/Neural%20Analytics%20Hub%20-%203D%20network%20visualization%20of%20glowing%20data%20points.png" alt="Harmony" fill style={{objectFit: 'cover'}} />
              <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)', display: 'flex', alignItems: 'end', padding: '1.5rem'}}>
                <div>
                  <h3 style={{color: '#ffffff', fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.25rem'}}>Work-Life Harmony</h3>
                  <p style={{color: '#e5e7eb', fontSize: '0.875rem'}}>Balance that lets you thrive in all areas.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className={styles.section}>
        <h2 className={styles.heading2}>Employee Benefits</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem'}}>
          {benefits.map((benefit, index) => (
            <div key={index} style={{display: 'flex', gap: '1rem'}}>
              <div style={{fontSize: '2rem', flexShrink: 0}}>{benefit.icon}</div>
              <div>
                <h3 style={{fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.5rem'}}>{benefit.title}</h3>
                <p style={{color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.6'}}>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className={styles.section} style={{backgroundColor: '#f9fafb', margin: '0 -100vw', padding: '4rem 100vw'}}>
        <div style={{maxWidth: '80rem', margin: '0 auto'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem'}}>
            <div>
              <h2 className={styles.heading2} style={{marginBottom: '0.5rem'}}>Open Positions</h2>
              <p style={{color: '#6b7280', fontSize: '0.875rem'}}>We are currently looking for Engineering, Data Ops, and Product...</p>
            </div>
            <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
              <input type="text" placeholder="🔍 Search job titles..." style={{padding: '0.5rem 1rem', border: '1px solid #e5e7eb', borderRadius: '0.375rem', fontSize: '0.875rem'}} />
              <select style={{padding: '0.5rem 1rem', border: '1px solid #e5e7eb', borderRadius: '0.375rem', fontSize: '0.875rem'}}>
                <option>All Departments</option>
                <option>Engineering</option>
                <option>Product</option>
                <option>Design</option>
              </select>
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
            {jobs.map((job, index) => (
              <div key={index} style={{backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)'}}>
                <div style={{flex: 1}}>
                  <div style={{display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.5rem'}}>
                    <span style={{padding: '0.25rem 0.75rem', backgroundColor: '#ccfbf1', color: '#0f766e', fontSize: '0.75rem', fontWeight: '600', borderRadius: '0.25rem'}}>{job.department}</span>
                    <span style={{fontSize: '0.75rem', color: '#6b7280'}}>📍 {job.location}</span>
                  </div>
                  <h3 style={{fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.5rem'}}>{job.title}</h3>
                  <p style={{color: '#6b7280', fontSize: '0.875rem'}}>{job.description}</p>
                </div>
                <button className={styles.btnPrimary} style={{padding: '0.5rem 1.5rem', marginLeft: '2rem'}}>
                  Apply Now
                </button>
              </div>
            ))}
          </div>
          <div style={{textAlign: 'center', marginTop: '2rem'}}>
            <p style={{color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem'}}>
              Don't see a role that fits? We're always looking for great talent.
            </p>
            <Link href="#" style={{color: '#0f766e', fontSize: '0.875rem', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.5rem'}}>
              Send a general application
              <span>→</span>
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
