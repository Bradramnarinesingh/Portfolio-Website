import type { TargetAndTransition, Transition } from "framer-motion";

export const motionEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

type ViewportFadeConfig = {
  y?: number;
  blur?: boolean;
  duration?: number;
  delay?: number;
};

/**
 * Scroll-reveal presets with the same behavior on all viewport sizes.
 */
export function viewportFade(
  _isMobile: boolean,
  { y = 20, blur = false, duration = 0.6, delay = 0 }: ViewportFadeConfig
): {
  initial: TargetAndTransition;
  whileInView: TargetAndTransition;
  transition: Transition;
} {
  const hidden: TargetAndTransition = blur
    ? { opacity: 0, y, filter: "blur(4px)" }
    : { opacity: 0, y };
  const shown: TargetAndTransition = blur
    ? { opacity: 1, y: 0, filter: "blur(0px)" }
    : { opacity: 1, y: 0 };
  const transition: Transition = { duration, delay, ease: motionEase };

  return {
    initial: hidden,
    whileInView: shown,
    transition,
  };
}
