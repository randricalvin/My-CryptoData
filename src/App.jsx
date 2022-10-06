import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Market from "./pages/Market";
import CryptoNews from "./pages/CryptoNews";
import CoinDetail from "./components/CoinDetail";
import Footer from "./components/Footer";
import CoinChart from "./components/CoinChart";

import "./App.css";

function App() {
  return (
    <div>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/market/:id" element={<CoinDetail />} />
        <Route path="/market/:id/chart" element={<CoinChart />} />
        <Route path="/news" element={<CryptoNews />} />
      </Routes>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
