import React from "react";
import PropTypes from "prop-types";
import styles from "./ControlCounter.module.css";
// Компонент ControlCounter отримує пропси з батьківського компонента CounterSection
const ControlCounter = ({ step, setStep, handleAutoClick }) => {
  return (
    <div className={styles.controlCounter}>
      <h3>Current Step: {step}</h3>
      <input
        type="number"
        name="stepInput"
        value={step}
        min="1"
        max="1000000"
        onChange={(e) => setStep(Number(e.target.value))}
        className={styles.input}
      />
      <button onClick={handleAutoClick}>AutoClick</button>
    </div>
  );
};

ControlCounter.propTypes = {
  step: PropTypes.number.isRequired, // Крок повинен бути числом і є обов'язковим
  setStep: PropTypes.func.isRequired, // setStep повинна бути функцією і є обов'язковою
  handleAutoClick: PropTypes.func.isRequired, // handleAutoClick повинна бути функцією і є обов'язковою
};

ControlCounter.defaultProps = {
  step: 1,
  setStep: () => { },
  handleAutoClick: ()=>{},
}

export default ControlCounter;