"use client";

import PageTransition from "@/components/PageTransition";

export default function SoulAnchorPage() {
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
                            SoulAnchor — Emotion-Based Encouragement App
                        </h1>
                        <p className="mt-3 max-w-2xl text-sm text-white/70 sm:text-base">
                            A React Native app that lets users choose how they&apos;re feeling
                            and receive a tailored Bible verse, short encouragement, and
                            guided prayer. Built with animated gradients, 30+ emotion states,
                            and a simple &quot;saved anchors&quot; system.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-3 text-xs text-white/80">
                            <span className="rounded-full bg-white/5 px-3 py-1">
                                React Native
                            </span>
                            <span className="rounded-full bg-white/5 px-3 py-1">
                                TypeScript
                            </span>
                            <span className="rounded-full bg-white/5 px-3 py-1">
                                Expo (mobile)
                            </span>
                            <span className="rounded-full bg-white/5 px-3 py-1">
                                UX &amp; animations
                            </span>
                        </div>

                        {/* Links */}
                        <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold">
                            <a
                                href="exp://gfszcwq-anonymous-8082.exp.direct"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center rounded-full bg-white/90 px-5 py-2 text-[#050716] transition hover:bg-white"
                            >
                                Open in Expo Go
                                <span className="ml-2">↗</span>
                            </a>
                            <a
                                href="https://github.com/JoshHil97/Soulanchor-app"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-5 py-2 text-white/80 transition hover:border-[#9AE1FF]/70 hover:text-white"
                            >
                                View code on GitHub
                                <span className="ml-2">↗</span>
                            </a>
                        </div>
                    </section>

                    {/* Screenshot */}
                    <section className="mt-10">
                        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                            <img
                                src="/screenshots/soulanchor-saved.png"
                                alt="SoulAnchor app showing saved anchor"
                                className="w-full object-cover"
                            />
                        </div>
                    </section>

                    {/* Overview */}
                    <section className="mt-12 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
                        <div className="space-y-5 text-sm leading-relaxed text-white/80">
                            <h2 className="text-lg font-semibold text-white sm:text-xl">
                                Product idea
                            </h2>
                            <p>
                                SoulAnchor grew out of a simple question:{" "}
                                <em>&quot;What if people could tell an app how they&apos;re
                                    really feeling and receive encouragement that actually fits?&quot;</em>
                            </p>
                            <p>
                                The app presents 30+ emotion chips (e.g. anxious, grieving,
                                hopeful, tempted). Tapping one reveals a verse, short
                                encouragement, and guided prayer written for that emotional
                                state. Users can save anything that resonates as an &quot;anchor&quot;
                                to revisit later.
                            </p>
                            <p>
                                I focused on making the interaction feel <strong>calming and
                                    intentional</strong> — soft gradients, smooth transitions, and a
                                layout that puts the emotional content front and centre.
                            </p>
                        </div>

                        {/* Role */}
                        <aside className="space-y-4 rounded-2xl border border-white/10 bg-[#090B1C] p-5 text-xs text-white/80">
                            <h3 className="text-sm font-semibold text-white">
                                My responsibilities
                            </h3>
                            <ul className="space-y-2">
                                <li>Designed the core UX &amp; emotion layout.</li>
                                <li>
                                    Implemented emotion selection, randomisation, and saved
                                    anchors.
                                </li>
                                <li>
                                    Built the gradient background and micro-animations with React
                                    Native + Reanimated/Animated API.
                                </li>
                                <li>
                                    Structured the content in TypeScript for easy extension to
                                    more emotions.
                                </li>
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
                                    Emotion bubbles grouped into <strong>Comfort</strong>,{" "}
                                    <strong>Struggle</strong>, and <strong>Growth</strong>.
                                </li>
                                <li>
                                    Each emotion provides a <strong>Bible verse</strong>, short
                                    encouragement, and optional prayer.
                                </li>
                                <li>
                                    <strong>Shuffle</strong> button to surface different emotions
                                    on each open.
                                </li>
                                <li>
                                    <strong>Saved anchors</strong> so users can revisit moments
                                    that spoke to them.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-white sm:text-xl">
                                What this project shows
                            </h2>
                            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/80">
                                <li>Comfort building React Native UIs with TypeScript.</li>
                                <li>Focus on UX details and how an app feels to use.</li>
                                <li>
                                    Ability to model domain-specific data (emotions, verses,
                                    prayers) cleanly in code.
                                </li>
                                <li>
                                    Interest in building products that are{" "}
                                    <strong>emotionally meaningful</strong>, not just functional.
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </main>
        </PageTransition>
    );
}
