import React from "react";
import "./Resume.scss";

const Resume = (props) => {
  const animateClass = (inp) => (props.activeSection === "resume" ? inp : "");
  return (
    <>
      <div className="container flex_direction_column">
        <div className="padLeft" id="education-block">
          <ul className="timeline">
            <li className={`${animateClass("fadeInTop")}`}>
              <i className="icon-graduation"></i>
              <h2 className="timelin-title">Education</h2>
            </li>
            <li
              className={`${animateClass("fadeInLeft")}`}
              style={{ paddingTop: "100px" }}
            >
              <div className="content-text">
                <h3 className="line-title">BE In ECE - Anna University</h3>
                <span>2006 - 2010</span>
                <p className="line-text">
                  Completed BE in Electronics and Communications Engineering
                  (ECE) in Jerusalem college of engineering chennai with{" "}
                  <strong>first class distinction(80%)</strong>
                </p>
              </div>
            </li>
            <li
              className={`${animateClass("fadeInRight")}`}
              style={{ paddingTop: "150px", paddingBotton: "75px" }}
            >
              <div className="content-text">
                <h3 className="line-title">
                  Secondary School - Sri Sankara Vidyalaya
                </h3>
                <span>2005 - 2006</span>
                <p className="line-text">
                  Completed Higher secondary with{" "}
                  <strong>first class distinction(88%).</strong>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="padLeft" id="experience-block">
          <ul className="timeline">
            <li className={`${animateClass("fadeInTop")}`}>
              <i className="icon-briefcase"></i>
              <h2 className="timelin-title">Experience</h2>
            </li>
            <li className={`${animateClass("fadeInRight")}`}>
              <div className="content-text">
                <h3 className="line-title">Senior Engineer - Nielsen.</h3>
                <span>Sep 2019 - Present</span>
                <p className="line-text">
                  Working as Senior Engineer in Nielsen chennai, TamilNadu
                </p>
              </div>
            </li>
            <li className={`${animateClass("fadeInRight")}`}>
              <div className="content-text">
                <h3 className="line-title">UI Lead - Caterpillar.</h3>
                <span>Apr 2016 - Aug 2019</span>
                <p className="line-text">
                  Worked as UI Lead in Caterpillar chennai, TamilNadu for 3years
                  and 5months.
                </p>
              </div>
            </li>
            <li className={`${animateClass("fadeInLeft")}`}>
              <div className="content-text">
                <h3 className="line-title">
                  Senior Software Developer - Caterpillar USA <span role="img" style={{ 'float': 'right', 'marginTop': '-10px' }} aria-label="flight">✈️</span>
                </h3>
                <span>May 2014 - Nov 2015</span>
                <p className="line-text">
                  Worked as senior software developer in Caterpillar Illinois,
                  USA TamilNadu for 1years and 6months
                </p>
              </div>
            </li>
            <li className={`${animateClass("fadeInLeft")}`}>
              <div className="content-text">
                <h3 className="line-title">
                  Senior Software Developer - Caterpillar chennai
                </h3>
                <span>Nov 2013 - Apr 2016</span>
                <p className="line-text">
                  Worked as senior software developer in Caterpillar chennai,
                  TamilNadu for 6months
                </p>
              </div>
            </li>
            <li className={`${animateClass("fadeInRight")}`}>
              <div className="content-text">
                <h3 className="line-title">
                  Software Engineer - HCL Technologies
                </h3>
                <span>Oct 2010 - Nov 2013</span>
                <p className="line-text">
                  Worked as software enginner in HCL Ttechnologies chennai,
                  Tamil Nadu for 3years and 2months
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Resume;
