import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ThemeProvider from '@/components/layout/ThemeProvider';
import MouseFollower from '@/components/ui/MouseFollower';
import PageTransition from '@/components/layout/PageTransition';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'QUANTIFYRE | AI-Powered Digital Solutions',
  description: 'Transform your business with AI-powered digital marketing, website development, software solutions, and intelligent automation. The Future, Faster.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`} style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-foreground)' }}>
        <ThemeProvider>
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
