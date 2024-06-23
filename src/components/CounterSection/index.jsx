import React, { Component } from "react";
import Counter from "../Counter";
import ControlCounter from "../ControlCounter";
import styles from "./CounterSection.module.css"

class CounterSection extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
    };
  }
    setStep = (newStep) => {
        this.setState({ step: newStep });
    };
  render() {
    const { step } = this.state;
    return (
        <section className={styles.container}>
        <Counter step={step} />
        <ControlCounter step={step} setStep={this.setStep} />
      </section>
    );
  }
}

export default CounterSection;

