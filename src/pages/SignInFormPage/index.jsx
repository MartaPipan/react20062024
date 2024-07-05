import React from "react";
import cx from 'classnames';
import styles from './SignInFormPage.module.scss';
import SignInForm from "../../components/SignInForm";
import { WithTheme } from "../../components/HOCs";
import CONSTANTS from '../../constants';
const { THEME } = CONSTANTS;

const SignInFormPage = ({ theme }) => {
  const isLight = theme === THEME.LIGHT;
  const classNames = cx(styles.page, {
    [styles.light]: isLight,
    [styles.dark]: !isLight,
  });

  return (
    <div className={classNames}>
      <SignInForm />
    </div>
  );
};

export default WithTheme(SignInFormPage);
