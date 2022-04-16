import React from "react";
import style from "./Paragraph.module.scss";

const Paragraph = () => (
  <div className={style.root}>
    <div className={style.container}>
      On the morning of March 1, 2017, Catherine Mörk and Linda Altrov Berg were
      in the offices of Norstedts, a book publisher in Sweden, when they
      received an unusual email. A colleague in Venice was asking for a
      top-secret document: the unpublished manuscript of the forth-coming fifth
      book in Stieg Larsson’s “Millennium” series. The books, which follow
      hacker detective Lisbeth Salander, have sold more than 100 million copies.
      David Lagercrantz, another Swedish writer, had taken over the series after
      Larsson’s death, and his latest — The Man Who Chased His Shadow — was
      expected to be one of the publishing events of the year.
    </div>
    <div className={style.text}>
      Norstedts was guarding the series closely. Lagercrantz wrote his first
      “Millennium” book on a computer with no connection to the internet and
      delivered the manuscript on paper, at which point Norstedts mailed a
      single copy to each of the book’s international publishers. With the new
      title, Norstedts wanted to streamline the process — Lisbeth Salander’s
      publisher, they figured, should be able to protect itself from hackers and
      thieves. Mörk and Altrov Berg, who handle foreign rights at Norstedts,
      consulted with other publishers of blockbuster books. The translators
      working on one of Dan Brown’s follow-ups to The Da Vinci Code, for
      instance, were required to work in a basement with security guards
      clocking trips to the bathroom. Norstedts decided to try sharing the new
      “Millennium” book via Hushmail, an encrypted-email service, with passwords
      delivered separately by phone. Everyone would have to sign an NDA.
    </div>
    <div className={style.text}>
      The unusual email came from Francesca Varotto, the book’s Italian-edition
      editor, and arrived shortly after Norstedts sent out the manuscript:
    </div>
  </div>
);

export default Paragraph;
