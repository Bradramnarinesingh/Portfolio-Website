"use client";

import { useEffect, useRef } from "react";

/**
 * AmbientField — canvas-based flowing interference field.
 *
 * Draws N horizontal contour lines displaced by three superimposed sine waves.
 * The interference between waves creates a slowly-morphing energy-field texture
 * that reads as structured and futuristic rather than random particle noise.
 *
 * Performance: throttled to ~28fps, uses only clearRect + beginPath/stroke.
 * Respects prefers-reduced-motion.
 */
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
    const INTERVAL = 1000 / 28; // ~28fps cap — smooth but light on battery

    const setup = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      // Scale so all draw calls use logical (CSS) pixel coordinates
      ctx.scale(dpr, dpr);
    };

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      const N = 12; // number of contour lines
      const spacing = h / (N + 1);
      const A = spacing * 0.30; // max wave amplitude — 30% of line spacing

      for (let i = 0; i < N; i++) {
        const baseY = spacing * (i + 1);
        // Irrational phase offset per line so no two lines are in sync
        const phase = i * 0.73;

        // Two visual registers: primary blue-violet lines + accent teal lines
        const isTeal = i % 5 === 4;
        const alpha = isTeal ? 0.024 : 0.038;
        const r = isTeal ? 50 : 100;
        const g = isTeal ? 195 : 140;
        const b = isTeal ? 175 : 255;

        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.lineWidth = 0.6;
        ctx.beginPath();

        // Step every 3px — good resolution vs. CPU balance
        for (let x = 0; x <= w; x += 3) {
          // Three-wave superposition — interference creates the field structure
          const y =
            baseY +
            A * 0.50 * Math.sin(x * 0.009 + t + phase) +          // ~700px period, dominant wave
            A * 0.32 * Math.sin(x * 0.016 + t * 1.25 + phase + 1.3) + // ~390px period
            A * 0.18 * Math.sin(x * 0.030 + t * 0.72 + phase + 2.8);  // ~210px period, texture

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
      t += 0.0032; // very slow — perceptible motion without feeling rushed
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
