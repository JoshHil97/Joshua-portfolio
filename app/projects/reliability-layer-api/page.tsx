"use client";

import Link from "next/link";

import PageTransition from "@/components/PageTransition";

export default function ReliabilityLayerApiPage() {
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
              Personal Project
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Reliability Layer API
            </h1>
            <p className="mt-3 max-w-3xl text-sm text-white/70 sm:text-base">
              I built this backend/platform project to solve a common production
              problem: reliability logic duplicated across services and handled
              inconsistently. Instead of scattering timeout, retry, breaker,
              cache, and metrics behaviour across callers, I centralised these
              policies into one shared gateway with observable outcomes.
            </p>

            <div className="mt-5 flex flex-wrap gap-3 text-xs text-white/80">
              <span className="rounded-full bg-white/5 px-3 py-1">
                FastAPI
              </span>
              <span className="rounded-full bg-white/5 px-3 py-1">Redis</span>
              <span className="rounded-full bg-white/5 px-3 py-1">
                Docker Compose
              </span>
              <span className="rounded-full bg-white/5 px-3 py-1">
                Prometheus
              </span>
              <span className="rounded-full bg-white/5 px-3 py-1">Grafana</span>
              <span className="rounded-full bg-white/5 px-3 py-1">Pytest</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com/JoshHil97/reliability-layer-api"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-md transition hover:bg-white/15"
              >
                View code
                <span className="ml-2">↗</span>
              </a>
              <a
                href="https://github.com/JoshHil97/reliability-layer-api/blob/main/README.md"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 backdrop-blur-md transition hover:border-[#9AE1FF]/70 hover:text-white"
              >
                View README
                <span className="ml-2">↗</span>
              </a>
            </div>
          </section>

          <section className="mt-12 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.1fr)]">
            <div className="space-y-5 text-sm leading-relaxed text-white/80">
              <h2 className="text-lg font-semibold text-white sm:text-xl">
                Why I built it
              </h2>
              <p>
                Real systems rarely fail in a clean binary way. They time out,
                slow down, return intermittent 5xx responses, and occasionally
                throttle with 429s. Without strong client behaviour, those
                upstream issues leak directly into your own system and can even
                get amplified by bad retry patterns.
              </p>
              <p>
                I wanted a portfolio project that looked like something a
                platform team could actually own. That meant focusing less on a
                polished frontend and more on production-grade HTTP client
                behaviour, operational visibility, and failure-mode handling.
              </p>
              <p className="text-xs text-white/55">
                This project is intentionally backend-first: the proof is in the
                request pipeline, tests, metrics, dashboards, and Dockerised
                runtime, not in a marketing UI.
              </p>
            </div>

            <aside className="space-y-4 rounded-2xl border border-white/10 bg-[#090B1C] p-5 text-xs text-white/80">
              <h3 className="text-sm font-semibold text-white">
                Project snapshot
              </h3>
              <ul className="space-y-2">
                <li>
                  <span className="text-white/50">Type:</span> Personal backend
                  and platform project
                </li>
                <li>
                  <span className="text-white/50">Core idea:</span> Shared
                  gateway for upstream API reliability
                </li>
                <li>
                  <span className="text-white/50">Main stack:</span> FastAPI,
                  Redis, HTTPX, Prometheus, Grafana
                </li>
                <li>
                  <span className="text-white/50">Proof points:</span> Docker
                  stack, integration tests, metrics, health endpoints
                </li>
                <li>
                  <span className="text-white/50">Ownership:</span> API design,
                  resilience policies, tests, and observability setup
                </li>
              </ul>
            </aside>
          </section>

          <section className="mt-14 space-y-4">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
              <img
                src="/screenshots/reliability-layer-architecture.svg"
                alt="Architecture diagram for the Reliability Layer API"
                className="w-full object-cover"
              />
            </div>
            <p className="text-xs text-white/55">
              The service sits between internal callers and upstream APIs, then
              applies authentication, rate limiting, allowlisted routing, cache
              policy, circuit breaking, retry rules, and metrics in one place.
            </p>
          </section>

          <section className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
              <h3 className="text-sm font-semibold text-white">
                Strict timeout policy
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                Every outbound call uses explicit connect, read, write, and pool
                timeouts through a shared HTTPX client. That stops hanging
                requests from silently consuming capacity.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
              <h3 className="text-sm font-semibold text-white">
                Bounded retries only
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                Retries are capped, use exponential backoff plus jitter, and are
                restricted for non-idempotent methods unless an idempotency key
                is present.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
              <h3 className="text-sm font-semibold text-white">
                Fail fast when needed
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                Circuit breakers open after repeated failures, allowing the
                service to fail fast or serve stale cache instead of repeatedly
                hammering a bad upstream.
              </p>
            </div>
          </section>

          <section className="mt-16 space-y-4">
            <h2 className="text-lg font-semibold text-white sm:text-xl">
              Request flow and degraded behaviour
            </h2>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
              <img
                src="/screenshots/reliability-layer-flow.svg"
                alt="Request flow diagram showing rate limiting, cache, retries, stale fallback, and error handling"
                className="w-full object-cover"
              />
            </div>
            <p className="text-sm leading-relaxed text-white/80">
              The flow is deliberate: authenticate, rate limit, route only to
              allowlisted upstreams, check fresh cache, enforce breaker state,
              make the timed upstream call, then either store a success
              response, serve stale on error, or return a controlled failure.
            </p>
          </section>

          <section className="mt-16 grid gap-10 md:grid-cols-2">
            <div className="space-y-5 text-sm leading-relaxed text-white/80">
              <h2 className="text-lg font-semibold text-white sm:text-xl">
                What the implementation includes
              </h2>
              <ul className="space-y-2">
                <li>Allowlisted proxy routes for `GET` and `POST`.</li>
                <li>Safe header forwarding instead of arbitrary pass-through.</li>
                <li>Redis-backed cache and rate limiting with local fallbacks.</li>
                <li>Structured logs to stdout and a Prometheus `/metrics` endpoint.</li>
                <li>Docker Compose stack for API, Redis, Prometheus, Grafana, and an upstream simulator.</li>
                <li>Health endpoints, docs, dashboards, and CI-ready test coverage.</li>
              </ul>
            </div>

            <div className="space-y-5 rounded-2xl border border-white/10 bg-[#090B1C] p-5 text-sm text-white/80">
              <h3 className="text-sm font-semibold text-white">
                Why it is a strong portfolio project
              </h3>
              <ul className="space-y-2">
                <li>
                  It shows backend engineering beyond CRUD by focusing on
                  resilience under partial failure.
                </li>
                <li>
                  It demonstrates operational thinking through metrics,
                  dashboards, health signalling, and failure-mode tests.
                </li>
                <li>
                  It combines application code with platform concerns like
                  Docker, Redis, Prometheus, and Grafana.
                </li>
                <li>
                  It gives me a concrete way to talk about timeouts, retries,
                  load protection, observability, and production readiness.
                </li>
              </ul>
            </div>
          </section>

          <section className="mt-16 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
              <h3 className="text-sm font-semibold text-white">
                How it can be explored
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                The project exposes FastAPI docs at `/docs`, health endpoints at
                `/health/live` and `/health/ready`, metrics at `/metrics`, and a
                local Prometheus plus Grafana stack through Docker Compose.
              </p>
              <pre className="mt-4 overflow-x-auto rounded-xl border border-white/10 bg-[#050716] p-3 text-xs text-white/75">
docker compose -f deployments/docker/docker-compose.yml up --build
              </pre>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#090B1C] p-5">
              <h3 className="text-sm font-semibold text-white">
                How it is verified
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                The important proof is behavioural: unit tests cover retry
                decisions, cache key determinism, breaker state transitions, and
                rate-limit atomicity, while integration tests simulate timeouts,
                upstream 500s, stale fallback, and 429 behaviour.
              </p>
              <pre className="mt-4 overflow-x-auto rounded-xl border border-white/10 bg-[#050716] p-3 text-xs text-white/75">
./.venv/bin/python -m pytest -q
              </pre>
            </div>
          </section>

          <section className="mt-16 border-t border-white/10 pt-10 text-sm leading-relaxed text-white/80">
            <h2 className="text-lg font-semibold text-white sm:text-xl">
              What I would build next
            </h2>
            <p className="mt-4">
              The next step would be turning this from a strong local platform
              project into a stronger deployment story: ECS Fargate or another
              container platform, shared breaker state across replicas, alerting
              rules, and a small amount of production-style infrastructure as
              code.
            </p>
            <p className="mt-4">
              In one sentence: this project shows how I think about backend
              systems when dependencies are unreliable, not just how I build
              happy-path application features.
            </p>
          </section>
        </div>
      </main>
    </PageTransition>
  );
}
