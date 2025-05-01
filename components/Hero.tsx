"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { PurpleBlob } from "./purple-blob";

export function Hero() {
  return (
    <section className="relative py-20 max-w-7xl mx-auto px-6 md:px-12 flex flex-col-reverse lg:flex-row items-center gap-12">
      <motion.div
        className="flex-1 text-center lg:text-left"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="inline-block rounded-full bg-purple/20 px-3 py-1 text-sm text-purple-light mb-6">
          Introducing Apulse
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-accentPink to-purple bg-clip-text text-transparent drop-shadow-hero-glow leading-tight">
          Create stunning websites<br className="hidden md:block" />
          through conversation
        </h1>
        <p className="mt-6 max-w-lg text-white/70 text-lg">
          Build beautiful, responsive websites for your business with our intuitive mock-up engine. No coding
          required.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
          <Button size="lg" className="rounded-full bg-purple hover:bg-purple-dark">
            Start Building Free
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-white/20 text-white hover:bg-white/10"
          >
            See Examples
          </Button>
        </div>
      </motion.div>

      <motion.div
        className="relative flex-1 max-w-md md:max-w-lg w-full rounded-[2.5rem] matte-glass p-4 shadow-xl overflow-hidden"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="absolute top-0 right-0 left-0 h-7 rounded-t-[2.5rem] bg-black/50 flex items-center justify-center z-10">
          <div className="h-1 w-24 rounded-full bg-white/20"></div>
        </div>
        <Image
          src="/placeholder.svg"
          alt="Website builder interface"
          width={400}
          height={600}
          className="rounded-2xl"
          priority
        />
      </motion.div>

      <PurpleBlob size="xl" opacity="low" className="absolute -top-[400px] -right-[300px]" />
      <PurpleBlob size="lg" opacity="low" className="absolute -bottom-[200px] -left-[200px]" animation="float" />
      <PurpleBlob size="md" opacity="medium" className="absolute top-[30%] -left-[100px]" animation="pulse" />
    </section>
  );
}
