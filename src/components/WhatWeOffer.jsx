import CardSwap, { Card } from "./CardSwap";

export default function WhatWeOffer() {
  return (
    <section
      className="
        relative w-full pt-20 pb-36
        overflow-hidden

        /* LIGHT MODE BACKGROUND */
        bg-gradient-to-br
        from-fuchsia-100 via-white to-white

        /* DARK MODE */
        dark:bg-none
      "
    >
      {/* ===== LIGHT MODE GRADIENT OVERLAY (IMPORTANT) ===== */}
      <div className="pointer-events-none absolute inset-0 dark:hidden">
        {/* Top-left wash */}
        <div className="absolute left-[-10%] top-[-20%] w-[900px] h-[900px] rounded-full bg-fuchsia-200/40 blur-[180px]" />

        {/* Right-side glow behind cards */}
        <div className="absolute right-[-20%] top-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-fuchsia-300/35 blur-[200px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-28 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div>
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-8 text-gray-900 dark:text-white">
            What is Arithwise?
          </h2>

          <p className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-white/75 max-w-xl mb-12">
            Arithwise delivers innovative IT solutions designed to scale with
            your business. We combine technology, strategy, and integrity to
            help organizations grow efficiently, securely, and sustainably.
          </p>

          <button
            className="
              inline-flex items-center gap-2
              px-9 py-4 rounded-xl
              text-lg font-semibold text-white
              bg-gradient-to-r from-fuchsia-500 to-pink-500
              shadow-[0_14px_45px_rgba(217,70,239,0.55)]
              hover:shadow-[0_20px_65px_rgba(217,70,239,0.75)]
              hover:scale-[1.04]
              transition-all duration-300
            "
          >
            Know More →
          </button>
        </div>

        {/* ================= RIGHT — CARD SWAP ================= */}
        <div className="relative h-[460px]">
          <CardSwap width={440} height={300}>

            <Card className="p-7">
              <h4 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                No Coding
              </h4>
              <p className="text-lg text-gray-700 dark:text-white/80 leading-relaxed">
                Build and deploy powerful solutions without writing complex
                code. Empower teams to move faster with intuitive systems.
              </p>
              <p className="mt-3 text-base text-gray-500 dark:text-white/60">
                Ideal for rapid prototyping and agile teams.
              </p>
            </Card>

            <Card className="p-7">
              <h4 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                Mobile Friendly
              </h4>
              <p className="text-lg text-gray-700 dark:text-white/80 leading-relaxed">
                Optimized experiences across all modern devices ensuring smooth
                performance on mobile, tablet, and desktop.
              </p>
              <p className="mt-3 text-base text-gray-500 dark:text-white/60">
                Accessibility and speed built-in by design.
              </p>
            </Card>

            <Card className="p-7">
              <h4 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                Unique System
              </h4>
              <p className="text-lg text-gray-700 dark:text-white/80 leading-relaxed">
                Modular architecture tailored to your business needs, allowing
                flexible growth and easy evolution.
              </p>
              <p className="mt-3 text-base text-gray-500 dark:text-white/60">
                Built for long-term scalability and reliability.
              </p>
            </Card>

          </CardSwap>
        </div>

      </div>
    </section>
  );
}
