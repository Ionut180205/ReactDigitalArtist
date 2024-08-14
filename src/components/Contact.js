import React from 'react';
import './Contact.css'; // Importă stilurile Contact

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>Email: <a href="mailto:example@example.com" className="contact-email">ionut.cioarsa@gmail.com</a></p>
    </div>
  );
}

export default Contact;
