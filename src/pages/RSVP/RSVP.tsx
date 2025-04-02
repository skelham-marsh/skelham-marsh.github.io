import React from "react";
import styles from "./RSVP.module.css"

const CEREMONY = "https://docs.google.com/forms/d/e/1FAIpQLSfUkwU_9_MYcJbpvOgI46xYqvreZewEGM2WCYldz1pKH3aUHg/viewform?embedded=true"
const RECEPTION = "https://docs.google.com/forms/d/e/1FAIpQLSca-9aLT55vDCNHn0sOdyAyQKXro0lu7P5tFvibvUgaR1-kCg/viewform?embedded=true"

type RSVPProps = {
  isCeremony: boolean
}
export function RSVP({ isCeremony }: RSVPProps) {
  return <div className={styles.wrapper}>
    <iframe src={isCeremony ? CEREMONY : RECEPTION} >Loading…</iframe>
  </div>
}