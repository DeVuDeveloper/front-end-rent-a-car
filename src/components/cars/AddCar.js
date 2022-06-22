/* eslint-disable camelcase */
import { useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TiArrowBackOutline } from 'react-icons/ti';
import { checkAuth } from '../../actions/auth';
import { addCarToAPI } from '../../redux/reducers/cars';
import Hamburger from '../navigation/Hamburger';
import './addCar.css';

const AddCar = () => {
  const user = useSelector(checkAuth);
  const [car_model, setCarModel] = useState('');
  const [description, setCarDescription] = useState('');
  const [car_type, setCarType] = useState('');
  const [photo, setPhoto] = useState('');
  const [transmission, setTransmission] = useState('');
  const [price_per_day, setPricePerDay] = useState('');

  const dispatch = useDispatch();
  const changeCarModel = (element) => setCarModel(element.target.value);
  const changeCarDescription = (element) => setCarDescription(element.target.value);
  const changeCarType = (element) => setCarType(element.target.value);
  const changePhoto = (element) => setPhoto(element.target.value);
  const ChangeTransmission = (element) => setTransmission(element.target.value);
  const changePricePerDay = (element) => setPricePerDay(element.target.value);

  const history = useHistory();

  const submitCar = (e) => {
    e.preventDefault();
    history.push('/home');
    window.location.reload(true);
    const car = {
      user_id: user.id,
      car_model,
      description,
      car_type,
      photo,
      transmission,
      price_per_day,
    };

    dispatch(addCarToAPI(car));

    setCarModel('');
    setCarDescription('');
    setPhoto('');
    setCarType('');
    setTransmission('');
    setPricePerDay('');
  };

  return (
    <section className="form-wrapper">
      <Hamburger />
      <div className="back">
        <NavLink to="/home" exact="true">
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
      <form onSubmit={submitCar} className="add-car-form">
        <div className="add-car-columns">
          <div className="input-group1">
            <input
              value={car_model}
              onChange={changeCarModel}
              type="text"
              placeholder="Car Model"
              required
            />
            <input
              value={description}
              onChange={changeCarDescription}
              type="text"
              placeholder="Description"
            />
          </div>
          <div className="input-group2">
            <select
              className="car-type"
              value={car_type}
              onChange={changeCarType}
              name="car-type"
              id="car-type"
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
              value={photo}
              onChange={changePhoto}
              type="url"
              placeholder="Car's Image"
              required
            />

            <select
              className="transmission"
              value={transmission}
              onChange={ChangeTransmission}
              name="transmisson"
              id="transmission"
            >
              <option value="" selected disabled hidden>
                Car Transmission
              </option>
              <option value="automatic">Automatic</option>
              <option value="manual">Manual</option>
            </select>

            <input
              value={price_per_day}
              onChange={changePricePerDay}
              type="number"
              placeholder="Rent Price per day"
              required
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
