import React, { useEffect, useRef, useLayoutEffect } from "react";
import "./App.css";
import "./animate.scss";
// import { Route } from "react-router-dom";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";

function App() {
  const itemsRef = useRef([]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = e => {
    console.log(window.scrollY);
  };

  useLayoutEffect(() => {
    console.log(itemsRef);
  });

  return (
    <>
      <header>
        <Header />
      </header>
      <section
        id="intro"
        ref={ref => {
          itemsRef.current.push(ref);
        }}
        className="intro"
      >
        <Intro />
      </section>
      <section
        id="about"
        ref={ref => {
          itemsRef.current.push(ref);
        }}
      >
        <About />
      </section>
      <section
        id="services"
        ref={ref => {
          itemsRef.current.push(ref);
        }}
      >
        <Services />
      </section>
    </>
  );
}

export default App;
