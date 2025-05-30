import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="content-page">
      <section className="contact">
        <h2>Contact Us</h2>
        <ContactForm />
        <div className="map-container">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..."
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
