"use client";

import { motion } from "framer-motion";

/**
 * A single horizontal light streak that sweeps across the parent element
 * once when it enters the viewport. Place inside any `position: relative;
 * overflow: hidden` container — typically a section-label span.
 *
 * The streak fires slightly after the text has materialised so it reads
 * as a scan/resolve cue rather than leading the reveal.
 */
export function RevealSweep({ delay = 0.28 }: { delay?: number }) {
  return (
    <motion.span
      initial={{ x: "-110%", opacity: 0 }}
      whileInView={{ x: "110%", opacity: [0, 0.85, 0] }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      viewport={{ once: true }}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(to right, transparent 0%, rgba(140, 160, 255, 0.18) 50%, transparent 100%)",
        pointerEvents: "none",
        borderRadius: "inherit",
      }}
    />
  );
}
