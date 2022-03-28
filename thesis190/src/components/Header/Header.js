import React from "react";
import style from "./Header.module.scss";
import { motion } from "framer-motion";

const Header = () => {
  const title = "The-Spine-Collector";
  const titleArray = [...title];
  const titleAnimated = titleArray.map((x) =>
    x === "-" ? (
      <div className={style.titleSpace}> </div>
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
      </div>
    </div>
  );
};

export default Header;
