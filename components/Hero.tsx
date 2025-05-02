"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-4 text-center">
      {/* Top Navbar */}
      <div className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-5 z-10">
        <div className="text-xl font-bold tracking-tight">Apulse</div>
        <Link
          href="#start"
          className="text-sm font-medium border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
        >
          Start Building
        </Link>
      </div>

      {/* Headline + CTA */}
      <motion.div
        className="max-w-3xl z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-6xl font-semibold leading-tight">
          Your competitors are already online. <br />
          Let’s <span className="text-purple-400">outshine</span> them.
        </h1>
        <p className="mt-4 text-lg text-white/70">
          The AI-powered website builder that feels like magic.
        </p>
        <Link
          href="#start"
          className="inline-block mt-6 text-sm font-medium bg-white text-black px-6 py-3 rounded-full shadow hover:scale-105 transition"
        >
          Start Building
        </Link>
      </motion.div>
    </section>
  );
}
