"use client";

import Link from "next/link";
import PageTransition from "@/components/PageTransition";

type ScreenshotProps = {
  src: string;
  alt: string;
  caption: string;
};

function Screenshot({ src, alt, caption }: ScreenshotProps) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
      <img
        src={src}
        alt={alt}
        className="w-full"
        loading="lazy"
        onError={(event) => {
          const img = event.currentTarget;
          img.onerror = null;
          img.src = "/screenshots/oilfor-placeholder.svg";
        }}
      />
      <figcaption className="px-4 py-3 text-xs text-white/55">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function SideHustleMatcherPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[#050716] pb-24 pt-24 text-white">
        <div className="mx-auto max-w-5xl px-4">
          <Link
            href="/#projects"
            className="mt-6 inline-flex items-center text-sm font-semibold text-[#9AE1FF] transition hover:text-white"
          >
            ← Back to Projects
          </Link>

          <section className="border-b border-white/10 pb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9AE1FF]">
              Case Study
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Side Hustle Matcher: Practical Recommendation Engine
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-white/70 sm:text-base">
              Side Hustle Matcher helps 9 to 5 professionals find realistic side-income options
              using what they already do at work. It focuses on practical fit: role signals,
              weekly tasks, tools, outputs, constraints, and commercial potential.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 text-xs text-white/80">
              <span className="rounded-full bg-white/5 px-3 py-1">Next.js App Router</span>
              <span className="rounded-full bg-white/5 px-3 py-1">TypeScript</span>
              <span className="rounded-full bg-white/5 px-3 py-1">Tailwind CSS</span>
              <span className="rounded-full bg-white/5 px-3 py-1">Recommendation logic</span>
              <span className="rounded-full bg-white/5 px-3 py-1">Personalised explanations</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold">
              <a
                href="https://side-hustle-matcher.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-white/90 px-5 py-2 text-[#050716] transition hover:bg-white"
              >
                Live site
                <span className="ml-2">↗</span>
              </a>
              <a
                href="https://github.com/JoshHil97/Side-Hustle-Matcher"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-5 py-2 text-white/80 transition hover:border-[#9AE1FF]/70 hover:text-white"
              >
                View code on GitHub
                <span className="ml-2">↗</span>
              </a>
            </div>
          </section>

          <section className="mt-10">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
              <img
                src="/screenshots/side-hustle-matcher-placeholder.svg"
                alt="Side Hustle Matcher project preview"
                className="w-full"
                onError={(event) => {
                  const img = event.currentTarget;
                  img.onerror = null;
                  img.src = "/screenshots/oilfor-placeholder.svg";
                }}
              />
            </div>
            <p className="mt-3 text-xs text-white/55">
              Hero preview placeholder. This will be replaced with your final Side Hustle Matcher
              homepage screenshot.
            </p>
          </section>

          <section className="mt-12 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
            <div className="space-y-5 text-sm leading-relaxed text-white/80">
              <h2 className="text-lg font-semibold text-white sm:text-xl">Problem and goal</h2>
              <p>
                Most side-hustle quizzes feel generic and personality-led. They produce weak suggestions
                that do not match what users can actually deliver in a paid setting.
              </p>
              <p>
                The goal here was to build a more credible product engine: infer practical signals from
                real work patterns, then rank opportunities using explicit constraints and commercial fit.
              </p>
              <p>
                The output needed to feel actionable, not academic. Every recommendation includes a clear
                fit rationale, a first offer, and concrete steps for the week ahead.
              </p>
            </div>

            <aside className="space-y-4 rounded-2xl border border-white/10 bg-[#090B1C] p-5 text-xs text-white/80">
              <h3 className="text-sm font-semibold text-white">Project snapshot</h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-white/50">Type:</span> Product MVP
                </li>
                <li>
                  <span className="text-white/50">Flow:</span> Landing → quiz → ranked results
                </li>
                <li>
                  <span className="text-white/50">Data source:</span> Local TypeScript datasets
                </li>
                <li>
                  <span className="text-white/50">Focus:</span> Practical fit and explainability
                </li>
              </ul>
            </aside>
          </section>

          <section className="mt-16">
            <h2 className="text-lg font-semibold text-white sm:text-xl">Core product decisions</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
                <h3 className="text-sm font-semibold text-white">Signal-first normalisation</h3>
                <p className="mt-3 text-sm text-white/80">
                  Users are mapped from role family, weekly tasks, tool confidence, and delivered outputs.
                  This produces stronger skill inference than title-only matching.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
                <h3 className="text-sm font-semibold text-white">Transparent scoring engine</h3>
                <p className="mt-3 text-sm text-white/80">
                  Recommendations are scored with clear weightings for skill fit, preference fit,
                  constraints, commercial viability, confidence, and friction penalties.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
                <h3 className="text-sm font-semibold text-white">Commercially useful output</h3>
                <p className="mt-3 text-sm text-white/80">
                  Each top result includes a first offer example, starter pricing direction,
                  outreach prompt, and three immediate action steps.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
                <h3 className="text-sm font-semibold text-white">Trust through contrast</h3>
                <p className="mt-3 text-sm text-white/80">
                  The results page also shows alternatives and one poor-fit option with reasons,
                  which improves user trust and avoids generic hype.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-lg font-semibold text-white sm:text-xl">What this project demonstrates</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/80">
                <li>Designing recommendation logic that is editable, traceable, and production-minded.</li>
                <li>Turning domain research into a structured data model for fast iteration.</li>
                <li>Building conversion-friendly UX with practical copy and strong information hierarchy.</li>
                <li>Shipping a complete MVP with clear growth paths for data and model improvements.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white sm:text-xl">Next improvements</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/80">
                <li>Add richer comparison tools between top matches.</li>
                <li>Support user accounts so recommendations can be saved and tracked over time.</li>
                <li>Introduce screenshot-backed social proof and user outcome stories.</li>
                <li>Add regional compliance overlays for location-specific regulation guidance.</li>
              </ul>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-lg font-semibold text-white sm:text-xl">Screenshots</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/70">
              Placeholders are set below and will be swapped with your final screenshots as soon as
              you share them.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <Screenshot
                src="/screenshots/side-hustle-matcher-placeholder.svg"
                alt="Side Hustle Matcher placeholder one"
                caption="Placeholder for the landing page screenshot."
              />
              <Screenshot
                src="/screenshots/side-hustle-matcher-placeholder.svg"
                alt="Side Hustle Matcher placeholder two"
                caption="Placeholder for the quiz or results page screenshot."
              />
            </div>
          </section>
        </div>
      </main>
    </PageTransition>
  );
}
