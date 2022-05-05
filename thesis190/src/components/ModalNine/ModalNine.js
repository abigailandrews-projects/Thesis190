import React, { useState } from "react";
import style from "./ModalNine.module.scss";

export const ModalNine = (props) => {
  const handleClose = () => {
    props.updateOpenModal(false);
  };
  const handleClick = () => {
    props.setPassedModal(true);
    props.updateOpenModal(false);
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.box}>
          <div className={style.envelope} onClick={handleClick}>
            <div className={style.back}></div>
            <div className={style.letter}>
              <div className={style.text}>It's me!</div>
            </div>
            <div className={style.front}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalNine;
