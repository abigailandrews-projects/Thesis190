import React from "react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import style from "./Wall.module.scss";
import intro from "../../images/Wall2.png";
import intro2 from "../../images/Wall1.png";

const Wall = () => (
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
          translateY: [20, 0],
          shouldAlwaysCompleteAnimation: true,
          expanded: false,
        },
      ]}
      style={{ width: `100%`, height: `500px`, objectFit: `contain` }}
    />
  </div>
);

export default Wall;
