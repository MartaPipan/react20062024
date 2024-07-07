import React from "react";
import PropTypes from "prop-types";
import styles from "./ControlCounter.module.scss";
import { withLanguage } from '../HOCs/index';
import CONSTANTS from '../../constants';

const { TRANSLATIONS } = CONSTANTS;


const ControlCounter = ({ step, setStep, handleAutoClick, language }) => {
  return (
    <div className={styles.controlCounter}>
      <h3>Current step: {step}</h3>
      {/* Поле введення для зміни кроку */}
      <input
        type="number"
        name="stepInput"
        value={step}
        min="1"
        max="1000000"
        onChange={() => setStep(Number())}
        className={styles.input}
      />
      {/* Кнопка для запуску/зупинки автоматичного кліку */}
      <button onClick={handleAutoClick}>{TRANSLATIONS[language].AutoClick}</button>
    </div>
  );
};

ControlCounter.propTypes = {
  step: PropTypes.number.isRequired, // Крок має бути числом
  setStep: PropTypes.func.isRequired, // Функція для зміни кроку
  handleAutoClick: PropTypes.func.isRequired, // Функція для автоматичного кліку
};

ControlCounter.defaultProps = {
  step: 1,
  setStep: () => {},
  handleAutoClick: () => {},
};

export default withLanguage(ControlCounter);
