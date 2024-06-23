import React from "react";
import styles from "./ControlCounter.module.css"

const ControlCounter = (props) => {
  const { setStep, step } = props;
  return (
    <div className={styles.controlCounter}>
      <h3>step={step}</h3>
      <input
        type="number"
        name="stepInput"
        value={step}
        onChange={({ target: { value } }) => {
          setStep(Number(value));
        }}
        className={styles.input}
      />
    </div>
  );
};

export default ControlCounter;