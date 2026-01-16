import { motion } from "framer-motion";

export default function Opportunities() {
  return (
    <section className="min-h-screen bg-black text-white overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-500/20 blur-[220px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/10 blur-[200px]" />
      </div>

      {/* Hero Narrative Layout */}
      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-purple-400 uppercase tracking-widest mb-6"
        >
          Careers at Arithwise
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl font-bold leading-tight max-w-4xl"
        >
          Growth is not a benefit.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">
            It is the expectation.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-300 mt-10 max-w-2xl text-lg"
        >
          We are building teams for people who want responsibility, learning,
          and real-world impact — not just titles or roles.
        </motion.p>
      </div>

      {/* Flowing Values – No boxes */}
      <div className="relative max-w-6xl mx-auto px-6 py-24 space-y-16">
        {["Data before opinions", "Create, don’t copy", "Learn continuously", "Own outcomes", "Earn trust", "Protect balance"].map(
          (text, index) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="flex items-center gap-6"
            >
              <span className="text-5xl font-bold text-white/10">0{index + 1}</span>
              <h3 className="text-2xl md:text-3xl font-semibold">
                {text}
              </h3>
            </motion.div>
          )
        )}
      </div>

      {/* Application – Inline, minimal */}
      <div className="relative max-w-4xl mx-auto px-6 pb-32">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12"
        >
          Start the conversation
        </motion.h2>

        <form className="grid gap-8">
          <div className="grid md:grid-cols-2 gap-8">
            <input
              placeholder="Full name"
              className="bg-transparent border-b border-white/20 py-3 outline-none focus:border-purple-400 transition"
            />
            <input
              placeholder="Phone"
              className="bg-transparent border-b border-white/20 py-3 outline-none focus:border-purple-400 transition"
            />
          </div>

          <input
            placeholder="Email"
            className="bg-transparent border-b border-white/20 py-3 outline-none focus:border-purple-400 transition"
          />

          <textarea
            rows="3"
            placeholder="Why do you want to grow with us?"
            className="bg-transparent border-b border-white/20 py-3 outline-none focus:border-purple-400 transition resize-none"
          />

          <input type="file" className="text-sm text-gray-400" />

          <button className="self-start mt-6 px-8 py-3 text-black font-semibold rounded-full bg-gradient-to-r from-purple-500 to-white">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}