"use client";

import { useEffect, useRef, useCallback, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  opacity: number;
  phase: number;
}

const DESKTOP_COUNT = 55;
const MOBILE_COUNT = 18;
const CONNECTION_DIST = 140;
const CONNECTION_OPACITY = 0.025;
const MOUSE_INFLUENCE = 8;
const SPEED_RANGE = 0.12;

function createParticle(w: number, h: number): Particle {
  return {
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * SPEED_RANGE,
    vy: (Math.random() - 0.5) * SPEED_RANGE,
    r: 1.0 + Math.random() * 1.0,
    opacity: 0.035 + Math.random() * 0.085,
    phase: Math.random() * Math.PI * 2,
  };
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1, y: -1 });
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);
  const isMobileRef = useRef(false);
  const [mounted, setMounted] = useState(false);

  const init = useCallback(() => {
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
    const count = isMobileRef.current ? MOBILE_COUNT : DESKTOP_COUNT;
    particlesRef.current = Array.from({ length: count }, () => createParticle(w, h));
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    setMounted(true);
    init();

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
      init();
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseLeave = () => {
      mouseRef.current = { x: -1, y: -1 };
    };

    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);

    const draw = () => {
      time += 0.003;
      ctx.clearRect(0, 0, w, h);

      const particles = particlesRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const hasPointer = mx >= 0 && my >= 0 && !isMobileRef.current;
      const drawConnections = !isMobileRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx + Math.sin(time + p.phase) * 0.05;
        p.y += p.vy + Math.cos(time + p.phase * 0.7) * 0.04;

        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;

        let drawX = p.x;
        let drawY = p.y;

        if (hasPointer) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 300) {
            const strength = (1 - dist / 300) * MOUSE_INFLUENCE;
            drawX += (dx / dist) * strength;
            drawY += (dy / dist) * strength;
          }
        }

        ctx.beginPath();
        ctx.arc(drawX, drawY, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();

        if (drawConnections) {
          for (let j = i + 1; j < particles.length; j++) {
            const q = particles[j];
            const cdx = p.x - q.x;
            const cdy = p.y - q.y;
            const cdist = Math.sqrt(cdx * cdx + cdy * cdy);
            if (cdist < CONNECTION_DIST) {
              const lineOpacity = CONNECTION_OPACITY * (1 - cdist / CONNECTION_DIST);
              ctx.beginPath();
              ctx.moveTo(drawX, drawY);

              let qDrawX = q.x;
              let qDrawY = q.y;
              if (hasPointer) {
                const qdx = q.x - mx;
                const qdy = q.y - my;
                const qdist = Math.sqrt(qdx * qdx + qdy * qdy);
                if (qdist < 300) {
                  const qs = (1 - qdist / 300) * MOUSE_INFLUENCE;
                  qDrawX += (qdx / qdist) * qs;
                  qDrawY += (qdy / qdist) * qs;
                }
              }

              ctx.lineTo(qDrawX, qDrawY);
              ctx.strokeStyle = `rgba(255, 255, 255, ${lineOpacity})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
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
  }, [init]);

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
        transition: "opacity 0.8s ease",
      }}
    />
  );
}
