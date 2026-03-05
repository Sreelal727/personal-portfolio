"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const stats = [
  { number: "42", label: "Websites Built" },
  { number: "5", label: "ERP Solutions" },
  { number: "12", label: "Web Applications" },
  { number: "22", label: "Mobile Applications" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="relative min-h-screen bg-black py-20 sm:py-32 px-5 sm:px-8 md:px-16 lg:px-20 lg:pr-32"
      ref={ref}
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <span className="text-xs tracking-[0.3em] text-white/30 uppercase font-[family-name:var(--font-geist-mono)]">
          01 / ABOUT
        </span>
        <div className="mt-3 h-[1px] w-16 bg-white/30" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src="/hackathon.png"
              alt="Sreelal - 21x International Hackathon Winner"
              fill
              className="object-cover"
            />
          </div>
          <p className="mt-4 text-xs tracking-[0.2em] text-white/30 uppercase font-[family-name:var(--font-geist-mono)]">
            Software Engineer &mdash; India
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:pt-12"
        >
          <h2 className="text-[clamp(1.8rem,4vw,3.5rem)] font-bold leading-[1.15] tracking-tight mb-8">
            Building the web,
            <br />
            <span className="text-white/40">one pixel at a time.</span>
          </h2>

          <div className="space-y-6 text-white/60 text-base leading-relaxed max-w-lg">
            <p>
              I&apos;m Sreelal, a Software Engineer who thrives at the
              intersection of design and technology. From crafting pixel-perfect
              frontends to architecting robust backend systems, I bring ideas to
              life across the full stack.
            </p>
            <p>
              With experience building everything from corporate websites and
              e-commerce platforms to enterprise ERP solutions and client
              portals, I approach each project with a keen eye for detail and a
              commitment to clean, performant code.
            </p>
            <p>
              My work spans industries — from robotics and architecture to
              healthcare and finance — always with the goal of creating digital
              experiences that are both beautiful and functional.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                className="group relative border border-white/10 p-4 sm:p-6 transition-all duration-500 hover:border-white/40 hover:bg-white/[0.03] overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/[0.03] to-transparent" />
                <span className="block text-3xl md:text-4xl font-black tracking-tight text-white transition-transform duration-300 group-hover:scale-105">
                  {stat.number}
                </span>
                <span className="block mt-2 text-xs tracking-[0.2em] text-white/40 uppercase font-[family-name:var(--font-geist-mono)]">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
