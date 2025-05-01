import "./globals.css"; // Add this to the top of layout.tsx
export const metadata = {
  title: "Apulse",
  description: "AI-powered website builder that feels like magic.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-white font-sans">{children}</body>
    </html>
  );
}
