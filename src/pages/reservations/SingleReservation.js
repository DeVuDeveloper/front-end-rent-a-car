import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import { deleteReservationFromApi } from '../../redux/reducers/reservations/reservations';
import DaysOfRental from './Count';
import './singlereservations.css'

const SingleReservation = (props) => {
  const { reservation, currentUser } = props;
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

  async function handleToken(token, addresses) {
    toast("Success! Check email for details")
    console.log(token ,addresses)
  }

  return (
    <section className="reservation">
      <table id="cars">
      <tbody>
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
        </tbody>
        <tbody>
        <tr>
          <td>{getCarModel(reservation.car_id)}</td>
          <td>{currentUser.name}</td>
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
        </tbody>
      </table>

      <div className="car-reserve-btn">
      <StripeCheckout
        stripeKey="pk_test_51KUvSuDpj7jTYWWqkzXo7N1iH3trRhi8h3v4OZSCz4fzAOdaEtnedPkpE74nPto8tEehF9eyQPqB4erTuC0nquUS0082etO4HX"
        token={handleToken}
        amount={totalPriceOfRental(reservation.car_id) * 100}
        name={getCarModel(reservation.car_id)}
        billingAddress
        shippingAddress
      />
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
const mapStateToProps = ({ auth: { currentUser } }) => {
  return { currentUser };
};

export default connect(mapStateToProps)(SingleReservation);
