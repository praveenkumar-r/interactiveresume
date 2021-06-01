import React, { useEffect, useState } from "react";
import "./Feedback.scss";
import { saveFeedback, getFeedback, updateFeedback } from "../../services/service";
const initialState = {
    name: "",
    email: "",
    message: "",
    portfolio_rating: 0,
    htmlcss3_rating: 0,
    javascript_rating: 0,
    angular_rating: 0,
    react_rating: 0,
    like: 0,
    unlike: 0
};

const Feedback = () => {
    const [
        formstate,
        setformState
    ] = useState(initialState);

    const [
        formsubmitstate,
        setformsubmitstate
    ] = useState(false);

    const [
        formlist,
        setformlist
    ] = useState([]);

    const [
        loading,
        setloading
    ] = useState(false);

    const clearState = () => {
        setformState({ ...initialState });
        setformsubmitstate(false);
        getFeedbacklist();
    };

    const handleInputChange = e => {
        let { name, value, checked } = e.target;
        if (checked)
            value = e.target.id.substr(-1);
        setformState(formstate => ({ ...formstate, [name]: value }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formstate);
        setformsubmitstate(true);
        formstate.like = 0;
        formstate.unlike = 0;
        saveFeedback(formstate).then(clearState);
    };

    useEffect(() => {
        getFeedbacklist();
    }, []);

    function getFeedbacklist() {
        setloading(true);
        getFeedback().then((res) => {
            setformlist(res);
            setloading(false);
        })
    }

    const updateFeedbacklist = (inp, type) => {
        if (type === "like")
            ++inp.like;
        else
            ++inp.unlike;

        console.log(inp);
        setloading(true);
        updateFeedback(inp).then(clearState);
    }

    return (
        <>
            <div className="container">
                <h2 className="section-title">Feedback</h2>
                <div className="feedbackContainer">
                    <div className="feedbackForm">
                        <p>Please give your feedback</p>
                        <div className={formsubmitstate === true ? "thanks" : "none"}>
                            <div className="message">Thanks for the feedback !!!</div>
                        </div>
                        <form id="contactForm" onSubmit={handleSubmit}>
                            <div className="form-control-panel mt-15">
                                <input type="text" placeholder="Name" value={formstate.name} name="name" required onChange={handleInputChange} />
                            </div>
                            <div className="form-control-panel">
                                <input type="text" placeholder="Email" value={formstate.email} name="email" required onChange={handleInputChange} />
                            </div>
                            <div className="form-control-panel">
                                <textarea className="form-control" value={formstate.message} placeholder="Your Message" name="message" required onChange={handleInputChange}></textarea>
                            </div>
                            <div className="form-control-panel">
                                <div>Rate my portfolio</div>
                                <div className="rate">
                                    <input type="radio" id="rating_star5" name="portfolio_rating" checked={formstate.portfolio_rating === "5" ? true : null} onClick={handleInputChange} />
                                    <label for="rating_star5" title="text" ></label>
                                    <input type="radio" id="rating_star4" name="portfolio_rating" checked={formstate.portfolio_rating === "4" ? true : null} onClick={handleInputChange} />
                                    <label for="rating_star4" title="text" ></label>
                                    <input type="radio" id="rating_star3" name="portfolio_rating" checked={formstate.portfolio_rating === "3" ? true : null} onClick={handleInputChange} />
                                    <label for="rating_star3" title="text" ></label>
                                    <input type="radio" id="rating_star2" name="portfolio_rating" checked={formstate.portfolio_rating === "2" ? true : null} onClick={handleInputChange} />
                                    <label for="rating_star2" title="text" ></label>
                                    <input type="radio" id="rating_star1" name="portfolio_rating" checked={formstate.portfolio_rating === "1" ? true : null} onClick={handleInputChange} />
                                    <label for="rating_star1" title="text" ></label>
                                </div>
                            </div>
                            <div class="form-control-panel bold">Rate My Skill</div>
                            <div className="form-control-panel ml-20 mt-15">
                                HTML5, CSS3
                            <div className="rate">
                                    <input type="radio" id="html_css_star5" name="htmlcss3_rating" checked={formstate.htmlcss3_rating === "5" ? true : null} onClick={handleInputChange} />
                                    <label for="html_css_star5" title="text" ></label>
                                    <input type="radio" id="html_css_star4" name="htmlcss3_rating" checked={formstate.htmlcss3_rating === "4" ? true : null} onClick={handleInputChange} />
                                    <label for="html_css_star4" title="text" ></label>
                                    <input type="radio" id="html_css_star3" name="htmlcss3_rating" checked={formstate.htmlcss3_rating === "3" ? true : null} onClick={handleInputChange} />
                                    <label for="html_css_star3" title="text" ></label>
                                    <input type="radio" id="html_css_star2" name="htmlcss3_rating" checked={formstate.htmlcss3_rating === "2" ? true : null} onClick={handleInputChange} />
                                    <label for="html_css_star2" title="text" ></label>
                                    <input type="radio" id="html_css_star1" name="htmlcss3_rating" checked={formstate.htmlcss3_rating === "1" ? true : null} onClick={handleInputChange} />
                                    <label for="html_css_star1" title="text" ></label>
                                </div>
                            </div>
                            <div className="form-control-panel ml-20 mt-15">
                                JAVASCRIPT
                            <div className="rate">
                                    <input type="radio" id="javascript_star5" name="javascript_rating" checked={formstate.javascript_rating === "5" ? true : null} onClick={handleInputChange} />
                                    <label for="javascript_star5" title="text" ></label>
                                    <input type="radio" id="javascript_star4" name="javascript_rating" checked={formstate.javascript_rating === "4" ? true : null} onClick={handleInputChange} />
                                    <label for="javascript_star4" title="text" ></label>
                                    <input type="radio" id="javascript_star3" name="javascript_rating" checked={formstate.javascript_rating === "3" ? true : null} onClick={handleInputChange} />
                                    <label for="javascript_star3" title="text" ></label>
                                    <input type="radio" id="javascript_star2" name="javascript_rating" checked={formstate.javascript_rating === "2" ? true : null} onClick={handleInputChange} />
                                    <label for="javascript_star2" title="text" ></label>
                                    <input type="radio" id="javascript_star1" name="javascript_rating" checked={formstate.javascript_rating === "1" ? true : null} onClick={handleInputChange} />
                                    <label for="javascript_star1" title="text" ></label>
                                </div>
                            </div>
                            <div className="form-control-panel ml-20 mt-15">
                                ANGULAR
                            <div className="rate">
                                    <input type="radio" id="angular_star5" name="angular_rating" checked={formstate.angular_rating === "5" ? true : null} onClick={handleInputChange} />
                                    <label for="angular_star5" title="text" ></label>
                                    <input type="radio" id="angular_star4" name="angular_rating" checked={formstate.angular_rating === "4" ? true : null} onClick={handleInputChange} />
                                    <label for="angular_star4" title="text" ></label>
                                    <input type="radio" id="angular_star3" name="angular_rating" checked={formstate.angular_rating === "3" ? true : null} onClick={handleInputChange} />
                                    <label for="angular_star3" title="text" ></label>
                                    <input type="radio" id="angular_star2" name="angular_rating" checked={formstate.angular_rating === "2" ? true : null} onClick={handleInputChange} />
                                    <label for="angular_star2" title="text" ></label>
                                    <input type="radio" id="angular_star1" name="angular_rating" checked={formstate.angular_rating === "1" ? true : null} onClick={handleInputChange} />
                                    <label for="angular_star1" title="text" ></label>
                                </div>
                            </div>
                            <div className="form-control-panel ml-20 mt-15">
                                REACT
                            <div className="rate">
                                    <input type="radio" id="react_star5" name="react_rating" checked={formstate.react_rating === "5" ? true : null} onClick={handleInputChange} />
                                    <label for="react_star5" title="text" ></label>
                                    <input type="radio" id="react_star4" name="react_rating" checked={formstate.react_rating === "4" ? true : null} onClick={handleInputChange} />
                                    <label for="react_star4" title="text" ></label>
                                    <input type="radio" id="react_star3" name="react_rating" checked={formstate.react_rating === "3" ? true : null} onClick={handleInputChange} />
                                    <label for="react_star3" title="text" ></label>
                                    <input type="radio" id="react_star2" name="react_rating" checked={formstate.react_rating === "2" ? true : null} onClick={handleInputChange} />
                                    <label for="react_star2" title="text" ></label>
                                    <input type="radio" id="react_star1" name="react_rating" checked={formstate.react_rating === "1" ? true : null} onClick={handleInputChange} />
                                    <label for="react_star1" title="text" ></label>
                                </div>
                            </div>
                            <div className="form-control-panel mt-15" style={{ "justifyContent": "center" }}>
                                <button className="submit btn" style={{ "marginBottom": "10px" }}>Submit</button>
                            </div>

                        </form>

                    </div>
                    <div className="feedbackList">
                        {loading &&
                            <div className="loadingwrapper">
                                <div className="loading"></div>
                            </div>

                        }
                        {!loading &&
                            <>
                                <div className="feedbackPanel">
                                    {formlist.map(form => (
                                        <div className="feedback">
                                            <div className="owner">{form.name}</div>
                                            <div className="feedbacktext">{form.message}</div>
                                            <div className="rating">
                                                <div className="portfolio_heaader">
                                                    <div className="header">Portfolio Rating : </div>
                                                    <div className="rate">
                                                        <label for="portfolio_star1" title="text" className={parseInt(form.portfolio_rating) >= 1 ? "rating_active" : ""}></label>
                                                        <label for="portfolio_star2" title="text" className={parseInt(form.portfolio_rating) >= 2 ? "rating_active" : ""}></label>
                                                        <label for="portfolio_star3" title="text" className={parseInt(form.portfolio_rating) >= 3 ? "rating_active" : ""}></label>
                                                        <label for="portfolio_star4" title="text" className={parseInt(form.portfolio_rating) >= 4 ? "rating_active" : ""}></label>
                                                        <label for="portfolio_star5" title="text" className={parseInt(form.portfolio_rating) >= 5 ? "rating_active" : ""}></label>
                                                    </div>
                                                </div>
                                                <div className="skillrating">
                                                    <div className="header">Skill Rating : </div>
                                                    <div className="skillholder">
                                                        <div class="form-control-panel">HTML5, CSS3
                                            <div className="rate">
                                                                <label for="portfolio_star5" title="text" className={parseInt(form.htmlcss3_rating) >= 1 ? "rating_active" : ""}></label>
                                                                <label for="portfolio_star4" title="text" className={parseInt(form.htmlcss3_rating) >= 2 ? "rating_active" : ""}></label>
                                                                <label for="portfolio_star3" title="text" className={parseInt(form.htmlcss3_rating) >= 3 ? "rating_active" : ""}></label>
                                                                <label for="portfolio_star2" title="text" className={parseInt(form.htmlcss3_rating) >= 4 ? "rating_active" : ""}></label>
                                                                <label for="portfolio_star1" title="text" className={parseInt(form.htmlcss3_rating) >= 5 ? "rating_active" : ""}></label>
                                                            </div>
                                                        </div>
                                                        <div class="form-control-panel ml-10">JAVASCRIPT
                                            <div className="rate">
                                                                <label for="portfolio_star5" title="text" className={parseInt(form.javascript_rating) >= 1 ? "rating_active" : ""}></label>
                                                                <label for="portfolio_star4" title="text" className={parseInt(form.javascript_rating) >= 2 ? "rating_active" : ""}></label>
                                                                <label for="portfolio_star3" title="text" className={parseInt(form.javascript_rating) >= 3 ? "rating_active" : ""}></label>
                                                                <label for="portfolio_star2" title="text" className={parseInt(form.javascript_rating) >= 4 ? "rating_active" : ""}></label>
                                                                <label for="portfolio_star1" title="text" className={parseInt(form.javascript_rating) >= 5 ? "rating_active" : ""}></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="skillholder">
                                                        <div class="form-control-panel">ANGULAR
                                            <div className="rate">
                                                                <label for="portfolio_star5" title="text" className={parseInt(form.angular_rating) >= 1 ? "rating_active" : ""}></label>
                                                                <label for="portfolio_star4" title="text" className={parseInt(form.angular_rating) >= 2 ? "rating_active" : ""}></label>
                                                                <label for="portfolio_star3" title="text" className={parseInt(form.angular_rating) >= 3 ? "rating_active" : ""}></label>
                                                                <label for="portfolio_star2" title="text" className={parseInt(form.angular_rating) >= 4 ? "rating_active" : ""}></label>
                                                                <label for="portfolio_star1" title="text" className={parseInt(form.angular_rating) >= 5 ? "rating_active" : ""}></label>
                                                            </div>
                                                        </div>
                                                        <div class="form-control-panel ml-10">REACT
                                            <div className="rate">
                                                                <label for="portfolio_star5" title="text" className={parseInt(form.react_rating) >= 1 ? "rating_active" : ""}></label>
                                                                <label for="portfolio_star4" title="text" className={parseInt(form.react_rating) >= 2 ? "rating_active" : ""}></label>
                                                                <label for="portfolio_star3" title="text" className={parseInt(form.react_rating) >= 3 ? "rating_active" : ""}></label>
                                                                <label for="portfolio_star2" title="text" className={parseInt(form.react_rating) >= 4 ? "rating_active" : ""}></label>
                                                                <label for="portfolio_star1" title="text" className={parseInt(form.react_rating) >= 5 ? "rating_active" : ""}></label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="suggestion">
                                                    <div className="iconholder">
                                                        <i className="icon-like" onClick={() => updateFeedbacklist(form, 'like')}></i>
                                                        {form.like ? form.like : 0}
                                                    </div>
                                                    <div className="iconholder">
                                                        <i className="icon-dislike" onClick={() => updateFeedbacklist(form, 'unlike')}></i>
                                                        {form.unlike ? form.unlike : 0}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* <div className="feedbackFooter">
                                    <button class="submit btn ftrbtn">Previous</button>
                                    <button class="submit btn ftrbtn">Next</button>
                                </div> */}
                            </>
                        }



                    </div>
                </div>
            </div>
        </>
    );
};

export default Feedback;
