import React, { useState } from 'react';
import './Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
function NavBar(){
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="logo">
        <h3>
          <span id='Pattern'>ISHAN</span> TIWARI
        </h3>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li id='Home'><NavLink to="/">Home</NavLink></li>
        <li id='AboutMe'><NavLink to="/About">About Me</NavLink></li>
        <li id='Education'><NavLink to="/Education">Education</NavLink></li>
        <li id='Projects'><NavLink to="/Projects">Projects</NavLink></li>
        <li id='ContactMe'><NavLink to="/Contact">Contact Me</NavLink></li>
      </ul>
    </nav>
  );
};

export default NavBar;
