import { Github, FileText, Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => Boolean(el));
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-8"
      >
        <a href="#home" className="min-w-0 truncate font-display text-lg font-bold tracking-tight">
          SUMEET <span className="text-violet">SONAR</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={active === l.href.slice(1) ? "page" : undefined}
              className={`rounded-full px-3 py-2 text-sm transition-colors ${
                active === l.href.slice(1)
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 justify-self-end">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:flex"
          >
            <Github className="h-4 w-4 shrink-0" aria-hidden />
            GitHub
          </a>
          <a
            href="#resume"
            className="hidden items-center gap-2 rounded-xl border border-violet/40 bg-violet/12 px-4 py-2 text-sm font-semibold text-foreground transition-all hover:bg-violet/22 sm:flex"
          >
            <FileText className="h-4 w-4 shrink-0" aria-hidden />
            Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-xl border border-border p-2 text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background/95 px-5 py-4 backdrop-blur-xl lg:hidden">
          <ul className="grid gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
