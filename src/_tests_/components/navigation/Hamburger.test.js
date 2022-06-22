import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Hamburger from '../../../components/navigation/Hamburger';
import store from '../../../redux/configureStore';

it('should render Sidebar correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <Hamburger />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
