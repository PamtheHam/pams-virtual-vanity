import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/HomePages/Home/Home";
import About from "./components/HomePages/About/About";
import Skincare from "./components/ProductPages/Skincare/Skincare";
import Cosmetics from "./components/ProductPages/Cosmetics/Cosmetics";
import Haircare from "./components/ProductPages/Haircare/Haircare";
import Contact from "./components/ContactForm/Contact";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/skincare" component={Skincare}></Route>
        <Route exact path="/cosmetics" component={Cosmetics}></Route>
        <Route exact path="/haircare" component={Haircare}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Footer />
      </Router>
    </>
  );
}

export default App;
