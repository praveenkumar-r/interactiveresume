import React from "react";
import "./Services.scss";

const Services = props => {
  const animateClass = (inp, index) =>
    props.activeSection === "services" ? "card-section" : "card-section";

  return (
    <>
      <h2
        className={
          props.activeSection === "services"
            ? "section-title slide fadeInRight"
            : "section-title slide"
        }
      >
        What I do
      </h2>
      <div className="navigate">
        <div className="leftarrow">
          <i className="arrow left"></i>
        </div>
      </div>
      <div className="container slider">
        <div className={`card-container slide-track animateCarousal`}>
          <div className={`${animateClass("fadeInTop", 1)}`}>
            <div className="card">
              <div className="card-icon">
                <i className="icon-layers"></i>
              </div>
              <div className="card-content">
                <h3>Front-end Development1</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse condi.
                </p>
              </div>
            </div>
          </div>
          <div className={`${animateClass("fadeInTop", 2)}`}>
            <div className="card">
              <div className="card-icon">
                <span
                  className="iconify"
                  data-icon="logos:angular-icon"
                  data-inline="false"
                ></span>
              </div>
              <div className="card-content">
                <h3>Front-end Development2</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse condi.
                </p>
              </div>
            </div>
          </div>
          <div className={`${animateClass("fadeInTop", 3)}`}>
            <div className="card">
              <div className="card-icon">
                <span
                  className="iconify"
                  data-icon="logos:react"
                  data-inline="false"
                ></span>
              </div>
              <div className="card-content">
                <h3>Front-end Development3</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse condi.
                </p>
              </div>
            </div>
          </div>
          <div className={`${animateClass("fadeInTop", 4)}`}>
            <div className="card">
              <div className="card-icon">
                <span
                  className="iconify"
                  data-icon="logos:nodejs"
                  data-inline="false"
                ></span>
              </div>
              <div className="card-content">
                <h3>Front-end Development4</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse condi.
                </p>
              </div>
            </div>
          </div>
          <div className={`${animateClass("fadeInTop", 5)}`}>
            <div className="card">
              <div className="card-icon">
                <span
                  className="iconify"
                  data-icon="logos:angular-icon"
                  data-inline="false"
                ></span>
              </div>
              <div className="card-content">
                <h3>Front-end Development5</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse condi.
                </p>
              </div>
            </div>
          </div>
          <div className={`${animateClass("fadeInTop", 1)}`}>
            <div className="card">
              <div className="card-icon">
                <i className="icon-layers"></i>
              </div>
              <div className="card-content">
                <h3>Front-end Development1</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse condi.
                </p>
              </div>
            </div>
          </div>
          <div className={`${animateClass("fadeInTop", 2)}`}>
            <div className="card">
              <div className="card-icon">
                <span
                  className="iconify"
                  data-icon="logos:angular-icon"
                  data-inline="false"
                ></span>
              </div>
              <div className="card-content">
                <h3>Front-end Development2</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse condi.
                </p>
              </div>
            </div>
          </div>
          <div className={`${animateClass("fadeInTop", 3)}`}>
            <div className="card">
              <div className="card-icon">
                <span
                  className="iconify"
                  data-icon="logos:react"
                  data-inline="false"
                ></span>
              </div>
              <div className="card-content">
                <h3>Front-end Development3</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse condi.
                </p>
              </div>
            </div>
          </div>
          <div className={`${animateClass("fadeInTop", 4)}`}>
            <div className="card">
              <div className="card-icon">
                <span
                  className="iconify"
                  data-icon="logos:nodejs"
                  data-inline="false"
                ></span>
              </div>
              <div className="card-content">
                <h3>Front-end Development4</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse condi.
                </p>
              </div>
            </div>
          </div>
          <div className={`${animateClass("fadeInTop", 5)}`}>
            <div className="card">
              <div className="card-icon">
                <span
                  className="iconify"
                  data-icon="logos:angular-icon"
                  data-inline="false"
                ></span>
              </div>
              <div className="card-content">
                <h3>Front-end Development5</h3>
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
