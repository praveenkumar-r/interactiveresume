import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import "./animate.scss";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import Work from "./components/Work/Work";

function App() {
  const itemsRef = useRef([]);
  const [activeSection, setactiveSection] = useState("intro");

  useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll, 100));
    window.scrollTo(0, 0);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = e => {
    console.log(window.scrollY);
    findActiveSection();
  };

  const debounce = (func, delay) => {
    let debounceTimer;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };

  const findActiveSection = () => {
    console.log(itemsRef.current.length);
    itemsRef.current.forEach(inp => {
      let bufferValue = 300;
      let value = {
        min: inp.offsetTop - bufferValue,
        max: inp.offsetTop + inp.offsetHeight - bufferValue
      };
      if (window.scrollY >= value.min && window.scrollY <= value.max) {
        setactiveSection(inp.id);
      }
    });
  };

  return (
    <>
      <header>
        <Header activeSection={activeSection} />
      </header>
      <section
        id="intro"
        ref={ref => {
          ref != null && itemsRef.current.push(ref);
        }}
        className="intro"
      >
        <Intro />
      </section>
      <section
        id="about"
        ref={ref => {
          ref != null && itemsRef.current.push(ref);
        }}
      >
        <About activeSection={activeSection} />
      </section>
      <section
        id="services"
        ref={ref => {
          ref != null && itemsRef.current.push(ref);
        }}
      >
        <Services activeSection={activeSection} />
      </section>
      <section
        id="resume"
        ref={ref => {
          ref != null && itemsRef.current.push(ref);
        }}
      >
        <Resume activeSection={activeSection} />
      </section>
      <section
        id="work"
        ref={ref => {
          ref != null && itemsRef.current.push(ref);
        }}
      >
        <Work activeSection={activeSection} />
      </section>
      <section
        id="contact"
        ref={ref => {
          ref != null && itemsRef.current.push(ref);
          itemsRef.current = itemsRef.current.slice(0, 6);
        }}
      >
        <Contact activeSection={activeSection} />
      </section>
    </>
  );
}

export default App;
