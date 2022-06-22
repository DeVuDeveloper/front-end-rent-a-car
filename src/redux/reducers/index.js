import { combineReducers } from 'redux';
import authReducer from './auth';
import carsReducer from './cars';
import reservationsReducer from './reservations/reservations';
import carIdReducer from './reservations/carId';

export default combineReducers({
  auth: authReducer,
  cars: carsReducer,
  reserve: reservationsReducer,
  carId: carIdReducer,
});
