import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { profile, projects } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { TiltCard } from "@/components/world/TiltCard";

export function Projects() {
  const [activeId, setActiveId] = useState(projects[0]!.id);
  const active = projects.find((p) => p.id === activeId)!;

  return (
    <div className="relative mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">
      <Reveal>
        <SectionHeading index="05" kicker="portfolio_index" title="Featured Projects" />
      </Reveal>

      <div className="mt-6 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10 lg:items-start">
        <Reveal>
          <div role="tablist" aria-label="Projects" className="grid gap-2.5">
            {projects.map((p) => {
              const selected = p.id === activeId;
              return (
                <button
                  key={p.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveId(p.id)}
                  style={{
                    transform: selected
                      ? "translateZ(30px)"
                      : "none",
                    transformStyle: "preserve-3d",
                  }}
                  className={`grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3.5 rounded-2xl border p-3.5 text-left transition-all duration-300 ${
                    selected
                      ? "border-cyan/50 bg-cyan/6 glow-ring"
                      : "border-border bg-surface hover:border-cyan/30 hover:bg-surface-raised"
                  }`}
                >
                  <span className="font-mono-tech shrink-0 text-xs text-muted-foreground">{p.id}</span>
                  <span className="min-w-0">
                    <span className="block truncate font-display text-base font-bold uppercase">
                      {p.name}
                    </span>
                    <span className="font-mono-tech mt-0.5 block truncate text-[10px] text-muted-foreground uppercase">
                      {p.kicker}
                    </span>
                  </span>
                  <ArrowUpRight
                    className={`h-4 w-4 shrink-0 transition-transform ${selected ? "text-accent" : "text-muted-foreground"}`}
                    aria-hidden
                  />
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="lg:sticky lg:top-24">
            <TiltCard as="article" className="holo-panel flex flex-col p-6 sm:p-7">
              <div className="font-mono-tech grid grid-cols-[minmax(0,1fr)_auto] gap-3 text-[10px] text-muted-foreground uppercase">
                <span className="truncate">case_study // project_{active.id}</span>
                <span className="text-accent">log</span>
              </div>

              <p className="font-mono-tech mt-5 text-[11px] text-accent uppercase">{active.category}</p>
              <h3 className="mt-1 font-display text-2xl font-bold uppercase sm:text-3xl">{active.name}</h3>
              <p className="font-mono-tech mt-3 text-sm leading-relaxed text-muted-foreground">
                {active.summary}
              </p>

              <p className="font-mono-tech mt-5 text-[11px] text-violet uppercase">// key technical features</p>
              <ul className="mt-3 grid gap-2.5">
                {active.features.map((f) => (
                  <li key={f} className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 text-sm text-foreground/90">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {active.verificationWorkflow && (
                <div className="mt-5 rounded-xl border border-cyan/30 bg-cyan/5 p-3.5">
                  <p className="font-mono-tech text-[10px] font-bold text-accent uppercase">
                    // verification workflow flowchart
                  </p>
                  <div className="font-mono-tech mt-2 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
                    {active.verificationWorkflow.map((step, idx) => (
                      <span key={step} className="flex items-center gap-1.5">
                        <span className={idx === active.verificationWorkflow!.length - 1 ? "font-bold text-accent" : ""}>
                          {step}
                        </span>
                        {idx < active.verificationWorkflow!.length - 1 && <span>→</span>}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack & Repo Link */}
              <div className="mt-6 grid gap-4 border-t border-border pt-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
                <div>
                  <p className="font-mono-tech text-[10px] text-muted-foreground uppercase">technology stack</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {active.stack.map((t) => (
                      <span
                        key={t}
                        className="font-mono-tech rounded-lg border border-border bg-surface-raised px-2.5 py-1 text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={active.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-violet/40 bg-violet/12 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-violet/22 shrink-0"
                >
                  <Github className="h-4 w-4 shrink-0" aria-hidden />
                  Repo
                </a>
              </div>
            </TiltCard>
          </div>
        </Reveal>
      </div>
    </div>
  );
}