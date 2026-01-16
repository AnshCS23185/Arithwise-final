import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function ProjectCounter() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section
      ref={ref}
      className="relative bg-black text-white py-32 overflow-hidden"
    >
      {/* subtle top divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />

      {/* ambient glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 w-[700px] h-[700px] bg-purple-500/10 blur-[220px]" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold"
        >
          Projects
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-lg text-white/65 max-w-2xl mx-auto"
        >
          Actively building, scaling, and delivering high-impact solutions
          for modern businesses.
        </motion.p>

        {/* Counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16"
        >
          <div className="text-[5rem] md:text-[6rem] font-semibold leading-none">
            {inView && <CountUp end={9} duration={4.5} />}
            <span className="text-purple-400">+</span>
          </div>

          <p className="mt-4 text-sm uppercase tracking-widest text-white/60">
            Active Projects
          </p>
        </motion.div>
      </div>
    </section>
  );
}
