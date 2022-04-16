import React from "react";
import style from "./Body.module.scss";
import SectionOne from "../SectionOne/SectionOne.js";
import Book from "../Book/Book.js";

const Body = () => (
  <div className={style.root}>
    <div className={style.shelf} />
    <div className={style.text}>
      <SectionOne />
      <Book i={1} />
      <SectionOne />
      <Book i={2} />
      <SectionOne />
      <Book i={3} />
      <SectionOne />
      <Book i={4} />
    </div>
  </div>
);

export default Body;
