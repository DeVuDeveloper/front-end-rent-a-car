import React from 'react';
import SplashImage from '../../img/splash.png';
import Login from './Login';
import Signup from './Signup';
import './splash.css';

export default function Splash() {
  return (
    <section className="splash-screen">
      <div className="splash-title-container">
        <span className="splash-title">
          <h2>Rent a Car</h2>
          <small className="splash-circle" />
        </span>
        <div className="enter">
          <span className="sign-up-button">
            <Signup />
          </span>

          <span className="login-up-button">
            <Login />
          </span>
        </div>
      </div>
      <span className="splash-image">
        <img className="splash-img" src={SplashImage} alt="splash" />
      </span>
    </section>
  );
}
