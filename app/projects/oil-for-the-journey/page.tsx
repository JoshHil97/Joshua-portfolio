"use client";

import PageTransition from "@/components/PageTransition";

type ScreenshotProps = {
    src: string;
    alt: string;
    caption: string;
};

function Screenshot({ src, alt, caption }: ScreenshotProps) {
    const handleError = (event: React.SyntheticEvent<HTMLImageElement>) => {
        const img = event.currentTarget;
        img.onerror = null;
        img.src = "/screenshots/oilfor-placeholder.svg";
    };

    return (
        <figure className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
            <img
                src={src}
                alt={alt}
                className="w-full"
                loading="lazy"
                onError={handleError}
            />
            <figcaption className="px-4 py-3 text-xs text-white/55">
                {caption}
            </figcaption>
        </figure>
    );
}

export default function OilForTheJourneyPage() {
    return (
        <PageTransition>
            <main className="min-h-screen bg-[#050716] pb-24 pt-24 text-white">
                <div className="mx-auto max-w-5xl px-4">
                    <a
                        href="/#projects"
                        className="mt-6 inline-flex items-center text-sm font-semibold text-[#9AE1FF] transition hover:text-white"
                    >
                        ← Back to Projects
                    </a>

                    <section className="border-b border-white/10 pb-10">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9AE1FF]">
                            Case Study
                        </p>
                        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                            Oil for the Journey: Reflective Writing Platform
                        </h1>
                        <p className="mt-3 max-w-2xl text-sm text-white/70 sm:text-base">
                            Oil for the Journey is a reflective writing platform built to
                            support faith focused journaling, teaching notes, and long form
                            reflections. The goal was a calm reading experience with private
                            drafting and intentional publishing, without the pressure of
                            engagement metrics.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-3 text-xs text-white/80">
                            <span className="rounded-full bg-white/5 px-3 py-1">
                                Next.js App Router
                            </span>
                            <span className="rounded-full bg-white/5 px-3 py-1">
                                TypeScript
                            </span>
                            <span className="rounded-full bg-white/5 px-3 py-1">
                                Supabase Auth + DB
                            </span>
                            <span className="rounded-full bg-white/5 px-3 py-1">
                                Tailwind CSS
                            </span>
                            <span className="rounded-full bg-white/5 px-3 py-1">
                                Vercel
                            </span>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold">
                            <a
                                href="https://oilfor.vercel.app/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center rounded-full bg-white/90 px-5 py-2 text-[#050716] transition hover:bg-white"
                            >
                                Live site
                                <span className="ml-2">↗</span>
                            </a>
                            <a
                                href="https://github.com/JoshHil97/vbci-notes"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-5 py-2 text-white/80 transition hover:border-[#9AE1FF]/70 hover:text-white"
                            >
                                View code on GitHub
                                <span className="ml-2">↗</span>
                            </a>
                        </div>
                    </section>

                    {/* Hero screenshot */}
                    <section className="mt-10">
                        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                            <img
                                src="/screenshots/oilfor-home.png"
                                alt="Oil for the Journey home page"
                                className="w-full"
                                onError={(event) => {
                                    const img = event.currentTarget;
                                    img.onerror = null;
                                    img.src = "/screenshots/oilfor-placeholder.svg";
                                }}
                            />
                        </div>
                        <p className="mt-3 text-xs text-white/55">
                            The homepage is designed to feel calm and readable, with content
                            presented on paper style cards over a subtle textured background.
                        </p>
                    </section>

                    {/* Overview */}
                    <section className="mt-12 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
                        <div className="space-y-5 text-sm leading-relaxed text-white/80">
                            <h2 className="text-lg font-semibold text-white sm:text-xl">
                                Overview
                            </h2>
                            <p>
                                Most writing platforms optimise for engagement, speed, and
                                visibility. That works for social content, but it creates
                                friction for reflective writing where drafts need time and
                                posts should be published on purpose.
                            </p>
                            <p>
                                I built Oil for the Journey to prioritise readability and
                                ownership. It supports private drafting, controlled publishing,
                                and a simple workflow that can evolve feature by feature without
                                unnecessary complexity.
                            </p>
                        </div>

                        <aside className="space-y-4 rounded-2xl border border-white/10 bg-[#090B1C] p-5 text-xs text-white/80">
                            <h3 className="text-sm font-semibold text-white">
                                Project snapshot
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <span className="text-white/50">Type:</span> Full stack web
                                    app
                                </li>
                                <li>
                                    <span className="text-white/50">Auth:</span> Supabase
                                    authentication
                                </li>
                                <li>
                                    <span className="text-white/50">Content:</span> Drafts and
                                    published notes
                                </li>
                                <li>
                                    <span className="text-white/50">Focus:</span> Readability and
                                    intentional publishing
                                </li>
                            </ul>
                        </aside>
                    </section>

                    {/* Problem + solution */}
                    <section className="mt-16 grid gap-10 md:grid-cols-2">
                        <div className="space-y-4 text-sm leading-relaxed text-white/80">
                            <h2 className="text-lg font-semibold text-white sm:text-xl">
                                Problem statement
                            </h2>
                            <p>
                                I wanted a platform that supports long form writing without
                                turning it into a performance game. The core needs were
                                private drafting, controlled publishing, and full ownership of
                                content.
                            </p>
                            <p>
                                The biggest risk was building something that felt heavy or
                                complicated to maintain. The platform needed to stay calm on
                                the surface while being technically robust underneath.
                            </p>
                        </div>

                        <div className="space-y-4 text-sm leading-relaxed text-white/80">
                            <h2 className="text-lg font-semibold text-white sm:text-xl">
                                Solution
                            </h2>
                            <p>
                                Oil for the Journey is a full stack app with a clear separation
                                between public content and admin only functionality. Notes can
                                be created as drafts, edited over time, and published when
                                ready, without relying on an external CMS.
                            </p>
                            <p>
                                The result is a distraction free reading experience for public
                                users, with a private admin workflow that stays out of the way.
                            </p>
                        </div>
                    </section>

                    {/* Key features */}
                    <section className="mt-16">
                        <h2 className="text-lg font-semibold text-white sm:text-xl">
                            Key features
                        </h2>

                        <div className="mt-6 grid gap-6 md:grid-cols-2">
                            <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
                                <h3 className="text-sm font-semibold text-white">
                                    Admin workflow
                                </h3>
                                <p className="mt-3 text-sm text-white/80">
                                    Secure admin access is handled with Supabase authentication.
                                    Admin controls are hidden from public users, but available
                                    immediately after login.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
                                <h3 className="text-sm font-semibold text-white">
                                    Drafts and publishing
                                </h3>
                                <p className="mt-3 text-sm text-white/80">
                                    Notes can exist as drafts or published entries. Drafts never
                                    show publicly, and publishing is a simple state change, not
                                    a separate content creation step.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
                                <h3 className="text-sm font-semibold text-white">
                                    Readability first design
                                </h3>
                                <p className="mt-3 text-sm text-white/80">
                                    Content is displayed on paper style cards with careful
                                    spacing, contrast, and typography so longer notes feel easy
                                    to read, especially on mobile.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
                                <h3 className="text-sm font-semibold text-white">
                                    Maintainable stack
                                </h3>
                                <p className="mt-3 text-sm text-white/80">
                                    Next.js App Router, TypeScript, Supabase, and Tailwind make
                                    it easy to iterate safely. Vercel deployment keeps
                                    environments and releases simple and repeatable.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Screenshots */}
                    <section className="mt-16">
                        <h2 className="text-lg font-semibold text-white sm:text-xl">
                            Screenshots
                        </h2>
                        <p className="mt-2 max-w-2xl text-sm text-white/70">
                            These screenshots show the public reading experience and the admin
                            workflow used to draft, edit, and publish notes.
                        </p>

                        <div className="mt-6 grid gap-6 md:grid-cols-2">
                            <Screenshot
                                src="/screenshots/oilfor-weekly-notes.png"
                                alt="Weekly notes page"
                                caption="Weekly Notes page for browsing published entries."
                            />
                            <Screenshot
                                src="/screenshots/oilfor-note-detail.png"
                                alt="Note detail page"
                                caption="A single note view with optional YouTube embed and long form content."
                            />
                            <Screenshot
                                src="/screenshots/oilfor-login.png"
                                alt="Login page"
                                caption="Login screen for admin access."
                            />
                            <Screenshot
                                src="/screenshots/oilfor-admin.png"
                                alt="Admin dashboard"
                                caption="Admin dashboard for managing drafts and published notes."
                            />
                            <Screenshot
                                src="/screenshots/oilfor-new-note.png"
                                alt="New note form"
                                caption="New note form with draft saving and publishing."
                            />
                            <Screenshot
                                src="/screenshots/oilfor-about.png"
                                alt="About page"
                                caption="About page explaining the theme and purpose of the platform."
                            />
                        </div>
                    </section>

                    {/* What went well / challenges */}
                    <section className="mt-16 grid gap-10 md:grid-cols-2">
                        <div>
                            <h2 className="text-lg font-semibold text-white sm:text-xl">
                                What went well
                            </h2>
                            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/80">
                                <li>
                                    Clear separation between admin logic, public content, and
                                    layout styling made changes safer and debugging faster.
                                </li>
                                <li>
                                    Building features incrementally kept complexity under
                                    control and made it easier to spot issues early.
                                </li>
                                <li>
                                    Once environment variables were corrected, deployment became
                                    stable and repeatable on Vercel.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-white sm:text-xl">
                                Challenges
                            </h2>
                            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/80">
                                <li>
                                    Supabase configuration required care around server and client
                                    environment variables across local and production builds.
                                </li>
                                <li>
                                    Text readability needed iteration to balance decorative
                                    backgrounds with strong contrast and spacing.
                                </li>
                                <li>
                                    Admin controls had to stay invisible to public users while
                                    still being discoverable for authenticated admins.
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Lessons + future */}
                    <section className="mt-16 grid gap-10 md:grid-cols-2">
                        <div className="space-y-4 text-sm leading-relaxed text-white/80">
                            <h2 className="text-lg font-semibold text-white sm:text-xl">
                                Lessons learned
                            </h2>
                            <p>
                                Shipping incrementally reduced risk and kept the codebase easy
                                to reason about. Readability turned out to be a technical
                                problem too, because it depends on typography, spacing, and
                                contrast working together across devices.
                            </p>
                            <p>
                                I also learned that environment configuration is part of the
                                product. Once the Supabase and Vercel setup was correct,
                                iteration became much faster.
                            </p>
                        </div>

                        <div className="space-y-4 text-sm leading-relaxed text-white/80">
                            <h2 className="text-lg font-semibold text-white sm:text-xl">
                                Future improvements
                            </h2>
                            <p>
                                The foundation is stable, so future features can be added
                                without restructuring the app. Next steps include rich text
                                editing, tags and categorisation, version history, soft delete,
                                and a more polished admin dashboard.
                            </p>
                        </div>
                    </section>

                    {/* Outcome */}
                    <section className="mt-16 border-t border-white/10 pt-10 text-sm text-white/75">
                        <p>
                            Oil for the Journey is now a production deployed platform with
                            secure admin access, draft and publishing workflows, and a clean
                            reading focused UI. It shows my ability to build maintainable full
                            stack products, debug real deployment issues, and design systems
                            around how people actually work.
                        </p>
                    </section>
                </div>
            </main>
        </PageTransition>
    );
}
