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
              Most side-hustle advice is generic and commercially weak. I built
              this product to solve that by turning real work signals into ranked
              options users can actually deliver and sell. I owned the scoring
              engine, explanation layer, and premium results UX from end to end.
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
                src="/screenshots/side-hustle-landing.png"
                alt="Side Hustle Matcher landing page"
                className="w-full"
                onError={(event) => {
                  const img = event.currentTarget;
                  img.onerror = null;
                  img.src = "/screenshots/oilfor-placeholder.svg";
                }}
              />
            </div>
            <p className="mt-3 text-xs text-white/55">
              Landing experience with a clear practical promise and a three-step explanation of the matching logic.
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
                <li>
                  <span className="text-white/50">Ownership:</span> Quiz design, data model,
                  scoring logic, and explanation copy
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
                <li>Designing recommendation logic that is editable, traceable, and commercially useful.</li>
                <li>Translating research into a practical schema that supports rapid product iteration.</li>
                <li>Building a conversion-friendly results flow that explains ranking decisions clearly.</li>
                <li>Owning delivery from product framing through implementation and launch-ready polish.</li>
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
            <h2 className="text-lg font-semibold text-white sm:text-xl">Product walkthrough screenshots</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/70">
              End-to-end flow from quiz input through ranked recommendations, explanation layers,
              comparison tables, and launch planning.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <Screenshot
                src="/screenshots/side-hustle-quiz-role-family.png"
                alt="Side Hustle Matcher quiz role-family step"
                caption="Quiz flow with one question per step and visible progress."
              />
              <Screenshot
                src="/screenshots/side-hustle-scoring-transparency.png"
                alt="Side Hustle Matcher scoring transparency table"
                caption="Scoring transparency table used to explain ranking behaviour."
              />
              <Screenshot
                src="/screenshots/side-hustle-commercial-comparison-launch-plan.png"
                alt="Commercial comparison and launch plan for top match"
                caption="Commercial comparison and practical launch plan for the top recommendation."
              />
              <Screenshot
                src="/screenshots/side-hustle-alternatives-poor-fit.png"
                alt="Alternative options and poor-fit warning"
                caption="Alternative options and a poor-fit warning to improve recommendation trust."
              />
              <Screenshot
                src="/screenshots/side-hustle-top-3-cards.png"
                alt="Top three recommendation cards with evidence"
                caption="Top three recommendation cards with evidence, commercial angle, and first-week steps."
              />
            </div>
          </section>
        </div>
      </main>
    </PageTransition>
  );
}
