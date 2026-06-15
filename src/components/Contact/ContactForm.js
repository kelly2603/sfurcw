import React from 'react'
import "./ContactFormStyles.css"

const ContactForm = () => {
  return (
    <div className='main-container'>
        <div className='section-container contact-container'>
            <h4>Let's get in touch</h4>
            <div className="form-container">
              <form action="https://formspree.io/f/xvgbnkyv" method="POST">
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" name="name" required />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" required />
                  </div>
                </div>
                
                <label>Subject</label>
                <input type="text" name="subject" required />

                <label>Message</label>
                <textarea name="message" rows="6" placeholder="Type your message here" required />

                <button type="submit" className="btn-secondary">Submit</button>
              </form>
            </div>

        </div>
    </div>
  )
}

export default ContactForm