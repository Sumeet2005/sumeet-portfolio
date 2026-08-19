import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Capabilities } from "@/components/site/Capabilities";
import { Skills } from "@/components/site/Skills";
import { Projects } from "@/components/site/Projects";
import { Experience } from "@/components/site/Experience";
import { ResumeGithub } from "@/components/site/ResumeGithub";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { profile } from "@/data/portfolio";

const title = "Sumeet Sonar — AI Engineer | Building Intelligent Systems With AI";
const description =
  "Portfolio of Sumeet Sonar, AI & backend engineer building LLM, RAG and full-stack systems with FastAPI, Django, React, LangChain and ChromaDB.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: "AI Engineer",
          email: `mailto:${profile.email}`,
          url: "/",
          sameAs: [profile.github, profile.linkedin],
          address: { "@type": "PostalAddress", addressLocality: "Navi Mumbai", addressCountry: "IN" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Skills />
        <Projects />
        <Experience />
        <ResumeGithub />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
