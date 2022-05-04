import React from "react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import style from "./Board.module.scss";
import intro from "../../images/End.png";
import intro2 from "../../images/End2.png";

const Board = () => (
  <div className={style.root}>
    <ParallaxBanner
      layers={[
        {
          image: intro,
          translateY: [10, 0],
          shouldAlwaysCompleteAnimation: true,
          expanded: false,
        },
        {
          image: intro2,
          translateY: [1, 0],
          shouldAlwaysCompleteAnimation: true,
          expanded: false,
        },
      ]}
      style={{
        height: `450px`,
        maxWidth: `100%`,
        objectFit: `contain`,
      }}
    />
  </div>
);

export default Board;
