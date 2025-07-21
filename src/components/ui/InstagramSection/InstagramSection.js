import React from 'react';
import './InstagramSection.css';

const imageUrls = [
    "https://i.pinimg.com/736x/ee/0b/e0/ee0be0fc8e93823e68e70b0fc07aae44.jpg",
    "https://i.pinimg.com/1200x/67/7e/3e/677e3e91ae758db99f84fef09e9d5a83.jpg",
    "https://i.pinimg.com/1200x/1e/c3/22/1ec3222c64ef80c21be35f59eeb4f609.jpg",
    "https://i.pinimg.com/1200x/81/fa/66/81fa6607ed6cfc23091dc703491a2de4.jpg",
    "https://i.pinimg.com/736x/45/dd/d7/45ddd7f6535be0ffb849cffae1464ad0.jpg",
    "https://i.pinimg.com/736x/39/8f/99/398f997b76f807b55504b85cd856882e.jpg"
];

const InstagramSection = () => {
    return (
        <div id="instagram-contact-container" class="instagram-contact-container">
            <div id="instagram-contact-container" className="instagram-contact-content">
                <div className="instagram-contact-title">
                    <p className="instagram-contact-top-title">@ToyToy</p>
                    <p className="instagram-contact-bottom-title">We're on Instagram!</p>
                </div>
                <div className="instagram-contact-photo">
                    <div className="instagram-contact-photo-content" data-aos="zoom-in" data-aos-duration="1000">
                        {imageUrls.map((url, index) => (
                            <a href="#" key={index}>
                                <img src={url} alt={`Instagram ${index + 1}`} />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="instagram-contact-button">See More Photos</div>
            </div>
        </div>
    );
};

export default InstagramSection;
