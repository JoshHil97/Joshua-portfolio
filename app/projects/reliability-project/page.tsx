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
                            STABL reliability work built around a simulated production system
                            used by veterinary hospitals. We sat in front of an existing app
                            called HOSP, and our job was to improve availability without lying
                            about system health.
                        </p>

                        <div className="mt-5 flex flex-wrap gap-3 text-xs text-white/80">
                            <span className="rounded-full bg-white/5 px-3 py-1">
                                STABL team
                            </span>
                            <span className="rounded-full bg-white/5 px-3 py-1">
                                ALB listener rules
                            </span>
                            <span className="rounded-full bg-white/5 px-3 py-1">
                                ALB logs and Athena
                            </span>
                            <span className="rounded-full bg-white/5 px-3 py-1">
                                Honest reliability
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
                            We used a control panel dashboard to track request success rates
                            and investigate failures. Our STABL environment was pushed to{" "}
                            <strong>99.99%</strong> success by filtering garbage traffic at the
                            ALB and keeping failures honest.
                        </p>
                    </section>

                    {/* Context + snapshot */}
                    <section className="mt-12 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
                        <div className="space-y-5 text-sm leading-relaxed text-white/80">
                            <h2 className="text-lg font-semibold text-white sm:text-xl">
                                Context and goal
                            </h2>
                            <p>
                                STABL sits in front of an existing application called HOSP. We
                                did not control the application code, and we could not change
                                upstream behaviour.
                            </p>
                            <p>
                                Reliability dropped sharply during experiments, so the goal was
                                to maximise honest reliability with strict constraints. 500
                                errors were not acceptable. 401 and 404 were acceptable when
                                correct. We did not return fake 200 responses and we did not
                                mask failures.
                            </p>
                            <p className="text-xs text-white/55">
                                Core question: “How do we reduce crashes and improve
                                availability without lying about system health?”
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
                                    <span className="text-white/50">Constraints:</span> One
                                    application instance, no autoscaling, no app code changes
                                </li>
                                <li>
                                    <span className="text-white/50">Rule:</span> No fake success
                                    and no masking failures
                                </li>
                            </ul>
                        </aside>
                    </section>

                    {/* Architecture */}
                    <section className="mt-16 grid gap-10 md:grid-cols-2">
                        <div className="space-y-4 text-sm leading-relaxed text-white/80">
                            <h2 className="text-lg font-semibold text-white sm:text-xl">
                                Baseline architecture
                            </h2>
                            <p>
                                At the start, all traffic went straight through the Application
                                Load Balancer to a single HOSP instance. There was no traffic
                                filtering, so probes and random paths could hit a fragile
                                backend and trigger crashes.
                            </p>
                            <pre className="whitespace-pre rounded-2xl border border-white/10 bg-[#090B1C] p-4 text-xs text-white/80">
Clients
  ↓
Application Load Balancer (HTTP :80)
  ↓
Single application instance (HOSP)
                            </pre>
                        </div>

                        <div className="space-y-4 rounded-2xl border border-white/10 bg-[#090B1C] p-5 text-sm text-white/80">
                            <h3 className="text-sm font-semibold text-white">
                                Why it was failing
                            </h3>
                            <ul className="mt-2 space-y-2 text-sm text-white/80">
                                <li>Garbage traffic reached the backend.</li>
                                <li>Unhandled paths triggered 500 crashes.</li>
                                <li>Limited capacity amplified failures under load.</li>
                                <li>Failures cascaded when the app crashed repeatedly.</li>
                            </ul>
                        </div>
                    </section>

                    {/* Evidence */}
                    <section className="mt-16 space-y-5 text-sm leading-relaxed text-white/80">
                        <h2 className="text-lg font-semibold text-white sm:text-xl">
                            Evidence driven investigation
                        </h2>
                        <p>
                            We used ALB access logs and Athena to understand what was failing
                            before changing anything. The goal was to separate real backend
                            failures from noise and infrastructure issues.
                        </p>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
                                <h3 className="text-sm font-semibold text-white">
                                    What we proved with Athena
                                </h3>
                                <ul className="mt-3 space-y-2 text-sm text-white/80">
                                    <li>
                                        500 errors were real backend failures (elb_status_code =
                                        500 and target_status_code = 500).
                                    </li>
                                    <li>
                                        The worst routes included /notes, /patients, and
                                        /patients/*/screen across GET and POST.
                                    </li>
                                    <li>
                                        Both fast failures and slow failures existed, which
                                        pointed to fragile logic plus expensive work.
                                    </li>
                                    <li>
                                        Unknown paths and probes were hitting the backend and
                                        inflating failures.
                                    </li>
                                </ul>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
                                <h3 className="text-sm font-semibold text-white">
                                    Key conclusion
                                </h3>
                                <p className="mt-3 text-sm text-white/80">
                                    The system was not failing because of the ALB or routing.
                                    It was failing because uncontrolled traffic was reaching a
                                    fragile single instance backend.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Rollback */}
                    <section className="mt-16 space-y-5 text-sm leading-relaxed text-white/80">
                        <h2 className="text-lg font-semibold text-white sm:text-xl">
                            Early experiment and rollback
                        </h2>
                        <p>
                            We tried putting CloudFront in front of the ALB and locking the ALB
                            down using WAF style enforcement. It caused a large spike in 401 and
                            403 responses and tanked reliability because health checks and
                            internal calls were blocked.
                        </p>
                        <p>
                            The lesson was simple: observability comes before enforcement. We
                            rolled back fully and returned to a known good baseline.
                        </p>
                    </section>

                    {/* Solution */}
                    <section className="mt-16 space-y-5 text-sm leading-relaxed text-white/80">
                        <h2 className="text-lg font-semibold text-white sm:text-xl">
                            Final solution: ALB allow list and fixed 404
                        </h2>
                        <p>
                            The design principle was that only valid application paths should
                            reach the backend. Everything else is garbage and should be rejected
                            early.
                        </p>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
                                <h3 className="text-sm font-semibold text-white">
                                    Allow list rule
                                </h3>
                                <p className="mt-3 text-sm text-white/80">
                                    Forward only known routes to the backend target group.
                                </p>
                                <ul className="mt-3 space-y-2 text-sm text-white/80">
                                    <li>/hospitals*</li>
                                    <li>/patients*</li>
                                    <li>/staffs*</li>
                                    <li>/notes*</li>
                                </ul>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
                                <h3 className="text-sm font-semibold text-white">
                                    Default rule
                                </h3>
                                <p className="mt-3 text-sm text-white/80">
                                    Reject everything else with a fixed response. This stops
                                    probes and unknown paths from wasting backend capacity or
                                    triggering crashes.
                                </p>
                                <pre className="mt-3 whitespace-pre rounded-xl border border-white/10 bg-[#050716] p-3 text-xs text-white/80">
