"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background portrait image */}
      <div className="absolute inset-0">
        <Image
          src="/portrait.jpg"
          alt="Sreelal"
          fill
          className="object-cover object-[center_25%]"
          priority
          quality={90}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-20 sm:px-8 md:px-16 md:pb-24 lg:px-20">
        {/* Large name typography */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            className="text-[clamp(4rem,15vw,14rem)] font-black leading-[0.85] tracking-tighter text-white uppercase"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            SREELAL
          </motion.h1>
        </div>

        <div className="overflow-hidden">
          <motion.div
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
            className="text-[clamp(4rem,15vw,14rem)] font-black leading-[0.85] tracking-tighter text-white uppercase"
            style={{ fontFamily: "var(--font-geist-sans)" }}
          >
            <span className="text-white/20">.</span>DEV
          </motion.div>
        </div>

        {/* Subtitle with typing effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 flex items-center gap-4"
        >
          <span className="h-[1px] w-12 bg-white/50" />
          <p className="text-[10px] sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-white/60 uppercase font-[family-name:var(--font-geist-mono)]">
            Software Engineer &mdash; Frontend / Backend / Full Stack
          </p>
        </motion.div>

        {/* Terminal-style tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-4 font-[family-name:var(--font-geist-mono)] text-xs text-white/40"
        >
          <span className="text-green-400/60">&#x276F;</span> building digital experiences that matter
          <span className="inline-block w-2 h-4 bg-white/50 ml-1 animate-pulse" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase font-[family-name:var(--font-geist-mono)]">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-[1px] bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
