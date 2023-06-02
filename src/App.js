import React from 'react'
import NavBar from './Components/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RhletAlyaqeen from './pages/RhletAlyaqeen'
import Home from './Components/Home'

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rhlet-yaqeen' element={<RhletAlyaqeen />} />
        </Routes>

      </Router>
    </div>
  )
}

export default App