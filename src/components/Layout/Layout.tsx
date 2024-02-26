import React from "react"
import { Outlet } from "react-router-dom"
import { Header } from "../Header/Header"
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary"
import * as styles from "./Layout.module.css"

export function Layout() {
  return <div className={styles.layout}>
    <Header />
    <main>
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </main>
  </div>
}