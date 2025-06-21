import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="header-container">
      <div className="header-top-bar">
        <div className="header-info-box">
          Rok założenia<br /><strong>1947</strong>
        </div>
        <div className="header-main-title">
          <span>ESKIMO</span>
          <div className="logo-placeholder">E</div>
          <span>LODY</span>
        </div>
        <div className="header-info-box">
          Gwarancja smaku<br /><strong>Lody Rzemieślnicze</strong>
        </div>
      </div>
      <div className="header-divider"></div>
      <nav className="main-navigation">
        <div className="nav-links-left">
          <button onClick={() => scrollToSection('about')} className="nav-link">O nas</button>
          <button onClick={() => scrollToSection('flavors')} className="nav-link">Smaki</button>
          <button onClick={() => scrollToSection('reviews')} className="nav-link">Opinie</button>
        </div>
        <div className="nav-links-right">
          <button onClick={() => scrollToSection('contact')} className="nav-link">Kontakt / Współpraca</button>
        </div>
      </nav>
      <div className="header-divider"></div>
    </header>
  );
};

export default Navbar; 