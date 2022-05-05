import React, { useState } from "react";
import style from "./ModalEight.module.scss";

const RadioButton = ({ label, value, onChange }) => {
  return (
    <label className={style.text}>
      <input type="radio" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};

const CulpritQuiz = (props) => {
  const [culprit, setCulprit] = React.useState("check");

  const handleCheckChange = () => {
    setCulprit("check");
  };

  const handleAttackChange = () => {
    setCulprit("attack");
  };

  const handleDomainChange = () => {
    setCulprit("domain");
    props.setPassedModal(true);
    props.updateOpenModal(false);
  };

  return (
    <div className={style.box}>
      <div className={style.header}>The smoking gun:</div>
      <RadioButton
        label="A cyberattack on a local newspaper"
        value={culprit === "attack"}
        onChange={handleAttackChange}
      />
      <RadioButton
        label="A mistaken domain registration"
        value={culprit === "domain"}
        onChange={handleDomainChange}
      />
      <RadioButton
        label="A $2,000 check"
        value={culprit === "check"}
        onChange={handleCheckChange}
      />
    </div>
  );
};

export const ModalEight = (props) => {
  const handleClose = () => {
    props.updateOpenModal(false);
  };

  return (
    <>
      <div className={style.container}>
        <CulpritQuiz
          passedModal={props.passedModal}
          setPassedModal={props.setPassedModal}
          updateOpenModal={props.updateOpenModal}
        />
      </div>
    </>
  );
};

export default ModalEight;
