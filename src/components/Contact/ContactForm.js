import React from 'react'
import "./ContactFormStyles.css"

const ContactForm = () => {
  return (
    <div className='main-container'>
        <div className='section-container'>
            <h4>Contact Us</h4>
            <div className="form-container">
                <form>
                    <label>Your Name</label>
                    <input type="text"></input>
                    <label>Email</label>
                    <input type="text"></input>
                    <label>Subject</label>
                    <input type="text"></input>
                    <label>Message</label>
                    <textarea rows="6" placeholder="Type your message here"/>
                    <button className="btn">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactForm