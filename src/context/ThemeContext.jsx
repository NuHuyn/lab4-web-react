import React, { createContext, useState, useContext } from 'react'

const ThemeContext = createContext('light')

export const ThemeProvider = ({children})=>{
  const [theme, setTheme] = useState('light')
  const toggle = ()=> setTheme(t => t === 'light' ? 'dark' : 'light')
  return (
    <ThemeContext.Provider value={{theme, toggle}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = ()=> useContext(ThemeContext)
