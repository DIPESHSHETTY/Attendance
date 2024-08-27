import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import './HomePage.css';
import logo from './sies.png';  // Ensure this path is correct

const HomePage = () => {
  return (
    <Router>
      <div className="homepage-container">
        <div className="cart-container">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="welcome-text">Welcome to <br></br>ATTENDANCE TRACKER PROGRAM</h1>
          <div className="button-group">
            <Link to="/login">
              <button className="btn login-btn">Login</button>
            </Link>
            <Link to="/signup">
              <button className="btn signup-btn">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default HomePage;
