import React from "react";
import style from "./SectionNine.module.scss";
import { Parallax } from "react-scroll-parallax";

const SectionNine = () => (
  <>
    <div className={style.container}>
      <Parallax speed={2}>
        <div className={style.dot}></div>
      </Parallax>
      This felt like the final chapter. The suspect’s manner had been strange,
      but he had also presented more evidence in his defense than anyone had
      mustered in his prosecution. I felt less like Lisbeth Salander than one of
      M. C. Escher’s monks, wandering endlessly in circles. Maybe the thief was
      right. This was pointless.
    </div>
    <div className={style.container}>
      <Parallax speed={2}>
        <div className={style.dot}></div>
      </Parallax>
      Or … was the pointlessness the point? The one thing that seemed to tie all
      these tiny acts of deception together was a sense that the thief was in it
      for the pleasure of the act itself. Whoever they were — a disgruntled
      scout, a basement full of hackers laughing to themselves — they cared
      enough to keep at it for years, devoting countless hours to sending
      endless emails — all seemingly for nothing. I imagined that some in
      publishing could feel a certain empathy for a person engaged in an
      effortful obsession that produced little profit; after months of fruitless
      investigating, I certainly did. “If you try to find financial and economic
      gain, it’s of course hard to see,” said Daniel Sandstrom, the literary
      director of a Swedish publisher hit many times by the thief. “But if the
      game is psychological, a kind of mastery or feeling of superiority, it’s
      easier to visualize. This is a business full of resentment as well, and in
      that sense, it becomes a good story.”
    </div>

    <div className={style.container}>
      <Parallax speed={2}>
        <div className={style.dot}></div>
      </Parallax>
      Last week, in one final attempt at cracking the case, Lila and I sent an
      email to 89 different addresses the thief has used. Did they care to
      comment?
    </div>

    <div className={style.container}>
      <Parallax speed={2}>
        <div className={style.dot}></div>
      </Parallax>
      The thief hasn’t written back. But just a few minutes after the message
      went out, I got an unusual text from someone hoping to talk off the record
      — a person in publishing equally obsessed with solving the case. “It’s
      me!” they said, jokingly admitting guilt, after I asked whether they had
      just received my email. “Wouldn’t that be the best twist of all?”
    </div>

    <div className={style.container}>
      <Parallax speed={2}>
        <div className={style.dot}></div>
      </Parallax>
      I wasn’t kidding. I had walked so deep into the dark labyrinth of this
      mystery that rounding every bend seemed to reveal another uncertainty.
      Just last month, the thief expanded their scheme yet again: For the first
      time I knew of, they were impersonating someone in Hollywood rather than a
      book person.
    </div>
    <div className={style.container}>
      <Parallax speed={2}>
        <div className={style.dot}></div>
      </Parallax>
      And now, here was this source, beckoning me to join them even deeper in
      the maze. They were calling to tell me a story they hadn’t told anyone
      else. For two years, they had harbored a suspicion about a widely
      respected figure in the industry. The suspicion was based on one curious
      moment that could only make sense, they thought, if this new suspect were
      the thief. It could mean everything, my fellow obsessive said. Or it might
      mean nothing at all.
    </div>
  </>
);

export default SectionNine;
