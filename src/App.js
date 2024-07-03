import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import styles from './App.module.scss'
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import UsersLoaderPage from "./pages/UsersLoaderPage";
import CounterPage from "./pages/CounterPage";

import ErrorPage from "./pages/ErrorPage";

import LoaderPage from "./pages/LoaderPage";
import EventsBlock from "./pages/LoaderPage/EventsBlock";
import PhonesBlock from "./pages/LoaderPage/PhonesBlock";
import { UserContext, ThemeContext} from "./contexts";
import CONSTANTS from "./constants";
const { THEME } = CONSTANTS;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 4,
        name: "Brad",
        email: "brad@gmail.com",
        password: 123,
        ava: "/images/noname.png",
      },
      theme: THEME.LIGHT,
    };
  }
  setTheme = () => {
    const { theme } = this.state;
    this.setState({ theme: theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT });
  };
  render() {
    const { user, theme} = this.state;
    return (
      <>
        <ThemeContext.Provider value={[theme,this.setTheme]}>
        <UserContext.Provider value={user}>
          <BrowserRouter>
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<HomePage value={user} />}></Route>
                <Route path="/users" element={<UsersLoaderPage />}></Route>
                <Route path="/counter" element={<CounterPage />}></Route>

                <Route path="/load/" element={<LoaderPage />}>
                  <Route path="events" element={<EventsBlock />}></Route>
                  <Route path="phones" element={<PhonesBlock />}></Route>
                </Route>

                <Route path="*" element={<ErrorPage />}></Route>
              </Routes>
            </main>
            <footer>2024</footer>
          </BrowserRouter>
          </UserContext.Provider>
          </ThemeContext.Provider>
      </>
    );
  }
}

export default App;
