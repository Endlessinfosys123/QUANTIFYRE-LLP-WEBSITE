import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ThemeProvider from '@/components/layout/ThemeProvider';
import MouseFollower from '@/components/ui/MouseFollower';
import NoiseOverlay from '@/components/ui/NoiseOverlay';
import PageTransition from '@/components/layout/PageTransition';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://quantifyre.ai'),
  title: {
    default: 'QUANTIFYRE | AI-Powered Digital Transformation & Software Engineering',
    template: '%s | QUANTIFYRE'
  },
  description: 'Quantum-scale digital transformation powered by AI. We specialise in AI Automations, Custom Software, High-Performance Websites, and Digital Marketing Strategies for high-growth enterprises.',
  keywords: [
    'AI Automations', 
    'Software Engineering India', 
    'Custom AI Tools', 
    'Next.js Development', 
    'Digital Marketing AI', 
    'Enterprise AI Solutions', 
    'Machine Learning Consulting', 
    'QUANTIFYRE LLP'
  ],
  authors: [{ name: 'QUANTIFYRE' }],
  creator: 'QUANTIFYRE',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://quantifyre.ai',
    title: 'QUANTIFYRE | AI-Powered Digital Solutions • The Future, Faster.',
    description: 'Bespoke AI solutions and digital engineering for high-growth enterprises. Specialising in AI automation, web development, and digital strategy.',
    siteName: 'QUANTIFYRE',
    images: [
      {
        url: '/og-image.png', // We should ensure this exists or create it
        width: 1200,
        height: 630,
        alt: 'QUANTIFYRE | AI-Powered Digital Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QUANTIFYRE | AI-Powered Digital Solutions',
    description: 'Transforming businesses with intelligent automation and cutting-edge tech.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  other: {
    'google-adsense-account': 'ca-pub-4465611451905906',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'QUANTIFYRE LLP',
  image: 'https://quantifyre.ai/favicon.png',
  '@id': 'https://quantifyre.ai',
  url: 'https://quantifyre.ai',
  telephone: '',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '',
    addressLocality: '',
    postalCode: '',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 0,
    longitude: 0,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday'
    ],
    opens: '09:00',
    closes: '18:00'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4465611451905906"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`} style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-foreground)' }}>
        <ThemeProvider>
          <NoiseOverlay />
          <MouseFollower />
          <Navbar />
          <main className="flex-grow pt-0">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
