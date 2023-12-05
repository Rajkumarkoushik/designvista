import React, { useState } from "react";

function Navigation() {
  const [hamburger, setHamburger] = useState(false);
  return (
    <>
      {/* Header section starts. */}
      <header className="header-main">
        <section className="container display-flex py-2">
          <div className="display-flex gap15">
            <p>
              <a href="tel:- +91 8143123099">+91 8143123099</a>
            </p>
            <p>
              <a href="mailto:- designvistaarchitects@gmail.com">
                designvistaarchitects@gmail.com
              </a>
            </p>
            <p>
              <a href="">
                D.NO:67-1-3/2,near santhi ashram,ashok nagar,kakinada 533006
              </a>
            </p>
          </div>
          <div className="header-main-icons">
            <a href="facebook.com">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="instagram.com">
              {" "}
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </section>
      </header>
      {/* Header section ends. */}

      {/* Navigation section starts. */}
      <nav className="navigation-main">
        <section className="container py-2 display-flex">
          <div>
            <a href="/">
              <img className="logo" src="\assets\logo\dv-logo.png" alt="Logo" />
            </a>
          </div>
          <div>
            <ul className="display-flex gap25 nav-links">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about-main">About</a>
              </li>
              <li>
                <a href="#services-main">Services</a>
              </li>
              <li>
                <a href="#projects-main">Projects</a>
              </li>
              <li>
                <a href="#testimonials-main">Testimonials</a>
              </li>
              <li>
                <a href="#contact-main">Contact Us</a>
              </li>
            </ul>
          </div>
          {hamburger && (
            <div>
              <ul className="hamburger-list">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#about-main">About</a>
                </li>
                <li>
                  <a href="#services-main">Services</a>
                </li>
                <li>
                  <a href="#projects-main">Projects</a>
                </li>
                <li>
                  <a href="#testimonials-main">Testimonials</a>
                </li>
                <li>
                  <a href="#contact-main">Contact Us</a>
                </li>
              </ul>
            </div>
          )}
          <div className={hamburger ? "ham-remove" : "hamburger"} onClick={() => setHamburger(!hamburger)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </section>
      </nav>
      {/* Navigation section ends. */}
    </>
  );
}

export default Navigation;
