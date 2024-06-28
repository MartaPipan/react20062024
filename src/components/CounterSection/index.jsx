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

  setStep = (newStep) => {
    if (newStep >= 1 && newStep <= 1000000) {
      this.setState({ step: newStep });
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
export default CounterSection;