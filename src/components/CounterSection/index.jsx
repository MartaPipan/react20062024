import React, { Component } from "react";
import Counter from "../Counter";
import ControlCounter from "../ControlCounter";
import styles from "./CounterSection.module.css";

class CounterSection extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      autoClickInterval: null,
      autoClickTimeLeft: 30,
      autoClickFrequency: 1000,
      count: 0,
      mode: "add",
    };
  }

  componentDidMount() {
    console.log("componentDidMount: startAutoClick");
    this.startAutoClick();
  }

  componentDidUpdate(prevProps, prevState) {
    // Adicionando log para verificar se o componente está sendo atualizado
    console.log("componentDidUpdate: State updated");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: clearInterval");
    clearInterval(this.state.autoClickInterval);
  }

  setStep = (newStep) => {
    const step = Number(newStep);
    if (step >= 1 && step <= 1000000) {
      console.log("setStep:", step);
      this.setState({ step });
    }
  };

  startAutoClick = () => {
    console.log("startAutoClick");
    const { autoClickFrequency } = this.state;
    if (this.state.autoClickInterval) {
      clearInterval(this.state.autoClickInterval);
    }
    const interval = setInterval(this.autoClick, autoClickFrequency);
    this.setState({ autoClickInterval: interval });
  };

  handleAutoClick = () => {
    const { autoClickInterval } = this.state;
    if (autoClickInterval) {
      console.log("handleAutoClick: clearInterval");
      clearInterval(autoClickInterval);
      this.setState({ autoClickInterval: null, autoClickTimeLeft: 30 });
    } else {
      console.log("handleAutoClick: startAutoClick");
      this.startAutoClick();
    }
  };

  handleCount = () => {
    this.setState((prevState) => {
      const { count, mode, step } = prevState;
      const newCount = mode === "add" ? count + step : count - step;
      return { count: newCount };
    });
  };

  autoClick = () => {
    console.log("autoClick executed");
    this.setState((prevState) => {
      const { autoClickTimeLeft, count, mode, step } = prevState;
      if (autoClickTimeLeft <= 0) {
        clearInterval(prevState.autoClickInterval);
        return { autoClickInterval: null };
      }
      const newCount = mode === "add" ? count + step : count - step;
      return {
        count: newCount,
        autoClickTimeLeft: autoClickTimeLeft - 1,
      };
    });
  };

  handleChangeMode = () => {
    this.setState((prevState) => ({
      mode: prevState.mode === "add" ? "subtract" : "add",
    }));
  };

  render() {
    const { step, autoClickTimeLeft, count, mode } = this.state;
    console.log("render: step =", step, "autoClickTimeLeft =", autoClickTimeLeft, "count =", count, "mode =", mode);
    return (
      <section className={styles.container}>
        <Counter
          count={count}
          mode={mode}
          handleCount={this.handleCount}
          handleChangeMode={this.handleChangeMode}
          autoClickTimeLeft={autoClickTimeLeft}
        />
        <ControlCounter
          step={step}
          setStep={this.setStep}
          handleAutoClick={this.handleAutoClick}
        />
      </section>
    );
  }
}

export default CounterSection;
