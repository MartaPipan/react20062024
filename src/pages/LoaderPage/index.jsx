import React from "react";
import cx from 'classnames';
import styles from './LoaderPage.module.scss';
import { NavLink, Outlet } from "react-router-dom";
import { withTheme } from '../../components/HOCs/index';
import CONSTANTS from "../../constants";
const { THEME } = CONSTANTS;


const LoaderPage = ({theme}) => {
    const isLight = theme === THEME.LIGHT;
    const classNames = cx(styles.header, {
      [styles.light]: isLight,
      [styles.dark]: !isLight,
    });
    return (
      <header className={classNames}>
            <li>
              <NavLink to="/load/events">events</NavLink>
            </li>
            <li>
              <NavLink to="/load/phones">phones</NavLink>
            </li>
        
          <Outlet />
      </header>
    );
  };
   

export default withTheme(LoaderPage);