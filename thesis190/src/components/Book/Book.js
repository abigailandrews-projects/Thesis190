import React, { useState } from "react";
import { motion } from "framer-motion";
import style from "./Book.module.scss";
import shelf from "../../images/MiniShelf.png";
import bookcover from "../../images/BookCover.png";

export const Book = (props) => {
  const variants = {
    passed: {
      position: "fixed",
      top: "400px",
      x: `${-305 + props.i * 25}px`,
      y: `-90px`,
    },
    notpassed: {},
  };
  const handleClick = () => {
    props.updateOpenModal(true);
  };

  const validScroll = (scrollY) => {
    return scrollY >= 1630;
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.shelf}>
          <img src={shelf} alt="shelf" className={style.shelfimg} />
          <div className={style.bookcontainer}>
            <motion.div
              animate={props.passedModal ? "passed" : "notpassed"}
              variants={variants}
            >
              <div
                onClick={handleClick}
                className={`${style.book} ${
                  !validScroll(props.isValidPosition) && style.opacity
                  }`}
              >
                <img src={bookcover} alt="shelf" className={style.bookcover} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
