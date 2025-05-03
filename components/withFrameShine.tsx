"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function withFrameShine(Component: React.ComponentType<any>) {
  return function WrappedWithShine({ className = "", ...props }: Props) {
    return (
      <motion.div
        className={`relative overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-md ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-xl opacity-10 animate-pulse z-0" />
        <div className="relative z-10 p-4">
          <Component {...props} />
        </div>
      </motion.div>
    );
  };
}
