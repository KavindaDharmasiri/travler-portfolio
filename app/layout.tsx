import type { Metadata } from "next";
import { Geist, IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Travler | Backend Systems & Full-Stack Platforms",
    template: "%s | Travler",
  },
  description:
    "Travler builds backend systems and full-stack platforms — from fraud detection engines to e-commerce storefronts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
        />
      </head>
      <body
        className={`${geist.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable} antialiased bg-surface-background text-on-surface font-body-md grid-bg min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
