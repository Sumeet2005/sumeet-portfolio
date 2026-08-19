import { skillGroups } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <Reveal>
        <SectionHeading index="04" kicker="skills" title="My Technologies" accent="& Tools" />
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 4) * 80}>
            <div className="panel h-full p-5 transition-colors duration-300 hover:border-violet/40">
              <h3 className="text-lg font-bold text-violet">{g.title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-lg border border-border/70 bg-surface-raised px-3 py-1.5 text-xs text-foreground/90 transition-colors hover:border-cyan/40 hover:text-accent"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}