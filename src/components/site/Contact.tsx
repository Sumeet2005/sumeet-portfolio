import { useState } from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { TiltCard } from "@/components/world/TiltCard";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    if (!endpoint) {
      // Fallback to mailto if endpoint is not set
      const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
        `Portfolio enquiry from ${form.name}`,
      )}&body=${encodeURIComponent(`${form.message}\n\nReply to: ${form.email}`)}`;
      window.location.href = mailto;
      return;
    }

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setErrorMessage(null);
      } else {
        const data = await response.json().catch(() => null);
        setStatus("error");
        setErrorMessage(data?.error || "Failed to transmit message. Please try again later.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network transmission error. Please check your connection and try again.");
    }
  };

  const channels = [
    { label: "GITHUB", href: profile.github, Icon: Github },
    { label: "LINKEDIN", href: profile.linkedin, Icon: Linkedin },
    { label: "EMAIL_ROUTING", href: `mailto:${profile.email}`, Icon: Mail },
  ];

  return (
    <div className="relative mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
        <Reveal>
          <div>
            <SectionHeading
              index="07"
              kicker="open_channel"
              title="Let's build something"
              accent="intelligent together."
              description="I'm open to discussing backend engineering roles, GenAI research integrations, full-stack applications, or custom machine learning pipelines."
            />

            <div className="holo-panel mt-8 p-5">
              <p className="font-mono-tech flex items-center gap-2 text-xs text-accent uppercase">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse-soft" />
                status: available_for_opportunities
              </p>
              <p className="font-mono-tech mt-3 text-xs text-muted-foreground uppercase">
                focus: ai systems / backend / rag
              </p>
              <p className="font-mono-tech mt-2 text-xs text-muted-foreground uppercase">
                location: {profile.location}
              </p>
              <p className="font-mono-tech mt-2 text-xs text-muted-foreground uppercase">
                phone: {profile.phone}
              </p>
            </div>

            <ul className="mt-8 grid gap-3">
              {channels.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="font-mono-tech grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3.5 text-xs uppercase transition-all hover:border-cyan/45 hover:text-accent"
                  >
                    <Icon className="h-4 w-4 shrink-0" aria-hidden />
                    <span className="truncate break-all">{label}</span>
                    <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <TiltCard className="h-full" max={4} lift={18}>
            <form className="holo-panel h-full p-6 sm:p-8" onSubmit={handleSubmit}>
              <div className="font-mono-tech grid grid-cols-[minmax(0,1fr)_auto] gap-3 text-[10px] text-muted-foreground uppercase">
                <span className="truncate">console // transmission_gateway</span>
                <span className="text-accent">
                  status: {status === "submitting" ? "transmitting" : "ready"}
                </span>
              </div>

              <div className="mt-8 grid gap-6">
                <div>
                  <label htmlFor="c-name" className="font-mono-tech block text-[10px] text-muted-foreground uppercase">
                    01 / identify // your name
                  </label>
                  <input
                    id="c-name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="IDENTIFIER_NAME"
                    className="font-mono-tech mt-3 w-full rounded-xl border border-input bg-surface px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-cyan/60"
                  />
                </div>
                <div>
                  <label htmlFor="c-email" className="font-mono-tech block text-[10px] text-muted-foreground uppercase">
                    02 / return channel // email address
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="IDENTIFIER_EMAIL"
                    className="font-mono-tech mt-3 w-full rounded-xl border border-input bg-surface px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-cyan/60"
                  />
                </div>
                <div>
                  <label htmlFor="c-msg" className="font-mono-tech block text-[10px] text-muted-foreground uppercase">
                    03 / message_payload // your message
                  </label>
                  <textarea
                    id="c-msg"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="TRANSMIT_DATA_PAYLOAD..."
                    className="font-mono-tech mt-3 w-full resize-y rounded-xl border border-input bg-surface px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-cyan/60"
                  />
                </div>
              </div>

              {status === "success" && (
                <div className="font-mono-tech mt-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs text-emerald-400">
                  Message transmitted successfully! I will respond shortly.
                </div>
              )}

              {status === "error" && errorMessage && (
                <div className="font-mono-tech mt-4 rounded-xl border border-rose-500/30 bg-rose-500/10 p-3 text-xs text-rose-400">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="font-mono-tech group mt-8 flex w-full items-center justify-center gap-3 rounded-xl border border-cyan/45 bg-cyan/10 px-6 py-4 text-sm font-bold uppercase transition-all hover:bg-cyan/18 disabled:opacity-50"
              >
                {status === "submitting" ? "Transmitting payload..." : "Initiate connection"}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </button>
            </form>
          </TiltCard>
        </Reveal>
      </div>
    </div>
  );
}