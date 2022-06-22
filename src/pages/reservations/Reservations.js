import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SingleReservation from './SingleReservation';
import Sidebar from '../../components/navigation/Sidebar';
import Hamburger from '../../components/navigation/Hamburger';
import { getReservationsFromAPi } from '../../redux/reducers/reservations/reservations';
import './reservations.css';

function Reservations() {
  const reservations = useSelector((state) => state.reserve);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReservationsFromAPi());
  }, [dispatch]);
  return (
    <section className="my-reservations">
      <Hamburger />
      <div className="navbar">
        <Sidebar />
      </div>
      <div className="car-reservations">
        <div className="reservation-title">
          <h2>Reservations</h2>
        </div>
        <div className="reservations-loop">
          {reservations && reservations.map((reservation) => (
            <SingleReservation reservation={reservation} key={reservation.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reservations;
