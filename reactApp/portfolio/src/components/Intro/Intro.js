/* eslint-disable jsx-a11y/anchor-is-valid */
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
            <h2 className="pichEffect nameFont header-tag">Praveen Kumar</h2>
            <p className="script-font">Front-end Web Developer</p>
            <ul className="social-icon wow fadeInUp">
              <li>
                <a className="facebook" target="blank" href="https://www.facebook.com/profile.php?id=1777110200">
                  <i className="icon-social-facebook"></i>
                </a>
              </li>
              <li>
                <a className="twitter" target="blank" href="https://twitter.com/RpkSharaj?s=09">
                  <i className="icon-social-twitter"></i>
                </a>
              </li>
              <li>
                <a className="instagram" target="blank" href="https://www.instagram.com/rpk.sharaj/">
                  <i className="icon-social-instagram"></i>
                </a>
              </li>
              <li>
                <a className="linkedin" target="blank" href="https://www.linkedin.com/in/praveen-kumar-rajendran-693b9324">
                  <i className="icon-social-linkedin"></i>
                </a>
              </li>
              <li>
                <a className="google" target="blank" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=rpk.sharaj@gmail.com">
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
