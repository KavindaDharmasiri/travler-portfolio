import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://travler.com'),
  title: {
    default: "Travler - Corporate Digital Solutions & Business Transformation",
    template: "%s | Travler"
  },
  description: "Leading corporate digital transformation with innovative technology solutions. Strategic consulting, digital infrastructure, and AI-powered analytics for enterprise success.",
  keywords: ["digital transformation", "corporate solutions", "business consulting", "enterprise software", "cloud infrastructure", "AI analytics", "strategic consulting", "technology solutions"],
  authors: [{ name: "Travler Solutions" }],
  creator: "Travler Solutions, Inc.",
  publisher: "Travler Solutions, Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://travler.com",
    siteName: "Travler",
    title: "Travler - Corporate Digital Solutions & Business Transformation",
    description: "Leading corporate digital transformation with innovative technology solutions for enterprise success.",
    images: [
      {
        url: "/assets/Modern%20glass%20corporate%20office%20interior%20with%20sunset%20lighting%20representing%20business%20growth.png",
        width: 1200,
        height: 630,
        alt: "Travler Corporate Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Travler - Corporate Digital Solutions",
    description: "Leading corporate digital transformation with innovative technology solutions.",
    images: ["/assets/Modern%20glass%20corporate%20office%20interior%20with%20sunset%20lighting%20representing%20business%20growth.png"],
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
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
        <link rel="canonical" href="https://travler.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
