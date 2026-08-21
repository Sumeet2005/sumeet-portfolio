import { useState } from "react";
import { ArrowRight, Boxes, Brain, Cpu, Database, LayoutPanelTop } from "lucide-react";
import { capabilities } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { TiltCard } from "@/components/world/TiltCard";

const icons = [Brain, Cpu, Database, LayoutPanelTop];

export function Capabilities() {
  const [activeId, setActiveId] = useState(capabilities[0]!.id);
  const active = capabilities.find((c) => c.id === activeId)!;

  return (
    <div className="relative mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">
      <Reveal>
        <SectionHeading index="03" kicker="capabilities_core" title="What I Can Build" />
      </Reveal>

      <div className="mt-6 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10 lg:items-start">
        <Reveal>
          <div role="tablist" aria-label="Capabilities" className="grid gap-3">
            {capabilities.map((c, i) => {
              const Icon = icons[i % icons.length]!;
              const selected = c.id === activeId;
              return (
                <button
                  key={c.id}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  onClick={() => setActiveId(c.id)}
                  className={`grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 ${
                    selected
                      ? "border-cyan/50 bg-cyan/6 glow-ring"
                      : "border-border bg-surface hover:border-cyan/30 hover:bg-surface-raised"
                  }`}
                >
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl border ${
                      selected ? "border-cyan/45 bg-cyan/12" : "border-border bg-surface-raised"
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${selected ? "text-accent" : "text-muted-foreground"}`} aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-display text-base font-bold uppercase">
                      {c.title}
                    </span>
                    <span className="font-mono-tech mt-1 block truncate text-[10px] text-muted-foreground">
                      {c.tech}
                    </span>
                  </span>
                  <ArrowRight
                    className={`h-4 w-4 shrink-0 transition-transform ${selected ? "translate-x-1 text-accent" : "text-muted-foreground"}`}
                    aria-hidden
                  />
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="lg:sticky lg:top-24">
            <TiltCard as="article" className="holo-panel p-6 sm:p-7">
              <div className="font-mono-tech grid grid-cols-[minmax(0,1fr)_auto] gap-3 text-[10px] text-muted-foreground uppercase">
                <span className="truncate">capability_logger // inspector</span>
                <span className="text-accent">engaged</span>
              </div>

              <p className="font-mono-tech mt-5 text-[11px] text-accent uppercase">
                statement / {active.title}
              </p>
            <h3 className="mt-3 text-xl leading-snug font-bold uppercase sm:text-2xl">
              &ldquo;{active.statement}&rdquo;
            </h3>

            <p className="font-mono-tech mt-8 text-[11px] text-violet uppercase">// core capabilities</p>
            <ul className="mt-4 grid gap-3">
              {active.points.map((p) => (
                <li key={p} className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 text-sm text-foreground/90">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 grid gap-6 border-t border-border pt-6 sm:grid-cols-[1.4fr_1fr]">
              <div>
                <p className="font-mono-tech text-[10px] text-muted-foreground uppercase">technology stack</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {active.stack.map((t) => (
                    <span
                      key={t}
                      className="font-mono-tech rounded-lg border border-border bg-surface-raised px-3 py-1.5 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-mono-tech text-[10px] text-muted-foreground uppercase">related deployment</p>
                <span className="font-mono-tech mt-3 inline-block rounded-lg border border-violet/40 bg-violet/12 px-3 py-1.5 text-xs text-violet uppercase">
                  {active.related}
                </span>
              </div>
            </div>

            <div className="font-mono-tech mt-6 flex items-center gap-2 text-[10px] text-muted-foreground uppercase">
              <Boxes className="h-3.5 w-3.5" aria-hidden /> core_run
            </div>
          </TiltCard>
        </div>
      </Reveal>
      </div>
    </div>
  );
}