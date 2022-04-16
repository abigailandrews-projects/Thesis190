import React from "react";
import style from "./Body.module.scss";
import SectionOne from "../SectionOne/SectionOne.js";
import Book from "../Book/Book.js";

const Body = () => (
  <div className={style.root}>
    <div className={style.shelf}>Hi</div>
    <div className={style.text}>
      <SectionOne />
      <Book />
      <SectionOne />
      <Book />
      <SectionOne />
      <Book />
      <SectionOne />
      <Book />
    </div>
  </div>
);

export default Body;
