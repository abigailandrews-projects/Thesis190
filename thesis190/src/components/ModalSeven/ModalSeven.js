import React, { useState } from "react";
import style from "./ModalSeven.module.scss";


export const ModalSeven = (props) => {
  const handleClose = () => {
    props.updateOpenModal(false);
  }
  const handleClick = () => {
    props.setPassedModal(true);
    props.updateOpenModal(false);
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.box}>
          <div className={style.envelope} onClick={handleClick}>
            <div className={style.back}></div>
            <div className={style.letter}>
              <div className={style.text}>
                How about Fuck You Hill?
              </div>
              <div className={style.text}>
                Or can I meet you at Silly Cunt Square?
              </div>
              <div className={style.text}>
                TAKE MY ADVICE. DROP THIS STUPID ARTICLE AND STOP WITH IT IMMEDIATELY!!!
              </div>
            </div>
            <div className={style.front}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalSeven;
