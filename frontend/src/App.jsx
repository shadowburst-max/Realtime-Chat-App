import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import { Toaster } from 'react-hot-toast'
import { useContext } from 'react'
import { authContext } from './context/authContext'

function App() {
  const {authUser} = useContext(authContext);
  return (
    
    /* BrowserRouter wraps the application, allowing URL-based navigation without page reloads(due to BrowserRouter).*/
    <div className='flex h-screen'>
      <Toaster />
      <Routes>
        <Route path='/' element={authUser ? <Home /> : <Navigate to='/login' />} /> 
        <Route path="/login" element={authUser ? <Navigate to='/' /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to='/' /> : <SignUp />} />
      </Routes>
    </div>
  )
}

export default App
  