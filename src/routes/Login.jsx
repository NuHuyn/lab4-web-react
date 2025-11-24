import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const navigate = useNavigate()
  const doLogin = () => {
    // fake login: set flag in localStorage
    window.localStorage.setItem('lab4:auth', '1')
    navigate('/dashboard')
  }
  return (
    <div style={{padding:12}}>
      <h2>Login</h2>
      <button onClick={doLogin}>Fake login</button>
    </div>
  )
}
