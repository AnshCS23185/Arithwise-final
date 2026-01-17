import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export default function ProjectCounter() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.45,
  });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ================= BACKGROUND ================= */}

      {/* LIGHT MODE GRADIENT */}
      <div
        className="
          absolute inset-0
          dark:opacity-0
          transition-opacity duration-500
          bg-[radial-gradient(1200px_700px_at_50%_45%,#f3e8ff_0%,#e9e5ff_35%,#fde7f3_70%,#ffffff_100%)]
        "
      />

      {/* DARK MODE GRADIENT */}
      <div
        className="
          absolute inset-0
          opacity-0 dark:opacity-100
          transition-opacity duration-500
          bg-[radial-gradient(1000px_600px_at_50%_40%,rgba(168,85,247,0.25),rgba(20,10,40,0.85),#050308_85%)]
        "
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 text-center px-6">

        {/* ================= NUMBER + PLUS ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="
            flex items-end justify-center gap-4
            text-[16rem] md:text-[22rem]
            font-semibold leading-none tracking-tight
            text-black/80 dark:text-white

            /* DARK FADE */
            dark:[mask-image:linear-gradient(to_bottom,rgba(255,255,255,1)_0%,rgba(255,255,255,0.75)_55%,rgba(255,255,255,0.35)_80%,rgba(255,255,255,0.15)_100%)]
            dark:[-webkit-mask-image:linear-gradient(to_bottom,rgba(255,255,255,1)_0%,rgba(255,255,255,0.75)_55%,rgba(255,255,255,0.35)_80%,rgba(255,255,255,0.15)_100%)]

            /* LIGHT FADE */
            [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0.75)_60%,rgba(0,0,0,0.45)_85%,rgba(0,0,0,0.25)_100%)]
            [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_0%,rgba(0,0,0,0.75)_60%,rgba(0,0,0,0.45)_85%,rgba(0,0,0,0.25)_100%)]

            drop-shadow-[0_20px_60px_rgba(0,0,0,0.12)]
            dark:drop-shadow-none
          "
        >
          {/* NUMBER */}
          {inView && <CountUp end={9} duration={3.5} />}

          {/* PLUS */}
          <span
            className="
              text-[10rem] md:text-[14rem]
              font-medium
              opacity-70
              translate-y-[-0.1em]
            "
          >
            +
          </span>
        </motion.div>

        {/* ================= TITLE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.35 }}
          className="
            -mt-24
            text-[4.5rem] md:text-[6rem]
            font-medium
            text-black/85 dark:text-white
          "
        >
          Projects
        </motion.div>

        {/* ================= SUBTEXT ================= */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.55 }}
          className="
            mt-6
            text-xl md:text-2xl
            text-black/90 dark:text-white/80
            max-w-2xl mx-auto
          "
        >
          Actively shaping ideas into real-world impact
        </motion.p>

      </div>
    </section>
  );
}
