import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://travler.lk/'),
  title: {
    default: "Travler | Corporate Digital Solutions & Business Transformation",
    template: "%s | Travler"
  },
  description: "Travler is a corporate digital solutions company based at travler.lk. We offer strategic consulting, Shopify development, digital infrastructure, and AI-powered analytics for enterprise growth.",
  keywords: [
    "Travler", "travler.lk", "Travler Solutions", "Travler Sri Lanka",
    "digital transformation", "corporate solutions", "business consulting",
    "Shopify development", "enterprise software", "cloud infrastructure",
    "AI analytics", "strategic consulting", "technology solutions",
    "vacancies", "careers", "products", "news"
  ],
  authors: [{ name: "Travler Solutions", url: "https://travler.lk" }],
  creator: "Travler Solutions",
  publisher: "Travler Solutions",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://travler.lk/",
    siteName: "Travler",
    title: "Travler | Corporate Digital Solutions & Business Transformation",
    description: "Travler delivers strategic consulting, Shopify development, and digital infrastructure solutions for enterprise success.",
    images: [{
      url: "https://travler.lk/assets/Travler%20-%20Corporate%20Digital%20Solutions%20Logo.png",
      width: 512,
      height: 512,
      alt: "Travler - Corporate Digital Solutions",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Travler | Corporate Digital Solutions",
    description: "Travler delivers strategic consulting, Shopify development, and digital infrastructure solutions.",
    images: ["https://travler.lk/assets/Travler%20-%20Corporate%20Digital%20Solutions%20Logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://travler.lk/',
  },
  icons: {
    icon: '/assets/Travler%20-%20Corporate%20Digital%20Solutions%20Logo.png',
    apple: '/assets/Travler%20-%20Corporate%20Digital%20Solutions%20Logo.png',
    shortcut: '/assets/Travler%20-%20Corporate%20Digital%20Solutions%20Logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://travler.lk/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/Travler%20-%20Corporate%20Digital%20Solutions%20Logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/Travler%20-%20Corporate%20Digital%20Solutions%20Logo.png" />
        <StructuredData />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
