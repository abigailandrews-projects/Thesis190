import React, { useState } from "react";
import style from "./ModalOne.module.scss";

const AddressForm = (props) => {
  const [formData, setFormData] = useState('@marsilioeditori.it');

  const handleChange = (e) => {
    setFormData(e.target.value);
    if (e.target.value === "@marsilioeditori.com") {
      props.setPassedModal(true);
      props.updateOpenModal(false);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" value={formData} onChange={handleChange} />
      </label>
    </form>
  )
}

export const ModalOne = (props) => {
  const handleClose = () => {
    props.updateOpenModal(false);
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.box}>
          <div className={style.from}>Francesca Varotto
            <br /> Re: Lagercrantz Manuscript
          </div>
          <div className={style.email}>Dear Linda and Catherine,</div>
          <div className={style.email}>I hope you are well. Could you please re-send me the link to the manuscript of The Man Who Chased His Shadow? Thanks! </div>
          <div className={style.email}>Best,</div>
          <div className={style.email}>Francesca{props.passedModal ?
            <>
              <div className={style.text}>@marsilioeditori.com</div>
              <button onClick={handleClose}>Close</button>
            </>
            : <AddressForm passedModal={props.passedModal}
              setPassedModal={props.setPassedModal}
              updateOpenModal={props.updateOpenModal} />}</div>

        </div>
      </div>
    </>
  );
};

export default ModalOne;
