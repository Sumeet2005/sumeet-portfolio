import type { ReactNode } from "react";

export function SectionHeading({
  index,
  kicker,
  title,
  accent,
  description,
}: {
  index?: string;
  kicker: string;
  title: ReactNode;
  accent?: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <div className="font-mono-tech flex items-center gap-2 text-xs text-accent uppercase">
        <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-soft" />
        {index ? <span className="text-muted-foreground">{index} /</span> : null}
        <span>{kicker}</span>
      </div>
      <h2 className="mt-4 text-3xl leading-[1.05] font-bold sm:text-4xl lg:text-5xl">
        {title}
        {accent ? <span className="text-gradient"> {accent}</span> : null}
      </h2>
      {description ? (
        <p className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</p>
      ) : null}
      <div className="mt-4 h-px w-full bg-gradient-to-r from-border to-transparent" />
    </div>
  );
}