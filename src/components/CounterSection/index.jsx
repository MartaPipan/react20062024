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
    // Inicia o autoClick quando o componente é montado
    this.handleAutoClick();
  }

  componentWillUnmount() {
    // Limpa o intervalo quando o componente é desmontado
    clearInterval(this.state.autoClickInterval);
  }

  setStep = (newStep) => {
    this.setState({ step: newStep });
  };

  handleAutoClick = () => {
    const { autoClickInterval } = this.state;
    if (autoClickInterval) {
      // Se o autoClickInterval já estiver definido, então parar o autoClick
      clearInterval(autoClickInterval);
      this.setState({ autoClickInterval: null });
    } else {
      // Caso contrário, iniciar o autoClick
      const interval = setInterval(this.autoClick, 1000); // Chama a função a cada 1 segundo
      this.setState({ autoClickInterval: interval });
    }
  };

  autoClick = () => {
    const { step, autoClickTimeLeft } = this.state;
    if (autoClickTimeLeft <= 0) {
      this.handleAutoClick(); // Para o autoClick quando o tempo acabar
      return;
    }

    // Atualiza o contador no componente Counter
    this.counterRef.handelCount();

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
          handleAutoClick={this.handleAutoClick} // Passando a função handleAutoClick
        />
      </section>
    );
  }
}

export default CounterSection;
