import React, { Component } from "react";
import styles from "./Counter.module.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isAdd: true,
      autoClickInterval: null,
      autoClickTimeLeft: 30, // Tempo em segundos
    };
  }


  autoClick = () => {
    const { count, isAdd, autoClickTimeLeft } = this.state;
    if (autoClickTimeLeft <= 0) {
      this.stopAutoClick();
      return;
    }

    const newCount = isAdd ? count + this.props.step : count - this.props.step;
    this.setState((prevState) => ({
      count: newCount,
      autoClickTimeLeft: prevState.autoClickTimeLeft - 1,
    }));
  };

  handelChangeMode = () => {
    const { isAdd } = this.state;
    this.setState({ isAdd: !isAdd });
  };

  handelCount = () => {
    const { count, isAdd } = this.state;
    const newCount = isAdd ? count + this.props.step : count - this.props.step;
    this.setState({ count: newCount });
  };

  render() {
    const { count, isAdd, autoClickTimeLeft } = this.state;
    return (
      <article className={styles.counter}>
        <h2>{count}</h2>
        <p>AutoClick Time Left: {autoClickTimeLeft}s</p>
        <button onClick={this.handelCount}>{isAdd ? "add" : "sub"}</button>
        <button onClick={this.handelChangeMode}>change</button>
      </article>
    );
  }
}

export default Counter;