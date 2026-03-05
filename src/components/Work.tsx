"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    name: "Genrobotics",
    price: "$850",
    url: "https://www.genrobotics.com/",
    description: "Robotics company website with cutting-edge product showcases and animations.",
    tags: ["Website", "Frontend", "UI/UX"],
    year: "2023",
    accent: "from-cyan-500/20 to-blue-600/20",
    borderAccent: "hover:border-cyan-400/40",
    borderActive: "border-cyan-400/40",
    textAccent: "group-hover:text-cyan-300",
    textActive: "text-cyan-300",
  },
  {
    name: "RMJM",
    price: "$850",
    url: "https://rmjm.com/",
    description: "Global architecture firm's digital presence — portfolio-driven design.",
    tags: ["Website", "Full Stack", "CMS"],
    year: "2023",
    accent: "from-amber-500/20 to-orange-600/20",
    borderAccent: "hover:border-amber-400/40",
    borderActive: "border-amber-400/40",
    textAccent: "group-hover:text-amber-300",
    textActive: "text-amber-300",
  },
  {
    name: "Walkaroo",
    price: "$1,800",
    url: "https://www.walkaroo.in/",
    description: "E-commerce platform for one of India's leading footwear brands.",
    tags: ["E-commerce", "Full Stack", "Performance"],
    year: "2023",
    accent: "from-emerald-500/20 to-green-600/20",
    borderAccent: "hover:border-emerald-400/40",
    borderActive: "border-emerald-400/40",
    textAccent: "group-hover:text-emerald-300",
    textActive: "text-emerald-300",
  },
  {
    name: "SurveySparrow",
    price: "$450",
    url: "https://surveysparrow.com/",
    description: "SaaS platform website — survey & experience management tool.",
    tags: ["Website", "Frontend", "SaaS"],
    year: "2022",
    accent: "from-violet-500/20 to-purple-600/20",
    borderAccent: "hover:border-violet-400/40",
    borderActive: "border-violet-400/40",
    textAccent: "group-hover:text-violet-300",
    textActive: "text-violet-300",
  },
  {
    name: "BestDoc",
    price: "$450",
    url: "https://www.bestdocapp.com/",
    description: "Healthcare platform for patient engagement and hospital management.",
    tags: ["Healthcare", "Full Stack", "Web App"],
    year: "2022",
    accent: "from-rose-500/20 to-pink-600/20",
    borderAccent: "hover:border-rose-400/40",
    borderActive: "border-rose-400/40",
    textAccent: "group-hover:text-rose-300",
    textActive: "text-rose-300",
  },
  {
    name: "PaisaOnClick",
    price: "$1,400",
    url: "https://paisaonclick.com/",
    description: "Financial services platform with loan and insurance comparison tools.",
    tags: ["Fintech", "Full Stack", "SEO"],
    year: "2022",
    accent: "from-sky-500/20 to-indigo-600/20",
    borderAccent: "hover:border-sky-400/40",
    borderActive: "border-sky-400/40",
    textAccent: "group-hover:text-sky-300",
    textActive: "text-sky-300",
  },
  {
    name: "Greecon Architects",
    price: "$450",
    url: "https://www.greeconarchitects.com/",
    description: "Architecture firm portfolio showcasing sustainable design projects.",
    tags: ["Website", "Frontend", "Portfolio"],
    year: "2021",
    accent: "from-lime-500/20 to-emerald-600/20",
    borderAccent: "hover:border-lime-400/40",
    borderActive: "border-lime-400/40",
    textAccent: "group-hover:text-lime-300",
    textActive: "text-lime-300",
  },
  {
    name: "Cochin Trade Centre",
    price: "$450",
    url: "https://cochintradecentre.com/",
    description: "Commercial real estate website for a prominent trade hub in Kochi.",
    tags: ["Website", "Frontend", "Real Estate"],
    year: "2021",
    accent: "from-fuchsia-500/20 to-pink-600/20",
    borderAccent: "hover:border-fuchsia-400/40",
    borderActive: "border-fuchsia-400/40",
    textAccent: "group-hover:text-fuchsia-300",
    textActive: "text-fuchsia-300",
  },
];

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [loadedIframes, setLoadedIframes] = useState<Set<number>>(
    new Set()
  );
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section
      id="work"
      className="relative min-h-screen bg-black py-20 sm:py-32 px-5 sm:px-8 md:px-16 lg:px-20 lg:pr-32"
      ref={ref}
    >
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <span className="text-xs tracking-[0.3em] text-white/30 uppercase font-[family-name:var(--font-geist-mono)]">
          02 / WORK
        </span>
        <div className="mt-3 h-[1px] w-16 bg-white/30" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-[clamp(1.8rem,4vw,3.5rem)] font-bold tracking-tight mb-6"
      >
        Selected Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-white/40 text-sm font-[family-name:var(--font-geist-mono)] mb-20"
      >
        <span className="text-green-400/60">&#x276F;</span> ls -la ./projects
      </motion.p>

      {/* Project grid */}
      <div className="w-full lg:w-3/4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {projects.map((project, index) => {
            const isActive = activeCard === index;
            return (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
              onMouseEnter={() =>
                setLoadedIframes((prev) => new Set(prev).add(index))
              }
              onTouchStart={() => {
                setActiveCard(index);
                setLoadedIframes((prev) => new Set(prev).add(index));
              }}
              onTouchEnd={() => setActiveCard(null)}
              className={`group relative flex aspect-square select-none flex-col justify-between overflow-hidden rounded-xl border-2 border-white/10 bg-zinc-900/70 p-3 sm:p-4 backdrop-blur-sm transition-all duration-700 hover:-translate-y-2 hover:scale-[1.02] ${project.borderAccent} ${isActive ? `-translate-y-2 scale-[1.02] ${project.borderActive}` : ""}`}
            >
              {/* Website preview — loads on first hover/touch, stays cached */}
              {loadedIframes.has(index) && (
                <div className={`absolute inset-0 z-[5] overflow-hidden bg-zinc-900 transition-opacity duration-700 ${isActive ? "opacity-100" : "opacity-0"} group-hover:opacity-100`}>
                  <iframe
                    src={project.url}
                    className="h-[400%] w-[400%] origin-top-left scale-[0.25] border-0 pointer-events-none"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                    title={`${project.name} preview`}
                  />
                </div>
              )}

              {/* Dark overlay for text readability over preview */}
              <div className={`absolute inset-0 z-[6] bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-700 ${isActive ? "opacity-100" : "opacity-0"} group-hover:opacity-100`} />

              {/* Colour gradient accent */}
              <div
                className={`absolute inset-0 z-[7] bg-gradient-to-br ${project.accent} transition-opacity duration-700 ${isActive ? "opacity-100" : "opacity-0"} group-hover:opacity-100`}
              />

              {/* Top row: number + arrow */}
              <div className="relative z-10 flex items-center justify-between">
                <span className={`font-[family-name:var(--font-geist-mono)] text-xs transition-colors duration-700 ${isActive ? "text-white/50" : "text-white/20"} group-hover:text-white/50`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <svg
                  className={`w-3.5 h-3.5 transition-all duration-700 shrink-0 ${isActive ? "text-white translate-x-1 -translate-y-1" : "text-white/20"} group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 17L17 7M17 7H7M17 7v10"
                  />
                </svg>
              </div>

              {/* Middle: project name + price */}
              <h3
                className={`relative z-10 text-base sm:text-lg md:text-xl font-bold tracking-tight transition-all duration-700 ${isActive ? `text-white ${project.textActive}` : "text-white/70"} group-hover:text-white ${project.textAccent}`}
              >
                {project.name} — {project.price}
              </h3>

              {/* Bottom: description + tags */}
              <div className="relative z-10 flex flex-col gap-2">
                <p className={`text-[10px] leading-relaxed line-clamp-2 transition-colors duration-700 ${isActive ? "text-white/60" : "text-white/25"} group-hover:text-white/60`}>
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[7px] tracking-wider border px-1.5 py-0.5 font-[family-name:var(--font-geist-mono)] uppercase transition-colors duration-700 ${isActive ? "text-white/50 border-white/25" : "text-white/20 border-white/10"} group-hover:text-white/50 group-hover:border-white/25`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className={`text-[8px] font-[family-name:var(--font-geist-mono)] transition-colors duration-700 ${isActive ? "text-white/40" : "text-white/15"} group-hover:text-white/40`}>
                    {project.year}
                  </span>
                </div>
              </div>
            </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
