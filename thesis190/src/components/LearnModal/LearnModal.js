import React, { useState } from "react";
import { motion } from "framer-motion";
import style from "./LearnModal.module.scss";

export const LearnModal = (props) => {
  const handleBox1 = () => {
    window.open("https://www.vulture.com/2022/01/fbi-may-have-cracked-open-the-case-of-the-spine-collector.html", "_blank");
  }

  const handleBox2 = () => {
    window.open("https://www.vulture.com/2022/02/filippo-bernardini-publishing-manuscripts-books-scam.html", "_blank");
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.box}>
          <div className={style.related}>
            RELATED READING
          </div>
          <button className={style.subbox} onClick={handleBox1}>
            <div className={style.title}>
              The Spine Collector Saga Isn’t Over Yet
            </div>
            <div className={style.subtitle}>
              What’s next in the publishing world’s most bewildering scheme?
            </div>
          </button>
          <button className={style.subbox} onClick={handleBox2}>
            <div className={style.title}>
              The Talented Mr. Bernardini
            </div>
            <div className={style.subtitle}>
              A young Italian is accused of pulling off the book world’s most perplexing crime. Who is he?
            </div>
          </button>
          <button
            onClick={() => {
              props.updateOpenModal(false);
            }}
          >
            <div className={style.close}>
              CLOSE
          </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default LearnModal;
