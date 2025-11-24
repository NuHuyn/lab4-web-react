import React, { useEffect, useState, useRef } from 'react'

export default function IntervalDemo(){
  const [time, setTime] = useState(0)
  const intervalRef = useRef(null)

  useEffect(() => {
    // setup
    intervalRef.current = setInterval(() => {
      setTime(t => t + 1)
    }, 1000)

    // cleanup
    return () => {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, []) // run once

  return (
    <div style={{padding:12}}>
      <h2>Interval Demo (setup + cleanup)</h2>
      <div>Seconds since mounted: {time}</div>
    </div>
  )
}
