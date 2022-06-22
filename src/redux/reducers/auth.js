import { AUTHENTICATED, NOT_AUTHENTICATED } from '../../actions';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

const initialState = {
  authChecked: false,
  loggedIn: false,
  currentUser: {},
};

export const authenticated = (payload) => ({
  type: AUTHENTICATED,
  payload,
});

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return {
        authChecked: true,
        loggedIn: true,
        currentUser: action.payload,
      };

    case NOT_AUTHENTICATED:
      return {
        authChecked: true,
        loggedIn: false,
        currentUser: {},
      };
    default:
      return state;
  }
};
export default authReducer;
