import React from "react";
import cx from 'classnames';
import styles from './SignInFormPage.module.scss';
import SignInForm from "../../components/SignInForm";
import { withLanguage, withTheme } from "../../components/HOCs";
import CONSTANTS from '../../constants';
const { THEME } = CONSTANTS;

const SignInFormPage = ({ theme, language}) => {
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

export default withLanguage(withTheme(SignInFormPage));
