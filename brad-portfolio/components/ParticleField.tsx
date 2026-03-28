"use client";

import { useEffect, useRef, useCallback, useState } from "react";

interface LightOrb {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  color: string;
  speedX: number;
  speedY: number;
  phaseX: number;
  phaseY: number;
}

const ORBS: LightOrb[] = [
  {
    cx: 0.15, cy: 0.3,
    rx: 0.45, ry: 0.5,
    color: "180, 160, 120",
    speedX: 0.08, speedY: 0.06,
    phaseX: 0, phaseY: 0.5,
  },
  {
    cx: 0.8, cy: 0.7,
    rx: 0.4, ry: 0.45,
    color: "100, 110, 180",
    speedX: 0.06, speedY: 0.09,
    phaseX: 2.1, phaseY: 1.3,
  },
  {
    cx: 0.5, cy: 0.15,
    rx: 0.35, ry: 0.35,
    color: "140, 130, 170",
    speedX: 0.07, speedY: 0.05,
    phaseX: 4.2, phaseY: 3.0,
  },
];

const BASE_OPACITY = 0.03;

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const targetMouseRef = useRef({ x: 0.5, y: 0.5 });
  const rafRef = useRef<number>(0);
  const [mounted, setMounted] = useState(false);
  const isMobileRef = useRef(false);

  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio, 2);
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);
    isMobileRef.current = w < 768;
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    setMounted(true);
    setupCanvas();

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    let time = 0;

    const onResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      setupCanvas();
    };

    const onMouseMove = (e: MouseEvent) => {
      targetMouseRef.current = { x: e.clientX / w, y: e.clientY / h };
    };

    const onMouseLeave = () => {
      targetMouseRef.current = { x: 0.5, y: 0.5 };
    };

    window.addEventListener("resize", onResize, { passive: true });
    if (!isMobileRef.current) {
      window.addEventListener("mousemove", onMouseMove, { passive: true });
      document.addEventListener("mouseleave", onMouseLeave);
    }

    const draw = () => {
      time += 0.0008;
      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current;
      const tx = targetMouseRef.current;
      mx.x += (tx.x - mx.x) * 0.02;
      mx.y += (tx.y - mx.y) * 0.02;

      const parallaxX = (mx.x - 0.5) * 15;
      const parallaxY = (mx.y - 0.5) * 15;

      for (const orb of ORBS) {
        const ox = (orb.cx + Math.sin(time * orb.speedX + orb.phaseX) * 0.08) * w + parallaxX;
        const oy = (orb.cy + Math.cos(time * orb.speedY + orb.phaseY) * 0.06) * h + parallaxY;
        const radX = orb.rx * w;
        const radY = orb.ry * h;

        const gradient = ctx.createRadialGradient(ox, oy, 0, ox, oy, Math.max(radX, radY));
        gradient.addColorStop(0, `rgba(${orb.color}, ${BASE_OPACITY})`);
        gradient.addColorStop(0.4, `rgba(${orb.color}, ${BASE_OPACITY * 0.5})`);
        gradient.addColorStop(1, `rgba(${orb.color}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.ellipse(ox, oy, radX, radY, 0, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [setupCanvas]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        opacity: mounted ? 1 : 0,
        transition: "opacity 1.2s ease",
      }}
    />
  );
}
