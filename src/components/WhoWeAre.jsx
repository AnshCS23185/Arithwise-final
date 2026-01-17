import { motion, useMotionValue, useTransform } from "framer-motion";

export default function WhoWeAre() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const posX = e.clientX - rect.left - rect.width / 2;
    const posY = e.clientY - rect.top - rect.height / 2;
    x.set(posX / 6);
    y.set(posY / 6);
  }

  function resetTilt() {
    x.set(0);
    y.set(0);
  }

  return (
    <section className="relative bg-background text-foreground py-28 overflow-hidden">

      {/* LIGHT MODE GRADIENT */}
      <div className="
        absolute inset-0 pointer-events-none
        opacity-100 dark:opacity-0
        transition-opacity duration-500
        bg-[radial-gradient(900px_500px_at_30%_50%,rgba(168,85,247,0.18),transparent_65%)]
      " />

      {/* DARK MODE GLOW */}
      <div className="
        absolute inset-0 pointer-events-none
        opacity-0 dark:opacity-100
        transition-opacity duration-500
      ">
        <div className="absolute left-[-20%] top-1/2 w-[900px] h-[900px] bg-purple-600/25 blur-[220px]" />
      </div>

      {/* CONTENT */}
      <div className="
        relative max-w-[1500px] mx-auto
        px-2 sm:px-4 lg:px-6
        grid grid-cols-1 lg:grid-cols-2
        gap-24 items-center
      ">

        {/* VIDEO */}
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTilt}
          style={{ rotateX, rotateY }}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="relative rounded-[36px] p-[3px]">
            <div className="absolute inset-0 rounded-[36px] bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 opacity-80 blur-[3px]" />
            <div className="relative rounded-[32px] overflow-hidden bg-background/70 border border-border backdrop-blur-xl aspect-[16/9]">
              <video
                src="/videos/WhoWeAre.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <span className="text-base tracking-[0.35em] uppercase text-purple-500 font-medium">
            Who We Are
          </span>

          <h2 className="mt-6 text-6xl xl:text-7xl font-semibold leading-[1.05]">
            The Solution Engine <br />
            Your Business Deserves.
          </h2>

          <p className="mt-8 text-2xl text-foreground/70 max-w-2xl leading-relaxed">
            We architect scalable, high-performance systems that evolve with your ambition —
            not your overheads.
          </p>

          <ul className="mt-12 space-y-6 text-lg text-foreground/80">
            <li className="flex items-start gap-4">
              <span className="text-purple-500 text-xl">✓</span>
              Business-first problem solving
            </li>
            <li className="flex items-start gap-4">
              <span className="text-purple-500 text-xl">✓</span>
              Modern technology & agile methodology
            </li>
            <li className="flex items-start gap-4">
              <span className="text-purple-500 text-xl">✓</span>
              Human-centered engineering
            </li>
          </ul>

          {/* ✅ UPDATED BUTTON (MATCHES "WHAT IS ARITHWISE") */}
          <div className="mt-14">
            <a
              href="#"
              className="
                inline-flex items-center justify-center
                px-10 py-4
                text-lg font-semibold text-white
                rounded-full
                bg-gradient-to-r from-purple-600 to-pink-500
                shadow-[0_12px_40px_rgba(168,85,247,0.45)]
                hover:scale-[1.04]
                hover:shadow-[0_18px_60px_rgba(168,85,247,0.65)]
                transition-all duration-300
              "
            >
              Learn More →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
