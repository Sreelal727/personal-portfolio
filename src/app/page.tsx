import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";

// Lazy load below-fold sections — only load when needed
const About = dynamic(() => import("@/components/About"));
const Skills = dynamic(() => import("@/components/Skills"));
const Work = dynamic(() => import("@/components/Work"));
const Experience = dynamic(() => import("@/components/Experience"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  return (
    <main className="bg-black overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Work />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
