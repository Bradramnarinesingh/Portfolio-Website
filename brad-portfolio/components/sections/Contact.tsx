"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { useMobileLayout } from "@/lib/useMobileLayout";
import { revealViewport, viewportFade } from "@/lib/viewportMotion";
import { RevealSweep } from "@/components/RevealSweep";

const socialLinks = [
  { label: "GitHub", href: siteConfig.links.github },
  { label: "LinkedIn", href: siteConfig.links.linkedin },
  { label: "X / Twitter", href: siteConfig.links.twitter },
  { label: "Resume", href: siteConfig.links.resume },
];

export function Contact() {
  const isMobile = useMobileLayout();
  const labelEnter = viewportFade(isMobile, { y: 16, duration: 0.55, blur: 8 });
  const titleEnter = viewportFade(isMobile, { y: 24, duration: 0.8, delay: 0.05, blur: 16, blurDuration: 0.45 });
  const bodyEnter = viewportFade(isMobile, { y: 20, duration: 0.6, delay: 0.14, blur: 8 });
  const listEnter = viewportFade(isMobile, { y: 20, duration: 0.6, delay: 0.2, blur: 8 });

  return (
    <section id="contact" style={{ paddingTop: "7rem", paddingBottom: "7rem" }}>
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
          className="contact-grid"
        >
          {/* Label */}
          <motion.div
            {...labelEnter}
            viewport={revealViewport}
          >
            <span className="section-label" style={{ position: "relative", overflow: "hidden" }}>
              Contact
              <RevealSweep delay={0.3} />
            </span>
          </motion.div>

          {/* Content */}
          <div>
            <motion.h2
              {...titleEnter}
              viewport={revealViewport}
              
              style={{
                fontSize: "clamp(2rem, 5vw, 3.75rem)",
                fontWeight: 700,
                letterSpacing: "-0.035em",
                lineHeight: 1.05,
                color: "var(--text-primary)",
                marginBottom: "1.25rem",
              }}
            >
              Open to
              <br />
              <span style={{ color: "var(--text-secondary)" }}>opportunities.</span>
            </motion.h2>

            <motion.p
              {...bodyEnter}
              viewport={revealViewport}
              style={{
                fontSize: "0.9375rem",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                maxWidth: "420px",
                marginBottom: "3rem",
              }}
            >
              Internships, co-ops, or anything interesting. If you&apos;re building something worth talking about, I&apos;d like to hear from you.
            </motion.p>

            {/* Social links */}
            <motion.div
              {...listEnter}
              viewport={revealViewport}
              style={{ display: "flex", flexDirection: "column", gap: "0.125rem" }}
            >
              {socialLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.75rem 0",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    borderBottom: "1px solid var(--border)",
                    transition: "color 0.2s ease, border-color 0.2s ease",
                    letterSpacing: "-0.005em",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                    (e.currentTarget as HTMLElement).style.borderBottomColor = "rgba(130, 150, 255, 0.12)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)";
                    (e.currentTarget as HTMLElement).style.borderBottomColor = "var(--border)";
                  }}
                >
                  <span>{label}</span>
                  <span
                    style={{
                      marginLeft: "auto",
                      fontSize: "0.75rem",
                      opacity: 0.5,
                    }}
                  >
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
