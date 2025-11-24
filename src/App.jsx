import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Root from './routes/Root'
import Dashboard from './routes/Dashboard'
import Login from './routes/Login'
import ProtectedRoute from './routes/ProtectedRoute'
import FetchDemo from './components/FetchDemo'
import FormDemo from './components/FormDemo'
import RefDemo from './components/RefDemo'
import IntervalDemo from './components/IntervalDemo'
import { ThemeProvider } from './context/ThemeContext'

export default function App(){
  return (
    <ThemeProvider>
      <nav style={{display:'flex', gap:12, padding:12}}>
        <Link to="/">Home</Link>
        <Link to="/fetch">FetchDemo</Link>
        <Link to="/form">FormDemo</Link>
        <Link to="/ref">RefDemo</Link>
        <Link to="/interval">IntervalDemo</Link>
        <Link to="/dashboard">Dashboard (protected)</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Root/>}/>
        <Route path="/fetch" element={<FetchDemo/>}/>
        <Route path="/form" element={<FormDemo/>}/>
        <Route path="/ref" element={<RefDemo/>}/>
        <Route path="/interval" element={<IntervalDemo/>}/>
        <Route path="/login" element={<Login/>}/>

        {/* Protected route wrapper */}
        <Route element={<ProtectedRoute/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>
      </Routes>
    </ThemeProvider>
  )
}
