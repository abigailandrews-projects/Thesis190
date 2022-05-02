import React from "react";
import style from "./SectionOne.module.scss";
import { Parallax } from "react-scroll-parallax";

const SectionOne = () => {
  return (
    <>
      <div className={style.container}>
        <Parallax speed={2}>
          <div className={style.dot}></div>
        </Parallax>
        On the morning of March 1, 2017, Catherine Mörk and Linda Altrov Berg were in the offices of Norstedts, a book publisher in Sweden, when they received an unusual email. A colleague in Venice was asking for a top-secret document: the unpublished manuscript of the forth-coming fifth book in Stieg Larsson’s “Millennium” series. The books, which follow hacker detective Lisbeth Salander, have sold more than 100 million copies. David Lagercrantz, another Swedish writer, had taken over the series after Larsson’s death, and his latest — The Man Who Chased His Shadow — was expected to be one of the publishing events of the year.
      </div >
      <div className={style.container}>
        <Parallax speed={2} className={style.text}>
          <div className={style.dot}></div>
        </Parallax>
        Norstedts was guarding the series closely. Lagercrantz wrote his first “Millennium” book on a computer with no connection to the internet and delivered the manuscript on paper, at which point Norstedts mailed a single copy to each of the book’s international publishers. With the new title, Norstedts wanted to streamline the process — Lisbeth Salander’s publisher, they figured, should be able to protect itself from hackers and thieves. Mörk and Altrov Berg, who handle foreign rights at Norstedts, consulted with other publishers of blockbuster books. The translators working on one of Dan Brown’s follow-ups to The Da Vinci Code, for instance, were required to work in a basement with security guards clocking trips to the bathroom. Norstedts decided to try sharing the new “Millennium” book via Hushmail, an encrypted-email service, with passwords delivered separately by phone. Everyone would have to sign an NDA.
      </div >
      <div className={style.container}>
        <Parallax speed={2} className={style.text}>
          <div className={style.dot}></div>
        </Parallax>
        The unusual email came from Francesca Varotto, the book’s Italian-edition editor, and arrived shortly after Norstedts sent out the manuscript:
      </div >
      <div className={style.container}>
        <Parallax speed={2} className={style.email}>
          Dear Linda and Catherine,<br /><br />
          I hope you are well. Could you please re-send me the link to the manuscript of The Man Who Chased His Shadow? Thank you! <br /><br />
          Best, <br />
          Francesca
        </Parallax>
      </div >
      <div className={style.container}>
        <Parallax speed={2} className={style.text}>
          <div className={style.dot}></div>
        </Parallax>
        Minutes later, and a few blocks away from Norstedts headquarters in Stockholm, Magdalena Hedlund, the agent representing the book, received a similar email from Varotto. It was strange that Varotto had lost something so valuable, but she and Hedlund were old friends, and the email struck a familiar tone. Plus everyone was scrambling: The book was set for release in 27 countries simultaneously, and the translators had to get started. Hedlund sent her friend the link to the manuscript.
      </div >
      <div className={style.container}>
        <Parallax speed={2} className={style.text}>
          <div className={style.dot}></div>
        </Parallax>
        Varotto replied instantly. “I’m sorry M,” she wrote. Varotto said that her password was “disabled/expired.” Could Hedlund send a new one?
      </div >
      <div className={style.container}>
        <Parallax speed={2} className={style.text}>
          <div className={style.dot}></div>
        </Parallax>
        Back at Norstedts, Mörk also received an email from Varotto. “Sorry Catherine,” the message read. “Could you please give me the Hushmail code?” Altrov Berg dashed off a separate message to Varotto, asking if everything was okay.
      </div >
      <div className={style.container}>
        <Parallax speed={2} className={style.text}>
          <div className={style.dot}></div>
        </Parallax>
        Suddenly, her phone rang. “Why are you sending me this?” Varotto asked. Altrov Berg explained what was happening. Varotto was confused. She hadn’t sent any emails to Norstedts all day.
      </div >
      <div className={style.container}>
        <Parallax speed={2} className={style.text}>
          <div className={style.dot}></div>
        </Parallax>
        With Varotto on the phone, the two Norstedts employees scrolled through the messages. The emails looked like ones Varotto would send: The text used the same font, and the signature at the end was styled just like hers. Then, with Varotto still on the line, Mörk got yet another email asking for the password.
      </div >
      <div className={style.container}>
        <Parallax speed={2} className={style.text}>
          <div className={style.dot}></div>
        </Parallax>
        They scanned the messages again. Only now did Varotto notice that the signature listed her old job title; she had been promoted two months earlier. The subject line also misspelled the name of her company. Finally, they realized the email address wasn’t hers at all: The domain had been changed from @marsilioeditori.it to @marsilioeditori.com.
      </div >
      <div className={style.container}>
        <Parallax speed={2} className={style.text}>
          <div className={style.dot}></div>
        </Parallax>
        Everyone deleted the emails. What other malicious tricks were lurking inside? The IT department at Marsilio Editori began investigating and found that the fraudulent domain had been created the day before through GoDaddy. It was registered to an address in Amsterdam and a Dutch phone number. When an employee tried calling, it went straight to a recording: “Thank you for calling IBM.”
      </div >
      <div className={style.container}>
        <Parallax speed={2} className={style.text}>
          <div className={style.dot}></div>
        </Parallax>
        The “Millennium” team was in a panic. The thief didn’t yet have the password, as far as they knew, but was clearly determined to get it. Publishers around the world depend on a best seller like this, and an online leak of the manuscript could derail its release.
      </div >
      <div className={style.container}>
        <Parallax speed={2} className={style.text}>
          <div className={style.dot}></div>
        </Parallax>
        But the book’s publication came and went without a hitch. The manuscript never reappeared. What was Fake Francesca Varotto after? Much more than Lisbeth Salander’s best-selling exploits, it turned out. On the same day as the “Millennium” emails, Fake Francesca asked someone else in publishing for an early look at Lot, Bryan Washington’s story collection, as well as a debut novel about an accountant who becomes a fortune teller. Even stranger, the thief had other identities. Later that day, a fake Swedish editor went to the Wylie Agency in London to request a copy of Louise Erdrich’s just-announced novel, and someone pretending to be Peter van der Zwaag, a Dutch editor, asked a colleague in New York for the same fortune-teller book. Fake Peter then introduced his new assistant to request that she be added to a private mailing list filled with confidential publishing information. The assistant followed up with a friendly note: “It’s so busy and overwhelming now with the London Book Fair, isn’t it?” The assistant didn’t exist.
      </div >
    </>)
};

export default SectionOne;
