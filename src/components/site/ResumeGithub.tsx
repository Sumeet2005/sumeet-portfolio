import { ArrowUpRight, Download, FileText, Github } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function ResumeGithub() {
  return (
    <section id="resume" className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <article className="panel h-full p-6 sm:p-8">
            <div className="font-mono-tech grid grid-cols-[minmax(0,1fr)_auto] gap-3 text-[10px] text-muted-foreground uppercase">
              <span className="truncate">01 / source_code</span>
              <span className="text-accent">active_repos</span>
            </div>
            <div className="mt-7 flex min-w-0 items-center gap-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-cyan/35 bg-cyan/10">
                <Github className="h-6 w-6 text-accent" aria-hidden />
              </span>
              <h3 className="truncate text-2xl font-bold">GitHub &amp; Open Source</h3>
            </div>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Explore the systems behind my work. View codebases, multi-agent frameworks, and vector
              ingestion layers.
            </p>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="font-mono-tech group mt-8 inline-flex items-center gap-2 border-b border-cyan/50 pb-1 text-sm text-accent"
            >
              Explore My Code
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
            </a>
          </article>
        </Reveal>

        <Reveal delay={120}>
          <article className="panel h-full p-6 sm:p-8">
            <div className="font-mono-tech grid grid-cols-[minmax(0,1fr)_auto] gap-3 text-[10px] text-muted-foreground uppercase">
              <span className="truncate">02 / engineering_profile</span>
              <span className="text-violet">portable_doc</span>
            </div>
            <div className="mt-7 flex min-w-0 items-center gap-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-violet/40 bg-violet/12">
                <FileText className="h-6 w-6 text-violet" aria-hidden />
              </span>
              <h3 className="truncate text-2xl font-bold">Offline Resume</h3>
            </div>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Download my complete engineering profile. Access a structured copy detailing skills,
              qualifications, and deployments.
            </p>
            <a
              href={`mailto:${profile.email}?subject=Resume%20request`}
              className="mt-8 inline-flex items-center gap-2 rounded-xl border border-violet/40 bg-violet/15 px-5 py-3 text-sm font-semibold transition-colors hover:bg-violet/25"
            >
              <Download className="h-4 w-4 shrink-0" aria-hidden />
              Download PDF Resume
            </a>
          </article>
        </Reveal>
      </div>
    </section>
  );
}