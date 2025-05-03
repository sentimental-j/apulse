// File: app/page.tsx
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import CardGrid from "@/components/CardGrid";
import TemplateBlock from "@/components/TemplateBlock";
import ParticlesBackground from "@/components/ParticlesBackground";
import MockupEngine from "@/components/MockupEngine/index";
import FrameShine from "@/components/FrameShine";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white font-sans">
      {/* Stationary animated background triangles */}
      <ParticlesBackground />

      {/* Navigation bar with logo and CTA */}
      <NavBar />

      {/* Hero section with motion headline */}
      <Hero />

      {/* Section with sliding cards/features */}
      <CardGrid />

      {/* Template selection block with mock labels */}
      <TemplateBlock />

      {/* MockupEngine (AI Builder + Preview block placeholder) */}
      <MockupEngine />

      {/* Frame shine animation (can be reused on other elements) */}
      <FrameShine />

      {/* Footer section (can include contact, social links, etc.) */}
      <Footer />

      {/* TODOs for next updates:
          - Reviews.tsx
          - FAQ.tsx
          - Payment Page
          - Contact Page (GPT-based form)
          - Easter Egg interactive page
      */}
    </main>
  );
}
