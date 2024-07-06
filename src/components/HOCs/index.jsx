import { LanguageContext, ThemeContext, UserContext } from "../../contexts";

// HOC for ThemeContext
export const withTheme = (InnerComponent) => (props) => {
  return (
    <ThemeContext.Consumer>
      {([theme, setTheme]) => (
        <InnerComponent theme={theme} setTheme={setTheme} {...props} />
      )}
    </ThemeContext.Consumer>
  );
};

// HOC for UserContext
export const withUser = (InnerComponent) => (props) => {
  return (
    <UserContext.Consumer>
      {(user) => (
        <InnerComponent user={user} {...props} />
      )}
    </UserContext.Consumer>
  );
};

// HOC for LanguageContext
export const withLanguage = (InnerComponent) => (props) => {
  return (
    <LanguageContext.Consumer>
      {([language, setLanguage]) => (
        <InnerComponent language={language} setLanguage={setLanguage} {...props} />
      )}
    </LanguageContext.Consumer>
  );
};
