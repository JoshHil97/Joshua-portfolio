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

export default function ChurchSoundAcademyPage() {
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
              Church Sound Academy: Training Platform for Volunteer Sound Teams
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-white/70 sm:text-base">
              Church sound desks usually run on tribal knowledge: a couple of
              experienced operators hold everything in their heads, and new
              volunteers learn by watching. I built a platform that turns that
              knowledge into structured learning paths, an interactive model of
              the church&apos;s real mixing console, and certification tracking —
              so teams can onboard, operate, and recover from faults with
              confidence. It is my largest build to date and I owned the domain
              model, data layer, and UI end to end.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 text-xs text-white/80">
              <span className="rounded-full bg-white/5 px-3 py-1">Next.js App Router</span>
              <span className="rounded-full bg-white/5 px-3 py-1">TypeScript</span>
              <span className="rounded-full bg-white/5 px-3 py-1">Prisma ORM</span>
              <span className="rounded-full bg-white/5 px-3 py-1">PostgreSQL-ready</span>
              <span className="rounded-full bg-white/5 px-3 py-1">Domain modelling</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold">
              <a
                href="https://sound-platform-iota.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-white/90 px-5 py-2 text-[#050716] transition hover:bg-white"
              >
                Live site
                <span className="ml-2">↗</span>
              </a>
              <a
                href="https://github.com/JoshHil97/Sound-Platform"
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
                src="/screenshots/sound-academy-x32.png"
                alt="Interactive VBCI X32 console explorer"
                className="w-full"
                onError={(event) => {
                  const img = event.currentTarget;
                  img.onerror = null;
                  img.src = "/screenshots/oilfor-placeholder.svg";
                }}
              />
            </div>
            <p className="mt-3 text-xs text-white/55">
              An interactive model of the church&apos;s real Behringer X32:
              selecting a channel reveals its type, routing summary, associated
              DCA groups, and how it is used during services.
            </p>
          </section>

          <section className="mt-12 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
            <div className="space-y-5 text-sm leading-relaxed text-white/80">
              <h2 className="text-lg font-semibold text-white sm:text-xl">Problem and goal</h2>
              <p>
                Volunteer sound teams face a real training gap. The equipment is
                complex, services are live with no second take, and knowledge
                tends to live with one or two people. When they are away, quality
                drops or the stream goes down.
              </p>
              <p>
                The goal was to make that knowledge learnable and repeatable:
                structured pathways for different roles, an accurate reference for
                the exact desk and signal flow the church uses, and a way to
                evidence competency before someone runs a service alone.
              </p>
              <p>
                It also had to reflect reality. Rather than generic tutorials, the
                platform is modelled on the church&apos;s actual console, routing,
                Dante network, and livestream workflow.
              </p>
            </div>

            <aside className="space-y-4 rounded-2xl border border-white/10 bg-[#090B1C] p-5 text-xs text-white/80">
              <h3 className="text-sm font-semibold text-white">Project snapshot</h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-white/50">Type:</span> Full-stack training platform
                </li>
                <li>
                  <span className="text-white/50">Scale:</span> My largest codebase to date
                </li>
                <li>
                  <span className="text-white/50">Stack:</span> Next.js, TypeScript, Prisma
                </li>
                <li>
                  <span className="text-white/50">Data:</span> SQLite for local MVP, PostgreSQL-ready schema
                </li>
                <li>
                  <span className="text-white/50">Ownership:</span> Domain model, data layer,
                  UI, and content architecture
                </li>
                <li>
                  <span className="text-white/50">Technical highlight:</span> Encoding a real
                  32-channel console — channels, DCA groups, buses, and matrices —
                  as structured, queryable data.
                </li>
              </ul>
            </aside>
          </section>

          <section className="mt-10 rounded-2xl border border-white/10 bg-[#090B1C] p-5 text-sm text-white/80">
            <h2 className="text-lg font-semibold text-white sm:text-xl">
              Challenge and solution
            </h2>
            <p className="mt-3 leading-relaxed">
              The core challenge was turning a physical, analog-feeling workflow
              into a coherent data model. I mapped the real desk into structured
              entities — input channels, DCA groups, buses, matrices, and FX
              returns — with routing relationships between them, then layered
              learning pathways and certification progression on top through a
              Prisma schema built to move from SQLite locally to PostgreSQL in
              production without rework.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-lg font-semibold text-white sm:text-xl">Core product decisions</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
                <h3 className="text-sm font-semibold text-white">Model the real console</h3>
                <p className="mt-3 text-sm text-white/80">
                  Instead of generic diagrams, the platform encodes the church&apos;s
                  actual X32 setup so operators learn the exact channels, routing,
                  and DCA groups they will use on Sunday.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
                <h3 className="text-sm font-semibold text-white">Role-based pathways</h3>
                <p className="mt-3 text-sm text-white/80">
                  Specialist tracks — Foundations, FOH Operator, and Livestream
                  Specialist — give each volunteer a clear progression with modules,
                  labs, and measured completion.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
                <h3 className="text-sm font-semibold text-white">Evidence-led certification</h3>
                <p className="mt-3 text-sm text-white/80">
                  Progression is governed by lessons, assessments, service evidence,
                  and mentor sign-off, so a certification reflects real, observed
                  ability rather than clicks.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
                <h3 className="text-sm font-semibold text-white">Service-day readiness</h3>
                <p className="mt-3 text-sm text-white/80">
                  Academy work points directly into service checklists, SOPs, and
                  live fault recovery, closing the gap between learning and running
                  an actual service.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-lg font-semibold text-white sm:text-xl">What this project demonstrates</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/80">
                <li>Modelling a complex real-world domain into structured, queryable data.</li>
                <li>Designing a Prisma schema that scales from a local SQLite MVP to PostgreSQL in production.</li>
                <li>Building and organising a large Next.js App Router codebase across many feature areas.</li>
                <li>Turning tacit expert knowledge into a structured, teachable, and certifiable system.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white sm:text-xl">Next improvements</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/80">
                <li>Ship the PostgreSQL production deployment with authenticated multi-user accounts.</li>
                <li>Expand the Sound Lab with more generated listening and mixing exercises.</li>
                <li>Add mentor dashboards for reviewing service evidence and sign-off.</li>
                <li>Broaden the console model to cover additional venues and desks.</li>
              </ul>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-lg font-semibold text-white sm:text-xl">Product walkthrough screenshots</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/70">
              From the interactive console reference through the structured
              specialist learning pathways.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <Screenshot
                src="/screenshots/sound-academy-x32.png"
                alt="Interactive VBCI X32 console with channel information panel"
                caption="The X32 console explorer with a per-channel information panel covering type, purpose, routing, and church usage."
              />
              <Screenshot
                src="/screenshots/sound-platform-dashboard.png"
                alt="Sound Academy pathways and specialist roadmap"
                caption="Academy pathways tie learning to competencies and certification, with a specialist roadmap and a training command panel."
              />
            </div>
          </section>
        </div>
      </main>
    </PageTransition>
  );
}
