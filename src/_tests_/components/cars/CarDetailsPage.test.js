import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import CarDetailsPage from '../../../pages/CarDetails/CarDetailsPage';
import store from '../../../redux/configureStore';

it('should render CarDetailsPage component correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <CarDetailsPage />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
