import React, { useState } from "react";
import './Contact.css'; // Import styles for Contact

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact">
      <h1>Let’s talk about</h1>
      <h2>Love to hear from you!</h2>
      <div className="contact-info">
        <h3>Our Location</h3>
        <p>Mumbai - 400018, Maharashtra, India</p>
        <h3>How Can We Help?</h3>
        <p>contact@vehinova.dev</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h3>Send us a Message</h3>
        <label>
          Full Name*
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email*
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone*
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message*
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
