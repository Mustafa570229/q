import React from 'react'
import NavBar from './Components/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RhletAlyaqeen from './pages/RhletAlyaqeen'
import Home from './Components/Home'
import AddingContent from './control-panel/AddingContent'
import Login from './Components/Login'

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/the-journey-of-certainty' element={<RhletAlyaqeen />} />
          <Route path='/control-panel' element={<AddingContent />} />
          <Route path='/login' element={<Login />} />


        </Routes>

      </Router>
    </div>
  )
}

export default App