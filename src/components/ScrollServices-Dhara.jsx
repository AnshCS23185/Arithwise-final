import { useEffect, useRef, useState } from "react";
import ServiceVideo from "./Servicevideo-Dhara";

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
    ],
    video: "/videos/analytics.mp4",
    cta: "Explore Analytics",
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
    ],
    video: "/videos/IT.mp4",
    cta: "See How It Works",
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
  },
];

/* ================= COMPONENT ================= */
export default function ScrollServices() {
  const [active, setActive] = useState(0);
  const sectionRefs = useRef([]);

  /* ===== Intersection Observer (ROCK SOLID) ===== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActive(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px", // center of screen
        threshold: 0,
      }
    );

    sectionRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full bg-background text-foreground pt-[104px]">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-24">

          {/* ================= LEFT CONTENT ================= */}
          <div className="flex flex-col gap-[220px]">
            {services.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => (sectionRefs.current[index] = el)}
                data-index={index}
              >
                <span className="block mb-4 text-sm tracking-[0.3em] uppercase font-semibold text-fuchsia-500">
                  {service.label}
                </span>

                <h2 className="text-[clamp(2.4rem,4vw,3.4rem)] font-extrabold">
                  {service.title}
                </h2>

                <p className="mt-5 text-lg text-foreground/70 max-w-2xl">
                  {service.description}
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
                  {service.features.map((item, i) => (
                    <div key={i} className="flex gap-3 text-base">
                      <span className="text-fuchsia-500">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-10 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-fuchsia-600 to-purple-700">
                  {service.cta}
                </button>
              </div>
            ))}
          </div>

          {/* ================= RIGHT STICKY VIDEO ================= */}
          <div className="relative min-h-[1200px]">
            <div className="sticky top-[140px]">
              <div className="relative aspect-square w-full max-w-[420px] mx-auto overflow-hidden rounded-3xl">
                {services.map((service, index) => (
                  <ServiceVideo
                    key={service.id}
                    src={service.video}
                    active={active === index}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
