import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Virasat - Explore India’s Cultural Heritage',
  description: "Uncover India's hidden cultural gems, heritage sites, art, and traditions. Explore, learn, and experience India's rich history with The Virasat.",
  keywords: [
    'Indian culture',
    'heritage tourism',
    'historical places in India',
    'Indian traditions',
    'Indian art',
    'travel India',
    'cultural experiences',
    'monuments of India',
  ],
  openGraph: {
    title: 'The Virasat - India’s Cultural Heritage',
    description: "Explore India's rich cultural heritage, historical landmarks, art, and traditions. Discover and experience the beauty of India.",
    url: 'https://thevirasat.com',
    siteName: 'The Virasat',
    images: [
      {
        url: 'https://thevirasat.com/og-image.jpg', // Replace with an actual image URL
        width: 1200,
        height: 630,
        alt: 'The Virasat - Indian Cultural Heritage',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@TheVirasat', // Replace with your actual Twitter handle
    title: 'The Virasat - India’s Cultural Heritage',
    description: "Explore India's rich cultural heritage, historical landmarks, art, and traditions. Discover and experience the beauty of India.",
    images: ['https://thevirasat.com/twitter-image.jpg'], // Use an actual image URL
  },
  robots: 'index, follow', // Ensures search engines can index your pages
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
