import React from "react";
import { Parallax } from "react-scroll-parallax";
import style from "./IntroCopy.module.scss";

const copy = "HELLO".split("");

const IntroCopy = () => (
  <div className={style.root}>
    <div className={style.barTop} />
    <span className={`${style.copy} h1`}>
      {copy.map((letter, i) => (
        <Parallax
          key={`copy-${i}`}
          translateX={[0, 100 * (i - 3)]}
          className={style.letter}
        >
          {letter}
        </Parallax>
      ))}
    </span>
    <div className={style.barBottom} />
  </div>
);

export default IntroCopy;
