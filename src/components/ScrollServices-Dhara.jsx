import { useState } from "react";
import ServiceItem from "./Serviceitem-Dhara";
import ServiceVideo from "./Servicevideo-Dhara";

// SERVICES DATA (refined & premium)
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
      "Platform Upgrades & Optimization",
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



export default function ScrollServices() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-black text-white px-6 py-24">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-20">

    {/* LEFT — FLOATING SERVICES */}
    <div className="space-y-40">
      {services.map((service, index) => (
        <ServiceItem
          key={service.id}
          index={index}
          label={service.label}
          title={service.title}
          description={service.description}
          features={service.features}
          cta={service.cta}
          setActive={setActive}
        />
      ))}
    </div>

    {/* RIGHT — STICKY VIDEO */}
    <div className="sticky top-32 h-[420px] rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl shadow-2xl">
      {services.map((service, index) => (
        <ServiceVideo
          key={service.id}
          src={service.video}
          active={active === index}
        />
      ))}
    </div>

  </div>
</section>

  );
}