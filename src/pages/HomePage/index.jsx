import React from "react";
import cx from 'classnames';
import styles from './HomePage.module.scss';
import WindowWork from "../../components/WindowWork";
import Tree from "../../components/Tree";
import { WithTheme } from "../../components/HOCs";
import CONSTANTS from '../../constants';

const { THEME } = CONSTANTS;

const HomePage = ({ theme }) => {
  const isLight = theme === THEME.LIGHT;
  const classNames = cx(styles.page, {
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


export default WithTheme(HomePage);
