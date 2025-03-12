import React from 'react'
import './Blog.css'

const Blog = () => {
  return (
    <div>
         <section className="blog" id="blog">
              <h1 className="heading"> our <span> blog</span> </h1>
              <div className="box-container">
                <div className="box">
                  <div className="image">
                    <img src="images/blog1.png" alt="" />
                  </div>
                  <div className="content">
                    <div className="icons">
                      <a href="#"> <i className="fas fa-user" /> by admin </a>
                    </div>
                    <h3>healthy vegetables to try</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptates voluptatum magni similique beatae doloribus qui facilis officia.</p>
                    <a href="#" className="btn"> read more </a>
                  </div>
                </div>
                <div className="box">
                  <div className="image">
                    <img src="images/blog2.png" alt="" />
                  </div>
                  <div className="content">
                    <div className="icons">
                      <a href="#"> <i className="fas fa-user" /> by admin </a>
                    </div>
                    <h3>healthy vegetables to try</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptates voluptatum magni similique beatae doloribus qui facilis officia.</p>
                    <a href="#" className="btn"> read more </a>
                  </div>
                </div>
                <div className="box">
                  <div className="image">
                    <img src="images/blog3.png" alt="" />
                  </div>
                  <div className="content">
                    <div className="icons">
                      <a href="#"> <i className="fas fa-user" /> by admin </a>
                    </div>
                    <h3>healthy vegetables to try</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit voluptates voluptatum magni similique beatae doloribus qui facilis officia.</p>
                    <a href="#" className="btn"> read more </a>
                  </div>
                </div>
              </div>
            </section>
    </div>
  )
}

export default Blog