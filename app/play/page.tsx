import Link from "next/link";

import TardisRunnerGame from "@/components/TardisRunnerGame";

export default function PlayPage() {
  return (
    <main className="min-h-screen bg-[#050716] pb-20 pt-24 text-white">
      <div className="mx-auto max-w-5xl px-4">
        <Link
          href="/"
          className="inline-flex items-center text-sm font-semibold text-[#9AE1FF] transition hover:text-white"
        >
          ← Back to Portfolio
        </Link>

        <section className="mt-6 rounded-3xl border border-white/10 bg-gradient-to-br from-[#101326] via-[#090B1C] to-[#050716] p-6 shadow-[0_0_35px_rgba(154,225,255,0.08)] sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9AE1FF]">
            Portfolio Playground
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            TARDIS Runner
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-white/70 sm:text-base">
            A simple TARDIS-through-space mini game with a local leaderboard.
            It is intentionally lightweight and mobile-friendly, so visitors can
            play quickly and compare scores on their own device.
          </p>
        </section>

        <section className="mt-6">
          <TardisRunnerGame />
        </section>
      </div>
    </main>
  );
}
