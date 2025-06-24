import React, { useState } from "react";
import "./styles/App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import SCO from "./pages/SCO";
import Resallo from "./pages/Resallo";
import Home from "./pages/Home";
import Prodplan from "./pages/Prodplan";
import ContactForm from "./components/layout/ContactForm";
import Worksched from "./pages/Worksched";
import Netopti from "./pages/Netopti";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
  // const [showContact, setShowContact] = useState(false);

  // const openContact = () => setShowContact(true);
  // const closeContact = () => setShowContact(false);

  const handleNavClick = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar onNavClick={handleNavClick} />
<main className="page-content">
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/OptiFlux/Supply-Chain-Optimization" element={<SCO />} />
    <Route path="/OptiFlux/Resource-Allocation" element={<Resallo />} />
    <Route path="/OptiFlux/Production-Planning" element={<Prodplan />} />
    <Route path="/OptiFlux/Workforce-Scheduling" element={<Worksched />} />
    <Route path="/OptiFlux/Network-Optimization" element={<Netopti />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</main>
<Footer />
      {/* {showContact && <ContactForm onClose={closeContact} />} */}





      {/* <button
        className="fab"
        onClick={openContact}
        aria-label="Schedule a Consultation"
      >
        <i className="fas fa-headset"></i>
        <span className="fab-tooltip">Schedule a Consultation</span>
      </button> */}
    </>
  );
}

export default App;
