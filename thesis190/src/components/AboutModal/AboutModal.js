import React, { useState } from "react";
import { motion } from "framer-motion";
import style from "./AboutModal.module.scss";

export const AboutModal = (props) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.box}>
          <div className={style.text}>
            “‘The Spine Collector’: An Interactive Investigation” transforms a piece of investigative journalism titled “The Spine Collector” from New York Magazine into a work of interactive journalism. The project is a web-based, desktop compatible application coded with React, framer-motion, and SCSS modules. The site moves the reader through the article's original text in a gamified, animated way. It makes use of text, illustration, animation, and user mouse and keyboard input to transform the media text.
          </div>
          <div className={`${style.text} ${style.indent}`}>
            The points of editorial interaction within the article serve as sites of performance and entertainment, tools of world-building and reader immersion, and sources of engagement and education. They alter the reader’s relationship to the text by giving the reader an active investigative role in the article, requiring reader site navigation, and shifting the reader point of view. The project seeks to comment on the rhetorical power, affordances, and consequences of interactive article formats.</div>
          <button
            onClick={() => {
              props.updateOpenModal(false);
            }}
          >
            <div className={style.text}>
              Close
          </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutModal;
