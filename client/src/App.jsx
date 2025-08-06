import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Browse from './pages/Browse'
import Report from './pages/Report'
import Contact from './pages/Contact'



const App = () => {
  return (
    <div>
      <Navbar />
      <div className='min-h-screen bg-gray-100'> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/report" element={<Report />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </div>
    </div>
  )
}

export default App
