import React from "react";
import "./Resume.scss";

const Resume = props => {
  const animateClass = inp => (props.activeSection === "resume" ? inp : "");
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
              style={{ paddingTop: "50px" }}
            >
              <div className="content-text">
                <h3 className="line-title">Bsc In CSE - Yale University</h3>
                <span>2012 - 2016</span>
                <p className="line-text">
                  Expenses as material breeding insisted building to in.
                  Continual so distrusts pronounce by unwilling listening. Thing
                  do taste on we manor.
                </p>
              </div>
            </li>
            <li
              className={`${animateClass("fadeInRight")}`}
              style={{ paddingTop: "50px", paddingBotton: "75px" }}
            >
              <div className="content-text">
                <h3 className="line-title">
                  Secondary School - Labratory High School
                </h3>
                <span>2005 - 2010</span>
                <p className="line-text">
                  Expenses as material breeding insisted building to in.
                  Continual so distrusts pronounce by unwilling listening. Thing
                  do taste on we manor.
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
                <h3 className="line-title">Art Director - Tesla Inc.</h3>
                <span>Jan 2018 - Present</span>
                <p className="line-text">
                  Expenses as material breeding insisted building to in.
                  Continual so distrusts pronounce by unwilling listening. Thing
                  do taste on we manor.
                </p>
              </div>
            </li>
            <li className={`${animateClass("fadeInLeft")}`}>
              <div className="content-text">
                <h3 className="line-title">UX/UI Designer - Samsung</h3>
                <span>Nov 2016 - Dec 2017</span>
                <p className="line-text">
                  Expenses as material breeding insisted building to in.
                  Continual so distrusts pronounce by unwilling listening. Thing
                  do taste on we manor.
                </p>
              </div>
            </li>
            <li className={`${animateClass("fadeInRight")}`}>
              <div className="content-text">
                <h3 className="line-title">Intern UI Designer - UIdeck</h3>
                <span>Mar 2015 - Oct 2016</span>
                <p className="line-text">
                  Expenses as material breeding insisted building to in.
                  Continual so distrusts pronounce by unwilling listening. Thing
                  do taste on we manor.
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
