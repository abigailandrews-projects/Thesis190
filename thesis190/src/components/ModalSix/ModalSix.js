import React, { useState } from "react";
import style from "./ModalSix.module.scss";

export const ModalSix = (props) => {
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
              <div className={style.text}>
                Hoppas att du dör av coronaviruset.
              </div>
              <div className={style.text}>Hope you die of the coronavirus.</div>
            </div>
            <div className={style.front}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalSix;
