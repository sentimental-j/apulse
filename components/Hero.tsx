"use client";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="pt-24 pb-16 flex flex-col items-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight bg-gradient-to-tr from-accentPink via-white to-accentBronze bg-clip-text text-transparent drop-shadow-hero-glow"
        style={{ lineHeight: "1.1" }}
      >
        Your competitors are online.<br />
        <span className="inline-block">Why aren’t you?</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl text-xl md:text-2xl text-neutral-300 mb-8"
      >
        Build a stunning, AI-generated website for your business in minutes.<br />
        <span className="text-accentPink/80">No code required</span>, premium results.
      </motion.p>
      <motion.a
        href="#builder"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="px-8 py-4 rounded-xl bg-gradient-to-tr from-accentPink via-accentBronze to-blue-400 text-xl font-bold shadow-lg shadow-accentPink/20 backdrop-blur-xl border border-white/10 hover:bg-opacity-90 transition-all duration-200"
      >
        Let’s Build Yours
      </motion.a>
    </section>
  );
}
