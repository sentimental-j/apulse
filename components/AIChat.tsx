"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    key: "businessName",
    ai: "Hi! Let’s bring your business online. First, what’s your business name?",
    userPlaceholder: "Enter your business name...",
  },
  {
    key: "industry",
    ai: "Great! What industry are you in?",
    userPlaceholder: "E.g. ‘coffee shop’, ‘lawyer’, ‘personal trainer’...",
  },
  {
    key: "keywords",
    ai: "Awesome. Give a few keywords that describe your vibe, products, or values.",
    userPlaceholder: "E.g. ‘family, sustainable, modern, neon’...",
  },
];

function gptSectionFiller({ businessName, industry, keywords }) {
  // Simulate GPT-style output (replace with API call if needed)
  return {
    hero: {
      headline: `Welcome to ${businessName || "Your Brand"}`,
      sub: `Premium ${industry || "business"} website, built around: ${keywords && keywords.length ? keywords.join(", ") : "your values"}.`,
    },
    about: {
      title: "About Us",
      text: `At ${businessName || "our company"}, we’re redefining ${industry || "our field"} with a focus on ${keywords && keywords[0] ? keywords[0] : "innovation"}.`,
    },
    services: {
      title: "Our Services",
      items: [
        "Consultations tailored to your needs",
        "Modern solutions with a personal touch",
        "Efficient, friendly, and always reliable",
      ],
    },
    contact: {
      title: "Contact",
      text: `Ready to start? Let’s connect and put your ${industry || "business"} on the map.`,
      action: "Email us",
    },
  };
}

export function AIChat({ state, setState }) {
  const [input, setInput] = useState("");
  const [stepIdx, setStepIdx] = useState(() => {
    if (state.finished) return steps.length;
    if (state.keywords.length) return 3;
    if (state.industry) return 2;
    if (state.businessName) return 1;
    return 0;
  });
  const [messages, setMessages] = useState([
    { from: "ai", text: steps[0].ai }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus
  useEffect(() => {
    inputRef.current?.focus();
  }, [stepIdx]);

  // Step change
  useEffect(() => {
    if (stepIdx < steps.length) {
      setMessages((ms) => [...ms, { from: "ai", text: steps[stepIdx].ai }]);
    }
  }, [stepIdx]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    const newest = input.trim();
    setMessages((ms) => [...ms, { from: "user", text: newest }]);

    // Save main state for preview.
    let update = {};
    if (stepIdx === 0) update = { businessName: newest };
    if (stepIdx === 1) update = { industry: newest };
    if (stepIdx === 2) {
      update = { keywords: newest.split(/,|\n/).map(s => s.trim()).filter(Boolean) };
    }

    setTimeout(() => {
      setState((s) => {
        const next = { ...s, ...update };
        if (stepIdx === 2) {
          // All done, generate content
          next.filling = gptSectionFiller(next);
          next.finished = true;
        }
        return next;
      });
      setInput("");
      setStepIdx((idx) => idx + 1);
    }, 650); // Simulate AI "thinking"
  }

  const finished = stepIdx >= steps.length;

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 overflow-y-auto scroll-smooth pr-2 pb-3 min-h-[270px]">
        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className={`max-w-[90%] mb-2 ${m.from === "ai" ? "self-start" : "self-end"}`}
            >
              <div className={
                m.from === "ai"
                  ? "rounded-2xl bg-white/15 backdrop-blur-md px-5 py-3 text-white/90 shadow-inner ring-1 ring-white/10 text-base font-medium"
                  : "rounded-2xl bg-blue-500/80 backdrop-blur px-5 py-3 text-white font-semibold shadow-accentPink/10 shadow"
                }>
                {m.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {!finished && (
        <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
          <input
            ref={inputRef}
            type="text"
            className="flex-1 rounded-xl bg-white/10 placeholder:text-white/60 px-5 py-3 text-base text-white font-medium focus:outline-none border border-white/5 focus:border-accentPink transition ring-0"
            placeholder={steps[stepIdx]?.userPlaceholder}
            value={input}
            onChange={e => setInput(e.target.value)}
            disabled={finished}
            autoFocus
          />
          <button
            type="submit"
            className="bg-accentPink text-background font-bold px-5 py-3 rounded-xl shadow-accentPink/10 shadow hover:opacity-95 transition"
            disabled={!input.trim()}
          >
            Send
          </button>
        </form>
      )}
      {finished && (
        <div className="pt-5 flex flex-col items-center">
          <div className="text-accentPink text-md font-semibold mb-2">
            {"Your AI mockup is ready!"}
          </div>
          <a href="#mockup-preview" className="underline underline-offset-2 text-blue-300 hover:text-blue-400 text-sm">
            Scroll to see your site →
          </a>
        </div>
      )}
    </div>
  );
}