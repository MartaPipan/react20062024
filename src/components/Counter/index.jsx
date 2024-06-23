import React, { Component } from "react";
import styles from "./Counter.module.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isAdd: true,
    };
  }

  componentDidMount() {
    // Inicia o autoClick quando o componente é montado
    this.startAutoClick(this.props.frequency); // Usa a frequência definida
  }

  componentWillUnmount() {
    // Limpa o intervalo quando o componente é desmontado
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
    const { count, isAdd } = this.state;
    const { step, autoClickTimeLeft } = this.props;

    if (autoClickTimeLeft <= 0) {
      this.stopAutoClick();
      return;
    }

    const newCount = isAdd ? count + step : count - step;
    this.setState({ count: newCount });
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
    const { count, isAdd } = this.state;
    const { autoClickTimeLeft } = this.props;

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
