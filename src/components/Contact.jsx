import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import "../style/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

const saveContactMessage = async () => {
  const fullName = `${formData.firstName} ${formData.lastName}`.trim();

  const { error } = await supabase.from("contact_messages").insert([
    {
      name: fullName,
      email: formData.email,
      message: formData.message,
    },
  ]);

  if (error) {
    console.error("Error saving contact message:", error);
    return false;
  }

  return true;
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage("");

    const success = await saveContactMessage();

    if (success) {
      setStatusMessage("Mesajul a fost trimis cu succes!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } else {
      setStatusMessage("A apărut o eroare. Încearcă din nou.");
    }

    setIsLoading(false);
  };

  return (
    <main className="page">
      <section className="page-card contact-card">
        <h1 className="page-title">Contactează-ne</h1>

        <p className="page-text">
          Trimite-ne un mesaj, iar formularul se va adapta automat pe telefon,
          tabletă și desktop.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">Nume</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Prenume</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group full">
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

          <div className="form-group full">
            <label htmlFor="message">Mesaj</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button className="contact-button" type="submit" disabled={isLoading}>
            {isLoading ? "Se trimite..." : "Trimite"}
          </button>

          {statusMessage && (
            <p className="contact-status">{statusMessage}</p>
          )}
        </form>
      </section>
    </main>
  );
}

export default Contact;


/* import React, { useState } from "react";
import "../style/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <main className="page">
      <section className="page-card contact-card">
        <h1 className="page-title">Contactează-ne</h1>
        <p className="page-text">
          Trimite-ne un mesaj, iar formularul se va adapta automat pe telefon,
          tabletă și desktop.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">Nume</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Prenume</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group full">
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

          <div className="form-group full">
            <label htmlFor="message">Mesaj</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button className="contact-button" type="submit">
            Trimite
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
 */