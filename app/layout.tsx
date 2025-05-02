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
      <body className={`${satoshi.className} antialiased`}>{children}</body>
    </html>
  );
}
