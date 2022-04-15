import React from "react";
import style from "./Body.module.scss";
import SectionOne from "../SectionOne/SectionOne.js";

const Body = () => (
  <div className={style.root}>
    <SectionOne />
  </div>
);

export default Body;
