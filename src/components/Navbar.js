import React from 'react';
import './Navbar.css'; // Importă stilurile Navbar
import logo from '../assets/artist.jpg'; // Asigură-te că ai imaginea logo în directorul corect

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <h2 classname="Logo">Picasso</h2>
      </div>
      <div className="navbar-links">
        <a href="#about" className="navbar-link">About</a>
        <a href="#projects" className="navbar-link">Projects</a>
        <a href="#contact" className="navbar-link">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
