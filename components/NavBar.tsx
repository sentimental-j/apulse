// File: components/NavBar.tsx

"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NavBar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tight">Apulse</div>
        <Link
          href="#start"
          className="text-sm font-medium border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
        >
          Start Building
        </Link>
      </div>
    </motion.nav>
  );
}
