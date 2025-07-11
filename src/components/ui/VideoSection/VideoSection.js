import React from 'react';
import './VideoSection.css';

const VideoSection = () => {
    return (
        <div id="video-section-container" class="video-section-container">
            <div id="video-section-container" className="video-section-content" data-aos="zoom-in" data-aos-duration="1000">
                <p className="about-shop-title">About The Shop</p>
                <p className="watch-our-story">Watch Our Story</p>
                <p className="about-shop-title">
                    From exquisite wooden toys to creative building sets, ToyToy is always by parents' side in the journey <br /> of raising happy, confident, and dream-filled children.
                </p>
                <div className="video-button">
                    <img
                        src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec4b504f1c4031af32_play-icon-white.svg"
                        alt="Play video"
                    />
                </div>
            </div>
        </div>
        
    );
};

export default VideoSection;
