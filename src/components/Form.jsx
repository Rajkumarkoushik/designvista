import React from "react";

function Form() {
  return (
    <>
      {/* contact section starts. */}
      <section className="contact-main" id="contact-main">
        <h2 className="heading text-center">CONTACT US</h2>
        <div className="contact-main-head">
          <div className="container py-5">
            <div className="row g-5 contact-main-sec">
                          <div className="col-lg-4">
                <form action="" className="contact-main-form">
                  <div>
                    <label htmlFor="name">Name: </label> <br />
                    <input type="text" placeholder="Your Name" required />
                  </div>
                  <div>
                    <label htmlFor="name">Number: </label> <br />
                    <input type="text" placeholder="Your Number" required />
                  </div>
                  <div>
                    <label htmlFor="name">Email: </label> <br />
                    <input type="mail" placeholder="Your Mail" required />
                  </div>
                  <div>
                    <label htmlFor="">Message:</label> <br />
                    <textarea
                      name=""
                      id=""
                      placeholder="Your Message......"
                    ></textarea>
                  </div>
                  <button className="button-bt" type="submit">
                    Submit
                  </button>
                </form>
              </div>
              <div className="col-lg-8 contact-main-map">
              <div className="content">
                              <h4>Get in Touch</h4>
                <p>
                  End-to-end & hassle-free architectural design,space
                  planning,exterior & interior design experience.
                </p>
               </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11905.736947372236!2d82.21373276153439!3d16.96489928320703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a38281abaa83fc5%3A0x101402552261beb0!2sAShok%20Nagar%2C%20Kakinada%2C%20Andhra%20Pradesh!5e1!3m2!1sen!2sin!4v1701407007519!5m2!1sen!2sin"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact section ends. */}
    </>
  );
}

export default Form;
