"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="relative min-h-[80vh] bg-black py-20 sm:py-32 px-5 sm:px-8 md:px-16 lg:px-20 lg:pr-32 flex flex-col justify-center"
      ref={ref}
    >
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <span className="text-xs tracking-[0.3em] text-white/30 uppercase font-[family-name:var(--font-geist-mono)]">
          05 / CONTACT
        </span>
        <div className="mt-3 h-[1px] w-16 bg-white/30" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-[clamp(2rem,6vw,5rem)] font-bold tracking-tight leading-[1.1] mb-8">
          Let&apos;s build<br />
          <span className="text-white/30">something great.</span>
        </h2>

        <div className="flex flex-col sm:flex-row gap-8 mt-12">
          <a
            href="mailto:sreelalkofficial@gmail.com"
            className="group inline-flex items-center gap-4 text-sm sm:text-lg text-white/60 transition-colors hover:text-white break-all sm:break-normal"
          >
            <span className="h-[1px] w-8 bg-white/30 transition-all duration-300 group-hover:w-12 group-hover:bg-white shrink-0" />
            sreelalkofficial@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/sreelal-k-7626281a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 text-lg text-white/60 transition-colors hover:text-white"
          >
            <span className="h-[1px] w-8 bg-white/30 transition-all duration-300 group-hover:w-12 group-hover:bg-white" />
            LinkedIn
          </a>

          <a
            href="https://github.com/Sreelal727"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 text-lg text-white/60 transition-colors hover:text-white"
          >
            <span className="h-[1px] w-8 bg-white/30 transition-all duration-300 group-hover:w-12 group-hover:bg-white" />
            GitHub
          </a>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-auto pt-32"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-t border-white/10 pt-8">
          <div className="font-[family-name:var(--font-geist-mono)] text-xs text-white/20">
            <span className="text-green-400/40">&#x276F;</span> designed &amp; developed by Sreelal
          </div>
          <div className="font-[family-name:var(--font-geist-mono)] text-xs text-white/20">
            &copy; {new Date().getFullYear()} &mdash; All rights reserved
          </div>
        </div>
      </motion.div>
    </section>
  );
}
