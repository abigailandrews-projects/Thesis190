import React, { useState } from "react";
import style from "./ModalThree.module.scss";

const AddressForm = (props) => {
  const [formData, setFormData] = useState("@bockaqency.com");

  const handleChange = (e) => {
    setFormData(e.target.value);
    if (e.target.value === "@bookagency.com") {
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

export const ModalThree = (props) => {
  const handleClose = () => {
    props.updateOpenModal(false);
  };

  return (
    <>
      <div className={style.container}>
        <div className={style.box}>
          <div className={style.email}>
            - t’s became f’s (@wwnorfon.com), q’s replaced g’s
            (@wylieaqency.com), r’s and n’s cornbined to make m’s
            (@penguinrandornhouse.com)
            <br />
            <br />
            - books became bocks, unless the company was Dutch, in which case
            boek was Anglicized to book
            <br />
            <br />- wrote like someone in publishing, abbreviating to “MS” for
            manuscript and “WEL” for world English-language rights
          </div>

          {props.passedModal ? (
            <>
              <div className={style.text}>@marsilioeditori.com</div>
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
    </>
  );
};

export default ModalThree;
