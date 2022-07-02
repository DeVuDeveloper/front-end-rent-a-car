const CREATE_CAR = 'carStore/cars/CREATE_CARS';
const GET_CARS = 'carStore/cars/GET_CARS';
const DELETE_CAR = 'carStore/ca/DELETE_CAR';
const BASE_URL = 'http://localhost:3001';

const initialState = [];

export const getCars = (payload) => ({
  type: GET_CARS,
  payload,
});

export const createCar = (payload) => ({
  type: CREATE_CAR,
  payload,
});

export const addCarToAPI = (car) => async (adding) => {
  const response = await fetch(`${BASE_URL}/api/v1/cars`, {
    method: 'POST',
    body: car,
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  });

  if (response.ok) {
    adding(createCar(car));
  }
};

export const getCarsFromAPI = () => async (storing) => {
  const result = await fetch(`${BASE_URL}/api/v1/cars`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
  });

  const carsData = await result.json()
  storing(getCars(carsData.data));
};

export const removeCar = (payload) => ({
  type: DELETE_CAR,
  payload,
});

export const removeCarFromAPI = (id) => async (dispatch) => (
  fetch(`${BASE_URL}/api/v1/cars/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
    method: 'DELETE',
  })
    .then((response) => response.json())
    .then(dispatch(removeCar(id)))

);

const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARS:
      return [...action.payload];
    case CREATE_CAR:
      return [...action.payload];
    case DELETE_CAR:
      return state.filter((car) => car.id !== action.payload);
    default:
      return state;
  }
};

export default carsReducer;
