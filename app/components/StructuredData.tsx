export default function StructuredData() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Travler",
    "alternateName": "Travler Solutions",
    "url": "https://travler.lk/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://travler.lk/products?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Travler",
    "alternateName": "Travler Solutions",
    "url": "https://travler.lk/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://travler.lk/assets/Travler%20-%20Corporate%20Digital%20Solutions%20Logo.png",
      "width": 512,
      "height": 512
    },
    "description": "Travler is a corporate digital solutions company offering strategic consulting, digital infrastructure, Shopify development, and AI-powered analytics for enterprise growth.",
    "foundingDate": "2020",
    "email": "travlerofficial2025@gmail.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "travlerofficial2025@gmail.com",
      "url": "https://travler.lk/contact",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://twitter.com/travler",
      "https://linkedin.com/company/travler"
    ]
  };

  const siteLinksSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://travler.lk/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://travler.lk/products?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://travler.lk/" },
      { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://travler.lk/products" },
      { "@type": "ListItem", "position": 3, "name": "Careers", "item": "https://travler.lk/careers" },
      { "@type": "ListItem", "position": 4, "name": "About", "item": "https://travler.lk/about" },
      { "@type": "ListItem", "position": 5, "name": "News", "item": "https://travler.lk/news" },
      { "@type": "ListItem", "position": 6, "name": "Contact", "item": "https://travler.lk/contact" },
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteLinksSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
