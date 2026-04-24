'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles.module.css';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

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
      <SiteHeader />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #0f766e 0%, #134e4a 100%)', padding: '4rem 0' }}>
        <div className={styles.section} style={{ paddingTop: 0, paddingBottom: 0 }}>
          <p style={{ fontSize: '0.75rem', color: '#ccfbf1', marginBottom: '1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Get In Touch</p>
          <h1 style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', fontWeight: '700', color: '#ffffff', marginBottom: '1rem', lineHeight: '1.2' }}>Contact Us</h1>
          <p style={{ fontSize: '1.125rem', color: '#ccfbf1', lineHeight: '1.6', maxWidth: '40rem' }}>
            Ready to transform your business? Our team is here to help you navigate the digital landscape and achieve your goals.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className={styles.section}>
        <div className={styles.twoCol}>

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

      <SiteFooter />
    </div>
  );
}
