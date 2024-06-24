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
    };
  }

  componentDidMount() {
    this.startAutoClick();
  }

  componentWillUnmount() {
    clearInterval(this.state.autoClickInterval);
  }

  setStep = (newStep) => {
    if (newStep >= 1 && newStep <= 1000000) {
      this.setState({ step: newStep });
    } else {
      alert("Step must be between 1 and 1,000,000");
    }
  };

  startAutoClick = () => {
    const { autoClickFrequency } = this.state;
    const interval = setInterval(this.autoClick, autoClickFrequency);
    this.setState({ autoClickInterval: interval });
  };

  handleAutoClick = () => {
    const { autoClickInterval } = this.state;
    if (autoClickInterval) {
      clearInterval(autoClickInterval);
      this.setState({ autoClickInterval: null, autoClickTimeLeft: 30 });
    } else {
      this.startAutoClick();
    }
  };

  autoClick = () => {
    const { autoClickTimeLeft, step } = this.state;
    if (autoClickTimeLeft <= 0) {
      clearInterval(this.state.autoClickInterval);
      this.setState({ autoClickInterval: null });
      return;
    }

    this.counterRef.handleCount(step);

    this.setState((prevState) => ({
      autoClickTimeLeft: prevState.autoClickTimeLeft - 1,
    }));
  };

  render() {
    const { step, autoClickTimeLeft } = this.state;
    return (
      <section className={styles.container}>
        <Counter
          step={step}
          ref={(ref) => (this.counterRef = ref)}
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
