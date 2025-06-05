import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import ContactForm from "./ContactForm";

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
    <div className="App">
      <Navbar onContactClick={openContact} onNavClick={handleNavClick} />
      <Home onContactClick={openContact} />
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
    </div>
  );
}

export default App;