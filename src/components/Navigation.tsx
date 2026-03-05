"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "Mail", href: "mailto:sreelalkofficial@gmail.com" },
  { label: "GitHub", href: "https://github.com/Sreelal727", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sreelal-k-7626281a3/", external: true },
];

export default function Navigation() {
  const [pastHero, setPastHero] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setPastHero(window.scrollY > window.innerHeight * 0.8);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* Top social links — hidden on mobile, centered on desktop */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="fixed top-0 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-10 py-8"
      >
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="text-base tracking-wider text-white/70 transition-colors duration-300 hover:text-white font-[family-name:var(--font-geist-sans)]"
          >
            {link.label}
          </a>
        ))}
      </motion.nav>

      {/* Mobile hamburger button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed top-6 right-6 z-[60] flex md:hidden flex-col justify-center items-center w-10 h-10 gap-1.5"
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
        <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
      </motion.button>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                onClick={() => setMenuOpen(false)}
                className="text-2xl tracking-wider text-white/70 transition-colors duration-300 hover:text-white font-[family-name:var(--font-geist-sans)]"
              >
                {item.label}
              </motion.a>
            ))}

            <div className="mt-8 flex items-center gap-8">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm tracking-wider text-white/40 transition-colors duration-300 hover:text-white font-[family-name:var(--font-geist-sans)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Right sidebar navigation — visible only on hero, hidden on mobile */}
      <div
        className={`fixed right-12 top-1/2 -translate-y-1/2 z-50 hidden md:block transition-all duration-500 ${
          pastHero
            ? "opacity-0 translate-x-8 pointer-events-none"
            : "opacity-100 translate-x-0"
        }`}
      >
        <motion.nav
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col items-end gap-8"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group flex items-center gap-4 text-lg tracking-wider text-white/60 transition-all duration-300 hover:text-white font-[family-name:var(--font-geist-sans)]"
            >
              <span className="h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-10" />
              {item.label}
            </a>
          ))}
        </motion.nav>
      </div>
    </>
  );
}
