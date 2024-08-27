import React, { useState, } from 'react';
import '../styles/head.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../pics/logo.png'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  return (
    <header className="header">
      <div className="logo">
        <img  src= {logo} alt="Makeup Brand Logo" />
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </button>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="header-icons">
        <a href="#cart"><i className="fas fa-shopping-cart"></i></a>
      </div>
      </nav>
     
    </header>
  )
}

export default Header