import React, { useState } from "react";
import { motion } from "framer-motion";
import style from "./Book.module.scss";

const variants = {
  clicked: { scale: 2, position: "sticky", top: "180px" },
  notclicked: { scale: 1 },
};

export const Book = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <motion.div
      animate={isClicked ? "clicked" : "notclicked"}
      variants={variants}
    >
      <div
        onClick={() => setIsClicked((isClicked) => !isClicked)}
        className={style.container}
      >
        Book
      </div>
    </motion.div>
  );
};

export default Book;
