import "./globals.css";
import { Inter } from "next/font/google";
// If you downloaded Satoshi Variable font file, place it in /public and import:
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// Satoshi Variable import (adjust src if your file is elsewhere)
const satoshi = localFont({
  src: "../public/Satoshi-Variable.ttf", // or wherever you placed it
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata = {
  title: "Apulse - Premium Landing/AI Builder",
  description:
    "Create beautiful, responsive websites through conversation. Framer-quality, built with Next.js & Tailwind.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${satoshi.variable}`}>
      <body className="relative min-h-screen bg-[#141414] text-[#e6e6e6] font-satoshi antialiased overflow-x-hidden">
        {/* Background overlays */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          {/* Framer-style blurred blob gradient (optional) */}
          {/* <img src="/assets/framer-blur-bg.png" alt="" className="w-full h-full object-cover opacity-60" /> */}
          {/* Subtle grain */}
          <img src="/grain.svg" alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        {children}
      </body>
    </html>
  );
}
