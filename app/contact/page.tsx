'use client';

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
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(formData) });
      if (res.ok) { setStatus('success'); setFormData({ name: '', email: '', company: '', message: '' }); setTimeout(() => setStatus(''), 5000); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const inputStyle: React.CSSProperties = { width: '100%', padding: '0.75rem 0.875rem', fontSize: '0.875rem', background: 'var(--input-bg)', border: '1px solid var(--input-border)', borderRadius: '8px', color: 'var(--input-text)', outline: 'none', boxSizing: 'border-box', transition: 'border-color 0.2s' };
  const labelStyle: React.CSSProperties = { display: 'block', fontSize: '0.8rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--text-secondary)' };

  return (
    <div className={styles.page}>
      <SiteHeader />

      <section className={styles.section} style={{ paddingBottom: '2rem' }}>
        <div className={styles.badge} style={{ marginBottom: '1.25rem' }}>Get In Touch</div>
        <h1 className={styles.heading1}>Contact Us</h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '36rem', lineHeight: '1.7' }}>
          Ready to transform your business? Our team is here to help you navigate the digital landscape and achieve your goals.
        </p>
      </section>

      <section className={styles.section} style={{ paddingTop: '1rem' }}>
        <div className={styles.twoCol}>
          <div>
            <h2 style={{ fontSize: '1.375rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Let&apos;s Talk</h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '2.5rem' }}>
              Whether you have a project in mind, a question about our services, or just want to say hello — we&apos;d love to hear from you.
            </p>
            {[
              { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label: 'Email Us', lines: ['travlerofficial2025@gmail.com'] },
              { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', label: 'Call Us', lines: ['+1 (555) 123-4567', 'Mon–Fri 9am–6pm EST'] },
              { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z', label: 'Visit Us', lines: ['123 Business Avenue', 'New York, NY 10001'] },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.75rem' }}>
                <div style={{ width: '2.75rem', height: '2.75rem', background: 'var(--accent)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg style={{ width: '1.125rem', height: '1.125rem', color: '#fff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <div>
                  <p style={{ fontWeight: '700', marginBottom: '0.25rem', color: 'var(--text-primary)', fontSize: '0.9rem' }}>{item.label}</p>
                  {item.lines.map(l => <p key={l} style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{l}</p>)}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.card} style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '1.375rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '1.75rem' }}>Send us a Message</h2>
            {status === 'success' && <div style={{ marginBottom: '1.25rem', padding: '0.875rem 1rem', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.25)', borderRadius: '8px' }}><p style={{ color: '#16a34a', fontSize: '0.875rem' }}>✓ Message sent! We&apos;ll get back to you soon.</p></div>}
            {status === 'error' && <div style={{ marginBottom: '1.25rem', padding: '0.875rem 1rem', background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: '8px' }}><p style={{ color: '#dc2626', fontSize: '0.875rem' }}>Something went wrong. Please try again.</p></div>}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
              {[
                { id: 'name', label: 'Full Name *', type: 'text', placeholder: 'John Doe', required: true },
                { id: 'email', label: 'Email Address *', type: 'email', placeholder: 'john@company.com', required: true },
                { id: 'company', label: 'Company Name', type: 'text', placeholder: 'Your Company', required: false },
              ].map(f => (
                <div key={f.id}>
                  <label htmlFor={f.id} style={labelStyle}>{f.label}</label>
                  <input type={f.type} id={f.id} name={f.id} value={formData[f.id as keyof typeof formData]} onChange={handleChange} required={f.required} placeholder={f.placeholder} style={inputStyle} />
                </div>
              ))}
              <div>
                <label htmlFor="message" style={labelStyle}>Message *</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Tell us about your project..." style={{ ...inputStyle, resize: 'none' }} />
              </div>
              <button type="submit" disabled={status === 'loading'} className={styles.btnPrimary} style={{ padding: '0.875rem', fontSize: '0.9375rem', opacity: status === 'loading' ? 0.7 : 1 }}>
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
