import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden px-6 py-28">

      {/* Ambient gradient layers */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/20 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[160px]" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">

        {/* Header */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 px-6 py-2 rounded-full text-sm
          bg-white/10 backdrop-blur border border-white/10"
        >
          Let’s Talk
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold leading-tight mb-6"
        >
          Start a conversation<br />
          <span className="bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
            that moves ideas forward
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/60 max-w-2xl mx-auto mb-16"
        >
          We collaborate with ambitious teams to design, build, and scale
          digital products that matter.
        </motion.p>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-6 mb-20"
        >
          {[
            {
              title: "Office",
              text: "Somalwada, Nagpur – 440025"
            },
            {
              title: "Email",
              text: "info@arithwise.com\ncareer@arithwise.com"
            },
            {
              title: "Phone",
              text: "+91 9987020905\n+91 9987000905"
            }
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur
              border border-white/10 text-left hover:bg-white/10 transition"
            >
              <h4 className="text-white font-medium mb-2">{item.title}</h4>
              <p className="text-white/60 whitespace-pre-line text-sm">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Conversation Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto p-8 md:p-10 rounded-3xl
          bg-white/5 backdrop-blur-xl border border-white/10"
        >
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <input className="input" placeholder="Your name" />
            <input className="input" placeholder="Your email" />
          </div>

          <textarea
            rows="4"
            className="input mb-6"
            placeholder="What are you thinking of building?"
          />

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="w-full py-4 rounded-xl font-medium text-black
            bg-gradient-to-r from-purple-500 to-white
            shadow-xl shadow-purple-500/30"
          >
            Start the conversation
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
