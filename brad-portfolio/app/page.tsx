import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { AmbientField } from "@/components/AmbientField";

export default function Home() {
  return (
    <>
      {/* Layer 1 + 2: CSS dot grid substrate + gradient light sources */}
      <div className="ambient-bg" aria-hidden="true">
        <div className="ambient-orb ambient-orb--1" />
        <div className="ambient-orb ambient-orb--2" />
      </div>

      {/* Layer 3: Canvas interference field — flowing contour lines */}
      <AmbientField />

      <Navigation />
      <main>
        <Hero />
        <Work />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
