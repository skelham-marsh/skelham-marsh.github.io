import React from "react"
import ReactGA from "react-ga4";

import { Outlet, useLocation } from "react-router-dom"
import { Header } from "./components/Header/Header"
import { ErrorBoundary } from "../ErrorBoundary/ErrorBoundary"
import * as styles from "./Layout.module.css"

const GOOGLE_ANALYTICS_KEY = import.meta.env.VITE_GOOGLE_ANALYTICS_KEY
ReactGA.initialize([{ trackingId: GOOGLE_ANALYTICS_KEY }])

export function Layout() {
  const location = useLocation()

  React.useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname, title: location });
  }, [location])

  return <div className={styles.layout}>
    <Header />
    <main>
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    </main>
  </div>
}