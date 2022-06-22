import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Reservations from '../../../pages/reservations/Reservations';
import store from '../../../redux/configureStore';

it('should send reservations correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <Reservations />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
