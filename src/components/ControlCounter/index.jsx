import React from "react";
import styles from "./ControlCounter.module.css";

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
        onChange={(e) => setStep(parseInt(e.target.value))}
        className={styles.input}
      />
      <button onClick={handleAutoClick}>AutoClick</button>
    </div>
  );
};

export default ControlCounter;