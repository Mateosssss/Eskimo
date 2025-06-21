import React from 'react';
import Timeline from './Timeline';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>O nas</h2>
        <p>
          Od 1947 roku tworzymy rzemieślnicze lody według tradycyjnych receptur, przekazywanych z pokolenia na pokolenie. 
          Nasza pasja do lodów i dbałość o jakość sprawiają, że każda gałka to prawdziwa uczta dla podniebienia.
        </p>
        
        <div className="about-grid">
          <div className="about-card">
            <h3>Tradycja</h3>
            <p>
              Od ponad 76 lat tworzymy lody według oryginalnych receptur, zachowując smak i jakość, 
              które pokochały pokolenia naszych klientów.
            </p>
          </div>
          <div className="about-card">
            <h3>Jakość</h3>
            <p>
              Używamy tylko najwyższej jakości składników - świeżego mleka, naturalnych owoców 
              i autentycznych dodatków, bez sztucznych barwników i konserwantów.
            </p>
          </div>
          <div className="about-card">
            <h3>Rzemiosło</h3>
            <p>
              Każda partia lodów jest przygotowywana ręcznie w małych ilościach, 
              co gwarantuje świeżość i niepowtarzalny smak każdej porcji.
            </p>
          </div>
        </div>
        
        <Timeline />
      </div>
    </section>
  );
};

export default About; 