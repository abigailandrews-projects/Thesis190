import React, { useState } from "react";
import { motion } from "framer-motion";
import style from "./LearnModal.module.scss";

export const LearnModal = (props) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.box}>
          <div className={style.text}>
            The Spine Collector Saga Isn’t Over Yet What’s next in the publishing world’s most bewildering scheme?
          </div>
          <div className={style.text}>
            The Talented Mr. Bernardini A young Italian is accused of pulling off the book world’s most perplexing crime. Who is he?
          </div>
          <button
            onClick={() => {
              props.updateOpenModal(false);
            }}
          >
            <div className={style.text}>
              CLOSE
          </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default LearnModal;
