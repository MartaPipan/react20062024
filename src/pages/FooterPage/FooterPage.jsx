import React from "react";
import { ThemeContext } from "../../contexts";
import Footer from "../../components/Footer/Footer";
import CONSTANTS from '../../constants';

const { THEME } = CONSTANTS;

const FooterPage = () => {
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
                <Footer />
              </div>
            );
          }}
      </ThemeContext.Consumer>
    </>
  );
};

export default FooterPage;
