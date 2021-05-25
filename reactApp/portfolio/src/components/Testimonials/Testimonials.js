import React, { useState, useEffect } from "react";
import "./Testimonials.scss";
let carousalCount = 4;
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
            <div class="container">
                <h2 class="section-title">What my client and colleague says !!!</h2>
                <div id="recommendation">
                    <ul className={carousalIndex}>
                        <li className={`${carousalPosition(1)}`}>
                            <div class="recommendations__item">
                                <div class="recommendations__text-wrapper">
                                    <div class="testimonial_icon">“</div>
                                    <div class="recommendation-text">
                                        ONE I found Praveen to be very good technically. He was responsible for our overall UI strategy and he managed it quite well. He was very pro-active in giving suggestions and adhered to the deadlines even when they were very aggressive. Even after the project was finished, he supported us through the maintenance period and attended to any production issue with utmost urgency
                                    </div>
                                </div>
                                <div class="recommendations__header">
                                    <div class="recommendations__detail">
                                        <div class="recommendation_name">
                                            Anubhav Khanna
                                        </div>
                                        <div class="recommendations__headline">
                                            Co-Founder | Product Head | Site Reliability Lead | Technical Project Manager | Love to work across hierarchies, working on strategy as well as execution.
                                        </div>
                                    </div>
                                    <div class="profile_img">
                                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEEh3bORbFryA/profile-displayphoto-shrink_100_100/0/1602309895690?e=1627516800&amp;v=beta&amp;t=8UhShlalJgxSkFRcwGt5GU9mTx_l8HgaHwSlMBROQD0" loading="lazy" alt="Anubhav Khanna" id="ember879" class="EntityPhoto-circle-4 fl lazy-image ember-view"></img>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={`${carousalPosition(2)}`}>
                            <div class="recommendations__item">
                                <div class="recommendations__text-wrapper">
                                    <div class="testimonial_icon">“</div>
                                    <div class="recommendation-text">
                                        TWO I found Praveen to be very good technically. He was responsible for our overall UI strategy and he managed it quite well. He was very pro-active in giving suggestions and adhered to the deadlines even when they were very aggressive. Even after the project was finished, he supported us through the maintenance period and attended to any production issue with utmost urgency
                                    </div>
                                </div>
                                <div class="recommendations__header">
                                    <div class="recommendations__detail">
                                        <div class="recommendation_name">
                                            Anubhav Khanna
                                        </div>
                                        <div class="recommendations__headline">
                                            Co-Founder | Product Head | Site Reliability Lead | Technical Project Manager | Love to work across hierarchies, working on strategy as well as execution.
                                        </div>
                                    </div>
                                    <div class="profile_img">
                                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEEh3bORbFryA/profile-displayphoto-shrink_100_100/0/1602309895690?e=1627516800&amp;v=beta&amp;t=8UhShlalJgxSkFRcwGt5GU9mTx_l8HgaHwSlMBROQD0" loading="lazy" alt="Anubhav Khanna" id="ember879" class="EntityPhoto-circle-4 fl lazy-image ember-view"></img>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={`${carousalPosition(3)}`}>
                            <div class="recommendations__item">
                                <div class="recommendations__text-wrapper">
                                    <div class="testimonial_icon">“</div>
                                    <div class="recommendation-text">
                                        THREE I found Praveen to be very good technically. He was responsible for our overall UI strategy and he managed it quite well. He was very pro-active in giving suggestions and adhered to the deadlines even when they were very aggressive. Even after the project was finished, he supported us through the maintenance period and attended to any production issue with utmost urgency
                                    </div>
                                </div>
                                <div class="recommendations__header">
                                    <div class="recommendations__detail">
                                        <div class="recommendation_name">
                                            Anubhav Khanna
                                        </div>
                                        <div class="recommendations__headline">
                                            Co-Founder | Product Head | Site Reliability Lead | Technical Project Manager | Love to work across hierarchies, working on strategy as well as execution.
                                        </div>
                                    </div>
                                    <div class="profile_img">
                                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEEh3bORbFryA/profile-displayphoto-shrink_100_100/0/1602309895690?e=1627516800&amp;v=beta&amp;t=8UhShlalJgxSkFRcwGt5GU9mTx_l8HgaHwSlMBROQD0" loading="lazy" alt="Anubhav Khanna" id="ember879" class="EntityPhoto-circle-4 fl lazy-image ember-view"></img>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={`${carousalPosition(4)}`}>
                            <div class="recommendations__item">
                                <div class="recommendations__text-wrapper">
                                    <div class="testimonial_icon">“</div>
                                    <div class="recommendation-text">
                                        FOUR I found Praveen to be very good technically. He was responsible for our overall UI strategy and he managed it quite well. He was very pro-active in giving suggestions and adhered to the deadlines even when they were very aggressive. Even after the project was finished, he supported us through the maintenance period and attended to any production issue with utmost urgency
                                    </div>
                                </div>
                                <div class="recommendations__header">
                                    <div class="recommendations__detail">
                                        <div class="recommendation_name">
                                            Anubhav Khanna
                                        </div>
                                        <div class="recommendations__headline">
                                            Co-Founder | Product Head | Site Reliability Lead | Technical Project Manager | Love to work across hierarchies, working on strategy as well as execution.
                                        </div>
                                    </div>
                                    <div class="profile_img">
                                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEEh3bORbFryA/profile-displayphoto-shrink_100_100/0/1602309895690?e=1627516800&amp;v=beta&amp;t=8UhShlalJgxSkFRcwGt5GU9mTx_l8HgaHwSlMBROQD0" loading="lazy" alt="Anubhav Khanna" id="ember879" class="EntityPhoto-circle-4 fl lazy-image ember-view"></img>
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default Testimonials;
