import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Insights',
  description: 'Latest corporate news, industry insights, and updates from Travler — your source for digital transformation trends at travler.lk/news.',
  alternates: { canonical: 'https://travler.lk/news' },
  openGraph: { url: 'https://travler.lk/news', title: 'News & Insights | Travler', description: 'Latest news and corporate insights from Travler.' },
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
