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
    <div className="relative mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">
      <Reveal>
        <SectionHeading
          index="06"
          kicker="career_log"
          title="Experience & Credentials"
          description="A record of the practical experience, education, and credentials shaping my path as an AI and software engineer."
        />
      </Reveal>

      <div className="mt-6 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10 lg:items-start">
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
                  style={{
                    transform: selected ? "translateZ(30px)" : "none",
                    transformStyle: "preserve-3d",
                  }}
                  className={`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl border p-5 text-left transition-all duration-300 ${
                    selected
                      ? "border-cyan/50 bg-cyan/6 glow-ring"
                      : "border-border bg-surface hover:border-cyan/30 hover:bg-surface-raised"
                  }`}
                >
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-base font-bold uppercase break-words">
                      {t.label}
                    </span>
                    <span className="font-mono-tech mt-1 block text-[10px] text-muted-foreground uppercase break-words">
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
          <div className="lg:sticky lg:top-24">
            <TiltCard as="article" className="holo-panel p-5 sm:p-7">
              <div className="font-mono-tech flex flex-wrap items-center justify-between gap-1.5 text-[10px] text-muted-foreground uppercase">
                <span className="shrink-0">record_view // exp_log</span>
                <span className="text-accent shrink-0">{tab.verified}</span>
              </div>

              <div className="mt-5 flex min-w-0 items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-violet/40 bg-violet/12 sm:h-12 sm:w-12">
                  <Briefcase className="h-5 w-5 text-violet" aria-hidden />
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="min-w-0 font-display text-lg font-bold uppercase sm:text-2xl break-words">
                    {tab.title}
                  </h3>
                  <p className="font-mono-tech text-xs text-accent break-words">{tab.meta}</p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {tab.facets.map((f, i) => {
                  const selected = i === Math.min(facetIdx, tab.facets.length - 1);
                  return (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setFacetIdx(i)}
                      aria-pressed={selected}
                      className={`rounded-xl border p-3.5 text-left transition-all duration-300 ${
                        selected
                          ? "border-cyan/50 bg-cyan/6"
                          : "border-border bg-surface hover:border-cyan/30"
                      }`}
                    >
                      <span className={`font-mono-tech block text-[11px] ${selected ? "text-accent" : "text-muted-foreground"}`}>
                        {f.id}
                      </span>
                      <span className="font-mono-tech mt-1 block text-xs text-foreground/90 break-words">{f.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 rounded-xl border border-border bg-surface p-4">
                <p className="font-mono-tech text-[10px] text-accent uppercase break-all">
                  // inspection_report: {facet.label}
                </p>
                <p className="font-mono-tech mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {facet.report}
                </p>
              </div>

              <div className="font-mono-tech mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-4 text-[10px] text-muted-foreground uppercase">
                <span className="break-words">data › processing › model › evaluation</span>
                <span className="flex shrink-0 items-center gap-1.5 text-accent">
                  <Activity className="h-3.5 w-3.5" aria-hidden /> core_run
                </span>
              </div>
            </TiltCard>
          </div>
        </Reveal>
      </div>
    </div>
  );
}