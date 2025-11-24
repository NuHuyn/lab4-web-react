import React, { useRef } from 'react'

export default function RefDemo(){
  const inputRef = useRef(null)
  const countRef = useRef(0)

  const handleFocus = ()=> inputRef.current && inputRef.current.focus()
  const handleInc = () => {
    countRef.current += 1
    console.log('mutated ref current (no re-render):', countRef.current)
    alert(`countRef = ${countRef.current} (check console; component did not re-render)`)
  }

  return (
    <div style={{padding:12}}>
      <h2>useRef Demo</h2>
      <input ref={inputRef} placeholder="click focus button" />
      <div style={{marginTop:8}}>
        <button onClick={handleFocus}>Focus input (DOM ref)</button>
        <button onClick={handleInc} style={{marginLeft:8}}>Mutate countRef (no re-render)</button>
      </div>
    </div>
  )
}
