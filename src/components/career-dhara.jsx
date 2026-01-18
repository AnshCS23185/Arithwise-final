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
    <section className="relative min-h-screen overflow-hidden bg-[#f9fafb] dark:bg-background text-foreground">
      {/* ================= AMBIENT BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Light mode glow */}
        <div className="absolute top-[-18%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-300/40 blur-[240px] dark:hidden" />

        {/* Dark mode glow */}
        <div className="hidden dark:block absolute top-[-18%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-500/20 blur-[240px]" />
        <div className="hidden dark:block absolute bottom-[-12%] right-[-12%] w-[520px] h-[520px] bg-white/10 blur-[200px]" />
      </div>

      {/* Light mode surface wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-white/60 dark:hidden pointer-events-none" />

      {/* ================= HERO ================= */}
      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-xs tracking-[0.4em] uppercase font-semibold text-purple-600 mb-5"
        >
          Careers at Arithwise
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold leading-tight max-w-4xl text-gray-900 dark:text-foreground"
        >
          Growth is not a benefit.
          <br />
          <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-600">
            It is the expectation.
            <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-purple-600 to-fuchsia-600 opacity-60" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-7 max-w-xl text-base text-gray-700 dark:text-foreground/70"
        >
          We are building teams for people who want responsibility,
          continuous learning, and real-world impact — not just titles.
        </motion.p>
      </div>

      {/* ================= VALUES ================= */}
      <div className="relative max-w-5xl mx-auto px-6 py-16 space-y-12">
        {values.map((text, index) => (
          <motion.div
            key={text}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-6"
          >
            <span className="text-4xl font-bold text-gray-400 dark:text-white/10">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/20 to-transparent" />

            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-foreground">
              {text}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* ================= FORM ================= */}
      <div className="relative max-w-4xl mx-auto px-6 pb-20">
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-10 text-gray-900 dark:text-foreground"
        >
          Start the conversation
        </motion.h2>

        <form className="grid gap-7">
          <div className="grid md:grid-cols-2 gap-7">
            <input
              placeholder="Full name"
              className="bg-transparent border-b border-gray-400 dark:border-foreground/30 py-2.5 outline-none focus:border-purple-600 transition placeholder:text-gray-500 dark:placeholder:text-foreground/50"
            />
            <input
              placeholder="Phone"
              className="bg-transparent border-b border-gray-400 dark:border-foreground/30 py-2.5 outline-none focus:border-purple-600 transition placeholder:text-gray-500 dark:placeholder:text-foreground/50"
            />
          </div>

          <input
            placeholder="Email"
            className="bg-transparent border-b border-gray-400 dark:border-foreground/30 py-2.5 outline-none focus:border-purple-600 transition placeholder:text-gray-500 dark:placeholder:text-foreground/50"
          />

          <textarea
            rows="2"
            placeholder="Why do you want to grow with us?"
            className="bg-transparent border-b border-gray-400 dark:border-foreground/30 py-2.5 outline-none focus:border-purple-600 transition resize-none placeholder:text-gray-500 dark:placeholder:text-foreground/50"
          />

          <input
            type="file"
            className="text-sm text-gray-600 dark:text-foreground/60"
          />

          <button className="self-start mt-4 px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:opacity-90 transition">
            Submit →
          </button>
        </form>
      </div>
    </section>
  );
}
