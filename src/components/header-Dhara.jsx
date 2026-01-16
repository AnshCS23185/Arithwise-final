import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.theme === "dark"
  );

  const navItems = [
    { label: "Our Story", path: "/about" },
    { label: "Solutions", path: "/services" },
    { label: "Opportunities", path: "/career" },
    { label: "Login", path: "/login" },
    { label: "Audiowise", path: "/audiowise" },
  ];

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Dark mode handler */
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode]);

  return (
    <header
      className={`
        fixed top-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-black/80 dark:bg-black/80 backdrop-blur-md border-b border-white/20"
            : "bg-transparent"
        }
      `}
    >
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center w-[280px]">
          <img
            src="/logo.png"
            alt="Arithwise"
            className="h-[88px] w-full object-contain cursor-pointer"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-14">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="
                relative text-[16px] font-semibold tracking-wide
                text-white dark:text-white
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

        {/* Right Section */}
        <div className="flex items-center gap-5">

          {/* 🌙 Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="
              hidden lg:flex items-center justify-center
              w-10 h-10 rounded-full
              border border-white/40
              text-white
              hover:bg-white hover:text-black
              transition-all duration-300
            "
            aria-label="Toggle Theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* CTA */}
          <Link
            to="/contact"
            className="
              hidden lg:inline-flex items-center
              px-6 py-2 text-[14px] font-semibold tracking-wide
              text-white rounded-full
              border-2 border-white
              hover:bg-white hover:text-black
              transition-all duration-300
            "
          >
            Let's Connect
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

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/20">
          <nav className="flex flex-col px-6 py-6 gap-6">

            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className="
                  text-[18px] font-semibold tracking-wide
                  text-white hover:pl-2 transition-all duration-300
                "
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="
                mt-4 py-3 rounded-full
                border border-white
                text-white font-semibold
                transition-all duration-300
              "
            >
              {darkMode ? "Switch to Light ☀️" : "Switch to Dark 🌙"}
            </button>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="
                mt-2 inline-flex justify-center
                px-6 py-3 text-[15px] font-semibold
                text-white rounded-full
                border-2 border-white
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
