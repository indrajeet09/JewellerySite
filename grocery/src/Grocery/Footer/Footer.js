import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
          <section className="footer">
              <div className="box-container">
                <div className="box">
                  <h3>find us here</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In accusamus praesentium.</p>
                  <div className="share">
                    <a href="#" className="fab fa-facebook-f" />
                    <a href="#" className="fab fa-twitter" />
                    <a href="#" className="fab fa-instagram" />
                    <a href="#" className="fab fa-linkedin" />
                  </div>
                </div>
                <div className="box">
                  <h3>contact us</h3>
                  <p>8485083370</p>
                  <a href="#" className="link">admin@education.opticalarc.com</a>
                </div>
                <div className="box">
                  <h3>localization</h3>
                  <p> 314, 315, Gera’s Imperium Alpha, EON IT Free Zone, <br />
                  Vitthal Nagar, Kharadi,<br />
                  Pune, Maharashtra 411014
                  </p>
                </div>
              </div>
              <div className="credit">created by <span> Optical arc pvt ltd </span> all rights reserved!</div>
            </section>
    </div>
  )
}

export default Footer