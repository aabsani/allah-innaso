import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-logo-desc">
            <img src="./images/logo-1.jpeg" alt="logo" className="logo" />
            <p>
              Reach out and explore our wide range of products at Allah Inna'so
            </p>
          </div>
          <div className="footer-nav-sections">
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Home</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>Fish Market Karimo Abuja</p>
            <p>080803839339</p>
            <p>080803839339</p>
            <p>080803839339</p>
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
