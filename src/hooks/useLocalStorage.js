import { useState } from 'react'

export function useLocalStorage(key, defaultValue) {
  const getInitial = () => {
    try {
      const raw = window.localStorage.getItem(key)
      return raw ? JSON.parse(raw) : defaultValue
    } catch {
      return defaultValue
    }
  }
  const [state, setState] = useState(getInitial)
  const setValue = (v) => {
    try {
      const val = typeof v === 'function' ? v(state) : v
      setState(val)
      window.localStorage.setItem(key, JSON.stringify(val))
    } catch (e) {
      console.error('useLocalStorage set error', e)
    }
  }
  return [state, setValue]
}
