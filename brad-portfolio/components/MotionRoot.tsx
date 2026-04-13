"use client";

import { MotionConfig } from "framer-motion";

/**
 * iOS “Reduce Motion” makes Framer Motion skip or zero-duration transitions.
 * You asked for full motion on all devices; this opts out of that automatic dampening.
 */
export function MotionRoot({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
