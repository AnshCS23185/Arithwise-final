import { motion, useScroll, useTransform } from "framer-motion";
import { useState,useRef,useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Eye, Target } from "lucide-react";
import { Mic } from "lucide-react";
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
  // const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
const [active, setActive] = useState(null);
  const sectionRef = useRef(null);
  const [mouse, setMouse] = useState({ x: -1000, y: -1000 });

  const COLS = 30;   // small tiles
  const ROWS = 18;
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
      ref={sectionRef}
      onMouseMove={(e) => {
        const rect = sectionRef.current.getBoundingClientRect();
        setMouse({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      className="
        relative min-h-screen overflow-hidden
        flex items-center justify-center
        bg-white dark:bg-black
      "
    >
      {/* ===== TILE GRID ===== */}
      <div
        className="absolute inset-0 grid pointer-events-none"
        style={{
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gridTemplateRows: `repeat(${ROWS}, 1fr)`,
        }}
      >
        {Array.from({ length: COLS * ROWS }).map((_, i) => {
          return (
            <div
              key={i}
              className="border border-black/10 dark:border-white/10"
              style={{
                background: (() => {
                  if (!sectionRef.current) return "transparent";

                  const rect = sectionRef.current.getBoundingClientRect();
                  const col = i % COLS;
                  const row = Math.floor(i / COLS);

                  const tileW = rect.width / COLS;
                  const tileH = rect.height / ROWS;

                  const cx = col * tileW + tileW / 2;
                  const cy = row * tileH + tileH / 2;

                  const dx = mouse.x - cx;
                  const dy = mouse.y - cy;
                  const dist = Math.sqrt(dx * dx + dy * dy);

                  /* VERY TIGHT radius */
                  const radius = 70;
                  const strength = Math.max(0, 1 - dist / radius);

                  if (strength <= 0) return "transparent";

                  /* Controlled color palette */
                  const palette = [
                    "168,85,247",   // purple
                    "236,72,153",   // magenta
                    "0,0,0",        // black
                    "255,255,255",  // white
                  ];

                  const color = palette[i % palette.length];

                  return `rgba(${color}, ${strength * 0.75})`;
                })(),
                transition: "background 120ms ease-out",
              }}
            />
          );
        })}
      </div>

      {/* ===== CONTENT ===== */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="
          relative z-10
          w-full max-w-6xl
          text-center py-24 px-6
        "
      >
        <h1
          className="
            text-[clamp(3.5rem,8.5vw,7.5rem)]
            leading-[0.95]
            tracking-[-0.02em]
            font-semibold
            text-black dark:text-white
          "
        >
          Building{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-500">
            Intelligent
          </span>
          <br />
          <span className="font-medium">Digital Foundations</span>
        </h1>

        <p className="mt-10 text-lg md:text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto">
          We turn complex systems into clarity, confidence, and outcomes.
        </p>

        <p className="mt-4 text-sm md:text-base uppercase tracking-widest text-black/50 dark:text-white/50">
          Strategy · Data · Engineering · Aligned
        </p>
      </motion.div>

      {/* ===== BOTTOM FADE (SECTION BLEND) ===== */}
      <div
        className="
          absolute bottom-0 left-0 right-0 h-56
          bg-gradient-to-b
          from-transparent
          via-white
          to-white
          dark:via-black dark:to-black
          pointer-events-none
        "
      />
      {/* ===== HERO → NEXT SECTION BLEND ===== */}
<div className="pointer-events-none absolute bottom-0 left-0 right-0">

  {/* Grid dissolving fade */}
  <div
    className="
      h-40
      bg-gradient-to-b
      from-transparent
      via-white/60
      to-white
      dark:via-black/60 dark:to-black
    "
  />

  {/* Soft brand color transition */}
  <div
    className="
      h-32
      bg-gradient-to-b
      from-white
      via-purple-50
      to-purple-100
      dark:from-black
      dark:via-[#120916]
      dark:to-[#0b0610]
    "
  />
</div>

    </section>
  

      {/* ================= IDENTITY / POSITIONING ================= */}
<section className="relative pt-16 pb-8 px-8 overflow-hidden bg-white dark:bg-black">




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
<section className="relative py-10 overflow-hidden">


  <div className="max-w-7xl mx-auto px-8">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-x-12
 items-start">


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
 
<section className="relative py-20 overflow-hidden bg-white dark:bg-black">


  {/* Soft ambient background */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-1/3 left-1/4 w-[420px] h-[420px] bg-purple-500/15 blur-[160px]" />
    <div className="absolute bottom-1/4 right-1/4 w-[380px] h-[380px] bg-fuchsia-500/15 blur-[160px]" />
  </div>

  <div className="relative max-w-6xl mx-auto px-8">

    {/* Heading */}
    <h2 className="text-center text-4xl md:text-5xl font-semibold mb-12">
      Our{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-500">
        Vision
      </span>{" "}
      &{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-600">
        Mission
      </span>
    </h2>

    {/* GRID */}
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-12"
      onMouseLeave={() => setActive(null)}
    >

      {/* ================= LEFT : VISION ================= */}
      <AnimatePresence mode="wait">
        {active === "vision" ? (
          <motion.div
            key="vision-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.45 }}
            className="
              h-full p-14 rounded-3xl
              bg-gradient-to-br from-purple-600 to-fuchsia-600
              text-white flex flex-col justify-center
              shadow-xl shadow-purple-600/20
            "
          >
            <Eye className="w-12 h-12 mb-8 text-white/90" />
            <p className="text-2xl md:text-[1.6rem] leading-relaxed font-medium max-w-[92%]">
              We imagine a future where intelligent systems empower people,
              clarity guides every decision, and technology becomes a force
              for meaningful and sustainable progress.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="vision-title"
            onMouseEnter={() => setActive("vision")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="
              h-full p-14 rounded-3xl
              bg-gradient-to-br from-purple-600 to-fuchsia-600
              text-white flex flex-col items-center justify-center
              cursor-pointer
              hover:scale-[1.02]
              transition-transform
            "
          >
            <Eye className="w-12 h-12 mb-6" />
            <h3 className="text-3xl font-semibold">Our Vision</h3>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= RIGHT : MISSION ================= */}
      <AnimatePresence mode="wait">
        {active === "mission" ? (
          <motion.div
            key="mission-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.45 }}
            className="
              h-full p-14 rounded-3xl
              bg-neutral-900 text-white
              border border-white/10
              flex flex-col justify-center
              shadow-xl shadow-black/30
            "
          >
            <Target className="w-12 h-12 mb-8 text-purple-400" />
            <p className="text-2xl md:text-[1.6rem] leading-relaxed font-medium text-white/85 max-w-[92%]">
              We build intelligent foundations by aligning strategy, data,
              and engineering—helping organizations move faster, think
              clearer, and grow with confidence.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="mission-title"
            onMouseEnter={() => setActive("mission")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="
              h-full p-14 rounded-3xl
              bg-neutral-900 text-white
              border border-white/10
              flex flex-col items-center justify-center
              cursor-pointer
              hover:scale-[1.02]
              transition-transform
            "
          >
            <Target className="w-12 h-12 mb-6 text-purple-400" />
            <h3 className="text-3xl font-semibold">Our Mission</h3>
          </motion.div>
        )}
      </AnimatePresence>

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
{/* ================= FROM THE DESK — CEO VOICE ================= */}
{/* ================= FROM THE DESK — VOICE FLOW ================= */}
<section className="relative py-24 overflow-hidden bg-white dark:bg-black">


  {/* Ambient gradient field */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[1200px] h-[1200px]
      bg-[radial-gradient(circle,rgba(168,85,247,0.18),transparent_60%)]" />
    <div className="absolute bottom-[-25%] right-[10%] w-[900px] h-[900px]
      bg-[radial-gradient(circle,rgba(236,72,153,0.16),transparent_60%)]" />
  </div>

  <div className="relative max-w-6xl mx-auto px-8">

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="mb-16"
    >
      <p className="text-xs uppercase tracking-[0.5em] text-purple-600 mb-10">
        From the Desk
      </p>

      <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-[-0.025em] max-w-4xl">
        Clarity is not simplicity.
        <br />
        It is choosing what deserves{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-500">
          attention
        </span>.
      </h2>
    </motion.div>

    {/* ===== VOICE LINE (LONGER, CALMER) ===== */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
     className="flex items-center gap-6 mb-16"

    >

      {/* Mic */}
      <motion.div
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-purple-600"
      >
        <Mic size={26} />
      </motion.div>

      {/* Extended waveform */}
      <div className="flex items-end gap-[7px] h-8">
        {Array.from({ length: 28 }).map((_, i) => (
          <motion.span
            key={i}
            className="w-[3px] rounded-full bg-gradient-to-t from-purple-600 via-fuchsia-500 to-purple-400"
            animate={{
              height: ["6px", "32px", "12px"],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.12,
            }}
          />
        ))}
      </div>

    </motion.div>

    {/* ===== TEXT FLOW (NO BOX) ===== */}
    <div className="relative max-w-4xl">

      {/* Vertical gradient guide */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px]
        bg-gradient-to-b from-purple-600 via-fuchsia-500 to-transparent" />

      <div className="pl-10 space-y-10">

        <p className="text-xl md:text-2xl leading-[1.8] text-black/85 dark:text-white/85">
          Arithwise was founded with a clear intent — to simplify how
          technology supports decision-making, scale, and long-term growth.
        </p>

        <p className="text-xl md:text-2xl leading-[1.8] text-black/80 dark:text-white/80">
          As organizations evolve, systems often become complex,
          fragmented, and difficult to manage. What begins as innovation
          gradually turns into overhead.
        </p>

        <p className="text-xl md:text-2xl leading-[1.8] text-black/80 dark:text-white/80">
          We focus on building intelligent foundations — systems that
          remain clear, resilient, and aligned with real business goals,
          even as complexity increases.
        </p>

        {/* Signature */}
        <div className="pt-10">
          <p className="text-lg font-medium tracking-tight">
            — Vishvesh Algeri
          </p>
          <p className="text-sm tracking-wide text-black/50 dark:text-white/50 mt-1">
            Founder & CEO
          </p>
        </div>

      </div>
    </div>

  </div>

  {/* Bottom dissolve */}
  <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none
    bg-gradient-to-b from-transparent via-white to-white
    dark:via-black dark:to-black
  " />

</section>



    </main>
  );
} 