/* eslint-disable arrow-body-style */
/* eslint-disable no-confusing-arrow */
/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../assets/images/logo.png';
import twitter from '../../assets/images/twitter-icon.png';
import facebook from '../../assets/images/facebook-icon.png';
import linkedin from '../../assets/images/linkedin-icon.png';
import github from '../../assets/images/github-icon.png';
import Logout from '../auth/Logout';
import './sidebar.css';

const social = [
  { icon: twitter },
  { icon: facebook },
  { icon: linkedin },
  { icon: github },
];

const Sidebar = ({ currentUser }) => {
  return (
    <div className="flex flex-col w-64 sidebar-wrapper">
      <span className="nav-header">
        <h2>Rent a Car</h2>
      </span>

      <span className="user-mail">
      <img src={currentUser.image_url} className="w-40" alt="logo" />
        
        </span>
          
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
      <div className="flex-shrink-0 flex-200 p-4">
        <div className="flex gap-2">
          {social.map((item) => (
            <a href="/home" key={item.icon}>
              <img src={item.icon} alt="social-icon" className="w-6" />
            </a>
          ))}
        </div>
        <p className="text-gray-700 font-bold mt-2">© 2022</p>
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth: { currentUser } }) => {
  console.log(currentUser)
  return { currentUser };
  
};

export default connect(mapStateToProps)(Sidebar);
