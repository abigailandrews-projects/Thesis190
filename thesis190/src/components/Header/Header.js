import React from "react";
import style from "./Header.module.scss";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import shelf from "../../images/IntroA.png";

const Header = () => {
  const title = "The-Spine-Collector";
  const titleArray = [...title];
  const titleAnimated = titleArray.map((x) =>
    x === "-" ? (
      <div className={style.titleSpace}> </div>
    ) : x === "l" ? (
      <Parallax translateY={[0, 488]} startScroll={800} endScroll={950}>
        <motion.div whileHover={{ rotateY: 90 }} className={style.title}>
          {x}
        </motion.div>
      </Parallax>
    ) : (
          <motion.div whileHover={{ rotateY: 90 }} className={style.title}>
            {x}
          </motion.div>
        )
  );
  return (
    <div className={style.root}>
      <div className={style.header}>
        <div className={style.titleBox}>{titleAnimated}</div>
        <div className={style.description}>
          For years, a mysterious figure has been stealing books before their
          release. Is it espionage? Revenge? Or a complete waste of time?
        </div>
        <div className={style.authors}>
          By Reeves Wiedeman | With Lila Shapiro
        </div>
        <div className={style.date}>Jan. 06, 2022</div>
      </div>
      <img src={shelf} alt="shelf" className={style.shelf} />
    </div>
  );
};

export default Header;
