import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useTheme from "./useTheme";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useTheme();
  const location = useLocation();

  const isHome = location.pathname === "/";

  const navItems = [
    { label: "Our Story", path: "/about" },
    { label: "Solutions", path: "/services" },
    { label: "Opportunities", path: "/career" },
    { label: "Login", path: "/login" },
    { label: "Audiowise", path: "/audiowise" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    if (isHome) {
      window.addEventListener("scroll", onScroll);
    } else {
      setScrolled(true);
    }

    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        h-[88px]                          /* slightly taller for logo */
        backdrop-blur-xl
        border-b border-white/15
        transition-all duration-300
        ${scrolled ? "bg-black/55" : "bg-black/35"}
      `}
    >
      <div className="w-full h-full flex items-center px-10">

        {/* ================= LOGO (HOME LINK) ================= */}
        <Link
          to="/"
          className="flex items-center shrink-0 hover:opacity-90 transition"
        >
          <img
            src="/logo.png"
            alt="Arithwise"
            className="
              h-[84px]            /* 🔥 BIGGER LOGO */
              w-auto
              object-contain
            "
          />
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden lg:flex flex-1 justify-center gap-14">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="
                relative
                text-[18px] font-medium
                text-white/90 hover:text-white
                transition-colors duration-300
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0 after:bg-white
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ================= RIGHT SECTION ================= */}
        <div className="flex items-center gap-6">

          <ThemeToggle theme={theme} setTheme={setTheme} />

          <Link
            to="/contact"
            className="
              hidden lg:inline-flex items-center
              px-6 py-2.5
              text-[15px] font-semibold
              rounded-full
              border border-white/70
              text-white
              hover:bg-white hover:text-black
              transition-all duration-300
            "
          >
            Let’s Connect
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col gap-1.5"
          >
            <span className="w-7 h-0.5 bg-white"></span>
            <span className="w-7 h-0.5 bg-white"></span>
            <span className="w-7 h-0.5 bg-white"></span>
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="lg:hidden bg-black/70 backdrop-blur-xl border-t border-white/15">
          <nav className="flex flex-col px-8 py-6 gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setOpen(false)}
                className="text-[18px] font-medium text-white"
              >
                {item.label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="
                mt-4 inline-flex justify-center
                px-6 py-3
                text-[16px] font-semibold
                rounded-full
                border border-white
                text-white
                hover:bg-white hover:text-black
                transition-all duration-300
              "
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
