import React from "react";
import "./Services.scss";

const Services = props => {
  const animateClass = inp =>
    props.activeSection === "services" ? "card-section " + inp : "card-section";
  return (
    <>
      <h2
        className={
          props.activeSection === "services"
            ? "section-title fadeInRight"
            : "section-title"
        }
      >
        What I do
      </h2>
      <div className="container">
        <div className="card-container">
          <div className={`${animateClass("fadeInTop")}`}>
            <div className="card">
              <div className="card-icon">
                <i className="icon-layers"></i>
              </div>
              <div className="card-content">
                <h3>Front-end Development</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse condi.
                </p>
              </div>
            </div>
          </div>

          <div className={`${animateClass("fadeInTop")}`}>
            <div className="card">
              <div className="card-icon">
                <span
                  className="iconify"
                  data-icon="logos:angular-icon"
                  data-inline="false"
                ></span>
              </div>
              <div className="card-content">
                <h3>Front-end Development</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse condi.
                </p>
              </div>
            </div>
          </div>
          <div className={`${animateClass("fadeInTop")}`}>
            <div className="card">
              <div className="card-icon">
                <span
                  className="iconify"
                  data-icon="logos:react"
                  data-inline="false"
                ></span>
              </div>
              <div className="card-content">
                <h3>Front-end Development</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse condi.
                </p>
              </div>
            </div>
          </div>
          <div className={`${animateClass("fadeInTop")}`}>
            <div className="card">
              <div className="card-icon">
                <span
                  className="iconify"
                  data-icon="logos:nodejs"
                  data-inline="false"
                ></span>
              </div>
              <div className="card-content">
                <h3>Front-end2 Development</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse condi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
