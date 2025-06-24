import React, { useState } from "react";
import "../../styles/Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onContactClick, onNavClick }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const toggle = () => setOpen(!open);

  const handleNav = (section) => {
    if (onNavClick) onNavClick(section);
    setOpen(false);
  };

  return (
    <header className="nav-wrapper">
      <nav className="navbar">
        <a href="/">
          <div className="logo">
            Opti
            <span>Flux</span>
          </div>
        </a>
        <div
          className="hamburger"
          onClick={toggle}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && toggle()}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`nav-links ${open ? "open" : ""}`}>
          <button
            className="nav-link"
            onClick={() => handleNav("services")}
            type="button"
          >
            Services
          </button>
          <button
            className="nav-link"
            onClick={() => handleNav("industries")}
            type="button"
          >
            Industries
          </button>

          <a href="/about" className="nav-link">
            About Us
          </a>

          <button className="contact" onClick={() => navigate("/contact")}>
            Contact Us
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
