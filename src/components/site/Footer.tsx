import { ArrowUp } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:px-8">
        <div className="min-w-0">
          <p className="font-mono-tech text-sm font-bold uppercase">{profile.name}</p>
          <p className="font-mono-tech mt-2 text-xs text-muted-foreground uppercase">
            AI / Backend Engineer
          </p>
          <p className="font-mono-tech mt-2 text-xs text-accent uppercase">
            Building intelligent systems with purpose &amp; precision.
          </p>
        </div>
        <a
          href="#home"
          className="font-mono-tech inline-flex items-center gap-2 justify-self-start rounded-xl border border-border bg-surface px-5 py-3 text-xs uppercase transition-colors hover:border-cyan/45 hover:text-accent lg:justify-self-end"
        >
          <ArrowUp className="h-4 w-4" aria-hidden /> Back to top
        </a>
      </div>
      <p className="font-mono-tech border-t border-border py-5 text-center text-[10px] text-muted-foreground uppercase">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}