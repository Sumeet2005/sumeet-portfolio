import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { profile, projects } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Projects() {
  const [activeId, setActiveId] = useState(projects[0]!.id);
  const active = projects.find((p) => p.id === activeId)!;

  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <Reveal>
        <SectionHeading index="05" kicker="portfolio_index" title="Featured Projects" />
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
        <Reveal>
          <div role="tablist" aria-label="Projects" className="grid gap-3">
            {projects.map((p) => {
              const selected = p.id === activeId;
              return (
                <button
                  key={p.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveId(p.id)}
                  className={`grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 ${
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
                    <span className="font-mono-tech mt-1 block truncate text-[10px] text-muted-foreground uppercase">
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
          <article className="panel flex h-full flex-col p-6 sm:p-8">
            <div className="font-mono-tech grid grid-cols-[minmax(0,1fr)_auto] gap-3 text-[10px] text-muted-foreground uppercase">
              <span className="truncate">case_study // project_{active.id}</span>
              <span className="text-accent">log</span>
            </div>

            <p className="font-mono-tech mt-8 text-[11px] text-accent uppercase">{active.category}</p>
            <h3 className="mt-3 font-display text-2xl font-bold uppercase sm:text-3xl">{active.name}</h3>
            <p className="font-mono-tech mt-4 text-sm leading-relaxed text-muted-foreground">
              {active.summary}
            </p>

            <p className="font-mono-tech mt-8 text-[11px] text-violet uppercase">// key technical features</p>
            <ul className="mt-4 grid gap-3">
              {active.features.map((f) => (
                <li key={f} className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 text-sm text-foreground/90">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto grid gap-6 border-t border-border pt-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
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
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-violet/40 bg-violet/12 px-5 py-3 text-sm font-semibold transition-colors hover:bg-violet/22"
              >
                <Github className="h-4 w-4 shrink-0" aria-hidden />
                Repo
              </a>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}