import { Cpu, User } from "lucide-react";
import { aboutFacts, aboutParagraphs, profile } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <Reveal>
        <SectionHeading
          index="01"
          kicker="about_core"
          title="Building intelligent systems"
          accent="with purpose & precision."
        />
      </Reveal>

      <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <Reveal>
          <article className="panel h-full p-6 sm:p-8">
            <div className="font-mono-tech text-right text-[10px] text-muted-foreground uppercase">
              profile_core.json
            </div>
            <div className="mt-2 flex min-w-0 items-center gap-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-violet/40 bg-violet/12">
                <User className="h-6 w-6 text-violet" aria-hidden />
              </span>
              <div className="min-w-0">
                <h3 className="truncate text-xl font-bold">{profile.name}</h3>
                <p className="font-mono-tech truncate text-xs text-accent">{profile.subtitle}</p>
              </div>
            </div>

            <dl className="mt-8 divide-y divide-border">
              {aboutFacts.map((f) => (
                <div
                  key={f.key}
                  className="grid grid-cols-[minmax(0,auto)_minmax(0,1fr)] gap-4 py-4"
                >
                  <dt className="font-mono-tech text-xs text-muted-foreground">{f.key}</dt>
                  <dd className="font-mono-tech text-xs font-medium text-foreground">{f.value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Dedicated Information Technology graduate with a strong passion for designing and
              building context-aware intelligence cores, scalable backend services, and clean
              front-end application architectures.
            </p>

            <div className="font-mono-tech mt-8 flex items-center justify-between border-t border-border pt-5 text-[10px] text-muted-foreground uppercase">
              <span>sys_init // boot_success</span>
              <span className="text-accent">secure_run</span>
            </div>
          </article>
        </Reveal>

        <Reveal delay={120}>
          <div className="h-full">
            <div className="font-mono-tech flex items-center gap-3 text-xs text-accent uppercase">
              <span className="h-px w-8 bg-accent/60" />
              The paradigm
            </div>
            <h3 className="mt-5 text-2xl font-bold sm:text-3xl">
              Bridging Software Cores &amp; Intelligent Models
            </h3>
            {aboutParagraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mt-5 text-base leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}

            <div className="panel mt-9 grid grid-cols-[auto_minmax(0,1fr)] gap-4 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-cyan/35 bg-cyan/10">
                <Cpu className="h-5 w-5 text-accent" aria-hidden />
              </span>
              <div className="min-w-0">
                <h4 className="font-mono-tech text-xs font-bold uppercase">Practical AI integration</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  I focus on building grounded pipelines that keep AI output accurate,
                  cost-effective, and fully integrated into core application backends rather than
                  isolated templates.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}