import { motion, useScroll, useTransform } from "framer-motion";
import { useState,useRef,useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import { Eye, Target } from "lucide-react";

export default function About() {
  const [activeTab, setActiveTab] = useState("vision");
const intervalRef = useRef(null);

useEffect(() => {
  intervalRef.current = setInterval(() => {
    setActiveTab((prev) => (prev === "vision" ? "mission" : "vision"));
  }, 4000);

  return () => clearInterval(intervalRef.current);
}, []);

const handleTabChange = (tab) => {
  clearInterval(intervalRef.current); // stop auto on manual click
  setActiveTab(tab);

  // restart auto after interaction
  intervalRef.current = setInterval(() => {
    setActiveTab((prev) => (prev === "vision" ? "mission" : "vision"));
  }, 4000);
};

  // Hooks MUST be inside component
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <main
  className="
    relative
    text-black dark:text-white
    overflow-hidden
    bg-gradient-to-b
    from-white
    via-purple-50
    to-white
    dark:from-black dark:via-[#120816] dark:to-black
  "
>


      {/* ================= SCROLL PROGRESS BAR ================= */}
      {/* <motion.div
        style={{ scaleX }}
        className="
          fixed top-0 left-0 right-0 h-[2px]
          bg-gradient-to-r from-purple-600 via-fuchsia-500 to-purple-600
          origin-left z-[999]
        "
      /> */}

      {/* ================= HERO ================= */}
<section
  className="
    relative
    min-h-screen
    flex items-center justify-center
    overflow-hidden
    bg-white dark:bg-black
    px-6 md:px-12 lg:px-20
  "
>

  {/* ===== GRID BACKGROUND ===== */}
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.16] dark:opacity-[0.12]"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="fullGrid"
        width="64"
        height="64"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M 64 0 L 0 0 0 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </pattern>
    </defs>
    <rect
      width="100%"
      height="100%"
      fill="url(#fullGrid)"
      className="text-black/20 dark:text-white/20"
    />
  </svg>
<div className="
  absolute inset-0
  bg-gradient-to-br
  from-purple-100/60
  via-transparent
  to-transparent
  dark:from-black
" />
{/* Grid fade-out mask */}
<div className="
  absolute bottom-0 left-0 right-0 h-48
  bg-gradient-to-b
  from-transparent
  via-white
  to-white
  dark:via-black dark:to-black
  pointer-events-none
" />


  {/* ===== MAGENTA ENERGY BLOOM ===== */}
  <div
    className="
      absolute inset-0
      bg-[radial-gradient(circle_at_60%_40%,rgba(168,85,247,0.22),transparent_55%)]
      dark:bg-[radial-gradient(circle_at_60%_40%,rgba(168,85,247,0.32),transparent_55%)]
    "
  />

  {/* ===== CONTENT ===== */}
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, ease: "easeOut" }}
    className="
      relative z-10
      w-full
      max-w-6xl
      text-center
      py-24
    "
  >
    

    {/* MAIN HEADLINE */}
    <h1
      className="
      text-[clamp(3.5rem,8.5vw,7.5rem)]
leading-[0.95]
tracking-[-0.02em]

        // text-[clamp(3rem,7.5vw,6.5rem)]
        font-semibold
        // leading-[1.1]
        // tracking-tight
        text-black dark:text-white
      "
    >
      Building{" "}
      <span className="relative inline-block font-semibold">
        <span
          className="
            text-transparent bg-clip-text
            bg-gradient-to-r from-purple-600 to-fuchsia-500
          "
        >
          Intelligent
        </span>

        {/* underline accent */}
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="
            absolute left-0 -bottom-2 h-[4px]
            bg-gradient-to-r from-purple-600 to-fuchsia-500
          "
        />
      </span>
      <br />
      <span className="font-medium">Digital Foundations</span>
    </h1>

    {/* SUBTEXT */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7 }}
      className="
        mt-10
        text-lg md:text-xl
        text-black/70 dark:text-white/70
        max-w-3xl mx-auto
      "
    >
      We turn complex systems into clarity, confidence, and outcomes.
    </motion.p>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9 }}
      className="
        mt-4
        text-sm md:text-base
        uppercase tracking-widest
        text-black/50 dark:text-white/50
      "
    >
      Strategy · Data · Engineering · Aligned
    </motion.p>

  </motion.div>

</section>



      {/* ================= IDENTITY / POSITIONING ================= */}
