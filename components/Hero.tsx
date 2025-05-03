// File: components/Hero.tsx

"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 pt-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl z-10"
      >
        <h1 className="text-4xl sm:text-6xl font-semibold leading-tight tracking-tight">
          Your competitors are already online.
          <br />
          Let’s <span className="text-purple-400">outshine</span> them.
        </h1>
        <p className="mt-6 text-lg text-white/70">
          The AI-powered website builder that feels like magic.
        </p>
        <Link
          href="#start"
          className="inline-block mt-8 text-sm font-medium bg-white text-black px-6 py-3 rounded-full shadow hover:scale-105 transition"
        >
          Start Building
        </Link>
      </motion.div>
    </section>
  );
}
