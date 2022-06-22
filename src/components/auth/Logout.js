/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/auth';

const Logout = ({ dispatchLogoutUser }) => {
  const history = useHistory();

  const handleClick = () => {
    dispatchLogoutUser().then(() => history.push('/'));
  };

  return (
    <button type="button" className="logout" onClick={handleClick}>
      <h4>LOGOUT</h4>
    </button>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchLogoutUser: () => dispatch(logoutUser()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
