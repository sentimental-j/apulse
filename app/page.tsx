'use client';
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { FinalCTA } from "@/components/FinalCTA";
import { AIBuilder } from "@/components/AIBuilder";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-white overflow-x-hidden">
      {/* Abstract blobs */}
      <div className="fixed -z-10 top-0 left-0 right-0 w-[110vw] h-[110vh] pointer-events-none">
        <div className="absolute left-[-30vw] top-[-20vh] w-[80vw] h-[80vh] rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-accentPink to-accentBronze mix-blend-lighten animate-blob-move1" />
        <div className="absolute right-[-40vw] bottom-[-10vh] w-[80vw] h-[80vh] rounded-full blur-3xl opacity-50 bg-gradient-to-tr from-blue-400 to-accentPink mix-blend-screen animate-blob-move2" />
      </div>
      {/* Grain overlay */}
      <div className="fixed inset-0 -z-10 pointer-events-none opacity-50 mix-blend-soft-light">
        <img src="/grain.svg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="max-w-5xl mx-auto px-6">
        <Hero />
        <Features />
        <FinalCTA />
        <section id="builder" className="mt-32">
          <AIBuilder />
        </section>
      </div>
    </main>
  );
}