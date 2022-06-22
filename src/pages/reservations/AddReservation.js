/* eslint-disable camelcase */
import { useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TiArrowBackOutline } from 'react-icons/ti';
import { checkAuth } from '../../actions/auth';
import { addReservationToAPI } from '../../redux/reducers/reservations/reservations';
import Hamburger from '../../components/navigation/Hamburger';
import './addreservation.css';

const AddReservation = () => {
  const user = useSelector(checkAuth);
  const carId = useSelector((state) => state.carId);

  const [pick_up_day, setPickUpDay] = useState('');
  const [return_day, setReturnDay] = useState('');
  const [pick_up_city, setPickUpCity] = useState('');
  const [return_city, setReturnCity] = useState('');
  const dispatch = useDispatch();
  const ChangePickUpDay = (element) => setPickUpDay(element.target.value);
  const ChangeReturnDay = (element) => setReturnDay(element.target.value);
  const ChangePickUpCity = (element) => setPickUpCity(element.target.value);
  const ChangeReturnCity = (element) => setReturnCity(element.target.value);

  const history = useHistory();

  const submitReservation = (e) => {
    e.preventDefault();
    history.push('/reservations');
    window.location.reload(true);
    const reserve = {
      user_id: user.id,
      car_id: carId,
      pick_up_day,
      return_day,
      pick_up_city,
      return_city,
    };

    dispatch(addReservationToAPI(reserve));

    setPickUpDay('');
    setReturnDay('');
    setPickUpCity('');
    setReturnCity('');
  };

  return (
    <section className="form-wrapper">
      <Hamburger />
      <div className="back">
        <NavLink to="/home" exact="true">
          <TiArrowBackOutline className="back-button" />
        </NavLink>
      </div>
      <h3 className="add-reservation-title">MAKE YOUR RESERVATION</h3>
      <hr className="line" />
      <h5 className="reservation-description">
        We pride ourselves on providing world class service, catering to a range
        of customer needs, with car rental deals available all year round. So
        whether you are looking for car rental in Montenegro on a budget, or you
        want to rent a luxury car for a special event.
      </h5>
      <form onSubmit={submitReservation} className="reservation-form">
        <div className="reservation-flex">
          <input
            value={pick_up_day}
            onChange={ChangePickUpDay}
            type="date"
            placeholder="Car name"
            required
          />
          <input
            value={return_day}
            onChange={ChangeReturnDay}
            type="date"
            placeholder="Seats"
            required
          />

          <select
            className="reservation-city"
            value={pick_up_city}
            onChange={ChangePickUpCity}
            name="pick-up-city"
            id="pick-up-city"
          >
            <option value="" selected disabled hidden>
              Pick up City
            </option>
            <option value="Paris">Paris</option>
            <option value="London">London</option>
            <option value="Munich">Munich</option>
            <option value="Oslo">Oslo</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Prague">Prague</option>
            <option value="Budapest">Budapest</option>
            <option value="Milan">Milan</option>
            <option value="Palermo">Palermo</option>
          </select>

          <select
            className="return-city"
            value={return_city}
            onChange={ChangeReturnCity}
            name="return-city"
            id="return-city"
          >
            <option value="drop_off_city" selected disabled hidden>
              Return City
            </option>
            <option value="Palermo">Palermo</option>
            <option value="Prague">Prague</option>
            <option value="Budapest">Budapest</option>
            <option value="Milan">Milan</option>
            <option value="Paris">Paris</option>
            <option value="London">London</option>
            <option value="Munich">Munich</option>
            <option value="Oslo">Oslo</option>
            <option value="Barcelona">Barcelona</option>
          </select>
        </div>
        <div className="reservation-button-container">
          <button className="add-reservation-btn" type="submit">
            Add Reservation
          </button>
        </div>
      </form>
    </section>
  );
};
export default AddReservation;
