import React from "react";
import styles from "./ControlCounter.module.css";

const ControlCounter = (props) => {
  const { setStep, step, handleAutoClick } = props;
  return (
    <div className={styles.controlCounter}>
      <h3>Current Step: {step}</h3>
      <input
        type="number"
        name="stepInput"
        value={step}
        min="1"
        max="1000000"
        onChange={({ target: { value } }) => {
          setStep(Number(value));
        }}
        className={styles.input}
      />
    </div>
  );
};

export default ControlCounter;
