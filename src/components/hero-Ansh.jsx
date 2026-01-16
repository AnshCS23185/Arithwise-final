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
      <div className="absolute inset-0 z-0 pointer-events-none will-change-transform">

        {/* LEFT SPLINE */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <iframe
            src="https://my.spline.design/cubic-bB4qr5HkAWzZMHjtYV2sAwKD/"
            className="
              w-[72vw] h-[105vh]
              -mt-[2.5vh]
              brightness-[0.55] contrast-[1.1] saturate-[0.9]
            "
            frameBorder="0"
            allow="autoplay; fullscreen"
          />
        </div>

        {/* RIGHT SPLINE (MIRRORED) */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <iframe
            src="https://my.spline.design/cubic-bB4qr5HkAWzZMHjtYV2sAwKD/"
            className="
              w-[72vw] h-[105vh]
              -mt-[2.5vh]
              scale-x-[-1] opacity-70
              brightness-[0.55] contrast-[1.1] saturate-[0.9]
            "
            frameBorder="0"
            allow="autoplay; fullscreen"
          />
        </div>
      </div>

      {/* ================= SINGLE UNIFORM OVERLAY ================= */}
      <div className="absolute inset-0 z-10 bg-black/55" />

      {/* ================= TEXT CONTENT ================= */}
      <div className="relative z-20 flex items-start justify-center pt-[16vh] px-6">
        <div className="max-w-6xl w-full text-center">

          {/* MAIN TITLE */}
          <h1
            className="
              text-white font-semibold tracking-tight
              text-[5rem] md:text-[6.8rem] lg:text-[7.8rem]
            "
          >
            Solution Engine.{" "}
            <span className="text-fuchsia-400">Ignited</span>
          </h1>

          {/* SUB HEADING */}
          <div
            className="
              mt-10 flex justify-center gap-4
              text-[2.8rem] md:text-[3.6rem]
              font-medium
            "
          >
            <span className="text-white">Engineering</span>

            <div className="relative h-[1.3em] w-[12ch] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.6 }}
                  className="absolute left-0 right-0 text-center text-fuchsia-400"
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
