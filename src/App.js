import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SCO from "./SCO";
import Resallo from "./Resallo";
import Home from "./Home";
import ContactForm from "./ContactForm";
import { Routes, Route } from "react-router-dom";
function App() {
  const [showContact, setShowContact] = useState(false);

  const openContact = () => setShowContact(true);
  const closeContact = () => setShowContact(false);

  const handleNavClick = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar onContactClick={openContact} onNavClick={handleNavClick} />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home onContactClick={openContact} />} />
          <Route path="/sco" element={<SCO />} />
          <Route path="/resallo" element={<Resallo />} />
        </Routes>
      </main>
      <Footer onContactClick={openContact} />
      {showContact && <ContactForm onClose={closeContact} />}
      <button
        className="fab"
        onClick={openContact}
        aria-label="Schedule a Consultation"
      >
        <i className="fas fa-headset"></i>
        <span className="fab-tooltip">Schedule a Consultation</span>
      </button>
    </>
  );
}

export default App;
