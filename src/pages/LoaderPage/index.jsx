import React from "react";
import cx from 'classnames';
import styles from './LoaderPage.module.scss';
import { NavLink, Outlet } from "react-router-dom";
import { withTheme,withLanguage } from '../../components/HOCs/index';
import CONSTANTS from "../../constants";
const { THEME ,TRANSLATIONS} = CONSTANTS;

const LoaderPage = ({ theme, language }) => {
  const isLight = theme === THEME.LIGHT;
  const classNames = cx(styles.page, {
    [styles.light]: isLight,
    [styles.dark]: !isLight,
  });
    return (
      <header className={classNames}>
            <li>
              <NavLink to="/load/events">{TRANSLATIONS[language].events}</NavLink>
            </li>
            <li>
          <NavLink to="/load/phones">{TRANSLATIONS[language].phones}</NavLink>
            </li>
        
          <Outlet />
      </header>
    );
  };
   

export default withLanguage(withTheme(LoaderPage));