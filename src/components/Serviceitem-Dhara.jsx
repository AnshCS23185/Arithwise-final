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
  const isInView = useInView(ref, { amount: 0.45 });

  useEffect(() => {
    if (isInView) setActive(index);
  }, [isInView, index, setActive]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-3xl"
    >
      {/* LABEL */}
      <span className="block text-sm tracking-[0.3em] uppercase font-semibold text-fuchsia-500">
        {label}
      </span>

      {/* TITLE */}
      <h3 className="relative mt-3 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
        <span className="relative z-10">{title}</span>
        <span
          className="
            absolute left-0 bottom-1 w-full h-3
            bg-gradient-to-r
            from-fuchsia-300/50
            via-purple-300/40
            to-transparent
            dark:from-fuchsia-600/30
            dark:via-purple-600/30
            rounded-full blur-sm
          "
        />
      </h3>

      {/* DESCRIPTION */}
      <p className="mt-4 text-lg md:text-xl leading-relaxed text-foreground/70 max-w-2xl">
        {description}
      </p>

      {/* FEATURES */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
        {features.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-3 text-base text-foreground/80"
          >
            <span className="mt-1 text-fuchsia-500 text-lg">✓</span>
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <button
        className="
          mt-8 inline-flex items-center gap-3
          px-7 py-3.5
          text-sm font-semibold
          text-white
          rounded-full
          bg-gradient-to-r from-fuchsia-600 to-purple-700
          hover:opacity-90 transition
        "
      >
        {cta}
        <span className="text-lg">›</span>
      </button>
    </motion.div>
  );
}
