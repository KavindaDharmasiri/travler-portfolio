import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Travler — our mission, vision, leadership, and commitment to corporate digital transformation at travler.lk.',
  alternates: { canonical: 'https://travler.lk/about' },
  openGraph: { url: 'https://travler.lk/about', title: 'About Travler', description: 'Our mission, vision, and team behind Travler digital solutions.' },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
