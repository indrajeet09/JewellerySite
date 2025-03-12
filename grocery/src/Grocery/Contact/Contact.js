import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div>
         <section className="contact" id="contact">
              <h1 className="heading"> contact <span> now </span> </h1>
              <div className="row">
                <div className="image">
                  <img src="images/contact.png" alt="" />
                </div>
                <form action>
                  <div className="inputBox">
                    <input type="text" placeholder="first name" />
                    <input type="text" placeholder="last name" />
                  </div>
                  <div className="inputBox">
                    <input type="email" placeholder="email address" />
                    <input type="number" placeholder="phone" />
                  </div>
                  <textarea placeholder="message" id cols={30} rows={10} defaultValue={""} />
                  <input type="submit" defaultValue="order now" className="btn" />
                </form>
              </div>
            </section>
    </div>
  )
}

export default Contact