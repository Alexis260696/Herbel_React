import React, { useState, useEffect } from 'react';
import './Header.scss';
import logo from '../../../public/imagenes/logo/Herbel_logo.png';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
        setIsOpen(false); 
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <a href="#home" onClick={closeMenu}>Inicio</a>
            </li>
            <li>
              <a href="#about-us" onClick={closeMenu}>Acerca de</a>
            </li>
            <li>
              <a href="#services" onClick={closeMenu}>Servicios</a>
            </li>
            <li>
              <a href="#requirements" onClick={closeMenu}>Requisitos</a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
