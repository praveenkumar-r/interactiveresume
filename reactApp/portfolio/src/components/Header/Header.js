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
                <NavLink activeStyle={activeStyle} exact to="/">
                  Home
                </NavLink>
                <NavLink activeStyle={activeStyle} to="/About">
                  About
                </NavLink>
                <NavLink activeStyle={activeStyle} to="/Contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
