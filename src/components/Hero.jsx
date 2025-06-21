import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-left">
        <h1 className="hero-title-main">Rzemieślnicze Lody</h1>
        <p className="hero-subtitle-main">
          Od 1947 roku tworzymy lody według tradycyjnych receptur, 
          używając tylko najwyższej jakości składników. Każdy smak 
          to historia przekazywana z pokolenia na pokolenie.
        </p>
        <a href="#flavors" className="hero-cta-button">Poznaj nasze smaki</a>
      </div>
      <div className="hero-right">
        <img 
          src="/images/hero2.png" 
          alt="Rzemieślnicze lody Eskimo" 
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default Hero; 