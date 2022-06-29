/* eslint-disable camelcase */
// import { useState } from 'react';
import {  NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TiArrowBackOutline } from 'react-icons/ti';
import { checkAuth } from '../../actions/auth';
import { addCarToAPI } from '../../redux/reducers/cars';
import Hamburger from '../navigation/Hamburger';
import './addCar.css';[0]

const AddCar = () => {
  const dispatch = useDispatch();
  const user = useSelector(checkAuth);
  const history = useHistory();
  function formData(event) {
    const data = new FormData();
    data.append('car[car_model]', event.target.car_model.value);
    data.append('car[transmission]', event.target.transmission.value);
    data.append('car[car_type]', event.target.car_type.value);
    data.append('car[description]', event.target.description.value);
    data.append('car[price_per_day]', event.target.price_per_day.value);
    data.append('car[user_id]', user.id);
    if (event.target.image.files.length !== 0) data.append('car[image]', event.target.image.files[0]);
   return data;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = formData(event);
    const response = await dispatch(addCarToAPI(data));
    if (response) event.target.reset();
    history.push('/home');
    window.location.reload(true);
  };

  return (
    <section className="form-wrapper">
      <Hamburger />
      <div className="back">
        <NavLink to="/home">
          <TiArrowBackOutline className="back-button" />
        </NavLink>
      </div>
      
      <h3 className="add-car-title">ADD CAR</h3>
      <hr className="line" />
      <h5 className="reservation-description">
        We pride ourselves on providing world class service, catering to a range
        of customer needs, with car rental deals available all year round. So
        whether you are looking for car rental in Montenegro on a budget, or you
        want to rent a luxury car for a special event.
      </h5>
      <form onSubmit={(e) => handleSubmit(e)} className="add-car-form">
        <div className="add-car-columns">
          <div className="input-group1">
            <input
              name="car_model"
              type="text"
              placeholder="Car Model"
              required
            />
            <input
              name="description"
              type="text"
              placeholder="Description"
              required
            />
          </div>
          <div className="input-group2">
            <select
              className="car-type"
              name="car_type"
              id="car-type"
              required
            >
              <option value="" selected disabled hidden>
                Car Type
              </option>
              <option value="SUV">SUV</option>
              <option value="VAN">SUV</option>
              <option value="TRUCK">TRUCK</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Crossover">Crossover</option>
              <option value="Convertible">Convertible</option>
              <option value="Sedan">Sedan</option>
              <option value="Sports Car">Sports Car</option>
              <option value="Coupe">Coupe</option>
              <option value="Minivan">Minivan</option>
            </select>

            <input
              type="file"
              placeholder="Car's Image"
              name="image"
              className="file-input-car"
              accept="image/png, image/jpeg" 
              id="image"
              required
            />

            <select
              className="transmission"
              name="transmisson"
              id="transmission"
              required
            >
              <option value="" selected disabled hidden>
                Car Transmission
              </option>
              <option value="automatic">Automatic</option>
              <option value="manual">Manual</option>
            </select>

            <input
              name="price_per_day"
              type="number"
              placeholder="Rent Price per day"
              required
              min="20"
            />
          </div>
        </div>

        <div className="reservation-button-container">
          <button className="add-car-btn" type="submit">
            Add Car
          </button>
        </div>
      </form>
    </section>
  );
};
export default AddCar;
