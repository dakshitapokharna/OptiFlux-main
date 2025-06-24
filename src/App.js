import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ContactForm from "./components/layout/ContactForm";
import Home from "./pages/Home";
import About from "./pages/About";
import SCO from "./pages/SCO";
import Resallo from "./pages/Resallo";
import Prodplan from "./pages/Prodplan";
import Worksched from "./pages/Worksched";
import Netopti from "./pages/Netopti";
import { Routes, Route } from "react-router-dom";
import "./styles/App.css";

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
          <Route path="/about" element={<About onContactClick={openContact} />} />
          <Route path="/OptiFlux/Supply-Chain-Optimization" element={<SCO onContactClick={openContact} />} />
          <Route path="/OptiFlux/Resource-Allocation" element={<Resallo onContactClick={openContact} />} />
          <Route path="/OptiFlux/Production-Planning" element={<Prodplan onContactClick={openContact} />} />
          <Route path="/OptiFlux/Workforce-Scheduling" element={<Worksched onContactClick={openContact} />} />
          <Route path="/OptiFlux/Network-Optimization" element={<Netopti onContactClick={openContact} />} />
        </Routes>
        
      </main>
       <button className="fab" onClick={openContact} aria-label="Schedule a Consultation">
        <i className="fas fa-headset"></i>
        <span className="fab-tooltip">Schedule a Consultation</span>
      </button>

      <Footer />
      
      {showContact && <ContactForm onClose={closeContact} />}
    </>
  );
}

export default App;