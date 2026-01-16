import { motion, useMotionValue, useTransform } from "framer-motion";

export default function WhoWeAre() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-50, 50], [6, -6]);
  const rotateY = useTransform(x, [-50, 50], [-6, 6]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const posX = e.clientX - rect.left - rect.width / 2;
    const posY = e.clientY - rect.top - rect.height / 2;
    x.set(posX / 8);
    y.set(posY / 8);
  }

  function resetTilt() {
    x.set(0);
    y.set(0);
  }

  return (
    <section className="relative bg-black text-white py-36 overflow-hidden">
      
      {/* Ambient glow */}
      <div className="absolute inset-0">
        <div className="absolute left-[-25%] top-1/2 w-[800px] h-[800px] bg-purple-600/20 blur-[200px]" />
      </div>

      {/* ===== STRICT GRID ===== */}
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* ================= VIDEO (LEFT COLUMN ONLY) ================= */}
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTilt}
          style={{ rotateX, rotateY }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <div className="relative rounded-3xl p-[2px]">
            {/* Gradient border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 opacity-70 blur-[2px]" />

            {/* Video container */}
            <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 aspect-[16/10]">
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

        {/* ================= TEXT (RIGHT COLUMN) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative z-10"
        >
          <span className="text-sm tracking-widest uppercase text-purple-400">
            Who We Are
          </span>

          <h2 className="mt-4 text-5xl xl:text-6xl font-semibold leading-tight">
            The Solution Engine <br />
            Your Business Deserves.
          </h2>

          <p className="mt-6 text-lg text-white/70 max-w-xl">
            We architect scalable, high-performance systems that evolve with your ambition — not your overheads.
          </p>

          <ul className="mt-8 space-y-4 text-white/85">
            <li className="flex items-center gap-3">
              <span className="text-purple-400">✓</span>
              Business-first problem solving
            </li>
            <li className="flex items-center gap-3">
              <span className="text-purple-400">✓</span>
              Modern technology & agile methodology
            </li>
            <li className="flex items-center gap-3">
              <span className="text-purple-400">✓</span>
              Human-centered engineering
            </li>
          </ul>

          <div className="mt-10">
            <a
              href="#"
              className="inline-flex items-center px-7 py-3 rounded-full border border-white/20 hover:border-purple-400 hover:text-purple-400 transition-all"
            >
              Learn More →
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
