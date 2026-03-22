import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://timmatyas.com'),
  title: {
    default: 'Tim Matyas | Software Engineering Leader, Entrepreneur, Percussionist',
    template: '%s | Tim Matyas',
  },
  description:
    'Tim Matyas - Software engineering leader, entrepreneur, and percussionist in the Greater Pittsburgh Area. Leadership consulting, percussion lessons, and more.',
  openGraph: {
    type: 'website',
    siteName: 'Tim Matyas',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tim Matyas',
  url: 'https://timmatyas.com',
  jobTitle: 'Software Engineering Leader',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pittsburgh',
    addressRegion: 'PA',
    addressCountry: 'US',
  },
  sameAs: [
    'https://www.linkedin.com/in/tim-matyas/',
    'https://github.com/matyastr',
    'https://www.youtube.com/@timmatyas4004',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700;900&family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
