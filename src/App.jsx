import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Market from "./pages/Market";
import AboutUs from "./pages/AboutUs";

import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
