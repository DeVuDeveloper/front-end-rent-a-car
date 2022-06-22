import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Paginate from '../../../components/cars/Paginate';
import store from '../../../redux/configureStore';

it('should render Paginate component correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <Paginate />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
