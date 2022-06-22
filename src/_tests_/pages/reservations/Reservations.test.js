import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../../redux/configureStore';
import Reservations from '../../../pages/reservations/Reservations';

it('should render Paginate component correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <Reservations />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
