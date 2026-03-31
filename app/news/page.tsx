'use client';

import Image from "next/image";
import Link from "next/link";
import styles from '../styles.module.css';

export default function NewsPage() {
  const articles = [
    {
      category: "COMMUNITY",
      date: "OCT 18, 2025",
      title: "Expanding Our Global Reach with New European Operations",
      excerpt: "We are thrilled to announce the opening of our new regional headquarters in Berlin, marking a significant milestone in our international growth strategy.",
      image: "/assets/Modern%20glass%20corporate%20office%20interior%20with%20sunset%20lighting%20representing%20business%20growth.png"
    },
    {
      category: "INNOVATION",
      date: "OCT 10, 2025",
      title: "Unveiling Echo 2.0: The Future of Collaborative Workflows",
      excerpt: "Our engineering team has been hard at work reimagining the ecosystem. Discover the new features designed to boost productivity by 40%.",
      image: "/assets/Futuristic%20minimalist%20tablet%20showing%20the%20Travler%20Enterprise%20Suite%20v4.0%20dashboard.png"
    },
    {
      category: "SUSTAINABILITY",
      date: "OCT 01, 2025",
      title: "Annual Sustainability Impact Report Released",
      excerpt: "Our commitment to the planet has never been stronger. See how we reached our carbon neutrality goal two years ahead of schedule.",
      image: "/assets/Neural%20Analytics%20Hub%20-%203D%20network%20visualization%20of%20glowing%20data%20points.png"
    }
  ];

  const events = [
    { date: "NOV 12", title: "Global Partners Summit", location: "Virtual Event • 10:00 AM EST" },
    { date: "NOV 18", title: "Q4 Product Demo", location: "San Francisco • 2:00 PM PST" },
    { date: "DEC 05", title: "AI in Ethics Webinar", location: "Virtual Event • 11:00 AM EST" }
  ];

  const topics = ["#Product", "#ESG", "#Leadership", "#AI", "#Blog", "#WorkCulture"];

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
              <input type="text" placeholder="Search insights..." className={styles.searchInput} />
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

      {/* Featured Article */}
      <section style={{position: 'relative', height: '28rem', overflow: 'hidden'}}>
        <Image
          src="/assets/Modern%20glass%20corporate%20office%20interior%20with%20sunset%20lighting%20representing%20business%20growth.png"
          alt="Featured"
          fill
          style={{objectFit: 'cover', filter: 'brightness(0.6)'}}
        />
        <div style={{position: 'absolute', inset: 0, display: 'flex', alignItems: 'center'}}>
          <div className={styles.section} style={{paddingTop: 0, paddingBottom: 0}}>
            <div style={{maxWidth: '48rem'}}>
              <span style={{display: 'inline-block', padding: '0.25rem 0.75rem', backgroundColor: '#0f766e', color: '#ffffff', fontSize: '0.75rem', fontWeight: '600', borderRadius: '0.25rem', marginBottom: '1rem'}}>
                FEATURED NEWS
              </span>
              <h1 style={{fontSize: '3rem', fontWeight: '700', color: '#ffffff', marginBottom: '1rem', lineHeight: '1.2'}}>
                Leading the Transition to Sustainable Workspace Architecture
              </h1>
              <p style={{fontSize: '1.125rem', color: '#e5e7eb', marginBottom: '2rem', lineHeight: '1.6'}}>
                How our innovative SaaS in green building are reshaping the future of the modern corporate headquarters.
              </p>
              <button style={{padding: '0.75rem 1.5rem', backgroundColor: '#0f766e', color: '#ffffff', borderRadius: '0.375rem', fontSize: '1rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                Read Full Story
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className={styles.section} style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
        <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
          <button style={{padding: '0.5rem 1.5rem', backgroundColor: '#0f766e', color: '#ffffff', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '500'}}>
            All Updates
          </button>
          <button style={{padding: '0.5rem 1.5rem', backgroundColor: '#f3f4f6', color: '#4b5563', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '500'}}>
            Product News
          </button>
          <button style={{padding: '0.5rem 1.5rem', backgroundColor: '#f3f4f6', color: '#4b5563', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '500'}}>
            Press Releases
          </button>
          <button style={{padding: '0.5rem 1.5rem', backgroundColor: '#f3f4f6', color: '#4b5563', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '500'}}>
            Corporate
          </button>
          <button style={{padding: '0.5rem 1.5rem', backgroundColor: '#f3f4f6', color: '#4b5563', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '500'}}>
            Sustainability
          </button>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.section}>
        <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem'}}>
          {/* Articles */}
          <div>
            <h2 style={{fontSize: '1.875rem', fontWeight: '700', marginBottom: '2rem'}}>Latest Insights</h2>
            <div style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
              {articles.map((article, index) => (
                <div key={index} style={{display: 'flex', gap: '1.5rem', paddingBottom: '2rem', borderBottom: '1px solid #e5e7eb'}}>
                  <div style={{position: 'relative', width: '12rem', height: '10rem', flexShrink: 0, borderRadius: '0.5rem', overflow: 'hidden'}}>
                    <Image src={article.image} alt={article.title} fill style={{objectFit: 'cover'}} />
                  </div>
                  <div style={{flex: 1}}>
                    <div style={{display: 'flex', gap: '1rem', marginBottom: '0.75rem', fontSize: '0.75rem', color: '#6b7280', fontWeight: '600'}}>
                      <span>{article.category}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                    <h3 style={{fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.75rem'}}>{article.title}</h3>
                    <p style={{color: '#6b7280', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '1rem'}}>{article.excerpt}</p>
                    <Link href="#" style={{color: '#0f766e', fontSize: '0.875rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                      Read article
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Upcoming Events */}
            <div style={{backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)', marginBottom: '2rem'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem'}}>
                <span style={{fontSize: '1.25rem'}}>📅</span>
                <h3 style={{fontSize: '1.125rem', fontWeight: '700'}}>Upcoming Events</h3>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                {events.map((event, index) => (
                  <div key={index} style={{paddingBottom: '1rem', borderBottom: index < events.length - 1 ? '1px solid #e5e7eb' : 'none'}}>
                    <div style={{display: 'flex', gap: '1rem', alignItems: 'start'}}>
                      <div style={{textAlign: 'center', minWidth: '3rem'}}>
                        <div style={{fontSize: '0.75rem', color: '#6b7280', fontWeight: '600'}}>{event.date.split(' ')[0]}</div>
                        <div style={{fontSize: '1.5rem', fontWeight: '700', color: '#0f766e'}}>{event.date.split(' ')[1]}</div>
                      </div>
                      <div>
                        <h4 style={{fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.25rem'}}>{event.title}</h4>
                        <p style={{fontSize: '0.75rem', color: '#6b7280'}}>{event.location}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="#" style={{display: 'block', textAlign: 'center', marginTop: '1rem', color: '#0f766e', fontSize: '0.875rem', fontWeight: '600'}}>
                View All Events
              </Link>
            </div>

            {/* Newsletter */}
            <div style={{backgroundColor: '#0f766e', padding: '1.5rem', borderRadius: '0.5rem', color: '#ffffff'}}>
              <h3 style={{fontSize: '1.125rem', fontWeight: '700', marginBottom: '0.75rem'}}>Newsletter</h3>
              <p style={{fontSize: '0.875rem', marginBottom: '1rem', opacity: 0.9}}>
                Get the latest industry insights and company news delivered directly to your inbox.
              </p>
              <input
                type="email"
                placeholder="Your email address"
                style={{width: '100%', padding: '0.75rem', borderRadius: '0.375rem', border: 'none', marginBottom: '0.75rem', fontSize: '0.875rem'}}
              />
              <button style={{width: '100%', padding: '0.75rem', backgroundColor: '#ffffff', color: '#0f766e', borderRadius: '0.375rem', fontSize: '0.875rem', fontWeight: '600'}}>
                Subscribe Now
              </button>
              <p style={{fontSize: '0.75rem', marginTop: '0.75rem', opacity: 0.8}}>
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </div>

            {/* Trending Topics */}
            <div style={{marginTop: '2rem'}}>
              <h3 style={{fontSize: '1.125rem', fontWeight: '700', marginBottom: '1rem'}}>Trending Topics</h3>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                {topics.map((topic, index) => (
                  <Link key={index} href="#" style={{padding: '0.5rem 1rem', backgroundColor: '#f3f4f6', color: '#4b5563', borderRadius: '9999px', fontSize: '0.875rem', fontWeight: '500'}}>
                    {topic}
                  </Link>
                ))}
              </div>
            </div>
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
