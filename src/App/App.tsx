import React from 'react'
import * as styles from "./App.module.css"

function calculateTime() {
  const delta = new Date("2025/06/14 15:00 UTC+01:00").getTime() - Date.now()
  const seconds = Math.floor(delta / 1000) % 60
  const minutes = Math.floor(delta / 1000 / 60) % 60
  const hours = Math.floor(delta / 1000 / 60 / 60) % 24
  const days = Math.floor(delta / 1000 / 60 / 60 / 24)
  return { days, hours, minutes, seconds }
}

function App() {
  const [state, setState] = React.useState(calculateTime())

  const { days, hours, minutes, seconds } = state

  React.useEffect(() => {
    const interval = setInterval(() => {
      setState(calculateTime())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.wrapper}>
      <h1>Jon & Beth</h1>

      <p>We're getting married June 14th 2025</p>

      <div className={styles.countdown}>

        <div className={styles.box}>
          <h2>{days}</h2>
          <p>Days</p>
        </div>

        <div className={styles.box}>
          <h2>{hours}</h2>
          <p>Hours</p>
        </div>

        <div className={styles.box}>
          <h2>{minutes}</h2>
          <p>Minutes</p>
        </div>

        <div className={styles.box}>
          <h2>{seconds}</h2>
          <p>Seconds</p>
        </div>

      </div>

    </div>
  )
}


export default App
