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
    this.startAutoClick();
  }

  componentWillUnmount() {
    clearInterval(this.state.autoClickInterval);
  }

  // Функція для встановлення нового значення step
  setStep = (newStep) => {
    const step = Number(newStep);
    if (step >= 1 && step <= 1000000) {
      this.setState({ step });
    } else {
      alert("Step must be between 1 and 1,000,000");
    }
  };

  // Функція для початку автоматичного кліку
  startAutoClick = () => {
    const { autoClickFrequency } = this.state;
    const interval = setInterval(this.autoClick, autoClickFrequency);
    this.setState({ autoClickInterval: interval });
  };

  // Функція для керування автоматичним кліком
  handleAutoClick = () => {
    const { autoClickInterval } = this.state;
    if (autoClickInterval) {
      clearInterval(autoClickInterval);
      this.setState({ autoClickInterval: null, autoClickTimeLeft: 30 });
    } else {
      this.startAutoClick();
    }
  };

  // Функція для обробки зміни лічильника
  handleCount = () => {
    this.setState((prevState) => {
      const { count, mode, step } = prevState;
      const newCount = mode === "add" ? count + step : count - step;
      return { count: newCount };
    });
  };

  // Функція для автоматичного кліку
  autoClick = () => {
    this.setState((prevState) => {
      const { autoClickTimeLeft, step, count, mode } = prevState;
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

  // Функція для зміни режиму (додавання/віднімання)
  handleChangeMode = () => {
    this.setState((prevState) => ({
      mode: prevState.mode === "add" ? "subtract" : "add",
    }));
  };

  render() {
    const { step, autoClickTimeLeft, count, mode } = this.state;
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

CounterSection.propTypes = {
  // Пропсів не потрібно для цього батьківського компонента, оскільки він не отримує зовнішніх пропсів.
};

export default CounterSection;
