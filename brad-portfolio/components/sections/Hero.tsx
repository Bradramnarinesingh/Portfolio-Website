"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease, delay },
  }),
};

export function Hero() {
  const ruleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ruleRef.current;
    if (!el) return;
    setTimeout(() => {
      el.style.transition = "transform 0.85s cubic-bezier(0.22,1,0.36,1) 0.55s, opacity 0.5s ease 0.45s";
      el.style.transform = "scaleX(1)";
      el.style.opacity = "1";
    }, 60);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        paddingTop: "80px",
        paddingBottom: "5rem",
      }}
    >
      <div className="section-inner" style={{ position: "relative", zIndex: 1 }}>
        {/* Location badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.05}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "2.5rem",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "rgba(16, 185, 129, 0.7)",
              display: "inline-block",
              boxShadow: "0 0 6px rgba(16, 185, 129, 0.5)",
            }}
          />
          <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", letterSpacing: "0.08em" }}>
            {siteConfig.location}
          </span>
        </motion.div>

        {/* Display name */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="display-title"
          style={{ marginBottom: 0 }}
        >
          Brad
        </motion.h1>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.18}
          className="display-title"
          style={{ marginBottom: "1.5rem", color: "var(--text-secondary)" }}
        >
          Ramnarinesingh.
        </motion.h1>

        {/* Thin animated rule */}
        <div
          ref={ruleRef}
          style={{
            height: "1px",
            background: "linear-gradient(to right, rgba(255,255,255,0.12), rgba(255,255,255,0.03) 70%, transparent)",
            transformOrigin: "left center",
            transform: "scaleX(0)",
            opacity: 0,
            marginBottom: "2rem",
            maxWidth: "480px",
          }}
        />

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.45}
          style={{
            fontSize: "clamp(0.875rem, 1.8vw, 1rem)",
            color: "var(--text-secondary)",
            letterSpacing: "0.01em",
            lineHeight: 1.6,
            maxWidth: "440px",
            marginBottom: "2.5rem",
          }}
        >
          CS, Mathematics &amp; Statistics
          <br />
          <span style={{ color: "var(--text-muted)" }}>University of Toronto</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.55}
          style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}
        >
          <a
            href="#work"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "var(--text-primary)",
              textDecoration: "none",
              padding: "0.5625rem 1.25rem",
              borderRadius: "6px",
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              transition: "background 0.2s ease, border-color 0.2s ease",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.11)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.07)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
            }}
          >
            Selected Work
            <span style={{ fontSize: "0.75rem", opacity: 0.7 }}>↓</span>
          </a>
          <a
            href={siteConfig.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Resume
            <span style={{ fontSize: "0.75rem", opacity: 0.55 }}>↗</span>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.8}
          style={{
            position: "absolute",
            bottom: "-4rem",
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              fontSize: "0.625rem",
              letterSpacing: "0.18em",
              color: "var(--text-muted)",
              textTransform: "uppercase",
              writingMode: "vertical-rl",
            }}
          >
            scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "48px",
              background: "linear-gradient(to bottom, var(--text-muted), transparent)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
