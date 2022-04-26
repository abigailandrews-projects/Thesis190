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
      <div className={style.container}>
        <div className={style.shelf}>
          <img src={shelf} alt="shelf" className={style.shelfimg} />
          <div className={style.bookcontainer}>
            <motion.div
              animate={props.passedModal ? "passed" : "notpassed"}
              variants={variants}
            >
              <div onClick={handleClick} className={style.book}>
                {/* {props.i} */}
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
