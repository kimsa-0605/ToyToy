import React from 'react';
import './SubscribeSection.css'; 

const SubscribeSection = () => {
    return (
        <div id="contact-container" class="contact-container">
            <div id="contact-container" className="contact-content" data-aos="zoom-in" data-aos-duration="1000">
                <div className="contact-left-content">
                    <div className="fly-button">
                        <img
                            src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5baf56dcace69cfd39b34f7a_paperplane-icon-white.svg"
                            alt="Paper plane"
                        />
                    </div>
                    <p className="contact-left-text">
                        Subscribe to our newsletter
                        <br />
                        & get <span>10% discount!</span>
                    </p>
                </div>

                <div className="contact-right-content">
                    <input type="text" placeholder="Enter your email address" />
                    <div className="contact-right-button">Subscribe</div>
                </div>
            </div>
        </div>
        
    );
};

export default SubscribeSection;
