"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];
const blurEase: [number, number, number, number] = [0.25, 0, 0.1, 1];

const fadeUp = (delay: number, blurPx = 0) => ({
  hidden: {
    opacity: 0,
    y: 30,
    ...(blurPx > 0 && { filter: `blur(${blurPx}px)` }),
  },
  visible: {
    opacity: 1,
    y: 0,
    ...(blurPx > 0 && { filter: "blur(0px)" }),
    transition: {
      duration: 1.0,
      ease,
      delay,
      ...(blurPx > 0 && {
        filter: { duration: 0.38, ease: blurEase, delay },
      }),
    },
  },
});

export function Hero() {
  const ruleRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = ruleRef.current;
    if (!el || !revealed) return;
    const t = setTimeout(() => {
      el.style.transition =
        "transform 1.2s cubic-bezier(0.16,1,0.3,1), opacity 0.6s ease";
      el.style.transform = "scaleX(1)";
      el.style.opacity = "1";
    }, 450);
    return () => clearTimeout(t);
  }, [revealed]);

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
        {/* Soft luminous field behind title — fades in after reveal */}
        <div
          className="hero-glow"
          data-revealed={String(revealed)}
          aria-hidden="true"
        />

        {/* Location badge */}
        <motion.div
          variants={fadeUp(0.05, 10)}
          initial="hidden"
          animate="visible"
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

        {/* Display name — clip-path mask reveals */}
        <div style={{ position: "relative" }}>
          <h1
            className="display-title text-gradient-subtle hero-line-mask"
            data-revealed={String(revealed)}
            style={{
              marginBottom: 0,
              transitionDelay: "0.12s",
            }}
          >
            Brad
          </h1>
        </div>
        <div style={{ position: "relative" }}>
          <h1
            className="display-title hero-line-mask"
            data-revealed={String(revealed)}
            style={{
              marginBottom: "1.5rem",
              color: "var(--text-secondary)",
              transitionDelay: "0.24s",
            }}
          >
            Ramnarinesingh.
          </h1>
        </div>

        {/* Thin animated rule */}
        <div
          ref={ruleRef}
          style={{
            height: "1px",
            background:
              "linear-gradient(to right, rgba(120,140,255,0.22), rgba(255,255,255,0.08) 40%, rgba(120,140,255,0.06) 70%, transparent)",
            transformOrigin: "left center",
            transform: "scaleX(0)",
            opacity: 0,
            marginBottom: "2rem",
            maxWidth: "520px",
          }}
        />

        {/* Tagline — clip from left */}
        <div
          className="hero-line-mask--sub"
          data-revealed={String(revealed)}
          style={{ transitionDelay: "0.55s" }}
        >
          <motion.p
            variants={fadeUp(0.5, 8)}
            initial="hidden"
            animate="visible"
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
            <span style={{ color: "var(--text-muted)" }}>
              University of Toronto
            </span>
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div
          variants={fadeUp(0.65, 6)}
          initial="hidden"
          animate="visible"
          style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}
        >
          <a href="#work" className="btn-ghost hero-cta-primary">
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
          variants={fadeUp(0.9, 4)}
          initial="hidden"
          animate="visible"
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
              background:
                "linear-gradient(to bottom, rgba(130,150,255,0.25), transparent)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
