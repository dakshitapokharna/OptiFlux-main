import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SCO from "./SCO";
import Resallo from "./Resallo";
import Home from "./Home";
import Prodplan from "./Prodplan";
import ContactForm from "./ContactForm";
import Worksched from "./Worksched";
import Netopti from "./Netopti";
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
          <Route path="/sco" element={<SCO onContactClick={openContact} />} />
          <Route path="/resallo" element={<Resallo onContactClick={openContact} />} />
          <Route path="/prodplan" element={<Prodplan onContactClick={openContact} />} />
          <Route path="/worksched" element={<Worksched onContactClick={openContact} />} />
          <Route path="/netopti" element={<Netopti onContactClick={openContact} />} />
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