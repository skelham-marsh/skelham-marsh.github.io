import React from 'react'

import { NavLink } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLine } from "react-icons/ri";

import * as styles from "./Header.module.css"

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.desktop}>
        <nav>
          <NavLink to="/home"><p>Home</p></NavLink>
          <NavLink to="/story"><p>Our Story</p></NavLink>
          <NavLink to="/home"><h1>Jon & Beth</h1></NavLink>
          <NavLink to="/travel"><p>Travel & Accommodation</p></NavLink>
          <NavLink to="/faq"><p>FAQ</p></NavLink>
        </nav>
      </div>
      <div className={styles.mobile}>
        <label>
          <input type="checkbox" />
          <RiCloseLine size={32} />
          <RxHamburgerMenu size={32} />
          <h1>Jon & Beth</h1>
        </label>
        <nav>
          <NavLink to="/home"><p>Home</p></NavLink>
          <NavLink to="/story"><p>Our Story</p></NavLink>
          <NavLink to="/travel"><p>Travel & Accommodation</p></NavLink>
          <NavLink to="/faq"><p>FAQ</p></NavLink>
        </nav>
      </div>
    </div>
  )
}