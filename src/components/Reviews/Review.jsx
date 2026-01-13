import React from 'react'
import './Review.css'

const Review = () => {
  return (
    <div className='review' id='review'>
      <h1>Read What Our Customers Say</h1>

      <div className="review-desc">

        <div className="review-desc-div">
          <h3>John Doe</h3>
          <p>"LifeShades Hospital has transformed the way we manage patient data. 
            The seamless integration between departments has made our workflow 
            incredibly efficient."</p>
        </div>

        <div className="review-desc-div">
          <h3>Jane Smith</h3>
          <p>"The patient-centric design of LifeShades Hospital's software has 
            significantly improved our patient engagement. The 24/7 appointment 
            booking and instant notifications are game-changers."</p>
        </div>

        <div className="review-desc-div">
          <h3>Michael Johnson</h3>
          <p>"As a healthcare provider, trust is paramount. LifeShades Hospital's 
            established reputation and broad customer base give us confidence in 
            their solutions."</p>
        </div>
      </div>
    </div>
  )
}

export default Review