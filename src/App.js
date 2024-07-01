import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import UsersLoaderPage from './pages/UsersLoaderPage';
import CounterPage from "./pages/CounterPage";

import ErrorPage from "./pages/ErrorPage"
import EventsLoader from "./components/EventsLoader";
import PhonesLoader from "./components/PhonesLoader";



function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <EventsLoader />
        <PhonesLoader />
        <main>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/users" element={<UsersLoaderPage />}></Route>
            <Route path="/counter" element={<CounterPage />}></Route>

            <Route path="*" element={<ErrorPage />}></Route>
          </Routes>
        </main>
        <footer>2024</footer>
      </BrowserRouter>
    </>
  );
}

export default App;


