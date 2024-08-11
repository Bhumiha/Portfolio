import React, { useState } from 'react';
import './App.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Raunak Mishra</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Raunak Mishra</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {isOpen && (
            <div className="menu-links">
              <li><a href="#about" onClick={toggleMenu}>About</a></li>
              <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
              <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
              <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
