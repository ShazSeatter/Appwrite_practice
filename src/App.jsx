
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoutes from './util/PrivateRoutes'
import { AuthProvider } from './util/AuthContext'

import Header from './components/Header'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  return (
    <Router>
      <AuthProvider>
          <Header/>
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>

          {/* Home and profile will only be accessed if code in PrivateRoutes is true */}
          <Route element={<PrivateRoutes/>}> 
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
          </Route>

          </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
