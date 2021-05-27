import React from "react";
import "./Feedback.scss";

const Feedback = () => {

    return (
        <>
            <div className="container">
                <h2 className="section-title">Feedback</h2>
                <div className="feedbackContainer">
                    <div className="feedbackForm">
                        <p>Please give your feedback</p>
                        <div className="form-control-panel mt-15">
                            <input type="text" placeholder="Name" name="name" required="" value="" />
                        </div>
                        <div className="form-control-panel">
                            <textarea className="form-control" placeholder="Your Message" name="message" required=""></textarea>
                        </div>
                        <div className="form-control-panel">
                            <div>Rate my portfolio</div>
                            <div className="rate">
                                <input type="radio" id="rating_star5" name="rating" />
                                <label for="rating_star5" title="text" ></label>
                                <input type="radio" id="rating_star4" name="rating" />
                                <label for="rating_star4" title="text" ></label>
                                <input type="radio" id="rating_star3" name="rating" />
                                <label for="rating_star3" title="text" ></label>
                                <input type="radio" id="rating_star2" name="rating" />
                                <label for="rating_star2" title="text" ></label>
                                <input type="radio" id="rating_star1" name="rating" />
                                <label for="rating_star1" title="text" ></label>
                            </div>
                        </div>
                        <div class="form-control-panel bold">Rate My Skill</div>
                        <div className="form-control-panel ml-20 mt-15">
                            HTML5, CSS3
                            <div className="rate">
                                <input type="radio" id="html_css_star5" name="html_css_" />
                                <label for="html_css_star5" title="text" ></label>
                                <input type="radio" id="html_css_star4" name="html_css" />
                                <label for="html_css_star4" title="text" ></label>
                                <input type="radio" id="html_css_star3" name="html_css" />
                                <label for="html_css_star3" title="text" ></label>
                                <input type="radio" id="html_css_star2" name="html_css" />
                                <label for="html_css_star2" title="text" ></label>
                                <input type="radio" id="html_css_star1" name="html_css" />
                                <label for="html_css_star1" title="text" ></label>
                            </div>
                        </div>
                        <div className="form-control-panel ml-20 mt-15">
                            JAVASCRIPT
                            <div className="rate">
                                <input type="radio" id="javascript_star5" name="javascript" />
                                <label for="javascript_star5" title="text" ></label>
                                <input type="radio" id="javascript_star4" name="javascript" />
                                <label for="javascript_star4" title="text" ></label>
                                <input type="radio" id="javascript_star3" name="javascript" />
                                <label for="javascript_star3" title="text" ></label>
                                <input type="radio" id="javascript_star2" name="javascript" />
                                <label for="javascript_star2" title="text" ></label>
                                <input type="radio" id="javascript_star1" name="javascript" />
                                <label for="javascript_star1" title="text" ></label>
                            </div>
                        </div>
                        <div className="form-control-panel ml-20 mt-15">
                            ANGULAR
                            <div className="rate">
                                <input type="radio" id="angular_star5" name="angular" />
                                <label for="angular_star5" title="text" ></label>
                                <input type="radio" id="angular_star4" name="angular" />
                                <label for="angular_star4" title="text" ></label>
                                <input type="radio" id="angular_star3" name="angular" />
                                <label for="angular_star3" title="text" ></label>
                                <input type="radio" id="angular_star2" name="angular" />
                                <label for="angular_star2" title="text" ></label>
                                <input type="radio" id="angular_star1" name="angular" />
                                <label for="angular_star1" title="text" ></label>
                            </div>
                        </div>
                        <div className="form-control-panel ml-20 mt-15">
                            REACT
                            <div className="rate">
                                <input type="radio" id="react_star5" name="react" />
                                <label for="react_star5" title="text" ></label>
                                <input type="radio" id="react_star4" name="react" />
                                <label for="react_star4" title="text" ></label>
                                <input type="radio" id="react_star3" name="react" />
                                <label for="react_star3" title="text" ></label>
                                <input type="radio" id="react_star2" name="react" />
                                <label for="react_star2" title="text" ></label>
                                <input type="radio" id="react_star1" name="react" />
                                <label for="react_star1" title="text" ></label>
                            </div>
                        </div>
                        <div className="form-control-panel mt-15" style={{ "justifyContent": "center" }}>
                            <button className="submit btn">Submit</button>
                        </div>

                    </div>
                    <div className="feedbackList">
                        <div className="feedbackPanel">
                            <div className="feedback">
                                <div className="owner">Praveen</div>
                                <div className="feedbacktext">Your Website looks awesome Keep up good work</div>
                                <div className="rating">
                                    <div className="portfolio_heaader">
                                        <div className="header">Portfolio Rating : </div>
                                        <div className="rate">
                                            <label for="portfolio_star5" title="text" ></label>
                                            <label for="portfolio_star4" title="text" ></label>
                                            <label for="portfolio_star3" title="text" ></label>
                                            <label for="portfolio_star2" title="text" ></label>
                                            <label for="portfolio_star1" title="text" ></label>
                                        </div>
                                    </div>
                                    <div className="skillrating">
                                        <div className="header">Skill Rating : </div>
                                        <div className="skillholder">
                                            <div class="form-control-panel">HTML5, CSS3
                                                <div className="rate">
                                                    <label for="portfolio_star5" title="text" ></label>
                                                    <label for="portfolio_star4" title="text" ></label>
                                                    <label for="portfolio_star3" title="text" ></label>
                                                    <label for="portfolio_star2" title="text" ></label>
                                                    <label for="portfolio_star1" title="text" ></label>
                                                </div>
                                            </div>
                                            <div class="form-control-panel ml-10">JAVASCRIPT
                                                <div className="rate">
                                                    <label for="portfolio_star5" title="text" ></label>
                                                    <label for="portfolio_star4" title="text" ></label>
                                                    <label for="portfolio_star3" title="text" ></label>
                                                    <label for="portfolio_star2" title="text" ></label>
                                                    <label for="portfolio_star1" title="text" ></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="skillholder">
                                            <div class="form-control-panel">ANGULAR
                                                <div className="rate">
                                                    <label for="portfolio_star5" title="text" ></label>
                                                    <label for="portfolio_star4" title="text" ></label>
                                                    <label for="portfolio_star3" title="text" ></label>
                                                    <label for="portfolio_star2" title="text" ></label>
                                                    <label for="portfolio_star1" title="text" ></label>
                                                </div>
                                            </div>
                                            <div class="form-control-panel ml-10">REACT
                                                <div className="rate">
                                                    <label for="portfolio_star5" title="text" ></label>
                                                    <label for="portfolio_star4" title="text" ></label>
                                                    <label for="portfolio_star3" title="text" ></label>
                                                    <label for="portfolio_star2" title="text" ></label>
                                                    <label for="portfolio_star1" title="text" ></label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="suggestion">
                                        <div className="iconholder">
                                            <i className="icon-like"></i>
                                        2
                                    </div>
                                        <div className="iconholder">
                                            <i className="icon-dislike"></i>
                                        2
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="feedbackFooter">
                            <button class="submit btn ftrbtn">Previous</button>
                            <button class="submit btn ftrbtn">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Feedback;
