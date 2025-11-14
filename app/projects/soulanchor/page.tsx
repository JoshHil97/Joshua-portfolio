import Link from "next/link";

export default function SoulAnchorCaseStudy() {
  return (
    <main className="min-h-screen bg-[#050716] text-white pt-24 pb-32">
      <div className="mx-auto max-w-4xl px-4">

        {/* Back link */}
        <Link
          href="/"
          className="mb-10 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
        >
          <span className="text-lg">←</span> Back to home
        </Link>

        {/* Title */}
        <h1 className="text-4xl font-semibold tracking-tight">SoulAnchor App</h1>
        <p className="mt-2 text-white/60">
          A mobile app for spiritual encouragement, giving personalised verses,
          messages, and guided prayer based on emotion.
        </p>

        {/* Header visual */}
        <div className="relative mt-10 flex h-64 w-full items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-[#9AE1FF]/20 to-[#6C63FF]/10 backdrop-blur-md">
          <p className="text-sm text-white/40">
            (Mobile app screenshot coming soon)
          </p>
        </div>

        {/* Overview */}
        <section className="mt-16 space-y-6">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="text-white/70 leading-relaxed">
            SoulAnchor is a spiritual wellness mobile app designed to bring
            encouragement to users based on how they’re feeling. It includes
            emotional categories, scripture, short messages, prayers, and gentle
            animations to create a peaceful experience.
          </p>

          <p className="text-white/70 leading-relaxed">
            Built with React Native + Expo, the app uses animated gradients,
            swipeable cards, and a curated dataset of 30 emotions — each with a
            verse, message, and guided prayer.
          </p>
        </section>

        {/* Problem / Solution */}
        <section className="mt-16 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold">The problem</h3>
            <p className="mt-3 text-white/65 leading-relaxed">
              People often struggle to find encouragement that really meets
              them where they are. Not generic verses — but something that
              responds to their specific emotional state.
            </p>
            <p className="mt-3 text-white/65 leading-relaxed">
              There wasn’t a simple mobile experience offering quick, peaceful,
              emotion-based support.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">The solution</h3>
            <p className="mt-3 text-white/65 leading-relaxed">
              A mobile-first experience that:
            </p>
            <ul className="mt-3 space-y-2 text-sm text-white/65">
              <li>• Detects emotion via user selection.</li>
              <li>• Provides targeted scripture, encouragement, and prayer.</li>
              <li>• Uses animations to create a calm atmosphere.</li>
              <li>• Lets users save favourite verses.</li>
              <li>• Offers “Today’s Anchor” (a daily randomised reading).</li>
            </ul>
          </div>
        </section>

        {/* Key Features */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold">Key features</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {/* Item */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h4 className="font-semibold text-white">
                30 emotional categories
              </h4>
              <p className="mt-2 text-sm text-white/70">
                Each with a verse, message, and guided prayer.
              </p>
            </div>

            {/* Item */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h4 className="font-semibold text-white">
                Animated gradient backgrounds
              </h4>
              <p className="mt-2 text-sm text-white/70">
                Soft, slow-moving gradients using React Native Reanimated.
              </p>
            </div>

            {/* Item */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h4 className="font-semibold text-white">Swipeable cards</h4>
              <p className="mt-2 text-sm text-white/70">
                Verse → Encouragement → Prayer flow using pan gestures.
              </p>
            </div>

            {/* Item */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h4 className="font-semibold text-white">Favourites system</h4>
              <p className="mt-2 text-sm text-white/70">
                Users can save verses or prayers for later.
              </p>
            </div>

            {/* Item */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h4 className="font-semibold text-white">
                “Today’s Anchor”
              </h4>
              <p className="mt-2 text-sm text-white/70">
                A daily randomised emotion + verse for inspiration.
              </p>
            </div>

            {/* Item */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h4 className="font-semibold text-white">Real UX design</h4>
              <p className="mt-2 text-sm text-white/70">
                Smooth motion, minimal clutter, and a warm tone.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold">Tech stack</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h4 className="font-semibold text-white">Mobile</h4>
              <ul className="mt-2 space-y-1 text-sm text-white/70">
                <li>• React Native (Expo)</li>
                <li>• TypeScript</li>
                <li>• Reanimated for animations</li>
                <li>• React Navigation</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h4 className="font-semibold text-white">Supporting tools</h4>
              <ul className="mt-2 space-y-1 text-sm text-white/70">
                <li>• AsyncStorage (local data saving)</li>
                <li>• Expo Go for previewing</li>
                <li>• Tailwind (via NativeWind)</li>
                <li>• Git / GitHub</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h4 className="font-semibold text-white">Practices</h4>
              <ul className="mt-2 space-y-1 text-sm text-white/70">
                <li>• Component-driven UI</li>
                <li>• Clean code + naming</li>
                <li>• Writing reusable card + emotion components</li>
                <li>• Testing flows manually across devices</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h4 className="font-semibold text-white">Focus areas</h4>
              <ul className="mt-2 space-y-1 text-sm text-white/70">
                <li>• User experience + calm visual design</li>
                <li>• Smooth animations</li>
                <li>• Emotion-driven content architecture</li>
                <li>• Clarity and simplicity</li>
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
              Emotion selection screen
            </div>
            <div className="flex h-40 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-sm text-white/40">
              Verse / message / prayer cards
            </div>
          </div>
        </section>

        {/* Learnings */}
        <section className="mt-20">
          <h2 className="text-2xl font-semibold">What I learned</h2>
          <ul className="mt-6 space-y-3 leading-relaxed text-white/70">
            <li>• How to build a polished mobile UI from scratch.</li>
            <li>• How to design emotion-driven content flows.</li>
            <li>• How to combine animations with calm UX.</li>
            <li>• How to think like a designer + developer.</li>
            <li>• How to structure larger React Native projects cleanly.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
