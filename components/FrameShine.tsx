"use client";
import { useEffect, useRef } from "react";

export default function FrameShine() {
  const shineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!shineRef.current) return;
      shineRef.current.classList.remove("animate-shine");
      void shineRef.current.offsetWidth; // reflow to restart animation
      shineRef.current.classList.add("animate-shine");
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={shineRef}
      className="pointer-events-none absolute inset-0 z-10 rounded-xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 animate-shine"
    />
  );
}
