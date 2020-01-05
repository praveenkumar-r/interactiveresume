import React from "react";
import "./App.css";
// import { Route } from "react-router-dom";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <About />
    </>
  );
}

export default App;
