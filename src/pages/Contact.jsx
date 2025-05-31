import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="content-page">
      <section className="contact">
        <h2>Get in Touch</h2>
        <p className="contact-intro">
          We'd love to hear from you. Feel free to contact us using any of the
          methods below or fill out the contact form.
        </p>

        <div className="contact-container">
          <div className="contact-info">
            <div className="info-card">
              <FontAwesomeIcon icon={faLocationDot} className="contact-icon" />
              <h3>Our Location</h3>
              <p>Shop Nos. LS 10, 48, 77, 78</p>
              <p>Kado Fish Market, Gwarinpa, Abuja</p>
            </div>

            <div className="info-card">
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <h3>Phone</h3>
              <p>+234 703 2920881</p>
              <p>+234 809 4575669</p>
            </div>

            <div className="info-card">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <h3>Email</h3>
              <p>info@allahinnaso.com</p>
              <p>allahinnasoniglimited@gmail.com</p>
            </div>

            <div className="info-card">
              <FontAwesomeIcon icon={faClock} className="contact-icon" />
              <h3>Business Hours</h3>
              <p>Monday - Sunday: 6:00 AM - 6:00 PM</p>
              {/* <p>Saturday: 9:00 AM - 2:00 PM</p> */}
            </div>
          </div>

          <div className="contact-form-container">
            <h3>Send us a Message</h3>
            <ContactForm />
          </div>
        </div>

        <div className="map-container">
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Abuja,Nigeria"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
