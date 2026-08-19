import { Suspense, lazy, useEffect, useState, type ReactNode } from "react";
import { world, isLowPower, prefersReducedMotion } from "./world-store";

const WorldCanvas = lazy(() =>
  import("./WorldCanvas").then((m) => ({ default: m.WorldCanvas })),
);

/**
 * Root of the 3D world: owns pointer/scroll sampling, mounts the WebGL
 * environment (desktop only) and provides the shared CSS perspective camera.
 */
export function WorldShell({ children }: { children: ReactNode }) {
  const [webgl, setWebgl] = useState(false);

  useEffect(() => {
    setWebgl(!isLowPower());

    let lastY = window.scrollY;
    const onMove = (e: PointerEvent) => {
      world.px = (e.clientX / window.innerWidth) * 2 - 1;
      world.py = (e.clientY / window.innerHeight) * 2 - 1;
    };
    const onScroll = () => {
      const max = Math.max(1, document.body.scrollHeight - window.innerHeight);
      world.scrollY = window.scrollY;
      world.progress = Math.min(1, Math.max(0, window.scrollY / max));
      world.velocity = world.velocity * 0.8 + (window.scrollY - lastY) * 0.2;
      lastY = window.scrollY;
    };
    onScroll();
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    let raf = 0;
    const smooth = () => {
      world.sx += (world.px - world.sx) * 0.06;
      world.sy += (world.py - world.sy) * 0.06;
      world.velocity *= 0.92;
      raf = requestAnimationFrame(smooth);
    };
    raf = requestAnimationFrame(smooth);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="world-root">
      <div className="world-env" aria-hidden>
        <div className="world-sky" />
        <div className="world-horizon" />
        {webgl ? (
          <Suspense fallback={null}>
            <WorldCanvas reduced={prefersReducedMotion()} />
          </Suspense>
        ) : (
          <div className="world-static-grid" />
        )}
        <div className="world-vignette" />
      </div>
      <div className="world-viewport">{children}</div>
    </div>
  );
}
