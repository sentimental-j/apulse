"use client";
import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <div className="flex flex-col items-center mt-20">
      <motion.a
        href="#builder"
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="px-7 py-4 rounded-2xl bg-gradient-to-r from-accentPink to-blue-400 text-lg font-bold shadow-xl shadow-accentPink/20 drop-shadow-glow backdrop-blur-lg border border-white/20 hover:from-accentBronze/60 hover:to-accentPink/60 transition-all duration-150"
      >
        Make This Real
      </motion.a>
      <div className="mt-4 mb-2 text-neutral-400 text-sm font-medium">Start building now — it’s free.</div>
    </div>
  );
}