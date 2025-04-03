import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Virasat',
  description: "Discover India's Rich Cultural Heritage",
  openGraph: {
    title: 'The Virasat',
    description: "Explore India's rich cultural heritage, art, and traditions.",
    url: 'https://thevirasat.com', // Make sure to use your actual domain here
    siteName: 'The Virasat',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}