import React from "react"
import styles from "./FAQ.module.css"

type FAQ = { question: string, answer: string }
const FAQs: FAQ[] = [
  { question: "How do I RSVP and when by?", answer: "Details for RSVP will be added here when invitations are sent out closer to the wedding" },
  { question: "Can I bring a plus one?", answer: "Due to limited space, we are only able to accommodate guests who are invited. Any plus ones given will be made clear once formal invitations are sent closer to the wedding date" },
  { question: "Is there a dress code?", answer: "We can’t wait to see you all dressed up – we are requesting formal attire for the wedding.\nNo jeans, jogging bottoms, t-shirts or trainers please\nWe are intending to get married outside, so we recommend ladies wear block heels to prevent any sinking into the ground\nWomen, please refrain from wearing white or any similar shades" },
  { question: "Is there parking at the venue?", answer: "Yes, there is free parking for all guests. The venue has kindly said that guests can collect their car by 10am the following day, if you would like to leave your car overnight" },
  { question: "Will the ceremony be indoors or outdoors?", answer: "We are hoping that the weather will allow us to have our ceremony outside, however there is a beautiful ceremony room inside, if needed." },
  { question: "How will seating work?", answer: "During the ceremony guests can sit on whichever side of the aisle they’d like, there’ll be no ‘his side’ or ‘her side’, we’re about to be one big happy family anyway!\nUpon entry to the wedding breakfast there will be a seating chart showing where you’ll be for the meal and speeches, but then we can’t wait to see you all on the dancefloor" },
  { question: "Can I take pictures during the ceremony?", answer: "We are having an ‘unplugged’ ceremony. This means that we’re asking for all phones to be on silent and in pockets/bags during the ceremony. We have hired a professional photographer to capture our special day and would hate for their shots to have phones in them! Once the ceremony is over, please take as many photos as you’d like and share them with us after the wedding." },
  { question: "Do you have a gift list or a registry?", answer: "The most important present you could give us is your presence! If you would like to give us something, we would really appreciate any contributions to our honeymoon fund." },
]

export function FAQList() {
  return FAQs.map(({ question, answer }) =>
    <label className={styles.faq}>
      <input type="checkbox" />
      <h2 className={styles.question}>{question}</h2>
      <p className={styles.answer}>{answer}</p>
    </label>
  )
}

export function FAQ() {
  return <div className={styles.wrapper}><FAQList /></div>
}