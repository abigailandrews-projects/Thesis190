import React from "react";
import style from "./SectionEight.module.scss";

const SectionEight = () => (
  <>
    <div className={style.container}>
      The thief wasn’t the only one who wanted me to stop. Two of this
      magazine’s editors sat me down and said that I couldn’t spend all year
      investigating a crime with no real victims. The world was sick and on fire
      with actual cyberattacks knocking hospitals and pipelines offline. It was
      time to write the ending.
    </div>
    <div className={style.container}>
      In the course of reporting this story, more than a dozen people in
      publishing told us they believed a single suspect was behind the whole
      thing: the person I’d been told about at the outset. Most people couldn’t
      tell me much about him, but the details they shared fit the thief’s
      profile. He was from another country, and his English wasn’t great. His
      manner, in person and in writing, could be brusque. His client list was
      small, and his scouting business was sometimes a struggle: One former
      client told us that after parting ways with the scout, he sent her so many
      texts she had to block his number. He wasn’t on the literary social scene,
      which made people presume he was resentful. Then again, one scout admitted
      to me, “Do we all just think it’s him because he’s weird?”
    </div>
    <div className={style.container}>
      The smoking gun — the mistaken domain registration teased by my friend —
      was meant to provide more substantial proof. After a seemingly endless
      game of tag, we finally got to the source. In the summer of 2017, Laila
      Lalami, the award-winning novelist, had been approached by the thief, who
      was impersonating someone at her literary agency. Lalami figured out
      something was wrong, and her husband, an IT engineer, looked into the
      domain and found that it was registered to a particular Gmail address.
      When Lalami shared the address with her agency, they saw the email seemed
      to belong to a scout — our original suspect.
    </div>
    <div className={style.container}>
      But upon closer inspection, I found the proof was a mirage. The address
      wasn’t the suspect’s. It was yet another fake email, missing a single
      letter, the same one the thief had used to impersonate the suspect himself
      all the way back in 2016.
    </div>
    <div className={style.container}>
      Lila and I scrambled for an explanation. Wasn’t it suspicious, at least,
      that the thief had used this particular address? Maybe our suspect was
      being framed? What a twist! But when I showed the evidence to Chad
      Anderson, a senior security researcher at DomainTools, he scanned some of
      the thief’s other domain registrations from the time and found that almost
      all of them were registered with fake Gmail accounts loosely connected to
      people and companies in publishing. Our smoking gun had misfired.
    </div>
    <div className={style.container}>
      I had come too far not to close the loop. In early August, I spoke to the
      suspect on Zoom. He was sitting in the garden of his home wearing a blue
      polo shirt with the sun setting behind him, causing the screen to flare
      around him. He was shocked to hear that his colleagues in the industry
      suspected him and denied the accusation. Over the next 24 hours, he sent
      me 64 emails frantically laying out his case: messages that showed he
      could get books legitimately from agents all over the world, an email
      exchange from when he was impersonated and considered paying $2,000 to an
      anonymous hacker-for-hire for help, and several notes he had sent to the
      thief at the time: “I hope the new year brings you the end of your career
      and a big lawsuit. In other words, all you deserve.”
    </div>
    <div className={style.container}>
      The suspect said he had a simple explanation for why people thought there
      was something odd about him. He was, by his own admission, kind of an odd
      guy. He was shy and had never fully assimilated into the New York scene he
      was supposed to become a part of. He rarely got invited to parties and
      wasn’t the type to crash them. His clients couldn’t spend big money, which
      meant sometimes agents ignored him, and he admitted that his position in
      the industry was sometimes frustrating. He had chosen a profession he
      thought was for bookish people like him, only to realize that in
      publishing, as in everything else, the extroverts still ruled. “Even if
      I’m an introvert,” he said, “I’m not a hacker.”
    </div>
  </>
);

export default SectionEight;
