import React from 'react';
import './InstagramSection.css';

const imageUrls = [
    "https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf79395558fbeb88a49_instagram-01.jpg",
    "https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf735e113f8679a57e6_instagram-02.jpg",
    "https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf735e11327b99a57e7_instagram-03.jpg",
    "https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf7939555df08b88a48_instagram-04.jpg",
    "https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf7939555514eb88a4a_instagram-05.jpg",
    "https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5badecf71f2da2228d17155f_instagram-06.jpg"
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
