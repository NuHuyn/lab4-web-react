import React from 'react'
import { useFetch } from '../hooks/useFetch'

export default function FetchDemo(){
  // ví dụ public API (placeholder)
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users')

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div style={{padding:12}}>
      <h2>Fetch Demo</h2>
      <ul>
        {data && data.map(user => (
          <li key={user.id}>{user.name} — {user.email}</li>
        ))}
      </ul>
    </div>
  )
}
