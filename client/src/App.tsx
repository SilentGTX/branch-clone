import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Dashboard from './pages/Dashboard/Dashboard'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Dashboard />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Login />} />
      </Routes>
    </Router>
  )

}

export default App
