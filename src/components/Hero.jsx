import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-left">
        <h1 className="hero-title-main">ESKIMO LODY</h1>
        <p className="hero-subtitle-main">Zapewniamy orzeźwienie i uśmiech na Twojej imprezie lub spotkaniu.</p>
        <a href="#contact" className="hero-cta-button">SKONTAKTUJ SIĘ</a>
      </div>
      <div className="hero-right">
        <img src="/images/hero2.png" alt="Wózek z lodami Eskimo" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero; 