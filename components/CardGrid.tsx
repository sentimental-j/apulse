"use client";

import { motion } from "framer-motion";

const cardData = [
  { title: "Smart builder", desc: "Instant mockups with AI" },
  { title: "Premium templates", desc: "Fully customizable" },
  { title: "Lightning fast", desc: "Built on cutting-edge stack" },
  { title: "Export to code", desc: "Copy clean TSX snippets" },
];

export default function CardGrid() {
  return (
    <section className="w-full py-24 px-6 max-w-6xl mx-auto relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardData.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-md backdrop-blur-lg hover:scale-[1.03] transition-transform"
          >
            <h3 className="text-xl font-semibold mb-1">{card.title}</h3>
            <p className="text-sm text-white/80">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
