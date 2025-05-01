"use client";
import { useState } from "react";
import { TemplateBlock } from "./TemplateBlock";
import { motion } from "framer-motion";

const defaultSections = {
  hero: {
    headline: "Welcome to Your Brand",
    sub: "Premium website, AI-powered and stunningly modern.",
  },
  about: {
    title: "About Us",
    text: "We're here to supercharge your digital presence. Built with Apulse AI.",
  },
  services: {
    title: "Our Services",
    items: [
      "Website Design",
      "Brand Strategy",
      "AI Assistance"
    ],
  },
  contact: {
    title: "Contact",
    text: "Let's launch your business. Drop us a message.",
    action: "Start Now",
  },
};

function generateTSXCode(sections) {
  return `import React from "react";
export default function MyWebsite() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white font-sans">
      <section className="py-24 text-center">
        <h1 className="text-5xl font-bold mb-5 bg-gradient-to-tr from-pink-300 via-white to-yellow-400 bg-clip-text text-transparent">${sections.hero.headline}</h1>
        <p className="text-xl text-white/80">${sections.hero.sub}</p>
      </section>
      <section className="max-w-2xl mx-auto pb-14 text-center">
        <h2 className="text-3xl font-semibold mb-3">${sections.about.title}</h2>
        <p className="text-white/75">${sections.about.text}</p>
      </section>
      <section className="max-w-2xl mx-auto pb-14 text-center">
        <h2 className="text-3xl font-semibold mb-3">${sections.services.title}</h2>
        <ul className="list-none text-lg text-white/80 space-y-2">
          ${sections.services.items.map(x => `<li>• ${x}</li>`).join("\n          ")}
        </ul>
      </section>
      <section className="max-w-2xl mx-auto pb-24 text-center">
        <h2 className="text-3xl font-semibold mb-3">${sections.contact.title}</h2>
        <p>${sections.contact.text}</p>
        <button className="mt-6 px-8 py-3 rounded-xl bg-gradient-to-tr from-pink-300 to-yellow-400 text-black font-bold shadow-lg">
          ${sections.contact.action}
        </button>
      </section>
    </main>
  );
}`;
}

export function MockupPreview({ state }) {
  const sections =
    state && state.filling && state.finished ? state.filling : defaultSections;
  const [copied, setCopied] = useState(false);

  const exportCode = () => {
    navigator.clipboard.writeText(generateTSXCode(sections));
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <motion.div
      id="mockup-preview"
      className="
        font-sans bg-white/5 border border-white/10 rounded-xl
        p-8 shadow-2xl shadow-black/25 relative min-h-[640px] flex flex-col
        "
      initial={{ scale: 0.97, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute top-2 right-2">
        <button
          className="flex items-center gap-2 px-3 py-1.5 bg-accentBronze/80 hover:bg-accentPink text-black font-semibold rounded-lg shadow transition focus:outline-none"
          onClick={exportCode}
        >
          {copied ? (
            <>
              <span className="material-icons" style={{fontSize:'20px'}}>check</span>
              Copied!
            </>
          ) : (
            <>
              <span className="material-icons" style={{fontSize:'20px'}}>content_copy</span>
              Copy .tsx
            </>
          )}
        </button>
      </div>

      <TemplateBlock type="hero" section={sections.hero} />
      <TemplateBlock type="about" section={sections.about} />
      <TemplateBlock type="services" section={sections.services} />
      <TemplateBlock type="contact" section={sections.contact} />
    </motion.div>
  );
}