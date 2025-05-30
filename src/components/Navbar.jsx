import React from "react";

import { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaBars } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  // managing scrolling state
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // useEffect for listening to scrolling event, to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      // if user scrolls more than 50px vertically, scrolled becomes true
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`navbar ${scrolled ? "navbar-scrolled" : ""} ${
        mobileMenuOpen ? "mobile-menu-open" : ""
      }`}
    >
      <NavLink to="/">
        <img src="/images/logo-1.jpeg" alt="logo" className="logo" />
      </NavLink>

      <button className="mobile-menu-button" onClick={toggleMobileMenu}>
        {/* {mobileMenuOpen ? <FaTimes /> : <FaBars />} */}
      </button>

      <ul className={mobileMenuOpen ? "show-mobile-menu" : ""}>
        <li>
          <NavLink
            to="/"
            className="nav-item"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="nav-item"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className="nav-item"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/gallery" className="nav-item">
            Gallery
          </NavLink>
        </li> */}
        <li>
          <NavLink
            to="/contact"
            className="nav-item"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>

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
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaXTwitter size={12} />
        </a>
      </div>
    </nav>
  );
}
