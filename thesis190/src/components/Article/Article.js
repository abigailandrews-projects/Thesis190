import React, { Component } from "react";
import IntroCopy from "../IntroCopy/IntroCopy.js";
import Title from "../Title/Title.js";
import Body from "../Body/Body.js";
import Header from "../Header/Header.js";

import style from "./Article.module.scss";

export default class Article extends Component {
  render() {
    return (
      <div className={style.root}>
        <Title />
        <Header />
        <Body />
        <Title />
        <IntroCopy />
      </div>
    );
  }
}
