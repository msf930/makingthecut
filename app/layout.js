import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import {ReactLenis} from '@/app/utils/lenis';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Making the Cut Landscaping",
  description: "From start to finish we guarantee you will be met with a friendly face. Upfront costs. No hidden costs. Licensed & Insured.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <ReactLenis root>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            {children}
          </body>
        </ReactLenis>
    </html>
  );
}
