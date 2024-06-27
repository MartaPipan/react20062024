import React from "react";
import PropTypes from "prop-types";
import styles from "./ControlCounter.module.css";

// Компонент ControlCounter отримує пропси з батьківського компонента CounterSection
const ControlCounter = ({ step, setStep, handleAutoClick }) => {
  // Функція для обробки зміни значення step
  //способ захопити і обробити зміну значення в конкретному полі введення 
  const handleChange = (e) => {
    const value = e.target.value;//kонвертуємо введене значення в число
    const numberValue = Number(value); 
    setStep(numberValue);//Встановлюємо нове значення кроку
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
  step: PropTypes.number.isRequired, // Крок повинен бути числом і є обов'язковим
  setStep: PropTypes.func.isRequired, // setStep повинна бути функцією і є обов'язковою
  handleAutoClick: PropTypes.func.isRequired, // handleAutoClick повинна бути функцією і є обов'язковою
};

ControlCounter.defaultProps = {
  step: 1,
  setStep: () => {},
  handleAutoClick: () => {},
};

export default ControlCounter;



/**Якщо в коді відсутня функція handleChange: Поле введення може бути присутнім на інтерфейсі користувача, але воно не матиме жодної пов'язаної зміни свого значення. Це означає, що користувач може вводити інформацію, але не буде механізму для реакції на ці зміни i буде неможливо взаємодіяти з введеними користувачем даними. Наприклад, якщо поле введення пов'язане з налаштуваннями або параметрами в реальному часі, зміни не будуть динамічно відображатися.
 * 
*/