import "./LogIn.css"
import { Link } from 'react-router-dom';

export default function LogIn() {
  const pawPositions = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    top: Math.random() * 90 + 5,
    left: Math.random() * 90 + 5,
    rotation: Math.random() * 360,
    delay: Math.random() * 3,
    size: Math.random() * 8 + 16,
  }))

  return (
      <div className="login-container">
        <div className="form-wrapper">
          <div className="form-container">
            {pawPositions.map((paw) => (
              <div
                key={paw.id}
                className="paw-icon"
                style={{
                  top: `${paw.top}%`,
                  left: `${paw.left}%`,
                  transform: `rotate(${paw.rotation}deg)`,
                  animationDelay: `${paw.delay}s`,
                  fontSize: `${paw.size}px`,
                }}
              >
                <i className="fa-solid fa-paw"></i>
              </div>
            ))}

            <div className="image-container">
              <img
                src="https://cdn.prod.website-files.com/5baddb6a35e113da0e9a4802/5bae0f1835e11376299a8089_33878-5-plush-toy-transparent-min.png"
                alt="Login img"
                className="login-image"
              />
            </div>

            <form className="login-form">
              <div className="form-header">
                <h2 className="form-title">Welcome Back!</h2>
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="form-input"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="form-input"
                  placeholder="Enter your password"
                />
              </div>
              <button type="submit" className="login-button">
                Log In
              </button>
              <div className="form-footer">
                <p className="footer-text">
                  Don't have an account?{" "}
                  <Link to="/register" className="footer-link">
                    Register for an account
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}
