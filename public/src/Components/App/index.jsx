import React from "react";
import "../Hamburger/hamburger.scss";
//Components
import Navigation from "../Navigation";
import Home from "../Home";
import About from "../About";
import Skills from "../Skills";
import Portfolio from "../Portfolio";
import Contact from "../Contact";

const App = () => (
  <div id="App">
    <Navigation />
    <Home />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
  </div>
);

export default App;
