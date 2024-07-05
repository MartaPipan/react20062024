import { ThemeContext } from "../../contexts";

export const WithTheme = (InnerComponent) => (props) => {
  return (
    <ThemeContext.Consumer>
          {([theme, setTheme]) =>
              <InnerComponent theme={theme} setTheme={setTheme} />}
    </ThemeContext.Consumer>
  );
};


