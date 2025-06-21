import React from 'react';
import './Flavors.css';
import lodyImage from '/images/lody.jpg';

const Flavors = () => {
    const flavorList = [
        "Śmietanka",
        "Czekolada",
        "Truskawka",
        "Wanilia z Madagaskaru",
        "Słony Karmel",
        "Pistacja",
        "Guma Balonowa",
        "Sorbet Malinowy"
    ];

  return (
    <section id="flavors" className="flavors-section">
      <div className="flavors-content">
        <h2>Nasze Smaki</h2>
        <p>
          Odkryj naszą kolekcję rzemieślniczych lodów, tworzonych według tradycyjnych receptur. 
          Każdy smak to starannie dobrane składniki najwyższej jakości - od świeżego mleka po 
          naturalne owoce i autentyczne dodatki. Nasze lody to nie tylko smak, ale prawdziwa 
          historia i tradycja, przekazywana z pokolenia na pokolenie.
        </p>
        
        <div className="flavors-image-container">
          <img 
            src={lodyImage} 
            alt="Rzemieślnicze lody Eskimo" 
            className="flavors-image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div className="flavors-image-placeholder">
            <span>🍦</span>
            <p>Nasze rzemieślnicze lody</p>
          </div>
        </div>
        
        <div className="flavors-grid">
            {flavorList.map((flavor, index) => (
                <div key={index} className="flavor-card">
                    <h3>{flavor}</h3>
                    <p>Klasyczny smak w nowoczesnym wydaniu</p>
                </div>
            ))}
        </div>
        
        <div className="flavors-footer">
          <p>
            🍦 <strong>Codziennie jeden smak spod lady!</strong> Śledź nas na Instagramie, 
            aby być na bieżąco z naszymi sezonowymi smakami i specjalnymi ofertami.
          </p>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="instagram-link"
          >
            📸 Śledź nas na Instagramie
          </a>
        </div>
      </div>
    </section>
  );
};

export default Flavors; 