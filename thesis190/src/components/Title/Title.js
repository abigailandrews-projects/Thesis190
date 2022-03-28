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
          translateY: [0, 50],
          shouldAlwaysCompleteAnimation: true,
          expanded: false,
        },
        {
          image: intro2,
          translateY: [0, -1],
          shouldAlwaysCompleteAnimation: true,
          expanded: false,
        },
      ]}
      style={{
        height: `715px`,
        width: `100%`,
        objectFit: `contain`,
      }}
    />
    <Parallax translateY={[0, -2000]} className={style.text}>
      scroll
    </Parallax>
  </div>
);

export default Title;
