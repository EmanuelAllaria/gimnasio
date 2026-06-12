import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import { gym } from "@/data/gym";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(gym.url),
  title: {
    default: `${gym.name} | Gimnasio Premium en Buenos Aires`,
    template: `%s | ${gym.name}`,
  },
  description: gym.subheadline,
  keywords: [
    "gimnasio Buenos Aires",
    "gimnasio premium",
    "crossfit Buenos Aires",
    "entrenamiento personal",
    "FORGE Fitness",
    "musculación",
    "spinning",
    "boxeo",
    "yoga",
    "gimnasio Corrientes",
  ],
  authors: [{ name: gym.name }],
  creator: gym.name,
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: gym.url,
    siteName: gym.name,
    title: `${gym.name} | ${gym.tagline}`,
    description: gym.subheadline,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${gym.name} - Gimnasio premium en Buenos Aires`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${gym.name} | ${gym.tagline}`,
    description: gym.subheadline,
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: gym.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${bebasNeue.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <JsonLd />
      </head>
      <body className="antialiased bg-background text-foreground">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
