"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { useMobileLayout } from "@/lib/useMobileLayout";
import { revealViewport, viewportFade } from "@/lib/viewportMotion";

export function About() {
  const isMobile = useMobileLayout();
  const labelEnter = viewportFade(isMobile, { y: 16, duration: 0.55 });
  const p1 = viewportFade(isMobile, { y: 24, duration: 0.65, delay: 0.05 });
  const p2 = viewportFade(isMobile, { y: 24, duration: 0.65, delay: 0.12 });
  const p3 = viewportFade(isMobile, { y: 24, duration: 0.65, delay: 0.18 });
  const links = viewportFade(isMobile, { y: 20, duration: 0.6, delay: 0.28 });

  return (
    <section id="about" style={{ paddingTop: "7rem", paddingBottom: "7rem" }}>
      <div
        className="section-inner"
        style={{
          borderTop: "1px solid var(--border)",
          paddingTop: "4rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
          }}
          className="about-grid"
        >
          {/* Left column: label */}
          <motion.div
            {...labelEnter}
            viewport={revealViewport}
          >
            <span className="section-label">About</span>
          </motion.div>

          {/* Right column: content */}
          <div>
            <motion.p
              {...p1}
              viewport={revealViewport}
              style={{
                fontSize: "clamp(1.15rem, 2.2vw, 1.375rem)",
                fontWeight: 500,
                color: "var(--text-primary)",
                lineHeight: 1.65,
                letterSpacing: "-0.01em",
                marginBottom: "1.75rem",
                maxWidth: "600px",
              }}
            >
              I&apos;m studying Computer Science, Mathematics &amp; Statistics at the University of Toronto — building
              things at the intersection of machine learning and clean interfaces.
            </motion.p>

            <motion.p
              {...p2}
              viewport={revealViewport}
              style={{
                fontSize: "0.9375rem",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                maxWidth: "540px",
                marginBottom: "1.25rem",
              }}
            >
              My projects span NLP classifiers, predictive ML models, and responsive web applications. I care about both
              how code works and how it presents — the technical rigor and the detail.
            </motion.p>

            <motion.p
              {...p3}
              viewport={revealViewport}
              style={{
                fontSize: "0.9375rem",
                color: "var(--text-muted)",
                lineHeight: 1.8,
                maxWidth: "540px",
              }}
            >
              Currently open to internships and co-ops where I can contribute technically and grow quickly.
            </motion.p>

            <motion.div
              {...links}
              viewport={revealViewport}
              style={{
                display: "flex",
                gap: "1rem",
                marginTop: "2.5rem",
                flexWrap: "wrap",
              }}
            >
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow"
                style={{ fontSize: "0.875rem" }}
              >
                GitHub ↗
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow"
                style={{ fontSize: "0.875rem" }}
              >
                LinkedIn ↗
              </a>
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow"
                style={{ fontSize: "0.875rem" }}
              >
                X / Twitter ↗
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 180px 1fr !important;
            gap: 4rem !important;
          }
        }
      `}</style>
    </section>
  );
}
