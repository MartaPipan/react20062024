import React from "react";
import { ThemeContext } from "../../contexts";
import WindowWork from "../../components/WindowWork";
import Tree from "../../components/Tree";
import CONSTANTS from '../../constants';
const { THEME } = CONSTANTS;

const HomePage = (user) => {
  return (
    <>
      <ThemeContext.Consumer>
        {([theme]) => {
            const styles = {
              backgroundColor: theme === THEME.LIGHT?'white':'black',
              color: theme === THEME.LIGHT?'black':'white',
            }
            return (
              <div style={styles}>
                <WindowWork />
                <Tree user={user} />
              </div>
            );
          }}
      </ThemeContext.Consumer>
    </>
  );
};

export default HomePage;
