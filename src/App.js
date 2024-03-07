import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import StarterPakke from "./pages/StarterPakke";
import Trading from "./pages/Trading";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/starter-pakke" element={<StarterPakke />} />
        <Route path="/trading" element={<Trading />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
