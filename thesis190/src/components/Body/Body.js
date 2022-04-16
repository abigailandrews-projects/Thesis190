import React from "react";
import style from "./Body.module.scss";
import SectionOne from "../SectionOne/SectionOne.js";
import SectionTwo from "../SectionTwo/SectionTwo.js";
import SectionThree from "../SectionThree/SectionThree.js";
import SectionFour from "../SectionFour/SectionFour.js";
import SectionFive from "../SectionFive/SectionFive.js";
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
      {/* TODO  */}
      <SectionOne />
      <Book i={6} />
      <SectionOne />
      <Book i={7} />
      <SectionOne />
      <Book i={8} />
      <SectionOne />
      <Book i={9} />
    </div>
  </div>
);

export default Body;
