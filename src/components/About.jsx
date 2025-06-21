import React from 'react';
import './About.css';
import Timeline from './Timeline';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>O nas</h2>
        <p>
          Eskimo to rodzinna firma z wieloletnią tradycją w produkcji rzemieślniczych lodów. 
          Od 1947 roku tworzymy lody według tradycyjnych receptur, przekazywanych z pokolenia na pokolenie. 
          Nasze lody to nie tylko smak, ale prawdziwa historia i pasja.
        </p>
        
        <div className="about-grid">
          <div className="about-card">
            <h3>Tradycja</h3>
            <p>
              Ponad 75 lat doświadczenia w produkcji lodów rzemieślniczych. 
              Nasze receptury są przekazywane z pokolenia na pokolenie, 
              zachowując autentyczny smak i jakość.
            </p>
          </div>
          
          <div className="about-card">
            <h3>Jakość</h3>
            <p>
              Używamy tylko najwyższej jakości składników - świeżego mleka, 
              naturalnych owoców i autentycznych dodatków. Bez sztucznych 
              barwników i konserwantów.
            </p>
          </div>
          
          <div className="about-card">
            <h3>Pasja</h3>
            <p>
              Każdy smak to starannie przemyślana kompozycja. Tworzymy lody 
              z pasją i miłością do tradycji, dbając o każdy szczegół 
              procesu produkcji.
            </p>
          </div>
        </div>
        
        <Timeline />
      </div>
    </section>
  );
};

export default About; 