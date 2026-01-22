import { motion, useScroll, useTransform } from "framer-motion";
import { useState,useRef,useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Eye, Target } from "lucide-react";
import { Mic } from "lucide-react";
export default function About() {


  // Hooks MUST be inside component
  const { scrollYProgress } = useScroll();
  // const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
const [active, setActive] = useState(null);
  const sectionRef = useRef(null);
  const [mouse, setMouse] = useState({ x: -1000, y: -1000 });
 const isVision = active === "vision";

  const COLS = 30;   // small tiles
  const ROWS = 18;
    const togglePanel = () => {
    setActive(prev => (prev === "vision" ? "mission" : "vision"));
  };

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
        className="border border-black/5 dark:border-white/5"
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

            const radius = 70;
            const strength = Math.max(0, 1 - dist / radius);

            if (strength <= 0) return "transparent";

            const palette = [
              "168,85,247",   // purple
              "236,72,153",   // magenta
              "0,0,0",        // black
              "255,255,255",  // white
            ];

            const color = palette[i % palette.length];

            return `rgba(${color}, ${strength * 0.35})`;
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

{/* vision & mission */}
<section
  className="
    relative w-full overflow-hidden
    pt-0 pb-24
    bg-gradient-to-br
    from-purple-50 via-white to-fuchsia-50
    dark:from-[#0b0614] dark:via-black dark:to-[#160b2d]
  "
>
  {/* SECTION GLOW */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-32 left-1/4 w-[700px] h-[700px] bg-purple-400/30 blur-[320px]" />
    <div className="absolute -bottom-40 right-1/4 w-[700px] h-[700px] bg-fuchsia-400/30 blur-[320px]" />
  </div>

  {/* HEADING */}
  <div className="relative text-center pt-20 pb-16">
    <h2 className="text-5xl font-semibold text-black dark:text-white">
      Our{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-500">
        Vision
      </span>{" "}
      &{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-purple-600">
        Mission
      </span>
    </h2>
  </div>

  {/* SLIDING CONTAINER */}
  <div className="relative max-w-6xl mx-auto">
    <div
      className="
        relative h-[420px] rounded-[2.6rem] overflow-hidden
        bg-white dark:bg-[#0f0b1a]
        shadow-[0_50px_140px_rgba(168,85,247,0.35)]
        dark:shadow-[0_50px_140px_rgba(0,0,0,0.9)]
      "
    >
      {/* VISION PANEL */}
      <motion.div
        animate={{ x: active === "vision" ? "0%" : "100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="
          absolute top-0 left-0 w-1/2 h-full
          bg-white dark:bg-[#0f0b1a]
          flex items-center justify-center
        "
      >
        {active === "vision" ? (
          <div className="max-w-md text-center px-6">
            <Eye className="w-12 h-12 mx-auto mb-6 text-purple-600" />
            <h3 className="text-3xl font-semibold mb-6 text-black dark:text-white">
              Our Vision
            </h3>
            <p className="text-lg leading-[1.9] text-justify text-black/80 dark:text-white/75">
              Our vision is to become the trusted partner for organizations
              seeking actionable insights from their data, driving strategic
              growth and competitive advantage. Through our comprehensive suite
              of consulting services and the development of our SaaS platform,
              we’re committed to revolutionizing the way businesses leverage
              data for success.
            </p>
          </div>
        ) : (
          <div className="text-center">
            <Eye className="w-12 h-12 mx-auto mb-6 text-purple-600" />
            <h3 className="text-3xl font-semibold mb-6 text-black dark:text-white">
              Our Vision
            </h3>
            <button
              onClick={togglePanel}
              className="
                px-7 py-3 rounded-xl
                bg-gradient-to-r from-purple-600 to-fuchsia-600
                text-white font-semibold
                shadow-lg
                hover:scale-[1.03] transition
              "
            >
              Read it out
            </button>
          </div>
        )}
      </motion.div>

      {/* MISSION PANEL */}
      <motion.div
        animate={{ x: active === "vision" ? "100%" : "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="
          absolute top-0 left-0 w-1/2 h-full
          bg-gradient-to-br from-purple-600 to-fuchsia-600
          dark:from-purple-700 dark:to-fuchsia-700
          text-white flex items-center justify-center
        "
      >
        {active !== "vision" ? (
          <div className="max-w-md text-center px-6">
            <Target className="w-12 h-12 mx-auto mb-6 text-white" />
            <h3 className="text-3xl font-semibold mb-6">
              Our Mission
            </h3>
            <p className="text-lg leading-[1.9] text-justify text-white/90">
              At the heart of our mission is a commitment to excellence in
              data analysis, reporting, and forecasting, enabling organizations
              to unlock their full potential. We aim to foster long-term
              partnerships built on trust, reliability, and a shared dedication
              to driving impactful outcomes through informed decision-making.
            </p>
          </div>
        ) : (
          <div className="text-center">
            <Target className="w-12 h-12 mx-auto mb-6 text-white" />
            <h3 className="text-3xl font-semibold mb-6">
              Our Mission
            </h3>
            <button
              onClick={togglePanel}
              className="
                px-7 py-3 rounded-xl
                bg-white dark:bg-black
                text-purple-700 dark:text-purple-300
                font-semibold
                shadow-lg
                hover:scale-[1.03] transition
              "
            >
              Read it out
            </button>
          </div>
        )}
      </motion.div>
    </div>
  </div>
</section>

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

    {/* Voice line */}
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="flex items-center gap-6 mb-20"
    >
      <Mic size={26} className="text-purple-600" />
      <div className="flex items-end gap-[7px] h-8">
        {Array.from({ length: 28 }).map((_, i) => (
          <motion.span
            key={i}
            className="w-[3px] rounded-full bg-gradient-to-t from-purple-600 via-fuchsia-500 to-purple-400"
            animate={{ height: ["6px", "32px", "12px"] }}
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

    {/* TEXT + VIDEO GRID */}
    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-stretch">

      {/* LEFT — TEXT */}
      <div className="relative">

        <div className="absolute left-0 top-0 bottom-0 w-[3px]
          bg-gradient-to-b from-purple-600 via-fuchsia-500 to-transparent" />

        <div className="pl-10">

          <p className="text-lg md:text-xl leading-[1.7] text-black/85 dark:text-white/85 text-justify mb-4">
            Arithwise was founded with a clear purpose — to engineer technology
            solutions that support confident decision-making, sustainable scale,
            and long-term business growth.
          </p>

          <p className="text-lg md:text-xl leading-[1.7] text-black/80 dark:text-white/80 text-justify mb-4">
            We believe innovation should be intentional. At Arithwise, solutions
            are not simply delivered; they are carefully designed, tested, and
            refined to meet real-world business challenges with precision and
            reliability.
          </p>

          <p className="text-lg md:text-xl leading-[1.7] text-black/80 dark:text-white/80 text-justify mb-4">
            As organizations evolve, systems often become fragmented and
            difficult to manage. What begins as progress can gradually turn into
            operational overhead. Our role is to simplify that complexity through
            clear, resilient, and aligned technology foundations.
          </p>

          <p className="text-lg md:text-xl leading-[1.7] text-black/80 dark:text-white/80 text-justify mb-4">
            Our team brings together strong technical expertise and a commitment
            to continuous growth. We invest in people because we understand that
            their success directly enables better outcomes for our clients.
          </p>

          <p className="text-lg md:text-xl leading-[1.7] text-black/80 dark:text-white/80 text-justify mb-4">
            At the core of Arithwise is a belief in fairness — fair pricing,
            transparent engagement, and equal access to high-quality technology
            consulting, regardless of scale or budget.
          </p>

          <p className="text-lg md:text-xl leading-[1.7] text-black/80 dark:text-white/80 text-justify">
            More than a services firm, Arithwise is a community focused on
            building intelligent foundations, fostering innovation, and
            delivering measurable value.
          </p>

          <div className="pt-10">
            <p className="text-lg font-medium">— Vishvesh Algeri</p>
            <p className="text-sm text-black/50 dark:text-white/50">
              Founder & CEO
            </p>
          </div>

        </div>
      </div>

      {/* RIGHT — FULL HEIGHT VIDEO */}
      <div className="relative hidden lg:block h-full">

        <div className="absolute inset-0 bg-gradient-to-br
          from-purple-500/25 via-transparent to-fuchsia-500/25
          blur-[140px]" />

        <video
          src="/videos/founders.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="
    relative z-10
    h-full
   w-[112%] -mr-[12%]

    object-cover
    rounded-[2.2rem]
    mask-image-[linear-gradient(to_left,black,transparent)]
  "
        />
      </div>

    </div>
  </div>
<section className="relative pt-0 pb-20 overflow-hidden bg-white dark:bg-black">

  {/* Ambient gradient */}
  <div className="absolute inset-0 pointer-events-none">
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      w-[900px] h-[900px]
      bg-[radial-gradient(circle,rgba(168,85,247,0.22),transparent_60%)]"
    />
  </div>

  <div className="relative max-w-6xl mx-auto px-8 text-center">

    {/* Connector line (tightened) */}
    <div className="mx-auto mb-6 w-px h-14
      bg-gradient-to-b from-transparent via-purple-600 to-transparent" />

    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-semibold tracking-tight"
    >
      Let’s{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-500">
        Connect
      </span>
    </motion.h2>

    {/* Subtext */}
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.15, duration: 0.6 }}
      className="mt-5 text-lg md:text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto"
    >
      Whether you’re exploring an idea, solving a complex challenge, or looking
      to build intelligent systems that scale — we’re ready to listen.
    </motion.p>

    {/* Divider line */}
    <div className="relative mt-10 flex justify-center">
      <div className="w-[220px] h-px
        bg-gradient-to-r from-transparent via-purple-600 to-transparent" />
    </div>

    {/* CTA */}
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.25, duration: 0.6 }}
      className="mt-10"
    >
      <a
        href="/contact"
        className="
          inline-flex items-center gap-3
          px-10 py-4
          rounded-full
          bg-gradient-to-r from-purple-600 to-fuchsia-600
          text-white font-medium text-lg
          shadow-[0_18px_50px_rgba(168,85,247,0.45)]
          hover:scale-[1.04]
          transition-transform
        "
      >
        Start the Conversation
        <span className="text-xl">→</span>
      </a>
    </motion.div>

  </div>

</section>


  {/* Bottom dissolve */}
  <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none
    bg-gradient-to-b from-transparent via-white to-white
    dark:via-black dark:to-black" />

</section>



    </main>
  );
} 