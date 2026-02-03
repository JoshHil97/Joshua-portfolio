"use client";

import PageTransition from "@/components/PageTransition";

export default function ReliabilityProjectPage() {
    return (
        <PageTransition>
            <main className="min-h-screen bg-[#050716] pb-24 pt-24 text-white">
                <div className="mx-auto max-w-5xl px-4">
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
                            Reliability Project: Improving HOSP
                        </h1>
                        <p className="mt-3 max-w-2xl text-sm text-white/70 sm:text-base">
                            A reliability focused project built around a simulated production
                            system used by veterinary hospitals. My team was <strong>STABL</strong>,
                            and we used a simple control panel dashboard to monitor success
                            rates and investigate image screening failures.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-3 text-xs text-white/80">
                            <span className="rounded-full bg-white/5 px-3 py-1">
                                STABL team
                            </span>
                            <span className="rounded-full bg-white/5 px-3 py-1">
                                Monitoring dashboard
                            </span>
                            <span className="rounded-full bg-white/5 px-3 py-1">
                                Image screening
                            </span>
                            <span className="rounded-full bg-white/5 px-3 py-1">
                                Debugging
                            </span>
                        </div>
                    </section>

                    {/* Screenshot */}
                    <section className="mt-10">
                        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                            <img
                                src="/screenshots/reliability-dashboard.svg"
                                alt="Reliability dashboard showing success rates by host and image screening failures"
                                className="w-full object-cover"
                            />
                        </div>
                        <p className="mt-3 text-xs text-white/55">
                            The control panel breaks down success rates per host and highlights
                            image screening failures. Our STABL environment was pushed up to
                            <strong>99.99%</strong> success after we identified and fixed the
                            root cause.
                        </p>
                    </section>

                    {/* Overview + snapshot */}
                    <section className="mt-12 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
                        <div className="space-y-5 text-sm leading-relaxed text-white/80">
                            <h2 className="text-lg font-semibold text-white sm:text-xl">
                                Project overview
                            </h2>
                            <p>
                                The project was about keeping a critical system usable for staff
                                while improving reliability and avoiding security issues. The
                                control panel made it easy to compare hosts and see exactly when
                                things were failing.
                            </p>
                            <p>
                                The biggest signal was the image screening feature returning
                                invalid JSON in one environment, which dragged the success rate
                                down. We tracked the impact in the dashboard while we
                                investigated and improved the system.
                            </p>
                        </div>

                        <aside className="space-y-4 rounded-2xl border border-white/10 bg-[#090B1C] p-5 text-xs text-white/80">
                            <h3 className="text-sm font-semibold text-white">
                                Project snapshot
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <span className="text-white/50">Team:</span> STABL
                                </li>
                                <li>
                                    <span className="text-white/50">Result:</span> 99.99% request
                                    success rate (STABL)
                                </li>
                                <li>
                                    <span className="text-white/50">Signal:</span> Image screening
                                    failures with invalid JSON responses
                                </li>
                                <li>
                                    <span className="text-white/50">Goal:</span> 99% request
                                    success rate and no security breaches
                                </li>
                            </ul>
                        </aside>
                    </section>

                    {/* Work + learnings */}
                    <section className="mt-16 grid gap-10 md:grid-cols-2">
                        <div>
                            <h2 className="text-lg font-semibold text-white sm:text-xl">
                                What I worked on
                            </h2>
                            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/80">
                                <li>
                                    Used the control panel to monitor request success rates by
                                    host over different time windows.
                                </li>
                                <li>
                                    Investigated image screening failures on the stabl host where
                                    requests were returning invalid JSON.
                                </li>
                                <li>
                                    Compared results across hosts to validate improvements and
                                    focus on the highest impact issues.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-white sm:text-xl">
                                What this project shows
                            </h2>
                            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/80">
                                <li>
                                    Comfort working with production style problems and metrics.
                                </li>
                                <li>
                                    Ability to debug issues quickly, then validate fixes with
                                    data.
                                </li>
                                <li>
                                    A careful approach to change, with rollouts and monitoring.
                                </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </main>
        </PageTransition>
    );
}
