import { useRef, useState } from "react";
import { Cpu } from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { TiltCard } from "@/components/world/TiltCard";
import { useWorldFrame } from "@/components/world/useWorldFrame";
import { world, prefersReducedMotion } from "@/components/world/world-store";

/**
 * Skills rendered as a 3D technology ecosystem: group satellites orbit an
 * AI core in real 3D space, and the selected constellation expands into
 * depth-layered technology nodes.
 */
export function Skills() {
  const [active, setActive] = useState(0);
  const ring = useRef<HTMLDivElement>(null);
  const spin = useRef(0);
  const group = skillGroups[active]!;
  const step = 360 / skillGroups.length;

  useWorldFrame(() => {
    const el = ring.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      el.style.transform = "rotateX(-14deg)";
      return;
    }
    const target = -active * step;
    spin.current += (target - spin.current) * 0.07;
    el.style.transform = `rotateX(${-16 + world.sy * 5}deg) rotateY(${spin.current + world.sx * 6}deg)`;
  });

  return (
    <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <Reveal>
        <SectionHeading index="04" kicker="tech_universe" title="My Technology" accent="Ecosystem" />
      </Reveal>

      <div className="mt-16 grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
        {/* orbital selector */}
        <Reveal>
          <div className="orbit-scene relative mx-auto aspect-square w-full max-w-[26rem] scale-[0.78] overflow-hidden sm:scale-100">
            <div
              ref={ring}
              className="absolute inset-0"
              style={{ transformStyle: "preserve-3d", transition: "transform 0.1s linear" }}
            >
              <div className="orbit-ring" style={{ transform: "rotateX(90deg)" }} />
              <div className="orbit-ring scale-75" style={{ transform: "rotateX(90deg) rotateZ(30deg)" }} />

              <div
                className="absolute top-1/2 left-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-violet/45 bg-violet/12 text-center backdrop-blur-md animate-float-soft"
                style={{ boxShadow: "var(--glow-violet)", transformStyle: "preserve-3d" }}
              >
                <div>
                  <Cpu className="mx-auto h-6 w-6 text-accent" aria-hidden />
                  <p className="font-mono-tech mt-1 text-[9px] text-muted-foreground uppercase">core</p>
                </div>
              </div>

              {skillGroups.map((g, i) => {
                const selected = i === active;
                return (
                  <button
                    key={g.title}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setActive(i)}
                    className={`font-mono-tech absolute top-1/2 left-1/2 w-32 -translate-x-1/2 -translate-y-1/2 rounded-xl border px-2 py-2.5 text-[10px] uppercase transition-colors duration-300 ${
                      selected
                        ? "border-cyan/60 bg-cyan/12 text-accent glow-ring"
                        : "border-border bg-surface/85 text-muted-foreground hover:border-cyan/40 hover:text-foreground"
                    }`}
                    style={{
                      transform: `rotateY(${i * step}deg) translateZ(172px) rotateY(${-i * step}deg)`,
                      transformStyle: "preserve-3d",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    {g.title}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* constellation detail */}
        <Reveal delay={120}>
          <TiltCard as="article" className="holo-panel p-6 sm:p-8" max={5} lift={22}>
            <div className="font-mono-tech grid grid-cols-[minmax(0,1fr)_auto] gap-3 text-[10px] text-muted-foreground uppercase">
              <span className="truncate">constellation // {group.title.replace(/\s+/g, "_").toLowerCase()}</span>
              <span className="text-accent">{group.items.length} nodes</span>
            </div>

            <h3 className="mt-7 font-display text-2xl font-bold text-violet uppercase">{group.title}</h3>

            <ul className="mt-7 flex flex-wrap gap-2.5" style={{ transformStyle: "preserve-3d" }}>
              {group.items.map((s, i) => (
                <li
                  key={s}
                  className="rounded-lg border border-border/70 bg-surface-raised px-3 py-2 text-xs text-foreground/90 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/50 hover:text-accent"
                  style={{
                    transform: `translateZ(${(i % 4) * 14 + 6}px)`,
                    animation: prefersReducedMotion()
                      ? undefined
                      : `rise 0.5s cubic-bezier(0.22,1,0.36,1) ${i * 40}ms both`,
                  }}
                >
                  {s}
                </li>
              ))}
            </ul>

            <p className="font-mono-tech mt-8 border-t border-border pt-5 text-[10px] text-muted-foreground uppercase">
              rotate the ecosystem — select any constellation to inspect its stack
            </p>
          </TiltCard>
        </Reveal>
      </div>

      {/* full stack list kept accessible to assistive tech and crawlers */}
      <div className="sr-only">
        {skillGroups.map((g) => (
          <div key={g.title}>
            <h3>{g.title}</h3>
            <ul>
              {g.items.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
