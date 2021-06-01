/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import "./theme.scss";
import "./App.scss";
import "./animate.scss";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
import Testimonials from "./components/Testimonials/Testimonials"
import Resume from "./components/Resume/Resume";
import Work from "./components/Work/Work";
import Feedback from "./components/Feedback/Feedback";

var newWindow;
function App() {
  const itemsRef = useRef([]);
  const [activeSection, setactiveSection] = useState("intro");
  const [theme, setTheme] = useState("light");
  const [SettingsOpen, setSettingsOpen] = useState(false);
  const [orientation, setOrientation] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll, 100));
    window.scrollTo(0, 0);
    if (window.orientation) {
      setOrientation(window.orientation);
      window.addEventListener("resize", () => {
        setOrientation(window.orientation);
      });
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e) => {
    console.log(window.scrollY);
    findActiveSection();
  };

  const ToggleTheme = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  const debounce = (func, delay) => {
    let debounceTimer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };

  const settingWindowWidth = (...arg) => {
    const [width, height, orientation] = arg;
    if (width !== "100%") {
      if (!newWindow) {
        let window_url = "http://praveenkumar-resume.netlify.app"
        if (window.location.host.includes('local'))
          window_url = "http://localhost:3000";
        newWindow = window.open(
          window_url,
          "_blank",
          "scrollbars=yes,resizable=no,translate=no,menubar=no,toolbar=no,left=200"
        );
      }

      newWindow.hidesettings = true;
      newWindow.orientation = orientation;
      newWindow.resizeTo(width, height);
      newWindow.focus();
      newWindow.onbeforeunload = WindowCloseHanlder;
    }
  };

  const WindowCloseHanlder = () => {
    newWindow = null;
  };

  const findActiveSection = () => {
    itemsRef.current.forEach((inp) => {
      let bufferValue = 300;
      let value = {
        min: inp.offsetTop - bufferValue,
        max: inp.offsetTop + inp.offsetHeight - bufferValue,
      };
      if (window.scrollY >= value.min && window.scrollY <= value.max) {
        setactiveSection(inp.id);
      }
    });
  };

  const settingsToggle = () => {
    setSettingsOpen(!SettingsOpen);
  };

  return (
    <>
      <div id="main" data-theme={theme} className={orientation}>
        <header>
          <Header activeSection={activeSection} />
        </header>
        <div
          style={{ display: !window.hidesettings ? "block" : "none" }}
          className={
            SettingsOpen ? "settingsPane settingsPaneOpen" : "settingsPane"
          }
        >
          <span className="paneLabel">Enable Dark Mode :</span>
          <label className="switch">
            <input type="checkbox" onChange={ToggleTheme} id="togg"></input>
            <span className="toggle-switch round"></span>
          </label>
          <span className="resolution-label paneLabel">
            Try Different Resolution :
          </span>
          <div className="responsive">
            <a
              href="#"
              onClick={() => {
                settingWindowWidth("100%");
              }}
              className="desktop"
              title="View Desktop Version"
            ></a>
            <a
              href="#"
              onClick={() => settingWindowWidth(1024, 768, "layoutChange")}
              className="tabletlandscape"
              title="View Tablet Landscape (1024x768)"
            ></a>
            <a
              href="#"
              onClick={() => settingWindowWidth(768, 1024, "layoutChange")}
              className="tabletportrait"
              title="View Tablet Portrait (768x1024)"
            ></a>
            <a
              href="#"
              onClick={() => settingWindowWidth(568, 330, "layoutChange")}
              className="mobilelandscape"
              title="View Mobile Landscape (480x320)"
            ></a>
            <a
              href="#"
              onClick={() => settingWindowWidth(330, 568, "layoutChange")}
              className="mobileportrait"
              title="View Mobile Portrait (355x480)"
            ></a>

          </div>
          <div className="settingsIconHolder" onClick={settingsToggle}>
            <div className="icon-settings settingsIcon"></div>
          </div>
        </div>
        <section
          id="intro"
          ref={(ref) => {
            ref != null && itemsRef.current.push(ref);
          }}
          className="intro"
        >
          <Intro />
        </section>
        <section
          id="about"
          ref={(ref) => {
            ref != null && itemsRef.current.push(ref);
          }}
        >
          <About activeSection={activeSection} />
        </section>
        <section
          id="services"
          ref={(ref) => {
            ref != null && itemsRef.current.push(ref);
          }}
        >
          <Services activeSection={activeSection} />
        </section>
        <section
          id="resume"
          ref={(ref) => {
            ref != null && itemsRef.current.push(ref);
          }}
        >
          <Resume activeSection={activeSection} />
        </section>
        <section
          id="work"
          ref={(ref) => {
            ref != null && itemsRef.current.push(ref);
          }}
        >
          <Work activeSection={activeSection} />
        </section>
        <section
          id="testimonials"
          ref={(ref) => {
            ref != null && itemsRef.current.push(ref);
          }}
        >
          <Testimonials activeSection={activeSection} theme={theme} />
        </section>
        <section
          id="contact"
          ref={(ref) => {
            ref != null && itemsRef.current.push(ref);
          }}
        >
          <Contact activeSection={activeSection} theme={theme} />
        </section>

        <section
          id="feedback"
          ref={(ref) => {
            ref != null && itemsRef.current.push(ref);
            itemsRef.current = itemsRef.current.slice(0, 8);
          }}
        >
          <Feedback activeSection={activeSection} theme={theme} />
        </section>
      </div>
    </>
  );
}

export default App;
