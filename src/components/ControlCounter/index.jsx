import React from "react";
import PropTypes from "prop-types";
import styles from "./ControlCounter.module.css";

const ControlCounter = ({ step, setStep, handleAutoClick }) => {
  const handleChange = ({ target: { value } }) => {
    const numberValue = Number(value);

    // Validate the step value
    if (numberValue >= 1 && numberValue <= 1000000) {
      setStep(numberValue);
    }
  };

  return (
    <div className={styles.controlCounter}>
      <h3>Current Step: {step}</h3>
      <input
        type="number"
        name="stepInput"
        value={step}
        min="1"
        max="1000000"
        onChange={handleChange}
        className={styles.input}
      />
      <button onClick={handleAutoClick}>AutoClick</button>
    </div>
  );
};

ControlCounter.propTypes = {
  step: PropTypes.number.isRequired,
  setStep: PropTypes.func.isRequired,
  handleAutoClick: PropTypes.func.isRequired,
};

export default ControlCounter;
