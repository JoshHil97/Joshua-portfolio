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
                            system used by veterinary hospitals. The system stores patient notes
                            and medical images, so it needs to stay available, respond
                            consistently, and remain secure.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-3 text-xs text-white/80">
                            <span className="rounded-full bg-white/5 px-3 py-1">
                                Observability
                            </span>
                            <span className="rounded-full bg-white/5 px-3 py-1">
                                Load balancing
                            </span>
                            <span className="rounded-full bg-white/5 px-3 py-1">
                                Security
                            </span>
                            <span className="rounded-full bg-white/5 px-3 py-1">
                                Incident response
                            </span>
                        </div>
                    </section>

                    {/* Screenshot */}
                    <section className="mt-10">
                        <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                            <img
                                src="/screenshots/reliability-dashboard.svg"
                                alt="Reliability dashboard showing success rates and failures"
                                className="w-full object-cover"
                            />
                        </div>
                        <p className="mt-3 text-xs text-white/55">
                            Screenshot placeholder. Replace this with your real dashboard
                            screenshots when ready.
                        </p>
                    </section>

                    {/* Overview + snapshot */}
                    <section className="mt-12 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
                        <div className="space-y-5 text-sm leading-relaxed text-white/80">
                            <h2 className="text-lg font-semibold text-white sm:text-xl">
                                Project overview
                            </h2>
                            <p>
                                The brief was simple but real world: keep the existing product
                                working for staff, improve reliability, and make sure there are
                                no security breaches. We had API documentation and access to a
                                load balancer, so monitoring and controlled rollouts mattered.
                            </p>
                            <p>
                                I used success rate data and failure logs to spot where requests
                                were breaking down, then shipped fixes and improvements in small
                                steps so we could measure impact.
                            </p>
                        </div>

                        <aside className="space-y-4 rounded-2xl border border-white/10 bg-[#090B1C] p-5 text-xs text-white/80">
                            <h3 className="text-sm font-semibold text-white">
                                Project snapshot
                            </h3>
                            <ul className="space-y-2">
                                <li>
                                    <span className="text-white/50">Target:</span> 99% request
                                    success rate
                                </li>
                                <li>
                                    <span className="text-white/50">Target:</span> No security
                                    breaches
                                </li>
                                <li>
                                    <span className="text-white/50">Focus:</span> Monitoring,
                                    reliability, and security
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
                                    Monitored request success rates and investigated failures
                                    such as invalid responses from the image screening feature.
                                </li>
                                <li>
                                    Used load balancer routing to compare environments and roll
                                    out changes safely.
                                </li>
                                <li>
                                    Implemented improvements focused on reliability and security,
                                    including tightening access and adding better visibility into
                                    system activity.
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
