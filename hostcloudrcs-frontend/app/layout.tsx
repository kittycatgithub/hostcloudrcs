import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://hostcloud.in'),
  title: {
    default: 'Host Cloud | Digital solutions for ambitious businesses',
    template: '%s | Host Cloud',
  },
  description: 'Host Cloud helps ambitious businesses grow with high-performance web development, digital marketing, and AWS seller account support.',
  keywords: ['web development', 'digital marketing', 'AWS seller account handling', 'IT company', 'Host Cloud'],
  authors: [{ name: 'Host Cloud' }],
  creator: 'Host Cloud',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  openGraph: {
    type: 'website',
    siteName: 'Host Cloud',
    title: 'Host Cloud | Digital solutions for ambitious businesses',
    description: 'Build better. Grow faster. Operate smarter with Host Cloud.',
    images: [{ url: '/images/rcs.jpg', width: 1200, height: 630, alt: 'Host Cloud logo' }],
  },
  twitter: { card: 'summary_large_image', title: 'Host Cloud | Digital solutions for ambitious businesses', description: 'Build better. Grow faster. Operate smarter with Host Cloud.', images: ['/images/rcs.jpg'] },
  icons: { icon: '/images/rcs.jpg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
