export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background grid + glow */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.25),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6">
        <div className="flex items-center gap-2 font-semibold text-lg">
          <div className="h-8 w-8 rounded bg-blue-600 flex items-center justify-center font-bold">
            A
          </div>
          Auto Pilot Clinic
        </div>

        <button className="hidden sm:block rounded-xl bg-blue-600 px-5 py-2 text-sm font-medium hover:bg-blue-500 transition">
          Book a Demo
        </button>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-20 pb-32">
        {/* YC badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-black/60 px-4 py-1 text-sm">
          <span className="flex h-5 w-5 items-center justify-center rounded bg-orange-500 text-xs font-bold">
            Y
          </span>
          Backed by Y Combinator
        </div>

        {/* Avatars */}
        <div className="mb-6 flex items-center gap-3 text-sm text-white/70">
          {/* <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-7 w-7 rounded-full border border-black bg-gradient-to-br from-gray-400 to-gray-600"
              />
            ))}
          </div> */}
          <span>Join 100+ physicians across specialties</span>
        </div>

        {/* Headline */}
        <h1 className="max-w-4xl text-4xl md:text-6xl font-semibold tracking-tight">
          Become an{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            AI Clinic
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-white/70 text-base md:text-lg">
          Auto Pilot Clinic helps medical practices transform into AI clinics
          that run seamlessly on autopilot.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button className="rounded-xl bg-blue-600 px-8 py-3 text-sm font-medium hover:bg-blue-500 transition shadow-lg shadow-blue-600/30">
            Get Started Now
          </button>

          <button className="rounded-xl border border-white/15 px-8 py-3 text-sm font-medium hover:bg-white/5 transition">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
