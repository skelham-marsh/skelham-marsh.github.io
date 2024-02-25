import React from "react"
import { Outlet } from "react-router-dom"
import { Header } from "../Header/Header"
import * as styles from "./Layout.module.css"

export function Layout() {
  return <div className={styles.layout}>
    <Header />
    <main>
      <Outlet />
    </main>
  </div>
}