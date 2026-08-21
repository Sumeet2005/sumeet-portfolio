import { useEffect, useState } from "react";
import { ArrowRight, Bot, Brain, Database, Github, Layers, Linkedin, Mail, Search, Sparkles, Zap } from "lucide-react";
import { profile, heroStack } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { TiltCard } from "@/components/world/TiltCard";
import { prefersReducedMotion } from "@/components/world/world-store";

const icons = [Search, Brain, Bot, Database, Layers, Zap];

const rotateTitles = [
  "Sumeet Sonar",
  "AI Engineer",
  "AI & Backend Engineer",
  "Generative AI Engineer",
];

export function Hero() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayText, setDisplayText] = useState(() => (prefersReducedMotion() ? rotateTitles[0]! : ""));
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const currentTarget = rotateTitles[titleIdx]!;
    let timeoutId: NodeJS.Timeout;

    if (!isDeleting) {
      // Type character by character
      if (displayText.length < currentTarget.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentTarget.slice(0, displayText.length + 1));
        }, 80);
      } else {
        // Finished typing current title, pause before deleting
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      // Delete character by character
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentTarget.slice(0, displayText.length - 1));
        }, 45);
      } else {
        // Finished deleting, move to next title
        setIsDeleting(false);
        setTitleIdx((prev) => (prev + 1) % rotateTitles.length);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, isDeleting, titleIdx]);

  return (
    <div className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_72%)]" />
      <div className="pointer-events-none absolute -top-40 left-1/3 h-[28rem] w-[28rem] rounded-full bg-violet/18 blur-[120px]" />
      <div className="pointer-events-none absolute top-24 right-0 h-[24rem] w-[24rem] rounded-full bg-cyan/12 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:px-8">
        <div>
          <Reveal>
            <span className="font-mono-tech inline-flex items-center gap-2 rounded-full border border-cyan/35 bg-cyan/8 px-4 py-1.5 text-[11px] text-accent uppercase">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Available for new opportunities
            </span>
          </Reveal>

          <Reveal delay={80}>
            <p className="font-mono-tech mt-8 text-sm text-violet uppercase flex items-center min-h-[1.5rem]">
              <span className="inline-inline text-gradient font-bold">{displayText}</span>
              <span className="ml-0.5 inline-block w-2 bg-accent animate-pulse-soft">&nbsp;</span>
            </p>
            <h1 className="mt-4 text-5xl leading-[0.95] font-bold sm:text-6xl lg:text-7xl">
              Building
              <br />
              Intelligent
              <br />
              <span className="text-gradient">Systems With AI.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-7 max-w-lg text-base text-muted-foreground sm:text-lg">{profile.intro}</p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-violet px-6 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground uppercase transition-transform hover:-translate-y-0.5"
                style={{ boxShadow: "var(--glow-violet)" }}
              >
                Explore my work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3.5 text-sm font-semibold tracking-wide uppercase transition-colors hover:border-cyan/50 hover:text-accent"
              >
                Let's connect
              </a>
            </div>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-10 flex items-center gap-5 text-muted-foreground">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-accent">
                <Github className="h-5 w-5" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-accent">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-colors hover:text-accent">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="relative">
            <div className="pointer-events-none absolute inset-8 rounded-full bg-violet/12 blur-3xl" />
            <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-3">
              <TiltCard className="holo-panel order-first col-span-2 p-5 text-center sm:order-none sm:col-span-3" max={9} lift={40}>
                <p className="font-mono-tech text-[10px] text-violet uppercase">Sumeet's AI engineering stack</p>
                <Brain className="mx-auto mt-3 h-8 w-8 text-accent" aria-hidden />
                <h2 className="mt-3 font-display text-xl font-bold">AI ENGINE</h2>
                <p className="font-mono-tech mt-1 text-xs text-muted-foreground">Building intelligent systems</p>
              </TiltCard>
              {heroStack.map((item, i) => {
                const Icon = icons[i % icons.length]!;
                return (
                  <TiltCard
                    key={item.title}
                    className="holo-panel group p-4 hover:border-cyan/45"
                    max={10}
                    lift={30}
                  >
                    <Icon className="h-5 w-5 text-accent transition-transform group-hover:scale-110" aria-hidden />
                    <h3 className="font-mono-tech mt-4 text-xs font-bold uppercase">{item.title}</h3>
                    <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">{item.desc}</p>
                  </TiltCard>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}