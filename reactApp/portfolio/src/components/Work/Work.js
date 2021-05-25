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
                  <div className="header" style={{ "background": "#0066B3" }}></div>
                  <div className="logo">
                    <img alt="" src="assets/images/HSNLogo.png"></img>
                  </div>
                  <div className="description">
                    <div className="panelholder">
                      <div className="panelkey">Project Title </div>
                      <div className="panelvalue">HSN (HCL)</div>
                    </div>
                    <div className="panelholder adjustpadding">
                      <div className="panelkey">Team Size </div>
                      <div className="panelvalue">3</div>
                    </div>
                    <div className="panelholder adjustpadding">
                      <div className="panelkey">Tech Stack </div>
                      <div className="panelvalue">HTML5, CSS3 , jQuery, JavaScript</div>
                    </div>
                  </div>
                  <div className="footer">
                    <i className="icon-action-redo"></i>More Info
              </div>
                </div>
                <div className="card-back" style={{ "background": "#0066B3", "color": "#fff" }}>
                  <div className="panelpadding">
                    <div className="panelHeader">Description</div>
                    <div className="panelContent">
                      Home Shopping Network (HSN) is a SMART TV Application built for various Environments. This Application provides shopping experience to the end Users through SMART TV.Consumers can place orders from different TVs, which support HTML 5.0.</div>
                  </div>
                  <div className="panelpadding">
                    <div className="panelHeader">Roles &amp; Responsisbilities</div>
                    <div className="panelDescription">
                      <span>• Integration of code, testing and system testing the shopping application.</span>
                      <span>• Development of over the top shopping application for Verizon, Samsung, Panasonic TVs.</span>
                      <span>• Interaction with customer on daily basis for updating status and requirement clarification.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer toggle" style={{ "color": "#fff" }}>
              <i className="icon-action-undo" style={{ "color": "#fff" }}></i>
              Back
          </div>
          </div>
          <div className="work-item">
            <div className="card-holder">
              <div className="card-content">
                <div className="card-front">
                  <div className="header" style={{ "background": "#F6D000" }}></div>
                  <div className="logo">
                    <div className="CatLogo">
                      <img alt="" src="assets/images/CAT.png"></img>
                    </div>
                  </div>
                  <div className="description">
                    <div className="panelholder">
                      <div className="panelkey">Project Title </div>
                      <div className="panelvalue">Product Link Web</div>
                    </div>
                    <div className="panelholder adjustpadding">
                      <div className="panelkey">Team Size </div>
                      <div className="panelvalue">15</div>
                    </div>
                    <div className="panelholder adjustpadding">
                      <div className="panelkey">Tech Stack </div>
                      <div className="panelvalue">HTML5, CSS3, jQuery, Backbone, Handlebar</div>
                    </div>
                  </div>
                  <div className="footer">
                    <i className="icon-action-redo"></i>More Info
              </div>
                </div>
                <div className="card-back" style={{ "background": "#F6D000" }}>
                  <div className="panelpadding">
                    <div className="panelHeader">Description</div>
                    <div className="panelContent" style={{ "lineHeight": "17px" }}>
                      This application is used for dealers, customers and administrators that enable them to monitor remotely the status of various equipment parameterss , helps in getting alerts to the users if any fault code occurs or any equipment crosses the geo boundary of the site.
                    </div>
                    <div className="panelpadding">
                      <div className="panelHeader">Roles &amp; Responsisbilities</div>
                      <div className="panelDescription">
                        <span>• Designed and developed this application in MVC Backbone framework..</span>
                        <span>• Maintaining the application responsive for several resolutions.</span>
                        <span>• Integrated Bing map showing truck location and path of travel.</span>
                        <span>• Migrated the entire product from Backbone to Angular JS.</span>
                      </div>
                    </div>
                  </div>
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
                  <div className="header" style={{ "background": "#F6D000" }}></div>
                  <div className="logo">
                    <div className="CatLogo">
                      <img alt="" src="assets/images/CAT.png"></img>
                    </div>
                  </div>
                  <div className="description">
                    <div className="panelholder">
                      <div className="panelkey">Project Title </div>
                      <div className="panelvalue">Dealer Services Portal</div>
                    </div>
                    <div className="panelholder adjustpadding">
                      <div className="panelkey">Team Size </div>
                      <div className="panelvalue">15</div>
                    </div>
                    <div className="panelholder adjustpadding">
                      <div className="panelkey">Tech Stack </div>
                      <div className="panelvalue">Node, HTML5, CSS3, Angular, Javascript</div>
                    </div>
                  </div>
                  <div className="footer">
                    <i className="icon-action-redo"></i>More Info
              </div>
                </div>
                <div className="card-back" style={{ "background": "#F6D000" }}>
                  <div className="panelpadding">
                    <div className="panelHeader">Description</div>
                    <div className="panelContent" style={{ "lineHeight": "17px" }}>
                      This application is for dealers and customers that enable them to subscribe the assets which is been mapped to multiple applications. This portal provides billing related information to the users for subscribed assets.Dealers can check connection for the asset from DSP
                    </div>
                    <div className="panelpadding">
                      <div className="panelHeader">Roles &amp; Responsisbilities</div>
                      <div class="panelDescription">
                        <span>• Designed componentized UI architecture and developed this application in Angular framework running on express Node</span>
                        <span>• Code reviewing and proving technical solutions for other developer queries.</span>
                        <span>• Implemented unit testing using Jasmine and Karma.</span>
                      </div>
                    </div>
                  </div>
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
                  <div className="header" style={{ "background": "#F6D000" }}></div>
                  <div className="logo">
                    <div className="CatLogo">
                      <img alt="" src="assets/images/CAT.png"></img>
                    </div>
                  </div>
                  <div className="description">
                    <div className="panelholder">
                      <div className="panelkey">Project Title </div>
                      <div className="panelvalue">eRoutes</div>
                    </div>
                    <div className="panelholder adjustpadding">
                      <div className="panelkey">Team Size </div>
                      <div className="panelvalue">15</div>
                    </div>
                    <div className="panelholder adjustpadding">
                      <div className="panelkey">Tech Stack </div>
                      <div className="panelvalue">Node ,Angular 5, Redux, NX, HTML5, CSS3, JavaScript</div>
                    </div>
                  </div>
                  <div className="footer">
                    <i className="icon-action-redo"></i>More Info
              </div>
                </div>
                <div className="card-back" style={{ "background": "#F6D000" }}>
                  <div className="panelpadding">
                    <div className="panelHeader">Description</div>
                    <div className="panelContent" style={{ "lineHeight": "17px" }}>
                      eRoutes is a process monitoring solution that facilitates the smooth, steady delivery of material from the plant to the paver. eRoutes is a web application that allows paving contractors to track the location and productivity of haul trucks as they travel between plant and jobsite.
                    </div>
                    <div className="panelpadding">
                      <div className="panelHeader">Roles &amp; Responsisbilities</div>
                      <div class="panelDescription">
                        <span>• Developed Node API for processing Data, used Passport for user authentication running in express node server.</span>
                        <span>• Implemented NGRX store management.</span>
                        <span>• NX framework has been used for development that helps in developing multiple apps in mono repository.</span>
                      </div>
                    </div>
                  </div>
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
                  <div className="header" style={{ "background": "#00EF00" }}></div>
                  <div className="logo">
                    <div className="nielsenlogo">
                      <img alt="" src="assets/images/nielsen1.png"></img>
                    </div>
                  </div>
                  <div className="description">
                    <div className="panelholder">
                      <div className="panelkey">Project Title </div>
                      <div className="panelvalue">Shopper Explorer</div>
                    </div>
                    <div className="panelholder adjustpadding">
                      <div className="panelkey">Team Size </div>
                      <div className="panelvalue">8</div>
                    </div>
                    <div className="panelholder adjustpadding">
                      <div className="panelkey">Tech Stack </div>
                      <div className="panelvalue">Angular 10, Java, Azure, HTML5, CSS3, JavaScript</div>
                    </div>
                  </div>
                  <div className="footer">
                    <i className="icon-action-redo"></i>More Info
              </div>
                </div>
                <div className="card-back" style={{ "background": "#00EF00" }}>
                  <div className="panelpadding">
                    <div className="panelHeader">Description</div>
                    <div className="panelContent" style={{ "lineHeight": "17px" }}>
                      Shopper explorer is used to generate reports visualizing the status of product sales based on location, duration…etc. This portal provides various data visualizations having different kinds of chart and table. Currently this portal is used by multiple clients like Proctor Gamble, Tyson etc. Data visualization can be exported as excel and PPT for sharing the reports visual.
                    </div>
                    <div className="panelpadding">
                      <div className="panelHeader">Roles &amp; Responsisbilities</div>
                      <div class="panelDescription">
                        <span>• Code reviewing and proving technical solutions for other developer queries..</span>
                        <span>• Designed and implemented CI/CD process involving DOCKER and Jenkins.</span>
                        <span>• E2E automation testing using protractor.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer toggle">
              <i className="icon-action-undo"></i>
              Back
            </div>
          </div>
        </div>
        <h2 className="section-title">Freelancing Works</h2>
        <div id="work-block">
          <div className="work-item">
            <div className="card-holder">
              <div className="card-content">
                <div className="card-front">
                  <div className="header" style={{ "background": "#00BCAD" }}></div>
                  <div className="logo">
                    <div className="fforwardlogo">
                      <img alt="" src="assets/images/fforward_logo.png"></img>
                    </div>
                  </div>
                  <div className="description">
                    <div className="panelholder">
                      <div className="panelkey">Project Title </div>
                      <div className="panelvalue">FForward</div>
                    </div>
                    <div className="panelholder adjustpadding">
                      <div className="panelkey">Link </div>
                      <div className="panelvalue">Not Available</div>
                    </div>
                    <div className="panelholder adjustpadding">
                      <div className="panelkey">Tech Stack </div>
                      <div className="panelvalue">HTML5, CSS3 , Angular8, JavaScript</div>
                    </div>
                  </div>
                  <div className="footer">
                    <i className="icon-action-redo"></i>More Info
              </div>
                </div>
                <div className="card-back" style={{ "background": "#00BCAD" }}>
                  <div className="panelpadding">
                    <div className="panelHeader">Description</div>
                    <div className="panelContent">
                      FForward allows configuring granular data access controls and auditing for all your databases at one place.Allows everyone to use data analytics as risk of unauthorized data access is minimized.
                    </div>
                  </div>
                  <div className="panelpadding">
                    <div className="panelHeader">Roles &amp; Responsisbilities</div>
                    <div className="panelDescription">
                      <span>• Developed admin application for fforward in Angular8.</span>
                      <span>• Developed dynamic form builder using drag and drop functionality.</span>
                      <span>• Completed the work on correct timeline.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer toggle" style={{ "color": "#fff" }}>
              <i className="icon-action-undo" style={{ "color": "#fff" }}></i>
              Back
          </div>
          </div>
          <div className="work-item">
            <div className="card-holder">
              <div className="card-content">
                <div className="card-front">
                  <div className="header" style={{ "background": "#F6D000" }}></div>
                  <div className="logo">
                    <div className="CatLogo">
                      <img alt="" src="assets/images/CAT.png"></img>
                    </div>
                  </div>
                  <div className="description">
                    <div className="panelholder">
                      <div className="panelkey">Project Title </div>
                      <div className="panelvalue">Product Link Web</div>
                    </div>
                    <div className="panelholder adjustpadding">
                      <div className="panelkey">Team Size </div>
                      <div className="panelvalue">15</div>
                    </div>
                    <div className="panelholder adjustpadding">
                      <div className="panelkey">Tech Stack </div>
                      <div className="panelvalue">HTML5, CSS3, jQuery, Backbone, Handlebar</div>
                    </div>
                  </div>
                  <div className="footer">
                    <i className="icon-action-redo"></i>More Info
              </div>
                </div>
                <div className="card-back" style={{ "background": "#F6D000" }}>
                  <div className="panelpadding">
                    <div className="panelHeader">Description</div>
                    <div className="panelContent" style={{ "lineHeight": "17px" }}>
                      This application is used for dealers, customers and administrators that enable them to monitor remotely the status of various equipment parameterss , helps in getting alerts to the users if any fault code occurs or any equipment crosses the geo boundary of the site.
                    </div>
                    <div className="panelpadding">
                      <div className="panelHeader">Roles &amp; Responsisbilities</div>
                      <div className="panelDescription">
                        <span>• Designed and developed this application in MVC Backbone framework..</span>
                        <span>• Maintaining the application responsive for several resolutions.</span>
                        <span>• Integrated Bing map showing truck location and path of travel.</span>
                        <span>• Migrated the entire product from Backbone to Angular JS.</span>
                      </div>
                    </div>
                  </div>
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
                  <div className="header" style={{ "background": "#F6D000" }}></div>
                  <div className="logo">
                    <div className="CatLogo">
                      <img alt="" src="assets/images/CAT.png"></img>
                    </div>
                  </div>
                  <div className="description">
                    <div className="panelholder">
                      <div className="panelkey">Project Title </div>
                      <div className="panelvalue">Dealer Services Portal</div>
                    </div>
                    <div className="panelholder adjustpadding">
                      <div className="panelkey">Team Size </div>
                      <div className="panelvalue">15</div>
                    </div>
                    <div className="panelholder adjustpadding">
                      <div className="panelkey">Tech Stack </div>
                      <div className="panelvalue">Node, HTML5, CSS3, Angular, Javascript</div>
                    </div>
                  </div>
                  <div className="footer">
                    <i className="icon-action-redo"></i>More Info
              </div>
                </div>
                <div className="card-back" style={{ "background": "#F6D000" }}>
                  <div className="panelpadding">
                    <div className="panelHeader">Description</div>
                    <div className="panelContent" style={{ "lineHeight": "17px" }}>
                      This application is for dealers and customers that enable them to subscribe the assets which is been mapped to multiple applications. This portal provides billing related information to the users for subscribed assets.Dealers can check connection for the asset from DSP
                    </div>
                    <div className="panelpadding">
                      <div className="panelHeader">Roles &amp; Responsisbilities</div>
                      <div class="panelDescription">
                        <span>• Designed componentized UI architecture and developed this application in Angular framework running on express Node</span>
                        <span>• Code reviewing and proving technical solutions for other developer queries.</span>
                        <span>• Implemented unit testing using Jasmine and Karma.</span>
                      </div>
                    </div>
                  </div>
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
                  <div className="header" style={{ "background": "#F6D000" }}></div>
                  <div className="logo">
                    <div className="CatLogo">
                      <img alt="" src="assets/images/CAT.png"></img>
                    </div>
                  </div>
                  <div className="description">
                    <div className="panelholder">
                      <div className="panelkey">Project Title </div>
                      <div className="panelvalue">eRoutes</div>
                    </div>
                    <div className="panelholder adjustpadding">
                      <div className="panelkey">Team Size </div>
                      <div className="panelvalue">15</div>
                    </div>
                    <div className="panelholder adjustpadding">
                      <div className="panelkey">Tech Stack </div>
                      <div className="panelvalue">Node ,Angular 5, Redux, NX, HTML5, CSS3, JavaScript</div>
                    </div>
                  </div>
                  <div className="footer">
                    <i className="icon-action-redo"></i>More Info
              </div>
                </div>
                <div className="card-back" style={{ "background": "#F6D000" }}>
                  <div className="panelpadding">
                    <div className="panelHeader">Description</div>
                    <div className="panelContent" style={{ "lineHeight": "17px" }}>
                      eRoutes is a process monitoring solution that facilitates the smooth, steady delivery of material from the plant to the paver. eRoutes is a web application that allows paving contractors to track the location and productivity of haul trucks as they travel between plant and jobsite.
                    </div>
                    <div className="panelpadding">
                      <div className="panelHeader">Roles &amp; Responsisbilities</div>
                      <div class="panelDescription">
                        <span>• Developed Node API for processing Data, used Passport for user authentication running in express node server.</span>
                        <span>• Implemented NGRX store management.</span>
                        <span>• NX framework has been used for development that helps in developing multiple apps in mono repository.</span>
                      </div>
                    </div>
                  </div>
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
                  <div className="header" style={{ "background": "#00EF00" }}></div>
                  <div className="logo">
                    <div className="nielsenlogo">
                      <img alt="" src="assets/images/nielsen1.png"></img>
                    </div>
                  </div>
                  <div className="description">
                    <div className="panelholder">
                      <div className="panelkey">Project Title </div>
                      <div className="panelvalue">Shopper Explorer</div>
                    </div>
                    <div className="panelholder adjustpadding">
                      <div className="panelkey">Team Size </div>
                      <div className="panelvalue">8</div>
                    </div>
                    <div className="panelholder adjustpadding">
                      <div className="panelkey">Tech Stack </div>
                      <div className="panelvalue">Angular 10, Java, Azure, HTML5, CSS3, JavaScript</div>
                    </div>
                  </div>
                  <div className="footer">
                    <i className="icon-action-redo"></i>More Info
              </div>
                </div>
                <div className="card-back" style={{ "background": "#00EF00" }}>
                  <div className="panelpadding">
                    <div className="panelHeader">Description</div>
                    <div className="panelContent" style={{ "lineHeight": "17px" }}>
                      Shopper explorer is used to generate reports visualizing the status of product sales based on location, duration…etc. This portal provides various data visualizations having different kinds of chart and table. Currently this portal is used by multiple clients like Proctor Gamble, Tyson etc. Data visualization can be exported as excel and PPT for sharing the reports visual.
                    </div>
                    <div className="panelpadding">
                      <div className="panelHeader">Roles &amp; Responsisbilities</div>
                      <div class="panelDescription">
                        <span>• Code reviewing and proving technical solutions for other developer queries..</span>
                        <span>• Designed and implemented CI/CD process involving DOCKER and Jenkins.</span>
                        <span>• E2E automation testing using protractor.</span>
                      </div>
                    </div>
                  </div>
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
            <div className="img-holder">
              <img alt="" src="assets/images/HSNLogo.png"></img>
            </div>
          </div>
          <div className="image-block">
            <div className="img-holder">
              <img alt="" src="assets/images/hclnew.png"></img>
            </div>
          </div>
          <div className="image-block">
            <div className="img-holder">
              <img alt="" src="assets/images/CAT.png"></img>
            </div>
          </div>
          <div className="image-block">
            <div className="img-holder">
              <img alt="" src="assets/images/nielsen1.png"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
