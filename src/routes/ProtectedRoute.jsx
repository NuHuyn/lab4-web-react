import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute(){
  // simple auth check (for demo). In production check token validity or context.
  const authed = !!window.localStorage.getItem('lab4:auth')
  if (!authed) return <Navigate to="/login" replace />
  return <Outlet />
}
