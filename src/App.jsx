import React from "react";
import { Route, Routes } from "react-router";
//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import CookieData from "./components/CookieData";
//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div className="relative min-h-screen pb-32">
      <CookieConsent />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <CookieData />
    </div>
  );
};

export default App;
