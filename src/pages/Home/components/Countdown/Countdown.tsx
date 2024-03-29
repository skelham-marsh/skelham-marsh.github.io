import React from "react"
import styles from "./Countdown.module.css"

function calculateTime() {
  const delta = new Date("2025/06/14 15:00 UTC+01:00").getTime() - Date.now()
  const seconds = Math.floor(delta / 1000) % 60
  const minutes = Math.floor(delta / 1000 / 60) % 60
  const hours = Math.floor(delta / 1000 / 60 / 60) % 24
  const days = Math.floor(delta / 1000 / 60 / 60 / 24)
  return { days, hours, minutes, seconds }
}

export function Countdown() {
  const [state, setState] = React.useState(calculateTime())

  const { days, hours, minutes, seconds } = state

  React.useEffect(() => {
    const interval = setInterval(() => {
      setState(calculateTime())
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div className={styles.countdown}>
      <div>
        <h2>{days}</h2>
        <p>Days</p>
      </div>

      <div>
        <h2>{hours}</h2>
        <p>Hours</p>
      </div>

      <div>
        <h2>{minutes}</h2>
        <p>Minutes</p>
      </div>

      <div>
        <h2>{seconds}</h2>
        <p>Seconds</p>
      </div>
    </div>
  )
}