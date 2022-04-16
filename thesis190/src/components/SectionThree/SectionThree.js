import React from "react";
import style from "./SectionThree.module.scss";

const SectionThree = () => (
  <>
    <div className={style.container}>
      On the spectrum of cyberattacks, this one wasn’t very complex. There was
      no malicious software or actual hacking involved. Some of the earliest
      victims used Gmail accounts for work, which were easy and free to spoof.
      Registering an alternate domain and setting up an email server was only
      slightly more involved, and the possibilities were endless: t’s became f’s
      (@wwnorfon.com), q’s replaced g’s (@wylieaqency.com), r’s and n’s
      cornbined to make m’s (@penguinrandornhouse.com). The domains suggested
      someone who liked to play with words as much as code. Books became bocks,
      unless the company was Dutch, in which case boek was Anglicized to book.
    </div>
    <div className={style.container}>
      What did seem sophisticated was the thief’s knowledge of the business. The
      culprit wrote like someone in publishing, abbreviating to “MS” for
      manuscript and “WEL” for world English-language rights, while exchanging
      insider chatter, telling one victim that a publisher was pitching a book
      as a comp to Pachinko and expressing surprise to another that a novel had
      recently sold for a shocking amount. The thief sent messages in the wake
      of announcements on Publishers Marketplace, a subscription website that
      tracks deals, but they also asked about books that the thief’s marks
      didn’t even know existed. The mimicry wasn’t always perfect — an assistant
      at the talent agency WME realized her boss was being impersonated because
      she would never say “please” or “thank you” — but the impression was good
      enough.
    </div>
    <div className={style.container}>
      What’s more, the thief seemed to have a strong grasp of the rarefied world
      of international publishing. The first emails, in the fall of 2016,
      traveled almost exclusively among the small group of people who handle the
      flow of manuscripts between countries, including a foreign-rights manager
      in Greece, an editor in Spain, and an agent selling international writers
      in the Chinese market. In the attempted “Millennium” heist, only a few
      dozen people in the world knew the book was being shared with foreign
      publishers and that Mörk and Altrov Berg controlled access to it.
    </div>
    <div className={style.container}>
      Suspicion quickly fell on literary scouts, whose work involves getting
      early access to books in order to advise foreign publishers and Hollywood
      studios whether to buy the rights. “We’re the ghost in the publishing
      machine,” Jon Baker, who works as a scout, said. “If anybody is going to
      be randomly asking you about something that’s coming out, it’s a scout.”
      The job requires finding books that match a client’s taste — a German
      publisher that wants historical fiction, a streaming service looking for
      strong female protagonists with a drinking problem — but scouts mostly try
      to get everything. Because agents often want to control who sees a book
      and when, a scout’s ultimate coup is a “slip,” or a manuscript obtained
      surreptitiously from a friendly source, cultivated over cocktails and
      coffees, giving the scout’s client a few extra days, or hours, to consider
      a book before the competition gets ahold of it. The most common shorthand
      is to say that scouts are the book world’s spies.
    </div>
    <div className={style.container}>
      If the thief were a scout using digital espionage to get books that
      couldn’t otherwise be acquired, then that narrowed the list of suspects.
      “I always joke that scouting is like 40 people on earth,” said Kelly
      Farber, a New York–based scout. “It’s probably more like 60, but it’s not
      in the triple digits.” People eyed less-established players with
      suspicion. “I just thought it was a very bad scout who couldn’t get
      manuscripts,” Lucy Abrahams, a scout who lives in Tel Aviv, told me.
    </div>
    <div className={style.container}>
      The person I’d been urged to look into was also a scout. The charges
      against him were vague — bad email manners, unusually aloof among his
      peers — but a source told me they had heard that a literary agency in New
      York had “hired an investigator” to look into the case and found something
      damning. My source was light on details, but the suspect had apparently
      been sloppy, attaching his real name and email to one of the fake domains
      registered early on in the scheme. Intrigued, my colleague Lila agreed to
      take up the case again with me. If the evidence was good, the mystery
      could be solved.
    </div>
    <div className={style.container}>
      Actual proof was harder to come by. No one I spoke to at the literary
      agency seemed to know anything about it. Other domains were being
      registered with enough security to protect the thief’s identity, and when
      people reached out to GoDaddy about shutting them down, the company often
      did so, but declined to share any information, citing its privacy policy.
      It did seem curious that some of the domains appeared to be registered in
      the Netherlands and that the thief wrote to one person in passable Dutch.
      Several scouts noticed that a former colleague had recently started an
      e-book company that would presumably need content. He happened to be from
      Holland.
    </div>
    {/* TODO H$M */}
    <div className={style.container}>
      But the registrations appeared to be a red herring. Domains popped up with
      no clear pattern, registered to the address for a gay men’s health clinic
      in London, an H and M in Copenhagen, a housing development in Harlem, a
      bookstore in Melbourne. The scouting theory also had considerable holes.
      Many of the books were ones that any scout could get without much trouble.
      While agents and publishers tightly guard big titles like the “Millennium”
      series, which prop up the entire business, the challenge with most books
      is getting anyone to read them. One of the thief’s early targets — “a
      modestly selling author’s fifth novel,” as the book’s agent put it — sold
      fewer than 2,000 copies. The scheme seemed like a lot of work for little
      reward. And it came with great risk.
    </div>
  </>
);

export default SectionThree;
