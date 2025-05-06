import styles from "./FAQ.module.css"

type FAQ = { question: string, answer: string | (() => JSX.Element) }
const FAQs: FAQ[] = [
  {
    question: "Do you have a gift list or a registry?", answer: () => <>
      <p>The most important present you could give us is your presence! If you would like to give us something, we would really appreciate any contributions to our honeymoon fund.</p>
      <a href="https://pay.collctiv.com/wedding-gifts-55048">https://pay.collctiv.com/wedding-gifts-55048</a>
    </>
  },
  { question: "When should I get there and what time is carriages?", answer: "Please aim to arrive by 14:30, the ceremony will start at 15:00. Carriages are at midnight, please Irish Goodbye if you see us on the dancefloor." },
  { question: "Is there a dress code?", answer: "We can’t wait to see you all dressed up – we are requesting formal attire for the wedding.\nNo jeans, jogging bottoms, t-shirts or trainers please\nWe are intending to get married outside, so we recommend ladies wear block heels/wedges to prevent any sinking into the ground\nWomen, please refrain from wearing white or any similar shades" },
  { question: "Is there parking at the venue?", answer: "Yes, there is free parking for all guests. The venue has kindly said that guests can collect their car by 10am the following day, if you would like to leave your car overnight" },
  { question: "Will the ceremony be indoors or outdoors?", answer: "We are hoping that the weather will allow us to have our ceremony outside, but please be prepared for all weathers. There is a beautiful ceremony room inside, if needed." },
  { question: "How will seating work?", answer: "During the ceremony guests can sit on whichever side of the aisle they’d like, there’ll be no ‘his side’ or ‘her side’, we’re about to be one big happy family anyway!\nUpon entry to the wedding breakfast there will be a seating chart showing where you’ll be for the meal and speeches, but then we can’t wait to see you all on the dancefloor" },
  { question: "Can I take pictures during the ceremony?", answer: "We are having an ‘unplugged’ ceremony. This means that we’re asking for all phones to be on silent and in pockets/bags during the ceremony. We have hired a professional photographer to capture our special day and would hate for their shots to have phones in them! Once the ceremony is over, please take as many photos as you’d like and share them with us after the wedding." },
  { question: "How do I RSVP and when by?", answer: "Details for RSVP will be added here when invitations are sent out closer to the wedding" },
  { question: "Can I bring a plus one?", answer: "Due to limited space, we are only able to accommodate guests who are invited. Any plus ones given will be made clear once formal invitations are sent closer to the wedding date" },
]

export function FAQList() {
  return FAQs.map(({ question, answer }, index) =>
    <div className={styles.faq}>
      <label key={index}>
        <input type="checkbox" />
        <h2 className={styles.question}>{question}</h2>
      </label>
      <p className={styles.answer}>{typeof answer === "string" ? answer : answer()}</p>
    </div>
  )
}

export function FAQ() {
  return <div className={styles.wrapper}><FAQList /></div>
}
