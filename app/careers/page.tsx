'use client';

import Image from "next/image";
import Link from "next/link";
import styles from '../styles.module.css';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

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
      <SiteHeader />

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
      <section style={{backgroundColor: '#f9fafb', padding: '4rem 0'}}>
        <div className={styles.section} style={{paddingTop: 0, paddingBottom: 0}}>
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
      <section style={{backgroundColor: '#f9fafb', padding: '4rem 0'}}>
        <div className={styles.section} style={{paddingTop: 0, paddingBottom: 0}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem'}}>
            <div>
              <h2 className={styles.heading2} style={{marginBottom: '0.5rem'}}>Open Positions</h2>
              <p style={{color: '#6b7280', fontSize: '0.875rem'}}>We are currently looking for Engineering, Data Ops, and Product...</p>
            </div>
            <div style={{display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap'}}>
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
              <div key={index} style={{backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)'}}>
                <div style={{flex: 1}}>
                  <div style={{display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '0.5rem'}}>
                    <span style={{padding: '0.25rem 0.75rem', backgroundColor: '#ccfbf1', color: '#0f766e', fontSize: '0.75rem', fontWeight: '600', borderRadius: '0.25rem'}}>{job.department}</span>
                    <span style={{fontSize: '0.75rem', color: '#6b7280'}}>📍 {job.location}</span>
                  </div>
                  <h3 style={{fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.5rem'}}>{job.title}</h3>
                  <p style={{color: '#6b7280', fontSize: '0.875rem'}}>{job.description}</p>
                </div>
                <button className={styles.btnPrimary} style={{padding: '0.5rem 1.5rem', flexShrink: 0}}>
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

      <SiteFooter />
    </div>
  );
}
