import { NavLink } from 'react-router-dom'
import * as styles from "./Header.module.css"
import React from 'react'

export function Header() {
  return <nav className={styles.header}>
    <NavLink to="/home"><p>Home</p></NavLink>
    <NavLink to="/story"><p>Our Story</p></NavLink>
    <NavLink to="/home"><h1 className={styles.names}>Jon & Beth</h1></NavLink>
    <NavLink to="/travel"><p>Travel & Accommodation</p></NavLink>
    <NavLink to="/faq"><p>FAQ</p></NavLink>
  </nav>
}