import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Inicjalizacja EmailJS
  useEffect(() => {
    emailjs.init('_tW4Sr4Nut3CmrT1V');
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Eskimo Lody',
        to_email: 'kontakt@eskimo-lody.pl'
      };
      
      await emailjs.send(
        'service_yvej7u9',
        'template_xdkdst9',
        templateParams,
        '_tW4Sr4Nut3CmrT1V'
      );

      setIsSubmitted(true);
    } catch (error) {
      setError(`Błąd wysyłania wiadomości: ${error.text || error.message || 'Nieznany błąd'}`);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="contact-section">
        <div className="confirmation-message">
          <h2>Dziękujemy za wiadomość!</h2>
          <p>Odpowiemy na Twoją wiadomość w najbliższym czasie.</p>
          <button 
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ name: '', email: '', subject: '', message: '' });
            }}
            className="submit-btn"
          >
            Wyślij kolejną wiadomość
          </button>
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
                Stanisława Wyspiańskiego 22<br />
                80-434 Gdańsk<br />
                Polska<br /><br />
                Tel: +48 58 341 89 10<br />
                Email: kontakt@eskimo-lody.pl
              </div>
            </div>
            
            <div className="contact-form">
              {error && <div className="error-message">{error}</div>}
              
              <div className="form-group">
                <label htmlFor="name">Imię i nazwisko</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
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
                  disabled={isLoading}
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
                  disabled={isLoading}
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
                  disabled={isLoading}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isLoading}
              >
                {isLoading ? 'Wysyłanie...' : 'Wyślij wiadomość'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 