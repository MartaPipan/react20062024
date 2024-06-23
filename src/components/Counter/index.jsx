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

  componentDidMount() {
    this.startAutoClick(1000); // Chama a função a cada 1 segundo
  }

  componentWillUnmount() {
    clearInterval(this.state.autoClickInterval);
  }

  startAutoClick = (frequency) => {
    const autoClickInterval = setInterval(this.autoClick, frequency);
    this.setState({ autoClickInterval });
  };

  stopAutoClick = () => {
    clearInterval(this.state.autoClickInterval);
    this.setState({ autoClickInterval: null });
  };

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

  handleChangeMode = () => {
    this.setState((prevState) => ({ isAdd: !prevState.isAdd }));
  };

  handleCount = () => {
    this.setState((prevState) => {
      const newCount = prevState.isAdd ? prevState.count + this.props.step : prevState.count - this.props.step;
      return { count: newCount };
    });
  };

  render() {
    const { count, isAdd, autoClickTimeLeft } = this.state;
    return (
      <article className={styles.counter}>
        <h2>{count}</h2>
        <p>AutoClick Time Left: {autoClickTimeLeft}s</p>
        <button onClick={this.handleCount}>{isAdd ? "Add" : "Sub"}</button>
        <button onClick={this.handleChangeMode}>Change</button>
      </article>
    );
  }
}

export default Counter;