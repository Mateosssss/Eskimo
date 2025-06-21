import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tutaj można dodać logikę wysyłania formularza
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="contact-section">
        <div className="confirmation-message">
          <h2>Dziękujemy za wiadomość!</h2>
          <p>Odpowiemy na Twoją wiadomość w najbliższym czasie.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2>Kontakt / Współpraca</h2>
        <p>
          Interesuje Cię współpraca lub masz pytania? Napisz do nas! 
          Jesteśmy otwarci na nowe propozycje i chętnie odpowiemy na wszystkie pytania.
        </p>
        
        <div className="letter-container">
          <form className="letter-form" onSubmit={handleSubmit}>
            <div className="address-area">
              <div className="sender-address">
                <strong>Eskimo Lody</strong><br />
                ul. Lodowa 15<br />
                00-001 Warszawa<br />
                Polska<br /><br />
                Tel: +48 123 456 789<br />
                Email: kontakt@eskimo-lody.pl
              </div>
            </div>
            
            <div className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Imię i nazwisko</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Temat</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Wiadomość</label>
                <textarea
                  id="message"
                  name="message"
                  rows="8"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-btn">
                Wyślij wiadomość
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 