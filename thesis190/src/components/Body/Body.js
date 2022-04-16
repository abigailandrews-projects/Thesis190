import React from "react";
import style from "./Body.module.scss";
import SectionOne from "../SectionOne/SectionOne.js";
import SectionTwo from "../SectionTwo/SectionTwo.js";
import SectionThree from "../SectionThree/SectionThree.js";
import SectionFour from "../SectionFour/SectionFour.js";
import SectionFive from "../SectionFive/SectionFive.js";
import SectionSix from "../SectionSix/SectionSix.js";
import SectionSeven from "../SectionSeven/SectionSeven.js";
import SectionEight from "../SectionEight/SectionEight.js";
import SectionNine from "../SectionNine/SectionNine.js";
import Book from "../Book/Book.js";

const Body = () => (
  <div className={style.root}>
    <div className={style.shelf} />
    <div className={style.text}>
      <SectionOne />
      <Book i={1} />
      <SectionTwo />
      <Book i={2} />
      <SectionThree />
      <Book i={3} />
      <SectionFour />
      <Book i={4} />
      <SectionFive />
      <Book i={5} />
      <SectionSix />
      <Book i={6} />
      <SectionSeven />
      <Book i={7} />
      <SectionEight />
      <Book i={8} />
      <SectionNine />
      <Book i={9} />
    </div>
  </div>
);

export default Body;
