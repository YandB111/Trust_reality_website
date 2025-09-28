import React, { useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/navbar/navLogo.png";

import { Link } from "react-router-dom";   // For page navigation
import { Link as ScrollLink } from "react-scroll"; // For smooth scrolling

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="placeholder-logo">
          <a href="/">
            <img src={logo} alt="Company Logo" className="logo" />
          </a>
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </div>

        <div className={`navbar-center ${menuOpen ? "active" : ""}`}>
          {/* Route navigation */}
          <Link to="/about-us" onClick={handleLinkClick}>ABOUT</Link>
        <Link to="/residential" onClick={handleLinkClick}>
  RESIDENTIAL
</Link>

          {/* Scroll navigation (same page sections) */}
          <Link to="/commercial" onClick={handleLinkClick}>
            COMMERCIAL
          </Link>
          <ScrollLink to="rentals"  className="hidden-link" smooth={true} duration={600} onClick={handleLinkClick}>
            Latest Project
          </ScrollLink>
          <ScrollLink
            to="hospitality"
            smooth={true}
            duration={600}
            onClick={handleLinkClick}
            className="hidden-link"
          >
            HOSPITALITY
          </ScrollLink>
          <ScrollLink
            to="retail"
            smooth={true}
            duration={600}
            onClick={handleLinkClick}
            className="hidden-link"
          >
            RETAIL
          </ScrollLink>
        </div>
      </div>
    </nav>
  );
}
