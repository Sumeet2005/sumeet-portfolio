import { Cpu, User } from "lucide-react";
import { aboutFacts, aboutParagraphs, profile } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { TiltCard } from "@/components/world/TiltCard";

export function About() {
  return (
    <div className="relative mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">
      <Reveal>
        <SectionHeading
          index="01"
          kicker="about_core"
          title="Building intelligent systems"
          accent="with purpose & precision."
        />
      </Reveal>

      <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:items-start">
        <Reveal>
          <TiltCard as="article" className="holo-panel h-full p-5 sm:p-6">
            <div className="font-mono-tech text-right text-[10px] text-muted-foreground uppercase">
              profile_core.json
            </div>
            <div className="mt-1 flex min-w-0 items-center gap-3.5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-violet/40 bg-violet/12">
                <User className="h-5 w-5 text-violet" aria-hidden />
              </span>
              <div className="min-w-0">
                <h3 className="truncate text-lg font-bold">{profile.name}</h3>
                <p className="font-mono-tech truncate text-xs text-accent">{profile.subtitle}</p>
              </div>
            </div>

            <dl className="mt-5 divide-y divide-border">
              {aboutFacts.map((f) => (
                <div
                  key={f.key}
                  className="grid grid-cols-[minmax(0,auto)_minmax(0,1fr)] gap-4 py-2.5"
                >
                  <dt className="font-mono-tech text-xs text-muted-foreground">{f.key}</dt>
                  <dd className="font-mono-tech text-xs font-medium text-foreground">{f.value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Dedicated Information Technology graduate with a strong passion for designing and
              building context-aware intelligence cores, scalable backend services, and clean
              front-end application architectures.
            </p>

            <div className="font-mono-tech mt-5 flex items-center justify-between border-t border-border pt-4 text-[10px] text-muted-foreground uppercase">
              <span>sys_init // boot_success</span>
              <span className="text-accent">secure_run</span>
            </div>
          </TiltCard>
        </Reveal>

        <Reveal delay={120}>
          <div className="h-full">
            <div className="font-mono-tech flex items-center gap-3 text-xs text-accent uppercase">
              <span className="h-px w-8 bg-accent/60" />
              The paradigm
            </div>
            <h3 className="mt-3 text-xl font-bold sm:text-2xl">
              Bridging Software Cores &amp; Intelligent Models
            </h3>
            {aboutParagraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {p}
              </p>
            ))}

            <div className="holo-panel mt-5 grid grid-cols-[auto_minmax(0,1fr)] gap-3.5 p-4 sm:p-4.5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-cyan/35 bg-cyan/10">
                <Cpu className="h-4.5 w-4.5 text-accent" aria-hidden />
              </span>
              <div className="min-w-0">
                <h4 className="font-mono-tech text-xs font-bold uppercase">Practical AI integration</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  I focus on building grounded pipelines that keep AI output accurate,
                  cost-effective, and fully integrated into core application backends rather than
                  isolated templates.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}