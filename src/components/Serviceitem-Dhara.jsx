import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ServiceItem({
  index,
  label,
  title,
  description,
  features,
  cta,
  setActive,
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  // Sync with video
  useEffect(() => {
    if (isInView) {
      setActive(index);
    }
  }, [isInView, index, setActive]);

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 80,
        scale: 0.96,
        filter: "blur(6px)",
      }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }
          : {}
      }
      transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1], // premium float curve
      }}
      className="max-w-2xl"
    >
      {/* LABEL */}
      <span className="text-xs tracking-widest uppercase text-fuchsia-400/80">
        {label}
      </span>

      {/* TITLE */}
      <h3 className="mt-4 text-5xl font-extrabold text-white">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="mt-4 text-white/70 max-w-xl leading-relaxed">
        {description}
      </p>

      {/* FEATURES */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
        {features.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-3 text-white/80 text-sm"
          >
            <span className="mt-1 text-fuchsia-500">✓</span>
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button
        className="
          mt-10 inline-flex items-center gap-3
          px-7 py-3 rounded-full
          bg-gradient-to-r from-fuchsia-600 to-purple-700
          text-white text-sm font-medium
          hover:opacity-90 transition-all
        "
      >
        {cta}
        <span className="text-lg">›</span>
      </button>
    </motion.div>
  );
}
