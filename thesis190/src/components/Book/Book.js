import React, { useState } from "react";
import { motion } from "framer-motion";
import style from "./Book.module.scss";

export const Book = (props) => {
  const variants = {
    passed: {
      position: "fixed",
      top: "400px",
      x: `${-285 + props.i * 25}px`,
      y: `-72px`,
    },
    notpassed: {},
  };
  const handleClick = () => {
    props.updateOpenModal(true);
  };

  return (
    <>
      <motion.div
        animate={props.passedModal ? "passed" : "notpassed"}
        variants={variants}
      >
        <div onClick={handleClick} className={style.container}>
          {props.i}
          {props.passedModal}
        </div>
      </motion.div>
    </>
  );
};

export default Book;
