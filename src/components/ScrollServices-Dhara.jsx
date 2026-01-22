import ServiceVideo from "./Servicevideo-Dhara";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* ================= SERVICES DATA ================= */
const services = [
  {
    id: "advanced-analytics",
    label: "Data Intelligence",
    title: "Advanced Data Analytics",
    description:
      "Turn complex datasets into strategic intelligence using modern analytics, visualization, and data engineering practices.",
    features: [
      "Business Intelligence & Dashboards",
      "Big Data Engineering & Data Lakes",
      "Customer & Behavioral Analytics",
      "Operational & Performance Analytics",
      "Data Strategy & Advisory",
      "Enterprise Data Warehousing",
      "Data Governance & Quality",
      "Lifecycle & Metadata Management",
      "Marketing & Growth Analytics",
      "Supply Chain Intelligence",
    ],
    video: "/videos/analytics.mp4",
    cta: "Explore Analytics",
    route: "/analytics",
  },
  {
    id: "cloud-platforms",
    label: "Cloud Platforms",
    title: "Cloud Engineering Services",
    description:
      "Design, migrate, and optimize cloud platforms that are secure, scalable, and cost-efficient.",
    features: [
      "Cloud Architecture & Monitoring",
      "Capacity Planning & Cost Optimization",
      "Cloud Migration & Modernization",
      "High Availability & Resilience Design",
    ],
    video: "/videos/cloud.mp4",
    cta: "View Cloud Solutions",
    route: "/cloud",
  },
  {
    id: "managed-operations",
    label: "IT Operations",
    title: "Managed IT & Infrastructure",
    description:
      "Proactive monitoring, security, and support to ensure uninterrupted business operations.",
    features: [
      "IT Audits & Compliance",
      "Backup & Disaster Recovery",
      "Infrastructure Monitoring",
      "Network & System Management",
      "Security & Patch Management",
      "Platform Upgrades & Optimization",
    ],
    video: "/videos/IT.mp4",
    cta: "See How It Works",
    route: "/it-operations",
  },
  {
    id: "software-engineering",
    label: "Product Engineering",
    title: "Software Development Services",
    description:
      "Build scalable, high-performance applications using modern development and DevOps practices.",
    features: [
      "Custom Application Development",
      "Web & Platform Engineering",
      "Blockchain Solutions",
      "DevOps & CI/CD Automation",
    ],
    video: "/videos/programming.mp4",
    cta: "Build With Us",
    route: "/software",
  },
  {
    id: "enterprise-systems",
    label: "Enterprise Solutions",
    title: "Techno-Functional Consulting",
    description:
      "Bridge business processes and technology with enterprise-grade platforms and intelligent automation.",
    features: [
      "AI-Powered Business Chatbots",
      "ERP & Enterprise Systems",
      "CRM & HCM Solutions",
      "SAP Implementation & Support",
      "Salesforce Consulting & Development",
    ],
    video: "/videos/techno.mp4",
    cta: "Start a Conversation",
    route: "/enterprise",
  },
];

/* ================= COMPONENT ================= */
export default function ScrollServices() {
  return (
    <section className="relative w-full text-foreground pt-[104px] overflow-hidden">

      {/* GRADIENT BASE */}
      <div
        className="
          absolute inset-0 -z-10
          bg-gradient-to-b
          from-[#faf7ff]
          via-[#f4f1fb]
          to-[#ffffff]
          dark:from-[#1b0c2f]
          dark:via-[#0e061a]
          dark:to-[#07040d]
        "
      />

      {/* AMBIENT GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-purple-200/40 blur-[160px] dark:hidden" />
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-fuchsia-500/20 blur-[160px] hidden dark:block" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-28">

        {services.map((service) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 items-start"
          >

            {/* LEFT — TEXT */}
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="block mb-3 text-sm tracking-[0.35em] uppercase font-semibold text-fuchsia-500"
              >
                {service.label}
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.8 }}
                className="text-[clamp(2.1rem,3.5vw,3rem)] font-extrabold leading-tight"
              >
                {service.title}
              </motion.h2>

              <p className="mt-3 text-lg leading-relaxed text-foreground/70 max-w-2xl">
                {service.description}
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                {service.features.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-base text-foreground/80"
                  >
                    <span className="mt-1 text-fuchsia-500 text-lg">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA BUTTON → ROUTE */}
              <Link
                to={service.route}
                className="
                  mt-6 inline-flex items-center gap-3 px-7 py-3.5
                  text-sm font-semibold text-white rounded-full
                  bg-gradient-to-r from-fuchsia-600 to-purple-700
                  transition-all duration-300
                  hover:scale-105 hover:shadow-[0_0_28px_rgba(217,70,239,0.45)]
                  active:scale-95
                "
              >
                {service.cta}
              </Link>
            </div>

            {/* RIGHT — STICKY VIDEO */}
            <div className="relative">
              <div
                className="
                  sticky top-[120px]
                  aspect-square w-full max-w-[420px] mx-auto
                  overflow-hidden rounded-3xl
                  bg-white/5 backdrop-blur-xl
                  ring-1 ring-white/10
                  shadow-[0_40px_120px_rgba(0,0,0,0.6)]
                " 
              >
                <ServiceVideo src={service.video} />
              </div>
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}
