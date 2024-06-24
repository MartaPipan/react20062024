import React, { Component } from "react";
import styles from "./Counter.module.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      mode: "add", // Modo inicial de adição
    };
  }

  handleCount = () => {
    const { count, mode } = this.state;
    const { step } = this.props;
    const newCount = mode === "add" ? count + step : count - step;
    this.setState({ count: newCount });
  };

  handleChangeMode = () => {
    this.setState((prevState) => ({
      mode: prevState.mode === "add" ? "subtract" : "add",
    }));
  };

  render() {
    const { count } = this.state;
    const { autoClickTimeLeft } = this.props;
    return (
      <article className={styles.counter}>
        <h2>{count}</h2>
        <p>AutoClick Time Left: {autoClickTimeLeft}s</p>
        <div className={styles.controls}>
          <button onClick={this.handleCount}>
            {this.state.mode === "add" ? "Add" : "Subtract"}
          </button>
          <button onClick={this.handleChangeMode}>Change Mode</button>
        </div>
      </article>
    );
  }
}

export default Counter;
