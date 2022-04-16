import React, { useState } from "react";
import { motion } from "framer-motion";
import style from "./Book.module.scss";

export const Book = (i) => {
  const [isClicked, setIsClicked] = useState(false);
  const variants = {
    clicked: {
      position: "sticky",
      top: "400px",
      x: `${-285 + i.i * 25}px`,
      y: `-72px`,
    },
    notclicked: {},
  };

  return (
    <motion.div
      animate={isClicked ? "clicked" : "notclicked"}
      variants={variants}
    >
      <div
        onClick={() => {
          setIsClicked((isClicked) => !isClicked);
        }}
        className={style.container}
      ></div>
    </motion.div>
  );
};

export default Book;
