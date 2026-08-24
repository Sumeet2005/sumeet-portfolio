import { ArrowUpRight, Download, FileText, Github } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { TiltCard } from "@/components/world/TiltCard";

export function ResumeGithub() {
  return (
    <div className="relative mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <TiltCard as="article" className="holo-panel h-full p-5 sm:p-8">
            <div className="font-mono-tech flex flex-wrap items-center justify-between gap-1.5 text-[10px] text-muted-foreground uppercase">
              <span className="shrink-0">01 / source_code</span>
              <span className="text-accent shrink-0">active_repos</span>
            </div>
            <div className="mt-5 flex min-w-0 items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-cyan/35 bg-cyan/10 sm:h-14 sm:w-14">
                <Github className="h-5 w-5 text-accent sm:h-6 sm:w-6" aria-hidden />
              </span>
              <h3 className="min-w-0 flex-1 font-display text-lg font-bold sm:text-2xl break-words">GitHub &amp; Open Source</h3>
            </div>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
              Explore the systems behind my work. View codebases, multi-agent frameworks, and vector
              ingestion layers.
            </p>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="font-mono-tech group mt-6 inline-flex items-center gap-2 border-b border-cyan/50 pb-1 text-sm text-accent"
            >
              Explore My Code
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
            </a>
          </TiltCard>
        </Reveal>

        <Reveal delay={120}>
          <TiltCard as="article" className="holo-panel h-full p-5 sm:p-8">
            <div className="font-mono-tech flex flex-wrap items-center justify-between gap-1.5 text-[10px] text-muted-foreground uppercase">
              <span className="shrink-0">02 / engineering_profile</span>
              <span className="text-violet shrink-0">portable_doc</span>
            </div>
            <div className="mt-5 flex min-w-0 items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-violet/40 bg-violet/12 sm:h-14 sm:w-14">
                <FileText className="h-5 w-5 text-violet sm:h-6 sm:w-6" aria-hidden />
              </span>
              <h3 className="min-w-0 flex-1 font-display text-lg font-bold sm:text-2xl break-words">Offline Resume</h3>
            </div>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
              Download my complete engineering profile. Access a structured copy detailing skills,
              qualifications, and deployments.
            </p>
            <a
              href="/Sumeet_Sonar_Resume.pdf"
              download="Sumeet_Sonar_Resume.pdf"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-violet/40 bg-violet/15 px-5 py-3 text-sm font-semibold transition-colors hover:bg-violet/25"
            >
              <Download className="h-4 w-4 shrink-0" aria-hidden />
              Download PDF Resume
            </a>
          </TiltCard>
        </Reveal>
      </div>
    </div>
  );
}