// HomePage.jsx

import React, { useContext } from "react";
import cx from 'classnames';
import styles from './HomePage.module.scss';
import WindowWork from "../../components/WindowWork";
import Tree from "../../components/Tree";
import { withTheme } from "../../components/HOCs";
import { LanguageContext } from "../../contexts";
import CONSTANTS from '../../constants';
import { withLanguage } from '../../components/HOCs/index';

const { THEME, TRANSLATIONS } = CONSTANTS;

const HomePage = ({ theme }) => {
  const [language] = useContext(LanguageContext);

  const isLight = theme === THEME.LIGHT;
  const classNames = cx(styles.page, {
    [styles.light]: isLight,
    [styles.dark]: !isLight,
  });

  return (
    <div className={classNames}>
      <>{TRANSLATIONS[language].home}</>
      <WindowWork />
      <Tree />
    </div>
  );
};

export default withLanguage(withTheme(HomePage));
