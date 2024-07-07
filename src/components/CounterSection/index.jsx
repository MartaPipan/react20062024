import React, { Component } from "react";
import Counter from "../Counter";
import ControlCounter from "../ControlCounter";
import styles from "./CounterSection.module.scss";
import { withLanguage } from "../../components/HOCs";
import CONSTANTS from "../../constants";

const { TRANSLATIONS } = CONSTANTS;

class CounterSection extends Component {
  constructor() {
    super();
    // Ініціалізація стану компонента
    this.state = {
      step: 1,
      autoClickInterval: null,
      autoClickTimeLeft: 30,
      autoClickFrequency: 1000,
      count: 0,
      mode: "add", // Режим: додавання або віднімання
    };
  }

  componentDidMount() {
    this.startAutoClick(); // Запуск автоматичного кліку після монтання
  }

  componentWillUnmount() {
    // Очищення інтервалу перед розмонтуванням
    clearInterval(this.state.autoClickInterval);
  }

  // Функція для встановлення кроку
  setStep = (newStep) => {
    if (newStep >= 1 && newStep <= 1000000) {
      this.setState({ step: newStep });
    }
  };

  // Функція для запуску автоматичного кліку
  startAutoClick = () => {
    const { autoClickFrequency } = this.state;
    const interval = setInterval(this.autoClick, autoClickFrequency);
    this.setState({ autoClickInterval: interval });
  };

  // Функція для обробки автоматичного кліку
  handleAutoClick = () => {
    const { autoClickInterval } = this.state;
    if (autoClickInterval) {
      clearInterval(autoClickInterval);
      this.setState({ autoClickInterval: null, autoClickTimeLeft: 30 });
    } else {
      this.startAutoClick();
    }
  };

  // Функція автоматичного кліку
  autoClick = () => {
    const { autoClickTimeLeft, step, count, mode } = this.state;
    if (autoClickTimeLeft <= 0) {
      clearInterval(this.state.autoClickInterval);
      this.setState({ autoClickInterval: null });
      return;
    }
    const newCount = mode === "add" ? count + step : count - step;
    this.setState({
      count: newCount,
      autoClickTimeLeft: autoClickTimeLeft - 1,
    });
  };

  // Функція для зміни режиму
  handleChangeMode = () => {
    this.setState((prevState) => ({
      mode: prevState.mode === "add" ? "subtract" : "add",
    }));
  };

  // Функція для ручного збільшення/зменшення
  handleCount = () => {
    const { count, step, mode } = this.state;
    const newCount = mode === "add" ? count + step : count - step;
    this.setState({ count: newCount });
  };

  render() {
    const { step, autoClickTimeLeft, count, mode } = this.state;
    const { language } = this.props;

    return (
      <section className={styles.container}>
        {/* Компонент для відображення лічильника */}
        <Counter
          count={count}
          mode={mode}
          handleCount={this.handleCount}
          handleChangeMode={this.handleChangeMode}
          autoClickTimeLeft={autoClickTimeLeft}
          translations={TRANSLATIONS[language]}
        />
        {/* Компонент для управління лічильником */}
        <ControlCounter
          step={step}
          setStep={this.setStep}
          handleAutoClick={this.handleAutoClick}
          translations={TRANSLATIONS[language]}
        />
      </section>
    );
  }
}

export default withLanguage(CounterSection);
