import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <div id="footer-container" class="footer-container">   
          <div className="footer-content">
            <div className="top-footer-content">
                <p className="footer-logo">ToyToy</p>

                <div className="footer-nav-title">
                    <Link className="footer-nav-title-hover" to="/">Home</Link>
                    <Link className="footer-nav-title-hover" to="/pages/catalog.html">Catalog</Link>
                    <Link className="footer-nav-title-hover" to="/pages/delivery.html">Delivery</Link>
                    <Link className="footer-nav-title-hover" to="/pages/about.html">About</Link>
                    <Link className="footer-nav-title-hover" to="/pages/contacts.html">Contacts</Link>
                </div>

                <div className="footer-contact-icons">
                    <span className="footer-icon"><i className="fa-brands fa-twitter"></i></span>
                    <span className="footer-icon"><i className="fa-brands fa-square-facebook"></i></span>
                    <span className="footer-icon"><i className="fa-brands fa-instagram"></i></span>
                    <span className="footer-icon"><i className="fa-brands fa-pinterest"></i></span>
                    <span className="footer-icon"><i className="fa-brands fa-youtube"></i></span>
                </div>
            </div>
            <div className="bottom-footer-content">
              <hr />
              <div className="bottom-footer-tag-name">
                  <div className="left-bottom-footer-content">
                      Created with love by <u>Kim Sa</u>
                  </div>
                  <div className="right-bottom-footer-content">
                      <p>Joy in Every Toy - Playtime Done Right !</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Footer;
