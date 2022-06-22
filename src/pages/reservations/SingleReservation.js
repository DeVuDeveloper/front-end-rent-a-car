import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteReservationFromApi } from '../../redux/reducers/reservations/reservations';
import DaysOfRental from './Count';

const SingleReservation = (props) => {
  const { reservation } = props;
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars);
  const totalPriceOfRental = (id) => {
    let total = 0;
    cars.forEach((car) => {
      if (car.id === id) {
        total += DaysOfRental(reservation.pick_up_day, reservation.return_day) * car.rentPrice;
      }
    });
    return total;
  };

  const getCarModel = (id) => {
    let carModel = '';
    cars.forEach((car) => {
      if (car.id === id) {
        carModel = car.carModel;
      }
    });
    return carModel;
  };

  const [name, setName] = useState('');
  useEffect(() => {
    Axios.get('http://localhost:3001/current_user', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    }).then((response) => {
      setName(response.data.name);
    });
  }, []);

  return (
    <section className="reservation">
      <table id="cars">
        <tr>
          <th>Car</th>
          <th>User</th>
          <th>Pick Up Day</th>
          <th>Return Day</th>
          <th>Pick up City</th>
          <th>Return City</th>
          <th>Total Days</th>
          <th>Total Price</th>
        </tr>
        <tr>
          <td>{getCarModel(reservation.car_id)}</td>
          <td>{name}</td>
          <td>{reservation.pick_up_day}</td>
          <td>{reservation.return_day}</td>
          <td>{reservation.pick_up_city}</td>
          <td>{reservation.return_city}</td>
          <td>
            {DaysOfRental(reservation.pick_up_day, reservation.return_day)}
          </td>
          <td>
            $
            {
            totalPriceOfRental(reservation.car_id)
            }
          </td>
        </tr>
      </table>

      <div className="car-reserve-btn">
        <button
          type="button"
          className="btn btn-outline-danger reservation-button"
          onClick={() => dispatch(deleteReservationFromApi(reservation.id))}
        >
          Cancel
        </button>
      </div>
    </section>
  );
};

SingleReservation.propTypes = {
  reservation: PropTypes.instanceOf(Object).isRequired,
};
export default SingleReservation;
