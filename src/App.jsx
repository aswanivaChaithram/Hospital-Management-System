import React, { useState } from 'react'
import Navbar from './components/Navabr/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './components/Login/Login'
import Doctor from './pages/Doctor/Doctor'
import Footer from './components/Footer/Footer'
import Dashboard from './pages/Dashboard/Dashboard'
import Admin from './pages/Admin/Admin'

const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/doctors' element={<Doctor />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/admin' element={<Admin />}></Route>
          </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App