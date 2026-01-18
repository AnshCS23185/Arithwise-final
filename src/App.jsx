import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

/* ================= COMMON COMPONENTS ================= */
import Header from "./components/header-Dhara.jsx";
import Footer from "./components/footer-Dhara.jsx";

/* ================= PAGES ================= */
import Home from "./home-Ansh.jsx";
import DarkAboutUs from "./components/about.jsx";

/* ================= FEATURE PAGES ================= */
import Services from "./components/services-Dhara.jsx";
import Contact from "./components/contacts-Dhara.jsx";
import Login from "./components/login-Dhara.jsx";
import Career from "./components/career-dhara.jsx";
import Scrolltop from "./components/scrolltop.jsx";
export default function App() {
  return (
    <Router>
      {/* 🌗 GLOBAL THEME-AWARE APP WRAPPER */}
      <div
        className="
          relative min-h-screen
          bg-background text-foreground
          transition-colors duration-300
          overflow-x-hidden
        "
      >
        {/* 🌌 DARK MODE GLOBAL GRADIENT (BEHIND EVERYTHING) */}
        <div
          className="
            pointer-events-none absolute inset-0
            opacity-0 dark:opacity-100
            transition-opacity duration-500
            bg-[radial-gradient(1200px_600px_at_70%_40%,rgba(76,29,149,0.35),rgba(26,15,46,0.6),#050308_70%),linear-gradient(120deg,#050308_0%,#1a0f2e_40%,#050308_100%)]
          "
        />

        {/* ================= HEADER ================= */}
        <Header />
    <Scrolltop />
        {/* ================= PAGE CONTENT ================= */}
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<DarkAboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Career />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        {/* ================= FOOTER ================= */}
        <Footer />
      </div>
    </Router>
  );
}
