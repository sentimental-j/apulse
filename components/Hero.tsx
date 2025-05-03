'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-center px-4">
      {/* Background blur */}
      <div className="absolute inset-0 backdrop-blur-[120px] z-0" />

      {/* Grain overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 mix-blend-soft-light opacity-[0.05] bg-[url('/grain.png')] bg-repeat" />

      {/* Content */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-6xl md:text-7xl font-bold text-white z-20"
      >
        Your competitors are already <br />
        online. Let’s{' '}
        <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
          outshine
        </span>{' '}
        them.
      </motion.h1>
      <p className="mt-6 text-lg sm:text-xl text-gray-300 z-20">
        The AI-powered website builder that feels like magic.
      </p>
      <Link
        href="#start"
        className="mt-8 inline-block rounded-full bg-white px-6 py-3 text-black font-medium hover:bg-gray-100 z-20"
      >
        Start Building
      </Link>
    </section>
  );
}
