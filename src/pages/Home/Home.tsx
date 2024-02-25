import React from 'react'
import styles from "./Home.module.css"
import { Countdown } from './components/Countdown/Countdown'

export function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.left}>
        <div className={styles.text}>
          <p>We're getting married </p>
          <p>June 14th 2025</p>
        </div>
        <Countdown />
      </div>
      <div className={styles.right}>
        <img src="./static/us.jfif" />
      </div>
    </div >
  )
}
