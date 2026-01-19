import React from 'react'
import Header from '../components/Header/Header'
import About from '../components/About/About'
import Blog from '../components/Blog/Blog'
import Review from '../components/Reviews/Review'
import Contact from '../components/Contact/Contact'

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <Blog />
      <Review />
      <Contact />
    </div>
  )
}

export default Home