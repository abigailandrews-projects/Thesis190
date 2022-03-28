import React from "react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import style from "./Paragraph.module.scss";
import paper1 from "../../images/Paper1.png";
import paper2 from "../../images/Paper2.png";
import paper3 from "../../images/Paper3.png";

const Paragraph = () => (
  <div className={style.root}>
    <img src={paper3} alt="paper3" className={style.paper} />
    {/* <ParallaxBanner
      layers={[
        {
          image: paper3,
          scale: [2, 1],
          // translateY: [0, 50],
          shouldAlwaysCompleteAnimation: true,
          expanded: false,
        },
        {
          image: paper2,
          translateY: [4, 45],
          shouldAlwaysCompleteAnimation: true,
          expanded: false,
        },
        {
          image: paper,
          translateY: [10, 30],
          shouldAlwaysCompleteAnimation: true,
          expanded: false,
        },
      ]}
      style={{
        height: `700px`,
        width: `100%`,
        objectFit: `contain`,
      }}
    /> */}
  </div>
);

export default Paragraph;
