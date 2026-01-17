import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [intent, setIntent] = useState(null);

  return (
    <section
      className="
        min-h-screen flex items-center justify-center px-6
        bg-gradient-to-b from-white via-white to-purple-50
        dark:from-black dark:via-black dark:to-[#120818]
        transition-colors duration-500
      "
    >
      <div className="max-w-4xl w-full text-center relative z-10">

        {/* INTRO */}
        {!intent && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1
              className="
                text-4xl md:text-6xl font-bold mb-6
                text-gray-900 dark:text-white
              "
            >
              Why are you here today?
            </h1>

            <p
              className="
                text-lg md:text-xl mb-14
                text-gray-600 dark:text-white/70
              "
            >
              Tell us what you’re looking for and we’ll guide you forward.
            </p>

            {/* INTENT CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <IntentCard
                title="Start a project"
                desc="Have an idea or problem to solve?"
                onClick={() => setIntent("project")}
              />
              <IntentCard
                title="Join our team"
                desc="Looking to grow with us?"
                onClick={() => setIntent("career")}
              />
              <IntentCard
                title="Just say hello"
                desc="Quick message or question"
                onClick={() => setIntent("hello")}
              />
            </div>
          </motion.div>
        )}

        {/* FORMS */}
        <AnimatePresence>
          {intent === "project" && <ProjectForm onBack={() => setIntent(null)} />}
          {intent === "career" && <CareerForm onBack={() => setIntent(null)} />}
          {intent === "hello" && <HelloForm onBack={() => setIntent(null)} />}
        </AnimatePresence>

      </div>
    </section>
  );
}

/* ---------------- INTENT CARD ---------------- */

function IntentCard({ title, desc, onClick }) {
  return (
    <motion.button
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="
        text-left p-8 rounded-3xl
        bg-white border border-gray-200
        shadow-sm

        dark:bg-white/5 dark:border-white/10

        hover:border-purple-500
        hover:shadow-[0_25px_60px_rgba(168,85,247,0.25)]
        transition-all duration-300
      "
    >
      <h3
        className="
          text-xl font-semibold mb-3
          text-gray-900 dark:text-white
        "
      >
        {title}
      </h3>
      <p
        className="
          text-gray-600 dark:text-white/65
        "
      >
        {desc}
      </p>
    </motion.button>
  );
}

/* ---------------- FORMS ---------------- */

function ProjectForm({ onBack }) {
  return (
    <FormWrapper title="Tell us about your project" onBack={onBack}>
      <input className="input mb-4" placeholder="Your name" />
      <input className="input mb-4" placeholder="Company name" />
      <textarea className="input mb-6" rows="4" placeholder="Project details" />
      <SubmitButton label="Request proposal" />
    </FormWrapper>
  );
}

function CareerForm({ onBack }) {
  return (
    <FormWrapper title="Apply to join our team" onBack={onBack}>
      <input className="input mb-4" placeholder="Your name" />
      <input className="input mb-4" placeholder="Role you're applying for" />
      <SubmitButton label="Apply now" />
    </FormWrapper>
  );
}

function HelloForm({ onBack }) {
  return (
    <FormWrapper title="Say hello 👋" onBack={onBack}>
      <input className="input mb-4" placeholder="Your name" />
      <textarea className="input mb-6" rows="4" placeholder="Your message" />
      <SubmitButton label="Send message" />
    </FormWrapper>
  );
}

/* ---------------- SHARED ---------------- */

function FormWrapper({ title, children, onBack }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="
        mt-16 max-w-xl mx-auto
        rounded-3xl p-10 text-left
        bg-white border border-gray-200 shadow-xl

        dark:bg-white/5 dark:border-white/10
        dark:backdrop-blur-xl
      "
    >
      <h2
        className="
          text-2xl font-semibold mb-6
          text-gray-900 dark:text-white
        "
      >
        {title}
      </h2>

      {children}

      <button
        onClick={onBack}
        className="
          mt-4 text-sm font-medium
          text-purple-600 hover:underline
          dark:text-purple-400
        "
      >
        ← Change intent
      </button>
    </motion.div>
  );
}

function SubmitButton({ label }) {
  return (
    <button
      className="
        w-full py-4 rounded-xl font-semibold
        text-white
        bg-gradient-to-r from-purple-600 to-fuchsia-600
        shadow-[0_12px_35px_rgba(168,85,247,0.45)]
        hover:opacity-90 transition
      "
    >
      {label}
    </button>
  );
}
