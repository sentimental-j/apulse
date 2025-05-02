// File: app/layout.tsx

import "./globals.css";
import { Satoshi } from "next/font/local";
import type { Metadata } from "next";

const satoshi = Satoshi({
  src: [
    {
      path: "../public/Satoshi-Variable.ttf",
      weight: "400",
      style: "normal"
    },
    {
      path: "../public/Satoshi-VariableItalic.ttf",
      weight: "400",
      style: "italic"
    }
  ],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Apulse",
  description: "AI-powered website builder that feels like magic."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-black text-white">
      <body className={`${satoshi.className} antialiased relative overflow-x-hidden`}>
        {/* Blurred animated background bulb */}
        <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[60vw] h-[60vw] bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse-slow z-0" />
        
        {/* Main content */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
