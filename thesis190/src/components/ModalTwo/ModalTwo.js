import React, { useState } from "react";
import style from "./ModalTwo.module.scss";

const RadioButton = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="radio" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};

const CulpritQuiz = (props) => {
  const [culprit, setCulprit] = React.useState('dog');

  const handleCatChange = () => {
    setCulprit('cat');
  };

  const handleDogChange = () => {
    setCulprit('dog');
  };

  return (
    <div>
      <RadioButton
        label="Cat"
        value={culprit === 'cat'}
        onChange={handleCatChange}
      />
      <RadioButton
        label="Dog"
        value={culprit === 'dog'}
        onChange={handleDogChange}
      />
    </div>
  );
}

// const CulpritQuiz = (props) => {
//   const [formData, setFormData] = useState('@marsilioeditori.it');

//   const handleChange = (e) => {
//     setFormData(e.target.value);
//     if (e.target.value === "@marsilioeditori.com") {
//       props.setPassedModal(true);
//       props.updateOpenModal(false);
//     }
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <p>“The culprit has been identified.”</p>
//       <input type="radio" name="culprit" value="RUSSIANS" id="russians" />
//       <label for="russians">The Russians</label>
//       <br />
//       <input type="radio" name="culprit" value="HOLLYWOOD" id="hollywood" />
//       <label for="hollywood">A Hollywood producer desperate for early access</label>
//       <br />
//       <input type="radio" name="culprit" value="READER" id="reader" />
//       <label for="reader">An impatient reader</label>
//       <br />
//       <input type="radio" name="culprit" value="LILA" id="lila" />
//       <label for="lila">Lila Shapiro of New York Magazine</label>
//       <br />
//       <input type="radio" name="culprit" value="MAN" id="man" />
//       <label for="man">A man working in the New York publishing scene</label>
//       <br />
//     </form>
//   )
// }

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
