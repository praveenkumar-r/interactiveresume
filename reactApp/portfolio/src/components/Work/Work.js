import React from "react";
import "./Work.scss";

const Work = () => {
  return (
    <>
      <div className="container">
        <h2 className="section-title">My Remarkable Works</h2>
        <div id="work-block">
          <div className="work-item">
            <div className="work-image">
              <img src="assets/images/HSN.png" alt=""></img>
            </div>
            <div className="overlay">
              <h3>Home shopping Network</h3>
              <p>Shop By Remote</p>
            </div>
          </div>
          <div className="work-item">
            <div className="work-image">
              <img src="assets/images/Pl-Web.png" alt=""></img>
            </div>
            <div className="overlay">
              <h3>Home shopping Network</h3>
              <p>Shop By Remote</p>
            </div>
          </div>
          <div className="work-item">
            <div className="work-image">
              <img src="assets/images/DSP.png" alt=""></img>
            </div>
            <div className="overlay">
              <h3>Home shopping Network</h3>
              <p>Shop By Remote</p>
            </div>
          </div>
          <div className="work-item">
            <div className="work-image">
              <img src="assets/images/eRoutes.png" alt=""></img>
            </div>
            <div className="overlay">
              <h3>Home shopping Network</h3>
              <p>Shop By Remote</p>
            </div>
          </div>
          <div className="work-item">
            <div className="work-image">
              <img src="assets/images/shopperExplorer.png" alt=""></img>
            </div>
            <div className="overlay">
              <h3>Home shopping Network</h3>
              <p>Shop By Remote</p>
            </div>
          </div>
        </div>
        <h2
          className="section-title"
          style={{ marginTop: "3%", marginBottom: "0%" }}
        >
          Clients
        </h2>
        <div id="client-block">
          <div className="image-block">
            <img alt="" src="assets/images/HSNLogo.png"></img>
          </div>
          <div className="image-block">
            <img alt="" src="assets/images/HCL.png"></img>
          </div>
          <div className="image-block">
            <img alt="" src="assets/images/CAT.png"></img>
          </div>
          <div className="image-block">
            <img alt="" src="assets/images/nielsen.png"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
