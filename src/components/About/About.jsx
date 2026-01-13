import React from 'react'
import './About.css'
import aboutImg_1 from '../../assets/about_1.png'
import aboutImg_2 from '../../assets/about_2.png'
import aboutImg_3 from '../../assets/about_3.png'
import aboutImg_4 from '../../assets/about_4.png'

const About = () => {
  return (
    <div className='about' id='about'>
        <h1>Why LifeShades Hospital?</h1>
        
        <div className="about-desc">
            <div className="about-desc-div">
                <img src={aboutImg_1} alt="" />
                <h2>Complete Healthcare Solution</h2>
                <p>Fully integrated modular software architecture with seamless 
                    data flow between departments for effortless patient data
                    management.</p>
            </div>

            <div className="about-desc-div">
                <img src={aboutImg_2} alt="" />
                <h2>Patient-Centric Design</h2>
                <p>24/7 appointment booking, instant notifications, feedback 
                    tools, and telemedicine platforms for higher patient 
                    engagement.</p>
            </div>

            <div className="about-desc-div">
                <img src={aboutImg_3} alt="" />
                <h2>Established Trust</h2>
                <p>Established Healthcare solutions provider, trusted by 
                    renowned clinics, hospitals, and multi-chain facilities,
                     with a broad customer base spanning India and 
                     overseas.</p>
            </div>

            <div className="about-desc-div">
                <img src={aboutImg_4} alt="" />
                <h2>Affordable</h2>
                <p>Transparent, and modular pricing for scalability with a 
                    low upfront investment.</p>
            </div>
        </div>
    </div>
  )
}

export default About