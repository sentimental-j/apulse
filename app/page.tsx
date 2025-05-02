'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main className="flex flex-col items-center px-6 md:px-12 pt-20">
        <Hero />

        <section className="w-full max-w-7xl min-h-[500px] mt-16 mb-32 border border-muted/10 rounded-3xl bg-background/30 backdrop-blur-md p-10 text-muted-foreground text-center flex flex-col items-center justify-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl"
          >
            👷‍♂️ Placeholder for AI chat and mockup engine
          </motion.p>
        </section>
      </main>
    </>
  );
}
