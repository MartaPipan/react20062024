import React from "react";
import cx from 'classnames';
import styles from './LoaderPage.module.scss';
import UsersLoader from "../components/UsersLoader";
import { withTheme } from "../components/HOCs";
import CONSTANTS from "../constants";
const { THEME } = CONSTANTS;

const UsersLoaderPage = ({ theme }) => {
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

export default withTheme(UsersLoaderPage);
