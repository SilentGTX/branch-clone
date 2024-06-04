import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import { useAuth } from './contexts/AuthContext'

function App() {

  const { isAdmin, isAuthenticated } = useAuth()

  return (
    <Router>
      <Routes>
        <Route path='/' element={!isAuthenticated ? <Login /> : <Navigate to='/dashboard' />} />
        <Route path='/login' element={isAdmin ? <Navigate to='/register' /> : <Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={isAuthenticated ? <Dashboard /> : <Navigate to='/login' />} />
      </Routes>
    </Router>
  )

}

export default App
