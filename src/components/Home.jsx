import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Aboutus from "./Aboutus";
import Footer from "./Footer";
import Projects from "./Projects";
import Services from "./Services";
import Form from "./Form";

function Home() {
  return (
    <>
      {/* Banner section starts. */}
      <Carousel className="banner-main">
        <div className="banner-main-image">
          <img src="\assets\banner-images\banner1.jpg" alt="Banner-pic" />
          <div className="banner-main-content">
            <h1>RESIDENCE @ SRIKAKULAM MP RESIDENCE</h1>
            <button className="button-bt">
              <a href="tel:- +91 8143123099">GET IN TOUCH</a>
            </button>
          </div>
        </div>
        <div className="banner-main-image">
          <img src="\assets\banner-images\banner2.jpg" alt="Banner-pic" />
          <div className="banner-main-content">
            <h1>RESIDENCE @ RAJAHMUNDRY SRINIVAS RESIDENCE</h1>
            <button className="button-bt">
              <a href="tel:- +91 8143123099">GET IN TOUCH</a>
            </button>
          </div>
        </div>
        <div className="banner-main-image">
          <img src="\assets\banner-images\banner3.jpg" alt="Banner-pic" />
          <div className="banner-main-content">
            <h1>APARTMENT @ GANNAVARAM SREE ENCLAVE</h1>
            <button className="button-bt">
              <a href="tel:- +91 8143123099">GET IN TOUCH</a>
            </button>
          </div>
        </div>
      </Carousel>
      {/* Banner section ends. */}
      {/* About section */}
      <Aboutus />
      <Services />
      <Projects />
      <Form/>
      <Footer />
    </>
  );
}

export default Home;
