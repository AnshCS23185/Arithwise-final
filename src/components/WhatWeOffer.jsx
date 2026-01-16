export default function WhatWeOffer() {
  return (
    <section
      className="relative w-full py-28 overflow-hidden"
      style={{
        background: `
          radial-gradient(1200px 600px at 20% 60%, rgba(138, 43, 226, 0.18), transparent 60%),
          radial-gradient(900px 500px at 80% 40%, rgba(90, 30, 160, 0.14), transparent 60%),
          linear-gradient(180deg, #000000 0%, #05020a 100%)
        `,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div>
            <p className="text-purple-400 font-semibold mb-3 tracking-wide">
              What We Offer
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Managed IT Services Customized
              <br /> by Industries
            </h2>

            <button
              className="mt-8 inline-flex items-center gap-2
              bg-gradient-to-r from-purple-600 to-purple-800
              text-white px-6 py-3 rounded-lg font-medium
              hover:opacity-90 transition"
            >
              Know More
              <span>›</span>
            </button>
          </div>

          {/* RIGHT */}
          <div className="text-white/70 text-base leading-relaxed max-w-xl">
            At arithwise, innovation meets integrity, and solutions come to life.
            We are dedicated to provide top-notch managed IT services tailored to
            your unique needs. We understand the critical role that technology
            plays in driving business success. That’s why we offer a comprehensive
            suite of managed IT services designed to optimize your operations,
            enhance efficiency, and maximize productivity.
          </div>

        </div>

        {/* SERVICES GRID */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-10">

          <ServiceCard
            title="Data Analytics"
            desc="Arithwise extracts valuable insights from data, enabling informed decision-making and a competitive edge."
            icon="📊"
          />

          <ServiceCard
            title="Programming"
            desc="Our skilled developers create custom software to streamline data processes and enhance efficiency."
            icon="💻"
          />

          <ServiceCard
            title="Cloud"
            desc="We leverage the cloud to optimize data management, ensuring scalability and security."
            icon="☁️"
          />

          <ServiceCard
            title="IT Services"
            desc="Robust databases tailored to your needs, the backbone of data-driven success."
            icon="🛠️"
          />

        </div>
      </div>
    </section>
  );
}

/* CARD COMPONENT */
function ServiceCard({ title, desc, icon }) {
  return (
    <div className="
      bg-white rounded-2xl p-8
      shadow-[0_10px_40px_rgba(0,0,0,0.25)]
      hover:shadow-[0_20px_60px_rgba(138,43,226,0.25)]
      transition duration-300
      flex gap-6 items-start
    ">
      <div className="text-3xl">{icon}</div>

      <div>
        <h3 className="text-xl font-semibold text-black mb-2">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}
