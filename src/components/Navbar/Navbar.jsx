import React, { useState } from "react";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";   // For page navigation
// import { Link as ScrollLink } from "react-scroll"; // No longer needed if hiding

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Text logo instead of image */}
        <div className="text-logo">
         <Link to="/" className="text-logo" onClick={handleLinkClick}>
          TRUST <span>REALTY</span>
        </Link>
        </div>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </div>

        <div className={`navbar-center ${menuOpen ? "active" : ""}`}>
          <Link to="/about-us" onClick={handleLinkClick}>ABOUT</Link>
          <Link to="/residential" onClick={handleLinkClick}>RESIDENTIAL</Link>
          <Link to="/commercial" onClick={handleLinkClick}>COMMERCIAL</Link>

          {/* The following links are now hidden */}
          {/*
          <ScrollLink to="rentals" smooth={true} duration={600} onClick={handleLinkClick}>
            Latest Project
          </ScrollLink>
          <ScrollLink to="hospitality" smooth={true} duration={600} onClick={handleLinkClick}>
            HOSPITALITY
          </ScrollLink>
          <ScrollLink to="retail" smooth={true} duration={600} onClick={handleLinkClick}>
            RETAIL
          </ScrollLink>
          */}
        </div>
      </div>
    </nav>
  );
}
