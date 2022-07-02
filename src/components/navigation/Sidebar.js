/* eslint-disable arrow-body-style */
/* eslint-disable no-confusing-arrow */
/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import logo from '../../assets/images/logo.png';
import {
  FaTwitter, FaFacebookF, FaGithub, FaLinkedin,
} from 'react-icons/fa';
import Logout from '../auth/Logout';
import { AUTHENTICATED, NOT_AUTHENTICATED } from '../../actions/index';
import { toast } from 'react-toastify';

import './sidebar.css';

const Sidebar = ({ currentUser }) => {
  const dispatch = useDispatch();
  const { register } = useForm();
  const history = useHistory();
  const getToken = () => {
    const now = new Date(Date.now()).getTime();
    const thirtyMinutes = 1000 * 60 * 30;
    const timeSinceLastLogin = now - localStorage.getItem('lastLoginTime');
    if (timeSinceLastLogin < thirtyMinutes) {
      return localStorage.getItem('token');
    }
  };

  const record_id = currentUser.image.record.id

  const updateUser = (user) => (dispatch) =>
  fetch(`http://localhost:3001/current_user/${record_id})`, {
    method: 'PATCH',
    body: user,
    headers: {
      
      Authorization: getToken(),
    },
  }).then(async (data) => {
    if (data.ok) {
      const user = await data.json();
      return dispatch({ type: AUTHENTICATED, payload: user });
    }
    return Promise.reject(dispatch({ type: NOT_AUTHENTICATED }));
  });

  function formData(event) {
    const data = new FormData();
    if (event.target.image.files.length !== 0)
      data.append('user[image]', event.target.image.files[0]);
    return data;
  }

  const OnSubmit = async (event) => {
    event.preventDefault();
    if (event.target.image.files.length !== 0) {
    const data = formData(event);
    const response = await dispatch(updateUser(data));
    if (response) event.target.reset();
    history.push('./home')
    toast.success('Updating image');
    }
  };

  return (
    <div className="flex flex-col w-64 sidebar-wrapper">
      <span className="nav-header">
        <h2>Rent a Car</h2>
      </span>

    <div>
      <form className="form-img" onSubmit={(e) => OnSubmit(e)} method="patch">
        <small>
        <h4>{currentUser.name}</h4>
          <label htmlFor="file-input">
            <img src={currentUser.image_url} className="user-photo" alt="logo" />
          </label>
        <input type="file" id="file-input" accept=".jpg,.jpeg,.png" style={{ display: 'none' }} 
          {...register('image', { required: true })}
        />
       </small>
     <span className="update-img">
        <button type="submit">
        update image
        </button>
      </span>
      </form>
      </div>

      <div className="flex-1 flex flex-col pt-3 pb-4">
        <div className="flex items-center flex-shrink-0 px-4">
          <img src={logo} className="w-40" alt="logo" />
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
                  className={({ isActive }) =>
                    isActive ? 'active' : 'inactive'
                  }
                >
                  <p>ADD CAR</p>
                </NavLink>
              )}

              {currentUser.role === 'admin' && (
                <NavLink
                  to="/delete"
                  className={({ isActive }) =>
                    isActive ? 'active' : 'inactive'
                  }
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
