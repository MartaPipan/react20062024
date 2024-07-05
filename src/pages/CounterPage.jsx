import React from "react";
import cx from 'classnames';
import styles from './CounterPage.module.scss'
import CounterSection from "../components/CounterSection";
import { withTheme } from "../components/HOCs";
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

export default withTheme(CounterPage);

