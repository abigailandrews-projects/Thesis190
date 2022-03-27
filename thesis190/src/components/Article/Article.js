import React, { Component } from "react";
import IntroCopy from "../IntroCopy/IntroCopy.js";

import style from "./Article.module.scss";

export default class Article extends Component {
  render() {
    return (
      <div className={style.root}>
        <IntroCopy />
        <IntroCopy />
        <IntroCopy />
        <IntroCopy />
      </div>
    );
  }
}
