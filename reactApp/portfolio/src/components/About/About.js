import React from "react";
import "./About.scss";

const About = (props) => {
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
            <h3>
              Hi Guys! <span class="wave" role="img" aria-label="hi">👋</span>
            </h3>

            <p>
              I have{" "}
              <strong>
                10+ years of experience as a software engineer, architect, and
                team builder
              </strong>
              .I enjoy building everything from small business sites to rich
              interactive webapps.
              <span class="seperator">
                I'm a hands-on technical leader who has built software products
                from the ground up, run large engineering teams, and provided
                guidance at the executive and board level. I specialize in
                building applications specific to the business needs of my
                clients.
              </span>
              <span class="mark seperator">
                If you are a business seeking a web presence or an employer
                looking to hire, you can get in touch with me here
              </span>
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
                  <span className="pro-detail">10+ Years</span>
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
            <a href="../../assets/Praveenkumar_Resume.pdf" download className="btn">
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
