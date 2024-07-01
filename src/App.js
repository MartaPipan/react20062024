import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WindowWork from "./components/WindowWork";
import UsersLoader from "./components/UsersLoader";
import CounterSection from "./components/CounterSection/index";
import Header from "./components/Header";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <main>
        <Routes>
          <Route path="/" element={<WindowWork />}></Route>
          <Route path="/users" element={<UsersLoader />}></Route>
          <Route path="/counter" element={<CounterSection />}></Route>
          </Routes>
        </main>
        <footer>2024</footer>
      </BrowserRouter>
    </>
  );
}

export default App;


