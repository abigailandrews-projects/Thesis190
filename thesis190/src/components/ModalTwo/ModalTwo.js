import React, { useState } from "react";
import { motion } from "framer-motion";
import style from "./ModalTwo.module.scss";

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
        Name:
          <input type="text" value={formData} onChange={handleChange} name="name" />
      </label>
    </form>
  )
}

export const ModalTwo = (props) => {
  const handleClose = () => {
    props.updateOpenModal(false);
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.from}>Francesca Varotto</div>
        <div className={style.from}>@marsilioeditori.it</div>
        <div className={style.from}>Dear Linda and Catherine, I hope you are well. Could you please re-send me the link to the manuscript of The Man Who Chased His Shadow? Thank you! Best, Francesca</div>
        {props.passedModal ?
          <>
            <div className={style.from}>passed@marsilioeditori.it</div>
            <button onClick={handleClose}>Close</button>
          </>
          : <AddressForm passedModal={props.passedModal}
            setPassedModal={props.setPassedModal}
            updateOpenModal={props.updateOpenModal} />}

      </div>
    </>
  );
};

export default ModalTwo;
