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
    };
  }

  componentDidMount() {
    this.handleAutoClick();
  }

  componentWillUnmount() {
    clearInterval(this.state.autoClickInterval);
  }

  setStep = (newStep) => {
    this.setState({ step: newStep });
  };

  handleAutoClick = () => {
    const { autoClickInterval } = this.state;
    if (autoClickInterval) {
      clearInterval(autoClickInterval);
      this.setState({ autoClickInterval: null });
    } else {
      const interval = setInterval(this.autoClick, 1000);
      this.setState({ autoClickInterval: interval });
    }
  };

  autoClick = () => {
    const { autoClickTimeLeft } = this.state;
    if (autoClickTimeLeft <= 0) {
      this.handleAutoClick();
      return;
    }

    this.counterRef.handleCount();

    this.setState((prevState) => ({
      autoClickTimeLeft: prevState.autoClickTimeLeft - 1,
    }));
  };

  render() {
    const { step } = this.state;
    return (
      <section className={styles.container}>
        <Counter step={step} ref={(ref) => (this.counterRef = ref)} />
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
