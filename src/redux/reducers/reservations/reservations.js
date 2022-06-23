const CREATE_RESERVATION = 'reservations/CREATE_RESERVATION';
const GET_RESERVATIONS = 'reservations/GET_RESERVATIONS';
const DELETE_RESERVATION = 'reservation/DELETE_RESERVATION';

const initialState = [];

export const createReservation = (payload) => ({
  type: CREATE_RESERVATION,
  payload,
});

export const getReservations = (payload) => ({
  type: GET_RESERVATIONS,
  payload,
});

export const deleteReservation = (payload) => ({
  type: DELETE_RESERVATION,
  payload,
});

export const addReservationToAPI = (payload) => async (dispatch) => {
  const token = localStorage.getItem('token');
  const response = await fetch('https://final-capstone-back.herokuapp.com/api/v1/reservations', {
    method: 'POST',
    headers: {
      Authorization: `${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
  const data = await response.json();
  dispatch(createReservation(data));
};

export const getReservationsFromAPi = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  const response = await fetch('https://final-capstone-back.herokuapp.com/api/v1/reservations', {
    headers: {
      Authorization: `${token}`,
    },
  });
  const data = await response.json();
  dispatch(getReservations(data));
};

export const deleteReservationFromApi = (id) => async (dispatch) => {
  const token = localStorage.getItem('token');
  await fetch(`https://final-capstone-back.herokuapp.com/api/v1/reservations/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `${token}`,
    },
  });
  dispatch(deleteReservation(id));
};

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_RESERVATION:
      return [...state, action.payload];
    case GET_RESERVATIONS:
      return action.payload;
    case DELETE_RESERVATION:
      return state.filter((reservation) => reservation.id !== action.payload);
    default:
      return state;
  }
};
export default reservationsReducer;
