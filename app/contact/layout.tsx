import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Travler — reach our team for consulting, partnerships, or support at travler.lk/contact.',
  alternates: { canonical: 'https://travler.lk/contact' },
  openGraph: { url: 'https://travler.lk/contact', title: 'Contact Travler', description: 'Reach the Travler team for consulting, partnerships, or support.' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
