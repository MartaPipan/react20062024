import React from "react";
import PropTypes from "prop-types";
import styles from "./Counter.module.css";

// Компонент Counter отримує пропси з батьківського компонента CounterSection
const Counter = ({
  count,
  mode,
  handleCount,
  handleChangeMode,
  autoClickTimeLeft,
}) => {
  return (
    <article className={styles.counter}>
      <h2>{count}</h2>
      <p>AutoClick Time Left: {autoClickTimeLeft}s</p>
      <div className={styles.controls}>
        <button onClick={handleCount}>
          {mode === "add" ? "Add" : "Subtract"}
        </button>
        <button onClick={handleChangeMode}>Change Mode</button>
      </div>
    </article>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired, // Кількість повинна бути числом і є обов'язковою
  mode: PropTypes.oneOf(["add", "subtract"]).isRequired, // Режим повинен бути або "add", або "subtract" і є обов'язковим
  handleCount: PropTypes.func.isRequired, // handleCount повинна бути функцією і є обов'язковою
  handleChangeMode: PropTypes.func.isRequired, // handleChangeMode повинна бути функцією і є обов'язковою
  autoClickTimeLeft: PropTypes.number.isRequired, // Час, що залишився до автокліку, повинен бути числом і є обов'язковим
};

Counter.defaultProps = {
  count: 0,
  mode: "add",
  handleCount: () => {},
  handleChangeMode: () => {},
  autoClickTimeLeft: 30,
};

export default Counter;
