import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../redux/configureStore';
import authReducer, * as actions from '../../redux/reducers/auth';
import Login from '../../pages/splashcreen/Login';

const user = {
  name: 'Some',
  email: 'some@mail.com',
  password: '1234567',
};

describe('login component', () => {
  it('snapshot', () => {
    const component = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Login />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});

describe('if authentication reducer works properly', () => {
  const initialState = {
    currentUser: {},
  };

  const obj = authReducer(initialState, actions.authenticated(user));

  it('has user details', () => {
    expect(obj.currentUser).toEqual(user);
  });

  it('if current user', () => {
    const { name, email, password } = obj.currentUser;
    expect(name).toEqual('Some');
    expect(email).toEqual('some@mail.com');
    expect(password).toEqual('1234567');
  });
});
