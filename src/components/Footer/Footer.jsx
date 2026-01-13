import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.jpeg'
import facebook from '../../assets/facebook.jpeg'
import twitter from '../../assets/x.jpeg'
import linkedin from '../../assets/linkedin.jpeg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-left">
          <div className="footer-top-heading">
            <img src={logo} alt="" />
            <h2>LifeShades Hospital</h2>
          </div>
          <p>contact@lifeshadeshospital.com</p>
          <p>+1-234-567-890</p>
          <div className="footer-social-links">
            <a href="#"><img src={facebook} alt="" /></a>
            <a href="#"><img src={twitter} alt="" /></a>
            <a href="#"><img src={linkedin} alt="" /></a>
          </div>
        </div>

        <div className="footer-top-links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#review">Reviews</a></li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>&copy; 2025 LifeShades Hospital. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer