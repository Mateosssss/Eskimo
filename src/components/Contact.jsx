import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSent) return;
    
    setIsSent(true);
  };

  const handleNewMessage = () => {
    setIsSent(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2>Napisz do nas</h2>
        {isSent ? (
          <div className="confirmation-message">
            <h3>Dziękujemy!</h3>
            <p>Twój list został pomyślnie wysłany.</p>
            <button onClick={handleNewMessage} className="submit-btn">Napisz nowy list</button>
          </div>
        ) : (
        <>
        <p>
          Masz pytanie lub chcesz zaprosić nasz wózek na swoją imprezę? Wypełnij formularz, a my skontaktujemy się z Tobą najszybciej jak to możliwe!
        </p>
        <div className="letter-container">
            <div className="letter-form">
                <div className="address-area">
                    <div className="sender-address">
                        <strong>Eskimo Lody</strong><br />
                        ul. Wyspiańskiego 22<br />
                        80-434 Gdańsk<br />
                        Polska
                    </div>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Twoje imię i nazwisko</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Twój adres email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Treść listu</label>
                        <textarea id="message" name="message" rows="8" value={formData.message} onChange={handleChange} required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Wyślij List</button>
                </form>
            </div>
        </div>
        </>
        )}
      </div>
    </section>
  );
};

export default Contact; 