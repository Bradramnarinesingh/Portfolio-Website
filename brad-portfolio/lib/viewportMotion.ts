import type { TargetAndTransition, Transition, ViewportOptions } from "framer-motion";

export const motionEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Hard ease-out for blur resolution — fast snap to crisp, not a slow dissolve */
const blurEase: [number, number, number, number] = [0.25, 0, 0.1, 1];

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
  /**
   * Initial blur radius in px. The blur clears independently of y/opacity via
   * a fast per-property transition — this gives cinematic velocity energy on
   * entry without lingering haze. Mobile halves the value automatically.
   */
  blur?: number;
  /**
   * How long the blur takes to resolve (seconds). Defaults to 0.38.
   * Keep this lower than `duration` so the element is crisp before it settles.
   */
  blurDuration?: number;
};

export function viewportFade(
  isMobile: boolean,
  { y = 20, duration = 0.6, delay = 0, blur = 0, blurDuration = 0.38 }: ViewportFadeConfig
): {
  initial: TargetAndTransition;
  whileInView: TargetAndTransition;
  transition: Transition;
} {
  // Mobile gets half the blur to stay performant on lower-end compositing
  const effectiveBlur = isMobile ? Math.round(blur / 2) : blur;

  const hidden: TargetAndTransition = {
    opacity: 0,
    y,
    ...(effectiveBlur > 0 && { filter: `blur(${effectiveBlur}px)` }),
  };

  const shown: TargetAndTransition = {
    opacity: 1,
    y: 0,
    ...(effectiveBlur > 0 && { filter: "blur(0px)" }),
  };

  const transition: Transition = {
    duration,
    delay,
    ease: motionEase,
    // Blur clears on its own fast curve so it reads as motion energy, not haze
    ...(effectiveBlur > 0 && {
      filter: { duration: blurDuration, ease: blurEase, delay },
    }),
  };

  return { initial: hidden, whileInView: shown, transition };
}
