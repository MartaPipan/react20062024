import React from "react";
import cx from "classnames";
import Icon from '@mdi/react';
import { mdiWhiteBalanceSunny, mdiThemeLightDark } from '@mdi/js';

import styles from "./Header.module.scss";
import Menu from "../Menu";

import { withTheme, withUser, withLanguage } from "../HOCs";

import CONSTANTS from "../../constants";
const { THEME, LANGUAGE } = CONSTANTS;

const Header = ({ theme, setTheme, user: { ava }, language, setLanguage }) => {
  const classNames = cx(styles.header, {
    [styles.light]: theme === THEME.LIGHT,
    [styles.dark]: theme === THEME.DARK,
  });

  const handlerClickIcon = () => {
    setTheme();
  };

  const handleSelectChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const currentIconColor = theme === THEME.LIGHT ? mdiThemeLightDark : mdiWhiteBalanceSunny;

  return (
    <header className={classNames}>
      <Menu />
      <Icon onClick={handlerClickIcon} path={currentIconColor} size={1} />
      <select onChange={(e) => handleSelectChange(e.target.value)} value={language}>
        <option value={LANGUAGE.EN}>English</option>
        <option value={LANGUAGE.PT}>Portuguese</option>
        <option value={LANGUAGE.UA}>Ukrainian</option>
      </select>
      <img src={ava} alt="ava" />
    </header>
  );
};

export default withLanguage(withTheme(withUser(Header)));
