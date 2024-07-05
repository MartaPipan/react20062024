import React from "react";
import cx from 'classnames';
import styles from './CounterPage.module.scss'
import { ThemeContext } from "../contexts";
import CounterSection from "../components/CounterSection";
import CONSTANTS from "../constants";
const { THEME } = CONSTANTS;

const CounterPage = ({theme}) => {
    const isLight = theme === THEME.LIGHT;
    const classNames = cx(styles.header, {
      [styles.light]: isLight,
      [styles.dark]: !isLight,
    });
  
    return (
      <header className={classNames}>
        <CounterSection />
      </header>
    );
};
  
const WithTheme =(InnerComponent)=> () => {
  return (
    <ThemeContext.Consumer> {([theme, setTheme]) => <InnerComponent theme={theme} setTheme={setTheme} />}</ThemeContext.Consumer>
);
};


export default WithTheme(CounterPage);

