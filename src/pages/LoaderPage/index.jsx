import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import cx from "classnames";
import styles from "./LoaderPage.module.scss";
import { ThemeContext } from "../../contexts";
import CONSTANTS from "../../constants";
const { THEME } = CONSTANTS;


const LoaderPage = () => {
  return (
    <>
      <ThemeContext.Consumer>
        {([theme]) => {
          const classNames = cx(styles.header, {
            [styles.light]: theme === THEME.LIGHT,
            [styles.dark]: theme === THEME.DARK,
          });
          return (
            <header className={classNames}>
              <>
                <ul>
                  <li>
                    <NavLink to="/load/events">events</NavLink>
                  </li>
                  <li>
                    <NavLink to="/load/phones">phones</NavLink>
                  </li>
                </ul>
                <Outlet />
              </>
            </header>
          );
        }}
      </ThemeContext.Consumer>
    </>
  );
};
export default LoaderPage;