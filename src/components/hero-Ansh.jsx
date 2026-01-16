import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const words = ["Success", "Innovation", "Efficiency", "The Future"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden">

      {/* ================= SPLINE BACKGROUND ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none">

        {/* LEFT SPLINE */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <iframe
            src="https://my.spline.design/cubic-bB4qr5HkAWzZMHjtYV2sAwKD/"
            className="w-[70vw] h-[100vh]"
            frameBorder="0"
            allow="autoplay; fullscreen"
          />
        </div>

        {/* RIGHT SPLINE (MIRRORED) */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <iframe
            src="https://my.spline.design/cubic-bB4qr5HkAWzZMHjtYV2sAwKD/"
            className="w-[70vw] h-[100vh] scale-x-[-1] opacity-70"
            frameBorder="0"
            allow="autoplay; fullscreen"
          />
        </div>
      </div>

      {/* SUBTLE DARK OVERLAY */}
      <div className="absolute inset-0 z-10 bg-black/25" />

      {/* ================= TEXT ================= */}
      <div className="relative z-20 flex items-start justify-center pt-[16vh] px-6">
        <div className="max-w-6xl w-full text-center relative">

          {/* SOFT GLOW BACKDROP */}
          <div
            className="
              absolute inset-0 -z-10
              bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.75)_0%,rgba(0,0,0,0.55)_40%,rgba(0,0,0,0)_75%)]
              blur-2xl
            "
          />

          {/* MAIN TITLE */}
          <h1
            className="
              flex flex-wrap justify-center items-baseline gap-5
              font-semibold tracking-tight
              text-white
              text-[5rem] md:text-[6.8rem] lg:text-[7.8rem]
              drop-shadow-[0_10px_50px_rgba(0,0,0,1)]
            "
          >
            <span>Solution Engine.</span>

            <span
              className="
                text-fuchsia-400
                drop-shadow-[0_0_70px_rgba(236,72,153,1)]
              "
            >
              Ignited
            </span>
          </h1>

          {/* ================= SUB HEADING ================= */}
          <div
            className="
              mt-10 flex justify-center items-center gap-4
              text-[2.8rem] md:text-[3.6rem]
              font-medium
            "
          >
            {/* STATIC WORD */}
            <span
              className="
                text-white
                drop-shadow-[0_6px_35px_rgba(0,0,0,0.95)]
              "
            >
              Engineering
            </span>

            {/* SMOOTH ANIMATED WORD */}
            <div className="relative h-[1.3em] w-[12ch] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    textShadow: [
                      "0 0 12px rgba(236,72,153,0.4)",
                      "0 0 45px rgba(236,72,153,0.95)",
                      "0 0 12px rgba(236,72,153,0.4)",
                    ],
                  }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    opacity: { duration: 0.6, ease: "easeOut" },
                    y: { duration: 0.6, ease: "easeOut" },
                    textShadow: {
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  className="
                    absolute left-0 right-0 text-center
                    text-fuchsia-400
                    will-change-transform
                  "
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* TAGLINE */}
          <p
            className="
              mt-12 text-xl md:text-2xl
              text-white/85
              max-w-3xl mx-auto
              leading-relaxed
              drop-shadow-[0_6px_30px_rgba(0,0,0,0.9)]
            "
          >
            We architect scalable, high-performance systems that evolve with your
            ambition — not your overheads.
          </p>

        </div>
      </div>

    </section>
  );
}
