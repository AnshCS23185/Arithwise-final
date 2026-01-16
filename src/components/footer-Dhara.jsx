import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/20">

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <img
              src="/logo.png"
              alt="Arithwise"
              className="h-13 w-auto mb-4"
            />

            <p className="text-white/90 text-[15px] font-medium leading-relaxed max-w-sm">
              Building intelligent, scalable and modern digital solutions
              with precision and purpose.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            {/* Company */}
            <div>
              <h4 className="text-white text-[13px] font-bold tracking-[0.25em] mb-4 uppercase">
                Company
              </h4>
              <ul className="space-y-3 text-[15px] font-medium text-white/90">
                {["Our Story", "Solutions", "Opportunities"].map(item => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase()}`}
                      className="hover:text-white transition"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-white text-[13px] font-bold tracking-[0.25em] mb-4 uppercase">
                Products
              </h4>
              <ul className="space-y-3 text-[15px] font-medium text-white/90">
                {["Audiowise", "Login"].map(item => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase()}`}
                      className="hover:text-white transition"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-[13px] font-bold tracking-[0.25em] mb-4 uppercase">
              Contact
            </h4>

            <p className="text-white/90 text-[15px] font-medium mb-2">
              career@arithwise.com
            </p>

            <p className="text-white/80 text-[14px] leading-snug mb-4">
              📍 Nagpur, Maharashtra, India
            </p>

            <a
              href="https://maps.app.goo.gl/tHM5DLH54UJKhWS1A" 
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex px-5 py-2 text-[14px] font-semibold
                text-white rounded-full border border-white/60
                hover:bg-white hover:text-black
                transition-all duration-300
              "
            >
              View Location
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-5 border-t border-white/20
        flex flex-col md:flex-row items-center justify-between gap-3">

          <p className="text-white/80 text-[13px] font-medium tracking-wide">
            © {new Date().getFullYear()} Arithwise. All rights reserved.
          </p>

          <p className="text-white/80 text-[13px] font-medium tracking-wide">
            The Solution Engine ⚡
          </p>
        </div>

        {/* Background Text */}
        <h1
          className="
            absolute bottom-4 right-4
            text-[90px] font-extrabold tracking-[0.25em]
            text-white/[0.03]
            select-none pointer-events-none
          "
        >
          ARITHWISE
        </h1>
      </div>
    </footer>
  );
}
