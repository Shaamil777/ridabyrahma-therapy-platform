import "./globals.css";
import Footer from "./components/layout/Footer";
import FloatingToast from "./components/ui/FloatingToast";
import SmoothScrolling from "./components/ui/SmoothScrolling";
import { Quicksand, Cormorant_Garamond } from 'next/font/google';
import type { Metadata } from "next";

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-quicksand',
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant-garamond',
});

export const metadata: Metadata = {
  title: {
    default: 'Riḍā by Rahma | Online Psychological Services & Therapy',
    template: '%s | Riḍā by Rahma',
  },
  description: 'Riḍā by Rahma offers compassionate, expert online psychological services. Led by Clinical Psychologist Rahmath V V, we specialize in CBT, DBT, anxiety, mood disorders, and couples therapy.',
  keywords: ['online therapy', 'clinical psychologist', 'counseling', 'mental health', 'Rahmath V V', 'CBT', 'DBT', 'couples therapy', 'anxiety treatment', 'depression help', 'online consultation'],
  authors: [{ name: 'Rahmath V V' }],
  creator: 'Rahmath V V',
  metadataBase: new URL('https://ridabyrahma.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ridabyrahma.com',
    title: 'Riḍā by Rahma | Online Psychological Services',
    description: 'Compassionate, expert online psychological services and therapy. Book your consultation today.',
    siteName: 'Riḍā by Rahma',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Riḍā by Rahma | Online Psychological Services',
    description: 'Compassionate, expert online psychological services and therapy.',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} ${cormorantGaramond.variable} font-quicksand`}>
        <SmoothScrolling>
          {children}
          <Footer />
          <FloatingToast />
        </SmoothScrolling>
      </body>
    </html>
  );
}
