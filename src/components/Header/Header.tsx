import { NavLink } from 'react-router-dom'
import * as styles from "./Header.module.css"
import React from 'react'

export function Header() {
  return <div className={styles.header}>
    <NavLink to="/home">Home</NavLink>
    <NavLink to="/story">Our Story</NavLink>
    <NavLink to="/home"><h1 className={styles.names}>Jon & Beth</h1></NavLink>
    <NavLink to="/travel">Travel & Accommodation</NavLink>
    <NavLink to="/faq">FAQ</NavLink>
  </div>
}