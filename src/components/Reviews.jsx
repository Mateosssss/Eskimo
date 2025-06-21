import React from 'react';
import './Reviews.css';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      author: 'Anna Kowalska',
      rating: 5,
      date: '2 tygodnie temu',
      text: 'Najlepsze lody w mieście! Tradycyjny smak, który przypomina dzieciństwo. Polecam wszystkim!',
      avatar: '👩‍🦰'
    },
    {
      id: 2,
      author: 'Marek Nowak',
      rating: 5,
      date: '1 miesiąc temu',
      text: 'Świetna jakość i smak. Lody są kremowe i naturalne. Warto odwiedzić!',
      avatar: '👨‍🦱'
    },
    {
      id: 3,
      author: 'Katarzyna Wiśniewska',
      rating: 5,
      date: '3 tygodnie temu',
      text: 'Prawdziwe rzemieślnicze lody! Smakują jak te z mojego dzieciństwa. Polecam smak pistacjowy!',
      avatar: '👩‍🦳'
    },
    {
      id: 4,
      author: 'Piotr Zieliński',
      rating: 5,
      date: '2 miesiące temu',
      text: 'Fantastyczne lody, świetna obsługa. Warto czekać w kolejce!',
      avatar: '👨‍🦲'
    },
    {
      id: 5,
      author: 'Magdalena Kaczmarek',
      rating: 5,
      date: '1 tydzień temu',
      text: 'Najlepsze lody w okolicy! Naturalne składniki i tradycyjne receptury. Polecam!',
      avatar: '👩‍🦱'
    },
    {
      id: 6,
      author: 'Tomasz Lewandowski',
      rating: 5,
      date: '3 tygodnie temu',
      text: 'Świetna jakość, autentyczny smak. Lody jak za dawnych lat!',
      avatar: '👨‍🦰'
    }
  ];

  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  return (
    <section id="reviews" className="reviews-section">
      <div className="reviews-content">
        <h2>Opinie naszych klientów</h2>
        <p>
          Sprawdź, co mówią o nas klienci na Google Maps. Jesteśmy dumni z każdej pozytywnej opinii 
          i staramy się utrzymać najwyższą jakość naszych lodów.
        </p>
        
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="review-avatar">
                  {review.avatar}
                </div>
                <div className="review-info">
                  <h4>{review.author}</h4>
                  <div className="review-rating">
                    {renderStars(review.rating)}
                  </div>
                  <span className="review-date">{review.date}</span>
                </div>
              </div>
              <div className="review-text">
                <p>"{review.text}"</p>
              </div>
              <div className="review-source">
                <span>📍 Google Maps</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="reviews-cta">
          <p>Masz własną opinię? Podziel się nią z nami!</p>
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="review-button"
          >
            Napisz opinię na Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews; 