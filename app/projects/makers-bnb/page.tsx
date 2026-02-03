"use client";

import PageTransition from "@/components/PageTransition";

export default function MakersBnbPage() {
    return (
        <PageTransition>
            <main className="min-h-screen bg-[#050716] pb-24 pt-24 text-white">
                <div className="mx-auto max-w-5xl px-4">
                    {/* Header */}
                    {/* Back link */}
                    <a
                        href="/#projects"
                        className="mt-6 inline-flex items-center text-sm font-semibold text-[#9AE1FF] hover:text-white transition"
                    >
                        ← Back to Projects
                    </a>

                    <section className="border-b border-white/10 pb-10">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9AE1FF]">
                            Case Study
                        </p>
                        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                            Makers BnB: Accommodation Booking Platform
                        </h1>
                        <p className="mt-3 max-w-2xl text-sm text-white/70 sm:text-base">
                            An Airbnb style booking platform built in a week long team project
                            at Makers Academy. Users can register, list properties, browse
                            spaces, and request bookings. Everything is backed by a PostgreSQL
                            database and a test driven Ruby backend.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-3 text-xs text-white/80">
                            <span className="rounded-full bg-white/5 px-3 py-1">
                                Ruby · Sinatra
                            </span>
                            <span className="rounded-full bg-white/5 px-3 py-1">
                                PostgreSQL
                            </span>
                            <span className="rounded-full bg-white/5 px-3 py-1">RSpec · TDD</span>
                            <span className="rounded-full bg-white/5 px-3 py-1">
                                Team project
                            </span>
                        </div>

                        {/* Links */}
                        <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold">
                            <a
                                href="https://github.com/JoshHil97/makersbnb-case-study"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center rounded-full bg-white/90 px-5 py-2 text-[#050716] transition hover:bg-white"
                            >
                                View code on GitHub
                                <span className="ml-2">↗</span>
                            </a>
                            {/* you can wire a live link here later if you deploy it */}
                        </div>
                    </section>

                    {/* Hero screenshot */}
                    <section className="mt-10">
                        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                            <img
                                src="/screenshots/makersbnb.png"
                                alt="Makers BnB listings page"
                                className="w-full object-cover"
                            />
                        </div>
                    </section>

                    {/* Project overview */}
                    <section className="mt-12 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
                        <div className="space-y-5 text-sm leading-relaxed text-white/80">
                            <h2 className="text-lg font-semibold text-white sm:text-xl">
                                Project Overview
                            </h2>
                            <p>
                                MakersBnB was our final engineering project at{" "}
                                <strong>Makers Academy</strong>, inspired by Airbnb. Over one
                                intense week we built a full stack accommodation booking app
                                from scratch, including accounts, listings, pricing, and
                                booking management.
                            </p>
                            <p>
                                We worked in a team of four using{" "}
                                <strong>pair programming, TDD, and Agile practices</strong>.
                                Every feature started from a user story, then an RSpec test,
                                then implementation. I naturally gravitated towards backend
                                architecture, data modelling, and routing.
                            </p>
                            <p>
                                The goal was not just to tick off features but to{" "}
                                <strong>build something that feels like a real product</strong>:
                                clear user flows, a reliable database, and code we’d be happy to
                                maintain.
                            </p>
                        </div>

                        {/* Quick stats */}
                        <aside className="space-y-4 rounded-2xl border border-white/10 bg-[#090B1C] p-5 text-xs text-white/80">
                            <h3 className="text-sm font-semibold text-white">
                                Project snapshot
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <span className="text-white/50">Duration:</span> 1 week
                                </li>
                                <li>
                                    <span className="text-white/50">Team:</span> 4 developers
                                </li>
                                <li>
                                    <span className="text-white/50">Role:</span> Backend
                                    lead &amp; database design
                                </li>
                                <li>
                                    <span className="text-white/50">Stack:</span> Ruby, Sinatra,
                                    PostgreSQL, RSpec, Capybara
                                </li>
                            </ul>
                        </aside>
                    </section>

                    {/* My contributions */}
                    <section className="mt-16 grid gap-10 md:grid-cols-2">
                        <div>
                            <h2 className="text-lg font-semibold text-white sm:text-xl">
                                My Contributions
                            </h2>
                            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/80">
                                <li>
                                    <strong>Database &amp; schema design:</strong> designed tables
                                    for users, listings, and bookings, with foreign keys,
                                    normalised structure, and SQL queries for availability and
                                    clash detection.
                                </li>
                                <li>
                                    <strong>Core routes &amp; controllers:</strong> implemented
                                    routes for viewing listings, creating listings, requesting
                                    bookings, and viewing booking requests.
                                </li>
                                <li>
                                    <strong>Authentication &amp; sessions:</strong> built login /
                                    signup flows, hashed passwords, and protected routes for
                                    logged in users.
                                </li>
                                <li>
                                    <strong>Testing:</strong> wrote unit tests for repositories
                                    plus Capybara feature tests covering full booking flows.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-white sm:text-xl">
                                What this project demonstrates
                            </h2>
                            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/80">
                                <li>Comfort designing and querying a relational database.</li>
                                <li>Ability to architect a full stack product from scratch.</li>
                                <li>
                                    Experience working in a <strong>TDD first</strong> team
                                    environment.
                                </li>
                                <li>
                                    Strong communication through pairing, standups, and PR
                                    reviews.
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Closing */}
                    <section className="mt-16 border-t border-white/10 pt-10 text-sm text-white/75">
                        <p>
                            MakersBnB was the project where everything I&apos;d learned at
                            Makers came together with TDD, clean code, teamwork, and real product
                            thinking. It&apos;s the foundation for the way I now approach
                            every new project.
                        </p>
                    </section>
                </div>
            </main>
        </PageTransition>
    );
}
