"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const skillCategories = [
  {
    title: "Frontend",
    tag: "client",
    skills: [
      { name: "React / Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "HTML5 / CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
      { name: "JavaScript (ES6+)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
      { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" },
      { name: "Responsive Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
      { name: "SCSS / Styled Components", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" },
    ],
  },
  {
    title: "Backend",
    tag: "server",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
      { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
      { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
      { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
      { name: "Authentication & Security", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-original.svg" },
    ],
  },
  {
    title: "Full Stack & Tools",
    tag: "devops",
    skills: [
      { name: "Git / GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
      { name: "CI/CD Pipelines", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" },
      { name: "AWS / Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Figma to Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
      { name: "Agile / Scrum", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" },
      { name: "Performance Optimization", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg" },
      { name: "SEO Best Practices", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
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
          04 / SKILLS
        </span>
        <div className="mt-3 h-[1px] w-16 bg-white/30" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-[clamp(1.8rem,4vw,3.5rem)] font-bold tracking-tight mb-20"
      >
        Tools & Technologies
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-20">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + catIndex * 0.15 }}
          >
            {/* Category header - terminal style */}
            <div className="flex items-center gap-3 mb-8">
              <span className="font-[family-name:var(--font-geist-mono)] text-xs text-green-400/60">
                &#x276F;
              </span>
              <span className="font-[family-name:var(--font-geist-mono)] text-xs text-white/30">
                {category.tag}/
              </span>
              <h3 className="text-lg font-semibold tracking-tight">{category.title}</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: 0.4 + catIndex * 0.15 + skillIndex * 0.05,
                  }}
                  className="group relative flex min-h-[4.5rem] sm:min-h-[5rem] select-none items-center gap-3 sm:gap-4 overflow-hidden rounded-xl border-2 border-white/10 bg-zinc-900/70 px-3 sm:px-5 py-3 backdrop-blur-sm transition-all duration-700 before:absolute before:inset-0 before:bg-zinc-900/50 before:transition-opacity before:duration-700 hover:-translate-y-1 hover:border-white/20 hover:bg-zinc-800/70 hover:before:opacity-0"
                >
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={28}
                    height={28}
                    className="relative z-10 shrink-0 opacity-50 grayscale transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0"
                    unoptimized
                  />
                  <span className="relative z-10 text-sm sm:text-base font-medium text-white/60 transition-colors duration-700 group-hover:text-white">
                    {skill.name}
                  </span>
                  <div className="absolute -right-1 top-0 h-full w-32 bg-gradient-to-l from-black/40 to-transparent" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
