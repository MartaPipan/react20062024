
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import UsersLoaderPage from "./pages/UsersLoaderPage";
import CounterPage from "./pages/CounterPage";

import ErrorPage from "./pages/ErrorPage";

import LoaderPage from "./pages/LoaderPage";
import EventsBlock from "./pages/LoaderPage/EventsBlock";
import PhonesBlock from "./pages/LoaderPage/PhonesBlock";

class App extends Component{
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
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
      </>
    );
  }
}

export default App;
