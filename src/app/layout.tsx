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
  title: {
    default: 'QUANTIFYRE | AI-Powered Digital Solutions',
    template: '%s | QUANTIFYRE'
  },
  description: 'Quantum-scale digital transformation powered by AI. We specialise in AI Automations, Custom Software, High-Performance Websites, and Digital Marketing Strategies.',
  keywords: ['AI Automations', 'Software Engineering', 'Digital Marketing', 'Website Development', 'Machine Learning Solutions', 'Custom AI Tools', 'QUANTIFYRE LLP'],
  authors: [{ name: 'QUANTIFYRE' }],
  creator: 'QUANTIFYRE',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://quantifyre.ai',
    title: 'QUANTIFYRE | The Future, Faster.',
    description: 'Bespoke AI solutions and digital engineering for high-growth enterprises.',
    siteName: 'QUANTIFYRE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QUANTIFYRE | AI-Powered Digital Solutions',
    description: 'Transforming businesses with intelligent automation and cutting-edge tech.',
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
