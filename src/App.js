import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/HomePages/Home/Home";
import Skincare from "./components/ProductPages/Skincare/Skincare";
import Cosmetics from "./components/ProductPages/Cosmetics/Cosmetics";
import Haircare from "./components/ProductPages/Haircare/Haircare";
import Contact from "./components/ContactForm/Contact";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/skincare" element={<Skincare />}></Route>
        <Route path="/cosmetics" element={<Cosmetics />}></Route>
        <Route path="/haircare" element={<Haircare />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
