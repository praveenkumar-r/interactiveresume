import React, { useState, useEffect } from "react";
import "./Testimonials.scss";
let carousalCount = 9;
let carousalIndexInit = {
    left: carousalCount,
    active: 1,
    right: 2
};
const Testimonials = () => {
    const [carousalIndex, setCarousalIndex] = useState(carousalIndexInit);
    const carousalPosition = (index) => {
        if (carousalIndex.left === index) return 'left';
        else if (carousalIndex.active === index) return 'active';
        else if (carousalIndex.right === index) return 'right';
        else return 'disabled';
    }

    useEffect(() => {
        var interval = setTimeout(() => {
            let tempIndex = carousalIndex.active + 1;
            if (tempIndex === carousalCount + 1)
                tempIndex = 1;
            let carousalIndexObj = {
                left: tempIndex - 1,
                active: tempIndex,
                right: tempIndex + 1
            }
            if (carousalIndexObj.left === 0)
                carousalIndexObj.left = 4;
            else if (carousalIndexObj.right === carousalCount + 1)
                carousalIndexObj.right = 1;
            setCarousalIndex(carousalIndexObj);
        }, 8000);
        return () => {
            clearTimeout(interval);
        };
    }, [carousalIndex])

    return (
        <>
            <div className="container">
                <h2 className="section-title">What my client and colleague says !!!</h2>
                <div id="recommendation">
                    <ul className={carousalIndex}>
                        <li className={`${carousalPosition(1)}`}>
                            <div className="recommendations__item">
                                <div className="recommendations__text-wrapper">
                                    <div className="testimonial_icon">“</div>
                                    <div className="recommendation-text">
                                        I found Praveen to be very good technically. He was responsible for our overall UI strategy and he managed it quite well. He was very pro-active in giving suggestions and adhered to the deadlines even when they were very aggressive. Even after the project was finished, he supported us through the maintenance period and attended to any production issue with utmost urgency
                                    </div>
                                </div>
                                <div className="recommendations__header">
                                    <div className="recommendations__detail">
                                        <div className="recommendation_name">
                                            Anubhav Khanna
                                        </div>
                                        <div className="recommendations__headline">
                                            Co-Founder | Product Head | Site Reliability Lead | Technical Project Manager.
                                        </div>
                                    </div>
                                    <div className="profile_img">
                                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEEh3bORbFryA/profile-displayphoto-shrink_100_100/0/1602309895690?e=1627516800&amp;v=beta&amp;t=8UhShlalJgxSkFRcwGt5GU9mTx_l8HgaHwSlMBROQD0" loading="lazy" alt="Anubhav Khanna" id="ember879" className="EntityPhoto-circle-4 fl lazy-image ember-view"></img>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={`${carousalPosition(2)}`}>
                            <div className="recommendations__item">
                                <div className="recommendations__text-wrapper">
                                    <div className="testimonial_icon">“</div>
                                    <div className="recommendation-text">
                                        Praveen is an excellent UI developer. His skills in designing modern and sleek UI are on another level. He delivers his work on time and is very responsive as far as communications go. Even after the project was concluded, he supported us by fixing minor bugs and making small changes wherever required. Hope to work with him on future projects!!
                                    </div>
                                </div>
                                <div className="recommendations__header">
                                    <div className="recommendations__detail">
                                        <div className="recommendation_name">
                                            Deepak Sharma
                                        </div>
                                        <div className="recommendations__headline">
                                            Senior SAP Consultant at Loop Integration
                                        </div>
                                    </div>
                                    <div className="profile_img">
                                        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFEQZChTR8RgA/profile-displayphoto-shrink_100_100/0/1600507634029?e=1628121600&amp;v=beta&amp;t=YxmDKyj_ehcgI2O-RKQ1Wdm9vA6urylGIO8zSFysN-w" loading="lazy" alt="Deepak Sharma" className="EntityPhoto-circle-4 fl lazy-image ember-view"></img>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={`${carousalPosition(3)}`}>
                            <div className="recommendations__item">
                                <div className="recommendations__text-wrapper">
                                    <div className="testimonial_icon">“</div>
                                    <div className="recommendation-text" style={{ "fontSize": "14px" }}>
                                        I have worked closely with Praveen on two UI projects in Caterpillar which mainly helped in managing/monitoring the Telematics data and Subscriptions. Few words that aptly describe Praveen are very confident, team player and problem solver. He is very knowledgeable with UI technologies like Angular, jQuery, HTML, CSS and much more. Apart from his exceptional technical skills, I would highly recommend him for the enthusiasm and positive energy he brings to work everyday.                                    </div>
                                </div>
                                <div className="recommendations__header">
                                    <div className="recommendations__detail">
                                        <div className="recommendation_name">
                                            Madhavan Babu
                                        </div>
                                        <div className="recommendations__headline">
                                            Senior Computer Scientist at Adobe
                                        </div>
                                    </div>
                                    <div className="profile_img">
                                        <img src="https://media-exp1.licdn.com/dms/image/C5603AQHxS2wsOZJSyQ/profile-displayphoto-shrink_100_100/0/1516953073849?e=1628121600&amp;v=beta&amp;t=W-NzVS4u5eQIDvNtU_0dDlBFTAQBBr7h_nQN7v3dh34" loading="lazy" alt="Madhavan Babu" id="ember879" className="EntityPhoto-circle-4 fl lazy-image ember-view"></img>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={`${carousalPosition(4)}`}>
                            <div className="recommendations__item">
                                <div className="recommendations__text-wrapper">
                                    <div className="testimonial_icon">“</div>
                                    <div className="recommendation-text">
                                        If its new technology than ask this guy for doing POC. If its urgent than he is man who you have to work with. He is very dedicated and committed to his work. Alway brings new ideas and concept to table. Serious when he is at work, jolly when he’s free.                                    </div>
                                </div>
                                <div className="recommendations__header">
                                    <div className="recommendations__detail">
                                        <div className="recommendation_name">
                                            Girish Revankar
                                        </div>
                                        <div className="recommendations__headline">
                                            Program Manager at Caterpillar India Private Limited
                                        </div>
                                    </div>
                                    <div className="profile_img">
                                        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHd4JclaqGSxw/profile-displayphoto-shrink_100_100/0/1606209739938?e=1628121600&amp;v=beta&amp;t=yvw3wGG-uLAwwXBvQza1LSmqeL6ZtxSLWUnksuM4MRs" loading="lazy" alt="Girish Revankar" id="ember879" className="EntityPhoto-circle-4 fl lazy-image ember-view"></img>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={`${carousalPosition(5)}`}>
                            <div className="recommendations__item">
                                <div className="recommendations__text-wrapper">
                                    <div className="testimonial_icon">“</div>
                                    <div className="recommendation-text">
                                        I had been associated with Praveen for about 4 years. He is one of the best UI Architects I have worked with always proactive about the project giving goods ideas on UX leading to better modifications of customer journey. Also focused on using updated technologies. He is good at designing both Mobile and Web application. Highly dedicated and wouldn't recommend him any less
                                    </div>
                                </div>
                                <div className="recommendations__header">
                                    <div className="recommendations__detail">
                                        <div className="recommendation_name">
                                            Deepak Krishnamoorthy
                                        </div>
                                        <div className="recommendations__headline">
                                            Product Manager at Caterpillar Inc.
                                        </div>
                                    </div>
                                    <div className="profile_img">
                                        <img src="https://media-exp1.licdn.com/dms/image/C5603AQEbQyyvX_nyZw/profile-displayphoto-shrink_100_100/0/1613771247355?e=1628121600&amp;v=beta&amp;t=P0hkyDZ3ZuOeLIWfoiktvbucBlRo0WOu4sDNbxS9kDQ" loading="lazy" alt="Deepak Krishnamoorthy" id="ember879" className="EntityPhoto-circle-4 fl lazy-image ember-view"></img>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={`${carousalPosition(6)}`}>
                            <div className="recommendations__item">
                                <div className="recommendations__text-wrapper">
                                    <div className="testimonial_icon">“</div>
                                    <div className="recommendation-text">
                                        Praveen is a great team player and always ready to help on any topic .He is really good at technical as well as in business domain .Normally UI developers won't put so much effort to understand the business needs ,but Praveen is very keen to learn business flows.He is good at leadership skills and ready to help the junior developers .He is really an asset to any organization
                                    </div>
                                </div>
                                <div className="recommendations__header">
                                    <div className="recommendations__detail">
                                        <div className="recommendation_name">
                                            Ajay AS
                                                </div>
                                        <div className="recommendations__headline">
                                            Software Engineer @Caterpillar
                                                </div>
                                    </div>
                                    <div className="profile_img">
                                        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGmTVlGnNJc0w/profile-displayphoto-shrink_100_100/0/1593061549447?e=1628121600&amp;v=beta&amp;t=Pf32CsCpCVIYwJsv_vAjy2wiyNQIOn3vDG6qJ6p3sHQ" loading="lazy" alt="Ajay AS" id="ember879" className="EntityPhoto-circle-4 fl lazy-image ember-view"></img>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={`${carousalPosition(7)}`}>
                            <div className="recommendations__item">
                                <div className="recommendations__text-wrapper">
                                    <div className="testimonial_icon">“</div>
                                    <div className="recommendation-text">
                                        Praveen is highly creative and a very easy-going person to work with. We worked together for front-end completely and he always perform exceptionally good under tight timelines. He has a steep learning curve , a good mentor having humble attitude . He is innovative perfectionist always ready to put all his energy and stamina to get the job done. without doubt the best and most knowledgeable UI developer.
                                    </div>
                                </div>
                                <div className="recommendations__header">
                                    <div className="recommendations__detail">
                                        <div className="recommendation_name">
                                            Saleem Malik
                                                </div>
                                        <div className="recommendations__headline">
                                            Front end developer
                                                </div>
                                    </div>
                                    <div className="profile_img">
                                        <img src="https://media-exp1.licdn.com/dms/image/C5103AQFIpwf6dYkoJQ/profile-displayphoto-shrink_100_100/0/1558775600781?e=1628121600&amp;v=beta&amp;t=r5lS-X9mXIAj0ZuXAJBvdU994sPz4D-_znX1_f4a6to" loading="lazy" alt="Saleem Malik" id="ember879" className="EntityPhoto-circle-4 fl lazy-image ember-view"></img>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={`${carousalPosition(8)}`}>
                            <div className="recommendations__item">
                                <div className="recommendations__text-wrapper">
                                    <div className="testimonial_icon">“</div>
                                    <div className="recommendation-text">
                                        The way he handles the team was superb cool. He has thrust to learn new things(optimisation, deployment) and implement those in projects. He used to give solution rather than code which is more important as a lead.
                                        </div>
                                </div>
                                <div className="recommendations__header">
                                    <div className="recommendations__detail">
                                        <div className="recommendation_name">
                                            Harishkar Mohan
                                                </div>
                                        <div className="recommendations__headline">
                                            Front end developer
                                                </div>
                                    </div>
                                    <div className="profile_img">
                                        <img src="https://media-exp1.licdn.com/dms/image/C5103AQF80w8bqZzl7Q/profile-displayphoto-shrink_100_100/0/1573658051916?e=1628121600&amp;v=beta&amp;t=Pz1l_wHrDxUhmZxP0EsLYKEYVn0x1ChykR5ceHaFn1E" loading="lazy" alt="Harishkar Mohan" id="ember879" className="EntityPhoto-circle-4 fl lazy-image ember-view"></img>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={`${carousalPosition(9)}`}>
                            <div className="recommendations__item">
                                <div className="recommendations__text-wrapper">
                                    <div className="testimonial_icon">“</div>
                                    <div className="recommendation-text">
                                        praveen is only person I know, whose energy doesn't drop even 1% even after programming throughout the day....he has unique skill set on analysing things. He taught me what "Think twice code once" actually meant !
                                    </div>
                                </div>
                                <div className="recommendations__header">
                                    <div className="recommendations__detail">
                                        <div className="recommendation_name">
                                            Vignesh waran
                                        </div>
                                        <div className="recommendations__headline">
                                            Software Engineer
                                        </div>
                                    </div>
                                    <div className="profile_img">
                                        <img src="https://media-exp1.licdn.com/dms/image/C5603AQFXWRGatDSXWA/profile-displayphoto-shrink_100_100/0/1607403408209?e=1628121600&amp;v=beta&amp;t=hHXyRj9AiODPSY6TvWzc4xPj7u4XKQ8XC_oNa4UxWGQ" loading="lazy" alt="Vignesh waran" id="ember879" className="EntityPhoto-circle-4 fl lazy-image ember-view"></img>
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>
                    <div className="slider">
                        <div className={`${carousalPosition(1)} dot`}></div>
                        <div className={`${carousalPosition(2)} dot`}></div>
                        <div className={`${carousalPosition(3)} dot`}></div>
                        <div className={`${carousalPosition(4)} dot`}></div>
                        <div className={`${carousalPosition(5)} dot`}></div>
                        <div className={`${carousalPosition(6)} dot`}></div>
                        <div className={`${carousalPosition(7)} dot`}></div>
                        <div className={`${carousalPosition(8)} dot`}></div>
                        <div className={`${carousalPosition(9)} dot`}></div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Testimonials;
