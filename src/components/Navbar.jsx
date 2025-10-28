import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">Laboratorio</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#team">Team</a></li>
        <li><a href="/#projects">Projects</a></li>
        <li><a href="/#publications">Publications</a></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
