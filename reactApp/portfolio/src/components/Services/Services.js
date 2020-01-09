import React, { useEffect, useState } from "react";
import "./Services.scss";

function Services() {
  const [animate, setanimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setanimate(true);
    }, 100);
  });
  return (
    <>
      <h2 className={animate ? "section-title fadeInRight" : "section-title"}>
        What I do
      </h2>
      <div className="container">
        <div className="card-container">
          <div className={animate ? "card-section fadeInTop" : "card-section"}>
            <div className="card">
              <div className="card-icon">
                <i class="icon-layers"></i>
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

          <div className={animate ? "card-section fadeInTop" : "card-section"}>
            <div className="card">
              <div className="card-icon">
                <span
                  class="iconify"
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
          <div className={animate ? "card-section fadeInTop" : "card-section"}>
            <div className="card">
              <div className="card-icon">
                <span
                  class="iconify"
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
          <div className={animate ? "card-section fadeInTop" : "card-section"}>
            <div className="card">
              <div className="card-icon">
                <span
                  class="iconify"
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
}

export default Services;
