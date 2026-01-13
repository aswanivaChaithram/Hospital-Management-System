import React from 'react'
import './Blog.css'
import blogImg_1 from '../../assets/blog_1.jpg'
import blogImg_2 from '../../assets/blog_2.jpg'
import blogImg_3 from '../../assets/blog_3.jpg'

const Blog = () => {
  return (
    <div className='blog' id='blog'>
      <h1>Latest Blog</h1>

      <div className="blog-desc">

        <div className="blog-div">
          <img src={blogImg_1} alt="" />
          <h3>Best Hospital Management Software</h3>
          <button>Read More</button>
        </div>

        <div className="blog-div">
          <img src={blogImg_2} alt="" />
          <h3>Top 10 Features of LifeShades HMS</h3>
          <button>Read More</button>
        </div>

        <div className="blog-div">
          <img src={blogImg_3} alt="" />
          <h3>How HMS Improves Patient Care</h3>
          <button>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Blog