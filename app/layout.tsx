import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import FloatingToast from "./components/ui/FloatingToast";
import { Quicksand, Playfair_Display, Inter, Cormorant_Garamond } from 'next/font/google';
import type { Metadata } from "next";

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-quicksand',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-inter',
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant-garamond',
});

export const metadata: Metadata = {
  title: 'Rida By Rahma',
  description: 'Compassionate, expert online psychiatric care and mental health wellness.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} ${playfair.variable} ${inter.variable} ${cormorantGaramond.variable} font-quicksand`}>
        <Navbar />
        {children}
        <Footer />
        <FloatingToast />
      </body>
    </html>
  );
}
