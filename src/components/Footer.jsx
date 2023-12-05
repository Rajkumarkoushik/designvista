import React from "react";

function Footer() {
  return (
    <>
      {/* Footer section starts. */}
      <footer className="footer-main">
        <section className="container py-4">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-12">
              <img className="logo" src="\assets\logo\dv-logo.png" alt="Logo" />
              <div className="header-main-icons">
                <a href="facebook.com">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="instagram.com">
                  {" "}
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 footer-address">
              <ul>
                <li>
                  <a href="#about-main">About Us</a>
                </li>
                <li>
                  <a href="#services-main">Our Services</a>
                </li>
                <li>
                  <a href="privacy-main">Privacy Policy</a>
                </li>
              </ul>
            </div> 
            <div className="col-lg-3 col-md-4 col-6 footer-address">
              <ul>
                <li>
                  <a href="projects-main">Projects</a>
                </li>
                <li>
                  <a href="terms-main">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#contact-main">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 footer-address col-12">
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
          </div>
        </section>
      </footer>

      <section className="copy-main">
        <div className="container py-2">
          <p className="text-center m-0">
            {" "}
            &copy; <span>Design Vista</span> 2024. All copy Rights Reserved |
            Designed By{" "}
            <a
              href="https://developerkoushik.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <span> Developer Koushik</span>
            </a>
          </p>
        </div>
      </section>
      {/* Footer section ends. */}
    </>
  );
}

export default Footer;
