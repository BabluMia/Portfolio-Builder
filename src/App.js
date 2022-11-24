import "./App.css";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import {Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="" element={<Landing />} />

        <Route element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
