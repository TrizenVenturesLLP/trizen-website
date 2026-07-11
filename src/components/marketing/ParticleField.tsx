import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

interface ParticleFieldProps {
  className?: string;
  /** Soft particle count ,  keep low for Lighthouse / mobile */
  count?: number;
}

/**
 * Lightweight floating particles (canvas). Pauses when off-screen.
 * Not a full particle engine ,  premium presence without jank.
 */
const ParticleField = ({ className, count = 36 }: ParticleFieldProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0;
    let running = true;
    let visible = true;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const particles = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.6 + Math.random() * 1.4,
      vx: (Math.random() - 0.5) * 0.00035,
      vy: -0.00015 - Math.random() * 0.00035,
      a: 0.15 + Math.random() * 0.35,
    }));

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = canvas;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      if (!running) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      if (visible) {
        for (const p of particles) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.y < -0.02) {
            p.y = 1.02;
            p.x = Math.random();
          }
          if (p.x < -0.02) p.x = 1.02;
          if (p.x > 1.02) p.x = -0.02;

          ctx.beginPath();
          ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(165, 180, 252, ${p.a})`;
          ctx.fill();
        }

        // Sparse network links between nearby particles
        ctx.strokeStyle = "rgba(129, 140, 248, 0.08)";
        ctx.lineWidth = 1;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const a = particles[i];
            const b = particles[j];
            const dx = (a.x - b.x) * w;
            const dy = (a.y - b.y) * h;
            const dist = Math.hypot(dx, dy);
            if (dist < 110) {
              ctx.globalAlpha = 1 - dist / 110;
              ctx.beginPath();
              ctx.moveTo(a.x * w, a.y * h);
              ctx.lineTo(b.x * w, b.y * h);
              ctx.stroke();
              ctx.globalAlpha = 1;
            }
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    io.observe(canvas);

    resize();
    window.addEventListener("resize", resize, { passive: true });
    raf = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      io.disconnect();
    };
  }, [count, reduced]);

  if (reduced) return null;

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      aria-hidden
    />
  );
};

export default ParticleField;
