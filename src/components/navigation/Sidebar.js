/* eslint-disable arrow-body-style */
/* eslint-disable no-confusing-arrow */
/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../assets/images/logo.png';
import {
  FaTwitter, FaFacebookF, FaGithub, FaLinkedin,
} from 'react-icons/fa';
import github from '../../assets/images/github-icon.png';
import Logout from '../auth/Logout';
import './sidebar.css';

const Sidebar = ({ currentUser }) => {
  return (
    <div className="flex flex-col w-64 sidebar-wrapper">
      <span className="nav-header">
        <h2>Rent a Car</h2>
      </span>

      <div className="user-photo-wrapper">
        <img src={currentUser.image_url} className="user-photo" alt="logo" />
        <h4>{currentUser.name}</h4>
      </div>
          
      <div className="flex-1 flex flex-col pt-3 pb-4">
        <div className="flex items-center flex-shrink-0 px-4">
          <a href="/">
            <img src={logo} className="w-40" alt="logo" />
          </a>
        </div>
        <nav className="mt-12 flex-1 desktop-nav" aria-label="Sidebar">
          <div className="pl-3 uppercase font-black text-md">
            <div className="nav-column">
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                <p>CARS</p>
              </NavLink>
              <NavLink
                to="/reserve"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                <p>RESERVE</p>
              </NavLink>
              <NavLink
                to="/reservations"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                <p>MY RESERVATIONS</p>
              </NavLink>
              {currentUser.role === 'admin' && (
                <NavLink
                  to="/add_car"
                  className={({ isActive }) => isActive ? 'active' : 'inactive'}
                >
                  <p>ADD CAR</p>
                </NavLink>
              )}

              {currentUser.role === 'admin' && (
                <NavLink
                  to="/delete"
                  className={({ isActive }) => isActive ? 'active' : 'inactive'}
                >
                  <p>DELETE CAR</p>
                </NavLink>
              )}

              <span className="logout">
                <Logout />
              </span>
            </div>
          </div>
        </nav>
      </div>
      <div className="social">
        <div className="media">
          <a
            className="twitter-nav"
            target="_blank"
            href="https://twitter.com/home"
          >
            <FaTwitter />
          </a>
          <a
            className="facebook-nav"
            target="_blank"
            href="https://www.facebook.com/"
          >
            <FaFacebookF />
          </a>
          <a
            className="github-nav"
            target="_blank"
            href="https://github.com/VuDej"
          >
            <FaGithub />
          </a>
          <a
            className="linkedin-nav"
            target="_blank"
            href="https://www.linkedin.com/in/dejan-vujovic/"
          >
            <FaLinkedin />
          </a>
        </div>
        <div className="footer-navbar">
          <p>© 2022 Dejan Rent a Car</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth: { currentUser } }) => {
  return { currentUser };
};

export default connect(mapStateToProps)(Sidebar);
