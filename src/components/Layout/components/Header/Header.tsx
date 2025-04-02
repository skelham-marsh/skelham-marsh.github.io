import React from 'react'

import { NavLink, useLocation } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLine } from "react-icons/ri";

import * as styles from "./Header.module.css"

export function Header() {
  const [isOpen, setOpen] = React.useState(false);
  const { pathname } = useLocation();

  const toggleMenu = React.useCallback(() => setOpen(isOpen => !isOpen), [])
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className={styles.header}>
      <div className={styles.desktop}>
        <nav>
          <NavLink to="/home"><p>Home</p></NavLink>
          <NavLink to="/story"><p>Our Story</p></NavLink>
          <NavLink to="/rsvp/ceremony"><p>Ceremony RSVP</p></NavLink>
          <NavLink to="/rsvp/reception"><p>Reception RSVP</p></NavLink>
          <NavLink to="/home"><h1>Jon & Beth</h1></NavLink>
          <NavLink to="/travel" style={{ flex: 2 }}><p>Travel & Accommodation</p></NavLink>
          <NavLink to="/faq"><p>FAQ</p></NavLink>
        </nav>
      </div>
      <div className={styles.mobile}>
        <label>
          <input type="checkbox" checked={isOpen} onChange={toggleMenu} />
          <span>
            <RiCloseLine size={32} />
            <RxHamburgerMenu size={32} />
          </span>
          <h1>Jon & Beth</h1>
        </label>
        <nav>
          <NavLink to="/home"><p>Home</p></NavLink>
          <NavLink to="/story"><p>Our Story</p></NavLink>
          <NavLink to="/rsvp/ceremony"><p>Ceremony RSVP</p></NavLink>
          <NavLink to="/rsvp/reception"><p>Reception RSVP</p></NavLink>
          <NavLink to="/travel"><p>Travel & Accommodation</p></NavLink>
          <NavLink to="/faq"><p>FAQ</p></NavLink>
        </nav>
      </div>
    </div >
  )
}