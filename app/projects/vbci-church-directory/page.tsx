"use client";

import PageTransition from "@/components/PageTransition";

export default function VbciChurchDirectoryPage() {
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
                            VBCI Church Directory: Member &amp; Ministry Manager
                        </h1>
                        <p className="mt-3 max-w-2xl text-sm text-white/70 sm:text-base">
                            A modern directory to keep track of members, contact details, and
                            ministries for Victory Bible Church International (VBCI). Built as
                            a full stack project using Java Spring Boot for the API and a
                            React + TypeScript frontend styled with Tailwind.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-3 text-xs text-white/80">
                            <span className="rounded-full bg-white/5 px-3 py-1">
                                Java · Spring Boot
                            </span>
                            <span className="rounded-full bg-white/5 px-3 py-1">
                                React · TypeScript
                            </span>
                            <span className="rounded-full bg-white/5 px-3 py-1">
                                Tailwind CSS
                            </span>
                            <span className="rounded-full bg-white/5 px-3 py-1">
                                CRUD + Search
                            </span>
                        </div>

                        {/* Links */}
                        <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold">
                            <a
                                href="https://vbci-church-directory-ui.vercel.app"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center rounded-full bg-white/90 px-5 py-2 text-[#050716] transition hover:bg-white"
                            >
                                Live UI (Vercel)
                                <span className="ml-2">↗</span>
                            </a>
                            <a
                                href="https://github.com/JoshHil97/vbci-church-directory-ui"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-5 py-2 text-white/80 transition hover:border-[#9AE1FF]/70 hover:text-white"
                            >
                                UI code
                                <span className="ml-2">↗</span>
                            </a>
                            <a
                                href="https://github.com/JoshHil97/church-directory-api"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-5 py-2 text-white/80 transition hover:border-[#9AE1FF]/70 hover:text-white"
                            >
                                Spring Boot API
                                <span className="ml-2">↗</span>
                            </a>
                        </div>
                    </section>

                    {/* Screenshot */}
                    <section className="mt-10">
                        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                            <img
                                src="/screenshots/vbci-search.png"
                                alt="VBCI Church Directory search view"
                                className="w-full object-cover"
                            />
                        </div>
                    </section>

                    {/* Overview + problem / solution */}
                    <section className="mt-12 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
                        <div className="space-y-5 text-sm leading-relaxed text-white/80">
                            <h2 className="text-lg font-semibold text-white sm:text-xl">
                                Why I built this
                            </h2>
                            <p>
                                The original idea started as a small <strong>Streamlit</strong>{" "}
                                project during lockdown: I wanted to replace scattered
                                spreadsheets with something that made it easier to see who was
                                in which ministry and how to contact them.
                            </p>
                            <p>
                                After Makers, I revisited the idea and rebuilt it properly as a{" "}
                                <strong>full stack app</strong>: a Spring Boot API with a typed
                                React UI. Rather than a quick prototype, the goal was something
                                the church could actually rely on.
                            </p>
                            <p>
                                The app allows admins to add members, assign them to ministries,
                                search by name/email/ministry, and edit or remove entries as the
                                church grows.
                            </p>
                        </div>

                        {/* Role / stack */}
                        <aside className="space-y-4 rounded-2xl border border-white/10 bg-[#090B1C] p-5 text-xs text-white/80">
                            <h3 className="text-sm font-semibold text-white">
                                My role &amp; responsibilities
                            </h3>
                            <ul className="space-y-2">
                                <li>Designed the API endpoints and data model.</li>
                                <li>Implemented CRUD operations for members &amp; ministries.</li>
                                <li>Built the React UI using TypeScript and Tailwind.</li>
                                <li>Integrated the frontend with the Spring Boot backend.</li>
                            </ul>
                        </aside>
                    </section>

                    {/* Features */}
                    <section className="mt-16 grid gap-10 md:grid-cols-2">
                        <div>
                            <h2 className="text-lg font-semibold text-white sm:text-xl">
                                Key Features
                            </h2>
                            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/80">
                                <li>
                                    <strong>Add new members</strong> with name, email, phone,
                                    ministry.
                                </li>
                                <li>
                                    <strong>Live search</strong> by name, email, or ministry with
                                    a matching count.
                                </li>
                                <li>
                                    <strong>Edit &amp; delete</strong> existing entries in place.
                                </li>
                                <li>
                                    Clean, branded UI with VBCI styling and responsive layout.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-white sm:text-xl">
                                What this project shows
                            </h2>
                            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/80">
                                <li>Comfort working with Java + Spring Boot APIs.</li>
                                <li>Ability to build a typed React frontend with Tailwind.</li>
                                <li>
                                    Experience turning a quick prototype into a structured product.
                                </li>
                                <li>Focus on solving a real world, community based problem.</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </main>
        </PageTransition>
    );
}
