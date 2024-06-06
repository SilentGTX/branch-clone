import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import { useAuth } from './contexts/AuthContext'
import ManageCustomer from './pages/ManageCustomer/ManageCustomer'

function App() {

  const { isAdmin, isAuthenticated } = useAuth()

  return (
    <Router>
      <Routes>
        <Route path='/login' element={isAdmin ? <Navigate to='/register' /> : (isAuthenticated ? <Navigate to='/dashboard' /> : <Login />)} />
        <Route path='/register' element={isAuthenticated && !isAdmin ? <Navigate to='/login' /> : <Register />} />
        <Route path='/dashboard' element={isAuthenticated ? <Dashboard /> : <Navigate to='/login' />} />
        <Route path='/manage-customer' element={isAuthenticated ? <ManageCustomer /> : <Navigate to='/login' />} />
      </Routes>
    </Router>
  )

}

export default App
