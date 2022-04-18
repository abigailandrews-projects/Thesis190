import React, { useState } from "react";
import { motion } from "framer-motion";
import style from "./Modal.module.scss";

export const Modal = (props) => {
  return (
    <>
      <div className={style.container}>
        <button
          onClick={() => {
            // TODO CONDITIONAL EVIDENCE GAME HERE
            props.setPassedModal(!props.passedModal);
            props.updateOpenModal(false);
          }}
        >
          Close
        </button>
      </div>
    </>
  );
};

export default Modal;
