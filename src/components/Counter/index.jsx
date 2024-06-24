import React from "react";
import styles from "./Counter.module.css";

const Counter = ({ count, mode, handleCount, handleChangeMode, autoClickTimeLeft }) => {
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

export default Counter;
