// File: app/page.tsx
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import CardGrid from "@/components/CardGrid";
import TemplateBlock from "@/components/TemplateBlock";
import ParticlesBackground from "@/components/ParticlesBackground";
import MockupEngine from "@/components/MockupEngine/index";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white font-sans">
      {/* Background animation */}
      <ParticlesBackground />

      {/* Navigation bar */}
      <NavBar />

      {/* Hero section */}
      <Hero />

      {/* Sliding cards */}
      <CardGrid />

      {/* Template selection block */}
      <TemplateBlock />

      {/* AI Builder Chat + Mockup preview (placeholder for now) */}
      <MockupEngine />

      {/* To be continued: Reviews, FAQ, Footer... */}
    </main>
  );
}
