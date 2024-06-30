import React from "react";
import PropTypes from "prop-types";
import styles from "./Counter.module.scss";

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
        {/* Кнопка для ручного збільшення/зменшення */}
        <button onClick={handleCount}>
          {mode === "add" ? "Add" : "Subtract"}
        </button>
        {/* Кнопка для зміни режиму */}
        <button onClick={handleChangeMode}>Change Mode</button>
      </div>
    </article>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  mode: PropTypes.oneOf(["add", "subtract"]).isRequired,
  handleCount: PropTypes.func.isRequired,
  handleChangeMode: PropTypes.func.isRequired,
  autoClickTimeLeft: PropTypes.number.isRequired,
};

export default Counter;
