import React from "react";
import "./App.css";
import UserLoader from "./components/UsersLoader";
import CounterSection from './components/CounterSection/index';

function App() {
  return (
    <>
      <UserLoader />
      <CounterSection/>
    </>
  );
}

export default App;
