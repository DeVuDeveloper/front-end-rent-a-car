import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import CarDetails from '../../../pages/CarDetails/CarDetails';
import store from '../../../redux/configureStore';

it('should render CarDetails component correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <CarDetails />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
