import React from "react";
import BreadcrumbNav from "../../components/ui/BreadcrumbNav/BreadcrumbNav";
import EcommerceTemplate from "../../components/ui/EcommerceTemplate/EcommerceTemplate";
import VideoSection from "../../components/ui/VideoSection/VideoSection";
import SubscribeSection from "../../components/ui/SubscribeSection/SubscribeSection";
import InstagramSection from "../../components/ui/InstagramSection/InstagramSection";
import './About.css';
import { Link } from "react-router-dom";

function About() {
  const pages = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ];

  return (
    <div className="container">
      <div className="container-content">
        <BreadcrumbNav pages={pages} />
        <div className="introducing-toy-container">
          <div className="introducing-toy-content">
            <div className="introducing-main-content">
              <div className="title-text">
                <p className="all-you-need-fun">All You Need is Fun!</p>
                <p className="introducing-toy-text">Introducing ToyToy</p>
                <p className="text">
                  Each toy at ToyToy is not only eye-catching but also sparks imagination, brings joy, <br/> and inspires children to explore, take action, and grow every single day.
                </p>
                <a className="about-link" href="#free-marketing-container">
                  More About Us
                </a>
              </div>
              <img
                src="https://i.pinimg.com/736x/23/18/86/231886532f938dee162e78198119ad13.jpg"
                alt="About ToyStore"
              />
            </div>
          </div>
        </div>
        <EcommerceTemplate 
          title= "Modern - For a youthful brand"
          textBtn="Let's Explore" 
          link={'/catalog'} 
          imagelink={'https://www.cleanipedia.com/images/5iwkm8ckyw6v/c3b4577cbc89ee98de078d0d70758368/bd1dc54d7ca5cdb2f85d7b628b475d41/aHR0cHNfX193d3cuY2xlYW5pcGVkaWEuY29tX2NvbnRlbnRfZGFtX3VuaWxldmVyX2RpcnRfaXNfZ29vZF91bml0ZWRfa2luZ2RvbV93ZWJzaXRlXzMyMDE3NjUyMy0xNjI2NzIyLWpwZy5qcGc/1200w/hai-%C4%91%E1%BB%A9a-tr%E1%BA%BB-%C4%91ang-%C4%91%E1%BB%8Dc-s%C3%A1ch-ngo%C3%A0i-tr%E1%BB%9Di-c%C3%B9ng-v%E1%BB%9Bi-m%E1%BB%99t-con-g%E1%BA%A5u-b%C3%B4ng-l%E1%BB%9Bn..jpg'} 
          paragraph={
            <>
              We understand that every child is a unique world of their own. 
              That's why our toy collection is constantly evolving — diverse, 
              trendy, and thoughtfully curated, from educational toys to active play items. 
              Let your little ones play, explore, and discover the world in a fun and safe way.
            </>
          }
        />
        <EcommerceTemplate 
          title="Earned through parents' trust" 
          textBtn="Let's Explore" 
          link={'/catalog'} 
          imagelink={'https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77f0b5b7843138dc3c3_side-image-02-p-1080.jpeg'} 
          displayStyle="none"
          rowChange="row-reverse"
          paragraph={
            <>
              As parents, you always want the best for your children — and so do we. 
              Every toy we offer is carefully selected to ensure high quality and maximum safety, 
              so your little ones can play freely while you enjoy peace of mind. 
              Because your child's safety is our top priority.
            </>
          }
        />
        <VideoSection />
        <SubscribeSection />
        <InstagramSection />
      </div>
    </div>
  );
}

export default About;
