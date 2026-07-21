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

export default function BudgetSavingsPage() {
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
              Budget &amp; Savings Goals: A Local-First Money Planner
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-white/70 sm:text-base">
              Most budgeting apps ask you to hand over bank access and trust a
              server with your money data. I built the opposite: a private,
              local-first planner that separates planning from tracking, runs
              entirely in the browser, and keeps every profile&apos;s data on the
              user&apos;s own device. I owned the full build — data model,
              financial calculations, and UI — with no framework and no backend.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 text-xs text-white/80">
              <span className="rounded-full bg-white/5 px-3 py-1">Vanilla JavaScript</span>
              <span className="rounded-full bg-white/5 px-3 py-1">No framework</span>
              <span className="rounded-full bg-white/5 px-3 py-1">localStorage</span>
              <span className="rounded-full bg-white/5 px-3 py-1">Financial calculations</span>
              <span className="rounded-full bg-white/5 px-3 py-1">CSV / JSON backup</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold">
              <a
                href="https://budget-tracker-jcx4.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-white/90 px-5 py-2 text-[#050716] transition hover:bg-white"
              >
                Live site
                <span className="ml-2">↗</span>
              </a>
              <a
                href="https://github.com/JoshHil97/budget-tracker"
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
                src="/screenshots/budget-dashboard.png"
                alt="Budget & Savings dashboard with monthly summary cards"
                className="w-full"
                onError={(event) => {
                  const img = event.currentTarget;
                  img.onerror = null;
                  img.src = "/screenshots/oilfor-placeholder.svg";
                }}
              />
            </div>
            <p className="mt-3 text-xs text-white/55">
              The dashboard opens on an at-a-glance summary — monthly income,
              planned commitments, actual spending, and a live &ldquo;safe to
              spend&rdquo; figure — plus a guided setup checklist for new users.
            </p>
          </section>

          <section className="mt-12 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
            <div className="space-y-5 text-sm leading-relaxed text-white/80">
              <h2 className="text-lg font-semibold text-white sm:text-xl">Problem and goal</h2>
              <p>
                Spreadsheets are flexible but easy to break, and most budgeting
                apps trade privacy for convenience by syncing everything to a
                server. I wanted a tool that was genuinely useful for everyday
                planning without asking anyone to connect a bank or create an
                account.
              </p>
              <p>
                The goal was to separate two things that most budgets muddle
                together: <strong>planning</strong> the month before it happens,
                and <strong>tracking</strong> what actually did happen. Keeping
                those distinct is what makes a &ldquo;safe to spend&rdquo; number
                trustworthy.
              </p>
              <p>
                It also had to be durable. Because there is no backend, the app
                treats the user&apos;s data as precious — with backups, recovery
                points, and CSV export so nothing is ever locked in or lost.
              </p>
            </div>

            <aside className="space-y-4 rounded-2xl border border-white/10 bg-[#090B1C] p-5 text-xs text-white/80">
              <h3 className="text-sm font-semibold text-white">Project snapshot</h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-white/50">Type:</span> Local-first web app (v1.0.0)
                </li>
                <li>
                  <span className="text-white/50">Flow:</span> Plan → track → review progress
                </li>
                <li>
                  <span className="text-white/50">Storage:</span> Browser localStorage, per-profile
                </li>
                <li>
                  <span className="text-white/50">Stack:</span> HTML, CSS, vanilla JS — no build step
                </li>
                <li>
                  <span className="text-white/50">Ownership:</span> Data model, financial logic,
                  UI, and backup/restore system
                </li>
                <li>
                  <span className="text-white/50">Technical highlight:</span> A deterministic
                  allocation engine that turns income into giving, essentials,
                  sinking funds, savings, and free-to-invest money.
                </li>
              </ul>
            </aside>
          </section>

          <section className="mt-10 rounded-2xl border border-white/10 bg-[#090B1C] p-5 text-sm text-white/80">
            <h2 className="text-lg font-semibold text-white sm:text-xl">
              Challenge and solution
            </h2>
            <p className="mt-3 leading-relaxed">
              The hardest part was state: with no database, every profile,
              month, category, savings pot, and sinking fund lives in structured
              localStorage that has to stay consistent across monthly rollover
              and recurring items. I solved it with a single source-of-truth data
              model per profile, pure calculation functions that derive every
              summary figure on read, and a versioned backup/restore layer with
              recovery points so a bad edit is never destructive.
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-lg font-semibold text-white sm:text-xl">Core product decisions</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
                <h3 className="text-sm font-semibold text-white">Plan and track kept separate</h3>
                <p className="mt-3 text-sm text-white/80">
                  Planning sets intended income, categories, savings, and sinking
                  funds; tracking records what actually happened. The gap between
                  them drives an honest &ldquo;safe to spend&rdquo; number.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
                <h3 className="text-sm font-semibold text-white">Deterministic allocation engine</h3>
                <p className="mt-3 text-sm text-white/80">
                  &ldquo;This month&apos;s plan&rdquo; distributes income in a
                  fixed order — giving, essentials, sinking funds, savings, then
                  free money — and confirms when the month is debt-free and
                  covered.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
                <h3 className="text-sm font-semibold text-white">Sinking funds with schedules</h3>
                <p className="mt-3 text-sm text-white/80">
                  Known future costs get a target month and value, and the app
                  computes the per-month amount required and whether each fund is
                  on track or behind.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
                <h3 className="text-sm font-semibold text-white">Private, portable data</h3>
                <p className="mt-3 text-sm text-white/80">
                  Multiple passcode-protected profiles, plus JSON backup/restore
                  with recovery points and CSV import/export, keep data private
                  on-device yet never locked in.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-lg font-semibold text-white sm:text-xl">What this project demonstrates</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/80">
                <li>Building a genuinely complex app in vanilla JS — no framework, no runtime dependencies.</li>
                <li>Designing a consistent client-side data model that survives monthly rollover and recurring items.</li>
                <li>Writing pure, testable financial calculations that derive every summary figure on read.</li>
                <li>Treating data durability as a feature: backups, recovery points, and open CSV/JSON formats.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white sm:text-xl">Next improvements</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/80">
                <li>Optional encrypted cloud sync so profiles can move between devices.</li>
                <li>Richer analytics with historical trend charts across saved months.</li>
                <li>Shared budget rooms with per-member permissions.</li>
                <li>Automated test coverage around the allocation and rollover logic.</li>
              </ul>
            </div>
          </section>

          <section className="mt-16">
            <h2 className="text-lg font-semibold text-white sm:text-xl">Product walkthrough screenshots</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/70">
              End-to-end flow from planning the month through the allocation
              waterfall, savings pots, sinking funds, and locally calculated
              tracking insights.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <Screenshot
                src="/screenshots/budget-planning.png"
                alt="Planning view with monthly income and tithe"
                caption="Planning starts with income so every budget and savings figure can be checked against available money."
              />
              <Screenshot
                src="/screenshots/budget-categories.png"
                alt="Budget categories with budgeted vs actual"
                caption="Budget categories compare planned commitments against actual spend, with a running total and difference."
              />
              <Screenshot
                src="/screenshots/budget-savings.png"
                alt="Savings allocation across pots"
                caption="Savings allocation sets aside income across named pots and priorities for the month."
              />
              <Screenshot
                src="/screenshots/budget-sinking-funds.png"
                alt="Sinking funds with target month and monthly requirement"
                caption="Sinking funds schedule known future costs and compute the monthly amount needed to stay on track."
              />
              <Screenshot
                src="/screenshots/budget-plan.png"
                alt="This month's plan allocation waterfall"
                caption="The allocation waterfall distributes income in order and confirms when the month is debt-free and covered."
              />
              <Screenshot
                src="/screenshots/budget-insights.png"
                alt="Monthly insights and tracking view"
                caption="Tracking surfaces locally calculated insights — savings rate, unallocated income, and upcoming planned costs."
              />
              <Screenshot
                src="/screenshots/budget-actual-spending.png"
                alt="Actual spending against plan per category"
                caption="Actual spending compares logged purchases against each category's plan, with per-category progress bars and remaining amounts."
              />
              <Screenshot
                src="/screenshots/budget-summary.png"
                alt="Monthly summary with where-the-money-went donut chart"
                caption="The monthly summary reviews giving, saving, spending, and cash remaining, with a hand-built donut chart breaking down where income went."
              />
              <Screenshot
                src="/screenshots/budget-goals.png"
                alt="Savings goals progress tracking"
                caption="Progress view tracks longer-term savings goals with targets, monthly contributions, and estimated completion."
              />
            </div>
          </section>
        </div>
      </main>
    </PageTransition>
  );
}
