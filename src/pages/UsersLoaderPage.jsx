import React from 'react';
import cx from 'classnames';
import styles from './LoaderPage.module.scss'
import { ThemeContext} from "../contexts";
import UsersLoader from "../components/UsersLoader";
import CONSTANTS from '../constants';
const { THEME } = CONSTANTS; 


const UsersLoaderPage = () => {
return (
    <>
      <ThemeContext.Consumer>
        {([theme]) => {
          const classNames = cx(styles.header, {
            [styles.light]: theme === THEME.LIGHT,
            [styles.dark]: theme === THEME.DARK,
          });
          return (
            <header className={classNames}
            > <UsersLoader />
            </header>
          );
        }}
      </ThemeContext.Consumer>
    </>
  );
};


export default UsersLoaderPage;


