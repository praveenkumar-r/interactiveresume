import React, { useState } from "react";
import "./Contact.scss";
import Map from "../Map/Map";
import { sendMessage } from "../../services/service";

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

const Contact = (props) => {
  const [
    formstate,
    setformState
  ] = useState(initialState);

  const clearState = () => {
    setformState({ ...initialState });
    setformsubmitstate(false);
  };

  const [
    formsubmitstate,
    setformsubmitstate
  ] = useState(false);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setformState(formstate => ({ ...formstate, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formstate);
    clearState();
    // console.log()
    setformsubmitstate(true);
    sendMessage(formstate).then(clearState);
  };


  return (
    <>
      <div className="container">
        <div className="contact-form flex_direction_column">
          <div className="contact-form-block">
            <div className="address-block">
              <h2>Contact Address</h2>
              <div className="address-container">
                <div className="single-contact">
                  <div className="contact-icon">
                    <i className="icon-location-pin"></i>
                  </div>
                  <p>Chennai, India</p>
                </div>
                <div className="single-contact">
                  <div className="contact-icon">
                    <i className="icon-envelope-open"></i>
                  </div>
                  <p>
                    <a target="blank" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=rpk.sharaj@gmail.com">rpk.sharaj@gmail.com</a>
                  </p>
                </div>
                <div className="single-contact">
                  <div className="contact-icon">
                    <i className="icon-phone"></i>
                  </div>
                  <p>
                    <span>+ (91) 97910 52738</span>
                  </p>
                </div>
              </div>
              <Map theme={props.theme} />
            </div>

            <h2>Contact Form</h2>
            <div className={formsubmitstate === true ? "thanks" : "none"}>
              <div className="message">Thanks for the message !!!</div>
            </div>
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-container">
                <div className="form-group-split">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Your Name"
                    onChange={handleInputChange}
                    name="name"
                    value={formstate.name}
                    required
                  ></input>
                </div>
                <div className="form-group-split">
                  <input
                    className="form-control"
                    type="text"
                    onChange={handleInputChange} value={formstate.email} required
                    placeholder="Your Email"
                    name="email"
                    style={{ float: "right" }}
                  ></input>
                </div>
                <div className="form-group">
                  <input
                    id="subject"
                    type="text"
                    onChange={handleInputChange} value={formstate.subject} required
                    placeholder="Subject"
                    name="subject"
                    className="form-control"
                  ></input>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Your Message"
                    name="message"
                    onChange={handleInputChange} value={formstate.message} required
                    style={{ minHeight: "75px" }}
                  ></textarea>
                  <button className="submit btn">Send Message</button>
                </div>
              </div>
            </form>
          </div>
          <div className="map-block">
            <h2>Location</h2>
            <div className="directions-block">
              <div style={{ flex: "0 0 82%" }}>
                <div style={{ fontWeight: "bold" }}>Residential Address</div>
                <span>
                  No:19, Navlar street, Anna Nagar, Pammal, Chennai- 600 075
                </span>
              </div>
              <a
                style={{ marginTop: "20px" }}
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps/dir//12.9777781,80.143506/@12.9767117,80.1411027,17z/data=!4m2!4m1!3e0"
              >
                <i className="icon-directions"></i>
              </a>
              <a
                className="directions"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps/dir//12.9777781,80.143506/@12.9767117,80.1411027,17z/data=!4m2!4m1!3e0"
              >
                Directions
              </a>
            </div>
            <Map />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
