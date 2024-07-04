import React from "react";
import cx from 'classnames';
import styles from './HomePage.module.scss';
import { ThemeContext } from "../../contexts";
import WindowWork from "../../components/WindowWork";
import Tree from "../../components/Tree";
import CONSTANTS from '../../constants';
const { THEME } = CONSTANTS;

const HomePage = () => {
   const renderHomePage = ([theme, setTheme]) => {
    const isLight = theme === THEME.LIGHT;
    const classNames = cx(styles.header, {
      [styles.light]: isLight,
      [styles.dark]: !isLight,
    });
    return (
      <div className={classNames}>
        <WindowWork />
        <Tree />
      </div>
    );
  };

  return (
    <ThemeContext.Consumer>{renderHomePage}</ThemeContext.Consumer>
  );
};

export default HomePage;
