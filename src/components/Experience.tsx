"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const erpClients = [
  {
    name: "Global Exporters Private Limited",
    price: "$16,000",
    services: ["ERP Solution", "Client Portal"],
    description:
      "End-to-end ERP system for managing exports, inventory, and client relationships.",
    details: [
      "Inventory & supply chain tracking",
      "Client relationship management",
      "Export documentation automation",
    ],
    accent: "from-emerald-500/15 to-teal-600/15",
    borderAccent: "hover:border-emerald-400/30",
    accentText: "text-emerald-400/60",
  },
  {
    name: "Beats Medicals Trading LLC",
    price: "$9,800",
    services: ["ERP Solution", "CRM"],
    description:
      "Custom CRM and ERP platform for medical equipment trading and distribution management.",
    details: [
      "Medical equipment cataloguing",
      "Distribution pipeline management",
      "Automated invoicing & reports",
    ],
    accent: "from-blue-500/15 to-cyan-600/15",
    borderAccent: "hover:border-blue-400/30",
    accentText: "text-blue-400/60",
  },
  {
    name: "Greecon Architects",
    price: "$14,800",
    services: ["Client Portal", "Project Management"],
    description:
      "Client-facing portal for project tracking, document management, and collaboration.",
    details: [
      "Real-time project dashboards",
      "Document version control",
      "Team & client collaboration",
    ],
    accent: "from-amber-500/15 to-orange-600/15",
    borderAccent: "hover:border-amber-400/30",
    accentText: "text-amber-400/60",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
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
          03 / ENTERPRISE
        </span>
        <div className="mt-3 h-[1px] w-16 bg-white/30" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-[clamp(1.8rem,4vw,3.5rem)] font-bold tracking-tight mb-6"
      >
        ERP Solutions &<br />
        <span className="text-white/40">Enterprise Systems</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-white/40 text-sm mb-20 max-w-lg"
      >
        Beyond websites, I architect and develop complex enterprise solutions —
        ERP systems, client portals, and CRMs tailored for business operations.
      </motion.p>

      {/* Zigzag rows */}
      <div className="flex flex-col gap-16 sm:gap-24">
        {erpClients.map((client, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 + index * 0.2 }}
              className={`flex flex-col gap-8 md:gap-16 md:flex-row md:items-center ${
                isEven ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Card side */}
              <div
                className={`group relative flex-1 overflow-hidden rounded-2xl border-2 border-white/10 bg-zinc-900/70 p-6 sm:p-8 md:p-10 backdrop-blur-sm transition-all duration-700 hover:-translate-y-1 ${client.borderAccent}`}
              >
                {/* Accent gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${client.accent} opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
                />

                {/* Grayscale overlay */}
                <div className="absolute inset-0 bg-zinc-900/40 transition-opacity duration-700 group-hover:opacity-0" />

                {/* Number */}
                <span
                  className={`relative z-10 block text-4xl sm:text-5xl md:text-6xl font-bold ${client.accentText} mb-6 font-[family-name:var(--font-geist-mono)]`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Client name + price */}
                <h3 className="relative z-10 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white/80 mb-4 transition-colors duration-700 group-hover:text-white">
                  {client.name} — {client.price}
                </h3>

                {/* Services tags */}
                <div className="relative z-10 flex flex-wrap gap-2">
                  {client.services.map((service) => (
                    <span
                      key={service}
                      className="text-[10px] tracking-wider text-white/30 border border-white/10 rounded-full px-4 py-1.5 font-[family-name:var(--font-geist-mono)] uppercase transition-colors duration-700 group-hover:border-white/25 group-hover:text-white/50"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                {/* Decorative gradient edge */}
                <div
                  className={`absolute top-0 ${
                    isEven ? "right-0" : "left-0"
                  } h-full w-16 bg-gradient-to-${
                    isEven ? "l" : "r"
                  } from-black/30 to-transparent pointer-events-none`}
                />
              </div>

              {/* Description side */}
              <div className="flex-1 flex flex-col gap-6">
                <p className="text-base sm:text-lg md:text-xl text-white/50 leading-relaxed">
                  {client.description}
                </p>

                {/* Feature list */}
                <div className="flex flex-col gap-3">
                  {client.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-3">
                      <span className={`text-xs ${client.accentText}`}>
                        &#x25B8;
                      </span>
                      <span className="text-sm text-white/30">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Decorative line */}
                <div className="h-[1px] w-24 bg-white/10 mt-2" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
