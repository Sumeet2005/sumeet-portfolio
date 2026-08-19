import { useEffect, useRef } from "react";

/** Subscribes a callback to a single shared rAF loop. */
const callbacks = new Set<(t: number) => void>();
let running = false;

function loop(t: number) {
  for (const cb of callbacks) cb(t);
  if (callbacks.size > 0) requestAnimationFrame(loop);
  else running = false;
}

export function useWorldFrame(cb: (t: number) => void) {
  const ref = useRef(cb);
  ref.current = cb;
  useEffect(() => {
    const fn = (t: number) => ref.current(t);
    callbacks.add(fn);
    if (!running) {
      running = true;
      requestAnimationFrame(loop);
    }
    return () => {
      callbacks.delete(fn);
    };
  }, []);
}
