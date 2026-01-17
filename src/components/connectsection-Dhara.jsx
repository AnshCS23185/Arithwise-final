import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative min-h-screen bg-background dark:bg-black text-foreground dark:text-white overflow-hidden px-6 py-32">

      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-fuchsia-400/20 blur-[200px]" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-purple-400/20 blur-[200px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              inline-block mb-6 px-6 py-2 rounded-full text-sm font-medium
              bg-white/70 dark:bg-white/10
              border border-black/10 dark:border-white/10
              backdrop-blur
            "
          >
            Let’s Talk
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-semibold leading-tight"
          >
            Start a conversation
            <br />
            <span className="bg-gradient-to-r from-fuchsia-500 to-purple-600 bg-clip-text text-transparent">
              that moves ideas forward
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-foreground/60 dark:text-white/60 max-w-2xl mx-auto"
          >
            We collaborate with ambitious teams to design, build, and scale
            digital products that matter.
          </motion.p>
        </div>

        {/* Info cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-28">
          {[
            { title: "Office", text: "Somalwada, Nagpur – 440025" },
            { title: "Email", text: "info@arithwise.com\ncareer@arithwise.com" },
            { title: "Phone", text: "+91 9987020905\n+91 9987000905" },
          ].map((item, i) => (
            <div
              key={i}
              className="
                p-8 rounded-2xl
                bg-white/80 dark:bg-white/5
                border border-black/10 dark:border-white/10
                backdrop-blur-md
              "
            >
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-foreground/60 dark:text-white/60 whitespace-pre-line">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="
            max-w-3xl mx-auto p-10 rounded-3xl
            bg-gradient-to-br
            from-white/90 via-fuchsia-50 to-purple-100
            dark:from-white/5 dark:via-white/5 dark:to-white/5
            border border-black/10 dark:border-white/10
            backdrop-blur-xl
            shadow-[0_40px_140px_rgba(168,85,247,0.25)]
          "
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              className="
                w-full px-5 py-4 rounded-xl
                bg-white/80 dark:bg-white/10
                text-foreground dark:text-white
                placeholder:text-foreground/40 dark:placeholder:text-white/40
                border border-black/10 dark:border-white/10
                backdrop-blur-md
                focus:outline-none
                focus:ring-2 focus:ring-fuchsia-400/50
                focus:border-fuchsia-400
                transition
              "
              placeholder="Your name"
            />

            <input
              className="
                w-full px-5 py-4 rounded-xl
                bg-white/80 dark:bg-white/10
                text-foreground dark:text-white
                placeholder:text-foreground/40 dark:placeholder:text-white/40
                border border-black/10 dark:border-white/10
                backdrop-blur-md
                focus:outline-none
                focus:ring-2 focus:ring-fuchsia-400/50
                focus:border-fuchsia-400
                transition
              "
              placeholder="Your email"
            />
          </div>

          <textarea
            rows="4"
            className="
              w-full px-5 py-4 rounded-xl mb-8
              bg-white/80 dark:bg-white/10
              text-foreground dark:text-white
              placeholder:text-foreground/40 dark:placeholder:text-white/40
              border border-black/10 dark:border-white/10
              backdrop-blur-md
              focus:outline-none
              focus:ring-2 focus:ring-fuchsia-400/50
              focus:border-fuchsia-400
              transition
            "
            placeholder="What are you thinking of building?"
          />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="
              w-full py-4 rounded-xl
              font-semibold text-white
              bg-gradient-to-r from-fuchsia-600 to-purple-700
              shadow-xl shadow-fuchsia-500/30
              hover:shadow-purple-600/40
              transition
            "
          >
            Start the conversation
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}