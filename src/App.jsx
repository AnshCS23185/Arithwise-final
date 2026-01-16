// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // Common Components
// import Header from "./components/header-Dhara.jsx";
// import Footer from "./components/footer-Dhara.jsx";

// // Pages
// import Home from "./home-Ansh.jsx";
// import DarkAboutUs from "./about-Devang.jsx";

// function App() {
//   return (
//     <Router>
//       <Header />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<DarkAboutUs />} />
//       </Routes>

//       <Footer />
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Common Components
import Header from "./components/header-Dhara.jsx";
import Footer from "./components/footer-Dhara.jsx";

// Pages
import Home from "./home-Ansh.jsx";
import DarkAboutUs from "./about-Devang.jsx";

// Feature Pages
import Services from "./components/services-Dhara.jsx";
import Contact from "./components/contacts-Dhara.jsx";
import Login from "./components/login-Dhara.jsx";

import Career from "./components/career-dhara.jsx";

function App() {
  return (
    <Router>
      <div className="stars" />
      <Header />

      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* ABOUT */}
        <Route path="/about" element={<DarkAboutUs />} />

        {/* SERVICES */}
        <Route path="/services" element={<Services />} />

        {/* CONTACT */}
        <Route path="/contact" element={<Contact />} />

        {/* LOGIN */}
        <Route path="/login" element={<Login />} />

        {/* CAREER */}
        <Route path="/career" element={<Career />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
