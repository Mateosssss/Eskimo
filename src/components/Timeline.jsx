import React from 'react';
import './Timeline.css';
import zalozenieImage from '/images/timeline/zalozenie.jpeg';
import nowaLokalizacjaImage from '/images/timeline/nowa_lokalizacja.png';
import przejecieImage from '/images/timeline/przejecie.png';

const Timeline = () => {
  const timelineEvents = [
    {
      year: '1947',
      title: 'Założenie firmy',
      description: 'Rodzina Gawlik zakłada pierwszą lodziarnię w Oliwie',
      image: zalozenieImage
    },
    {
      year: '1990',
      title: 'Nowa lokalizacja',
      description: 'Syn Józefa Andrzej Gawlik zakłada nową lodziarnię we Wrzeszczu',
      image: nowaLokalizacjaImage
    },
    {
      year: '2020',
      title: 'Przejęcie przez syna',
      description: 'Syn Piotr Gawlik przejmuje lody Eskimo',
      image: przejecieImage
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