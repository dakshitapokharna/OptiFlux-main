import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <>
      <header className="nav-wrapper">
        <nav className="navbar">
        <a href="index.html">
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
            <a href="/services" className="nav-link">
              Services
            </a>
            <a href="/industries" className="nav-link">
              Industries
            </a>
            <a href="/aboutus" className="nav-link">
              About Us
            </a>
           <button href="/contact" className="contact">Contact Us</button>
          </div>
        </nav>
      </header >
    </>
  );
};

export default Navbar;
