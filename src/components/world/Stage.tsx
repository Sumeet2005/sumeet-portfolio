import { useRef, type ReactNode } from "react";
import { useWorldFrame } from "./useWorldFrame";
import { world, prefersReducedMotion } from "./world-store";

/**
 * A "room" of the 3D world. The section is placed on a shared CSS camera:
 * as it travels through the viewport it rotates on X, dollies on Z and
 * drifts with the pointer, so scrolling reads as camera movement.
 */
export function Stage({
  id,
  children,
  depth = 620,
  tilt = 9,
  className = "",
}: {
  id: string;
  children: ReactNode;
  /** how far the room sits back when off-camera (px) */
  depth?: number;
  /** max X rotation in degrees */
  tilt?: number;
  className?: string;
}) {
  const outer = useRef<HTMLElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const cur = useRef(0);

  useWorldFrame(() => {
    const el = outer.current;
    const box = inner.current;
    if (!el || !box) return;
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight;
    if (rect.bottom < -200 || rect.top > vh + 200) return;

    const raw = (rect.top + rect.height / 2 - vh / 2) / vh; // -1 .. 1
    const r = Math.max(-1.2, Math.min(1.2, raw));
    cur.current += (r - cur.current) * 0.12;
    const p = cur.current;
    const a = Math.abs(p);

    if (prefersReducedMotion()) {
      box.style.transform = "none";
      box.style.opacity = String(Math.max(0.25, 1 - a * 0.6));
      return;
    }

    const z = -Math.max(0, a - 0.15) * depth;
    const rotX = -p * tilt;
    const rotY = world.sx * 2.2;
    const y = p * 26;
    box.style.transform = `translate3d(${world.sx * 10}px, ${y}px, ${z}px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    box.style.opacity = String(Math.max(0.12, 1 - Math.max(0, a - 0.55) * 1.5));
  });

  return (
    <section id={id} ref={outer} className={`stage ${className}`}>
      <div ref={inner} className="stage-room">
        {children}
      </div>
    </section>
  );
}

/** A content plane inside a Stage, parked at a fixed Z depth. */
export function Plane({
  z = 0,
  parallax = 0,
  className = "",
  children,
}: {
  z?: number;
  parallax?: number;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useWorldFrame(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    el.style.transform = `translate3d(${world.sx * parallax}px, ${world.sy * parallax * 0.6}px, ${z}px)`;
  });
  return (
    <div ref={ref} className={`plane ${className}`} style={{ transform: `translateZ(${z}px)` }}>
      {children}
    </div>
  );
}
