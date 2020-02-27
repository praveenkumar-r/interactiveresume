import React from "react";
import "./About.scss";

const About = props => {
  return (
    <>
      <div className="aboutSection">
        <div className="container flex_direction_column">
          <div
            className={
              props.activeSection === "about"
                ? "profile-pic fadeInLeft"
                : "profile-pic"
            }
          >
            <img alt="" src="../../assets/images/profile-pic.jpg"></img>
          </div>
          <div
            className={
              props.activeSection === "about"
                ? "profile-wrapper fadeInRight"
                : "profile-wrapper"
            }
          >
            <h3>Hi Guys!</h3>
            <p>
              Est diam venenatis arcu lacus ad. Duis quis eros. Cursus et rutrum
              eleifend sollicitudin lacinia justo id turpis. Nec convallis
              integer. Odio eget duis. Nulla aenean et. Blandit varius
              sollicitudin. Pellentesque leo primis neque urna magnis. Elit ut
              sollicitudin. Et est a nam dolores eget itaque sagittis et
              parturient duis est eleifend sociis rutrum odio viverra integer.
              Est diam venenatis arcu lacus ad. Duis quis eros. Cursus et rutrum
              eleifend sollicitudin lacinia justo id turpis. Nec convallis
              integer. Odio eget duis. Nulla aenean et. Blandit varius
              sollicitudin. Pellentesque leo primis neque urna magnis. Elit ut
              sollicitudin. Et est a nam dolores eget itaque sagittis et
              parturient duis est eleifend sociis rutrum odio viverra integer.
            </p>
            <div className="about-profile">
              <ul className="admin-profile">
                <li>
                  <span className="pro-title"> Name </span>{" "}
                  <span className="pro-detail">Praveen Kumar</span>
                </li>
                <li>
                  <span className="pro-title"> Age </span>{" "}
                  <span className="pro-detail">30 Years</span>
                </li>
                <li>
                  <span className="pro-title"> Experience </span>{" "}
                  <span className="pro-detail">8 Years</span>
                </li>
                <li>
                  <span className="pro-title"> Country </span>{" "}
                  <span className="pro-detail">INDIA</span>
                </li>
                <li>
                  <span className="pro-title"> Location </span>{" "}
                  <span className="pro-detail">Tamil Nadu, CHENNAI</span>
                </li>
                <li>
                  <span className="pro-title"> e-mail </span>{" "}
                  <span className="pro-detail">rpk.sharaj@gmail.com</span>
                </li>
                <li>
                  <span className="pro-title"> Phone </span>{" "}
                  <span className="pro-detail">+ (91) 97910 52738</span>
                </li>
                <li>
                  <span className="pro-title"> Freelance </span>{" "}
                  <span className="pro-detail">Available</span>
                </li>
              </ul>
            </div>
            <a href="#resume" className="btn">
              <i className="icon-paper-clip"></i> Download Resume
            </a>
            <a href="#contact" className="btn btn-danger">
              <i className="icon-speech"></i> Contact Me
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
