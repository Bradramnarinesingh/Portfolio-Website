import type { TargetAndTransition, Transition, ViewportOptions } from "framer-motion";

export const motionEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Tight negative margins break IntersectionObserver on short mobile viewports */
export const revealViewport: ViewportOptions = {
  once: true,
  amount: 0.22,
  margin: "0px 0px -8% 0px",
};

type ViewportFadeConfig = {
  y?: number;
  duration?: number;
  delay?: number;
};

/**
 * Scroll-reveal presets with the same behavior on all viewport sizes.
 * Avoids `filter: blur()` — Safari/iOS frequently mishandles it on animated nodes.
 */
export function viewportFade(
  _isMobile: boolean,
  { y = 20, duration = 0.6, delay = 0 }: ViewportFadeConfig
): {
  initial: TargetAndTransition;
  whileInView: TargetAndTransition;
  transition: Transition;
} {
  const hidden: TargetAndTransition = { opacity: 0, y };
  const shown: TargetAndTransition = { opacity: 1, y: 0 };
  const transition: Transition = { duration, delay, ease: motionEase };

  return {
    initial: hidden,
    whileInView: shown,
    transition,
  };
}
