"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function About() {
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
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease }}
          >
            <span className="section-label">About</span>
          </motion.div>

          {/* Right column: content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease, delay: 0.05 }}
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
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease, delay: 0.12 }}
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
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease, delay: 0.18 }}
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease, delay: 0.28 }}
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
