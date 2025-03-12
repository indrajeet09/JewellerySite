import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <section className="banner-container">
                  <div className="banner">
                <img src="images/banner1.png" alt="" />
                <div className="content">
                  <span>limited sales</span>
                  <h3>Vegetables</h3>
                  <a href="#" className="btn">shop now</a>
                </div>
              </div>
              <div className="banner">
                <img src="images/banner2.png" alt="" />
                <div className="content">
                  <span>limited sales</span>
                  <h3>fruits</h3>
                  <a href="#" className="btn">shop now</a>
                </div>
              </div>
              <div className="banner">
                <img src="images/banner3.png" alt="" />
                <div className="content">
                  <span>limited sales</span>
                  <h3>assorted</h3>
                  <a href="#" className="btn">shop now</a>
                </div>
              </div>
    </section>
  );
}

export default Banner;
