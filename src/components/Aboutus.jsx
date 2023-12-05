import React from 'react'

function Aboutus() {
  return (
      <>
          {/* About section starts. */}
          <section className='about-main' id='about-main'>
              <div className="container py-5">
                  <div className="row g-5">
                      <div className="col-lg-6">
                          <img className='img-fluid' src="\assets\about-image.png" alt="About-pic" />
                      </div>
                      <div className="col-lg-6">
                          <h2>ABOUT <span>DESIGN VISTA</span></h2>
                          <p>As we are young architects want to prove ourselves in the competition world with the idea of imposing different styles of architecture like contemporary,minimalist and modern architecture in designs.</p>
                          <p>With a network of skilled fabricators, the team collaborates with craftsmen and artists across all mediums. well recognized for their work in interior design, lighting, and furniture. the office brings their meticulous approach to office spaces, interiors spaces and residences.</p>
                      </div>
                  </div>
              </div>
          </section>
      {/* About section ends. */}
      </>
  )
}

export default Aboutus