<section className="relative pt-24 pb-6 px-8 overflow-hidden bg-white dark:bg-black">



  {/* Engineered background layers */}
  <div
    className="
      absolute inset-0
      bg-[radial-gradient(circle_at_20%_20%,rgba(236,72,153,0.18),transparent_45%)]
      dark:bg-[radial-gradient(circle_at_20%_20%,rgba(236,72,153,0.25),transparent_45%)]
    "
  />
  <div
    className="
      absolute inset-0
      bg-[radial-gradient(circle_at_80%_60%,rgba(168,85,247,0.18),transparent_45%)]
      dark:bg-[radial-gradient(circle_at_80%_60%,rgba(168,85,247,0.25),transparent_45%)]
    "
  />

  <div className="relative max-w-7xl mx-auto">

    {/* Editorial Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight max-w-4xl text-black dark:text-white"
    >
      For the{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-600">
        Bold
      </span>
      .
      <br />
      For the{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-600">
        Future
      </span>
      .
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="mt-8 text-xl md:text-2xl text-black/70 dark:text-white/70 max-w-3xl"
    >
      We help ambitious organizations transform complexity into momentum —
      aligning strategy, data, and engineering to deliver measurable outcomes.
    </motion.p>

    {/* Architectural Capability Bands */}
{/* ================= CONTINUOUS CAPABILITY MANIFESTO ================= */}
<section className="relative py-12 md:py-14 overflow-hidden">

  <div className="max-w-7xl mx-auto px-8">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-16 items-start">


      {/* STEP 1 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <p className="text-xs uppercase tracking-widest text-black/40 dark:text-white/40">
          Cause
        </p>

        <h3 className="mt-3 text-3xl font-semibold">
          Strategic{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-purple-600">
            Clarity
          </span>
        </h3>

        <p className="mt-3 text-lg text-black/70 dark:text-white/70">
          We help leaders cut through noise and understand what truly matters.
        </p>

        {/* Connector */}
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="hidden md:block absolute top-[30px] right-[-48px] w-12 h-[2px] bg-gradient-to-r from-fuchsia-600 to-purple-600 origin-left"
        />
      </motion.div>

      {/* STEP 2 – PRIMARY FOCUS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="relative scale-[1.02]"
      >
        <p className="text-xs uppercase tracking-widest text-purple-600">
          System
        </p>

        <h3 className="mt-3 text-4xl font-semibold leading-tight">
          Intelligent{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-600">
            Foundations
          </span>
        </h3>

        <p className="mt-4 text-lg text-black/75 dark:text-white/75">
          That clarity becomes systems — platforms, data, and architecture.
        </p>

        {/* Connector */}
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="hidden md:block absolute top-[34px] right-[-48px] w-12 h-[2px] bg-gradient-to-r from-purple-600 to-fuchsia-600 origin-left"
        />
      </motion.div>

      {/* STEP 3 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="text-xs uppercase tracking-widest text-black/40 dark:text-white/40">
          Outcome
        </p>

        <h3 className="mt-3 text-3xl font-semibold">
          Measurable{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-600">
            Growth
          </span>
        </h3>

        <p className="mt-3 text-lg text-black/70 dark:text-white/70">
          Better decisions, operational efficiency, and long-term impact.
        </p>
      </motion.div>

    </div>

  </div>
</section>



  </div>
  {/* ===== LIGHT → DARK TRANSITION BRIDGE ===== */}


</section>



{/* <div className="h-8 bg-gradient-to-b from-transparent to-purple-50 dark:to-black" /> */}

{/* ================= VISION & MISSION ================= */}
{/* ================= VISION / MISSION TOGGLE (ENHANCED) ================= */}
{/* ================= VISION & MISSION ================= */}
{/* ================= VISION / MISSION – IMMERSIVE ================= */}
{/* ================= VISION / MISSION – SEAMLESS IMMERSIVE ================= */}

