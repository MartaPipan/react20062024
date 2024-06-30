import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import WindowWork from "./components/WindowWork";
import UsersLoader from "./components/UserManagement/UsersLoader";
import CounterSection from "./components/CounterSection/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul>
            <li><NavLink to="/">home</NavLink></li>
            <li><NavLink to="/users">users</NavLink></li>
            <li><NavLink to="/counter">counter</NavLink></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<WindowWork />}></Route>
          <Route path="/users" element={<UsersLoader />}></Route>
          <Route path="/counter" element={<CounterSection />}></Route>
        </Routes>
        <footer>2024</footer>
      </BrowserRouter>
    </>
  );
}

export default App;


