import React, { Component } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Article from "./components/Article/Article.js";

export default class App extends Component {
  render() {
    return (
      <ParallaxProvider>
        <Article />
      </ParallaxProvider>
    );
  }
}
