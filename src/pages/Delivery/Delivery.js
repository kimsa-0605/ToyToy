import React from "react";
import BreadcrumbNav from "../../components/ui/BreadcrumbNav/BreadcrumbNav";
import SubscribeSection from "../../components/ui/SubscribeSection/SubscribeSection";
import InstagramSection from "../../components/ui/InstagramSection/InstagramSection";
import './Delivery.css';

function Delivery() {
    const pages = [
    { name: "Home", url: "/" },
    { name: "Delivery", url: "/delivery" },
  ];

  return (
    <div className="container">
      <div className="container-content">
        <BreadcrumbNav pages={pages} />
        <div className="delivery-container">
          <div className="delivery-content">
            <div className="delivery-infor-content">
              <div className="dilivery-infor">
                <p className="first-title title">Delivery Info</p>
                <p className="text">
                  At ToyToy, we believe that getting your child's favorite toy should be as joyful and smooth as playtime itself. That's why we've built a delivery process that is fast, safe, and reliable, so you can focus on creating happy memories — while we take care of the rest.
                </p>
                <p className="title">Carefully Packed With Love</p>
                <p className="text">
                  Each toy is packed with care to ensure it arrives safely — no matter how near or far. We use child-safe, eco-friendly packaging that’s both protective and gentle for little hands.
                </p>
                <p className="title">Safe for Kids, Safe in Transit</p>
                <p className="text">
                  All toys are packed with care using eco-friendly and kid-safe materials. Fragile items are cushioned properly to avoid damage during transport.
                </p>
                <ul className="ul-li-text">
                  <li>Nationwide delivery within 2-5 business days</li>
                  <li>Same-day shipping for orders placed before 2 PM (Mon-Fri)</li>
                  <li>Free shipping on orders over 500,000đ</li>
                </ul>
                <p className="text">
                  We begin preparing your package as soon as your order is confirmed, so your child doesn’t have to wait too long for the fun to begin!
                </p>
                <p className="title">Your Happiness Is Our Priority</p>
                <p className="text">
                  We believe that a smooth delivery is the first step to a joyful unboxing moment. If something isn't right, our friendly support team is always ready to assist.
                </p>
              </div>
              <div className="call-to-contact-us">
                <div className="call-to-contact-us-content">
                  <div className="padding-contact-us-content">
                    <p className="question-text">
                      Can't Find the Answer <br /> to Your Question?
                    </p>
                    <a href="/contacts" className="btn-call-to-contact-us">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SubscribeSection />
        <InstagramSection />
      </div>
    </div>
  );
}

export default Delivery;
