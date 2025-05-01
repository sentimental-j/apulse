"use client";
import { motion } from "framer-motion";

export function TemplateBlock({ type, section }) {
  if (!section) return null;
  switch (type) {
    case "hero":
      return (
        <motion.section
          className="py-16 md:py-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-5 bg-gradient-to-tr from-accentPink via-white to-accentBronze bg-clip-text text-transparent drop-shadow-hero-glow">
            {section.headline}
          </h1>
          <p className="text-xl text-white/80">{section.sub}</p>
        </motion.section>
      );
    case "about":
      return (
        <motion.section
          className="max-w-2xl mx-auto pb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl font-semibold mb-3">{section.title}</h2>
          <p className="text-white/75">{section.text}</p>
        </motion.section>
      );
    case "services":
      return (
        <motion.section
          className="max-w-2xl mx-auto pb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-semibold mb-3">{section.title}</h2>
          <ul className="list-none text-lg text-white/80 space-y-2">
            {section.items?.map((x, i) => (
              <li key={i}>• {x}</li>
            ))}
          </ul>
        </motion.section>
      );
    case "contact":
      return (
        <motion.section
          className="max-w-2xl mx-auto pb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-semibold mb-3">{section.title}</h2>
          <p>{section.text}</p>
          <button className="mt-6 px-8 py-3 rounded-xl bg-gradient-to-tr from-accentPink to-accentBronze text-black font-bold shadow-lg transition hover:opacity-90">
            {section.action}
          </button>
        </motion.section>
      );
    default:
      return null;
  }
}