import React from "react";
import cx from 'classnames';
import styles from './CounterPage.module.scss'
import { ThemeContext} from "../contexts";
import CounterSection from "../components/CounterSection";
import CONSTANTS from '../constants';
const { THEME } = CONSTANTS; 

const CounterPage = () => {
  return (
    <>
      <ThemeContext.Consumer>
        {([theme]) => {
          const classNames = cx(styles.header, {
            [styles.light]: theme === THEME.LIGHT,
            [styles.dark]: theme === THEME.DARK,
          });
          return (
            <header className={classNames}
            > <CounterSection />
            </header>
          );
        }}
      </ThemeContext.Consumer>
    </>
  );
};

export default CounterPage;
