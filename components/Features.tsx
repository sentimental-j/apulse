"use client";
import { motion } from "framer-motion";

const features = [
  {
    title: "No Code, No Headache",
    desc: "Our AI does the hard work. You answer simple questions; your site builds itself.",
    emoji: "🤖",
  },
  {
    title: "Design That Wows",
    desc: "Modern, mobile-friendly layouts with iOS-level polish and effects. Impress at first glance.",
    emoji: "✨",
  },
  {
    title: "Fits Your Brand",
    desc: "AI personalizes content, images, and colors for your industry. The result? 100% you.",
    emoji: "🎨",
  },
  {
    title: "Launch in Minutes",
    desc: "From idea to live site faster than ever before, with code export for developers.",
    emoji: "🚀",
  },
];

export function Features() {
  return (
    <section className="py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            delay: 0.15 + i * 0.13,
            duration: 0.55,
            ease: "easeOut",
          }}
          className="bg-white/10 border border-white/10 shadow-xl shadow-black/20 rounded-[2rem] px-8 py-9 flex flex-col justify-between min-h-[220px]
          backdrop-blur-2xl  hover:scale-[1.034] hover:border-accentPink/50 transition-all group"
          style={{
            boxShadow: "0 6px 48px 0 rgba(255,182,193,0.11), 0 1.5px 6px 0 rgba(0,0,0,0.05)",
          }}
        >
          <div className="text-3xl mb-3">{f.emoji}</div>
          <div className="font-semibold text-lg mb-1 text-white/90 drop-shadow-glow">{f.title}</div>
          <div className="text-neutral-300 text-md">{f.desc}</div>
        </motion.div>
      ))}
    </section>
  );
}