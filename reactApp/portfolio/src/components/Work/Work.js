import React from "react";
import "./Work.scss";

const Work = () => {
  return (
    <>
      <div className="container">
        <h2 className="section-title">My Remarkable Works</h2>
        <div id="work-block">
          <div className="work-item">
            <div className="card-holder">
              <div className="card-content">
                <div className="card-front">
                  <div className="projImg">
                    <img src="assets/images/HSN.png" alt=""></img>
                  </div>
                  <div className="cardDesc">
                    <div className="projName">HSN</div>
                    <div className="compName">HCL</div>

                    <div className="footer">
                      <i className="icon-action-redo"></i>More Info
                    </div>
                  </div>
                </div>
                <div className="card-back"></div>
              </div>
            </div>
            <div className="footer toggle">
              <i className="icon-action-undo"></i>
              Back
            </div>
          </div>
          <div className="work-item">
            <div className="card-holder">
              <div className="card-content">
                <div className="card-front">
                  <div className="projImg">
                    <img src="assets/images/Pl-Web.png" alt=""></img>
                  </div>
                  <div className="cardDesc">
                    <div className="projName">PL WEB</div>
                    <div className="compName">CAT</div>
                    <div className="footer">
                      <i className="icon-action-redo"></i>More Info
                    </div>
                  </div>
                </div>
                <div className="card-back">
                  <h3>Home shopping Network</h3>
                  <p>Shop By Remote</p>
                </div>
              </div>
            </div>
            <div className="footer toggle">
              <i className="icon-action-undo"></i>
              Back
            </div>
          </div>
          <div className="work-item">
            <div className="card-holder">
              <div className="card-content">
                <div className="card-front">
                  <div className="projImg">
                    <img src="assets/images/DSP.png" alt=""></img>
                  </div>
                  <div className="cardDesc">
                    <div className="projName">DSP</div>
                    <div className="compName">CAT</div>
                    <div className="footer">
                      <i className="icon-action-redo"></i>More Info
                    </div>
                  </div>
                </div>
                <div className="card-back">
                  <h3>Home shopping Network</h3>
                  <p>Shop By Remote</p>
                </div>
              </div>
            </div>

            <div className="footer toggle">
              <i className="icon-action-undo"></i>
              Back
            </div>
          </div>
          <div className="work-item">
            <div className="card-holder">
              <div className="card-content">
                <div className="card-front">
                  <div className="projImg">
                    <img src="assets/images/eRoutes.png" alt=""></img>
                  </div>
                  <div className="cardDesc">
                    <div className="projName">eRoutes</div>
                    <div className="compName">CAT</div>
                    <div className="footer">
                      <i className="icon-action-redo"></i>More Info
                    </div>
                  </div>
                </div>
                <div className="card-back">
                  <h3>Home shopping Network</h3>
                  <p>Shop By Remote</p>
                </div>
              </div>
            </div>

            <div className="footer toggle">
              <i className="icon-action-undo"></i>
              Back
            </div>
          </div>
          <div className="work-item">
            <div className="card-holder">
              <div className="card-content">
                <div className="card-front">
                  <div className="projImg">
                    <img src="assets/images/shopperExplorer.png" alt=""></img>
                  </div>
                  <div className="cardDesc">
                    <div className="projName">Shopper Explorer</div>
                    <div className="compName">Nielsen</div>
                    <div className="footer">
                      <i className="icon-action-redo"></i>More Info
                    </div>
                  </div>
                </div>
                <div className="card-back">
                  <h3>Home shopping Network</h3>
                  <p>Shop By Remote</p>
                </div>
              </div>
            </div>

            <div className="footer toggle">
              <i className="icon-action-undo"></i>
              Back
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
            <div class="img-holder">
              <img alt="" src="assets/images/HSNLogo.png"></img>
            </div>
          </div>
          <div className="image-block">
            <div class="img-holder">
              <img alt="" src="assets/images/hclnew.png"></img>
            </div>
          </div>
          <div className="image-block">
            <div class="img-holder">
              <img alt="" src="assets/images/CAT.png"></img>
            </div>
          </div>
          <div className="image-block">
            <div class="img-holder">
              <img alt="" src="assets/images/nielsen.png"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
