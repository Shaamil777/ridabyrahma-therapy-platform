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
