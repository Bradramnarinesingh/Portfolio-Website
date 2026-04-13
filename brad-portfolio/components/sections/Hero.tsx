"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function Hero() {
  const ruleRef = useRef<HTMLDivElement>(null);

  const fadeUpIntro = {
    hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.85, ease, delay },
    }),
  };

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
          variants={fadeUpIntro}
          initial="hidden"
          animate="visible"
          custom={0.05}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.625rem",
            marginBottom: "2.5rem",
          }}
        >
          <span
            style={{
              fontSize: "0.6875rem",
              color: "var(--text-muted)",
              letterSpacing: "0.12em",
              fontFamily: "var(--font-mono)",
              textTransform: "uppercase",
            }}
          >
            {siteConfig.location}
          </span>
        </motion.div>

        {/* Display name */}
        <motion.h1
          variants={fadeUpIntro}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="display-title text-gradient-subtle"
          style={{ marginBottom: 0 }}
        >
          Brad
        </motion.h1>
        <motion.h1
          variants={fadeUpIntro}
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
            background: "linear-gradient(to right, rgba(120,140,255,0.22), rgba(255,255,255,0.08) 40%, rgba(120,140,255,0.06) 70%, transparent)",
            transformOrigin: "left center",
            transform: "scaleX(0)",
            opacity: 0,
            marginBottom: "2rem",
            maxWidth: "520px",
          }}
        />

        {/* Tagline */}
        <motion.p
          variants={fadeUpIntro}
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
          variants={fadeUpIntro}
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
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(130,150,255,0.1)",
              transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "rgba(255,255,255,0.09)";
              el.style.borderColor = "rgba(130,150,255,0.18)";
              el.style.boxShadow = "0 0 24px rgba(100,120,255,0.05)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "rgba(255,255,255,0.06)";
              el.style.borderColor = "rgba(130,150,255,0.1)";
              el.style.boxShadow = "none";
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
          variants={fadeUpIntro}
          initial="hidden"
          animate="visible"
          custom={0.8}
          className="hero-scroll"
          style={{
            position: "absolute",
            bottom: "-4rem",
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.625rem",
          }}
        >
          <span
            style={{
              fontSize: "0.5625rem",
              letterSpacing: "0.2em",
              color: "var(--text-muted)",
              textTransform: "uppercase",
              writingMode: "vertical-rl",
              fontFamily: "var(--font-mono)",
            }}
          >
            scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "48px",
              background: "linear-gradient(to bottom, rgba(130,150,255,0.25), transparent)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
