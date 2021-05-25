import React, { useState } from "react";
import "./Header.scss";

const Header = props => {
  // let openMenu = false;
  const [openMenu, setopenMenu] = useState(false);
  const alertf = () => {
    //  openMenu = !openMenu;
    setopenMenu(!openMenu);
  };
  return (
    <>
      <nav className="fixed-top">
        <div className="container">
          <div>
            <a href="index.html">
              <img alt="" src="../../assets/images/logo.png"></img>
            </a>
          </div>
          <div id="desktopMenu" className="nav-bar">
            <ul>
              <li>
                <a
                  className={props.activeSection === "intro" ? "active" : ""}
                  href="#intro"
                >
                  Home
                </a>
                <a
                  className={props.activeSection === "about" ? "active" : ""}
                  href="#about"
                >
                  About
                </a>
                <a
                  className={props.activeSection === "services" ? "active" : ""}
                  href="#services"
                >
                  Services
                </a>
                <a
                  className={props.activeSection === "resume" ? "active" : ""}
                  href="#resume"
                >
                  Resume
                </a>
                <a
                  className={props.activeSection === "work" ? "active" : ""}
                  href="#work"
                >
                  Work
                </a>
                <a
                  className={props.activeSection === "contact" ? "active" : ""}
                  href="#contact"
                >
                  Contact
                </a>
                <a
                  className={props.activeSection === "testimonials" ? "active" : ""}
                  href="#testimonials"
                >
                  Testimonials
                </a>
                <a
                  className={props.activeSection === "feedback" ? "active" : ""}
                  href="#feedback"
                >
                  Feedback
                </a>
              </li>
            </ul>
          </div>
          <div id="mobileMenu" className="slicknav_menu" onClick={alertf}>
            <div aria-haspopup="true" className="slicknav_btn">
              <span className="slicknav_icon slicknav_no-text">
                <span className="slicknav_icon-bar"></span>
                <span className="slicknav_icon-bar"></span>
                <span className="slicknav_icon-bar"></span>
              </span>
            </div>
          </div>
        </div>
        <div
          className={
            openMenu ? "container openMenuItem" : "container closeMenuItem"
          }
        >
          <ul
            className="slicknav_nav"
            aria-hidden="false"
            role="menu"
            onClick={alertf}
          >
            <li>
              <a
                className={props.activeSection === "intro" ? "active" : ""}
                href="#intro"
              >
                Home
              </a>
              <a
                className={props.activeSection === "about" ? "active" : ""}
                href="#about"
              >
                About
              </a>
              <a
                className={props.activeSection === "services" ? "active" : ""}
                href="#services"
              >
                Services
              </a>
              <a
                className={props.activeSection === "resume" ? "active" : ""}
                href="#resume"
              >
                Resume
              </a>
              <a
                className={props.activeSection === "work" ? "active" : ""}
                href="#work"
              >
                Work
              </a>
              <a
                className={props.activeSection === "contact" ? "active" : ""}
                href="#contact"
              >
                Contact
              </a>
              <a
                className={props.activeSection === "testimonials" ? "active" : ""}
                href="#testimonials"
              >
                Testimonials
              </a>
              <a
                className={props.activeSection === "feedback" ? "active" : ""}
                href="#feedback"
              >
                Feedback
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