{/* ================= VISION & MISSION — GLORY SECTION ================= */}
{/* ================= VISION & MISSION — COMPACT GLORY ================= */}
{/* ================= VISION → MISSION (SCROLL MORPH) ================= */}
<section className="relative py-16 overflow-hidden bg-white dark:bg-black">

  {/* Soft background glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-purple-600/20 blur-[160px]" />
  </div>

  <div className="relative max-w-5xl mx-auto px-8">

    {/* Section label */}
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center uppercase tracking-[0.3em] text-xs text-black/50 dark:text-white/50 "
    >
      Purpose & Direction
    </motion.p>

    {/* SINGLE HEADING (only once) */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-3 text-center text-[clamp(2.2rem,5vw,4rem)] font-semibold leading-tight"
    >
      Our{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-500">
        Vision
      </span>{" "}
      &{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-600">
        Mission
      </span>
    </motion.h2>

    {/* BOXES */}
    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* VISION BOX */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="
          p-8 rounded-3xl
          bg-gradient-to-br from-purple-600 to-fuchsia-600
          text-white
          shadow-[0_24px_70px_rgba(168,85,247,0.45)]
        "
      >
        <div className="mb-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <Eye className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-semibold">Our Vision</h3>
        </div>

        <p className="text-base leading-relaxed text-white/90">
          To build a future where intelligent systems empower people,
          decisions are driven by clarity, and technology becomes a
          force for meaningful and sustainable progress.
        </p>
      </motion.div>

      {/* MISSION BOX */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="
          p-8 rounded-3xl
          bg-black text-white
          border border-white/10
          shadow-[0_24px_70px_rgba(0,0,0,0.45)]
        "
      >
        <div className="mb-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center">
            <Target className="w-5 h-5 text-purple-400" />
          </div>
          <h3 className="text-xl font-semibold">Our Mission</h3>
        </div>

        <p className="text-base leading-relaxed text-white/80">
          Our mission is to design intelligent foundations by aligning
          strategy, data, and engineering — enabling organizations to
          move faster, think clearer, and grow with confidence.
        </p>
      </motion.div>

    </div>

  </div>
</section>
{/* <div className="
  h-24
  bg-gradient-to-b
  from-purple-50
  via-white
  to-transparent
  dark:from-black dark:via-black
" /> */}


{/* ================= FROM THE DESK ================= */}
{/* ================= VOICE FROM THE DESK (UNIQUE) ================= */}
<section className="relative py-28 overflow-hidden bg-white dark:bg-black">

  {/* Ambient background glow (very subtle) */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-1/2 left-[16%] -translate-y-1/2 w-[480px] h-[480px] bg-purple-600/15 blur-[180px] rounded-full" />
  </div>

  <div className="relative max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

    {/* ================= LEFT : EDITORIAL TEXT ================= */}
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <p className="text-xs uppercase tracking-[0.35em] text-purple-600 mb-6">
        Founder’s Desk
      </p>

      <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
        A note on building with <br />
        <span className="text-purple-600 font-medium">
          clarity
        </span>
      </h2>

      {/* subtle divider */}
      <div className="w-14 h-[2px] bg-purple-500 mt-6" />

      {/* editorial body */}
      <div className="mt-8 pl-6 space-y-6 relative">
        <span className="absolute left-0 top-2 h-20 w-[1px] bg-purple-300/60" />

        <p className="text-[1.02rem] leading-[1.75] text-black/75 dark:text-white/75">
          Arithwise was founded with a clear intent — to simplify how
          technology supports decision-making, scale, and long-term growth.
        </p>

        <p className="text-[1.02rem] leading-[1.75] text-black/75 dark:text-white/75">
          As organizations evolve, systems often become complex,
          fragmented, and difficult to manage. What begins as innovation
          gradually turns into overhead.
        </p>

        <p className="text-[1.02rem] leading-[1.75] text-black/75 dark:text-white/75">
          We focus on building intelligent foundations — systems that
          remain clear, resilient, and aligned with real business goals,
          even as complexity increases.
        </p>
      </div>

      <div className="mt-10">
        <p className="font-medium">— Mr. Vishvesh Algeri</p>
        <p className="text-sm text-black/50 dark:text-white/50">
          Founder & CEO
        </p>
      </div>
    </motion.div>

    {/* ================= RIGHT : EDITORIAL QUOTE CARD ================= */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        relative
        h-[360px]
        rounded-3xl
        overflow-hidden
        shadow-[0_40px_120px_rgba(0,0,0,0.25)]
      "
    >
      {/* background image */}
      <img
        src="/desk.jpg"
        alt="Founder perspective"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          scale-105
          blur-[1.5px]
        "
      />

      {/* overlay */}
      <div className="
        absolute inset-0
        bg-gradient-to-br
        from-purple-900/60
        via-black/55
        to-black/65
      " />

      {/* content */}
      <div className="relative z-10 p-10 h-full flex flex-col justify-center text-white">

        <p className="text-xs uppercase tracking-[0.3em] text-white/70 mb-4">
          Framing the Perspective
        </p>

        <p className="text-[1.35rem] md:text-[1.5rem] font-medium leading-[1.6] max-w-[22rem]">
          Clarity is not simplicity.
          <br />
          It is choosing what deserves
          <br />
          attention — and designing
          <br />
          everything else around it.
        </p>

        <div className="mt-8 h-[2px] w-14 bg-white/40" />

        <p className="mt-4 text-sm text-white/70">
          Guiding how we build at Arithwise
        </p>

      </div>
    </motion.div>

  </div>
</section>


    </main>
  );
}
