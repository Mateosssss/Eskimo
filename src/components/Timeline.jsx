import React from 'react';
import './Timeline.css';

const Timeline = () => {
  const timelineEvents = [
    {
      year: '1947',
      title: 'Założenie firmy',
      description: 'Rodzina Gawlik zakłada małą lodziarnię w centrum Oliwy, rozpoczynając tradycję rzemieślniczych lodów.',
      image: '/images/timeline/zalozenie.jpeg',
      imageAlt: 'Pierwsza lodziarnia Eskimo w 1947 roku'
    },
    {
      year: '1955',
      title: 'Pierwszy wózek',
      description: 'Zakup pierwszego wózka z lodami, który pozwala na sprzedaż lodów na ulicach miasta.',
      image: '/images/timeline/1955-first-cart.jpg',
      imageAlt: 'Pierwszy wózek z lodami Eskimo'
    },
    {
      year: '1970',
      title: 'Rozszerzenie produkcji',
      description: 'Otwarcie większej lodziarni i wprowadzenie nowych smaków lodów tradycyjnych.',
      image: '/images/timeline/1970-expansion.jpg',
      imageAlt: 'Rozszerzenie produkcji lodów w 1970'
    },
    {
      year: '1985',
      title: 'Tradycja rodzinna',
      description: 'Przejęcie firmy przez drugie pokolenie rodziny Kowalskich, kontynuacja tradycji.',
      image: '/images/timeline/1985-family-tradition.jpg',
      imageAlt: 'Rodzinna tradycja lodów Eskimo'
    },
    {
      year: '2000',
      title: 'Nowe smaki',
      description: 'Wprowadzenie nowoczesnych smaków lodów, zachowując tradycyjne receptury.',
      image: '/images/timeline/2000-new-flavors.jpg',
      imageAlt: 'Nowe smaki lodów Eskimo'
    },
    {
      year: '2015',
      title: 'Certyfikat jakości',
      description: 'Otrzymanie certyfikatu "Tradycyjny Produkt" za zachowanie oryginalnych receptur.',
      image: '/images/timeline/2015-quality-certificate.jpg',
      imageAlt: 'Certyfikat jakości Eskimo'
    },
    {
      year: '2023',
      title: 'Dziedzictwo smaku',
      description: '76 lat tradycji w produkcji rzemieślniczych lodów, przekazywanych z pokolenia na pokolenie.',
      image: '/images/timeline/2023-legacy.jpg',
      imageAlt: 'Dziedzictwo smaku Eskimo'
    }
  ];

  return (
    <div className="timeline-container">
      <h3>Nasza Historia</h3>
      <div className="timeline">
        {timelineEvents.map((event, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <div className="timeline-year">{event.year}</div>
              <h4>{event.title}</h4>
              <div className="timeline-image">
                <img 
                  src={event.image} 
                  alt={event.imageAlt}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="timeline-image-placeholder">
                  <span>📸</span>
                  <p>Zdjęcie z {event.year}</p>
                </div>
              </div>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline; 