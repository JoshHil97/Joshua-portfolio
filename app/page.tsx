"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import LightningBadge from "@/components/LightningBadge";

type JourneyItemProps = {
  label: string;
  title: string;
  body: string;
  tags: string[];
  highlight?: boolean;
  isFuture?: boolean;
};

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* HERO / HOME */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden pt-24"
      >
        {/* Background gradients */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#6C63FF]/30 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#9AE1FF]/20 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(154,225,255,0.08),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(108,99,255,0.12),_transparent_60%)]" />
        </div>

        <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-12 px-4 md:flex-row md:items-center">
          {/* LEFT: text */}
          <div className="flex-1 space-y-6">
            <LightningBadge label="Software Engineer · Full-Stack & Mobile" />

            <div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">Joshua Hilarion</span>
                <span className="mt-2 block text-lg font-normal text-white/60 sm:text-xl">
                  Building modern apps with clean code and{" "}
                  <span className="bg-gradient-to-r from-[#9AE1FF] via-[#6C63FF] to-[#F9F871] bg-clip-text font-semibold text-transparent">
                    smooth, intentional experiences.
                  </span>
                </span>
              </h1>
            </div>

            <p className="max-w-xl text-sm text-white/65 sm:text-base">
              I&apos;m a full-stack developer who loves turning ideas into real
              products — from the <strong>Makers BnB Project</strong>, an
              Airbnb-style booking app built at Makers Academy, to a church
              directory and a spiritual wellness app on mobile.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="/projects/makers-bnb"
                className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#6C63FF] via-[#9AE1FF] to-[#6C63FF] px-6 py-3 text-sm font-semibold text-[#050716] shadow-[0_0_30px_rgba(154,225,255,0.9)] transition hover:brightness-110"
              >
                View Makers BnB Project
                <span className="ml-2 transition-transform group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 backdrop-blur-md transition hover:border-[#9AE1FF]/70 hover:text-white"
              >
                See All Projects
              </a>
            </div>

            {/* quick tags */}
            <div className="mt-4 flex flex-wrap gap-3 text-xs text-white/60 sm:text-sm">
              <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#9AE1FF]" />
                Full-stack web · mobile
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#6C63FF]" />
                Makers Academy · TDD · teamwork
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F9F871]" />
                React · Spring Boot · React Native
              </div>
            </div>
          </div>

          {/* RIGHT card */}
          <div className="flex-1">
            <div className="relative mx-auto flex h-80 max-w-sm items-center justify-center md:h-96">
              <div className="absolute h-64 w-64 rounded-full border border-[#9AE1FF]/30 bg-gradient-to-b from-white/5 to-transparent shadow-[0_0_50px_rgba(154,225,255,0.7)] blur-[1px]" />
              <div className="absolute h-72 w-72 rotate-12 rounded-full border border-[#6C63FF]/30" />

              <div className="relative z-10 w-full max-w-xs rounded-3xl border border-white/10 bg-gradient-to-b from-[#101326] to-[#050716] p-5 shadow-[0_0_35px_rgba(0,0,0,0.8)] backdrop-blur-xl">
                <div className="mb-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                    Featured Project
                  </p>
                  <p className="text-sm font-semibold text-white">
                    Makers BnB Project
                  </p>
                  <p className="text-xs text-white/60">
                    Airbnb-style booking platform
                  </p>
                </div>

                <p className="text-xs text-white/65">
                  Full-stack web app with authentication, listings, and booking
                  flows — built in a test-driven team at Makers Academy.
                </p>

                <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-white/70">
                  <span className="rounded-full bg-white/5 px-2.5 py-1">
                    MVC · REST API
                  </span>
                  <span className="rounded-full bg-white/5 px-2.5 py-1">
                    Auth &amp; bookings
                  </span>
                  <span className="rounded-full bg-white/5 px-2.5 py-1">
                    TDD · Code reviews
                  </span>
                </div>

                <div className="mt-4 flex items-center justify-between text-[11px] text-white/55">
                  <span>Centre of the portfolio</span>
                  <span className="inline-flex items-center gap-1 text-[#9AE1FF]">
                    Scroll to section
                    <span>↧</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAKERS BNB SECTION */}
      <section
        id="makers-bnb"
        className="border-t border-white/10 bg-[#050716] py-20"
      >
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 md:flex-row">
          {/* LEFT: Title + story */}
          <div className="flex-1 space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9AE1FF]">
              Featured Project
            </p>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Makers BnB Project
            </h2>

            <p className="text-sm text-white/70 sm:text-base">
              <span className="font-semibold">Makers BnB</span> is an
              Airbnb-style booking platform I built as part of my final
              engineering project at Makers Academy. Our team designed and
              implemented a full end-to-end experience for guests to browse
              spaces, request bookings, and manage their stays.
            </p>

            <p className="text-sm text-white/60 sm:text-base">
              We focused on clean, test-driven code and strong collaboration:
              pair programming, code reviews, and small, well-defined user
              stories. The result was a real product that felt like something
              you could ship to users, not just a coding exercise.
            </p>

            {/* Links */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="/projects/makers-bnb"
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-md transition hover:bg-white/15"
              >
                View case study
                <span className="ml-2">↗</span>
              </a>
              <a
                href="https://github.com/JoshHil97/makersbnb-case-study"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-md transition hover:border-[#9AE1FF]/70 hover:text-white"
              >
                View code
                <span className="ml-2">↗</span>
              </a>
            </div>
          </div>

          {/* RIGHT: Screenshot + tech */}
          <div className="flex-1 space-y-5">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
              <img
                src="/screenshots/makersbnb.png"
                alt="Makers BnB listings page"
                className="w-full object-cover"
              />
            </div>

            {/* Tech stack card */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#090B1C] to-[#050716] p-5 shadow-[0_0_30px_rgba(0,0,0,0.7)]">
              <h3 className="text-sm font-semibold text-white">
                Tech stack & responsibilities
              </h3>
              <div className="mt-3 grid grid-cols-2 gap-3 text-xs text-white/70">
                <div className="space-y-1">
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-white/40">
                    Backend
                  </p>
                  <ul className="space-y-1">
                    <li>Ruby · Sinatra</li>
                    <li>PostgreSQL database</li>
                    <li>Authentication &amp; sessions</li>
                  </ul>
                </div>

                <div className="space-y-1">
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-white/40">
                    Frontend
                  </p>
                  <ul className="space-y-1">
                    <li>ERB views</li>
                    <li>Listing & booking flows</li>
                    <li>Responsive layout</li>
                  </ul>
                </div>

                <div className="space-y-1">
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-white/40">
                    Practices
                  </p>
                  <ul className="space-y-1">
                    <li>TDD with RSpec</li>
                    <li>Feature tests (Capybara)</li>
                    <li>Pair programming</li>
                  </ul>
                </div>

                <div className="space-y-1">
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-white/40">
                    Focus
                  </p>
                  <ul className="space-y-1">
                    <li>Real product thinking</li>
                    <li>User flows</li>
                    <li>Collaboration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY SECTION */}
      <section
        id="journey"
        className="border-t border-white/10 bg-[#050716] py-24"
      >
        <div className="relative mx-auto max-w-5xl px-4">
          {/* Vortex-style background */}
          <div className="pointer-events-none absolute inset-0">
            {/* Glow core */}
            <div className="absolute left-1/2 top-16 h-56 w-56 -translate-x-1/2 rounded-full bg-[#6C63FF]/30 blur-3xl" />

            {/* Spinning rings */}
            <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full border border-[#9AE1FF]/20 animate-spin-slow" />
            <div className="absolute left-1/2 top-14 h-96 w-96 -translate-x-1/2 rounded-full border border-white/5 -animate-spin-slower" />

            {/* Vertical energy beam */}
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          </div>

          {/* Content wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative transform-gpu"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9AE1FF]">
              Journey
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Through the vortex: how I got here
            </h2>
            <p className="mt-3 max-w-xl text-sm text-white/65">
              A quick tour from my first tiny experiments during lockdown to
              full-stack products and a mobile app — the projects that shaped
              how I think as an engineer.
            </p>

            {/* Timeline / stream */}
            <div className="relative mt-14 space-y-12 md:space-y-16">
              {/* 1 – Lockdown start */}
              <JourneyItemLeft
                label="2020 · Lockdown"
                title="First lines of code"
                body="Started exploring Python and small scripts. Debugging went from frustrating to strangely satisfying — and I realised I wanted to build real things, not just follow tutorials."
                tags={["Python", "Foundations", "Debugging"]}
              />

              {/* 2 – Streamlit Church Directory */}
              <JourneyItemRight
                label="Early project · Streamlit"
                title="Church Directory (Prototype)"
                body="Built a simple Streamlit app to list church members — my first attempt at replacing messy spreadsheets with something cleaner and more useful."
                tags={["Python", "Streamlit", "Real problem"]}
              />

              {/* 3 – Accountability Tracker */}
              <JourneyItemLeft
                label="Early project · Streamlit"
                title="Accountability Tracker"
                body="A lightweight tracker for habits and check-ins. Helped me think about data, people, and encouragement rather than just UI on its own."
                tags={["Python", "Data & forms"]}
              />

              {/* 4 – Makers Academy */}
              <JourneyItemRight
                label="Training arc"
                title="Makers Academy"
                body="Intensive bootcamp where I learned to work like an engineer: TDD, pair programming, Agile, and building full-stack apps with a team and real workflows."
                tags={["TDD", "Pair programming", "Agile"]}
              />

              {/* 5 – Makers BnB */}
              <JourneyItemLeft
                highlight
                label="Capstone · Makers"
                title="Makers BnB Project"
                body="Final engineering project: an Airbnb-style booking platform with authentication, listings, and booking flows — all built test-first in a cross-functional team."
                tags={["Full-stack web", "Auth & bookings", "Team project"]}
              />

              {/* 6 – VBCI Church Directory */}
              <JourneyItemRight
                label="Real client-style app"
                title="VBCI Church Directory"
                body="Evolved the original Streamlit idea into a proper full-stack app with Spring Boot, React, and Tailwind — branded around VBCI and built to be genuinely useful."
                tags={["Spring Boot", "React", "Tailwind"]}
              />

              {/* 7 – SoulAnchor */}
              <JourneyItemLeft
                label="Mobile UX"
                title="SoulAnchor App"
                body="A React Native app for spiritual encouragement, using animated gradients, swipeable cards, and an emotion-based content engine focused on how people actually feel."
                tags={["React Native", "Animations", "Product thinking"]}
              />

              {/* 8 – Next steps */}
              <JourneyItemRight
                label="Coming next"
                title="Next.js · Cloud · Beyond"
                body="Continuing the journey with more TypeScript/Next.js work, deeper backend projects, and cloud deployments — building on everything above."
                tags={["Next.js", "TypeScript", "Cloud"]}
                isFuture
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section
        id="projects"
        className="border-t border-white/10 bg-[#050716] py-20"
      >
        <div className="mx-auto max-w-5xl px-4">
          {/* Header */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9AE1FF]">
                Projects
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Selected work
              </h2>
            </div>
            <p className="max-w-md text-sm text-white/65">
              Full-stack web, real client work, and mobile — centred around the
              Makers BnB project.
            </p>
          </div>

          {/* Project cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Makers BnB summary card */}
            <motion.article
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 24px 60px rgba(0,0,0,0.65)",
              }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="flex flex-col rounded-2xl border border-[#6C63FF]/40 bg-gradient-to-b from-[#101326] to-[#050716] p-5 shadow-[0_0_32px_rgba(108,99,255,0.4)]"
            >
              {/* Screenshot */}
              <div className="mb-3 overflow-hidden rounded-xl border border-white/5 bg-black/40">
                <img
                  src="/screenshots/makersbnb.png"
                  alt="Makers BnB UI"
                  className="h-32 w-full object-cover"
                />
              </div>

              <h3 className="text-sm font-semibold text-white">
                Makers BnB Project
              </h3>

              <p className="mt-2 text-xs text-white/70">
                Airbnb-style booking platform built as a final team project at
                Makers Academy.
              </p>

              <div className="mt-3 flex flex-wrap gap-2 text-[0.7rem] text-white/70">
                <span className="rounded-full bg-white/5 px-2 py-1">
                  Full-stack
                </span>
                <span className="rounded-full bg-white/5 px-2 py-1">
                  Bookings
                </span>
                <span className="rounded-full bg-white/5 px-2 py-1">TDD</span>
              </div>

              <div className="mt-4 flex-1" />

              <div className="mt-4 flex flex-col gap-1 text-xs font-semibold">
                <a
                  href="/projects/makers-bnb"
                  className="inline-flex items-center text-[#9AE1FF] transition hover:text-white"
                >
                  View project details
                  <span className="ml-1">↗</span>
                </a>
                <a
                  href="https://github.com/JoshHil97/makersbnb-case-study"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-white/70 transition hover:text-white"
                >
                  View code
                  <span className="ml-1">↗</span>
                </a>
              </div>
            </motion.article>

            {/* VBCI CARD */}
            <motion.article
              whileHover={{
                y: -6,
                scale: 1.015,
                boxShadow: "0 18px 45px rgba(0,0,0,0.6)",
              }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="flex flex-col rounded-2xl border border-white/10 bg-[#090B1C] p-5"
            >
              {/* Screenshot */}
              <div className="mb-3 overflow-hidden rounded-xl border border-white/5 bg-black/40">
                <img
                  src="/screenshots/vbci-search.png"
                  alt="VBCI Church Directory UI"
                  className="h-32 w-full object-cover"
                />
              </div>

              <h3 className="text-sm font-semibold text-white">
                VBCI Church Directory
              </h3>

              <p className="mt-2 text-xs text-white/70">
                A real-world church member directory built with Spring Boot +
                React/Tailwind.
              </p>

              <div className="mt-3 flex flex-wrap gap-2 text-[0.7rem] text-white/70">
                <span className="rounded-full bg-white/5 px-2 py-1">
                  Spring Boot
                </span>
                <span className="rounded-full bg-white/5 px-2 py-1">React</span>
                <span className="rounded-full bg-white/5 px-2 py-1">
                  CRUD + Search
                </span>
              </div>

              <div className="mt-4 flex-1" />

              <div className="mt-4 flex flex-col gap-1 text-xs font-semibold">
                <a
                  href="/projects/vbci-church-directory"
                  className="inline-flex items-center text-[#9AE1FF] transition hover:text-white"
                >
                  View case study
                  <span className="ml-1">↗</span>
                </a>
                <a
                  href="https://vbci-church-directory-ui.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-white/70 transition hover:text-white"
                >
                  Live demo
                  <span className="ml-1">↗</span>
                </a>
                <a
                  href="https://github.com/JoshHil97/vbci-church-directory-ui"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-white/70 transition hover:text-white"
                >
                  View code
                  <span className="ml-1">↗</span>
                </a>
              </div>
            </motion.article>

            {/* SoulAnchor CARD */}
            <motion.article
              whileHover={{
                y: -6,
                scale: 1.015,
                boxShadow: "0 18px 45px rgba(0,0,0,0.6)",
              }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="flex flex-col rounded-2xl border border-white/10 bg-[#090B1C] p-5"
            >
              {/* Screenshot */}
              <div className="mb-3 overflow-hidden rounded-xl border border-white/5 bg-black/40">
                <img
                  src="/screenshots/soulanchor-saved.png"
                  alt="SoulAnchor mobile UI"
                  className="h-32 w-full object-cover"
                />
              </div>

              <h3 className="text-sm font-semibold text-white">
                SoulAnchor App
              </h3>

              <p className="mt-2 text-xs text-white/70">
                A React Native app offering verses, messages, and prayer based
                on emotion.
              </p>

              <div className="mt-3 flex flex-wrap gap-2 text-[0.7rem] text-white/70">
                <span className="rounded-full bg-white/5 px-2 py-1">
                  React Native
                </span>
                <span className="rounded-full bg-white/5 px-2 py-1">
                  Animations
                </span>
                <span className="rounded-full bg-white/5 px-2 py-1">
                  Emotions Engine
                </span>
              </div>

              <div className="mt-4 flex-1" />

              <div className="mt-4 flex flex-col gap-1 text-xs font-semibold">
                <a
                  href="/projects/soulanchor"
                  className="inline-flex items-center text-[#9AE1FF] transition hover:text-white"
                >
                  View case study
                  <span className="ml-1">↗</span>
                </a>
                <a
                  href="exp://gfszcwq-anonymous-8082.exp.direct"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-white/70 transition hover:text-white"
                >
                  Open in Expo Go
                  <span className="ml-1">↗</span>
                </a>
                <a
                  href="https://github.com/JoshHil97/Soulanchor-app"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-white/70 transition hover:text-white"
                >
                  View code
                  <span className="ml-1">↗</span>
                </a>
              </div>
            </motion.article>

            {/* Accountability Tracker CARD */}
            <motion.article
              whileHover={{
                y: -6,
                scale: 1.015,
                boxShadow: "0 18px 45px rgba(0,0,0,0.6)",
              }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="flex flex-col rounded-2xl border border-white/10 bg-[#090B1C] p-5"
            >
              {/* Screenshot */}
              <div className="mb-3 overflow-hidden rounded-xl border border-white/5 bg-black/40">
                <img
                  src="/screenshots/accountability-today.png"
                  alt="Accountability tracker today view"
                  className="h-32 w-full object-cover"
                />
              </div>

              <h3 className="text-sm font-semibold text-white">
                Accountability Tracker
              </h3>

              <p className="mt-2 text-xs text-white/70">
                A data-focused accountability dashboard for tracking habits and
                lifestyle metrics using Streamlit.
              </p>

              <div className="mt-3 flex flex-wrap gap-2 text-[0.7rem] text-white/70">
                <span className="rounded-full bg-white/5 px-2 py-1">
                  Python
                </span>
                <span className="rounded-full bg-white/5 px-2 py-1">
                  Streamlit
                </span>
                <span className="rounded-full bg-white/5 px-2 py-1">
                  Data visualisation
                </span>
              </div>

              <div className="mt-4 flex-1" />

              <div className="mt-4 flex flex-col gap-1 text-xs font-semibold">
                <a
                  href="https://accountabilityapp-ckxx4fr7d5bbxgqywo9fzs.streamlit.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center text-[#9AE1FF] transition hover:text-white"
                >
                  Live demo
                  <span className="ml-1">↗</span>
                </a>
                {/* Add a GitHub link here later when you have a repo URL */}
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section
        id="skills"
        className="border-t border-white/10 bg-[#050716] py-20"
      >
        <div className="mx-auto max-w-5xl px-4">
          {/* Header */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9AE1FF]">
                Skills &amp; Tech
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                How I build
              </h2>
            </div>

            <p className="max-w-md text-sm text-white/65">
              A foundation in full-stack web and mobile development — focusing
              on clean code, problem-solving, and collaborative engineering.
            </p>
          </div>

          {/* Skill Cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Languages */}
            <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
              <h3 className="text-sm font-semibold text-white">Languages</h3>
              <p className="mt-1 text-xs text-white/50">
                Comfortable across backend, frontend, and scripting.
              </p>

              <div className="mt-3 flex flex-wrap gap-2 text-[0.7rem] text-white/85">
                <span className="rounded-full bg-white/5 px-2 py-1">Java</span>
                <span className="rounded-full bg-white/5 px-2 py-1">
                  JavaScript
                </span>
                <span className="rounded-full bg-white/5 px-2 py-1">
                  TypeScript
                </span>
                <span className="rounded-full bg-white/5 px-2 py-1">
                  Python
                </span>
                <span className="rounded-full bg-white/5 px-2 py-1">SQL</span>
              </div>
            </div>

            {/* Frameworks */}
            <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
              <h3 className="text-sm font-semibold text-white">
                Frameworks &amp; Libraries
              </h3>
              <p className="mt-1 text-xs text-white/50">
                Tools for building full-stack and mobile experiences.
              </p>

              <div className="mt-3 flex flex-wrap gap-2 text-[0.7rem] text-white/85">
                <span className="rounded-full bg-white/5 px-2 py-1">React</span>
                <span className="rounded-full bg-white/5 px-2 py-1">
                  React Native
                </span>
                <span className="rounded-full bg-white/5 px-2 py-1">
                  Spring Boot
                </span>
                <span className="rounded-full bg-white/5 px-2 py-1">
                  Next.js
                </span>
                <span className="rounded-full bg-white/5 px-2 py-1">
                  Express
                </span>
                <span className="rounded-full bg-white/5 px-2 py-1">
                  Tailwind CSS
                </span>
              </div>
            </div>

            {/* Tools */}
            <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
              <h3 className="text-sm font-semibold text-white">Tools</h3>
              <p className="mt-1 text-xs text-white/50">
                Everyday essentials for building and shipping.
              </p>

              <div className="mt-3 flex flex-wrap gap-2 text-[0.7rem] text-white/85">
                <span className="rounded-full bg-white/5 px-2 py-1">Git</span>
                <span className="rounded-full bg-white/5 px-2 py-1">
                  GitHub
                </span>
                <span className="rounded-full bg-white/5 px-2 py-1">
                  Postman
                </span>
                <span className="rounded-full bg-white/5 px-2 py-1">
                  Docker (learning)
                </span>
              </div>
            </div>

            {/* Practices */}
            <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
              <h3 className="text-sm font-semibold text-white">Practices</h3>
              <p className="mt-1 text-xs text-white/50">
                How I write and organise code.
              </p>

              <div className="mt-3 flex flex-wrap gap-2 text-[0.7rem] text-white/85">
                <span className="rounded-full bg-white/5 px-2 py-1">TDD</span>
                <span className="rounded-full bg-white/5 px-2 py-1">
                  Pair programming
                </span>
                <span className="rounded-full bg-white/5 px-2 py-1">
                  Agile workflow
                </span>
                <span className="rounded-full bg-white/5 px-2 py-1">
                  REST API design
                </span>
                <span className="rounded-full bg-white/5 px-2 py-1">
                  Code reviews
                </span>
              </div>
            </div>

            {/* Soft skills */}
            <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
              <h3 className="text-sm font-semibold text-white">Soft Skills</h3>
              <p className="mt-1 text-xs text-white/50">
                The human side of engineering.
              </p>

              <ul className="mt-3 space-y-2 text-[0.8rem] leading-relaxed text-white/85">
                <li>• Clear and confident communicator.</li>
                <li>• Strong problem-solving mindset.</li>
                <li>• Team-first collaborator.</li>
                <li>• Growth-oriented and adaptable.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="border-t border-white/10 bg-[#050716] py-20"
      >
        <div className="mx-auto max-w-5xl px-4">
          {/* Header */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9AE1FF]">
                About Me
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                My journey into tech
              </h2>
            </div>

            <p className="max-w-md text-sm text-white/65">
              A story of curiosity, persistence, and creative problem-solving.
            </p>
          </div>

          {/* Content Grid */}
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {/* LEFT COLUMN — Story */}
            <div className="space-y-6 text-sm leading-relaxed text-white/80 sm:text-base">
              <p>
                I started exploring code during lockdown — realising that if
                “nothing comes from nothing,” the only option was to start
                building. Debugging became a challenge I genuinely enjoyed.
              </p>

              <p>
                Joining <strong>Makers Academy</strong> solidified everything. It
                wasn’t just about learning syntax — I learned how to think like
                an engineer. TDD, pair programming, clean code, version control,
                and how to build real products as a team.
              </p>

              <p>
                Since then, I&apos;ve built full-stack apps, mobile experiences, and
                my final project — the <strong>Makers BnB</strong> platform —
                which taught me more about engineering practices than anything
                else.
              </p>

              <p>
                At my core, I love building things that feel smooth, intentional,
                and genuinely helpful for people.
              </p>
            </div>

            {/* RIGHT COLUMN — Personality */}
            <div className="space-y-6 text-sm leading-relaxed text-white/80 sm:text-base">
              <p>
                Outside of coding, I draw inspiration from anime, modern
                techwear, and <strong>Doctor Who</strong> — the colours, the
                energy, the motion. That’s why this portfolio has lightning
                accents and vortex-style gradients.
              </p>

              <p>
                I’m driven by growth. Whether it’s trying a new stack, refactoring
                code to be cleaner, or helping someone understand a concept — I
                love that tech gives me space to constantly level up.
              </p>

              <p>
                My long-term goal:{" "}
                <strong>
                  become an engineer who builds meaningful products, uplifts
                  teams, and keeps learning fast.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="border-t border-white/10 bg-[#050716] py-20"
      >
        <div className="mx-auto max-w-5xl px-4">
          <div className="flex flex-col items-center text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9AE1FF]">
              Contact
            </p>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Let&apos;s build something together
            </h2>

            <p className="mt-3 max-w-xl text-sm text-white/65 sm:text-base">
              Open to junior software engineer and full-stack roles. If my work
              resonates with you, I&apos;d love to hear from you.
            </p>

            {/* Main CTA buttons */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:joshuahilarion@hotmail.com"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#6C63FF] via-[#9AE1FF] to-[#6C63FF] px-7 py-3 text-sm font-semibold text-[#050716] shadow-[0_0_28px_rgba(154,225,255,0.9)] transition hover:brightness-110"
              >
                Email me
                <span className="ml-2">↗</span>
              </a>

              <a
                href="https://github.com/JoshHil97"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 backdrop-blur-md transition hover:border-[#9AE1FF]/70 hover:text-white"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/joshua-hilarion-258461113"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/80 backdrop-blur-md transition hover:border-[#9AE1FF]/70 hover:text-white"
              >
                LinkedIn
              </a>
            </div>

            {/* Show email explicitly */}
            <p className="mt-4 text-xs text-white/50">
              Or reach me directly at{" "}
              <span className="font-mono text-white/80">
                joshuahilarion@hotmail.com
              </span>
            </p>

            {/* Footer note */}
            <p className="mt-8 text-xs text-white/45">
              Built with Next.js &amp; Tailwind CSS · Inspired by lightning,
              time vortices, and stories that move people.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

/* Journey helpers */

function JourneyItemLeft({
  label,
  title,
  body,
  tags,
  highlight,
  isFuture,
}: JourneyItemProps) {
  return (
    <div className="relative md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6">
      {/* LEFT column (content) */}
      <motion.div
        initial={{ opacity: 0, x: -24, rotateX: 12 }}
        whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-4 md:mb-0 md:text-right"
      >
        <p
          className={`text-xs font-semibold uppercase tracking-[0.17em] ${
            highlight
              ? "text-[#9AE1FF]"
              : isFuture
              ? "text-[#F9F871]/80"
              : "text-white/50"
          }`}
        >
          {label}
        </p>
        <h3 className="mt-1 text-sm font-semibold text-white">{title}</h3>
        <p className="mt-2 text-xs leading-relaxed text-white/70">{body}</p>
        <div className="mt-2 flex flex-wrap justify-end gap-2 text-[0.7rem] text-white/70">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-2 py-1 ${
                highlight
                  ? "bg-[#6C63FF]/30 border border-[#9AE1FF]/60"
                  : "bg-white/5"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Middle dot */}
      <div className="relative flex justify-center">
        <motion.div
          initial={{ scale: 0.4, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4 }}
          className={`z-10 h-3 w-3 rounded-full border ${
            highlight
              ? "border-[#F9F871] bg-[#050716]"
              : isFuture
              ? "border-[#F9F871] bg-gradient-to-br from-[#6C63FF] to-[#9AE1FF]"
              : "border-[#9AE1FF] bg-[#050716]"
          }`}
        />
      </div>

      {/* RIGHT spacer */}
      <div className="hidden md:block" />
    </div>
  );
}

function JourneyItemRight({
  label,
  title,
  body,
  tags,
  highlight,
  isFuture,
}: JourneyItemProps) {
  return (
    <div className="relative md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6">
      {/* LEFT spacer */}
      <div className="hidden md:block" />

      {/* Middle dot */}
      <div className="relative flex justify-center">
        <motion.div
          initial={{ scale: 0.4, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4 }}
          className={`z-10 h-3 w-3 rounded-full border ${
            highlight
              ? "border-[#F9F871] bg-[#050716]"
              : isFuture
              ? "border-[#F9F871] bg-gradient-to-br from-[#6C63FF] to-[#9AE1FF]"
              : "border-[#9AE1FF] bg-[#050716]"
          }`}
        />
      </div>

      {/* RIGHT column (content) */}
      <motion.div
        initial={{ opacity: 0, x: 24, rotateX: 12 }}
        whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mt-4 md:mt-0"
      >
        <p
          className={`text-xs font-semibold uppercase tracking-[0.17em] ${
            highlight
              ? "text-[#9AE1FF]"
              : isFuture
              ? "text-[#F9F871]/80"
              : "text-white/50"
          }`}
        >
          {label}
        </p>
        <h3 className="mt-1 text-sm font-semibold text-white">{title}</h3>
        <p className="mt-2 text-xs leading-relaxed text-white/70">{body}</p>
        <div className="mt-2 flex flex-wrap gap-2 text-[0.7rem] text-white/70">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-2 py-1 ${
                highlight
                  ? "bg-[#6C63FF]/30 border border-[#9AE1FF]/60"
                  : "bg-white/5"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
