import React from "react";
import { Route, Routes } from "react-router";
//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Career from "./pages/Career";

const App = () => {
  return (
    <div className="relative min-h-screen pb-32">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
