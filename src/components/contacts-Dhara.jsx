import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [intent, setIntent] = useState(null);

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-3xl w-full text-center">

        {/* INTENT SELECTION */}
        {!intent && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-semibold mb-12">
              Why are you here today?
            </h1>

            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <IntentButton label="Start a project" onClick={() => setIntent("project")} />
              <IntentButton label="Join our team" onClick={() => setIntent("career")} />
              <IntentButton label="Just say hello" onClick={() => setIntent("hello")} />
            </div>
          </motion.div>
        )}

        {/* INTENT FORMS */}
        <AnimatePresence>
          {intent === "project" && <ProjectForm onBack={() => setIntent(null)} />}
          {intent === "career" && <CareerForm onBack={() => setIntent(null)} />}
          {intent === "hello" && <HelloForm onBack={() => setIntent(null)} />}
        </AnimatePresence>

      </div>
    </section>
  );
}

/* ---------- BUTTON ---------- */
function IntentButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-8 py-6 rounded-2xl bg-white/5 border border-white/10
      hover:border-purple-500 hover:bg-white/10 transition text-lg"
    >
      {label}
    </button>
  );
}

/* ---------- FORMS ---------- */

function ProjectForm({ onBack }) {
  return (
    <FormWrapper title="Tell us about your project" onBack={onBack}>
      <input className="input mb-4" placeholder="Your name" />
      <input className="input mb-4" placeholder="Company name" />
      <select className="input mb-4">
        <option>Estimated budget</option>
        <option>₹50k – ₹1L</option>
        <option>₹1L – ₹5L</option>
        <option>₹5L+</option>
      </select>
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
      <input className="input mb-4" placeholder="Portfolio / GitHub link" />
      <textarea className="input mb-6" rows="4" placeholder="Short introduction" />
      <SubmitButton label="Apply now" />
    </FormWrapper>
  );
}

function HelloForm({ onBack }) {
  return (
    <FormWrapper title="Say hello 👋" onBack={onBack}>
      <input className="input mb-4" placeholder="Your name" />
      <textarea className="input mb-6" rows="4" placeholder="Your message" />
      <SubmitButton label="Send hello" />
    </FormWrapper>
  );
}

/* ---------- SHARED ---------- */

function FormWrapper({ title, children, onBack }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="mt-16 bg-white/5 border border-white/10
      backdrop-blur-xl rounded-3xl p-8 text-left"
    >
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      {children}
      <button
        onClick={onBack}
        className="mt-4 text-sm text-purple-400"
      >
        ← Change intent
      </button>
    </motion.div>
  );
}

function SubmitButton({ label }) {
  return (
    <button
      className="w-full py-4 rounded-xl font-medium text-black
      bg-gradient-to-r from-purple-500 to-white"
    >
      {label}
    </button>
  );
}
