/* eslint-disable camelcase */
import { useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TiArrowBackOutline } from 'react-icons/ti';
import { checkAuth } from '../../actions/auth';
import { addReservationToAPI } from '../../redux/reducers/reservations/reservations';
import Hamburger from '../../components/navigation/Hamburger';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import './addreservation.css';

const validationSchema = Yup.object().shape({
  pick_up_day: Yup.date()
    .default(() => new Date())
    .required('*Pick up date is required'),
  return_day: Yup.date()
    .when(
      'pick_up_day',
      (pickUp, yup) =>
        pickUp &&
        yup.min(pickUp, 'Pick up date cannot be greater than return day date')
    )
    .required('*Return day date is required'),
});

const Reserve = () => {
  const user = useSelector(checkAuth);
  const carsArr = useSelector((state) => state.cars);
  const dispatch = useDispatch();
  const history = useHistory();
  const [car_id, setCarId] = useState('');

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

      <Formik
        initialValues={{
          pick_up_day: '',
          return_day: '',
          pick_up_city: '',
          return_city: '',
          user_id: user.id,
          car_id,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          dispatch(addReservationToAPI(values));
          setCarId('');
          resetForm();
          setSubmitting(false);
          history.push('/reservations');
          toast.success('Reservation added succesfully')
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className="reservation-form">
            <div className="reservation-flex">
              <input
                name="pick_up_day"
                onChange={handleChange}
                type="date"
                value={values.pick_up_day}
                onBlur={handleBlur}
                required
              />
              <input
                name="return_day"
                onChange={handleChange}
                type="date"
                value={values.return_day}
                onBlur={handleBlur}
              />

              <select
                value={values.pick_up_city}
                name="pick_up_city"
                onChange={handleChange}
                onBlur={handleBlur}
                id="return-city"
                required
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
                value={values.return_city}
                name="return_city"
                onChange={handleChange}
                onBlur={handleBlur}
                id="return-city"
                required
              >
                <option value="" selected disabled hidden>
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
              <select
                className="reservation-car-name"
                name="car_id"
                id="reservation-car-name"
                value={values.car_id}
                onChange={handleChange}
                required
              >
                <option value="" selected disabled hidden>
                  Model
                </option>
                {carsArr.map((car) => (
                  <option key={car.id} value={car.id}>
                    {car.carModel}
                  </option>
                ))}
              </select>
            </div>
            <div className="reservation-button-container">
              <button
                className="add-reservation-btn"
                type="submit"
                disabled={isSubmitting}
              >
                Add Reservation
              </button>
            </div>
            <div className="error-input">
              {touched.return_day && errors.return_day ? (
                <div className="error-msg">{errors.return_day}</div>
              ) : null}
            </div>
          </form>
        )}
      </Formik>
    </section>
  );
};
export default Reserve;
