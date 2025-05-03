// File: components/CardGrid.tsx

"use client";

import { motion } from "framer-motion";

const cardData = [
  {
    title: "We start with your business, not a template.",
    text: "Tell us what you do — and what matters to you. We’ll generate a design that looks and feels like your brand, not someone else’s.",
    italic: "Real business. Real voice. Real conversions.",
  },
  {
    title: "Get a custom site preview in one sitting",
    text: "We don’t pitch vague ideas. We show you how your site could look — right now. No endless back-and-forth. No mystery.",
    italic: "Just answers, fast.",
  },
  {
    title: "AI generates. Experts build",
    text: "We combine instant AI mockups with hand-picked developers who know how to deliver. No freelancers ghosting. No surprises.",
    italic: "Just a team that knows what they’re doing.",
  },
  {
    title: "Your site, live. This week.",
    text: "Most agencies drag you through weeks of wireframes. We show you the future on Day 1 — and build it by Day 5.",
    italic: "When you move fast, your business wins.",
  },
];

export default function CardGrid() {
  return (
    <section className="w-full py-28 px-6 md:px-12 bg-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-b from-white/5 to-white/0 p-8 rounded-xl border border-white/10 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4">{card.title}</h3>
            <p className="text-white/70 mb-2">{card.text}</p>
            <p className="italic text-white/50">{card.italic}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
