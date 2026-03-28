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
            gap: "2rem",
          }}
          className="about-grid"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="section-label">About</span>
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease, delay: 0.05 }}
              style={{
                fontSize: "clamp(1.15rem, 2.2vw, 1.375rem)",
                fontWeight: 500,
                color: "var(--text-primary)",
                lineHeight: 1.6,
                letterSpacing: "-0.01em",
                marginBottom: "1.75rem",
                maxWidth: "600px",
              }}
            >
              CS student at the University of Toronto with hands-on experience
              in software development, frontend engineering, and e-commerce systems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease, delay: 0.12 }}
              style={{
                fontSize: "0.9375rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                maxWidth: "540px",
                marginBottom: "1.25rem",
              }}
            >
              I&apos;ve built ML classifiers, prediction models, and responsive web apps —
              and I&apos;ve also configured Shopify storefronts, managed POS systems, and wrangled
              large product datasets. I work across the stack and care about both the technical
              quality and the end result.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease, delay: 0.18 }}
              style={{
                fontSize: "0.9375rem",
                color: "var(--text-muted)",
                lineHeight: 1.7,
                maxWidth: "540px",
              }}
            >
              Currently looking for internships, co-ops, or interesting
              projects where I can contribute technically and grow fast.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease, delay: 0.28 }}
              style={{
                display: "flex",
                gap: "1.5rem",
                marginTop: "2.5rem",
                flexWrap: "wrap",
              }}
            >
              <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="link-arrow" style={{ fontSize: "0.875rem" }}>
                GitHub ↗
              </a>
              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="link-arrow" style={{ fontSize: "0.875rem" }}>
                LinkedIn ↗
              </a>
              <a href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" className="link-arrow" style={{ fontSize: "0.875rem" }}>
                X ↗
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
