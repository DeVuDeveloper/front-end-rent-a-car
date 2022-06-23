import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';
import { BiFastForwardCircle } from 'react-icons/bi';
import { carId } from '../../redux/reducers/reservations/carId';
import Sidebar from '../../components/navigation/Sidebar';
import Hamburger from '../../components/navigation/Hamburger';

import './carinfo.css';

const CarDetails = () => {
  const { Id } = useParams();
  const [car, setCar] = useState({});
  const fetchCar = async () => {
    const res = await fetch(`https://final-capstone-back.herokuapp.com/api/v1/cars/${Id}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    });
    const data = await res.json();
    setCar(data);
  };
  useEffect(() => {
    fetchCar();
  }, []);

  const dispatch = useDispatch();

  const setCarId = () => {
    dispatch(carId(car.id));
  };

  return (
    <section className="car-details">
      <Hamburger pageWrapId="page-wrap" outerContainerId="outer-container" />
      <div className="navbar">
        <Sidebar />
      </div>
      <div className="car-info" id={carId}>
        <div className="car-image">
          <img className="car-photo" src={car.photo} alt="" />
        </div>
        <div className="info-wrapper">
          <div className="column">
            <div className="car-info-name">
              <h2 className="rocket-name">{car.car_model}</h2>
              <p>-$250 deposit upon any Rental Purchase!</p>
            </div>
            <ul className="infos">
              <li className="rocket-name">
                <p>price for day:</p>
                <p>{car.price_per_day}</p>
              </li>
              <li className="rocket-name">
                <p>Car type:</p>
                <p>{car.car_type}</p>
              </li>
            
              <li className="discount">
                <p>
                  5.9% APR-
                  <span>Discount</span>
                </p>
              </li>
            </ul>
          </div>
          <div className="button">
            <NavLink to="/add_reservations">
              <button
                className="reserve-button"
                type="button"
                onClick={() => setCarId(car.id)}
              >
                <h3>Reserve</h3>
                <BiFastForwardCircle />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;
