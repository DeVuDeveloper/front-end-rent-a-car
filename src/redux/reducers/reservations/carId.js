const CAR_ID = 'reservations/setId/CAR_ID';

export const carId = (payload) => ({
  type: CAR_ID,
  payload,
});

const carIdReducer = (state = [], action) => {
  switch (action.type) {
    case CAR_ID:
      return action.payload;

    default:
      return state;
  }
};

export default carIdReducer;
