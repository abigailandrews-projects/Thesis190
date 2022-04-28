// libraries
import React, { useState } from "react";
import { motion } from "framer-motion";

// components
import Modal from "../Modal/Modal.js";

// style
import style from "./Navigation.module.scss";

// images
import shelf from "../../images/IntroA.png";

export const Navigation = () => {
  const [openAbout, setOpenAbout] = useState(false);
  const [openLearn, setOpenLearn] = useState(false);

  const handleLearn = () => {
    setOpenLearn(true);
  }
  const handleOriginal = () => {
    window.open("https://www.vulture.com/2022/01/stealing-books-before-release-mystery.html", "_blank");
  }
  const handleAbout = () => {
    setOpenAbout(true);
  }

  return (
    <>
      <div className={style.container}>
        <img src={shelf} alt="shelf" className={style.shelf} />
        <motion.button
          whileHover={{ scale: 1.1 }}
          className={style.learn}
          onClick={handleLearn}>
          LEARN <br />MORE
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className={style.original}
          onClick={handleOriginal}>
          ORIGINAL <br />ARTICLE
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className={style.about}
          onClick={handleAbout}>
          ABOUT
        </motion.button>
        {openAbout &&
          <Modal
            passedModal={false}
            setPassedModal={() => { }}
            updateOpenModal={() => { }}
          />}
        {openLearn &&
          <Modal
            passedModal={false}
            setPassedModal={() => { }}
            updateOpenModal={() => { }}
          />}
      </div>
    </>
  );
};

export default Navigation;
