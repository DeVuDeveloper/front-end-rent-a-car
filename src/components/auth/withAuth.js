/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { checkAuth } from '../../actions/auth';
import LoadingSpinner from '../LoadingSpinner';
import Splash from '../../pages/splashcreen/SplashScreen';

const withAuth = (WrappedComponent) => {
  class Wrapper extends React.Component {
    componentDidMount() {
      this.props.dispatchCheckAuth();
    }

    render() {
      if (!this.props.authChecked) {
        return <LoadingSpinner />;
      } if (!this.props.loggedIn) {
        return (
          <>
            <p className="w-11/12 max-w-2xl mx-auto my-4 text-red-500 text-center">You need to login to view this page.</p>
            <Splash />
          </>
        );
      }
      return <WrappedComponent {...this.props} />;
    }
  }

  const mapStateToProps = ({
    auth: { authChecked, loggedIn, currentUser },
  }) => ({ authChecked, loggedIn, currentUser });

  const mapDispatchToProps = (dispatch) => ({
    dispatchCheckAuth: () => dispatch(checkAuth()),
  });

  return connect(mapStateToProps, mapDispatchToProps)(Wrapper);
};

export default withAuth;
