/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import PropTypes from 'prop-types';
import {
  TiSocialTwitterCircular,
  TiSocialLinkedinCircular,
  TiSocialGithubCircular,
} from 'react-icons/ti';
import { Link } from 'react-router-dom';
import './singlecar.css';

const SingleCar = ({ id, carModel, carDescription, carImg }) => (
  <div className="car-home" id={id}>
    <Link to={`/CarDetails/${id}`}>
      <div className="img-container">
        <img src={carImg} alt="" className="one-image" />
      </div>
    </Link>
    <div className="car-model">
      <h2 className="car-name">{carModel}</h2>

      <hr />
      <div>
        <h2 className="description">{carDescription}</h2>
      </div>
    </div>
    <div className="social-car">
      <a className="twitter" target="_blank" href="https://twitter.com/home">
        <TiSocialTwitterCircular size="2em" />
      </a>
      <a className="github" target="_blank" href="https://github.com/VuDej">
        <TiSocialGithubCircular size="2em" />
      </a>
      <a
        className="linkedin"
        target="_blank"
        href="https://www.linkedin.com/in/dejan-vujovic/"
      >
        <TiSocialLinkedinCircular size="2em" />
      </a>
    </div>
  </div>
);

SingleCar.propTypes = {
  id: PropTypes.number.isRequired,
  carModel: PropTypes.string.isRequired,
  carDescription: PropTypes.string.isRequired,
  carImg: PropTypes.string.isRequired,
};

export default SingleCar;
