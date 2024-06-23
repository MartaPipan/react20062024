import React, { Component } from "react";
import styles from "./Counter.module.css";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      isAdd: true,
    };
  }
    handelChangeMode = () => {
        const { isAdd } = this.state;
        this.setState({ isAdd: !isAdd })
    }
    handelCount = () => {
        this.setState((state, props) => {
            const { count, isAdd } = state;
            const newCount = isAdd ? count + props.step : count - props.step;
            return { count: newCount };
        })
    }

  render() {
    const { count, isAdd } = this.state;
    return (
      <article className={styles.counter}>
        <h2>{count}</h2>
        <button onClick={this.handelCount}>{isAdd ? "add" : "sub"}</button>
        <button onClick={this.handelChangeMode}>change</button>
      </article>
    );
  }
}

export default Counter;
