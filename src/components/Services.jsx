import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Services() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      {/* Our services section starts. */}
      <section className="services-main" id="services-main">
        <div className="container py-5">
          <div className="text-center">
            <h2 className=" heading">OUR SERVICES</h2>
            <p className="text-center">
              We are a full service architectural design firm for all
              Residential, Commercial, Pre Cast Compound Walls,Cost consultancy
              budget, 3D Visualization,Quality Control, Liaisoning and approval
              & Quickest turn around.
            </p>
          </div>
          <div className="py-3">
            <Carousel responsive={responsive}>
              <div className="services-main-sub">
                <img src="\assets\projects-images\Pr-9.jpg" alt="Residential" />
                <div className="services-main-content">
                  <img src="\assets\icons\icon-1.png" alt="icon" />
                  <h6>ARCHITECTURE</h6>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vitae, ab odit itaque necessitatibus animi quisquam
                    exercitationem quidem molestiae perferendis nulla?
                  </p>
                </div>
              </div>
              <div className="services-main-sub">
                <img
                  src="\assets\projects-images\Pr-16.png"
                  alt="Residential"
                />
                <div className="services-main-content">
                  <img src="\assets\icons\icon-2.png" alt="icon" />
                  <h6>PLANNING</h6>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sit, doloremque a! Ad, earum! Porro veritatis cumque
                    officia? Iure, unde laudantium!
                  </p>
                </div>
              </div>
              <div className="services-main-sub">
                <img
                  src="\assets\projects-images\Pr-22.png"
                  alt="Residential"
                />
                <div className="services-main-content">
                  <img src="\assets\icons\icon-3.png" alt="icon" />
                  <h6>PRECAST COMPOUND WALLS</h6>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ratione ullam atque temporibus expedita nobis dolores et
                    aliquid quae, qui quod!
                  </p>
                </div>
              </div>
              <div className="services-main-sub">
                <img
                  src="\assets\projects-images\Pr-27.jpg"
                  alt="Residential"
                />
                <div className="services-main-content">
                  <img src="\assets\icons\icon-4.png" alt="icon" />
                  <h6>3D VISUALIZATION</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni ullam velit tenetur nam voluptatum voluptatem,
                    quisquam reprehenderit tempora cupiditate itaque!
                  </p>
                </div>
              </div>
              <div className="services-main-sub">
                <img
                  src="\assets\projects-images\Pr-30.png"
                  alt="Residential"
                />
                <div className="services-main-content">
                  <img src="\assets\icons\icon-5.png" alt="icon" />
                  <h6>QUALITY CONTROL</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur laudantium maiores quis libero dicta dignissimos
                    earum ipsa doloremque rem vitae.
                  </p>
                </div>
              </div>
              <div className="services-main-sub">
                <img
                  src="\assets\projects-images\Pr-35.png"
                  alt="Residential"
                />
                <div className="services-main-content">
                  <img src="\assets\icons\icon-1.png" alt="icon" />
                  <h6>EXTERIOR</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur aliquid reprehenderit dolorem asperiores
                    nesciunt odio numquam necessitatibus aliquam vitae corrupti!
                  </p>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      {/* Our services section ends. */}
    </>
  );
}

export default Services;
