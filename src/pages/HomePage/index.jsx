import React, { useContext } from "react";
import cx from 'classnames';
import styles from './HomePage.module.scss';
import { ThemeContext, LanguageContext } from "../../contexts";
import WindowWork from "../../components/WindowWork";
import Tree from "../../components/Tree";
import { withTheme } from "../../components/HOCs";
import CONSTANTS from '../../constants';
const { THEME } = CONSTANTS;

const HomePage = ({ theme }) => {
  const [language] = useContext(LanguageContext);
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

export default withTheme(HomePage);
