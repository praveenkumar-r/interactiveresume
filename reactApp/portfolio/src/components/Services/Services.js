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
                <span
                  className="iconify"
                  data-icon="logos:angular-icon"
                  data-inline="false"
                ></span>
              </div>
              <div class="card-content">
                <h3>Angular</h3>
                <div class="content">
                  <span class="header">AngularJS Experience</span>
                  <span class="delimiter">: </span>
                  <span class="value">3 Years</span>
                </div>
                <div class="content">
                  <span class="header">Angular Experience</span>
                  <span class="delimiter">: </span>
                  <span class="value">5 Years</span>
                </div>
                <div class="content">
                  <span class="header">Projects Completed</span>
                  <span class="delimiter">: </span>
                  <span class="value">7</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${animateClass("fadeInTop", 2)}`}>
            <div className="card">
              <div className="card-icon">
                <span
                  className="iconify"
                  data-icon="logos:react"
                  data-inline="false"
                ></span>
              </div>
              <div className="card-content two-step">
                <h3>REACT</h3>
                <div class="content first">
                  <span class="header">Experience</span>
                  <span class="delimiter">: </span>
                  <span class="value">1.5 Years</span>
                </div>
                <div class="content second">
                  <span class="header">Projects Completed</span>
                  <span class="delimiter">: </span>
                  <span class="value">2</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${animateClass("fadeInTop", 3)}`}>
            <div className="card">
              <div className="card-icon">
                <span
                  className="iconify"
                  data-icon="logos:nodejs"
                  data-inline="false"
                ></span>
              </div>
              <div className="card-content two-step">
                <h3>Node</h3>
                <div class="content first">
                  <span class="header">Experience</span>
                  <span class="delimiter">: </span>
                  <span class="value">2 Years</span>
                </div>
                <div class="content second">
                  <span class="header">Projects Completed</span>
                  <span class="delimiter">: </span>
                  <span class="value">2</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${animateClass("fadeInTop", 4)}`}>
            <div className="card">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="80" viewBox="221.807 89.47 440 621.061" enableBackground="new 221.807 89.47 440 621.061"><filter id="a" width="150%" height="150%" x="-5%" y="-5%"><feFlood floodColor="#000" result="floodFill" floodOpacity=".5" /><feComposite in="floodFill" in2="SourceAlpha" operator="in" result="coloredAlpha" /><feGaussianBlur in="coloredAlpha" result="blur" stdDeviation="8" /><feComposite in="blur" in2="SourceGraphic" operator="out" result="maskedOffsetBlur" /><feMerge><feMergeNode in="maskedOffsetBlur" /><feMergeNode in="SourceGraphic" /></feMerge></filter><g filter="url(#a)"><path fill="#e44d26" d="M261.849 660.647l-40.042-449.125h440l-40.086 449.054-180.184 49.954z" /><path fill="#f16529" d="M441.807 672.348l145.596-40.367 34.258-383.735H441.807z" /><path fill="#ebebeb" d="M441.807 414.82h-72.888l-5.035-56.406h77.923V303.33H303.683l1.32 14.778 13.538 151.794h123.266zM441.807 557.876l-.242.066-61.346-16.566-3.922-43.93h-55.294l7.718 86.489 112.834 31.323.252-.071z" /><path d="M262.745 89.47h27.992v27.656h25.606V89.47h27.993v83.75h-27.993v-28.044h-25.606v28.044h-27.99l-.002-83.75zM381.149 117.244h-24.642V89.47H433.8v27.774h-24.654v55.976H381.15v-55.976h-.001zM446.065 89.47h29.19l17.955 29.428 17.938-29.428h29.2v83.75h-27.882v-41.512l-19.259 29.778h-.481l-19.272-29.778v41.512h-27.39V89.47zM554.277 89.47h28v56.068h39.368v27.682h-67.368V89.47z" /><path fill="#fff" d="M441.617 414.82v55.082h67.83l-6.395 71.44-61.435 16.58v57.307l112.924-31.294.826-9.309 12.946-145.014 1.344-14.792h-14.842zM441.617 303.33v55.084H574.67l1.103-12.382 2.51-27.924 1.318-14.778z" /></g></svg>
              </div>
              <div className="card-content two-step">
                <h3>HTML5</h3>
                <div class="content first">
                  <span class="header">Experience</span>
                  <span class="delimiter">: </span>
                  <span class="value">10 Years</span>
                </div>
                <div class="content second">
                  <span class="header">Projects Completed</span>
                  <span class="delimiter">: </span>
                  <span class="value">10</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${animateClass("fadeInTop", 5)}`}>
            <div className="card">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="80" viewBox="0 0 538.584 538.583"><path d="M0 0h538.584v538.583H0V0z" fill="none" /><path d="M405.5 467.454L269.29 504.13l-136.212-36.676-31.432-340.525h335.29L405.5 467.454z" fill="#2062af" /><path d="M269.289 154.511v320.367l.308.084 110.229-29.682 25.443-290.769h-135.98z" fill="#3c9cd7" /><path d="M191.985 76.899V56.631h29.571V34.453h-51.749v62.684h51.749V76.899h-29.571zm82.766-20.268h20.674V34.453h-51.754v22.178c6.924 6.924 10.535 10.238 20.549 20.252-5.854 0-20.549.021-20.549.02v20.234h51.754V76.899l-20.674-20.268zm73.352 0h20.673V34.453H317.02v22.178c6.924 6.924 10.537 10.238 20.551 20.252-5.852 0-20.551.021-20.551.02v20.234h51.757V76.899l-20.674-20.268z" /><path d="M269.168 239.656l-97.49 40.602 3.233 40.199 94.257-40.301 100.265-42.868 4.157-41.122-104.422 43.49z" fill="#fff" /><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-825.508" y1="1338.301" x2="-825.508" y2="1419.102" gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)"><stop offset=".387" stopColor="#d1d3d4" stopOpacity="0" /><stop offset="1" stopColor="#d1d3d4" /></linearGradient><path d="M171.677 280.258l3.233 40.199 94.257-40.301v-40.5l-97.49 40.602z" fill="url(#a)" /><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="-724.552" y1="1378.602" x2="-724.552" y2="1462.591" gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)"><stop offset=".387" stopColor="#d1d3d4" stopOpacity="0" /><stop offset="1" stopColor="#d1d3d4" /></linearGradient><path d="M373.59 196.167l-104.422 43.489v40.5l100.265-42.868 4.157-41.121z" fill="url(#b)" /><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="-874.103" y1="1302.263" x2="-680.039" y2="1302.263" gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)"><stop offset="0" stopColor="#e8e7e5" /><stop offset="1" stopColor="#fff" /></linearGradient><path d="M171.827 280.258l3.234 40.199 144.625.461-3.235 53.598-47.59 13.398-45.748-11.551-2.772-33.268h-42.508l5.545 64.225 85.945 25.412 85.479-24.951 11.09-127.523H171.827z" fill="url(#c)" /><path d="M269.168 280.258h-97.49l3.233 40.199 94.257.301v-40.5zm0 107.528l-.462.129-45.742-11.551-2.772-33.268h-42.507l5.544 64.225 85.939 25.412v-44.947z" opacity=".05" /><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="-883.032" y1="1442.031" x2="-672.341" y2="1442.031" gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)"><stop offset="0" stopColor="#e8e7e5" /><stop offset="1" stopColor="#fff" /></linearGradient><path d="M162.898 196.167H373.59l-4.157 41.122H167.98l-5.082-41.122z" fill="url(#d)" /><path d="M269.168 196.167h-106.27l5.082 41.122h101.188v-41.122z" opacity=".05" /></svg>              </div>
              <div className="card-content two-step">
                <h3>CSS3</h3>
                <div class="content first">
                  <span class="header">Experience</span>
                  <span class="delimiter">: </span>
                  <span class="value">10 Years</span>
                </div>
                <div class="content second">
                  <span class="header">Projects Completed</span>
                  <span class="delimiter">: </span>
                  <span class="value">10</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${animateClass("fadeInTop", 6)}`}>
            <div className="card">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="80" viewBox="0 0 78.562 110.589"><path fill="#e6a329" d="M78.562,489.9H0l7.365,79.867,31.912,9.051,31.912-9.051Z" data-name="Path 275" transform="translate(0 -468.229)" /><path fill="#f1bf22" d="M887.9,637v75.643l25.856-7.325L920.046,637Z" data-name="Path 276" transform="translate(-848.623 -608.822)" /><path fill="#fff" d="M434.124,858.5H394.369L391.6,888.4l.057-.186h33.774l-1.1,12.651-10.776,3.1-10.935-3.15-.655-7.657h-9.926l1.416,15.3,20.1,5.706,20.109-5.706,2.769-30.032H400.589l.46-10.006h24.869l.372,5.733H436.3Z" data-name="Path 277" transform="translate(-374.277 -820.524)" /><path fill="#ebebeb" d="M413.563,858.5H394.369L391.6,888.4l.057-.186h21.905v-9.754H401.987l.46-10.006h11.116Zm-11.576,34.663h-9.949l1.416,15.292,20.1,5.7V903.979l-10.935-3.158Z" data-name="Path 278" transform="translate(-374.277 -820.524)" /><path fill="#231f20" d="M564.094,9.891H557.1v5.021h12V0h-5ZM586.371.08H574.179V5.3c1.628,1.628,2.477,2.411,4.875,4.769h-4.875v4.76h12.191V10.077L581.5,5.308h4.875Z" data-name="Path 279" transform="translate(-532.456)" /></svg>
              </div>
              <div className="card-content two-step">
                <h3>JAVASCRIPT</h3>
                <div class="content first">
                  <span class="header">Experience</span>
                  <span class="delimiter">: </span>
                  <span class="value">10 Years</span>
                </div>
                <div class="content second">
                  <span class="header">Projects Completed</span>
                  <span class="delimiter">: </span>
                  <span class="value">10</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${animateClass("fadeInTop", 7)}`}>
            <div className="card">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 100 130.589"><path fill="#0868AC" d="M9.625 32.181c-11.029 15.851-9.656 36.476-1.231 53.32.2.404.41.801.617 1.198l.394.759.246.437.439.786c.262.461.53.92.804 1.379l.459.756c.304.491.615.976.933 1.46l.398.614c.439.655.888 1.309 1.352 1.951l.039.05.228.308c.401.553.814 1.099 1.232 1.639l.464.59c.373.469.752.935 1.138 1.399l.435.52c.518.61 1.047 1.217 1.586 1.812l.033.033.061.068c.527.575 1.066 1.137 1.612 1.699l.517.521c.423.426.853.845 1.287 1.262l.527.5c.58.547 1.166 1.083 1.764 1.607l.028.022.307.262c.527.456 1.063.909 1.603 1.353l.664.529c.441.354.887.702 1.336 1.044l.714.543c.496.365.995.724 1.499 1.075l.546.387.15.107c.478.329.967.646 1.456.963l.63.42c.75.474 1.51.943 2.279 1.396l.63.355c.565.326 1.134.646 1.71.959.312.168.632.327.946.488.407.213.811.429 1.225.636l.283.137.501.242c.641.306 1.287.607 1.94.897l.41.184c.748.327 1.502.641 2.263.941l.551.217c.704.271 1.418.539 2.135.791l.268.093c.787.275 1.581.53 2.381.779l.575.172c.814.245 1.619.538 2.458.693 53.339 9.727 68.833-32.053 68.833-32.053-13.013 16.953-36.111 21.425-57.996 16.446-.829-.187-1.633-.446-2.442-.685l-.609-.185c-.79-.242-1.573-.497-2.352-.765l-.323-.117c-.698-.245-1.387-.504-2.074-.769l-.582-.229c-.752-.297-1.5-.607-2.239-.931l-.447-.198c-.635-.288-1.263-.578-1.889-.879l-.546-.262c-.491-.239-.977-.493-1.461-.743-.324-.171-.654-.332-.975-.51-.592-.317-1.172-.646-1.751-.982l-.591-.33c-.769-.452-1.528-.921-2.28-1.397l-.615-.41c-.545-.351-1.088-.709-1.623-1.079l-.522-.367c-.516-.365-1.027-.734-1.534-1.109l-.679-.514c-.465-.355-.927-.713-1.384-1.082l-.617-.495c-.582-.479-1.156-.959-1.724-1.453l-.189-.159c-.614-.539-1.216-1.092-1.812-1.647l-.511-.491c-.441-.42-.875-.843-1.302-1.277l-.51-.509c-.543-.556-1.076-1.119-1.598-1.69l-.079-.084c-.552-.604-1.092-1.221-1.621-1.844l-.424-.504c-.394-.475-.785-.956-1.167-1.442l-.427-.532c-.459-.596-.908-1.189-1.347-1.794-12.15-16.574-16.516-39.432-6.805-58.204M43.862 18.825c-7.977 11.478-7.543 26.844-1.321 38.983 1.043 2.035 2.216 4.01 3.528 5.889 1.195 1.713 2.52 3.751 4.106 5.127.575.633 1.176 1.251 1.79 1.858l.472.465c.596.578 1.201 1.146 1.828 1.698l.074.064.018.018c.693.608 1.408 1.191 2.135 1.767l.485.378c.729.559 1.472 1.107 2.233 1.631l.065.049c.336.232.678.448 1.019.672l.483.319c.544.349 1.095.689 1.655 1.015l.235.136c.483.278.972.552 1.463.818l.521.271c.339.177.678.358 1.023.53l.155.07c.703.346 1.412.68 2.136.995l.472.194c.579.246 1.164.486 1.75.71l.75.275c.533.198 1.068.378 1.607.559l.727.233c.767.238 1.525.539 2.324.672 41.183 6.823 50.691-24.886 50.691-24.886-8.57 12.343-25.168 18.233-42.879 13.635-.787-.207-1.562-.431-2.333-.674l-.701-.227c-.548-.177-1.092-.365-1.631-.562l-.736-.274c-.592-.228-1.176-.462-1.756-.708l-.473-.2c-.727-.316-1.443-.65-2.148-.999-.363-.177-.72-.364-1.078-.548l-.622-.32c-.458-.248-.914-.506-1.363-.77l-.326-.185c-.558-.325-1.107-.661-1.651-1.008l-.498-.332c-.359-.232-.717-.469-1.069-.707-.759-.524-1.498-1.072-2.226-1.628l-.501-.395c-7.752-6.12-13.898-14.486-16.819-23.971-3.062-9.836-2.402-20.878 2.903-29.84M72.657 8.847c-4.702 6.92-5.164 15.514-1.901 23.156 3.441 8.113 10.491 14.476 18.72 17.495.339.125.679.237 1.022.354l.451.143c.485.152.966.329 1.467.424 22.74 4.394 28.908-11.669 30.549-14.034-5.402 7.779-14.482 9.646-25.623 6.942-.88-.213-1.847-.531-2.695-.832-1.088-.388-2.16-.83-3.201-1.329-1.978-.951-3.864-2.104-5.612-3.424-9.969-7.565-16.162-21.994-9.657-33.745" /></svg>
              </div>
              <div className="card-content two-step">
                <h3>JQUERY</h3>
                <div class="content first">
                  <span class="header">Experience</span>
                  <span class="delimiter">: </span>
                  <span class="value">5 Years</span>
                </div>
                <div class="content second">
                  <span class="header">Projects Completed</span>
                  <span class="delimiter">: </span>
                  <span class="value">2</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${animateClass("fadeInTop", 8)}`}>
            <div className="card">
              <div className="card-icon">
                <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100" height="80"><path fill="#007acc" d="M0 200V0h400v400H0" /><path fill="#fff" d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z" /></svg>
              </div>
              <div className="card-content two-step">
                <h3>TYPESCRIPT</h3>
                <div class="content first">
                  <span class="header">Experience</span>
                  <span class="delimiter">: </span>
                  <span class="value">7 Years</span>
                </div>
                <div class="content second">
                  <span class="header">Projects Completed</span>
                  <span class="delimiter">: </span>
                  <span class="value">7</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${animateClass("fadeInTop", 9)}`}>
            <div className="card">
              <div className="card-icon">
                <svg viewBox="12.100000000000001 8.4 262.79999999999995 272.2" xmlns="http://www.w3.org/2000/svg" width="2376" height="2500"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="53.496" x2="177.932" y1="247.701" y2="115.323"><stop offset="0" stop-color="#e01d84" /><stop offset=".401" stop-color="#df1d85" /><stop offset=".77" stop-color="#932c87" /><stop offset="1" stop-color="#5d2f88" /></linearGradient><radialGradient id="b" cx="190.456" cy="80.2" gradientTransform="matrix(1 .00239 -.002 .8362 .16 12.685)" gradientUnits="userSpaceOnUse" r="121.582"><stop offset="0" stop-color="#e01d84" /><stop offset=".139" stop-color="#de1e85" /><stop offset=".285" stop-color="#d62085" /><stop offset=".434" stop-color="#c92386" /><stop offset=".586" stop-color="#b72786" /><stop offset=".739" stop-color="#9d2b87" /><stop offset=".891" stop-color="#7c2e88" /><stop offset="1" stop-color="#5d2f88" /></radialGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="83.212" x2="137.371" y1="62.336" y2="62.336"><stop offset="0" stop-color="#e01d84" /><stop offset=".238" stop-color="#da1e85" /><stop offset=".658" stop-color="#c72085" /><stop offset=".999" stop-color="#b52284" /></linearGradient><path d="M29.6 175.3c-5.2-16.2-6.7-33.3-3.7-50.9 1.3-7.3 3.3-14.3 5.5-21.4 0 0 13.8-45.3 60.5-66 0 0 16.1-8.5 40.3-9.1 0 0-3.3-3.2-5.4-4.6-11.4-7.6-28.4-10.1-38.7.6-3.1 3.2-5.7 6.7-8.6 9.9-3.3 3.6-7.3 6.6-11.9 8.3-4 1.5-8 1.2-12.1 1.9-4.2.7-8.5 2.2-11.9 4.9-3.7 3-5.2 7-5.6 11.6-.4 3.6-.3 7.3-.5 10.9C37 82 33.6 85 26 90.9c-3.2 2.4-5.9 5.6-7.9 9-6 10.6 3.6 21.6 4.1 32.3.1 2.2-.1 4.4-.9 6.5-.8 2.3-2.4 3.8-3.7 5.7-1.8 2.5-3 5.5-2.5 8.6s2.1 6 3.6 8.7c2.9 4.8 6.5 9.1 10.3 13.2.2 0 .4.2.6.4" fill="#e32286" /><path d="M220.4 213.7c23-10 32.8-27.3 32.8-27.3 21.5-29.3 14.2-60.2 14.2-60.2-13.7 29.8-26.2 38-26.2 38 33.7-51.3.2-82.3.2-82.3 13.7 29.2-4.5 64.8-4.5 64.8-15.3 32.2-37 43.7-37 43.7 24.2 4.5 42-11.8 42-11.8-34.7 37.5-72.3 35.7-72.3 35.7 15.8 17.7 39.5 16.2 39.5 16.2-31 7.3-60.1-3-84-22.9-4.5-3.7-8.8-7.7-12.8-12 0 0-3.6-3.8-4.3-4.8l-.1-.1c-.5 18.5 18.8 35.7 18.8 35.7-24.2-10-35.3-31.7-35.3-31.7s-16.3-27.8-4.5-59.5 47.5-38.5 47.5-38.5c29.5 14.3 54.5 18.8 54.5 18.8 52.7 8.8 49.7-17 49.7-17 .5-22.2-33-45.8-33-45.8C145.9 8.4 91.9 37 91.9 37c-46.7 20.7-60.5 66-60.5 66-2.2 7.1-4.2 14.1-5.5 21.4-5.1 29.7 2.6 57.8 19.3 82.8 26 38.8 68.2 52.2 68.2 52.2 62.5 21.2 105.2-10 105.2-10 39.3-27 47.2-58.2 47.2-58.2-31.7 24.8-45.4 22.5-45.4 22.5zM171.6 67.8c3 0 5.4 2.4 5.4 5.4s-2.4 5.4-5.4 5.4-5.4-2.4-5.4-5.4 2.4-5.4 5.4-5.4z" fill="url(#a)" /><path d="M238.5 98.4c.5-22.2-33-45.8-33-45.8C145.8 8.4 91.8 37 91.8 37c-46.7 20.7-60.5 66-60.5 66-2.7 7.7-5.1 19.5-5.1 19.5-2.9 14.8-1.6 28.5-1.6 28.5 1.2 13.1 4.1 21.9 4.1 21.9 3 9.4 4.4 12.3 4.4 12.3-.1-.3-.6-2.5-.6-2.5s-4.2-20.2-.3-39.6c0 0 3.4-20.2 17.2-35.8 0 0 22.4-31.9 64.1-19.4 0 0 9 3.2 12.1 4.8 3.1 1.5 8.5 3.8 8.5 3.8 29.5 14.3 54.5 18.8 54.5 18.8 52.9 8.9 49.9-16.9 49.9-16.9zm-66.9-19.7c-3 0-5.4-2.4-5.4-5.4s2.4-5.4 5.4-5.4 5.4 2.4 5.4 5.4-2.4 5.4-5.4 5.4z" fill="url(#b)" /><path d="M137.4 58.2l-34.1-10.6c-.2 0-1.2-.5-3 0 0 0-20.1 5.1-16.6 16.1 0 0 2.1 6.9 7.8 13.6l37.5-1.8z" fill="url(#c)" /></svg>
              </div>
              <div className="card-content two-step">
                <h3>RXJS</h3>
                <div class="content first">
                  <span class="header">Experience</span>
                  <span class="delimiter">: </span>
                  <span class="value">4 Years</span>
                </div>
                <div class="content second">
                  <span class="header">Projects Completed</span>
                  <span class="delimiter">: </span>
                  <span class="value">5</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${animateClass("fadeInTop", 10)}`}>
            <div className="card">
              <div className="card-icon">
                <svg width="100" height="80" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M0 222.991C0 241.223 14.779 256 33.009 256H222.99C241.223 256 256 241.221 256 222.991V33.01C256 14.777 241.221 0 222.991 0H33.01C14.777 0 0 14.779 0 33.009V222.99z" fill="#563D7C" /><path d="M106.158 113.238V76.985h31.911c3.04 0 5.97.253 8.792.76 2.822.506 5.319 1.41 7.49 2.713 2.17 1.303 3.907 3.112 5.21 5.427 1.302 2.316 1.954 5.283 1.954 8.9 0 6.513-1.954 11.217-5.862 14.111-3.907 2.895-8.9 4.342-14.979 4.342h-34.516zM72.075 50.5v155h75.112c6.947 0 13.713-.868 20.298-2.605 6.585-1.737 12.446-4.414 17.584-8.032 5.137-3.618 9.226-8.286 12.265-14.002 3.04-5.717 4.559-12.483 4.559-20.298 0-9.697-2.352-17.982-7.055-24.856-4.704-6.875-11.832-11.687-21.384-14.437 6.947-3.328 12.194-7.598 15.74-12.808 3.545-5.21 5.318-11.722 5.318-19.538 0-7.236-1.194-13.314-3.582-18.235-2.388-4.92-5.753-8.864-10.095-11.831-4.341-2.967-9.551-5.102-15.63-6.404-6.078-1.303-12.808-1.954-20.189-1.954H72.075zm34.083 128.515v-42.549h37.121c7.381 0 13.315 1.7 17.802 5.102 4.486 3.401 6.73 9.081 6.73 17.041 0 4.053-.688 7.381-2.063 9.986-1.375 2.605-3.22 4.668-5.536 6.187-2.315 1.52-4.993 2.605-8.032 3.257-3.04.65-6.223.976-9.552.976h-36.47z" fill="#FFF" /></svg>
              </div>
              <div className="card-content two-step">
                <h3>BootStrap</h3>
                <div class="content first">
                  <span class="header">Experience</span>
                  <span class="delimiter">: </span>
                  <span class="value">6 Years</span>
                </div>
                <div class="content second">
                  <span class="header">Projects Completed</span>
                  <span class="delimiter">: </span>
                  <span class="value">4</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${animateClass("fadeInTop", 1)}`}>
            <div className="card">
              <div className="card-icon">
                <span
                  className="iconify"
                  data-icon="logos:angular-icon"
                  data-inline="false"
                ></span>
              </div>
              <div class="card-content">
                <h3>Angular</h3>
                <div class="content">
                  <span class="header">AngularJS Experience</span>
                  <span class="delimiter">: </span>
                  <span class="value">3 Years</span>
                </div>
                <div class="content">
                  <span class="header">Angular Experience</span>
                  <span class="delimiter">: </span>
                  <span class="value">5 Years</span>
                </div>
                <div class="content">
                  <span class="header">Projects Completed</span>
                  <span class="delimiter">: </span>
                  <span class="value">7</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${animateClass("fadeInTop", 2)}`}>
            <div className="card">
              <div className="card-icon">
                <span
                  className="iconify"
                  data-icon="logos:react"
                  data-inline="false"
                ></span>
              </div>
              <div className="card-content two-step">
                <h3>REACT</h3>
                <div class="content first">
                  <span class="header">Experience</span>
                  <span class="delimiter">: </span>
                  <span class="value">1.5 Years</span>
                </div>
                <div class="content second">
                  <span class="header">Projects Completed</span>
                  <span class="delimiter">: </span>
                  <span class="value">2</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${animateClass("fadeInTop", 3)}`}>
            <div className="card">
              <div className="card-icon">
                <span
                  className="iconify"
                  data-icon="logos:nodejs"
                  data-inline="false"
                ></span>
              </div>
              <div className="card-content two-step">
                <h3>Node</h3>
                <div class="content first">
                  <span class="header">Experience</span>
                  <span class="delimiter">: </span>
                  <span class="value">2 Years</span>
                </div>
                <div class="content second">
                  <span class="header">Projects Completed</span>
                  <span class="delimiter">: </span>
                  <span class="value">2</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${animateClass("fadeInTop", 4)}`}>
            <div className="card">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="80" viewBox="221.807 89.47 440 621.061" enableBackground="new 221.807 89.47 440 621.061"><filter id="a" width="150%" height="150%" x="-5%" y="-5%"><feFlood floodColor="#000" result="floodFill" floodOpacity=".5" /><feComposite in="floodFill" in2="SourceAlpha" operator="in" result="coloredAlpha" /><feGaussianBlur in="coloredAlpha" result="blur" stdDeviation="8" /><feComposite in="blur" in2="SourceGraphic" operator="out" result="maskedOffsetBlur" /><feMerge><feMergeNode in="maskedOffsetBlur" /><feMergeNode in="SourceGraphic" /></feMerge></filter><g filter="url(#a)"><path fill="#e44d26" d="M261.849 660.647l-40.042-449.125h440l-40.086 449.054-180.184 49.954z" /><path fill="#f16529" d="M441.807 672.348l145.596-40.367 34.258-383.735H441.807z" /><path fill="#ebebeb" d="M441.807 414.82h-72.888l-5.035-56.406h77.923V303.33H303.683l1.32 14.778 13.538 151.794h123.266zM441.807 557.876l-.242.066-61.346-16.566-3.922-43.93h-55.294l7.718 86.489 112.834 31.323.252-.071z" /><path d="M262.745 89.47h27.992v27.656h25.606V89.47h27.993v83.75h-27.993v-28.044h-25.606v28.044h-27.99l-.002-83.75zM381.149 117.244h-24.642V89.47H433.8v27.774h-24.654v55.976H381.15v-55.976h-.001zM446.065 89.47h29.19l17.955 29.428 17.938-29.428h29.2v83.75h-27.882v-41.512l-19.259 29.778h-.481l-19.272-29.778v41.512h-27.39V89.47zM554.277 89.47h28v56.068h39.368v27.682h-67.368V89.47z" /><path fill="#fff" d="M441.617 414.82v55.082h67.83l-6.395 71.44-61.435 16.58v57.307l112.924-31.294.826-9.309 12.946-145.014 1.344-14.792h-14.842zM441.617 303.33v55.084H574.67l1.103-12.382 2.51-27.924 1.318-14.778z" /></g></svg>
              </div>
              <div className="card-content two-step">
                <h3>HTML5</h3>
                <div class="content first">
                  <span class="header">Experience</span>
                  <span class="delimiter">: </span>
                  <span class="value">10 Years</span>
                </div>
                <div class="content second">
                  <span class="header">Projects Completed</span>
                  <span class="delimiter">: </span>
                  <span class="value">10</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${animateClass("fadeInTop", 5)}`}>
            <div className="card">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="80" viewBox="0 0 538.584 538.583"><path d="M0 0h538.584v538.583H0V0z" fill="none" /><path d="M405.5 467.454L269.29 504.13l-136.212-36.676-31.432-340.525h335.29L405.5 467.454z" fill="#2062af" /><path d="M269.289 154.511v320.367l.308.084 110.229-29.682 25.443-290.769h-135.98z" fill="#3c9cd7" /><path d="M191.985 76.899V56.631h29.571V34.453h-51.749v62.684h51.749V76.899h-29.571zm82.766-20.268h20.674V34.453h-51.754v22.178c6.924 6.924 10.535 10.238 20.549 20.252-5.854 0-20.549.021-20.549.02v20.234h51.754V76.899l-20.674-20.268zm73.352 0h20.673V34.453H317.02v22.178c6.924 6.924 10.537 10.238 20.551 20.252-5.852 0-20.551.021-20.551.02v20.234h51.757V76.899l-20.674-20.268z" /><path d="M269.168 239.656l-97.49 40.602 3.233 40.199 94.257-40.301 100.265-42.868 4.157-41.122-104.422 43.49z" fill="#fff" /><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="-825.508" y1="1338.301" x2="-825.508" y2="1419.102" gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)"><stop offset=".387" stopColor="#d1d3d4" stopOpacity="0" /><stop offset="1" stopColor="#d1d3d4" /></linearGradient><path d="M171.677 280.258l3.233 40.199 94.257-40.301v-40.5l-97.49 40.602z" fill="url(#a)" /><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="-724.552" y1="1378.602" x2="-724.552" y2="1462.591" gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)"><stop offset=".387" stopColor="#d1d3d4" stopOpacity="0" /><stop offset="1" stopColor="#d1d3d4" /></linearGradient><path d="M373.59 196.167l-104.422 43.489v40.5l100.265-42.868 4.157-41.121z" fill="url(#b)" /><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="-874.103" y1="1302.263" x2="-680.039" y2="1302.263" gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)"><stop offset="0" stopColor="#e8e7e5" /><stop offset="1" stopColor="#fff" /></linearGradient><path d="M171.827 280.258l3.234 40.199 144.625.461-3.235 53.598-47.59 13.398-45.748-11.551-2.772-33.268h-42.508l5.545 64.225 85.945 25.412 85.479-24.951 11.09-127.523H171.827z" fill="url(#c)" /><path d="M269.168 280.258h-97.49l3.233 40.199 94.257.301v-40.5zm0 107.528l-.462.129-45.742-11.551-2.772-33.268h-42.507l5.544 64.225 85.939 25.412v-44.947z" opacity=".05" /><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="-883.032" y1="1442.031" x2="-672.341" y2="1442.031" gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)"><stop offset="0" stopColor="#e8e7e5" /><stop offset="1" stopColor="#fff" /></linearGradient><path d="M162.898 196.167H373.59l-4.157 41.122H167.98l-5.082-41.122z" fill="url(#d)" /><path d="M269.168 196.167h-106.27l5.082 41.122h101.188v-41.122z" opacity=".05" /></svg>              </div>
              <div className="card-content two-step">
                <h3>CSS3</h3>
                <div class="content first">
                  <span class="header">Experience</span>
                  <span class="delimiter">: </span>
                  <span class="value">10 Years</span>
                </div>
                <div class="content second">
                  <span class="header">Projects Completed</span>
                  <span class="delimiter">: </span>
                  <span class="value">10</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${animateClass("fadeInTop", 6)}`}>
            <div className="card">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="80" viewBox="0 0 78.562 110.589"><path fill="#e6a329" d="M78.562,489.9H0l7.365,79.867,31.912,9.051,31.912-9.051Z" data-name="Path 275" transform="translate(0 -468.229)" /><path fill="#f1bf22" d="M887.9,637v75.643l25.856-7.325L920.046,637Z" data-name="Path 276" transform="translate(-848.623 -608.822)" /><path fill="#fff" d="M434.124,858.5H394.369L391.6,888.4l.057-.186h33.774l-1.1,12.651-10.776,3.1-10.935-3.15-.655-7.657h-9.926l1.416,15.3,20.1,5.706,20.109-5.706,2.769-30.032H400.589l.46-10.006h24.869l.372,5.733H436.3Z" data-name="Path 277" transform="translate(-374.277 -820.524)" /><path fill="#ebebeb" d="M413.563,858.5H394.369L391.6,888.4l.057-.186h21.905v-9.754H401.987l.46-10.006h11.116Zm-11.576,34.663h-9.949l1.416,15.292,20.1,5.7V903.979l-10.935-3.158Z" data-name="Path 278" transform="translate(-374.277 -820.524)" /><path fill="#231f20" d="M564.094,9.891H557.1v5.021h12V0h-5ZM586.371.08H574.179V5.3c1.628,1.628,2.477,2.411,4.875,4.769h-4.875v4.76h12.191V10.077L581.5,5.308h4.875Z" data-name="Path 279" transform="translate(-532.456)" /></svg>
              </div>
              <div className="card-content two-step">
                <h3>JAVASCRIPT</h3>
                <div class="content first">
                  <span class="header">Experience</span>
                  <span class="delimiter">: </span>
                  <span class="value">10 Years</span>
                </div>
                <div class="content second">
                  <span class="header">Projects Completed</span>
                  <span class="delimiter">: </span>
                  <span class="value">10</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${animateClass("fadeInTop", 7)}`}>
            <div className="card">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 100 130.589"><path fill="#0868AC" d="M9.625 32.181c-11.029 15.851-9.656 36.476-1.231 53.32.2.404.41.801.617 1.198l.394.759.246.437.439.786c.262.461.53.92.804 1.379l.459.756c.304.491.615.976.933 1.46l.398.614c.439.655.888 1.309 1.352 1.951l.039.05.228.308c.401.553.814 1.099 1.232 1.639l.464.59c.373.469.752.935 1.138 1.399l.435.52c.518.61 1.047 1.217 1.586 1.812l.033.033.061.068c.527.575 1.066 1.137 1.612 1.699l.517.521c.423.426.853.845 1.287 1.262l.527.5c.58.547 1.166 1.083 1.764 1.607l.028.022.307.262c.527.456 1.063.909 1.603 1.353l.664.529c.441.354.887.702 1.336 1.044l.714.543c.496.365.995.724 1.499 1.075l.546.387.15.107c.478.329.967.646 1.456.963l.63.42c.75.474 1.51.943 2.279 1.396l.63.355c.565.326 1.134.646 1.71.959.312.168.632.327.946.488.407.213.811.429 1.225.636l.283.137.501.242c.641.306 1.287.607 1.94.897l.41.184c.748.327 1.502.641 2.263.941l.551.217c.704.271 1.418.539 2.135.791l.268.093c.787.275 1.581.53 2.381.779l.575.172c.814.245 1.619.538 2.458.693 53.339 9.727 68.833-32.053 68.833-32.053-13.013 16.953-36.111 21.425-57.996 16.446-.829-.187-1.633-.446-2.442-.685l-.609-.185c-.79-.242-1.573-.497-2.352-.765l-.323-.117c-.698-.245-1.387-.504-2.074-.769l-.582-.229c-.752-.297-1.5-.607-2.239-.931l-.447-.198c-.635-.288-1.263-.578-1.889-.879l-.546-.262c-.491-.239-.977-.493-1.461-.743-.324-.171-.654-.332-.975-.51-.592-.317-1.172-.646-1.751-.982l-.591-.33c-.769-.452-1.528-.921-2.28-1.397l-.615-.41c-.545-.351-1.088-.709-1.623-1.079l-.522-.367c-.516-.365-1.027-.734-1.534-1.109l-.679-.514c-.465-.355-.927-.713-1.384-1.082l-.617-.495c-.582-.479-1.156-.959-1.724-1.453l-.189-.159c-.614-.539-1.216-1.092-1.812-1.647l-.511-.491c-.441-.42-.875-.843-1.302-1.277l-.51-.509c-.543-.556-1.076-1.119-1.598-1.69l-.079-.084c-.552-.604-1.092-1.221-1.621-1.844l-.424-.504c-.394-.475-.785-.956-1.167-1.442l-.427-.532c-.459-.596-.908-1.189-1.347-1.794-12.15-16.574-16.516-39.432-6.805-58.204M43.862 18.825c-7.977 11.478-7.543 26.844-1.321 38.983 1.043 2.035 2.216 4.01 3.528 5.889 1.195 1.713 2.52 3.751 4.106 5.127.575.633 1.176 1.251 1.79 1.858l.472.465c.596.578 1.201 1.146 1.828 1.698l.074.064.018.018c.693.608 1.408 1.191 2.135 1.767l.485.378c.729.559 1.472 1.107 2.233 1.631l.065.049c.336.232.678.448 1.019.672l.483.319c.544.349 1.095.689 1.655 1.015l.235.136c.483.278.972.552 1.463.818l.521.271c.339.177.678.358 1.023.53l.155.07c.703.346 1.412.68 2.136.995l.472.194c.579.246 1.164.486 1.75.71l.75.275c.533.198 1.068.378 1.607.559l.727.233c.767.238 1.525.539 2.324.672 41.183 6.823 50.691-24.886 50.691-24.886-8.57 12.343-25.168 18.233-42.879 13.635-.787-.207-1.562-.431-2.333-.674l-.701-.227c-.548-.177-1.092-.365-1.631-.562l-.736-.274c-.592-.228-1.176-.462-1.756-.708l-.473-.2c-.727-.316-1.443-.65-2.148-.999-.363-.177-.72-.364-1.078-.548l-.622-.32c-.458-.248-.914-.506-1.363-.77l-.326-.185c-.558-.325-1.107-.661-1.651-1.008l-.498-.332c-.359-.232-.717-.469-1.069-.707-.759-.524-1.498-1.072-2.226-1.628l-.501-.395c-7.752-6.12-13.898-14.486-16.819-23.971-3.062-9.836-2.402-20.878 2.903-29.84M72.657 8.847c-4.702 6.92-5.164 15.514-1.901 23.156 3.441 8.113 10.491 14.476 18.72 17.495.339.125.679.237 1.022.354l.451.143c.485.152.966.329 1.467.424 22.74 4.394 28.908-11.669 30.549-14.034-5.402 7.779-14.482 9.646-25.623 6.942-.88-.213-1.847-.531-2.695-.832-1.088-.388-2.16-.83-3.201-1.329-1.978-.951-3.864-2.104-5.612-3.424-9.969-7.565-16.162-21.994-9.657-33.745" /></svg>
              </div>
              <div className="card-content two-step">
                <h3>JQUERY</h3>
                <div class="content first">
                  <span class="header">Experience</span>
                  <span class="delimiter">: </span>
                  <span class="value">5 Years</span>
                </div>
                <div class="content second">
                  <span class="header">Projects Completed</span>
                  <span class="delimiter">: </span>
                  <span class="value">2</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${animateClass("fadeInTop", 8)}`}>
            <div className="card">
              <div className="card-icon">
                <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" width="100" height="80"><path fill="#007acc" d="M0 200V0h400v400H0" /><path fill="#fff" d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z" /></svg>
              </div>
              <div className="card-content two-step">
                <h3>TYPESCRIPT</h3>
                <div class="content first">
                  <span class="header">Experience</span>
                  <span class="delimiter">: </span>
                  <span class="value">7 Years</span>
                </div>
                <div class="content second">
                  <span class="header">Projects Completed</span>
                  <span class="delimiter">: </span>
                  <span class="value">7</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${animateClass("fadeInTop", 9)}`}>
            <div className="card">
              <div className="card-icon">
                <svg viewBox="12.100000000000001 8.4 262.79999999999995 272.2" xmlns="http://www.w3.org/2000/svg" width="100" height="80"><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="53.496" x2="177.932" y1="247.701" y2="115.323"><stop offset="0" stop-color="#e01d84" /><stop offset=".401" stop-color="#df1d85" /><stop offset=".77" stop-color="#932c87" /><stop offset="1" stop-color="#5d2f88" /></linearGradient><radialGradient id="b" cx="190.456" cy="80.2" gradientTransform="matrix(1 .00239 -.002 .8362 .16 12.685)" gradientUnits="userSpaceOnUse" r="121.582"><stop offset="0" stop-color="#e01d84" /><stop offset=".139" stop-color="#de1e85" /><stop offset=".285" stop-color="#d62085" /><stop offset=".434" stop-color="#c92386" /><stop offset=".586" stop-color="#b72786" /><stop offset=".739" stop-color="#9d2b87" /><stop offset=".891" stop-color="#7c2e88" /><stop offset="1" stop-color="#5d2f88" /></radialGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="83.212" x2="137.371" y1="62.336" y2="62.336"><stop offset="0" stop-color="#e01d84" /><stop offset=".238" stop-color="#da1e85" /><stop offset=".658" stop-color="#c72085" /><stop offset=".999" stop-color="#b52284" /></linearGradient><path d="M29.6 175.3c-5.2-16.2-6.7-33.3-3.7-50.9 1.3-7.3 3.3-14.3 5.5-21.4 0 0 13.8-45.3 60.5-66 0 0 16.1-8.5 40.3-9.1 0 0-3.3-3.2-5.4-4.6-11.4-7.6-28.4-10.1-38.7.6-3.1 3.2-5.7 6.7-8.6 9.9-3.3 3.6-7.3 6.6-11.9 8.3-4 1.5-8 1.2-12.1 1.9-4.2.7-8.5 2.2-11.9 4.9-3.7 3-5.2 7-5.6 11.6-.4 3.6-.3 7.3-.5 10.9C37 82 33.6 85 26 90.9c-3.2 2.4-5.9 5.6-7.9 9-6 10.6 3.6 21.6 4.1 32.3.1 2.2-.1 4.4-.9 6.5-.8 2.3-2.4 3.8-3.7 5.7-1.8 2.5-3 5.5-2.5 8.6s2.1 6 3.6 8.7c2.9 4.8 6.5 9.1 10.3 13.2.2 0 .4.2.6.4" fill="#e32286" /><path d="M220.4 213.7c23-10 32.8-27.3 32.8-27.3 21.5-29.3 14.2-60.2 14.2-60.2-13.7 29.8-26.2 38-26.2 38 33.7-51.3.2-82.3.2-82.3 13.7 29.2-4.5 64.8-4.5 64.8-15.3 32.2-37 43.7-37 43.7 24.2 4.5 42-11.8 42-11.8-34.7 37.5-72.3 35.7-72.3 35.7 15.8 17.7 39.5 16.2 39.5 16.2-31 7.3-60.1-3-84-22.9-4.5-3.7-8.8-7.7-12.8-12 0 0-3.6-3.8-4.3-4.8l-.1-.1c-.5 18.5 18.8 35.7 18.8 35.7-24.2-10-35.3-31.7-35.3-31.7s-16.3-27.8-4.5-59.5 47.5-38.5 47.5-38.5c29.5 14.3 54.5 18.8 54.5 18.8 52.7 8.8 49.7-17 49.7-17 .5-22.2-33-45.8-33-45.8C145.9 8.4 91.9 37 91.9 37c-46.7 20.7-60.5 66-60.5 66-2.2 7.1-4.2 14.1-5.5 21.4-5.1 29.7 2.6 57.8 19.3 82.8 26 38.8 68.2 52.2 68.2 52.2 62.5 21.2 105.2-10 105.2-10 39.3-27 47.2-58.2 47.2-58.2-31.7 24.8-45.4 22.5-45.4 22.5zM171.6 67.8c3 0 5.4 2.4 5.4 5.4s-2.4 5.4-5.4 5.4-5.4-2.4-5.4-5.4 2.4-5.4 5.4-5.4z" fill="url(#a)" /><path d="M238.5 98.4c.5-22.2-33-45.8-33-45.8C145.8 8.4 91.8 37 91.8 37c-46.7 20.7-60.5 66-60.5 66-2.7 7.7-5.1 19.5-5.1 19.5-2.9 14.8-1.6 28.5-1.6 28.5 1.2 13.1 4.1 21.9 4.1 21.9 3 9.4 4.4 12.3 4.4 12.3-.1-.3-.6-2.5-.6-2.5s-4.2-20.2-.3-39.6c0 0 3.4-20.2 17.2-35.8 0 0 22.4-31.9 64.1-19.4 0 0 9 3.2 12.1 4.8 3.1 1.5 8.5 3.8 8.5 3.8 29.5 14.3 54.5 18.8 54.5 18.8 52.9 8.9 49.9-16.9 49.9-16.9zm-66.9-19.7c-3 0-5.4-2.4-5.4-5.4s2.4-5.4 5.4-5.4 5.4 2.4 5.4 5.4-2.4 5.4-5.4 5.4z" fill="url(#b)" /><path d="M137.4 58.2l-34.1-10.6c-.2 0-1.2-.5-3 0 0 0-20.1 5.1-16.6 16.1 0 0 2.1 6.9 7.8 13.6l37.5-1.8z" fill="url(#c)" /></svg>
              </div>
              <div className="card-content two-step">
                <h3>RXJS</h3>
                <div class="content first">
                  <span class="header">Experience</span>
                  <span class="delimiter">: </span>
                  <span class="value">4 Years</span>
                </div>
                <div class="content second">
                  <span class="header">Projects Completed</span>
                  <span class="delimiter">: </span>
                  <span class="value">5</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`${animateClass("fadeInTop", 10)}`}>
            <div className="card">
              <div className="card-icon">
                <svg width="100" height="80" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M0 222.991C0 241.223 14.779 256 33.009 256H222.99C241.223 256 256 241.221 256 222.991V33.01C256 14.777 241.221 0 222.991 0H33.01C14.777 0 0 14.779 0 33.009V222.99z" fill="#563D7C" /><path d="M106.158 113.238V76.985h31.911c3.04 0 5.97.253 8.792.76 2.822.506 5.319 1.41 7.49 2.713 2.17 1.303 3.907 3.112 5.21 5.427 1.302 2.316 1.954 5.283 1.954 8.9 0 6.513-1.954 11.217-5.862 14.111-3.907 2.895-8.9 4.342-14.979 4.342h-34.516zM72.075 50.5v155h75.112c6.947 0 13.713-.868 20.298-2.605 6.585-1.737 12.446-4.414 17.584-8.032 5.137-3.618 9.226-8.286 12.265-14.002 3.04-5.717 4.559-12.483 4.559-20.298 0-9.697-2.352-17.982-7.055-24.856-4.704-6.875-11.832-11.687-21.384-14.437 6.947-3.328 12.194-7.598 15.74-12.808 3.545-5.21 5.318-11.722 5.318-19.538 0-7.236-1.194-13.314-3.582-18.235-2.388-4.92-5.753-8.864-10.095-11.831-4.341-2.967-9.551-5.102-15.63-6.404-6.078-1.303-12.808-1.954-20.189-1.954H72.075zm34.083 128.515v-42.549h37.121c7.381 0 13.315 1.7 17.802 5.102 4.486 3.401 6.73 9.081 6.73 17.041 0 4.053-.688 7.381-2.063 9.986-1.375 2.605-3.22 4.668-5.536 6.187-2.315 1.52-4.993 2.605-8.032 3.257-3.04.65-6.223.976-9.552.976h-36.47z" fill="#FFF" /></svg>
              </div>
              <div className="card-content two-step">
                <h3>BootStrap</h3>
                <div class="content first">
                  <span class="header">Experience</span>
                  <span class="delimiter">: </span>
                  <span class="value">6 Years</span>
                </div>
                <div class="content second">
                  <span class="header">Projects Completed</span>
                  <span class="delimiter">: </span>
                  <span class="value">4</span>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default Services;
