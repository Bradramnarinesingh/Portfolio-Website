"use client";

import { useLayoutEffect, useState } from "react";

const QUERY = "(max-width: 639px)";

/** Matches Tailwind `sm` — tuned after first layout so SSR/hydration stay aligned */
export function useMobileLayout() {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const mq = window.matchMedia(QUERY);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isMobile;
}
