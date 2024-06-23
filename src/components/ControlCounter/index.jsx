import React from "react";
import styles from "./ControlCounter.module.css";

const ControlCounter = (props) => {
  const { setStep, step, handleAutoClick, setFrequency, frequency } = props;
  return (
    <div className={styles.controlCounter}>
      <h3>Step: {step}</h3>
      <input
        type="number"
        name="stepInput"
        value={step}
        onChange={({ target: { value } }) => {
          setStep(Number(value));
        }}
        className={styles.input}
      />
      <h3>Frequency (ms): {frequency}</h3>
      <input
        type="number"
        name="frequencyInput"
        value={frequency}
        onChange={({ target: { value } }) => {
          setFrequency(Number(value));
        }}
        className={styles.input}
      />
      <button onClick={handleAutoClick}>AutoClick</button>{" "}
      {/* Botão AutoClick */}
    </div>
  );
};

export default ControlCounter;
