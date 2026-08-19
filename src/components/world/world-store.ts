// Shared, render-free world state. Updated once per frame by <WorldShell />
// and read by the WebGL scene + CSS depth layers via rAF (no React re-renders).
export type WorldState = {
  /** normalized pointer, -1..1 */
  px: number;
  py: number;
  /** smoothed pointer */
  sx: number;
  sy: number;
  /** document scroll progress 0..1 */
  progress: number;
  /** scroll offset in px */
  scrollY: number;
  /** scroll velocity (px/frame, smoothed) */
  velocity: number;
};

export const world: WorldState = {
  px: 0,
  py: 0,
  sx: 0,
  sy: 0,
  progress: 0,
  scrollY: 0,
  velocity: 0,
};

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isLowPower() {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(max-width: 860px)").matches || prefersReducedMotion();
}
