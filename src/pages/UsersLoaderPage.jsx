import React from "react";
import cx from 'classnames';
import styles from './LoaderPage.module.scss';
import UsersLoader from "../components/UsersLoader";
import { ThemeContext } from "../contexts";
import CONSTANTS from "../constants";
const { THEME } = CONSTANTS;

const UsersLoaderPage = () => {
  const renderUserLoaderPage = ([theme, setTheme]) => {
    const isLight = theme === THEME.LIGHT;
    const classNames = cx(styles.page, {
      [styles.light]: isLight,
      [styles.dark]: !isLight,
    });

    return (
      <div className={classNames}>
        <UsersLoader />
      </div>
    );
  };

  return (
    <ThemeContext.Consumer>
      {renderUserLoaderPage}
    </ThemeContext.Consumer>
  );
};

export default UsersLoaderPage;
