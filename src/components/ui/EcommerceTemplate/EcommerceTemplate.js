import React from 'react';
import './EcommerceTemplate.css';
import { Link } from "react-router-dom";

const EcommerceTemplate = ({ title, textBtn, link, imagelink, displayStyle='block', rowChange='', paragraph }) => {
    return (
        <div id="free-marketing-container" class="free-marketing-container">
            <div id="free-marketing-container" className="free-marketing-content">
                <div className="made-for-webflow-content" style={{ display: displayStyle }}>
                    <div className="made-for-webflow-title">Made for happiness</div>
                    <p className="free-marketing-title">
                        Cute & Quality Toys <br />Toys for Your Little One
                    </p>
                </div>
                <div className="available-for-free" style={{ flexDirection: rowChange }}>
                    <div className="available-for-free-content">
                        <p className="available-for-free-title">{title}</p>
                        <div className="line-free-marketing"></div>
                        <p className="free-marketing-text">
                            {paragraph}
                        </p>
                        <Link to={link} className="button-available-for-free">{textBtn}</Link>
                    </div>
                    <img 
                        className="free-marketing-photo"
                        src={imagelink}
                        alt="Ecommerce Template"
                        data-aos="zoom-in" data-aos-duration="1000"
                    /> 
                </div>
            </div>
        </div>
        
    );
};

export default EcommerceTemplate;
