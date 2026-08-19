import { useState } from "react";
import { Activity, Briefcase, ChevronRight } from "lucide-react";
import { careerTabs } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { TiltCard } from "@/components/world/TiltCard";

export function Experience() {
  const [tabId, setTabId] = useState(careerTabs[0]!.id);
  const tab = careerTabs.find((t) => t.id === tabId)!;
  const [facetIdx, setFacetIdx] = useState(0);
  const facet = tab.facets[Math.min(facetIdx, tab.facets.length - 1)]!;

  return (
    <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <Reveal>
        <SectionHeading
          index="06"
          kicker="career_log"
          title="Experience & Credentials"
          description="A record of the practical experience, education, and credentials shaping my path as an AI and software engineer."
        />
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
        <Reveal>
          <div role="tablist" aria-label="Career records" className="grid gap-3">
            {careerTabs.map((t) => {
              const selected = t.id === tabId;
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => {
                    setTabId(t.id);
                    setFacetIdx(0);
                  }}
                  className={`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border p-5 text-left transition-all duration-300 ${
                    selected
                      ? "border-cyan/50 bg-cyan/6 glow-ring"
                      : "border-border bg-surface hover:border-cyan/30 hover:bg-surface-raised"
                  }`}
                >
                  <span className="min-w-0">
                    <span className="block truncate font-display text-base font-bold uppercase">
                      {t.label}
                    </span>
                    <span className="font-mono-tech mt-1 block truncate text-[10px] text-muted-foreground uppercase">
                      {t.sub}
                    </span>
                  </span>
                  <ChevronRight
                    className={`h-4 w-4 shrink-0 ${selected ? "text-accent" : "text-muted-foreground"}`}
                    aria-hidden
                  />
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <TiltCard as="article" className="holo-panel h-full p-6 sm:p-8">
            <div className="font-mono-tech grid grid-cols-[minmax(0,1fr)_auto] gap-3 text-[10px] text-muted-foreground uppercase">
              <span className="truncate">record_view // exp_log</span>
              <span className="text-accent">{tab.verified}</span>
            </div>

            <div className="mt-7 flex min-w-0 items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-violet/40 bg-violet/12">
                <Briefcase className="h-5 w-5 text-violet" aria-hidden />
              </span>
              <div className="min-w-0">
                <h3 className="truncate font-display text-xl font-bold uppercase sm:text-2xl">
                  {tab.title}
                </h3>
                <p className="font-mono-tech truncate text-xs text-accent">{tab.meta}</p>
              </div>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {tab.facets.map((f, i) => {
                const selected = i === Math.min(facetIdx, tab.facets.length - 1);
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setFacetIdx(i)}
                    aria-pressed={selected}
                    className={`rounded-xl border p-4 text-left transition-all duration-300 ${
                      selected
                        ? "border-cyan/50 bg-cyan/6"
                        : "border-border bg-surface hover:border-cyan/30"
                    }`}
                  >
                    <span className={`font-mono-tech block text-[11px] ${selected ? "text-accent" : "text-muted-foreground"}`}>
                      {f.id}
                    </span>
                    <span className="font-mono-tech mt-1 block text-xs text-foreground/90">{f.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-7 rounded-xl border border-border bg-surface p-5">
              <p className="font-mono-tech text-[10px] text-accent uppercase">
                // inspection_report: {facet.label}
              </p>
              <p className="font-mono-tech mt-3 text-sm leading-relaxed text-muted-foreground">
                {facet.report}
              </p>
            </div>

            <div className="font-mono-tech mt-7 flex items-center justify-between gap-3 border-t border-border pt-5 text-[10px] text-muted-foreground uppercase">
              <span className="truncate">data › processing › model › evaluation</span>
              <span className="flex shrink-0 items-center gap-1.5 text-accent">
                <Activity className="h-3.5 w-3.5" aria-hidden /> core_run
              </span>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </div>
  );
}