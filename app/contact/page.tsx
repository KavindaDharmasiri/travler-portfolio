'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Image src="/assets/Travler%20-%20Corporate%20Digital%20Solutions%20Logo.png" alt="Travler" width={32} height={32} style={{ objectFit: 'contain' }} />
            <span style={{ fontSize: '1.125rem', fontWeight: '600' }}>Travler</span>
          </Link>
          <nav className={styles.nav}>
            <Link href="/careers" className={styles.navLink}>Careers</Link>
            <Link href="/products" className={styles.navLink}>Products</Link>
            <Link href="/news" className={styles.navLink}>News</Link>
            <Link href="/about" className={styles.navLink}>About</Link>
          </nav>
          <Link href="/contact"><button className={styles.btnPrimary}>Contact Us</button></Link>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0f766e 0%, #134e4a 100%)', padding: '4rem 0' }}>
        <div className={styles.section} style={{ paddingTop: 0, paddingBottom: 0 }}>
          <p style={{ fontSize: '0.75rem', color: '#ccfbf1', marginBottom: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Get In Touch</p>
          <h1 style={{ fontSize: '3rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem', lineHeight: '1.2' }}>Contact Us</h1>
          <p style={{ fontSize: '1.125rem', color: '#ccfbf1', lineHeight: '1.6', maxWidth: '40rem' }}>
            Ready to transform your business? Our team is here to help you navigate the digital landscape and achieve your goals.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className={styles.section}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '4rem', alignItems: 'start' }}>

          {/* Left — contact info */}
          <div>
            <h2 className={styles.heading2} style={{ marginBottom: '0.75rem' }}>Let&apos;s Talk</h2>
            <p style={{ color: '#4b5563', lineHeight: '1.7', marginBottom: '2.5rem' }}>
              Whether you have a project in mind, a question about our services, or just want to say hello — we&apos;d love to hear from you.
            </p>

            {[
              {
                icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
                label: 'Email Us',
                lines: ['travlerofficial2025@gmail.com'],
              },
              {
                icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
                label: 'Call Us',
                lines: ['+1 (555) 123-4567', 'Mon–Fri 9am–6pm EST'],
              },
              {
                icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z',
                label: 'Visit Us',
                lines: ['123 Business Avenue', 'New York, NY 10001'],
              },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.75rem' }}>
                <div style={{ width: '3rem', height: '3rem', backgroundColor: '#f0fdf4', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg style={{ width: '1.25rem', height: '1.25rem', color: '#0f766e' }} fill="none" stroke="#0f766e" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <div>
                  <p style={{ fontWeight: '700', marginBottom: '0.25rem', fontSize: '0.9rem' }}>{item.label}</p>
                  {item.lines.map((l) => <p key={l} style={{ color: '#6b7280', fontSize: '0.875rem' }}>{l}</p>)}
                </div>
              </div>
            ))}
          </div>

          {/* Right — form */}
          <div className={styles.card} style={{ padding: '2.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1.75rem' }}>Send us a Message</h2>

            {status === 'success' && (
              <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '0.5rem' }}>
                <p style={{ color: '#166534', fontSize: '0.875rem' }}>✓ Message sent! We&apos;ll get back to you soon.</p>
              </div>
            )}
            {status === 'error' && (
              <div style={{ marginBottom: '1.5rem', padding: '1rem', backgroundColor: '#fef2f2', border: '1px solid #fecaca', borderRadius: '0.5rem' }}>
                <p style={{ color: '#991b1b', fontSize: '0.875rem' }}>Something went wrong. Please try again.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { id: 'name', label: 'Full Name *', type: 'text', placeholder: 'John Doe', required: true },
                { id: 'email', label: 'Email Address *', type: 'email', placeholder: 'john@company.com', required: true },
                { id: 'company', label: 'Company Name', type: 'text', placeholder: 'Your Company', required: false },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>{field.label}</label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleChange}
                    required={field.required}
                    placeholder={field.placeholder}
                    style={{ width: '100%', padding: '0.625rem 0.875rem', fontSize: '0.875rem', border: '1px solid #d1d5db', borderRadius: '0.375rem', outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.5rem' }}>Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your project..."
                  style={{ width: '100%', padding: '0.625rem 0.875rem', fontSize: '0.875rem', border: '1px solid #d1d5db', borderRadius: '0.375rem', outline: 'none', resize: 'none', boxSizing: 'border-box' }}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className={styles.btnPrimary}
                style={{ padding: '0.875rem', fontSize: '1rem', opacity: status === 'loading' ? 0.6 : 1 }}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.section}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '3rem', marginBottom: '2rem' }}>
            <div style={{ maxWidth: '20rem' }}>
              <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Image src="/assets/Travler%20-%20Corporate%20Digital%20Solutions%20Logo.png" alt="Travler" width={32} height={32} style={{ objectFit: 'contain' }} />
                <span style={{ fontSize: '1.125rem', fontWeight: '600' }}>Travler</span>
              </Link>
              <p style={{ fontSize: '0.875rem', color: '#4b5563', lineHeight: '1.6' }}>Empowering digital transformation with innovative corporate tech solutions.</p>
            </div>
            <div>
              <h4 style={{ fontWeight: '700', marginBottom: '1rem', fontSize: '0.75rem', letterSpacing: '0.05em' }}>COMPANY</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: '#4b5563' }}>
                <Link href="/about">About Us</Link>
                <Link href="/careers">Careers</Link>
                <Link href="/products">Products</Link>
                <Link href="/news">News</Link>
              </div>
            </div>
            <div>
              <h4 style={{ fontWeight: '700', marginBottom: '1rem', fontSize: '0.75rem', letterSpacing: '0.05em' }}>SERVICES</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: '#4b5563' }}>
                <Link href="/consulting">Strategic Consulting</Link>
                <Link href="/infrastructure">Digital Infrastructure</Link>
                <Link href="/cloud">Cloud Management</Link>
                <Link href="/engineering">Data Engineering</Link>
              </div>
            </div>
            <div style={{ maxWidth: '20rem' }}>
              <h4 style={{ fontWeight: '700', marginBottom: '1rem', fontSize: '0.75rem', letterSpacing: '0.05em' }}>CONTACT</h4>
              <p style={{ fontSize: '0.875rem', color: '#4b5563', marginBottom: '0.5rem' }}>travlerofficial2025@gmail.com</p>
              <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>+1 (555) 123-4567</p>
            </div>
          </div>
          <div style={{ paddingTop: '2rem', borderTop: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.875rem', color: '#4b5563', flexWrap: 'wrap', gap: '1rem' }}>
            <p>© {new Date().getFullYear()} Travler Solutions, Inc. All rights reserved.</p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
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
