// components/ParticlesBackground.tsx
"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 30,
          fullScreen: false,
          background: {
            color: "#141414",
          },
          particles: {
            number: {
              value: 6,
              density: { enable: true, area: 800 },
            },
            color: {
              value: ["#366585", "#2A3F4D", "#112F38", "#000000", "#4D3685"],
            },
            shape: {
              type: "triangle",
            },
            opacity: { value: 1 },
            size: {
              value: { min: 60, max: 240 },
              random: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "out" },
              speed: 1,
            },
            rotate: {
              value: { min: 0, max: 5 },
              random: true,
            },
          },
        }}
      />
    </div>
  );
}
