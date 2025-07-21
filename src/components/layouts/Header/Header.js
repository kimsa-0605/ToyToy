import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const token = localStorage.getItem('token');
  const isLoggedIn = Boolean(token);
  const { pathname } = useLocation();

  const getActiveClass = (path) => {
    if (path === "/catalog") {
      const validCatalogPaths = [
        "/catalog",
        "/catalog/stuffed-animals",
        "/catalog/wooden-toys"
      ];
      return validCatalogPaths.includes(pathname) ? "active" : "";
    }

    return pathname === path ? "active" : "";
  };

  return (
    <div id="header-container" className="header-container">
      <div className="header-content">
        <div className="header-contact">
          <div className="header-contact-content">
            <div className="header-contact-phonenumber-email">
              <span>Call Us: +84 877152961</span>
              <span>Email: <u>toytoy@gmail.com</u></span>
            </div>
            <div className="header-contact-icons">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-square-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-pinterest"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
          </div>
        </div>

        <div className="header-nav-bar">
          <div className="header-nav-content">
            <div className="header-logo-menu">
              <Link to="/" className="header-logo">ToyToy</Link>
              <i className="fa-solid fa-bars menu-icon" onClick={() => setMenuOpen(!menuOpen)}></i>
              {menuOpen && (
                <div className="dropdown-menu">
                  <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                  <Link to="/catalog" onClick={() => setMenuOpen(false)}>Catalog</Link>
                  <Link to="/delivery" onClick={() => setMenuOpen(false)}>Delivery</Link>
                  <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                  <Link to="/contacts" onClick={() => setMenuOpen(false)}>Contacts</Link>
                </div>
              )}
            </div>

            <div className="header-nav-cart">
              <div className="header-nav-title">
                <Link className={`header-nav-title-hover ${getActiveClass("/catalog")}`} to="/catalog">Catalog</Link>
                <Link className={`header-nav-title-hover ${getActiveClass("/delivery")}`} to="/delivery">Delivery</Link>
                <Link className={`header-nav-title-hover ${getActiveClass("/about")}`} to="/about">About</Link>
                <Link className={`header-nav-title-hover ${getActiveClass("/contacts")}`} to="/contacts">Contacts</Link>
              </div>

              <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button id='search-btn' type="submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>

              {isLoggedIn ? (
                <div className="user-avatar-header">
                  <img src="https://bathanh.com.vn/wp-content/uploads/2017/08/default_avatar.png" alt="avatar" />
                  <div className="profile-block">
                    <div className="profile-header">
                      <i className="fa-regular fa-user"></i>
                      <Link to="/profile">Profile</Link>
                    </div>
                    <button className="logout-btn" onClick={() => {
                      localStorage.removeItem('token');
                      window.location.reload(); 
                    }}>
                      <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div className="login-signup-title">
                  <p>
                    <Link to="/login">Login</Link> / <Link to="/sign-up">Sign up</Link>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
