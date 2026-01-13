import React from 'react'
import './Contact.css'
import mailImg from '../../assets/mail.png'
import mailIcon from '../../assets/mail-icon.jpeg'
import phoneIcon from '../../assets/phone-icon.jpeg'

const Contact = () => {
  return (
    <div className='contact'>
      <h1>Get In Touch</h1>
      
      <div className="contact-desc">

        <div className="contact-left">
          <div className="contact-left-heading">
            <h2>Send us a message</h2>
            <img src={mailImg} alt="" />
          </div>
          <p>
            Have a question ? Fill out the form 
             below and we'll get back to you as soon as possible.
          </p>
          <div className="contact-email">
            <img src={mailIcon} alt="" />
            <p>contact@lifeshadeshospital.com</p>
          </div>

          <div className="contact-phone">
            <img src={phoneIcon} alt="" />
            <p>+1-234-567-890</p>
          </div>
        </div>

        <div className="contact-right">
          <form action="">
            <input type="text" placeholder='Your Name' required />
            <input type="email" placeholder='Your Email' required />
            <textarea name="" id="" cols="30" rows="10" placeholder='Your Message' required></textarea>
            <button type='submit'>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact