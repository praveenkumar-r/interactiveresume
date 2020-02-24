import React from "react";
import "./Intro.scss";

function Intro() {
  return (
    <>
      <div className="intro-bg">
        <div className="overlay"></div>
        <div className="container">
          <div className="contents">
            <h5 className="script-font header-tag">Hi This is</h5>
            <h2 className="pichEffect header-tag">Praveen Kumar</h2>
            <p className="script-font">Front-end Web Developer</p>
            <ul className="social-icon wow fadeInUp">
              <li>
                <a className="facebook" href="#">
                  <i className="icon-social-facebook"></i>
                </a>
              </li>
              <li>
                <a className="twitter" href="#">
                  <i className="icon-social-twitter"></i>
                </a>
              </li>
              <li>
                <a className="instagram" href="#">
                  <i className="icon-social-instagram"></i>
                </a>
              </li>
              <li>
                <a className="linkedin" href="#">
                  <i className="icon-social-linkedin"></i>
                </a>
              </li>
              <li>
                <a className="google" href="#">
                  <i className="icon-social-google"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
