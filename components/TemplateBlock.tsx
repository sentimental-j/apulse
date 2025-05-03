"use client";
import { motion } from "framer-motion";
import withFrameShine from "./withFrameShine";
import TemplateCard from "./TemplateCard";

const ShinyTemplate = withFrameShine(TemplateCard);

const mockups = [
  { id: 1, label: "E-commerce", color: "#0ea5e9" },
  { id: 2, label: "Portfolio", color: "#8b5cf6" },
  { id: 3, label: "Landing Page", color: "#ec4899" },
  { id: 4, label: "SaaS", color: "#f59e0b" },
];

export default function TemplateBlock() {
  return (
    <section className="w-full px-6 py-24 max-w-6xl mx-auto" id="start">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        Choose from beautiful, AI-optimized templates
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {mockups.map((template, index) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 p-6 rounded-xl border border-white/10 shadow hover:scale-105 transition-transform cursor-pointer"
          >
            <div
              className="w-full h-40 rounded-md mb-4"
              style={{ background: template.color }}
            />
            <h3 className="text-lg font-medium">{template.label}</h3>
            <p className="text-sm opacity-70 mt-1">
              Preview coming soon...
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
