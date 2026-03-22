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

export default function ApplicationCommandCenterPage() {
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
              Application Command Centre: Premium Job CRM
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-white/70 sm:text-base">
              Application Command Centre is a premium job application CRM built for disciplined
              career execution. It combines a full application pipeline, reminders, templates,
              document storage, and analytics in one secure workflow.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 text-xs text-white/80">
              <span className="rounded-full bg-white/5 px-3 py-1">Next.js App Router</span>
              <span className="rounded-full bg-white/5 px-3 py-1">Supabase Auth + Postgres</span>
              <span className="rounded-full bg-white/5 px-3 py-1">RLS security model</span>
              <span className="rounded-full bg-white/5 px-3 py-1">Server actions</span>
              <span className="rounded-full bg-white/5 px-3 py-1">Analytics dashboard</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold">
              <a
                href="https://application-command-center.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-white/90 px-5 py-2 text-[#050716] transition hover:bg-white"
              >
                Live site
                <span className="ml-2">↗</span>
              </a>
              <a
                href="https://github.com/JoshHil97/application-command-center"
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
                src="/screenshots/application-command-landing.png"
                alt="Application Command Centre landing page"
                className="w-full"
                onError={(event) => {
                  const img = event.currentTarget;
                  img.onerror = null;
                  img.src = "/screenshots/oilfor-placeholder.svg";
                }}
              />
            </div>
            <p className="mt-3 text-xs text-white/55">
              Landing experience with a clear value proposition for interview readiness and organised pipeline execution.
            </p>
          </section>

          <section className="mt-12 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
            <div className="space-y-5 text-sm leading-relaxed text-white/80">
              <h2 className="text-lg font-semibold text-white sm:text-xl">Problem and direction</h2>
              <p>
                Job searching often breaks across notes, spreadsheets, documents, and reminders.
                That fragmentation leads to missed follow-ups, weaker interview prep, and poor visibility
                across the overall pipeline.
              </p>
              <p>
                This project was designed as a premium command centre: one workspace to track
                applications, manage related companies and contacts, store documents, and monitor
                performance trends.
              </p>
              <p>
                The emphasis was reliable workflow design with strong data boundaries, not just
                pretty dashboards.
              </p>
            </div>

            <aside className="space-y-4 rounded-2xl border border-white/10 bg-[#090B1C] p-5 text-xs text-white/80">
              <h3 className="text-sm font-semibold text-white">Project snapshot</h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-white/50">Type:</span> Full stack SaaS-style platform
                </li>
                <li>
                  <span className="text-white/50">Primary users:</span> Job seekers and career switchers
                </li>
                <li>
                  <span className="text-white/50">Data model:</span> Applications, companies, contacts,
                  documents, templates, reminders
                </li>
                <li>
                  <span className="text-white/50">Security:</span> Supabase auth + row-level security
                </li>
              </ul>
            </aside>
          </section>

          <section className="mt-16">
            <h2 className="text-lg font-semibold text-white sm:text-xl">Core features delivered</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
                <h3 className="text-sm font-semibold text-white">Applications CRM</h3>
                <p className="mt-3 text-sm text-white/80">
                  Searchable table, filters, sorting, bulk status updates, draft flows, and CSV export
                  for full pipeline control.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
                <h3 className="text-sm font-semibold text-white">Application memory bank</h3>
                <p className="mt-3 text-sm text-white/80">
                  Status history, notes by context, reminders, and linked documents on each application
                  detail page.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
                <h3 className="text-sm font-semibold text-white">Supporting directories</h3>
                <p className="mt-3 text-sm text-white/80">
                  Dedicated company and contact modules keep prep notes and stakeholder context organised.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
                <h3 className="text-sm font-semibold text-white">Analytics and templates</h3>
                <p className="mt-3 text-sm text-white/80">
                  Funnel visibility, weekly activity trends, and reusable templates to improve consistency
                  in outreach and follow-up.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-lg font-semibold text-white sm:text-xl">Engineering focus</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/80">
                <li>Schema-first design with migration files, constraints, indexes, and trigger-based activity logs.</li>
                <li>Row-level security policies to enforce data isolation per authenticated user.</li>
                <li>Server actions and validators to keep writes safe and predictable.</li>
                <li>Responsive dashboard layout for mobile, tablet, and desktop usage.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white sm:text-xl">What this project shows</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/80">
                <li>Ability to design and ship a commercially credible product workflow end to end.</li>
                <li>Strong full stack execution across UX, data modelling, validation, and auth boundaries.</li>
                <li>Practical product thinking: speed, reliability, and usability balanced together.</li>
                <li>A premium quality interface built with maintainable structure and clean component patterns.</li>
              </ul>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-lg font-semibold text-white sm:text-xl">Product walkthrough screenshots</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/70">
              Full workflow coverage from overview to application creation, including directories,
              templates, document handling, and analytics.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <Screenshot
                src="/screenshots/application-command-overview.png"
                alt="Application Command Centre overview dashboard"
                caption="Overview dashboard with key pipeline metrics, reminders, and recent activity blocks."
              />
              <Screenshot
                src="/screenshots/application-command-applications.png"
                alt="Application Command Centre applications page"
                caption="Applications module with filters, sorting, bulk actions, and CSV export."
              />
              <Screenshot
                src="/screenshots/application-command-companies.png"
                alt="Application Command Centre companies directory"
                caption="Companies module for interview process notes, salary notes, and linked records."
              />
              <Screenshot
                src="/screenshots/application-command-contacts.png"
                alt="Application Command Centre contacts directory"
                caption="Contacts module for recruiter and hiring manager records with quick linking."
              />
              <Screenshot
                src="/screenshots/application-command-documents.png"
                alt="Application Command Centre documents library"
                caption="Documents library with upload fields, category filters, and application attachment."
              />
              <Screenshot
                src="/screenshots/application-command-templates.png"
                alt="Application Command Centre template vault"
                caption="Template vault for reusable blocks across cover letters and interview responses."
              />
              <Screenshot
                src="/screenshots/application-command-analytics.png"
                alt="Application Command Centre analytics dashboard"
                caption="Analytics dashboard section designed for weekly tracking and funnel visibility."
              />
              <Screenshot
                src="/screenshots/application-command-new-application.png"
                alt="Application Command Centre new application form"
                caption="Comprehensive new-application form with role data, status, dates, and job snapshot fields."
              />
            </div>
          </section>
        </div>
      </main>
    </PageTransition>
  );
}
