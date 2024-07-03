import React from "react";
import Menu from "../Menu";
import { UserContext } from "../../contexts/index";
import styles from './Header.module.scss';

const Header = () => {
  return (
    <UserContext.Consumer>
      {({ava}) => {
        return (
          <header className={styles.header}>
            <Menu />
            <button onClick={()=>{}}>light/dark</button>
            <img src={ava} alt="ava" />
          </header>
        );
      }}
    </UserContext.Consumer>
  );
};

export default Header;
