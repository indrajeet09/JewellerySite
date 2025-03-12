import React from 'react';
import'./About.css'

const About = () => {
  return (
    <section className="about" id="about">
     <h1 className="heading"> <span>about </span> us </h1>
              <div className="row">
                <div className="content">
                  <h3>we make organic food in market</h3>
                  <div className="divider" />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aperiam rem cupiditate sequi porro assumenda tenetur rerum modi, pariatur enim quis officiis nesciunt et</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo totam aut voluptatum ipsa dolorum.</p>
                  <a href="#" className="btn">read more</a>
                </div>
                <div className="image">
                  <img src="images/about1.png" alt="" />
                </div>
                <div className="image">
                  <img src="images/about2.png" alt="" />
                </div>
              </div>
    </section>
  );
}

export default About;
