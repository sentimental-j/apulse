import "./globals.css";
import type { Metadata } from "next";
import { Satoshi } from "next/font/google";

const satoshi = Satoshi({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Apulse",
  description: "AI-powered website builder",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={satoshi.className}>
      <body>
        {/* Grain layer */}
        <div id="grain" />
        
        {/* Blur + content */}
        <div className="blur-wrapper">{children}</div>
      </body>
    </html>
  );
}
