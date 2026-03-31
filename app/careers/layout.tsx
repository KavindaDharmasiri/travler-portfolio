import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers & Vacancies',
  description: 'Join Travler — explore open vacancies and career opportunities in consulting, engineering, and digital solutions at travler.lk/careers.',
  alternates: { canonical: 'https://travler.lk/careers' },
  openGraph: { url: 'https://travler.lk/careers', title: 'Careers & Vacancies | Travler', description: 'Explore open vacancies and career opportunities at Travler.' },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
