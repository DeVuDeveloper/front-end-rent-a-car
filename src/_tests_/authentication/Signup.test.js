import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Signup from '../../pages/splashcreen/Signup';
import store from '../../redux/configureStore';

it('Signup renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <Signup />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
