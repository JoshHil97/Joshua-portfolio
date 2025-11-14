import Link from "next/link";

export default function VBCICaseStudy() {
  return (
    <main className="min-h-screen bg-[#050716] text-white pt-24 pb-32">
      <div className="mx-auto max-w-4xl px-4">
        {/* Back link */}
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
        >
          <span className="text-lg">←</span>
          Back to home
        </Link>

        {/* Title */}
        <h1 className="text-4xl font-semibold tracking-tight">
          VBCI Church Directory
        </h1>
        <p className="mt-2 text-white/60">
          A branded, searchable church member directory built with Spring Boot
          and React/Tailwind.
        </p>

        {/* Header visual */}
        <div className="relative mt-10 flex h-64 w-full items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-[#6C63FF]/20 to-[#9AE1FF]/10 backdrop-blur-md">
          <p className="text-sm text-white/40">
            (Church directory UI screenshot coming soon)
          </p>
        </div>

        {/* Overview */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="leading-relaxed text-white/70">
            The VBCI Church Directory is a full-stack web application designed
            to help church leaders and members easily find, view, and update
            member information. Instead of scattered spreadsheets and
            out-of-date lists, the directory provides a single, clean place to
            search, filter, and manage people.
          </p>

          <p className="leading-relaxed text-white/70">
            I built this as a practical, real-world tool: something that could
            genuinely be used week to week by a church team. The UI is styled
            around VBCI branding, and the stack uses a Spring Boot backend with
            a React + Tailwind frontend.
          </p>
        </section>

        {/* Problem / Solution */}
        <section className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold">The problem</h3>
            <p className="mt-3 leading-relaxed text-white/65">
              Churches often manage member data with static documents:
              spreadsheets, paper lists, or WhatsApp messages. That leads to:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-white/65">
              <li>• Out-of-date contact details.</li>
              <li>• No easy search or filtering.</li>
              <li>• Manual work to build teams or follow-up lists.</li>
              <li>• No clear ownership of who updates what.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold">The solution</h3>
            <p className="mt-3 leading-relaxed text-white/65">
              I built a central directory where authorised users can:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-white/65">
              <li>• Create, edit, and delete member profiles.</li>
              <li>• Search by name, ministry, or other fields.</li>
              <li>• Filter members (e.g. by department or status).</li>
              <li>
                • View information in a clean, mobile-friendly interface that
                  reflects the VBCI brand.
              </li>
            </ul>
            <p className="mt-3 leading-relaxed text-white/65">
              The aim was not just CRUD, but a tool that actually improves how
              leaders work.
            </p>
          </div>
        </section>

        {/* Key features */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold">Key features</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h4 className="font-semibold text-white">Member management</h4>
              <ul className="mt-2 space-y-1 text-sm text-white/70">
                <li>• Add new members with structured fields.</li>
                <li>• Edit existing records safely.</li>
                <li>• Soft delete or deactivate when needed.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h4 className="font-semibold text-white">Search &amp; filters</h4>
              <ul className="mt-2 space-y-1 text-sm text-white/70">
                <li>• Search by name or keywords.</li>
                <li>• Filter by ministry / department.</li>
                <li>• Quickly find the right people for teams.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h4 className="font-semibold text-white">Branded UI</h4>
              <ul className="mt-2 space-y-1 text-sm text-white/70">
                <li>• Colours and accents based on the VBCI logo.</li>
                <li>• Clean, modern layout with Tailwind.</li>
                <li>• Responsive design for desktop and mobile.</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h4 className="font-semibold text-white">Real-world ready</h4>
              <ul className="mt-2 space-y-1 text-sm text-white/70">
                <li>• Built with a proper API layer.</li>
                <li>• Validation to avoid broken records.</li>
                <li>• Structured in a way that can grow.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tech stack */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold">Tech stack</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h4 className="font-semibold text-white">Backend</h4>
              <ul className="mt-2 space-y-1 text-sm text-white/70">
                <li>• Java + Spring Boot</li>
                <li>• REST API for members</li>
                <li>• JPA / Hibernate for persistence</li>
                <li>• Relational database (e.g. PostgreSQL/MySQL)</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h4 className="font-semibold text-white">Frontend</h4>
              <ul className="mt-2 space-y-1 text-sm text-white/70">
                <li>• React</li>
                <li>• Tailwind CSS for styling</li>
                <li>• Fetching data from the Spring Boot API</li>
                <li>• Reusable components for cards, forms, and layout</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h4 className="font-semibold text-white">Practices</h4>
              <ul className="mt-2 space-y-1 text-sm text-white/70">
                <li>• RESTful API design</li>
                <li>• Separation of concerns (frontend vs backend)</li>
                <li>• Meaningful commit messages</li>
                <li>• Iterative development based on feedback</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h4 className="font-semibold text-white">My responsibilities</h4>
              <ul className="mt-2 space-y-1 text-sm text-white/70">
                <li>• Designing the API and data model.</li>
                <li>• Building the React UI and Tailwind styling.</li>
                <li>• Implementing search and filter logic.</li>
                <li>• Ensuring the app felt polished and usable.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold">Screenshots</h2>
          <p className="mt-2 text-sm text-white/50">
            (We&apos;ll add real screenshots later.)
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="flex h-40 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm text-white/40">
              Directory list view
            </div>
            <div className="flex h-40 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm text-white/40">
              Member details / edit form
            </div>
          </div>
        </section>

        {/* Learnings */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold">What I learned</h2>
          <ul className="mt-6 space-y-3 leading-relaxed text-white/70">
            <li>
              • How to design and consume a REST API between Spring Boot and
                React.
            </li>
            <li>
              • How to structure a React app around real user tasks, not just
                components.
            </li>
            <li>
              • How to adapt a UI to match an existing brand (VBCI colours and
                feel).
            </li>
            <li>
              • How to think about data quality when you&apos;re managing real
                people&apos;s information.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
