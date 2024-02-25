import React from "react";
import styles from "./Story.module.css"

export function Story() {
  return <div className={styles.wrapper}>
    <div>
      <h2>Fun Facts</h2>
      <ul>
        <li>We met on the Cambridge Guided Bus during our first week at sixth form</li>
        <li>Our first date was at London Aquarium</li>
        <li>Jon proposed under the Northern Lights in Iceland in December 2024</li>
        <li>By our wedding, we’ll have been together for 8 years</li>
        <li>We have a snapchat streak of 2,553 days</li>
      </ul>
    </div>
    <div>
      <h2>Timeline</h2>
      <ul>
        <li>September 2014 – We first met on a bus. Jon decided to speak to Beth when he saw her Hills Road planner and from there we became friends</li>
        <li>1st July 2016 – The first photo we ever took together is from our sixth form leavers ball</li>
        <li>December 2016 – We started talking again after we’d settled in to our different universities</li>
        <li>March 11th 2017 – Jon asked Beth to be his girlfriend</li>
        <li>March 12th 2017 – First date at London Aquarium</li>
        <li>June 2018 – We had our first holiday together in Gran Canaria</li>
        <li>March 2022 – We reserved our first home together – a new build in Over</li>
        <li>14th October 2022 (It took this long) – We moved in together</li>
        <li>4th December 2023 – ENGAGED!</li>
        <li>Jan 2024 – Started wedding planning and said yes to the venue</li>
      </ul>
    </div>
  </div >
}