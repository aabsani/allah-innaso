import React from 'react';

export default function ContactForm() {
  return (
    <form className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Email Address" required />
      <textarea placeholder="Your Message" required />
      <button type="submit">Send</button>
    </form>
  );
}