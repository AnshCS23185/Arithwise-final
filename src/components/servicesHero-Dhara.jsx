import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Innovation", "Growth", "Efficiency"];

export default function ServicesHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="
        relative h-screen w-full overflow-hidden
        bg-[linear-gradient(120deg,
          rgba(255,255,255,1) 0%,
          rgba(255,245,252,1) 35%,
          rgba(236,72,153,0.18) 65%,
          rgba(0,0,0,0.04) 100%
        )]
        dark:bg-black
      "
    >
      {/* ================= GRID BACKGROUND ================= */}
      {/* ================= RADIAL RINGS ================= */}
<div className="absolute inset-0 pointer-events-none">
  <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] rounded-full
    border border-purple-500/20 blur-[1px]" />

  <div className="absolute top-1/2 left-1/3 w-[420px] h-[420px] rounded-full
    border border-fuchsia-500/30 blur-[1px]" />
</div>


      {/* ================= AMBIENT GRADIENTS ================= */}
      <div className="absolute -left-40 top-32 w-[520px] h-[520px] bg-fuchsia-400/25 blur-[160px]" />
      <div className="absolute -right-40 bottom-20 w-[520px] h-[520px] bg-purple-400/20 blur-[180px]" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-10 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 w-full items-center">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="font-extrabold tracking-tight leading-[1.05]
              text-6xl md:text-7xl lg:text-8xl text-black dark:text-white">

              <span className="block mb-4">Solutions for</span>

              {/* Animated word */}
              <div className="relative h-[1.2em] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span  
                    key={words[index]}
                    initial={{ opacity: 0, y: 60, scale: 0.92 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -60, scale: 0.92 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="
                      absolute left-0 top-0
                      bg-gradient-to-r
                      from-fuchsia-600
                      via-purple-600
                      to-indigo-600
                      bg-clip-text text-transparent
                      drop-shadow-[0_8px_24px_rgba(236,72,153,0.45)]
                    "
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>

            <div className="mt-8 h-[4px] w-32 rounded-full
              bg-gradient-to-r from-fuchsia-500 to-purple-600" />

            <p className="mt-8 max-w-xl text-lg md:text-xl leading-relaxed
              text-black/70 dark:text-white/80">
              Mastering complexity through precision-engineered strategies
              that help businesses scale with confidence.
            </p>
          </div>

          {/* RIGHT VIDEO */}
          {/* RIGHT VIDEO */}
<div className="hidden lg:flex justify-center items-center">
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="
      relative w-[520px] h-[520px]
      rounded-3xl overflow-hidden
      bg-white/60 dark:bg-black/40
      backdrop-blur-xl
      shadow-[0_40px_120px_rgba(168,85,247,0.45)]
      ring-1 ring-white/30
    "
  >
    <video
      src="/videos/service.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    />
  </motion.div>
</div>

        </div>
      </div>
    </section>
  );
}
