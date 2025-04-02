import React from 'react'
import styles from "./Home.module.css"
import { Countdown } from './components/Countdown/Countdown'
import { NavLink } from 'react-router-dom'

export const WEDDING_DATE = "June 14th 2025"
export function Home() {
  return (
    <div className={styles.body}>
      <div className={styles.left}>
        <NavLink to="/rsvp/ceremony"><p>Ceremony RSVP</p></NavLink>
        <NavLink to="/rsvp/reception"><p>Reception RSVP</p></NavLink>
        <div className={styles.text}>
          <p>We're getting married </p>
          <p>{WEDDING_DATE}</p>
        </div>
        <Countdown />
      </div>
      <div className={styles.right}>
        <img src="./static/us.jfif" />
      </div>
    </div >
  )
}
