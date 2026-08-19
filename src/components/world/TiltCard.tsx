import { useRef, type ReactNode } from "react";
import { prefersReducedMotion } from "./world-store";

/** Panel that physically reacts to the pointer with 3D tilt, lift and a light sweep. */
export function TiltCard({
  children,
  className = "",
  max = 7,
  lift = 26,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  lift?: number;
  as?: "div" | "article" | "li";
}) {
  const ref = useRef<HTMLDivElement>(null);

  const move = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1100px) rotateY(${x * max * 2}deg) rotateX(${-y * max * 2}deg) translateZ(${lift}px)`;
    el.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--my", `${(y + 0.5) * 100}%`);
  };

  const leave = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  const Comp = Tag as "div";
  return (
    <Comp
      ref={ref}
      onPointerMove={move}
      onPointerLeave={leave}
      className={`tilt-card ${className}`}
    >
      <span className="tilt-sheen" aria-hidden />
      {children}
    </Comp>
  );
}
