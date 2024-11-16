import React from "react";
import styles from "./Story.module.css"

import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { FaBus } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaHammer } from "react-icons/fa6";
import { FaHouse } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPlaneDeparture } from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";
import { GiAmpleDress } from "react-icons/gi";
import { GiAquarium } from "react-icons/gi";
import { GiBigDiamondRing } from "react-icons/gi";
import { MdAddAPhoto } from "react-icons/md";

const ICON_SIZE = 128
const SNAPCHAT_STREAK = Math.floor((new Date().valueOf() - new Date("21 February 2017").valueOf()) / (1000 * 60 * 60 * 24))

const events = [
  { Icon: FaBus, date: "September 2014", description: "We first met on a bus shortly after starting Sixth Form. Jon decided to speak to Beth when he realised we went to the same school and from there we became friends" },
  { Icon: MdAddAPhoto, date: "1st July 2016", description: "The first photo we ever took together is from our sixth form leavers ball" },
  { Icon: FaGraduationCap, date: "December 2016", description: "We started chatting again after we’d settled in to our different universities" },
  { Icon: FaSnapchatGhost, date: `${SNAPCHAT_STREAK} days ago`, description: "Our snapchat streak started! (Yes, this updates live)" },
  { Icon: BsEmojiHeartEyesFill, date: "March 11th 2017", description: "Jon asked Beth to be his girlfriend" },
  { Icon: GiAquarium, date: "March 12th 2017", description: "We had our first date at London Aquarium" },
  { Icon: FaPlaneDeparture, date: "June 2018", description: "We had our first holiday together in Gran Canaria" },
  { Icon: FaHammer, date: "March 2022", description: "We reserved our first home together – a new build in Over" },
  { Icon: FaHouse, date: "14th October 2022 ", description: "We moved in together (yes, it really took over 6 months)" },
  { Icon: GiBigDiamondRing, date: "4th December 2023", description: "ENGAGED!" },
  { Icon: FaMapLocationDot, date: "28th January 2024", description: "We said yes to the venue" },
  { Icon: GiAmpleDress, date: "25th February 2024", description: "Beth said yes to the dress" },
]


export function Story() {
  return <div className={styles.wrapper}>
    {events.map(({ Icon, date, description }, index) => <div className={styles.event} key={index}>
      <p className={styles.description}>{index % 2 === 1 ? <><span className={styles.date}>{date}</span><br />{description}</> : null}</p>
      <div className={styles.centre}>
        <div className={styles.icon}><Icon size={ICON_SIZE} /></div>
      </div>
      <p className={styles.description}>{index % 2 === 0 ? <><span className={styles.date}>{date}</span><br />{description}</> : null}</p>
    </div>)}
  </div >
}
