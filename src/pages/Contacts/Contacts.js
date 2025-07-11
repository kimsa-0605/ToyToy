import React from 'react';
import BreadcrumbNav from '../../components/ui/BreadcrumbNav/BreadcrumbNav';
import SubscribeSection from '../../components/ui/SubscribeSection/SubscribeSection';
import InstagramSection from '../../components/ui/InstagramSection/InstagramSection';
import './Contacts.css';

const Contact = () => {
  const pages = [
    { name: "Home", url: "/" },
    { name: "Contacts", url: "/contacts" },
  ];

  return (
    <div className="container">
      <div className="container-content">
        <BreadcrumbNav pages={pages} />
        <div className="map-conatact-container">
          <div className="map-contact">
            <div className="may-contact-content">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61349.64700643006!2d108.16550617972635!3d16.047164814852437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c792252a13%3A0xfc14e3a044436487!2zxJDDoCBO4bq1bmcsIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1741649148615!5m2!1svi!2s"
                width="1020"
                height="450"
                style={{
                  border: 0,
                  borderRadius: '10px',
                  overflow: 'hidden'
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <div className="message-contact-infor">
                <div className="message-layout">
                  <p className="tittle">Leave a Message</p>

                  <p className="input-title">Full Name</p>
                  <input placeholder="Enter your name" type="text" name="name" />

                  <p className="input-title">Email Address</p>
                  <input placeholder="Your contact email" type="email" name="email" />

                  <p className="input-title">Message</p>
                  <textarea placeholder="Message text..." name="message"></textarea>

                  <div className="button-contact-map">
                    <button className="send-message-button">Send Message</button>
                  </div>
                </div>

                <div className="contact-infor-layout">
                  <p className="tittle">Contact Info</p>
                  <div className="contact-infor-content">
                    <p className="text">4293 Euclid Avenue, Los Angeles, CA 90012</p>
                    <p className="text">+84 877152961</p>
                    <p className="text email">toytoy@gmail.com</p>
                  </div>
                  <p className="follow-us-text">Follow Us</p>
                  <div className="contact-infor-icon">
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-square-facebook"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-pinterest"></i>
                    <i className="fa-brands fa-youtube"></i>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <InstagramSection />
        <SubscribeSection />
      </div>
    </div>
  );
};

export default Contact;
