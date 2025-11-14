import Link from "next/link";

export default function MakersBNBCaseStudy() {
  return (
    <main className="min-h-screen bg-[#050716] text-white pt-24 pb-32">
      <div className="mx-auto max-w-4xl px-4">
        {/* Back link */}
        <Link
          href="/"
          className="text-sm text-white/60 hover:text-white transition inline-flex items-center gap-2 mb-10"
        >
          <span className="text-lg">←</span> Back to home
        </Link>

        {/* Title */}
        <h1 className="text-4xl font-semibold tracking-tight">
          Makers BnB Project
        </h1>
        <p className="mt-2 text-white/60">
          An Airbnb-style booking platform built as my final engineering project
          at Makers Academy.
        </p>

        {/* Header visuals */}
        <div className="relative mt-10 h-64 w-full rounded-3xl bg-gradient-to-br from-[#6C63FF]/20 to-[#9AE1FF]/10 border border-white/10 backdrop-blur-md flex items-center justify-center">
          <p className="text-white/40 text-sm">
            (Project screenshot banner coming soon)
          </p>
        </div>

        {/* Overview */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="text-white/70 leading-relaxed">
            Makers BnB is a full-stack web application inspired by Airbnb,
            designed to allow users to list spaces, request bookings, and manage
            stays. Our team of four built it using test-driven development,
            clean design principles, and agile delivery practices taught at
            Makers Academy.
          </p>
          <p className="text-white/70 leading-relaxed">
            The goal wasn’t just to build a clone — it was to learn how to
            collaborate as an engineering team, write maintainable code, and
            design a product that feels real.
          </p>
        </section>

        {/* Problem / Solution */}
        <section className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold">The problem</h3>
            <p className="mt-3 text-white/65 leading-relaxed">
              Build a real product under time pressure while applying:
              <br />
              • TDD  
              • Pair programming  
              • Version control workflows  
              • User-centred design  
            </p>
            <p className="mt-3 text-white/65 leading-relaxed">
              We needed to create a booking experience with authentication,
              listings, and a way for users to request stays.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">The solution</h3>
            <p className="mt-3 text-white/65 leading-relaxed">
              We designed a full MVC-style application with:
              <br />
              • User registration + login  
              • Listing creation flow  
              • Booking request system  
              • Availability logic  
              • A clean, simple UI  
            </p>
            <p className="mt-3 text-white/65 leading-relaxed">
              Every feature was delivered through TDD and code reviews, keeping
              the codebase stable as it grew.
            </p>
          </div>
        </section>

        {/* Tech stack */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold">Tech Stack</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h4 className="font-semibold text-white">Frontend</h4>
              <ul className="mt-2 text-white/70 text-sm space-y-1">
                <li>• HTML, CSS</li>
                <li>• ERB templating</li>
                <li>• Basic responsive layout</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h4 className="font-semibold text-white">Backend</h4>
              <ul className="mt-2 text-white/70 text-sm space-y-1">
                <li>• Ruby / Sinatra</li>
                <li>• MVC architecture</li>
                <li>• Sessions & authentication</li>
                <li>• PostgreSQL database</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h4 className="font-semibold text-white">Practices</h4>
              <ul className="mt-2 text-white/70 text-sm space-y-1">
                <li>• Test-Driven Development (RSpec)</li>
                <li>• Pair programming</li>
                <li>• Code reviews</li>
                <li>• Agile workflow</li>
              </ul>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h4 className="font-semibold text-white">Focus areas</h4>
              <ul className="mt-2 text-white/70 text-sm space-y-1">
                <li>• User flows</li>
                <li>• Booking logic</li>
                <li>• Clean class design</li>
                <li>• Real product thinking</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Screenshots section */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold">Screenshots</h2>
          <p className="text-white/50 text-sm mt-2">
            (We’ll add real screenshots later)
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="h-40 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 text-sm">
              Listing page screenshot
            </div>
            <div className="h-40 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 text-sm">
              Booking flow screenshot
            </div>
          </div>
        </section>

        {/* Learnings */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold">What I learned</h2>
          <ul className="mt-6 text-white/70 leading-relaxed space-y-3">
            <li>• How to build a full-stack product with real user flows.</li>
            <li>• How to collaborate effectively in a team with pairing.</li>
            <li>• How to write maintainable code using TDD.</li>
            <li>• How to scope features and deliver iteratively.</li>
            <li>• How to think like a product engineer, not just a coder.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
