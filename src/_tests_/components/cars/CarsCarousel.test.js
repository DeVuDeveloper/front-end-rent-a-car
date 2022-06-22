import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import CarsCarousel from '../../../components/cars/CarsCarousel';
import store from '../../../redux/configureStore';

it('should render CarCarousel component correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <CarsCarousel />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
