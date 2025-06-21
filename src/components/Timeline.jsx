import React from 'react';
import './Timeline.css';
import zalozenieImage from '/images/timeline/zalozenie.jpeg';

const Timeline = () => {
  const timelineEvents = [
    {
      year: '1947',
      title: 'Założenie firmy',
      description: 'Rodzina Kowalskich zakłada pierwszą lodziarnię w centrum miasta.',
      image: zalozenieImage
    },
    {
      year: '1960',
      title: 'Rozwój receptur',
      description: 'Powstają pierwsze autorskie receptury lodów, które przetrwają do dziś.',
      image: null
    },
    {
      year: '1985',
      title: 'Nowa lokalizacja',
      description: 'Przeprowadzka do większego lokalu i modernizacja sprzętu.',
      image: null
    },
    {
      year: '2000',
      title: 'Tradycja i nowoczesność',
      description: 'Łączymy tradycyjne receptury z nowoczesnymi technologiami.',
      image: null
    },
    {
      year: '2023',
      title: '75 lat tradycji',
      description: 'Obchodzimy 75-lecie istnienia firmy, zachowując autentyczny smak.',
      image: null
    }
  ];

  return (
    <div className="timeline-section">
      <h3>Nasza Historia</h3>
      <div className="timeline">
        {timelineEvents.map((event, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <div className="timeline-year">{event.year}</div>
              <h4>{event.title}</h4>
              <p>{event.description}</p>
              {event.image && (
                <div className="timeline-image">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline; 