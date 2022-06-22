/* eslint-disable arrow-body-style */
/* eslint-disable react/display-name */
/* eslint-disable no-unused-vars */
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './hamburger.css';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {  logoutUser, checkAuth } from '../../actions/auth';

const Hamburger = () => {
  const isAuthenticated = useSelector(checkAuth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(logoutUser);
  };

  return (
    <div className="hamburger-menu">
      <Menu>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              <p>HOME</p>
            </NavLink>
          </li>
          <li>
            {/* {role === 'admin' && ( */}
            <NavLink
              to="/add_car"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              <p>ADD CAR</p>
            </NavLink>
            {/* )} */}
          </li>

          <li>
            <NavLink
              to="/reserve"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              <p>RESERVE</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reservations"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              <p>RESERVATIONS</p>
            </NavLink>
          </li>

          <li>
            {/* {role === 'admin' && ( */}
            <NavLink
              to="/delete"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              <p>DELETE CAR</p>
            </NavLink>
            {/* )} */}
          </li>

          {isAuthenticated && (
            <li className="log-out">
              <a href="/" type="button" onClick={handleLogout}>
                LOGOUT
              </a>
            </li>
          )}
        </ul>
      </Menu>
    </div>
  );
};
export default Hamburger;
