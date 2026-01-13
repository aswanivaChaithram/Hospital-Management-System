import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.jpeg'

const Navbar = ({ setShowLogin }) => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="navbar">

        <div className="navbar-left">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <h2>LifeShades Hospital</h2>
        </div>

        <div className="navbar-middle">
          <Link to="/">Home</Link>
          <Link to="/doctors">Doctors</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>

        <div className="navbar-right">
          <Link to="/admin">Admin</Link>
          <button onClick={() => setShowLogin(true)}>Login</button>
        </div>

        <button className="menu-icon" onClick={() => setMenuOpen(true)}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* -------- MOBILE SIDEBAR -------- */}
      
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>

        <button className="close-icon" onClick={() => setMenuOpen(false)}>
          ✖
        </button>

        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/doctors" onClick={() => setMenuOpen(false)}>Doctors</Link>
        <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
        <Link to="/admin" onClick={() => setMenuOpen(false)}>Admin</Link>

        <button onClick={() => {setShowLogin(true)
          setMenuOpen(false)}}>
             Login
        </button>
      </div>
    </>
  )
}

export default Navbar
