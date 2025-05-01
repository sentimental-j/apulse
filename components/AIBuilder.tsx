"use client";
import { useState } from "react";
import { AIChat } from "./AIChat";
import { MockupPreview } from "./MockupPreview";
import { motion } from "framer-motion";

export function AIBuilder() {
  const [state, setState] = useState({
    businessName: "",
    industry: "",
    keywords: [],
    filling: {},
    finished: false,
  });

  return (
    <section className="flex flex-col md:flex-row md:space-x-9 rounded-3xl bg-gradient-to-tr from-white/7 to-blue-300/5 shadow-2xl shadow-black/25 border border-white/10 p-2 md:p-5 backdrop-blur-lg">
      <div className="md:w-1/2 w-full">
        <AIChat state={state} setState={setState} />
      </div>
      <motion.div
        className="md:w-1/2 w-full md:mt-0 mt-10 relative"
        initial={{ opacity: 0, x: 48 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.63, ease: "easeOut" }}
      >
        <MockupPreview state={state} />
      </motion.div>
    </section>
  );
}