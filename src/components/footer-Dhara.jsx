import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="
        relative z-20
        bg-white text-gray-700
        dark:bg-black dark:text-gray-300
        border-t border-black/10 dark:border-white/10
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">

          {/* ================= LOGO ================= */}
          <div>
            <img
              src="/logo-light.png"
              alt="Arithwise"
              className="hidden dark:block h-[110px] w-auto mb-6"
            />
            <img
              src="/logo-dark.png"
              alt="Arithwise"
              className="block dark:hidden h-[110px] w-auto mb-6"
            />

            <p className="text-base opacity-80">
              Your Solution Engine!
            </p>
          </div>

          {/* ================= NAV LINKS ================= */}
          <div>
            <h4 className="text-xl font-semibold mb-5">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="hover:text-purple-500 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-purple-500 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-purple-500 transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/career"
                  className="hover:text-purple-500 transition"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-purple-500 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= SERVICES ================= */}
          <div>
            <h4 className="text-xl font-semibold mb-5">Services</h4>
            <ul className="space-y-3">
              <li className="hover:text-purple-500 transition cursor-default">
                Data Analytics
              </li>
              <li className="hover:text-purple-500 transition cursor-default">
                Software Development
              </li>
              <li className="hover:text-purple-500 transition cursor-default">
                Cloud Solutions
              </li>
              <li className="hover:text-purple-500 transition cursor-default">
                Managed IT Services
              </li>
            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h4 className="text-xl font-semibold mb-5">Contact Info</h4>
            <p className="font-medium">Arithwise Solutions Pvt Ltd</p>
            <p className="text-sm opacity-80 mt-2">
              Nagpur – 440025
            </p>
            <p className="text-sm opacity-80 mt-2">
              info@arithwise.com
            </p>
          </div>

        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="text-center text-sm py-5 opacity-70 border-t border-black/5 dark:border-white/10">
        © 2025 Arithwise. All Rights Reserved.
      </div>
    </footer>
  );
}
