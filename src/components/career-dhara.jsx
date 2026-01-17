import { motion } from "framer-motion";

const values = [
  "Data before opinions",
  "Create, don’t copy",
  "Learn continuously",
  "Own outcomes",
  "Earn trust",
  "Protect balance",
];

export default function Opportunities() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* ================= AMBIENT BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Light mode glow */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-300/25 blur-[260px] dark:hidden" />

        {/* Dark mode glow */}
        <div className="hidden dark:block absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-500/20 blur-[260px]" />
        <div className="hidden dark:block absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-white/10 blur-[220px]" />
      </div>

      {/* ================= HERO ================= */}
      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="text-sm tracking-[0.35em] uppercase font-semibold text-purple-500 mb-6"
        >
          Careers at Arithwise
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-extrabold leading-tight max-w-4xl"
        >
          Growth is not a benefit.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-fuchsia-500">
            It is the expectation.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-10 max-w-2xl text-lg text-foreground/80 dark:text-foreground/70"
        >
          We are building teams for people who want responsibility, continuous
          learning, and real-world impact — not just titles.
        </motion.p>
      </div>

      {/* ================= VALUES ================= */}
      <div className="relative max-w-6xl mx-auto px-6 py-24 space-y-20">
        {values.map((text, index) => (
          <motion.div
            key={text}
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex items-center gap-8"
          >
            {/* Index */}
            <span className="text-6xl font-bold text-black/20 dark:text-white/10">
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Text */}
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground">
              {text}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* ================= FORM ================= */}
      <div className="relative max-w-4xl mx-auto px-6 pb-32">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-14"
        >
          Start the conversation
        </motion.h2>

        <form className="grid gap-10">
          <div className="grid md:grid-cols-2 gap-10">
            <input
              placeholder="Full name"
              className="bg-transparent border-b border-foreground/30 py-3 outline-none focus:border-purple-500 transition text-foreground placeholder:text-foreground/50"
            />
            <input
              placeholder="Phone"
              className="bg-transparent border-b border-foreground/30 py-3 outline-none focus:border-purple-500 transition text-foreground placeholder:text-foreground/50"
            />
          </div>

          <input
            placeholder="Email"
            className="bg-transparent border-b border-foreground/30 py-3 outline-none focus:border-purple-500 transition text-foreground placeholder:text-foreground/50"
          />

          <textarea
            rows="3"
            placeholder="Why do you want to grow with us?"
            className="bg-transparent border-b border-foreground/30 py-3 outline-none focus:border-purple-500 transition resize-none text-foreground placeholder:text-foreground/50"
          />

          <input
            type="file"
            className="text-sm text-foreground/60"
          />

          <button className="self-start mt-6 px-8 py-3 font-semibold rounded-full text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:opacity-90 transition">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
