import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  // Chiude il menu quando clicchi fuori dalla navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Gestione click link
  const handleLinkClick = (hash) => {
    setMenuOpen(false);
    navigate(`/#${hash}`);
  };

  return (
    <nav className="navbar" ref={navRef}>
      <div className="nav-logo">RS Lab</div>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#home" onClick={() => handleLinkClick("home")}>Home</a></li>
        <li><a href="#about" onClick={() => handleLinkClick("about")}>About</a></li>
        <li><a href="#team" onClick={() => handleLinkClick("team")}>Team</a></li>
        <li><a href="#projects" onClick={() => handleLinkClick("projects")}>Projects</a></li>
        <li><a href="#publications" onClick={() => handleLinkClick("publications")}>Publications</a></li>
        <li><a href="#contact" onClick={() => handleLinkClick("contact")}>Contact</a></li>
      </ul>
      <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
}
