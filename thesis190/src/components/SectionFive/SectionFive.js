import React from "react";
import style from "./SectionFive.module.scss";
import { Parallax } from "react-scroll-parallax";

const SectionFive = () => (
  <>
    <div className={style.container}>
      <Parallax speed={2}>
        <div className={style.dot}></div>
      </Parallax>
      Our investigation was moving slowly. More leads were coming in, each less
      helpful than the last. A new suspect would surface, only for the evidence
      to fall apart under minimal scrutiny. The smoking gun I’d been promised
      remained elusive. The closest I could get was a former assistant at the
      literary agency in question who recalled the damning domain registration,
      but only in part. The domain had been registered to an address in
      Manhattan, somewhere above Central Park.
    </div>
    <div className={style.container}>
      <Parallax speed={2}>
        <div className={style.dot}></div>
      </Parallax>
      I turned to the emails themselves. Textual analysis came naturally to the
      industry’s sleuths, some of whom claimed to detect a Germanic cadence in
      the thief’s writing or an idiomatic French syntax. But each victim had
      only a tiny glimpse of the thief’s body of work. I started collecting
      dozens and eventually hundreds of emails, from all over the world, hopeful
      that patterns would emerge.
    </div>
    <div className={style.container}>
      <Parallax speed={2}>
        <div className={style.dot}></div>
      </Parallax>
      It was difficult to find anything meaningful. The thief largely emailed on
      weekdays, during New York working hours, but there were exceptions. They
      asked for “favours” and spread “rumours,” but also wished American victims
      a Happy Fourth of July. They wrote poorly in many languages: Hebrew,
      Icelandic, Korean, Swedish. (A Brazilian caught on when the thief wrote to
      him in European Portuguese.) The thief’s English, meanwhile, could be
      crisp and formal; clumsy and stilted; playful and clever; sometimes
      unreadable. They mostly wanted to get their hands on adult fiction, with
      occasional forays into YA and just enough nonfiction to make their taste
      in books inscrutable. Their favorite emoticon was ;).
    </div>
    <div className={style.container}>
      <Parallax speed={2}>
        <div className={style.dot}></div>
      </Parallax>
      With no pattern emerging, we looked to one of the thief’s biggest attacks
      for clues: an attempt in 2019 to steal The Testaments, Margaret Atwood’s
      sequel to The Handmaid’s Tale. Over several months, emails were sent
      almost every day to pretty much anyone associated with the book: Atwood’s
      agent, her publishers, their assistants, even judges for the Booker Prize
      — along with many others who had no connection to the book at all. “If it
      is a scout, then they’re often getting it spectacularly wrong,” Karolina
      Sutton, Atwood’s agent, said of the spray-and-pray approach. “It’s almost
      like they’ve hired someone else to do it.”
    </div>
    <div className={style.container}>
      <Parallax speed={2}>
        <div className={style.dot}></div>
      </Parallax>
      The attack presented new wrinkles. The thief began employing a devious
      deception that involved creating a fictional exchange between two people —
      an editor and an agent, say, talking about changes to a manuscript — then
      including the imaginary back-and-forth at the bottom of their email as if
      the thief were forwarding a conversation. The attacks concerned Atwood’s
      agency so much that it decided not to share the final version of the book
      with some publishers until after its domestic release, disrupting the
      book’s global unveiling.
    </div>
    <div className={style.container}>
      <Parallax speed={2}>
        <div className={style.dot}></div>
      </Parallax>
      Atwood’s representatives assumed that piracy was the goal. Her foreign
      publishing rights were spoken for, and Hulu was airing The Handmaid’s
      Tale, meaning the streamer was likely first in line for the film-and-TV
      option. An IT consultant for Atwood’s agency developed a related theory,
      positing that snippets of the manuscript were being used as bait to trick
      readers to turn over their credit-card information. But, yet again, no
      pirated manuscript appeared online. (The only leak came from the
      industry’s other disruptor: Amazon accidentally shipped 800 copies early.)
    </div>
    <div className={style.container}>
      <Parallax speed={2}>
        <div className={style.dot}></div>
      </Parallax>
      Some in publishing were beginning to question whether manuscripts were
      even the end goal. How else to explain why the thief would want sample
      pages of Bong Joon Ho’s Parasite storyboards and a ten-page book proposal
      for Michael J. Fox’s memoir? After a rights manager in Germany got hit,
      she speculated that a security company was stress-testing publishers in
      the hopes of later selling them protective software. Several friends I
      spoke to who consider themselves the good kind of hackers said this
      sounded like a cybergang’s training program: The stakes were low, the
      targets weren’t especially tech savvy, and there was a deliverable target
      — the MS — that a new recruit could bring home before moving on to
      stealing login credentials from employees at a nuclear reactor. In the
      wake of North Korea’s alleged leaking of emails from Sony Pictures, could
      this be another attempt to destabilize western culture? Dramatic, perhaps
      — but then again, I had found nearly 200 companies in more than 30
      countries that the thief had impersonated, and none of them was Russian.
    </div>
    {/* TODO QUOTE */}
    <div className={style.container}>
      <Parallax speed={2}>
        <div className={style.dot}></div>
      </Parallax>
      If the thief were really multiple thieves working from a dark warren
      somewhere, how did they know so much about book publishing? In early 2020,
      an explanation presented itself. Virginia Ascione, an Italian editor, sent
      an email to Mira Trenchard, her scout in the U.K. Minutes later, another
      scout Ascione works with received an identical email — only this one was
      sent by the thief impersonating Ascione. Somehow, the thief had instantly
      re-created a private message between two real people. Several months
      later, Trenchard was emailing with an editor friend when she realized her
      friend was being impersonated. Trenchard sent a separate email asking if
      she knew about the scam. “I didn’t!” the friend wrote back. “How
      sinister.” The thief then replied to the message Trenchard had sent to her
      friend with a gonzo version of the same response. “NO, I didn’t!!!” the
      thief wrote. “How sinister!!”
    </div>
    <div className={style.container}>
      <Parallax speed={2}>
        <div className={style.dot}></div>
      </Parallax>
      The thief, it seemed, was somehow reading Trenchard’s emails. (Trenchard
      has changed her password and hasn’t had any such incidents of late.)
      Several people told me about similar experiences with other publishing
      companies. Perhaps the thief had seemed at home in the publishing world
      not because they were a part of it but because they had been lurking
      inside people’s inboxes all along.
    </div>
    <div className={style.container}>
      <Parallax speed={2}>
        <div className={style.dot}></div>
      </Parallax>
      This suggested an operator that textual analysis wasn’t going to unmask.
      We had no choice: Bring in the hackers. We consulted several cybersecurity
      experts, who found that the thief had upgraded their security starting in
      2019, albeit only slightly. They had registered more than 300 fake domains
      — 13 for the Wylie Agency alone — using digital security certificates for
      an additional layer of privacy. This was enough to prevent our hackers
      from identifying the thief, but it didn’t suggest a sophisticated
      operation. For one thing, the certificates confirmed that the domains were
      controlled by a single entity, if not a single person. Many of my fellow
      sleuths asked me if there was credit-card information to find, not to
      mention how much the thief was spending on all this. But GoDaddy confirmed
      it had repossessed a number of the domains, many of them likely owing to
      payment fraud — the thief seemed to be using stolen credit cards.
    </div>
    <div className={style.container}>
      <Parallax speed={2}>
        <div className={style.dot}></div>
      </Parallax>
      Others decided it was time to bring in the big guns. Last summer, several
      people approached the FBI, sharing the thief’s emails with the bureau. But
      if this were a crime of which the primary consequence was annoyance, it
      wasn’t clear how high the case would rank on the FBI’s priority list. (The
      bureau declined to comment.) The names of the two G-men publishing people
      spoke to — Clay Chase and Boris Klyuchnikov — highlighted the absurdity of
      it all, as if we were living out a cheap le Carré imitation in which none
      of the clues added up.
    </div>
  </>
);

export default SectionFive;
