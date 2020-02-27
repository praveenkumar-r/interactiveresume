import React, { useState, useEffect } from "react";
import "./Services.scss";

const Services = props => {
  const [hiddenIndex, sethiddenIndex] = useState(1);
  useEffect(() => {
    let activeIndex = 1;
    var carousalCall;
    const carousal = () => {
      console.log(activeIndex);
      sethiddenIndex(activeIndex);
      activeIndex = activeIndex + 1;
      if (activeIndex > 5) activeIndex = 1;
    };
    clearInterval(carousalCall);
    carousalCall = setInterval(carousal, 2000);
  }, []);

  const animateClass = (inp, index) =>
    props.activeSection === "services" && hiddenIndex === index
      ? "card-section"
      : "card-section";

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
                <h3>Front-end Development 4</h3>
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
                <h3>Front-end Development 4</h3>
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