Status: 404
Body: {"{"}"message":"Not Found"{"}"}
                                </pre>
                            </div>
                        </div>
                    </section>

                    {/* Honesty */}
                    <section className="mt-16 space-y-5 text-sm leading-relaxed text-white/80">
                        <h2 className="text-lg font-semibold text-white sm:text-xl">
                            Why this improves reliability honestly
                        </h2>
                        <p>
                            We did not mask failures. We made it harder for invalid traffic to
                            crash a fragile backend, and we kept HTTP semantics correct.
                        </p>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
                                <h3 className="text-sm font-semibold text-white">
                                    What we avoided
                                </h3>
                                <ul className="mt-3 space-y-2 text-sm text-white/80">
                                    <li>No fake 200 responses.</li>
                                    <li>No hiding crashes with redirects.</li>
                                    <li>No blindly retrying until it looks green.</li>
                                    <li>No masking backend bugs.</li>
                                </ul>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
                                <h3 className="text-sm font-semibold text-white">
                                    What we improved
                                </h3>
                                <ul className="mt-3 space-y-2 text-sm text-white/80">
                                    <li>Reduced load by blocking garbage early.</li>
                                    <li>Kept 404 and 401 meaningful when correct.</li>
                                    <li>Ensured remaining 500s were real failures.</li>
                                    <li>Made behaviour deterministic and easier to explain.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Scale */}
                    <section className="mt-16 space-y-5 text-sm leading-relaxed text-white/80">
                        <h2 className="text-lg font-semibold text-white sm:text-xl">
                            Handling traffic increases with one instance
                        </h2>
                        <p>
                            We could not autoscale and we could not add a second application
                            instance, so the safest lever was controlling what traffic reaches
                            the backend.
                        </p>
                        <ul className="space-y-2 text-sm text-white/80">
                            <li>Remove garbage traffic at the ALB.</li>
                            <li>Keep health checks clean and reliable.</li>
                            <li>Shepherd change carefully with clear metrics.</li>
                            <li>
                                Emergency option: return 503 on one problematic endpoint to
                                protect the whole system.
                            </li>
                        </ul>
                    </section>

                    {/* Takeaways */}
                    <section className="mt-16 space-y-5 border-t border-white/10 pt-10 text-sm leading-relaxed text-white/80">
                        <h2 className="text-lg font-semibold text-white sm:text-xl">
                            Key takeaways
                        </h2>
                        <ul className="space-y-2 text-sm text-white/80">
                            <li>Reliability is about controlling failure, not hiding it.</li>
                            <li>Edge filtering is a valid reliability tool.</li>
                            <li>500s should be treated as bugs.</li>
                            <li>Simpler routing beats clever routing.</li>
                            <li>Observability comes before enforcement.</li>
                            <li>A clean rollback is a success.</li>
                        </ul>
                        <p className="mt-4 text-sm text-white/80">
                            One sentence summary: Rather than masking failures, we used ALB
                            allowlisting and traffic control to reduce backend crashes, so
                            reliability improvements reflected real system health.
                        </p>
                    </section>
                </div>
            </main>
        </PageTransition>
    );
}
