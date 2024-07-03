import React from "react";
import cx from "classnames";

import styles from "./Header.module.scss";

import { UserContext, ThemeContext } from "../../contexts/index";

import Menu from "../Menu";

import CONSTANTS from "../../constants";
const { THEME } = CONSTANTS;

const Header = () => {
  return (
    <ThemeContext.Consumer>
      {([theme, setTheme]) => {
        const classNames = cx(styles.header,{
          [styles.light]: theme === THEME.LIGHT,
          [styles.dark]: theme ===THEME.DARK,
        })
        return (
          <UserContext.Consumer>
            {({ ava }) => {
              return (
                <header className={classNames}>
                  <Menu />
                  <button onClick={() => {setTheme()}}>{theme === THEME.LIGHT ? 'dark':'light'}</button>
                  <img src={ava} alt="ava" />
                </header>
              );
            }}
          </UserContext.Consumer>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Header;
