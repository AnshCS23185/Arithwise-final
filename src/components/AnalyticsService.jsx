import { motion, useScroll, useTransform } from "framer-motion";

const SECTIONS = [
  {
    title: "Business Intelligence & Dashboards",
    desc: "Transform raw data into clear, actionable insights through interactive dashboards and real-time reporting.",
    video: "/videos/BI.mp4",
    layout: "left-big",
  },
  {
    title: "Big Data Engineering & Data Lakes",
    desc: "Design scalable data platforms that handle volume, velocity, and variety without compromise.",
    video: "/videos/bigdata.mp4",
    layout: "right-wide",
  },
  {
    title: "Customer & Behavioral Analytics",
    desc: "Understand how users behave, engage, and convert through deep behavioral analysis.",
    video: "/videos/customer.mp4",
    layout: "left-tall",
  },
  {
    title: "Operational & Performance Analytics",
    desc: "Track operational efficiency and performance metrics to optimize decision-making.",
    video: "/videos/governancw.mp4",
    layout: "right-big",
  },
  {
    title: "Marketing & Growth Analytics",
    desc: "Measure growth, campaigns, and ROI with analytics built for modern marketing teams.",
    video: "/videos/marketing.mp4",
    layout: "left-wide",
  },
];

export default function AnalyticsEditorialLayout() {
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-4%"]);

  return (
    <section className="relative w-full py-28 overflow-hidden">

      {/* BACKGROUND */}
      <motion.div
        style={{ y: bgY }}
        className="
          absolute inset-0 -z-10
          bg-gradient-to-br
          from-purple-200/40 via-transparent to-fuchsia-200/30
          dark:from-purple-900/35 dark:to-fuchsia-900/25
        "
      />

      <div className="max-w-7xl mx-auto px-6 space-y-28">

        {/* HERO */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="
            text-4xl md:text-5xl font-extrabold
            bg-gradient-to-r from-fuchsia-600 to-purple-700
            bg-clip-text text-transparent
          ">
            Analytics in Motion
          </h2>
          <p className="mt-4 text-lg md:text-xl text-foreground/70">
            Each capability comes alive through real-world data experiences.
          </p>
        </div>

        {/* SECTIONS */}
        {SECTIONS.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`
              grid items-center
              gap-10 lg:gap-14
              ${item.layout.includes("left")
                ? "lg:grid-cols-[1.3fr_0.7fr]"
                : "lg:grid-cols-[0.7fr_1.3fr]"
              }
            `}
          >

            {/* VIDEO */}
            <div
              className={`
                relative overflow-hidden rounded-3xl
                shadow-[0_30px_90px_rgba(0,0,0,0.32)]
                ${item.layout.includes("big") && "aspect-[16/10]"}
                ${item.layout.includes("wide") && "aspect-[20/9]"}
                ${item.layout.includes("tall") && "aspect-[3/4]"}
              `}
            >
              <video
                src={item.video}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* TEXT */}
            <div className={`
              ${item.layout.includes("left") ? "lg:pl-6" : "lg:pr-6"}
            `}>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                {item.desc}
              </p>
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}
