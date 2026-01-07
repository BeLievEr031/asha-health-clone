export default function FooterAccess() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.18),transparent_45%)]" />

      {/* Top message */}
      <div className="relative z-10 px-6 pt-24 pb-20 text-center max-w-4xl mx-auto">
        <span
          className="inline-block mb-6 rounded-full border border-blue-500/40 
                         px-4 py-1 text-sm text-blue-400"
        >
          TRANSFORMATIVE AI
        </span>

        <h2 className="text-2xl md:text-3xl font-medium leading-relaxed">
          Want to view our full website? Request an access code
          <br />
          by emailing{" "}
          <span className="text-white font-semibold">
            eduardo@autopilotclinic.cloud
          </span>
          .
        </h2>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Main footer */}
      <div className="relative z-10 px-6 md:px-12 py-14">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* 강조 <!-- Logo --> */}
          <div className="flex items-center gap-2 font-semibold text-lg">
            <div className="h-9 w-9 rounded bg-blue-600 flex items-center justify-center font-bold">
              A
            </div>
            Auto Pilot Clinic Health
          </div>

          {/* Center email */}
          <div className="text-white/80 text-sm">
            eduardo@autopilotclinic.cloud
          </div>

          {/* CTA */}
          <button
            className="self-start md:self-auto rounded-xl bg-blue-700 px-6 py-3 
                             text-sm font-medium hover:bg-blue-600 transition"
          >
            Book a Demo
          </button>
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-white/10" />

        {/* Social row */}
        <div className="flex flex-wrap items-center gap-8 text-sm text-white/70">
          <span className="hover:text-white transition cursor-pointer">
            LinkedIn
          </span>
          <span className="hover:text-white transition cursor-pointer">
            Twitter / X
          </span>
          <span className="hover:text-white transition cursor-pointer">
            Y Combinator
          </span>
        </div>

        {/* Bottom row */}
        <div
          className="mt-10 flex flex-col md:flex-row md:items-center 
                        md:justify-between gap-4 text-sm text-white/50"
        >
          <span>© 2025 — Copyright Auto Pilot Clinic, Inc.</span>
          <span className="hover:text-white transition cursor-pointer">
            Privacy Policy
          </span>
        </div>
      </div>
    </footer>
  );
}
