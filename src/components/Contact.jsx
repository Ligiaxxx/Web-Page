import React, { useState } from 'react';
import '../style/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aici poți adăuga logica pentru trimiterea formularului (de exemplu, o solicitare API)
    console.log('Form submitted:', formData);
    // Resetăm formularul după trimitere
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-container">
      <h2>Contactează-ne</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">Nume:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Prenume:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Mesaj:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Trimite</button>
      </form>
    </div>
  );
}

export default Contact;
