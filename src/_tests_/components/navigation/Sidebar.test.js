import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Sidebar from '../../../components/navigation/Sidebar';
import store from '../../../redux/configureStore';

it('should render Sidebar correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <Sidebar />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
