// File: components/MockupEngine/Templates.tsx
"use client";
import { motion } from "framer-motion";

const templates = [
  { id: 1, name: "E-commerce", color: "#0ea5e9" },
  { id: 2, name: "Portfolio", color: "#8b5cf6" },
  { id: 3, name: "Landing Page", color: "#ec4899" },
  { id: 4, name: "SaaS", color: "#f59e0b" },
];

export default function Templates() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {templates.map((template, i) => (
        <motion.div
          key={template.id}
          className="rounded-xl p-4 shadow-md bg-white/5 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <div
            className="h-40 rounded mb-3"
            style={{ background: template.color }}
          />
          <h3 className="font-medium text-white">{template.name}</h3>
          <p className="text-sm text-white/60">Preview coming soon...</p>
        </motion.div>
      ))}
    </div>
  );
}
