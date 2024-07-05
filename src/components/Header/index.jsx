import React from "react";
import cx from "classnames";
import Icon from '@mdi/react';
import { mdiWhiteBalanceSunny, mdiThemeLightDark } from '@mdi/js';

import styles from "./Header.module.scss";
import Menu from "../Menu";

import {withTheme, withUser } from "../HOCs";

import CONSTANTS from "../../constants";
const { THEME } = CONSTANTS;


const Header = ({ theme, setTheme, user: { ava } }) => {
  const classNames = cx(styles.header, {
    [styles.light]: theme === THEME.LIGHT,
    [styles.dark]: theme === THEME.DARK,
  });
  const handlerClickIcon = () => {
    setTheme();
  };
const currentIconColor=theme === THEME.LIGHT ? mdiThemeLightDark : mdiWhiteBalanceSunny
  return (
    <header className={classNames}>
      <Menu />
      <Icon onClick={handlerClickIcon}
        path={currentIconColor} size={1}
      />
      <img src={ava} alt="ava" />
    </header>
  );
};
          
export default withTheme(withUser(Header));
