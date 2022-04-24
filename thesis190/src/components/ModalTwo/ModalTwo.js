import React, { useState } from "react";
import style from "./ModalTwo.module.scss";

const RadioButton = ({ label, value, onChange }) => {
  return (
    <label className={style.text}>
      <input type="radio" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};

const CulpritQuiz = (props) => {
  const [culprit, setCulprit] = React.useState('russians');

  const handleRussiansChange = () => {
    setCulprit('russians');
  };

  const handleHollywoodChange = () => {
    setCulprit('hollywood');
  };

  const handleReaderChange = () => {
    setCulprit('reader');
  };

  const handleLilaChange = () => {
    setCulprit('lila');
  };

  const handleManChange = () => {
    setCulprit('man');
    props.setPassedModal(true);
    props.updateOpenModal(false);
  };

  return (
    <div className={style.box}>
      <div className={style.header}>“The culprit has been identified.”</div>
      <RadioButton
        label="The Russians"
        value={culprit === 'russians'}
        onChange={handleRussiansChange}
      />
      <RadioButton
        label="A Hollywood producer desperate for early access"
        value={culprit === 'hollywood'}
        onChange={handleHollywoodChange}
      />
      <RadioButton
        label="An impatient reader"
        value={culprit === 'reader'}
        onChange={handleReaderChange}
      />
      <RadioButton
        label="Lila Shapiro of New York Magazine"
        value={culprit === 'lila'}
        onChange={handleLilaChange}
      />
      <RadioButton
        label="A man working in the New York publishing scene"
        value={culprit === 'man'}
        onChange={handleManChange}
      />
    </div>
  );
}

export const ModalTwo = (props) => {
  const handleClose = () => {
    props.updateOpenModal(false);
  }

  return (
    <>
      <div className={style.container}>
        <CulpritQuiz passedModal={props.passedModal}
          setPassedModal={props.setPassedModal}
          updateOpenModal={props.updateOpenModal} />
      </div>
    </>
  );
};

export default ModalTwo;
