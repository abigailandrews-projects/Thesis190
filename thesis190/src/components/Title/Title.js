import React from "react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import style from "./Title.module.scss";
import intro from "../../images/Intro.png";
import intro2 from "../../images/Intro2.png";

const Title = () => (
  <div className={style.root}>
    <ParallaxBanner
      layers={[
        {
          image: intro,
          speed: -20,
        },
        {
          image: intro2,
          speed: -10,
        },
      ]}
      style={{
        height: 700,
        width: `100%`,
        objectFit: `contain`,
      }}
      className={style.banner}
    />
    <Parallax translateY={[0, -1500]}>SCROLL</Parallax>
  </div>
);

export default Title;

//  /* <img className={style.image} src={intro} alt="Intro" />
//* <img className={style.image} src={intro2} alt="Intro" /> */

// // <Parallax translateY={[0, -1500]}>SCROLL</Parallax>
