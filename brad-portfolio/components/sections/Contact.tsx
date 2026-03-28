"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const links = [
  { label: "Email", href: `mailto:${siteConfig.email}`, external: false },
  { label: "GitHub", href: siteConfig.links.github, external: true },
  { label: "LinkedIn", href: siteConfig.links.linkedin, external: true },
  { label: "X / Twitter", href: siteConfig.links.twitter, external: true },
  { label: "Resume", href: siteConfig.links.resume, external: true },
];

export function Contact() {
  return (
    <section id="contact" style={{ paddingTop: "7rem", paddingBottom: "7rem" }}>
      <div
        className="section-inner"
        style={{ borderTop: "1px solid var(--border)", paddingTop: "4rem" }}
      >
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}
          className="contact-grid"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="section-label">Contact</span>
          </motion.div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease, delay: 0.05 }}
              style={{
                fontSize: "clamp(2rem, 5vw, 3.75rem)",
                fontWeight: 600,
                letterSpacing: "-0.035em",
                lineHeight: 1.05,
                color: "var(--text-primary)",
                marginBottom: "1.25rem",
              }}
            >
              Let&apos;s
              <br />
              <span style={{ color: "var(--text-secondary)" }}>connect.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease, delay: 0.14 }}
              style={{
                fontSize: "0.9375rem",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                maxWidth: "420px",
                marginBottom: "3rem",
              }}
            >
              Open to internships, co-ops, freelance, or interesting conversations.
              Reach out — I read everything.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease, delay: 0.2 }}
              style={{ display: "flex", flexDirection: "column" }}
            >
              {links.map(({ label, href, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="contact-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.875rem 0",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    borderBottom: "1px solid var(--border)",
                    transition: "color 0.25s ease, border-color 0.25s ease, padding-left 0.3s cubic-bezier(0.22,1,0.36,1)",
                    letterSpacing: "-0.005em",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "var(--text-primary)";
                    el.style.borderBottomColor = "var(--border-hover)";
                    el.style.paddingLeft = "0.5rem";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "var(--text-secondary)";
                    el.style.borderBottomColor = "var(--border)";
                    el.style.paddingLeft = "0";
                  }}
                >
                  <span>{label}</span>
                  <span className="arrow-icon" style={{ fontSize: "0.8125rem", opacity: 0.4 }}>
                    ↗
                  </span>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: 180px 1fr !important;
            gap: 4rem !important;
          }
        }
      `}</style>
    </section>
  );
}
