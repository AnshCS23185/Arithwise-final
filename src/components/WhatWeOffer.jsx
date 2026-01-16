export default function WhatWeOffer() {
  return (
    <section className="w-full py-40">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-28 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2
            className="
              text-4xl md:text-5xl xl:text-6xl
              font-bold leading-tight mb-8
              text-[var(--text-primary)]
            "
          >
            What is Arithwise?
          </h2>

          <p
            className="
              text-lg md:text-xl leading-relaxed
              text-[var(--text-secondary)]
              max-w-xl mb-10
            "
          >
            Arithwise delivers innovative IT solutions designed to scale with
            your business. We combine technology, strategy, and integrity to
            help organizations grow efficiently and securely.
          </p>

          <button
            className="
              inline-flex items-center gap-2
              px-8 py-4 rounded-lg
              text-base font-semibold
              bg-[var(--primary)]
              text-white
              hover:opacity-90
              transition
            "
          >
            Know More →
          </button>
        </div>

        {/* RIGHT FEATURES */}
        <div className="flex flex-col gap-14">

          {/* Feature */}
          <div className="flex gap-6 items-start">
            <div
              className="
                w-14 h-14 rounded-full
                flex items-center justify-center
                bg-[var(--icon-bg)]
                text-[var(--primary)]
                text-xl
              "
            >
              ⚙️
            </div>
            <div>
              <h4
                className="
                  text-xl font-semibold mb-2
                  text-[var(--text-primary)]
                "
              >
                No Coding
              </h4>
              <p
                className="
                  text-base leading-relaxed
                  text-[var(--text-secondary)]
                "
              >
                Build powerful solutions without writing complex code.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div
              className="
                w-14 h-14 rounded-full
                flex items-center justify-center
                bg-[var(--icon-bg)]
                text-[var(--primary)]
                text-xl
              "
            >
              📱
            </div>
            <div>
              <h4
                className="
                  text-xl font-semibold mb-2
                  text-[var(--text-primary)]
                "
              >
                Mobile Friendly
              </h4>
              <p
                className="
                  text-base leading-relaxed
                  text-[var(--text-secondary)]
                "
              >
                Optimized experiences across all modern devices.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start">
            <div
              className="
                w-14 h-14 rounded-full
                flex items-center justify-center
                bg-[var(--icon-bg)]
                text-[var(--primary)]
                text-xl
              "
            >
              🧩
            </div>
            <div>
              <h4
                className="
                  text-xl font-semibold mb-2
                  text-[var(--text-primary)]
                "
              >
                Unique System
              </h4>
              <p
                className="
                  text-base leading-relaxed
                  text-[var(--text-secondary)]
                "
              >
                Modular architecture tailored to your business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
