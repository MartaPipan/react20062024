import { ThemeContext, UserContext } from "../../contexts";

// HOC for ThemeContext
export const WithTheme = (InnerComponent) => (props) => {
  return (
    <ThemeContext.Consumer>
      {([theme, setTheme]) => (
        <InnerComponent theme={theme} setTheme={setTheme} {...props} />
      )}
    </ThemeContext.Consumer>
  );
};

// HOC for UserContext
export const WithUser = (InnerComponent) => (props) => {
  return (
    <UserContext.Consumer>
      {(user) => (
        <InnerComponent user={user} {...props} />
      )}
    </UserContext.Consumer>
  );
};
