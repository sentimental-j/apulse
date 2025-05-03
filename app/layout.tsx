// File: app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const satoshi = localFont({
  src: [
    {
      path: "../public/Satoshi-Variable.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/Satoshi-VariableItalic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apulse",
  description: "AI-powered website builder that feels like magic.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${satoshi.variable} scroll-smooth`}>
      <body className="bg-black text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
