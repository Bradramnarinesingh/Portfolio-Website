"use client";

import { useEffect, useRef } from "react";

export function AmbientField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number;
    let t = 0;
    let lastFrame = 0;
    const INTERVAL = 1000 / 28;

    const setup = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.scale(dpr, dpr);
    };

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const N = 18;
      const spacing = h / (N + 1);
      const A = spacing * 0.30;

      for (let i = 0; i < N; i++) {
        const baseY = spacing * (i + 1);
        const phase = i * 0.73;

        // Fade lines near edges for natural vignette
        const edgeFade = Math.min((i + 1) / 3, (N - i) / 3, 1);

        const isTeal = i % 5 === 4;
        const baseAlpha = isTeal ? 0.045 : 0.07;
        const alpha = baseAlpha * edgeFade;
        const r = isTeal ? 55 : 100;
        const g = isTeal ? 185 : 140;
        const b = isTeal ? 215 : 255;

        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.lineWidth = 0.6 + Math.sin(i * 0.8) * 0.15;
        ctx.beginPath();

        for (let x = 0; x <= w; x += 3) {
          // Four-wave superposition for richer interference structure
          const y =
            baseY +
            A * 0.42 * Math.sin(x * 0.008 + t + phase) +
            A * 0.28 * Math.sin(x * 0.015 + t * 1.25 + phase + 1.3) +
            A * 0.18 * Math.sin(x * 0.028 + t * 0.72 + phase + 2.8) +
            A * 0.09 * Math.sin(x * 0.045 + t * 1.6 + phase + 4.1);

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.stroke();
      }
    };

    const loop = (ts: number) => {
      animId = requestAnimationFrame(loop);
      if (ts - lastFrame < INTERVAL) return;
      lastFrame = ts;
      draw();
      t += 0.006;
    };

    setup();
    window.addEventListener("resize", setup, { passive: true });
    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", setup);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
