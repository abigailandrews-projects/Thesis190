import React, { Component } from "react";
import IntroCopy from "../IntroCopy/IntroCopy.js";
import Title from "../Title/Title.js";
import Body from "../Body/Body.js";
import Header from "../Header/Header.js";
import Navigation from "../Navigation/Navigation.js";

import style from "./Article.module.scss";

const useViewport = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  // Return the width so we can use it in our components
  return { width };
}

const MyComponent = () => {
  const { width } = useViewport();
  const breakpoint = 1040;

  return width < breakpoint ?
    <div className={style.mobile}>
      <div className={style.mobiletext}>
        Resize Window <br />(Desktop Compatible Only)
      </div>
    </div>
    :
    <>
      <div className={style.root}>
        <Title />
        <Header />
        <Body />
        <Title />
        <Navigation />
      </div >
    </>

    ;
}

export default class Article extends Component {
  render() {
    return (
      <MyComponent />
    );
  }
}
