import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
function Header() {
  const activeStyle = { color: "#00b4d9" };
  return (
    <>
      <nav className="fixed-top">
        <div className="container">
          <div>
            <a href="index.html">
              <img alt="" src="../../assets/images/logo.png"></img>
            </a>
          </div>
          <div className="nav-bar">
            <ul>
              <li>
                <a href="#intro">Home</a>
                <a href="#about">About</a>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
