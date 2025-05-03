// File: components/MockupEngine/DevicePreview.tsx
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const devices = ["Desktop", "Tablet", "Mobile"];

export default function DevicePreview() {
  const [active, setActive] = useState("Desktop");

  return (
    <div className="mt-12 w-full">
      <div className="flex justify-center gap-4 mb-6">
        {devices.map((device) => (
          <button
            key={device}
            className={clsx(
              "px-4 py-2 rounded-full border border-white/20 text-sm",
              active === device
                ? "bg-white text-black"
                : "text-white hover:bg-white/10 transition"
            )}
            onClick={() => setActive(device)}
          >
            {device}
          </button>
        ))}
      </div>

      <motion.div
        key={active}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-4xl mx-auto aspect-video bg-white/5 rounded-xl border border-white/10 flex items-center justify-center text-white/60"
      >
        {active} Preview Placeholder
      </motion.div>
    </div>
  );
}
