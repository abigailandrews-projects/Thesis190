import React, { useState } from "react";
import style from "./ModalFive.module.scss";

const AddressForm = (props) => {
  const [formData, setFormData] = useState("<3");

  const handleChange = (e) => {
    setFormData(e.target.value);
    if (e.target.value === ";)") {
      props.setPassedModal(true);
      props.updateOpenModal(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" value={formData} onChange={handleChange} />
      </label>
    </form>
  );
};

export const ModalFive = (props) => {
  const handleClose = () => {
    props.updateOpenModal(false);
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.box}>
          <div className={style.email}>
            The Spine Collector's favorite emoticon was:
          </div>
          <div className={style.email}>
            {props.passedModal ? (
              <>
                <div className={style.text}>;)</div>
                <button onClick={handleClose}>Close</button>
              </>
            ) : (
              <AddressForm
                passedModal={props.passedModal}
                setPassedModal={props.setPassedModal}
                updateOpenModal={props.updateOpenModal}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalFive;
