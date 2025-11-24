import React, { useRef, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export default function FormDemo(){
  // Controlled example
  const [name, setName] = useState('')
  // Uncontrolled example (FormData) with ref
  const formRef = useRef(null)
  const [saved, setSaved] = useLocalStorage('lab4:remember', '')

  const handleSubmitControlled = (e) => {
    e.preventDefault()
    alert(`Controlled submit: ${name}`)
  }

  const handleSubmitUncontrolled = (e) => {
    e.preventDefault()
    const fd = new FormData(e.target)
    const obj = Object.fromEntries(fd.entries())
    alert(`Uncontrolled submit: ${JSON.stringify(obj)}`)
  }

  return (
    <div style={{padding:12}}>
      <h2>Form Demo</h2>

      <section style={{marginBottom:16}}>
        <h3>Controlled</h3>
        <form onSubmit={handleSubmitControlled}>
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="name (controlled)" />
          <button type="submit">Submit controlled</button>
        </form>
      </section>

      <section style={{marginBottom:16}}>
        <h3>Uncontrolled (FormData)</h3>
        <form ref={formRef} onSubmit={handleSubmitUncontrolled}>
          <input name="email" defaultValue="bob@example.com" placeholder="email" />
          <button type="submit">Submit uncontrolled</button>
        </form>
      </section>

      <section>
        <h3>useLocalStorage example (remember me)</h3>
        <input value={saved} onChange={e=>setSaved(e.target.value)} placeholder="persistent value"/>
        <div>Saved: {saved}</div>
      </section>
    </div>
  )
}
