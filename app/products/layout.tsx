import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products & Shopify Projects',
  description: 'Explore Travler\'s software, security, cloud products and custom Shopify storefronts — Purely, TechNova, and Velora at travler.lk/products.',
  alternates: { canonical: 'https://travler.lk/products' },
  openGraph: { url: 'https://travler.lk/products', title: 'Products | Travler', description: 'Software, security, cloud products and Shopify projects by Travler.' },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
