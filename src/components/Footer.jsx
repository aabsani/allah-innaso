import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-logo-desc">
            <img src="./images/logo-1.jpeg" alt="logo" className="logo" />
            <p>
              Reach out and explore our wide range of frozen agro products at
              Allah Inna'so, home for healthy and premium quality frozen foods
            </p>
          </div>
          <div>
            <ul className="footer-nav-sections">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              {/* <li>
                <Link to="/gallery">Gallery</Link>
              </li> */}
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>
              Shop Nos. LS 10, 48, 77, 78, Kado Fish Market, Gwarinpa, Abuja.
            </p>
            <p>+234 703 2920881</p>
            <p>+234 809 4575669</p>
            <p>allahinnasoniglimited@gmail.com</p>
            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={12} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={12} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Allah Inna’so Nigeria Limited. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
